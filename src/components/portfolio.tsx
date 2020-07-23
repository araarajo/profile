import React from 'react';

function Portfolio() {
  return (
    <section className="page-section bg-primary cus-bg-primary" id="portfolio">
      <div className="container-fluid p-0">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="text-center">
              <h2 className="text-white text-center mt-0">Portfolio</h2>
              <hr className="divider my-4 cus-divider" />
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href="">
              <img className="img-fluid" src="/images/IMG_0156.jpg" alt="" />
              <div className="portfolio-box-caption cus-caption">
                <div className="project-category text-white-50">LG Electronics</div>
                <div className="project-name">Magic Remote Control</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href="">
              <img className="img-fluid" src="/images/IMG_9768.jpg" alt="" />
              <div className="portfolio-box-caption cus-caption">
                <div className="project-category text-white-50">LG Electronics</div>
                <div className="project-name">Home IoT</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href="">
              <img className="img-fluid" src="/images/IMG_0156.jpg" alt="" />
              <div className="portfolio-box-caption cus-caption">
                <div className="project-category text-white-50">SK Planet</div>
                <div className="project-name">Shoptalk</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href="">
              <img className="img-fluid" src="/images/IMG_9768.jpg" alt="" />
              <div className="portfolio-box-caption cus-caption">
                <div className="project-category text-white-50">SK Planet</div>
                <div className="project-name">Musicmall</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href="">
              <img className="img-fluid" src="/images/IMG_0156.jpg" alt="" />
              <div className="portfolio-box-caption cus-caption">
                <div className="project-category text-white-50">SK Planet</div>
                <div className="project-name">T World</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href="">
              <img className="img-fluid" src="/images/IMG_9768.jpg" alt="" />
              <div className="portfolio-box-caption p-3 cus-caption">
                <div className="project-category text-white-50">SK Planet</div>
                <div className="project-name">Chatbot</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
