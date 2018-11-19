import React, {Component} from "react";
import {Link} from "react-router-dom";

import "./index.css";

export default ({}) => {
  return (
    <header className="header">
      <img className="header__logo" src="/images/logo.svg" alt="" />
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__element">
            <Link className="navigation__link" to="/">
              Strona główna
            </Link>
          </li>
          <li className="navigation__element">
            <Link className="navigation__link" to="/addCrime">
              Dodaj przestepstwo
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
