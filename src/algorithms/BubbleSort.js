import React from 'react';
import {
    swap,
    newTrace,
    addToTrace,
    lastSorted,
    createKey
} from './helpers';

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
            is a simple sorting algorithm that repeatedly steps through the
            list, compares adjacent elements and swaps them if they are in the
            wrong order. The pass through the list is repeated until the list
            is sorted. The algorithm, which is a comparison sort, is named for
            the way smaller or larger elements "bubble" to the top of the
            list. Although the algorithm is simple, it is too slow and
            impractical for most problems.
        </p>
    ),
    worstCase: (
        <span>
      O(n<sup>2</sup>)
    </span>
    ),
    avgCase: (
        <span>
      O(n<sup>2</sup>)
    </span>
    ),
    bestCase: <span>O(n)</span>,
    space: <span>O(1)</span>
};

export default BubbleSort;
