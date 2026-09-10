---
title: "Detecting Security Patches via Behavioral Data in Code Repositories"
collection: publications
permalink: /publication/2023-01-01-Detecting-Security-Patches-via-Behavioral-Data-in-Code-Repositories
excerpt: "Presents a novel, language-oblivious machine learning approach to uncover silent security patches in code repositories by analyzing developer behavioral dynamics rather than source code syntax. Evaluated across 13,000+ repositories, achieving 88.3% Accuracy and 89.8% F1-Score."
date: 2023-01-01
venue: 'arXiv / AAAI AICS'
paperurl: 'https://arxiv.org/abs/2302.02112'
citation: 'Nitzan Farhi, Noam Koenigstein, Yuval Shavitt, "Detecting Security Patches via Behavioral Data in Code Repositories." arXiv preprint arXiv:2302.02112 / AAAI Workshop on Artificial Intelligence for Cyber Security (AICS), 2023.'
---

## Abstract

Security patch detection is fundamental to managing software vulnerabilities, yet traditional static and dynamic methods struggle when patches are unlabelled or written across diverse programming languages. This paper demonstrates that silent security patches exhibit distinct behavioral signatures in how developers commit, review, and collaborate.

By training machine learning models exclusively on developer and repository behavioral telemetry extracted from over 13,000 Git repositories, the system achieves language-oblivious detection that scales efficiently across large codebases.

### Key Results
* **Accuracy**: 88.3%
* **F1-Score**: 89.8%
* **AUC-ROC**: 0.94

---

<p>
  <a href="https://arxiv.org/abs/2302.02112" class="btn btn--primary" target="_blank"><i class="ai ai-arxiv"></i> Read Paper (arXiv)</a>
  <a href="https://github.com/nitzanfarhi/SecurityPatchDetection" class="btn btn--inverse" target="_blank"><i class="fab fa-github"></i> Source Code</a>
  <a href="https://www.kaggle.com/datasets/nitzanfarhi/detecting-security-patches-via-behavioral-data" class="btn btn--inverse" target="_blank"><i class="fab fa-kaggle"></i> Kaggle Dataset</a>
  <a href="https://scholar.google.com/scholar?q=Detecting+Security+Patches+via+Behavioral+Data+in+Code+Repositories" class="btn btn--inverse" target="_blank"><i class="ai ai-google-scholar"></i> Google Scholar</a>
</p>