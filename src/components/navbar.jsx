import React from "react";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="placeholder">
      <div
        className="parallax-window"
        data-parallax="scroll"
        data-image-src="img/simple-house-01.jpg"
      >
        <div className="tm-header">
          <div className="row tm-header-inner">
            <div className="col-md-6 col-12"></div>
            <nav className="col-md-6 col-12 tm-nav">
              <ul className="tm-nav-ul">
                <li className="tm-nav-li">
                  <NavLink to="/home" className="tm-nav-link ">
                    Home
                  </NavLink>
                </li>
                <li className="tm-nav-li">
                  <NavLink to="/menu" className="tm-nav-link">
                    Menu
                  </NavLink>
                </li>
                <li className="tm-nav-li">
                  <NavLink to="/cart" className="tm-nav-link">
                    Shopping Cart
                  </NavLink>
                </li>
                <li className="tm-nav-li">
                  <NavLink to="/admin" className="tm-nav-link">
                    Admin
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
