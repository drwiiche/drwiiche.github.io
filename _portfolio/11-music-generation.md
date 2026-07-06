---
title: "Music Generation using Deep Learning"
excerpt: "Generative recurrent neural network composing original piano compositions in MIDI format based on classical training datasets.<br/><img src='https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=120&q=80' width='100' style='border-radius:10px; margin-top:10px;'>"
collection: portfolio
---

## Project Overview
This deep learning project leverages generative sequence modeling to compose classical music. By training on a dataset of piano compositions, the recurrent neural network learns notes, chords, and temporal intervals to compose original music files saved in standard MIDI format.

---

## Key Features & Objectives
*   **Generative Compositions:** Composes chord sequences and melodic notes from scratch.
*   **Sequential Note Vectorization:** Transcodes raw MIDI structures into categorical indexes.
*   **Adjustable Composition Variation:** Controls sequence creativity using temperature sampling factors.

---

## Technical Stack & Technologies
*   **Language:** Python
*   **Deep Learning:** TensorFlow, Keras
*   **MIDI Parsing:** Music21 (musical notation toolkit)
*   **Sequence Formatting:** NumPy, MIDI players

---

## Core Techniques & Generative Models
*   **Stacked LSTM Architectures:** Designed recurrent networks with stacked LSTM and Dropout layers, predicting the next note/chord index based on a trailing sequence window.
*   **Musical Tokenization:** Parsed notes (pitches) and concurrent chords into indexed categories, managing high-dimensional softmax outputs.
*   **Temperature-Guided Sampling:** Configured output generator functions with a temperature-scaling factor. Higher temperatures encourage creative variations and note choices, while lower values restrict choices to highly probable training notes to prevent chaotic compositions.
---
