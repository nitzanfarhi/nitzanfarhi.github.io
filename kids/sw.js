/**
 * Service Worker: Kids Learn & Speak PWA Offline Engine
 * Caching strategies:
 * - Cache-First for static images, animal sounds, UI audio, and Google Fonts
 * - Stale-While-Revalidate for app shell scripts and styles
 * - Network-Only for analytics (PostHog)
 */

const CACHE_NAME = 'kids-learn-cache-v1';

const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './app-icon.svg'
];

// 1. Install: Precache app shell
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

// 3. Fetch: Intelligent offline caching
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Ignore non-GET requests or browser-extension/analytics URLs
  if (request.method !== 'GET') return;
  if (url.hostname.includes('posthog.com') || url.hostname.includes('google-analytics.com')) {
    return;
  }

  // Strategy A: Audio, Images & Google Fonts -> Cache-First with Dynamic Fallback
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
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, responseToCache);
              });
            }
            return networkResponse;
          })
          .catch(() => {
            // Return empty response or fail silently for non-critical assets
            return new Response('', { status: 408, statusText: 'Offline Asset' });
          });
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
