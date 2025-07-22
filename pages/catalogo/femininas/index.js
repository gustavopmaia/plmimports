import React from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CardCamisa from '../../../components/CardCamisa';

import Head from 'next/head';

function FemNac(props) {
  return (
    <>
      <Head>
        <title>Catalogo Feminino - PLM Imports</title>
      </Head>

      <Header />
      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Feminina/Atletico Mineiro Feminina.jpg'>Atletico Mineiro Feminina</CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Feminina/Corinthians Feminina.jpg'>
              Corinthians Feminina
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Feminina/Corinthians Feminina(1).jpg'>
              Corinthians Feminina
            </CardCamisa>
          </div>
        </div>
      </div>

      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Feminina/Cruzeiro Feminina.jpg'>Cruzeiro Feminina</CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Feminina/Flamengo Feminina.jpg'>
              Flamengo Feminina
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Feminina/Gremio Feminina.jpg'>
              Grêmio Feminina
            </CardCamisa>
          </div>
        </div>
      </div>

      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Feminina/Inter Feminina.jpg'>Internacional Feminina</CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Feminina/Palmeiras Feminina.jpg'>
              Palmeiras Feminina
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Feminina/Paris Feminina.jpg'>
              PSG Feminina
            </CardCamisa>
          </div>
        </div>
      </div>

      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Feminina/Santos Feminina.jpg'>Santos Feminina</CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Feminina/Sao Paulo Feminina (1).jpg'>
              São Paulo Feminina
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Feminina/Sao Paulo Feminina.jpg'>
              São Paulo Feminina
            </CardCamisa>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default FemNac
