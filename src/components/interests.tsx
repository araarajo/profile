import React from 'react';
import { FaCat } from 'react-icons/fa';
import { GiCookingPot } from 'react-icons/gi';
import { IoMdPeople } from 'react-icons/io';
import { MdShoppingCart } from 'react-icons/md';
import { IconContext } from 'react-icons';

function Interests() {
  return (
    <section className="page-section" id="interests">
      <div className="container">
        <h2 className="text-center mt-0">Interests</h2>
        <hr className="divider my-4 cus-divider" />
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <IconContext.Provider value={{ className: 'cus-interest' }}>
                <div>
                  <FaCat />
                </div>
              </IconContext.Provider>
              <h3 className="h4 mb-2">Cat</h3>
              <p className="text-muted mb-0">#ppp</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <IconContext.Provider value={{ className: 'cus-interest' }}>
                <div>
                  <GiCookingPot />
                </div>
              </IconContext.Provider>
              <h3 className="h4 mb-2">Cooking</h3>
              <p className="text-muted mb-0">#ppp</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <IconContext.Provider value={{ className: 'cus-interest' }}>
                <div>
                  <IoMdPeople />
                </div>
              </IconContext.Provider>
              <h3 className="h4 mb-2">People</h3>
              <p className="text-muted mb-0">#ppp</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <IconContext.Provider value={{ className: 'cus-interest' }}>
                <div>
                  <MdShoppingCart />
                </div>
              </IconContext.Provider>
              <h3 className="h4 mb-2">Shopping</h3>
              <p className="text-muted mb-0">#ppp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Interests;
