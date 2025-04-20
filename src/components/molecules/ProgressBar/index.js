import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

/**
 * EN: A simple horizontal progress bar component.
 * RU: Простой горизонтальный компонент индикатора прогресса.
 *
 * The filled part of the bar is controlled via the `width` prop in percentage.
 * Заполненная часть шкалы контролируется через `width` (в процентах).
 *
 * @component
 * @example
 * // EN: Render 70% progress
 * // RU: Отображение прогресса на 70%
 * <ProgressBar width={70} />
 *
 * @param {Object} props - Component props / Свойства компонента
 * @param {number} props.width - EN: Progress percentage (0–100). RU: Процент выполнения (от 0 до 100).
 *
 * @returns {JSX.Element} EN: Rendered progress bar. RU: Возвращает JSX индикатора прогресса.
 */
const ProgressBar = ({ width }) => (
  <div className="ProgressBar">
    <div
      className="ProgressBar__Active"
      style={{
        width: `${width}%`
      }}
    ></div>
  </div>
);

ProgressBar.propTypes = {
  width: PropTypes.number.isRequired
};

export default ProgressBar;
