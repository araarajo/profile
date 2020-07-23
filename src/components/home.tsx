import React from 'react';

function Home() {
  return (
    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-10 align-self-end">
            <h4 className="text-white first-title mb-4">Welcome</h4>
            <h1 className="header-name text-white text-capitalize mb-0 cus-home-title">
              I'M <span className="element font-weight-bold">A Frontend Developer.</span>
              <span className="typed-cursor">|</span>
            </h1>
            <hr className="divider my-4 cus-divider" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white-75 font-weight-light mb-5">blblblblblblbblblblblblblblblblblblblblblblblblbl</p>
            <a className="btn-home btn-outline-custom btn-round-home" href="#about">
              Find Out More
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;
