import React, { useState } from 'react';

const Nav = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const handleMenuBtn = () => {
    setOpenNav(!openNav);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="#root">
          Ara Jo
        </a>
        <button className="navbar-toggler navbar-toggler-right" type="button" onClick={handleMenuBtn}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${openNav ? 'show' : ''}`} id="navbarResponsive">
          <ul className="navbar-nav ml-auto my-2 my-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#interests">
                Interests
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
