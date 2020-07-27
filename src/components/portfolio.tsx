import React from 'react';

const Portfolio = () => {
  return (
    <section className="page-section bg-primary" id="portfolio">
      <div className="container-fluid p-0">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="text-center">
              <h2 className="text-white text-center mt-0">Portfolio</h2>
              <hr className="divider my-4" />
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-4 col-sm-6">
            <div className="portfolio-box cus-thumb">
              <img className="img-fluid cus-image" src="/images/magic.jpg" alt="" />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">LG Electronics</div>
                <div className="project-name">Magic Remote Controller</div>
                <div className="text-white-75 cus-project-detail">#C/C++ #WebOS #PatternGesture</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box cus-thumb">
              <img className="img-fluid cus-image" src="/images/lifestyle.png" alt="" />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">LG Electronics</div>
                <div className="project-name">Home IoT</div>
                <div className="text-white-75 cus-project-detail">#Javascript #JQuery #Azure #NodeJS</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box cus-thumb">
              <img className="img-fluid cus-image" src="/images/shoptalk2.jpg" alt="" />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">SK Planet</div>
                <div className="project-name">Shoptalk</div>
                <div className="text-white-75 cus-project-detail">#Angular #Typescript</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box cus-thumb">
              <img className="img-fluid cus-image" src="/images/musicmall1.png" alt="" />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">SK Planet</div>
                <div className="project-name">Musicmall</div>
                <div className="text-white-75 cus-project-detail">#Angular #Typescript</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box cus-thumb">
              <img className="img-fluid cus-image" src="/images/tworld.jpg" alt="" />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">SK Planet</div>
                <div className="project-name">T World</div>
                <div className="text-white-75 cus-project-detail">#Javascript #JQuery #Typescript #NodeJS</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box cus-thumb">
              <img className="img-fluid cus-image" src="/images/chatbot.png" alt="" />
              <div className="portfolio-box-caption p-3">
                <div className="project-category text-white-50">SK Planet</div>
                <div className="project-name">Chatbot</div>
                <div className="text-white-75 cus-project-detail">#React #Typescript</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
