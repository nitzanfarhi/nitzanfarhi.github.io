---
title: "A Study of Aggregation of Long Time-series Input for LSTM Neural Networks"
collection: publications
permalink: /publication/2022-01-01-A-Study-of-Aggregation-of-Long-Time-series-Input-for-LSTM-Neural-Networks
excerpt: "Investigates performance degradation in LSTM networks processing long time-series sequences. Proposes a non-uniform exponential temporal partitioning scheme with non-linear aggregations, improving predictive accuracy by 6% to 27% across seven benchmark datasets."
date: 2022-01-01
venue: 'OpenReview / ICLR'
paperurl: 'https://openreview.net/forum?id=vH4L60_jM8_'
citation: 'Nitzan Farhi, Yuval Shavitt, "A Study of Aggregation of Long Time-series Input for LSTM Neural Networks." OpenReview, 2022.'
---

## Abstract

Long Short-Term Memory (LSTM) recurrent neural networks are widely utilized for sequential data modeling, but their capacity to retain meaningful historical state diminishes over very long time horizons. Standard industrial practice divides sequences into uniform time windows and computes simple arithmetic means, treating distant and recent observations with equal granularity.

In this work, we present an exponential temporal aggregation method where window lengths scale exponentially into the past. Combined with expressive aggregation functions (median, maximum, and quartile features), this approach preserves sharp recent dynamics while summarizing long-term historical context. Evaluated across seven diverse real-world time-series datasets, the method yields consistent improvements of 6% to 27% in forecasting accuracy.

---

<p>
  <a href="https://openreview.net/forum?id=vH4L60_jM8_" class="btn btn--primary" target="_blank"><i class="fas fa-book-bookmark"></i> Read on OpenReview</a>
  <a href="https://openreview.net/pdf?id=vH4L60_jM8_" class="btn btn--inverse" target="_blank"><i class="fas fa-file-pdf"></i> Download PDF</a>
  <a href="https://scholar.google.com/scholar?q=A+Study+of+Aggregation+of+Long+Time-series+Input+for+LSTM+Neural+Networks" class="btn btn--inverse" target="_blank"><i class="ai ai-google-scholar"></i> Google Scholar</a>
</p>
