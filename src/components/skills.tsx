import React from 'react';
import { IconContext } from 'react-icons';
import { BsDiamondFill } from 'react-icons/bs';

function Skills() {
  return (
    <section className="section bg-light" id="skills">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>
                <span className="font-weight-bold">Skills</span>
              </h2>
              <p className="text-muted mx-auto section-subtitle mt-3"></p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="text-center services-boxes rounded p-4 mt-4">
              <div className="cus-icon cus-icon-js" />
              <div className="mt-4">
                <h5 className="mb-0">Javascript</h5>
                <IconContext.Provider value={{ className: 'cus-cursor' }}>
                  <div>
                    <BsDiamondFill />
                  </div>
                </IconContext.Provider>
                <div className="progress cus-progress-wrapper">
                  <div
                    className="progress-bar cus-progress cus-progress-100"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text-center services-boxes rounded p-4 mt-4">
              <div className="cus-icon cus-icon-ts" />
              <div className="mt-4">
                <h5 className="mb-0">Typescript</h5>
                <IconContext.Provider value={{ className: 'cus-cursor' }}>
                  <div>
                    <BsDiamondFill />
                  </div>
                </IconContext.Provider>
                <div className="progress cus-progress-wrapper">
                  <div
                    className="progress-bar cus-progress cus-progress-100"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text-center services-boxes rounded p-4 mt-4">
              <div className="cus-icon cus-icon-cpp" />
              <div className="mt-4">
                <h5 className="mb-0">C/C++</h5>
                <IconContext.Provider value={{ className: 'cus-cursor' }}>
                  <div>
                    <BsDiamondFill />
                  </div>
                </IconContext.Provider>
                <div className="progress cus-progress-wrapper">
                  <div
                    className="progress-bar cus-progress cus-progress-60"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="text-center services-boxes rounded p-4 mt-4">
              <div className="cus-icon cus-icon-react" />
              <div className="mt-4">
                <h5 className="mb-0">React</h5>
                <IconContext.Provider value={{ className: 'cus-cursor' }}>
                  <div>
                    <BsDiamondFill />
                  </div>
                </IconContext.Provider>
                <div className="progress cus-progress-wrapper">
                  <div
                    className="progress-bar cus-progress cus-progress-80"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text-center services-boxes rounded p-4 mt-4">
              <div className="cus-icon cus-icon-angular" />
              <div className="mt-4">
                <h5 className="mb-0">Angular</h5>
                <IconContext.Provider value={{ className: 'cus-cursor' }}>
                  <div>
                    <BsDiamondFill />
                  </div>
                </IconContext.Provider>
                <div className="progress cus-progress-wrapper">
                  <div
                    className="progress-bar cus-progress cus-progress-100"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text-center services-boxes rounded p-4 mt-4">
              <div className="cus-icon cus-icon-node" />
              <div className="mt-4">
                <h5 className="mb-0">NodeJS</h5>
                <IconContext.Provider value={{ className: 'cus-cursor' }}>
                  <div>
                    <BsDiamondFill />
                  </div>
                </IconContext.Provider>
                <div className="progress cus-progress-wrapper">
                  <div
                    className="progress-bar cus-progress cus-progress-80"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
