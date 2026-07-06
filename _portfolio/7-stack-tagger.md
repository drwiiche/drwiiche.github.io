---
title: "StackOverflow Tag Predictor"
excerpt: "Multi-label classification engine predicting tag labels for question posts containing combined code and text.<br/><img src='https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=120&q=80' width='100' style='border-radius:10px; margin-top:10px;'>"
collection: portfolio
---

## Project Overview
This natural language processing project addresses the multi-label classification challenge on StackOverflow. The model analyzes the textual content and code blocks of a query to predict which tags (e.g., `python`, `sql`, `multithreading`) should be assigned to it, enabling automatic categorization and improved search navigation.

---

## Key Features & Objectives
*   **Multi-Label Target Space:** Predicts multiple tags concurrently for a single input question.
*   **Mixed Text Processing:** Sanitizes and parses standard English sentences alongside embedded raw programming code blocks.
*   **SGD Linear Classifiers:** Utilizes high-performance linear models to process high-dimensional word vectors with low overhead.

---

## Technical Stack & Technologies
*   **Language:** Python
*   **NLP & Vectorizers:** Scikit-learn (TF-IDF vectorizer), NLTK, BeautifulSoup (HTML parser)
*   **Classifiers:** SGDClassifier, OneVsRestClassifier
*   **Data Science:** Pandas, NumPy

---

## Core Techniques & Algorithms
*   **Multi-Label Vectorization:** Constructed n-gram TF-IDF pipelines to extract text features, giving higher weights to tags and key programming keywords.
*   **Binary Relevance (One-vs-All):** Leveraged `OneVsRestClassifier` wrappers to train separate binary classifiers for each tag label in the target dataset.
*   **Model Optimization & Jaccard Loss:** Tuned Stochastic Gradient Descent (SGD) classifiers under modified huber and log losses, evaluating accuracy via micro F1-score and Jaccard similarity metrics.
