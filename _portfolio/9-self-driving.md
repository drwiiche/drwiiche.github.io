---
title: "Self-Driving Car Simulation"
excerpt: "Deep learning behavioral cloning model using Convolutional Neural Networks (CNN) to predict steering directions in autonomous driving simulators.<br/><img src='https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=120&q=80' width='100' style='border-radius:10px; margin-top:10px;'>"
collection: portfolio
---

## Project Overview
This deep learning project implements an autonomous vehicle control model using behavioral cloning. By training on dashboard camera feeds and corresponding human steering actions recorded inside a simulator environment, the neural network learns to predict optimal steering angles dynamically to keep the vehicle centered on a winding course.

---

## Key Features & Objectives
*   **Behavioral Cloning Pipeline:** Maps camera image streams directly to continuous steering control parameters.
*   **Real-time Image Augmentation:** Preprocesses image states dynamically during training to handle variations in lighting, shadows, and recovery angles.
*   **End-to-End Deep Learning:** Bypasses manual road marker mapping, extracting steering features directly from raw image inputs.

---

## Technical Stack & Technologies
*   **Language:** Python
*   **Frameworks:** TensorFlow, Keras
*   **Computer Vision:** OpenCV (image processing)
*   **Simulator Platform:** Udacity Self-Driving Car Simulator

---

## Core Techniques & Deep Architectures
*   **NVIDIA CNN Architecture:** Implemented a stacked deep convolutional neural network mirroring the NVIDIA autonomous vehicle setup (5 convolutional layers for spatial feature extractions followed by 4 fully connected dense layers).
*   **Camera Angle Recovery Offset:** Incorporated left and right camera perspective offset calculations (adding directional bias) to train the model to recover if the vehicle drifts toward road edges.
*   **Data Augmentation Pipeline:** Designed real-time image augmentation filters (random translations, brightness modulations, horizontal flips, and cropping) to prevent overfitting to the course layout.
