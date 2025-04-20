
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


npm install
# or
yarn
``` :contentReference[oaicite:4]{index=4}
Available Scripts
In the project directory, you can run:

npm start
Runs the app in development mode. Open http://localhost:3000 to view it. 
GitHub

npm run build
Builds the app for production to the build folder. 
GitHub

npm test
Launches the test runner. 
GitHub

npm run eject
Ejects Create React App configuration (not reversible). 
GitHub

🗂 Project Structure
plain

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

👥 Contributing
Contributions are welcome! To file issues or pull requests:

Fork the repository

Create a feature branch (git checkout -b feature/XYZ)

Commit your changes (git commit -m 'Add XYZ')

Push to your branch (git push origin feature/XYZ)

Open a Pull Request against master

Please follow Conventional Commits for commit messages.

📝 License
No license specified. If you wish to apply a license, consider adding an MIT License.

---