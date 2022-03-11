import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardCamisa from '../../components/CardCamisa';

function Catalogo(props) {
  return (
    <>
      <Header />
      <div className='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
          <CardCamisa src="/Liverpool.jpg">Liverpool</CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
          <CardCamisa src="/Liverpool.jpg">Liverpool</CardCamisa>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <CardCamisa src="/Liverpool.jpg">Liverpool</CardCamisa>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Catalogo;
