import React from 'react';

import Header from '../components/Header';
import Heroe from '../components/Heroe';
import Footer from '../components/Footer';
import Prices from '../components/Prices';

import Head from 'next/head';

function Home(props) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <title>Home - PLM Imports</title>
        <meta name='keywords' content='loja,plm,plimports,plmimports,importsplm,importspl,camisa,time,camisatime,timecamisa,lojacamisatime,timecamisaloja,lojacamisa,timeloja' />
        <meta name='author' content='Syamlal CM' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <Header />
      <Heroe />
      <Prices />
      <Footer />
    </>
  );
}

export default Home;
