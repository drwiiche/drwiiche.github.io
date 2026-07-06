---
title: "Quora Question Pair Similarity"
excerpt: "Natural Language Processing (NLP) model classifying duplicate question pairs to optimize search relevance and content curation.<br/><img src='https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=120&q=80' width='100' style='border-radius:10px; margin-top:10px;'>"
collection: portfolio
---

## Project Overview
This project targets the duplicate detection challenge on Quora. By predicting whether two separate text questions carry the same semantic meaning, this model enables search query optimizations, prevents duplicate thread spamming, and boosts text indexing.

---

## Key Features & Objectives
*   **Semantic Matching:** Processes variations in spelling, syntax, and synonyms to recognize matching question intents.
*   **High-Volume Classification:** Handles millions of text queries dynamically with low inference lag.
*   **Imbalanced Target Distribution:** Managed class ratios between duplicate and unique question lists during training.

---

## Technical Stack & Technologies
*   **Programming Language:** Python
*   **Libraries:** NLTK, Scikit-learn, Pandas, NumPy, XGBoost
*   **Text Models:** TF-IDF, Word2Vec embeddings

---

## Core Techniques & Algorithms
*   **Fuzzy Feature Engineering:** Extracted fuzzy string ratios (Levenshtein distance, partial ratio, token sort ratio) to represent structural word overlaps.
*   **Semantic Distance Calculations:** Structured cosine and Jaccard distance metrics on word vectors to quantify textual similarity.
*   **XGBoost Classifier Tuning:** Modeled duplicate labels through gradient-boosted trees, ranking NLP features to optimize classification parameters.
