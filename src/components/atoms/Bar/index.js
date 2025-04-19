import React from 'react';
import './style.css';
/**
 * EN: A single visual bar used in sorting visualization (e.g., Bubble Sort).
 * RU: Один визуальный столбик, используемый в визуализации сортировки (например, Bubble Sort).
 *
 * Changes its color and spacing based on current algorithm state (stateA–D or sorted).
 * Изменяет цвет и отступы в зависимости от текущего состояния алгоритма (stateA–D или sorted).
 *
 * @component
 *
 * @param {Object} props - Component props / Свойства компонента
 * @param {number} props.width - EN: Width percentage of the bar. RU: Ширина столбика в процентах.
 * @param {number} props.height - EN: Height percentage of the bar (based on value). RU: Высота столбика в процентах.
 * @param {number|string} props.val - EN: Text or number shown inside the bar. RU: Значение, отображаемое внутри столбика.
 * @param {boolean} props.stateA - EN: Is in state A (e.g., being compared). RU: Находится в состоянии A (например, сравнение).
 * @param {boolean} props.stateB - EN: Is in state B (e.g., being swapped). RU: Находится в состоянии B (например, обмен).
 * @param {boolean} props.stateC - EN: Optional visual state C. RU: Необязательное состояние C.
 * @param {boolean} props.stateD - EN: Optional visual state D (highest priority). RU: Необязательное состояние D (высший приоритет).
 * @param {boolean} props.sorted - EN: Whether the bar is already sorted. RU: Отсортирован ли этот элемент.
 * @param {React.CSSProperties} props.style - EN: Additional inline styles. RU: Дополнительные стили.
 *
 * @returns {JSX.Element} The rendered colored bar with its value / Визуальный столбик с числом
 *
 * @example
 * <Bar width={10} height={50} val={23} stateA />
 */

const Bar = ({
  width,
  height,
  val,
  stateA,
  stateB,
  stateC,
  stateD,
  sorted,
  style
}) => {
  let classNames = 'Bar';
  if (sorted) classNames += ' Bar_sorted';
  if (stateD) classNames += ' Bar_stateD';
  else if (stateC) classNames += ' Bar_stateC';
  else if (stateB) classNames += ' Bar_stateB';
  else if (stateA) classNames += ' Bar_stateA';

  let BarStyle = { ...style, width: `${width}%`, height: `${height}%` };
  if (stateA || stateB || stateC || stateD) {
    BarStyle['marginRight'] = `${0.3 * width}%`;
    BarStyle['marginLeft'] = `${0.3 * width}% `;
  }

  return (
    <div style={BarStyle} className={classNames}>
      <span className="Bar__Text">{val}</span>
    </div>
  );
};

export default Bar;
