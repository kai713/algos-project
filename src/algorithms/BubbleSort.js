import React from 'react';
import {
    swap,
    newTrace,
    addToTrace,
    lastSorted,
    createKey
} from './helpers';
import graph from "./images/graph.png";

    /**
     * Performs Bubble Sort on an array of numbers and creates a trace of the sorting steps for visualization.
     *
     * @function
     * @param {number[]} nums - The array of numbers to sort.
     * @returns {Array} trace - An array representing each step of the sorting process,
     * including comparisons and swaps, for animation or visualization purposes.
     */
    const BubbleSort = (nums) => {
        const trace = newTrace(nums);

        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length - i - 1; j++) {
                // Visualize: Comparing A[j] and A[j + 1]
                addToTrace(trace, nums, lastSorted(trace), [j, j + 1]);
                if (nums[j] > nums[j + 1]) {
                    swap(nums, j, j + 1);
                    // Visualize: Swap A[j] and A[j + 1]
                    addToTrace(trace, nums, lastSorted(trace), [], [j, j + 1]);
                }
            }

            // Visualize: final value is sorted
            addToTrace(trace, nums, [...lastSorted(trace), nums.length - 1 - i]);
        }

        return trace;
    };

    /**
     * Key for visualizing Bubble Sort actions.
     *
     * @constant
     * @type {Object}
     * @property {string} Comparing - Label for comparison step.
     * @property {string} Swapping - Label for swapping step.
     */
    export const BubbleSortKey = createKey('Comparing', 'Swapping');

    /**
     * Description object for Bubble Sort to be used in UI or documentation.  */

/**
 * Description object for Bubble Sort to be used in UI or documentation.
 *
 * @constant
 * @type {Object}
 * @property {string} title - The name of the algorithm.
 * @property {JSX.Element} description - A short explanation of how Bubble Sort works.
 * @property {JSX.Element} worstCase - Worst-case time complexity.
 * @property {JSX.Element} avgCase - Average-case time complexity.
 * @property {JSX.Element} bestCase - Best-case time complexity.
 * @property {JSX.Element} space - Space complexity.
 */
export const BubbleSortDesc = {
    title: 'Bubble Sort',
    description: (
        <p>
            <a
                href="https://code.fandom.com/wiki/Bubble_sort"
                target="_blank"
                rel="noopener noreferrer"
            >
                Bubble Sort
            </a>{' '}
            is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity are quite high.
            <ul>
                <li>We sort the array using multiple passes. After the first pass, the maximum element goes to end (its correct position). Same way, after second pass, the second largest element goes to second last position and so on.</li>
                <li>In every pass, we process only those elements that have already not moved to correct position. After k passes, the largest k elements must have been moved to the last k positions.</li>
                <li>In a pass, we consider remaining elements and compare all adjacent and swap if larger element is before a smaller element. If we keep doing this, we get the largest (among the remaining elements) at its correct position.</li>

            </ul>

        </p>
    ),
    worstCase: (
        <span>O(n<sup>2</sup>)</span>
    ),
    avgCase: (
        <span>
    O(n<sup>2</sup>)
    </span>
    ),
    bestCase: <span>O(n)</span>,
    space: <span>O(1)</span>,
    image: (
        <img
            src= {graph}
            alt="Bubble Sort"
            style={{ width: '250px', height: 'auto' }}
        />
    ),
    youtube: (
        <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/xli_FI7CuzA" 
            title="YouTube video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
        </iframe>

    )
};


    export default BubbleSort;
