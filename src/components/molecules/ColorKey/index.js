import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
/**
 * EN: A color key (legend) component that explains what each color means in sorting visualization.
 * RU: Компонент-легенда, объясняющий значения цветов в визуализации сортировки.
 *
 * Displays boxes with labels for sorted and different algorithm states (groupA to groupD).
 * Отображает цветовые блоки и подписи для отсортированных элементов и различных состояний алгоритма (groupA–groupD).
 *
 * @component
 *
 * @param {Object} props - Component props / Свойства компонента
 * @param {string} [props.groupA] - EN: Label for Group A (e.g., comparing). RU: Подпись к группе A (например, сравнение).
 * @param {string} [props.groupB] - EN: Label for Group B (e.g., swapping). RU: Подпись к группе B (например, обмен).
 * @param {string} [props.groupC] - EN: Label for Group C (optional). RU: Подпись к группе C (необязательно).
 * @param {string} [props.groupD] - EN: Label for Group D (optional). RU: Подпись к группе D (необязательно).
 *
 * @returns {JSX.Element} EN: Rendered color legend. RU: Возвращает JSX легенды цветов.
 *
 * @example
 * <ColorKey groupA="Comparing" groupB="Swapping" />
 */

const ColorKey = ({ groupA, groupB, groupC, groupD }) => {
  const keySorted =
    groupA || groupB || groupC || groupD ? (
      <div className="ColorKey__Item">
        <div className="ColorKey__Box ColorKey__Sorted"></div>
        <span>Sorted</span>
      </div>
    ) : (
      <div className="ColorKey__Item">
        <div className="ColorKey__Box ColorKey__Unsorted"></div>
        <span>Unsorted</span>
      </div>
    );

  const keyA = groupA ? (
    <div className="ColorKey__Item">
      <div className="ColorKey__Box ColorKey__GroupA"></div>
      <span>{groupA}</span>
    </div>
  ) : null;

  const keyB = groupB ? (
    <div className="ColorKey__Item">
      <div className="ColorKey__Box ColorKey__GroupB"></div>
      <span>{groupB}</span>
    </div>
  ) : null;

  const keyC = groupC ? (
    <div className="ColorKey__Item">
      <div className="ColorKey__Box ColorKey__GroupC"></div>
      <span>{groupC}</span>
    </div>
  ) : null;

  const keyD = groupD ? (
    <div className="ColorKey__Item">
      <div className="ColorKey__Box ColorKey__GroupD"></div>
      <span>{groupD}</span>
    </div>
  ) : null;

  return (
    <div className="ColorKey">
      {keySorted}
      {keyA}
      {keyB}
      {keyC}
      {keyD}
    </div>
  );
};

ColorKey.propTypes = {
    /**
     * EN: Description for color group A (e.g., comparisons)
     * RU: Описание цветовой группы A (например, сравнение)
     */
    groupA: PropTypes.string,

    /**
     * EN: Description for color group B (e.g., swaps)
     * RU: Описание цветовой группы B (например, обмен)
     */
    groupB: PropTypes.string,

    /**
     * EN: Optional label for color group C
     * RU: Необязательная подпись к цветовой группе C
     */
    groupC: PropTypes.string,

    /**
     * EN: Optional label for color group D
     * RU: Необязательная подпись к цветовой группе D
     */
    groupD: PropTypes.string
};

ColorKey.propTypes = {
  groupA: PropTypes.string,
  groupB: PropTypes.string,
  groupC: PropTypes.string,
  groupD: PropTypes.string
};

export default ColorKey;
