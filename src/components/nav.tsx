import React, { useState } from 'react';

const Nav = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const handleMenuBtn = () => {
    setOpenNav(!openNav);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 bav" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#root">
          Ara Jo
        </a>
        <button
          className="navbar-toggler navbar-toggler-right cus-toggler-scrolled"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleMenuBtn}
        >
          <span className="navbar-toggler-icon cus-toggler-icon-scrolled"></span>
        </button>
        <div className={`collapse navbar-collapse ${openNav ? 'show' : ''}`} id="navbarResponsive">
          <ul className="navbar-nav ml-auto my-2 my-lg-0">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#interests">
                Interests
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">
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
