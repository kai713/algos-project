import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { CSS_CLASSES } from './constants';

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

function renderIcon(icon, iconClass) {
  const ICON = icon;
  return <ICON className={`${CSS_CLASSES.ICON} ${iconClass}`} />;
}
/**
 * EN: A flexible button component that supports styles like raised, outlined, dense, and more.
 * RU: Гибкий компонент кнопки с поддержкой стилей (поднятая, контурная, плотная и т.д.) и иконок.
 *
 * @component
 *
 * @param {Object} props - Component properties / Свойства компонента
 * @param {string} [props.className] - EN: Additional CSS classes. RU: Дополнительные CSS классы.
 * @param {boolean} [props.raised] - EN: Applies elevated (raised) button style. RU: Добавляет тень (поднятая кнопка).
 * @param {boolean} [props.unelevated] - EN: Flat button without shadow. RU: Кнопка без тени (плоская).
 * @param {boolean} [props.outlined] - EN: Outlined button. RU: Кнопка с контуром.
 * @param {boolean} [props.dense] - EN: Dense layout (compact padding). RU: Компактный вариант кнопки.
 * @param {boolean} [props.notCased] - EN: If true, disables uppercase styling. RU: Если true — не использовать заглавные буквы.
 * @param {boolean} [props.disabled] - EN: Disables the button. RU: Отключает кнопку.
 * @param {React.ElementType|string} [props.icon] - EN: Optional icon component (e.g., from react-icons). RU: Необязательная иконка (например, из react-icons).
 * @param {string} [props.iconClass] - EN: Additional CSS class for the icon. RU: Класс для стилизации иконки.
 * @param {string} [props.href] - EN: If specified, renders an anchor (`<a>`) instead of `<button>`. RU: Если передано — рендерится `<a>`, а не `<button>`.
 * @param {Function} [props.onClick] - EN: Callback function on click. RU: Обработчик события при клике.
 * @param {React.ReactNode} [props.children] - EN: Content inside the button. RU: Внутреннее содержимое кнопки (текст/иконки/элементы).
 *
 * @returns {JSX.Element} EN: Rendered button or anchor. RU: Возвращает JSX для кнопки или ссылки.
 *
 * @example
 * <Button raised icon={FaCheck} onClick={handleClick}>Save</Button>
 */

const Button = ({
  className,
  raised,
  unelevated,
  outlined,
  dense,
  notCased,
  disabled,
  icon,
  iconClass,
  href,
  onClick,
  children
}) => {
  /**
   * EN: Combines root class with conditional classes and custom user class.
   * RU: Объединяет базовый класс с условными классами и пользовательскими.
   *
   * @param {string} rootClass - EN: Base/root class. RU: Базовый (основной) класс.
   * @param {Object<string, boolean>} ClassMappings - EN: Class names mapped to condition booleans. RU: Классы и условия их применения.
   * @param {string} userClassName - EN: Additional user-provided class. RU: Класс, переданный пользователем.
   * @returns {string} EN: Final string of concatenated class names. RU: Строка со всеми нужными CSS-классами.
   */
  const classNames = buildClassNames(
    CSS_CLASSES.ROOT,
    {
      [CSS_CLASSES.DENSE]: dense,
      [CSS_CLASSES.RAISED]: raised,
      [CSS_CLASSES.OUTLINED]: outlined,
      [CSS_CLASSES.UNELEVATED]: unelevated,
      [CSS_CLASSES.UPPERCASE]: !notCased
    },
    className
  );

  if (href) {
    return (
      <a href={href} className={classNames} disabled={disabled}>
        {icon ? renderIcon(icon, iconClass) : null}
        <span className="Button__Label">{children}</span>
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classNames}
      disabled={disabled}
    >
      {icon ? renderIcon(icon, iconClass) : null}
      <span className="Button__Label">{children}</span>
    </button>
  );
};
Button.propTypes = {
  /** EN: Additional CSS classes. RU: Дополнительные CSS классы. */
  className: PropTypes.string,

  /** EN: Adds elevated (raised) style. RU: Поднятая кнопка (с тенью). */
  raised: PropTypes.bool,

  /** EN: Flat button without elevation. RU: Плоская кнопка (без тени). */
  unelevated: PropTypes.bool,

  /** EN: Outlined button style. RU: Контурная кнопка. */
  outlined: PropTypes.bool,

  /** EN: Compact version with reduced padding. RU: Компактная кнопка. */
  dense: PropTypes.bool,

  /** EN: Disable uppercase transformation. RU: Не использовать заглавные буквы. */
  notCased: PropTypes.bool,

  /** EN: Disable the button. RU: Отключение кнопки. */
  disabled: PropTypes.bool,

  /** EN: Optional icon component (e.g., FaPlus). RU: Необязательная иконка (например, FaPlus). */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

  /** EN: Render an <a> tag instead of <button>. RU: Рендерить <a> вместо <button>. */
  href: PropTypes.string,

  /** EN: Click event handler. RU: Обработчик клика. */
  onClick: PropTypes.func,

  /** EN: Button content (text, icon, etc.). RU: Контент кнопки (текст, иконки и т.д.). */
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node])
};

Button.propTypes = {
  className: PropTypes.string,
  raised: PropTypes.bool,
  unelevated: PropTypes.bool,
  outlined: PropTypes.bool,
  dense: PropTypes.bool,
  notCased: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node])
};

export default Button;
