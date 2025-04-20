import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

/**
 * EN: Displays detailed information about a selected sorting algorithm.
 * RU: Отображает подробную информацию о выбранном алгоритме сортировки.
 *
 * Includes description, performance metrics (time & space complexity).
 * Включает описание и характеристики производительности (временная и пространственная сложность).
 *
 * @component
 * @example
 * <SortInfo
 *   title="Bubble Sort"
 *   description={<p>Bubble Sort is a simple algorithm...</p>}
 *   worstCase={<span>O(n²)</span>}
 *   avgCase={<span>O(n²)</span>}
 *   bestCase={<span>O(n)</span>}
 *   space={<span>O(1)</span>}
 * />
 *
 * @param {Object} props - Component props / Свойства компонента
 * @param {string} [props.title] - EN: Algorithm name. RU: Название алгоритма.
 * @param {JSX.Element} [props.description] - EN: JSX description of the algorithm. RU: JSX-описание алгоритма.
 * @param {JSX.Element} [props.worstCase] - EN: Worst-case time complexity. RU: Худшая временная сложность.
 * @param {JSX.Element} [props.avgCase] - EN: Average-case time complexity. RU: Средняя временная сложность.
 * @param {JSX.Element} [props.bestCase] - EN: Best-case time complexity. RU: Лучшая временная сложность.
 * @param {JSX.Element} [props.space] - EN: Worst-case space complexity. RU: Пространственная сложность в худшем случае.
 *
 * @returns {JSX.Element} EN: Rendered algorithm info panel. RU: JSX-блок с информацией об алгоритме.
 */
const SortInfo = ({
  title,
  description,
  worstCase,
  avgCase,
  bestCase,
  space
}) => {
  return (
    <div className="SortInfo">
      <hr />
      <h1>{title ? title : 'Select Algorithm'}</h1>

      <div className="SortInfo__Body">
        <article className="SortInfo__Article">
          <h3>Description</h3>
          {description ? (
            description
          ) : (
            <p>
              You must select an algorithm before you can visualize it's
              execution on an array of numbers.
            </p>
          )}
        </article>

        <aside className="SortInfo__Aside">
          <h3>Performance</h3>
          <table>
            <tbody>
              <tr>
                <td>Worst-case time complexity</td>
                <td>
                  <code>{worstCase}</code>
                </td>
              </tr>

              <tr>
                <td>Average time complexity</td>
                <td>
                  <code>{avgCase}</code>
                </td>
              </tr>

              <tr>
                <td>Best-case time complexity</td>
                <td>
                  <code>{bestCase}</code>
                </td>
              </tr>

              <tr>
                <td>Worst-case space complexity</td>
                <td>
                  <code>{space}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </aside>
      </div>
    </div>
  );
};

SortInfo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.object,
  worstCase: PropTypes.object,
  avgCase: PropTypes.object,
  bestCase: PropTypes.object,
  space: PropTypes.object
};

export default SortInfo;
