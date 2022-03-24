import React from 'react';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import CardCamisa from '../../../../components/CardCamisa';

import Head from 'next/head';

function Nba(props) {
  return (
    <>

      <Head>
        <title>Catalogo - PLM Imports</title>
      </Head>

      <Header />
      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
          <CardCamisa src="/Camisas/Basquete/Lakers.jpg">Lakers</CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
          <CardCamisa src="/Camisas/Basquete/Oakland.jpg">Oakland</CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src="/Camisas/Basquete/Warriors.jpg">Warriors</CardCamisa>
          </div>
        </div>
      </div>

      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
          <CardCamisa src="/Camisas/Basquete/Brooklyn.jpeg">Brooklyn</CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
          <CardCamisa src="/Camisas/Basquete/Bulls.jpeg">Bulls</CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src="/Camisas/Basquete/Chicago.jpeg">Chicago</CardCamisa>
          </div>
        </div>
      </div>

      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
          <CardCamisa src="/Camisas/Basquete/Clippers.jpeg">Clippers</CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
          <CardCamisa src="/Camisas/Basquete/Houston.jpeg">Houston</CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src="/Camisas/Basquete/Lakers Branca.jpeg">Lakers</CardCamisa>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Nba;
