---
title: "Human Activity Recognition (HAR)"
excerpt: "Time-series classification model processing multi-channel accelerometer and gyroscope signals to identify physical movements.<br/><img src='https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=120&q=80' width='100' style='border-radius:10px; margin-top:10px;'>"
collection: portfolio
---

## Project Overview
This project presents a deep learning approach to sensor-based Human Activity Recognition (HAR). The model processes temporal signals gathered from smartphone accelerometers and gyroscopes to classify user physical actions (e.g. `walking`, `climbing stairs`, `sitting`, `laying down`), enabling smart health tracking integrations.

---

## Key Features & Objectives
*   **Temporal Classification:** Categorizes physical actions based on signal changes over time.
*   **Multi-Channel Signal Inputs:** Processes 3-axis acceleration and angular velocity signals concurrently.
*   **Noise Filtering:** Cleans raw signal streams to extract clean activity metrics.

---

## Technical Stack & Technologies
*   **Language:** Python
*   **Deep Learning:** TensorFlow, Keras (LSTM layers)
*   **Signal Processing:** SciPy, NumPy, Pandas
*   **Dataset:** UCI HAR Dataset

---

## Core Techniques & Deep Architectures
*   **LSTM Recurrent Networks:** Built stacked Long Short-Term Memory (LSTM) network architectures capable of mapping temporal coordinate dependencies across sliding time windows.
*   **Signal Noise Filtering:** Applied Butterworth low-pass filters to segregate gravity components from body acceleration signals.
*   **Spectral Feature Mapping:** Utilized Fourier Transforms (FFT) to convert signal periods into frequency-domain power distributions, extracting additional feature arrays for the model.
