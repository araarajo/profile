import React from 'react';
import Typed from 'react-typed';

const Home = () => {
  return (
    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-10 align-self-end">
            <h4 className="text-white first-title mb-4">Welcome</h4>
            <h1 className="header-name text-white text-capitalize mb-0">
              I'M
              <span className="element font-weight-bold">
                {' '}
                <Typed strings={['A Frontend Developer.']} typeSpeed={80} backSpeed={50} loop></Typed>
              </span>
            </h1>
            <hr className="divider my-4" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white-75 font-weight-light mb-5">
              I love programming.
              <br />
              I think how to write clean and efficient code.
              <br />I want to make things that make a different.
            </p>

            <a className="btn btn-home" href="#about">
              Find Out More
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
