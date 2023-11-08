import React from 'react';
import './style.scss';
import { APP_ROUTER } from '../../constants/appRouter';
import { Link, useLocation } from 'react-router-dom'

const HeaderComponent = () => {
  const locations = useLocation();
  const { pathname } = locations;
  // localhost:3000/about
  console.log(locations, 'locations');

  return (
    <div className='header-component'>
      <ul className='header-component__menu'>
        <li className={`
          header-component__menu-item
          ${pathname === APP_ROUTER.HOME ? 'header-component__menu-item--active' : ''}`
        }>
          <Link to={APP_ROUTER.HOME}>Home</Link>
        </li>
        <li className={`
          header-component__menu-item
          ${pathname === APP_ROUTER.ABOUT ? 'header-component__menu-item--active' : ''}`
        }>
          <Link to={APP_ROUTER.ABOUT}>About</Link>
        </li>
        <li className={`
          header-component__menu-item
          ${pathname === APP_ROUTER.TOPIC ? 'header-component__menu-item--active' : ''}`
        }>
          <Link to={APP_ROUTER.TOPIC}>Topic</Link>
        </li>
      </ul>
    </div>
  )
}

export default HeaderComponent
