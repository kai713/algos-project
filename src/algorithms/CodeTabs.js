import React, { useState } from 'react';
import { FaCode, FaJava, FaJs, FaPython, FaCuttlefish } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';
import './CodeTabs.css';

/**
 * Object containing code snippets for Bubble Sort in different programming languages.
 * @type {Object<string, string>}
 */
const codeSnippets = {
    c: `void bubble_sort(Long arr[], long n) {
    long c, d, t;
    for (c = 0; c < n - 1; c++) {
        for (d = 0; d < n - c - 1; d++) {
            if (arr[d] > arr[d + 1]) {
                t = arr[d];
                arr[d] = arr[d + 1];
                arr[d + 1] = t;
            }
        }
    }
}`,
    cpp: `void bubble_sort(long arr[], long n) {
    long t;
    for (long c = 0; c < n - 1; c++) {
        for (long d = 0; d < n - c - 1; d++) {
            if (arr[d] > arr[d + 1]) {
                t = arr[d];
                arr[d] = arr[d + 1];
                arr[d + 1] = t;
            }
        }
    }
}`,
    java: `void bubbleSort(long[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        for (int j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                long temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}`,
    js: `function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`,
    python: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]`
};

/**
 * Array of supported programming language keys.
 * @type {string[]}
 */
const languages = ['c', 'cpp', 'java', 'js', 'python'];

/**
 * Mapping of language keys to display labels and icons.
 * @type {Object<string, [string, JSX.Element]>}
 */
const labels = {
    c: ['C', <FaCuttlefish className="icon" />],
    cpp: ['C++', <SiCplusplus className="icon" />],
    java: ['Java', <FaJava className="icon" />],
    js: ['JS', <FaJs className="icon" />],
    python: ['Python', <FaPython className="icon" />]
};

/**
 * React component that displays Bubble Sort implementations in multiple languages
 * with tabs to switch between them.
 *
 * @component
 * @example
 * return <CodeTabs />
 */
const CodeTabs = () => {
    const [selectedLang, setSelectedLang] = useState('js');

    return (
        <div className="code-tabs">
            <h2 className="code-tabs__title">
                <FaCode className="icon pulse" /> Bubble Sort Implementations
            </h2>
            <div className="code-tabs__buttons">
                {languages.map((lang) => (
                    <button
                        key={lang}
                        onClick={() => setSelectedLang(lang)}
                        className={`code-tabs__button ${selectedLang === lang ? 'active' : ''}`}
                    >
                        {labels[lang][0]} {labels[lang][1]}
                    </button>
                ))}
            </div>
            <div className="code-tabs__display">
        <pre>
          <code>{codeSnippets[selectedLang]}</code>
        </pre>
            </div>
        </div>
    );
};

export default CodeTabs;
