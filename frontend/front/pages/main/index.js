import React from 'react';

import Header from '../../components/Header';
import Heroe from '../../components/Heroe';
import Footer from '../../components/Footer';
import Prices from '../../components/Prices';

function Home(props) {
  return (
    <>
      <Header />
      <Heroe />
      <Prices />
      <Footer />
    </>
  );
}

export default Home;
