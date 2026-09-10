---
title: "PatchView: Multi-modality detection of security patches"
collection: publications
permalink: /publication/2025-01-01-PatchView-Multi-modality-detection-of-security-patches
excerpt: "Proposes PatchView, a multi-modal deep learning framework fusing source code AST representations, commit messages, and Git developer behavioral dynamics to identify silent security patches. Achieves state-of-the-art results: 94.5% Accuracy, 95.1% F1-score, and 0.97 AUC."
date: 2025-01-01
venue: 'Computers & Security'
paperurl: 'https://doi.org/10.1016/j.cose.2025.104356'
citation: 'Nitzan Farhi, Noam Koenigstein, Yuval Shavitt, "PatchView: Multi-modality detection of security patches." Computers & Security, Vol. 151, 104356, 2025.'
---

## Abstract

Detecting security patches is crucial for vulnerability identification and software security maintenance. However, many security fixes are committed silently without CVE identifiers or vulnerability mentions. PatchView addresses this challenge by introducing a multi-modal deep learning model that integrates three complementary views of software changes:

1. **Source Code Structure**: Abstract Syntax Tree (AST) representations of the modified code.
2. **Natural Language**: Semantic representations of commit messages and commit logs.
3. **Behavioral Patterns**: Developer and repository behavioral metadata mined from version control systems.

### Key Results
* **Accuracy**: 94.5%
* **F1-Score**: 95.1%
* **AUC-ROC**: 0.97

---

<p>
  <a href="https://doi.org/10.1016/j.cose.2025.104356" class="btn btn--primary" target="_blank"><i class="fas fa-book-bookmark"></i> Read Paper (DOI)</a>
  <a href="https://github.com/nitzanfarhi/PatchView" class="btn btn--inverse" target="_blank"><i class="fab fa-github"></i> Source Code</a>
  <a href="https://www.kaggle.com/datasets/nitzanfarhi/patchview" class="btn btn--inverse" target="_blank"><i class="fab fa-kaggle"></i> Kaggle Dataset</a>
  <a href="https://scholar.google.com/scholar?q=PatchView:+Multi+modality+detection+of+security+patches" class="btn btn--inverse" target="_blank"><i class="ai ai-google-scholar"></i> Google Scholar</a>
</p>