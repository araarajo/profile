import React from 'react';
import { FaInstagramSquare, FaGithubSquare, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Contact = () => {
  return (
    <section className="page-section bg-light" id="contact">
      <div className="container">
        <h2 className="text-center mt-0">Contact</h2>
        <hr className="divider my-4" />
        <div className="row justify-content-center text-center">
          <div className="col-md-12">
            <div className="text-center text-white">
              <ul className="list-unstyled list-inline mb-3">
                <li className="list-inline-item">
                  <a href="mailto:elishaara@gmail.com">
                    <IconContext.Provider value={{ className: 'cus-contact' }}>
                      <div>
                        <FaEnvelope />
                      </div>
                    </IconContext.Provider>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/araarajo" target="_blank">
                    <IconContext.Provider value={{ className: 'cus-contact' }}>
                      <div>
                        <FaGithubSquare />
                      </div>
                    </IconContext.Provider>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="mailto:elishaara@gmail.com">
                    <IconContext.Provider value={{ className: 'cus-contact' }}>
                      <div>
                        <FaLinkedin />
                      </div>
                    </IconContext.Provider>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="http://instagram.com/mangmoca" target="_blank">
                    <IconContext.Provider value={{ className: 'cus-contact' }}>
                      <div>
                        <FaInstagramSquare />
                      </div>
                    </IconContext.Provider>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
