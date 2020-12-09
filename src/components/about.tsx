import React from 'react';
import useVisible from './common/visible-hooks';

const About = () => {
  const element = useVisible();
  return (
    <section {...element} className="page-section bg-primary" id="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-white mt-0">Hello, I'M Ara Jo.</h2>
            <hr className="divider light my-4" />
            <p className="text-white-50 mb-4">
              Hyundai Motors 2020.12 ~<br />
              SK Planet 2016.08 ~ 2020.12
              <br />
              LG Electronics 2010.12 ~ 2016.08
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
