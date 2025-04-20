import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { CSS_CLASSES } from './constants';

/**
 * EN: Combines root, conditional, and user-defined class names into a single string.
 * RU: Объединяет корневой, условные и пользовательские классы в одну строку.
 *
 * @param {string} rootClass - EN: Always included base class. RU: Основной класс, который всегда добавляется.
 * @param {Object<string, boolean>} ClassMappings - EN: Map of className -> condition. RU: Объект с именами классов и условиями их применения.
 * @param {string} userClassName - EN: Additional className passed by user. RU: Дополнительные классы, указанные пользователем.
 * @returns {string} EN: Final string of all applicable class names. RU: Конечная строка всех применённых классов.
 */

function buildClassNames(rootClass, ClassMappings, userClassName) {
  let classNames = `${rootClass}`;
  Object.keys(ClassMappings).forEach((className) => {
    if (ClassMappings[className]) {
      classNames += ` ${className}`;
    }
  });
  classNames += ` ${userClassName}`;
  return classNames;
}

/**
 * EN: A backdrop overlay component, often used for modals or popups.
 * RU: Компонент-затемнение, часто используется для модалок и всплывающих окон.
 *
 * @component
 * @param {Object} props - EN: Props object. RU: Объект свойств компонента.
 * @param {boolean} props.show - EN: Whether the backdrop is visible. RU: Показывать ли затемнение.
 * @param {boolean} props.opaque - EN: Makes backdrop opaque. RU: Делает фон непрозрачным.
 * @param {boolean} props.dark - EN: Applies dark styling. RU: Применяет тёмную тему.
 * @param {string} [props.className] - EN: Extra custom class. RU: Дополнительные пользовательские классы.
 * @param {function} [props.onClick] - EN: Click handler for backdrop. RU: Обработчик нажатия на фон.
 * @returns {JSX.Element|null} EN: Rendered backdrop or null. RU: Возвращает элемент затемнения или null.
 *
 * @example
 * // EN: Simple dark backdrop with click
 * // RU: Простое затемнение с тёмной темой и кликом
 * <Backdrop show={true} opaque={true} dark={true} onClick={handleClose} />
 */
const Backdrop = ({ show, opaque, dark, className, onClick }) => {
  const classNames = buildClassNames(
    CSS_CLASSES.ROOT,
    {
      [CSS_CLASSES.OPAQUE]: opaque,
      [CSS_CLASSES.DARK]: dark,
      [CSS_CLASSES.CLICKABLE]: onClick !== undefined
    },
    className
  );

  return show ? <div className={classNames} onClick={onClick} /> : null;
};
Backdrop.propTypes = {
  /**
   * EN: Whether the backdrop should be shown.
   * RU: Должно ли отображаться затемнение.
   */
  show: PropTypes.bool,

  /**
   * EN: If true, the backdrop is opaque.
   * RU: Если true — фон непрозрачный.
   */
  opaque: PropTypes.bool,

  /**
   * EN: If true, applies dark theme.
   * RU: Если true — применяется тёмная тема.
   */
  dark: PropTypes.bool,

  /**
   * EN: Additional CSS class names.
   * RU: Дополнительные CSS классы.
   */
  className: PropTypes.string,

  /**
   * EN: Function to handle clicks on backdrop.
   * RU: Функция для обработки кликов по фону.
   */
  onClick: PropTypes.func
};

Backdrop.propTypes = {
  show: PropTypes.bool,
  opaque: PropTypes.bool,
  dark: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
};
export default Backdrop;
