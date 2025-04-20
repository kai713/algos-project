import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Bar from '../../atoms/Bar';
/**
 * EN: A component that renders a bar chart representing the current state of a sorting algorithm.
 * RU: Компонент, отображающий состояние алгоритма сортировки в виде столбиковой диаграммы.
 *
 * Each bar’s height is proportional to its value. Bars are colored based on their group state (A, B, C, D).
 * Высота столбцов пропорциональна числам, цвета показывают текущие действия (сравнение, обмен, и т.д.).
 *
 * @component
 * @example
 * <SortChart
 *   numbers={[10, 30, 20]}
 *   maxNum={30}
 *   groupA={[1]}
 *   groupB={[]}
 *   groupC={[]}
 *   groupD={[]}
 *   sortedIndices={[2]}
 * />
 *
 * @param {Object} props - Component props / Свойства компонента
 * @param {number[]} props.numbers - EN: Array of values to sort. RU: Массив чисел, которые сортируются.
 * @param {number} props.maxNum - EN: Maximum value in the array (for height scaling). RU: Максимальное значение (для масштабирования высоты).
 * @param {number[]} props.groupA - EN: Indices in group A (e.g., being compared). RU: Индексы группы A (например, сравнение).
 * @param {number[]} props.groupB - EN: Indices in group B (e.g., being swapped). RU: Индексы группы B (например, обмен).
 * @param {number[]} props.groupC - EN: Optional group C. RU: Дополнительная группа C.
 * @param {number[]} props.groupD - EN: Optional group D (e.g., active focus). RU: Дополнительная группа D (например, текущий элемент).
 * @param {number[]} props.sortedIndices - EN: Indices already sorted. RU: Индексы, которые уже отсортированы.
 *
 * @returns {JSX.Element} EN: Rendered bar chart. RU: JSX-график сортировки.
 */
const getListOfBars = (
  numbers,
  maxNum,
  groupA,
  groupB,
  groupC,
  groupD,
  sortedIndices
) => {
  return numbers.map((num, i) => {
    let width = 100 / numbers.length;
    let height = (num / maxNum) * 100;
    let stateA = groupA.includes(i);
    let stateB = groupB.includes(i);
    let stateC = groupC.includes(i);
    let stateD = groupD.includes(i);
    let sorted = sortedIndices.includes(i);

    let margin =
      i === numbers.length ? '0' : width > 3 ? '0.5rem' : '0.125rem';
    return (
      <Bar
        key={`${i}_${num}`}
        width={width}
        height={height}
        val={width > 4 ? num : null}
        stateA={stateA}
        stateB={stateB}
        stateC={stateC}
        stateD={stateD}
        sorted={sorted}
        style={{ marginRight: `${margin}` }}
      />
    );
  });
};

const SortChart = ({
  numbers,
  maxNum,
  groupA,
  groupB,
  groupC,
  groupD,
  sortedIndices
}) => {
  return (
    <div className="SortChart">
      {getListOfBars(
        numbers,
        maxNum,
        groupA,
        groupB,
        groupC,
        groupD,
        sortedIndices
      )}
    </div>
  );
};

SortChart.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number),
  maxNum: PropTypes.number,
  groupA: PropTypes.arrayOf(PropTypes.number),
  groupB: PropTypes.arrayOf(PropTypes.number),
  groupC: PropTypes.arrayOf(PropTypes.number),
  groupD: PropTypes.arrayOf(PropTypes.number),
  sortedIndices: PropTypes.arrayOf(PropTypes.number)
};

export default SortChart;
