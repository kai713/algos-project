import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

/**
 * EN: A dropdown menu component with optional toggle icon and selectable items.
 * RU: Компонент выпадающего меню с иконкой (по желанию) и возможностью выбора элементов.
 *
 * Includes a Backdrop overlay that closes the menu when clicking outside.
 * Содержит затемнение (Backdrop), чтобы закрывать меню при клике вне области.
 *
 * @component
 * @example
 * <Menu
 *   items={['Low', 'Medium', 'High']}
 *   selected="Medium"
 *   onSelect={(val) => console.log(val)}
 *   placeholder="Select priority"
 * />
 *
 * @param {Object} props - Component props / Свойства компонента
 * @param {string} [props.className] - EN: Optional additional class names. RU: Дополнительные CSS-классы.
 * @param {string} [props.selected] - EN: Currently selected value. RU: Текущее выбранное значение.
 * @param {function} [props.onSelect] - EN: Callback when an item is selected. RU: Функция при выборе элемента.
 * @param {string} [props.placeholder] - EN: Placeholder text when no item is selected. RU: Текст-заглушка, если ничего не выбрано.
 * @param {string[]} [props.items] - EN: List of menu options. RU: Массив вариантов меню.
 * @param {boolean} [props.noDropIcon] - EN: If true, hides the drop-down icon. RU: Если true — не показывать иконку раскрытия.
 *
 * @returns {JSX.Element} The rendered dropdown menu component.
 */
import Backdrop from '../../atoms/Backdrop';
import {
  MdExpandMore as AngleDown,
  MdExpandLess as AngleUp
} from 'react-icons/md';
import Button from '../../atoms/Button';

const MenuList = ({ open, items, onSelect }) => {
  return open ? (
    <ul className="Menu__List">
      {items.map((item, i) => (
        <li
          key={`${item}_${i}`}
          onClick={(evt) => {
            onSelect(evt, item);
          }}
          className="Menu__Item"
        >
          {item}
        </li>
      ))}
    </ul>
  ) : null;
};

class Menu extends Component {
  state = {
    open: this.props.open || false
  };

  close = (evt) => {
    evt.preventDefault();
    this.setState({ open: false });
  };

  toggle = (evt) => {
    evt.preventDefault();
    this.setState((prevState) => ({ open: !prevState.open }));
  };

  render() {
    const {
      className,
      selected,
      onSelect,
      placeholder,
      items,
      noDropIcon
    } = this.props;

    return (
      <div>
        <Backdrop show={this.state.open} onClick={this.close} />
        <div className={`Menu ${className}`}>
          <header className="Menu__Header">
            {noDropIcon ? (
              <Button
                onClick={this.toggle}
                notCased
                className={selected ? null : 'Menu__Placeholder'}
              >
                {selected ? selected : placeholder}
              </Button>
            ) : (
              <div
                className={
                  selected ? 'Menu__SelectedItem' : 'Menu__Placeholder'
                }
              >
                {selected ? selected : placeholder}
              </div>
            )}
            {noDropIcon ? null : (
              <Button
                icon={this.state.open ? AngleUp : AngleDown}
                onClick={this.toggle}
              />
            )}
          </header>
          <MenuList
            open={this.state.open}
            items={items}
            onSelect={(evt, item) => {
              onSelect(item);
              this.close(evt);
            }}
          />
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  className: PropTypes.string,
  selected: PropTypes.string,
  onSelect: PropTypes.func,
  placeholder: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  noDropIcon: PropTypes.bool
};

export default Menu;
