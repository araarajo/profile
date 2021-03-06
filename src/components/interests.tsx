import React from 'react';
import { FaCat } from 'react-icons/fa';
import { GiCookingPot } from 'react-icons/gi';
import { IoMdPeople } from 'react-icons/io';
import { MdShoppingCart } from 'react-icons/md';
import { IconContext } from 'react-icons';
import useVisible from './common/visible-hooks';

const Interests = () => {
  const { visibility, ref } = useVisible();

  return (
    <section ref={ref} className="page-section" id="interests">
      <div className="container">
        <h2 className={`text-center mt-0 ${visibility ? 'slide-in' : ''}`}>Interests</h2>
        <hr className={`divider my-4 ${visibility ? 'slide-in' : ''}`} />
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <IconContext.Provider value={{ className: 'cus-interest' }}>
                <div>
                  <FaCat className={`${visibility ? 'ani-bell' : ''}`} />
                </div>
              </IconContext.Provider>
              <h3 className={`h4 mb-2 ${visibility ? 'slide-up' : ''}`}>Cat</h3>
              <p className="text-muted mb-0">#mango #moca #cute #meow</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <IconContext.Provider value={{ className: 'cus-interest' }}>
                <div>
                  <GiCookingPot className={`${visibility ? 'ani-bell' : ''}`} />
                </div>
              </IconContext.Provider>
              <h3 className={`h4 mb-2 ${visibility ? 'slide-up delay-1' : ''}`}>Cooking</h3>
              <p className="text-muted mb-0">#eat #yummy #delicious #alcohol</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <IconContext.Provider value={{ className: 'cus-interest' }}>
                <div>
                  <IoMdPeople className={`${visibility ? 'ani-bell' : ''}`} />
                </div>
              </IconContext.Provider>
              <h3 className={`h4 mb-2 ${visibility ? 'slide-up delay-2' : ''}`}>People</h3>
              <p className="text-muted mb-0">#talking #friends #life #blablabla</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <IconContext.Provider value={{ className: 'cus-interest' }}>
                <div>
                  <MdShoppingCart className={`${visibility ? 'ani-bell' : ''}`} />
                </div>
              </IconContext.Provider>
              <h3 className={`h4 mb-2 ${visibility ? 'slide-up delay-3' : ''}`}>Shopping</h3>
              <p className="text-muted mb-0">#flex #online #sale #shipping</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
