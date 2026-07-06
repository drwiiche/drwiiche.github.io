---
title: "Facebook Friend Recommendation using Graph Mining"
excerpt: "Social graph analysis and link prediction model mapping connection patterns to suggest new friend nodes.<br/><img src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=120&q=80' width='100' style='border-radius:10px; margin-top:10px;'>"
collection: portfolio
---

## Project Overview
This graph mining case study addresses the link prediction challenge in social networks. By representing user relationships as nodes and edges in a directed graph, the model analyzes existing network topologies to predict missing links and suggest potential friend recommendations.

---

## Key Features & Objectives
*   **Link Prediction:** Analyzes connectivity structures to identify high-probability future connections.
*   **Graph Telemetry:** Maps network metrics (shortest path, connected components) to represent profile relationships.
*   **Matrix Representation:** Encodes network adjacency features into mathematical vectors to train classifiers.

---

## Technical Stack & Technologies
*   **Language:** Python
*   **Graph Framework:** NetworkX
*   **Machine Learning:** Scikit-learn, XGBoost
*   **Data Structures:** SciPy Sparse Matrices, Pandas, NumPy

---

## Core Techniques & Graph Algorithms
*   **Similarity Metrics Extraction:** Engineered graph-theoretic features, including Jaccard Distance, Cosine Distance, PageRank scores, HITS hub/authority metrics, and the Adamic-Adar Index.
*   **SVD Matrix Decomposition:** Decomposed the graph's adjacency matrix using Singular Value Decomposition (SVD) to represent low-dimensional structural connection attributes.
*   **Gradient-Boosted Classifier:** Trained an XGBoost model utilizing the extracted graph features to classify if a directed link between two user nodes is likely to exist.
