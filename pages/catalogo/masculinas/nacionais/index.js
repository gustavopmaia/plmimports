import React from 'react';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import CardCamisa from '../../../../components/CardCamisa';

import Head from 'next/head';

function Catalogo(props) {
  return (
    <>
      <Head>
        <title>Catalogo - PLM Imports</title>
      </Head>

      <Header />
      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Santos 21_22.png'>
              Santos 21/22
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Sao Paulo 21_22.jpg'>
              São Paulo 21/22
            </CardCamisa>
          </div>
        </div>

        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Vasco 21_22.jpg'>Vasco 21/22</CardCamisa>
          </div>
        </div>
      </div>

      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Sao Paulo 21_22.png'>
              São Paulo 21/22
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Palmeiras 22 Away.jpg'>
              Palmeiras Away 21/22
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Palmeiras 22.jpg'>
              Palmeiras 21/22
            </CardCamisa>
          </div>
        </div>
      </div>

      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Gremio 21 22.jpg'>
              Gremio 21/22
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Flamengo 21_22.jpg'>
              Flamengo 21/22
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Flamengo 21_22(1).jpg'>
              Flamengo 21/22
            </CardCamisa>
          </div>
        </div>
      </div>

      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Fluminense 21_22.jpg'>
              Fluminense 21/22
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Corinthians 21_22(2).jpg'>
              Corinthians 21/22
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Corinthians Retro 2012.jpg'>
              Corinthians Retro 12/12
            </CardCamisa>
          </div>
        </div>
      </div>

      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Corinthians 21_22.jpg'>
              Corinthians 21/22
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Corinthians 21_22(1).jpg'>
              Corinthians 21/22
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Atletico Mineiro 21_22.jpg'>
              Atlético Mineiro 21/22
            </CardCamisa>
          </div>
        </div>
      </div>

      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Athletico PR Treino.jpg'>
              Athletico PR
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Brasil 20_21.png'>
              Brasil 20/21
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Brasil Retro 2002.jpg'>
              Brasil Retro 02/02
            </CardCamisa>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Catalogo;
