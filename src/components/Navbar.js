import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const pages = [
    {
      id: 1,
      path: '/BookStore-React-Redex/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/BookStore-React-Redex/categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <div className="nav">
      <ul className="nav__list">
        <h1 className="nav__heading">BookStore CMD</h1>
        {pages.map((page) => (
          <li key={page.id}>
            <NavLink to={page.path} activeClassName="active-link" exact>
              {page.text}
            </NavLink>
          </li>
        ))}
        <div className="user-img">
          <ion-icon name="person"> </ion-icon>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
