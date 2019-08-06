import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from "../styles";

const Navigation = () => (
  <Nav>
    <ul className="nav__list">
      <li className="nav__list-item">
        <NavLink
          className="nav__list-link"
          to={{ pathname: "/feed/husky", state: { category: "husky" } }}
          activeClassName="is-active"
        >
          husky
        </NavLink>
      </li>
      <li className="nav__list-separator">/</li>
      <li className="nav__list-item">
        <NavLink
          className="nav__list-link"
          to={{ pathname: "/feed/labrador", state: { category: "labrador" } }}
          activeClassName="is-active"
        >
          labrador
        </NavLink>
      </li>
      <li className="nav__list-separator">/</li>
      <li className="nav__list-item">
        <NavLink
          className="nav__list-link"
          to={{ pathname: "/feed/hound", state: { category: "hound" } }}
          activeClassName="is-active"
        >
          ound
        </NavLink>
      </li>
      <li className="nav__list-separator">/</li>
      <li className="nav__list-item">
        <NavLink
          className="nav__list-link"
          to={{ pathname: "/feed/pug", state: { category: "pug" } }}
          activeClassName="is-active"
        >
          pug
        </NavLink>
      </li>
    </ul>
  </Nav>
);

export default Navigation