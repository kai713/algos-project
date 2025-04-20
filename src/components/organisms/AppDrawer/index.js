import React, { Fragment } from 'react';
import './style.css';

import Backdrop from '../../atoms/Backdrop';


/**
 * EN: A sidebar drawer component that slides in/out from the side of the screen.
 * RU: Компонент бокового меню (drawer), который выдвигается и скрывается сбоку экрана.
 *
 * Includes a backdrop that closes the drawer when clicked.
 * Содержит затемнение (Backdrop), при клике по которому меню закрывается.
 *
 * @component
 * @example
 * <AppDrawer open={true} closeDrawer={() => setOpen(false)}>
 *   <p>Navigation content</p>
 * </AppDrawer>
 *
 * @param {Object} props - Component props / Свойства компонента
 * @param {boolean} props.open - EN: Whether the drawer is open. RU: Открыт ли drawer.
 * @param {React.ReactNode} props.children - EN: Content inside the drawer. RU: Содержимое drawer'а.
 * @param {function} props.closeDrawer - EN: Function to call when the backdrop is clicked. RU: Функция для закрытия при клике по фону.
 *
 * @returns {JSX.Element} Rendered drawer component with overlay.
 */
const AppDrawer = ({ open, children, closeDrawer }) => {
  let className = 'AppDrawer';
  className += open ? ` AppDrawer_open` : ` AppDrawer_closed`;
  return (
    <Fragment>
      <div className={className}>
        <div className="AppDrawer__Content">{children}</div>
      </div>
      <Backdrop show={open} onClick={closeDrawer} />
    </Fragment>
  );
};

export default AppDrawer;
