---
permalink: /projects/
title: "Projects"
excerpt: "Featured engineering, security research tooling, and interactive web applications."
author_profile: true
redirect_from: 
  - /projects.html
---

{% include base_path %}

A selection of research tooling, security machine learning systems, and interactive web applications.

---

## Interactive Web Applications

<div class="list__item">
  <article class="archive__item">
    <h3 class="archive__item-title">
      <a href="/kids/" target="_blank">Kids Learn &amp; Speak — למד לדבר</a>
    </h3>
    <p class="archive__item-excerpt">
      An interactive, audio-visual educational Progressive Web App designed for toddlers and early learners. Features real-time speech synthesis, friendly Hebrew &amp; English pronunciation, tactile sound feedback, visual flashcards, and category navigation. Engineered for zero latency with full offline PWA support.
    </p>
    <p>
      <a href="/kids/" class="btn btn--primary" target="_blank"><i class="fas fa-play"></i> Launch App</a>
      <span class="badge" style="margin-left: 8px; padding: 4px 8px; background: #e2e8f0; border-radius: 4px; font-size: 0.85em; color: #334155;">Offline PWA · Hebrew &amp; English · Speech API</span>
    </p>
  </article>
</div>

<div class="list__item">
  <article class="archive__item">
    <h3 class="archive__item-title">
      <a href="/glucose/" target="_blank">Glucose Tracker — מעקב סוכר</a>
    </h3>
    <p class="archive__item-excerpt">
      A lightweight, mobile-first diabetic blood glucose tracker built as an offline-first Progressive Web App. Includes custom rapid numeric keypad input, tactile haptic feedback, audio feedback, local persistence with auto-purge, and visual range tagging (Normal, Warning, High) tailored for quick daily logging.
    </p>
    <p>
      <a href="/glucose/" class="btn btn--primary" target="_blank"><i class="fas fa-play"></i> Launch App</a>
      <span class="badge" style="margin-left: 8px; padding: 4px 8px; background: #e2e8f0; border-radius: 4px; font-size: 0.85em; color: #334155;">PWA · Local Storage · Haptics · LTR Keypad</span>
    </p>
  </article>
</div>

---

## Security &amp; Machine Learning Research Systems

<div class="list__item">
  <article class="archive__item">
    <h3 class="archive__item-title">
      <a href="https://github.com/nitzanfarhi/PatchView" target="_blank">PatchView: Multi-Modality Security Patch Detection</a>
    </h3>
    <p class="archive__item-excerpt">
      A multi-modal deep learning architecture designed to identify silent and unlabelled software security fixes across open-source code repositories. PatchView extracts and fuses three distinct modalities: structural code representations (AST diffs), natural language commit messages, and developer behavioral patterns in Git. Achieved <strong>94.5% Accuracy</strong>, <strong>95.1% F1-Score</strong>, and <strong>0.97 AUC</strong>. Published in <em>Computers &amp; Security</em> (2025).
    </p>
    <p>
      <a href="https://doi.org/10.1016/j.cose.2025.104356" class="btn btn--inverse" target="_blank"><i class="fas fa-book-bookmark"></i> Paper (Elsevier)</a>
      <a href="https://github.com/nitzanfarhi/PatchView" class="btn btn--inverse" target="_blank"><i class="fab fa-github"></i> Code (GitHub)</a>
      <a href="https://www.kaggle.com/datasets/nitzanfarhi/patchview" class="btn btn--inverse" target="_blank"><i class="fab fa-kaggle"></i> Dataset (Kaggle)</a>
    </p>
  </article>
</div>

<div class="list__item">
  <article class="archive__item">
    <h3 class="archive__item-title">
      <a href="https://github.com/nitzanfarhi/SecurityPatchDetection" target="_blank">Security Patch Detection via Behavioral Data</a>
    </h3>
    <p class="archive__item-excerpt">
      A language-oblivious classification system that detects security patches without analyzing code syntax or ASTs. By analyzing commit metadata and developer interaction dynamics across more than 13,000 repositories, the model identifies security fixes with <strong>88.3% Accuracy</strong> and <strong>89.8% F1-Score</strong>. Presented at <em>AAAI AICS 2023</em>.
    </p>
    <p>
      <a href="https://arxiv.org/abs/2302.02112" class="btn btn--inverse" target="_blank"><i class="ai ai-arxiv"></i> Paper (arXiv)</a>
      <a href="https://github.com/nitzanfarhi/SecurityPatchDetection" class="btn btn--inverse" target="_blank"><i class="fab fa-github"></i> Code (GitHub)</a>
      <a href="https://www.kaggle.com/datasets/nitzanfarhi/detecting-security-patches-via-behavioral-data" class="btn btn--inverse" target="_blank"><i class="fab fa-kaggle"></i> Dataset (Kaggle)</a>
    </p>
  </article>
</div>

<div class="list__item">
  <article class="archive__item">
    <h3 class="archive__item-title">
      <a href="https://doi.org/10.1016/j.cose.2019.05.008" target="_blank">Malboard: USB Hardware Implant Attack &amp; Detection Framework</a>
    </h3>
    <p class="archive__item-excerpt">
      A comprehensive study of physical USB keyboard hardware implants capable of evading traditional biometric behavioral authentication. Implemented both a weaponized hardware implant that autonomously learns and mimics human keystroke dynamics and a trusted multi-sensor detection framework using side-channel acoustics and USB timing analysis. Published in <em>Computers &amp; Security</em> (2019).
    </p>
    <p>
      <a href="https://doi.org/10.1016/j.cose.2019.05.008" class="btn btn--inverse" target="_blank"><i class="fas fa-book-bookmark"></i> Paper (Elsevier)</a>
    </p>
  </article>
</div>

