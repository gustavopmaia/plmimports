import React from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CardCamisa from '../../../components/CardCamisa';

import Head from 'next/head';

function Cortavento(props) {
  return (
    <>

      <Head>
        <title>Catalogo - PLM Imports</title>
      </Head>

      <Header />
      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
          <CardCamisa src="/Corta-vento/Alemanha.jpg">Alemanha</CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
          <CardCamisa src="/Corta-vento/Arsenal.jpg">Arsenal</CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src="/Corta-vento/Bayern.jpg">Bayern</CardCamisa>
          </div>
        </div>
      </div>

      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
          <CardCamisa src="/Corta-vento/Brasil.jpg">Brasil</CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
          <CardCamisa src="/Corta-vento/Corinthians.jpg">Corinthians</CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src="/Corta-vento/Gremio.jpg">Grêmio</CardCamisa>
          </div>
        </div>
      </div>

      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
          <CardCamisa src="/Corta-vento/Liverpool.jpg">Liverpool</CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
          <CardCamisa src="/Corta-vento/Manchester.jpg">Manchester United</CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src="/Corta-vento/Milan.jpg">Milan</CardCamisa>
          </div>
        </div>
      </div>

      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
          <CardCamisa src="/Corta-vento/Palmeiras.jpg">Palmeiras</CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
          <CardCamisa src="/Corta-vento/Paris.jpg">PSG</CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src="/Corta-vento/Real Madrid.jpg">Real Madrid</CardCamisa>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cortavento;
