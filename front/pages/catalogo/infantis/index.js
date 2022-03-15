import React from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CardCamisa from '../../../components/CardCamisa';

import Head from 'next/head';

function Infantis(props) {
  return (
    <>
      <Head>
        <title>Catalogo Infantil - PLM Imports</title>
      </Head>

      <Header />
      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Infantis/Arsenal Infantil.jpg'>Arsenal Infantil</CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Infantis/Bayern Infantil.jpg'>
              Bayern Infantil
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Infantis/Borussia Infantil.jpg'>
              Borussia Infantil
            </CardCamisa>
          </div>
        </div>
      </div>

      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Infantis/Flamengo Infantil.jpg'>Flamengo Infantil</CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Infantis/Flamengo Infantil(1).jpg'>
              Flamengo Infantil
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Infantis/Liverpool Infantil.jpg'>
              Liverpool Infantil
            </CardCamisa>
          </div>
        </div>
      </div>

      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Infantis/Manchester City Infantil.jpg'>Manchester City Infantil</CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Infantis/Manchester United Infantil.jpg'>
              Manchester United Infantil
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Infantis/Palmeiras Infantil.jpg'>
              Palmeiras Infatil
            </CardCamisa>
          </div>
        </div>
      </div>

      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Infantis/PSG Infantil.jpg'>PSG Infantil</CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Infantis/Real Madrid Infantil.jpg'>
              Real Madrid United Infantil
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Infantis/Sao Paulo Infantil.jpg'>
              São Paulo Infatil
            </CardCamisa>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Infantis
