
# Sorting Visualizer

A **React** application for interactive, step‑by‑step visualization of sorting algorithms, with a modular architecture that makes it easy to add new algorithms and customize the UI.

---

## 📋 Table of Contents

- [🎯 Project Overview](#-project-overview)
- [⚙️ Features](#️-features)
- [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Available Scripts](#available-scripts)
- [🗂 Project Structure](#-project-structure)
- [🧩 Core Components](#-core-components)
- [➕ Adding a New Algorithm](#-adding-a-new-algorithm)
- [👥 Contributing](#-contributing)
- [📝 License](#-license)

---

## 🎯 Project Overview

**Sorting Visualizer** (repository: kai713/algos‑project) is designed to help learners and educators see exactly how comparison‑based sorting algorithms work under the hood. Users can play, pause, step through, and adjust playback speed, all while color‑coded bars and a legend illustrate comparisons, swaps, and sorted elements. :contentReference[oaicite:0]{index=0}

---

## ⚙️ Features

- **Live Animation** of each sorting step (comparisons & swaps)
- **Playback Controls**: play, pause, step forward/backward, repeat
- **Speed Adjustment** (e.g., 0.5×, 1×, 2×)
- **Progress Bar** indicating overall animation progress
- **Color Key Legend** explaining visual states (Group A–D + sorted)
- **Algorithm Info Panel** with title, description, and time/space complexities
- **Modular Architecture**: easily add new algorithms in `src/algorithms` :contentReference[oaicite:1]{index=1}
- **Responsive Design** with light/dark themes under `_settngs` :contentReference[oaicite:2]{index=2}
- **Built with** React, Tailwind CSS, React Icons, and Create React App :contentReference[oaicite:3]{index=3}

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v12 or newer)
- **npm** or **Yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kai713/algos-project.git
   cd algos-project
Install dependencies



yarn

``` :contentReference[oaicite:4]{index=4}
Available Scripts
In the project directory, you can run:
```


   ```bash

    yarn start
    # Запускает приложение в режиме разработки. Открой http://localhost:3000 чтобы просмотреть.
    
    yarn build
    # Собирает приложение для продакшена в папку build.
    
    yarn test
    # Запускает тестовый раннер.
    
    yarn eject
    # Извлекает конфигурацию Create React App (необратимо).
```
````
🗂 Project Structure

src/
├── _settngs/              # Global CSS variables & themes (dark.css, variables.css) :contentReference[oaicite:9]{index=9}
├── algorithms/            # Sorting algorithm implementations & helpers :contentReference[oaicite:10]{index=10}
│   ├── BubbleSort.js
│   ├── CodeTabs.js
│   └── helpers.js
├── components/            # React UI components
│   ├── atoms/             # Basic building blocks (Backdrop, Bar, Button, Switch) :contentReference[oaicite:11]{index=11}
│   ├── molecules/         # Compound components (ProgressBar, ColorKey, Menu, SortInfo, Footer, VisualizerControls) :contentReference[oaicite:12]{index=12}
│   └── organisms/         # Page‑level components (AppDrawer, SortChart, SortVisualizer, TopBar) :contentReference[oaicite:13]{index=13}
├── App.js                 # Entry point & layout  
├── index.js               # React DOM render & service worker registration  
├── index.css              # Global styles  
├── App.css / AppDark.css  # Light / dark theme overrides  
└── public/                # Static assets (logo, index.html)

🧩 Core Components
SortVisualizer
Manages the trace of steps, playback controls, and overall state 
GitHub

SortChart
Renders the array as bars, coloring based on comparison/swap/sorted indices 
GitHub

VisualizerControls
Buttons for play/pause/step/repeat and speed selector 
GitHub

ProgressBar
Shows progress (0–100%) based on current step 
GitHub

ColorKey
Legend explaining visual states for groups A–D and sorted 
GitHub

SortInfo
Displays algorithm name, description, and complexities 
GitHub

➕ Adding a New Algorithm
Implement Algorithm in src/algorithms, returning a trace array of steps:


[
  {
    array: [...],
    groupA: [...],
    groupB: [...],
    groupC: [...],
    groupD: [...],
    sortedIndices: [...]
  },
  // ...
]
Export it alongside a descriptive key and info object:


export const QuickSort = (nums) => { … };
export const QuickSortKey = createKey('Comparing', 'Swapping');
export const QuickSortDesc = { title: 'Quick Sort', description: <p>…</p>, worstCase: <span>O(n²)</span>, … };
Update TopBar to include the new algorithm in the selector menu.

````

👥 Contributing

Contributions are welcome! To file issues or pull requests:

Fork the repository

````

Create a feature branch (git checkout -b feature/XYZ)

Commit your changes (git commit -m 'Add XYZ')

Push to your branch (git push origin feature/XYZ)
````
Open a Pull Request against master

Please follow Conventional Commits for commit messages.

````
📝 License
Copyright (c) 2021

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.