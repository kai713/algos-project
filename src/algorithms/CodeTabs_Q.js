import React, { useState } from 'react';
import { FaCode, FaJava, FaJs, FaPython, FaCuttlefish } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';
import './CodeTabs.css';

/**
 * Object containing code snippets for Quick Sort in different programming languages.
 * @type {Object<string, string>}
 */
const codeSnippets = {
    c: `int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,

    cpp: `int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            std::swap(arr[i], arr[j]);
        }
    }
    std::swap(arr[i + 1], arr[high]);
    return (i + 1);
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,

    java: `int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}

void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,

    js: `function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = [], right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}`,

    python: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[-1]
    left = [x for x in arr[:-1] if x < pivot]
    right = [x for x in arr[:-1] if x >= pivot]
    return quick_sort(left) + [pivot] + quick_sort(right)`
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
 * React component that displays Quick Sort implementations in multiple languages
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
                <FaCode className="icon pulse" /> Quick Sort Implementations
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
