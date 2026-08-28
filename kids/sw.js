/**
 * Service Worker: Kids Learn & Speak PWA Offline Engine (v2)
 * Features:
 * - Full offline capability for audio, images, and fonts
 * - Range Request support (crucial for iOS Safari offline <audio> playback)
 * - Cache-First for static media assets
 * - Stale-While-Revalidate for app shell code (HTML/JS/CSS)
 */

const CACHE_NAME = 'kids-learn-cache-v2';

const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './app-icon.svg'
];

// 1. Install: Precache shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('[SW] Precache partial error:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// 2. Activate: Clean up old cache versions & take immediate control
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

/**
 * Handles HTTP Range requests for cached audio (Required by Safari iOS)
 */
async function handleRangeRequest(request, cacheResponse) {
  const rangeHeader = request.headers.get('range');
  if (!rangeHeader || !cacheResponse) {
    return cacheResponse;
  }

  try {
    const arrayBuffer = await cacheResponse.arrayBuffer();
    const bytes = rangeHeader.replace(/bytes=/, '').split('-');
    const start = parseInt(bytes[0], 10) || 0;
    const end = bytes[1] ? parseInt(bytes[1], 10) : arrayBuffer.byteLength - 1;

    if (start >= arrayBuffer.byteLength || end >= arrayBuffer.byteLength) {
      return new Response('', {
        status: 416,
        statusText: 'Range Not Satisfiable',
        headers: {
          'Content-Range': `bytes */${arrayBuffer.byteLength}`
        }
      });
    }

    const slicedBuffer = arrayBuffer.slice(start, end + 1);
    return new Response(slicedBuffer, {
      status: 206,
      statusText: 'Partial Content',
      headers: {
        'Content-Type': cacheResponse.headers.get('Content-Type') || 'audio/mpeg',
        'Content-Length': slicedBuffer.byteLength.toString(),
        'Content-Range': `bytes ${start}-${end}/${arrayBuffer.byteLength}`,
        'Accept-Ranges': 'bytes'
      }
    });
  } catch {
    return cacheResponse;
  }
}

// 3. Fetch: Intelligent caching & offline serving
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Ignore non-GET requests and analytics tracking
  if (request.method !== 'GET') return;
  if (url.hostname.includes('posthog.com') || url.hostname.includes('google-analytics.com')) {
    return;
  }

  // Strategy A: Audio, Images & Google Fonts -> Cache-First with Range handling
  if (
    url.pathname.includes('/images/') ||
    url.pathname.includes('/audio/') ||
    url.hostname.includes('fonts.googleapis.com') ||
    url.hostname.includes('fonts.gstatic.com') ||
    url.pathname.endsWith('.webp') ||
    url.pathname.endsWith('.mp3') ||
    url.pathname.endsWith('.svg') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.jpg')
  ) {
    event.respondWith(
      caches.match(request, { ignoreSearch: true }).then(async (cachedResponse) => {
        if (cachedResponse) {
          if (request.headers.get('range')) {
            return handleRangeRequest(request, cachedResponse);
          }
          return cachedResponse;
        }

        try {
          const networkResponse = await fetch(request);
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return networkResponse;
        } catch {
          return new Response('', { status: 408, statusText: 'Offline Asset Unavailable' });
        }
      })
    );
    return;
  }

  // Strategy B: App Shell (HTML, JS, CSS) -> Stale-While-Revalidate
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});
