---
permalink: /
title: "About"
excerpt: "Personal website of Nitzan Farhi Shahar, PhD"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I work on vulnerability research, low-level systems, and machine learning for software security. I completed my PhD in Electrical Engineering at Tel Aviv University.

<div style="margin: 1.5em 0; display: flex; flex-wrap: wrap; gap: 0.5em;">
  <a href="/publications/" class="btn btn--primary"><i class="fas fa-book-bookmark"></i> Publications</a>
  <a href="/projects/" class="btn btn--primary"><i class="fas fa-laptop-code"></i> Projects</a>
  <a href="/datasets/" class="btn btn--primary"><i class="fas fa-database"></i> Datasets</a>
  <a href="https://github.com/nitzanfarhi" target="_blank" rel="noopener" class="btn btn--inverse"><i class="fab fa-github"></i> GitHub</a>
  <a href="https://scholar.google.com/citations?user=yA8PEnMAAAAJ" target="_blank" rel="noopener" class="btn btn--inverse"><i class="ai ai-google-scholar"></i> Google Scholar</a>
  <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}" target="_blank" rel="noopener" class="btn btn--inverse"><i class="fab fa-linkedin"></i> LinkedIn</a>
  <a href="mailto:{{ site.author.email }}" class="btn btn--inverse"><i class="fas fa-envelope"></i> Email</a>
</div>

---

## Research Interests

* **Vulnerability research**: Reverse engineering, binary analysis, and exploit development.
* **Machine learning for software security**: Identifying security patches and analyzing software changes using code representations and repository activity.
* **Time-series modeling**: Sequence models and temporal aggregation methods for long time-series data.

---

## Selected Publications

### [PatchView: Multi-modality detection of security patches](/publication/2025-01-01-PatchView-Multi-modality-detection-of-security-patches)
*Computers & Security*, 2025  
Nitzan Farhi, Noam Koenigstein, Yuval Shavitt  
A model that combines source code changes, commit messages, and repository activity to identify security patches in open-source software.  
[Paper](https://doi.org/10.1016/j.cose.2025.104356) · [Code](https://github.com/nitzanfarhi/PatchView) · [Dataset](https://www.kaggle.com/datasets/nitzanfarhi/patchview)

### [Detecting Security Patches via Behavioral Data in Code Repositories](/publication/2023-01-01-Detecting-Security-Patches-via-Behavioral-Data-in-Code-Repositories)
*arXiv / AAAI AICS*, 2023  
Nitzan Farhi, Noam Koenigstein, Yuval Shavitt  
An approach to identifying security patches using commit and developer activity metadata without inspecting source code directly.  
[Paper](https://arxiv.org/abs/2302.02112) · [Code](https://github.com/nitzanfarhi/SecurityPatchDetection) · [Dataset](https://www.kaggle.com/datasets/nitzanfarhi/detecting-security-patches-via-behavioral-data)

### [Malboard: A novel user keystroke impersonation attack and trusted detection framework based on side-channel analysis](/publication/2019-01-01-Malboard-A-novel-user-keystroke-impersonation-attack-and-trusted-detection-framework-based-on-side-channel-analysis)
*Computers & Security*, 2019  
Nitzan Farhi, Nir Nissim, Yuval Elovici  
A study on keystroke impersonation attacks using custom USB hardware and a defense framework based on acoustic and timing side-channel data.  
[Paper](https://doi.org/10.1016/j.cose.2019.05.008)

More publications are listed on the **[Publications](/publications/)** page and on **[Google Scholar](https://scholar.google.com/citations?user=yA8PEnMAAAAJ)**.

---

## Education

* **Ph.D. in Electrical Engineering** — Tel Aviv University
* **M.Sc. in Cyber Security** — Ben-Gurion University
* **B.Sc. in Software Engineering** — Ben-Gurion University

---

## Contact

Feel free to reach out by [email](mailto:{{ site.author.email }}) or connect on [LinkedIn](https://www.linkedin.com/in/{{ site.author.linkedin }}).
