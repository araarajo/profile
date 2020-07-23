import React, { Fragment } from 'react';
import Nav from './components/nav';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Interests from './components/interests';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

function App() {
  return (
    <Fragment>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Interests />
      <Portfolio />
      <Contact />
    </Fragment>
  );
}

export default App;
