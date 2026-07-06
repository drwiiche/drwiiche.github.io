---
title: "NYC Taxi Demand Prediction"
excerpt: "Spatio-temporal regression model forecasting taxi pickup demand across New York City coordinate clusters.<br/><img src='https://images.unsplash.com/photo-1492664738985-33e3a5a80685?auto=format&fit=crop&w=120&q=80' width='100' style='border-radius:10px; margin-top:10px;'>"
collection: portfolio
---

## Project Overview
This project presents a spatio-temporal forecasting system to predict taxi ride pickups demand within localized coordinates across New York City. The model enables taxi fleets and ride-hailing services to optimize dispatch routes and decrease passenger waiting times.

---

## Key Features & Objectives
*   **Spatial Segmentation:** Groups GPS coordinates into localized pickup regions across NYC.
*   **Time-Series Tracking:** Processes time-aggregated ride metrics to capture temporal demands.
*   **Inference Regressions:** Outlines future demand quantities using historical ride profiles.

---

## Technical Stack & Technologies
*   **Language:** Python
*   **Machine Learning:** Scikit-learn, K-Means Clustering, XGBoost, Random Forests
*   **Data Analysis:** Pandas, NumPy, Matplotlib

---

## Core Techniques & Data Models
*   **K-Means Spatial Clustering:** Segmented NYC coordinates into cluster centroids using K-Means algorithms, transforming continuous coordinate streams into discrete geographic zones.
*   **Feature Lag Engineering:** Engineered temporal lag variables (e.g. pickup counts 10m, 1h, 1d ago) to represent chronological dependencies.
*   **Regression Modeling:** Trained Random Forests and gradient-boosted trees (XGBoost) to predict demand density values for each cluster zone during future time windows.
