
import React from 'react';
import NavigationBar from './components/BarraNavegation';
import { Carousel } from 'react-bootstrap';
import CustomCarousel from './components/Carousel';
import Cards from './components/Cards';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <CustomCarousel/>
      <br />
      <br />
      <Cards/>
    </div>
  );
};

export default App;
