import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
/**
 * EN: Custom toggle switch component that manages its own state and calls a callback on toggle.
 * RU: Кастомный компонент-переключатель, который управляет своим состоянием и вызывает колбэк при смене состояния.
 *
 * @component
 * @example
 * // EN: Example usage of Switch
 * // RU: Пример использования Switch
 * <Switch checked={true} onSwitch={() => console.log('toggled')} label="Dark Mode" />
 */
class Switch extends Component {
  state = {
    checked: false
  };
  /**
   * EN: Initializes `checked` state from props after component mounts.
   * RU: Инициализирует состояние `checked` из props после монтирования компонента.
   */
  componentDidMount() {
    if (this.props.checked) {
      this.setState({ checked: this.props.checked });
    }
  }

  /**
   * EN: Updates `checked` state if `checked` prop has changed.
   * RU: Обновляет состояние `checked`, если изменился prop `checked`.
   *
   * @param {Object} prevProps - EN: Previous props. RU: Предыдущие свойства.
   */
  componentDidUpdate(prevProps) {
    if (prevProps.checked !== this.props.checked) {
      this.setState({ checked: this.props.checked });
    }
  }


  toggleChecked = () => {
    this.setState((prevState) => ({ checked: !prevState.checked }));
  };

  handleClick = (e) => {
    e.preventDefault();
    this.toggleChecked();
    this.props.onSwitch();
  };

  render() {
    let Switch = `Switch`;
    if (this.state.checked) Switch += ` Switch_checked`;
    if (this.props.className) Switch += ` ${this.props.className}`;
    return (
      <div className={Switch}>
        <label className="Switch__Label" htmlFor="Switch__Thumb">
          {this.props.label}
        </label>

        <div className="Switch__Button">
          <div className="Switch__Track"></div>
          <input
            className="Switch__Thumb"
            onClick={this.handleClick}
            name="Switch__Thumb"
            id="Switch__Thumb"
            type="button"
          ></input>
        </div>
      </div>
    );
  }
}

Switch.propTypes = {
  onSwitch: PropTypes.func,
  className: PropTypes.string
};

export default Switch;
