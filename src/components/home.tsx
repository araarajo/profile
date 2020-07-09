import React from 'react';

function Home() {
  return (
    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-10 align-self-end">
            <div className="text-center header-content mx-auto">
              <h4 className="text-white first-title mb-4">Welcome</h4>
              <h1 className="header-name text-white text-capitalize mb-0">
                I'M <span className="element font-weight-bold">A Frontend Developer.</span>
                <span className="typed-cursor">|</span>
              </h1>
              <p className="text-white mx-auto header-desc mt-4">blablabla...</p>
              <div className="mt-4 pt-2">
                <a href="#About" className="btn-home btn-outline-custom btn-round-home">
                  Find Out More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 align-self-baseline"></div>
        </div>
      </div>
    </header>
  );
}

export default Home;
