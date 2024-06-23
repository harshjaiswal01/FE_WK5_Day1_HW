import React from 'react';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Contact />
    </div>
  );
};

export default App;
