import React, { Fragment } from 'react';
import Nav from './components/nav';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

function App() {
  return (
    <Fragment>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
    </Fragment>
  );
}

export default App;
