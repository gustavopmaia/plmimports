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
            <CardCamisa src='/Camisas/Ajax 21_22.jpg'>Ajax 21/22</CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Alemanha 20_21.png'>
              Alemanha 20/21
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Arsenal 21_22.jpg'>
              Arsenal 21/22
            </CardCamisa>
          </div>
        </div>
      </div>

      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Barcelona Retro 05_06.jpg'>
              Barcelona Retro 05/06
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Bayern 21_22.jpg'>
              Bayern 21/22
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Borussia 21 22.jpg'>
              Borussia Dortmund 21/22
            </CardCamisa>
          </div>
        </div>
      </div>

      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Chelsea Retro 11_12.jpg'>
              Chelsea Retro 11/12
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Atletico de Madrid 21 22.jpg'>
              Atletico de Madrid 21/22
            </CardCamisa>
          </div>
        </div>

        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Barcelona 21_22.png'>
              Barcelona 21/22
            </CardCamisa>
          </div>
        </div>
      </div>

      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Holanda 20_21.png'>
              Holanda 20/21
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Inglaterra 22_23.jpg'>
              Inglaterra 22/23
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Everton 21_22.jpg'>
              Everton 21/22
            </CardCamisa>
          </div>
        </div>
      </div>

      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Liverpool 21_22.jpg'>
              Liverpool 21/22
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Manchester City 21_22.jpg'>
              Manchester City 21/22
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Manchester Retro 00_01.jpg'>
              Manchester United 00/01
            </CardCamisa>
          </div>
        </div>
      </div>

      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Milan Retro 06.jpg'>
              Milan Retro 06/06
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Totteham 21_22.jpg'>
              Totteham 21/22
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/United 21_22.jpg'>
              Manchester United 21/22
            </CardCamisa>
          </div>
        </div>
      </div>

      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Paris 21_22.jpg'>PSG 21/22</CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Real Madrid 21_22.jpg'>
              Real Madrid 21/22
            </CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Real Madrid Retro 04_05.jpg'>
              Real Madrid Retro 21/22
            </CardCamisa>
          </div>
        </div>
      </div>

      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src='/Camisas/Chelsea 21_22.jpg'>
              Chelsea 21/22
            </CardCamisa>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Catalogo;
