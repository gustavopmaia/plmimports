import React from 'react';

function Prices(props) {

  return (
    <>
      <main>
        <div class='row row-cols-1 row-cols-md-3 mb-3 m-5 text-center'>
          <div class='col'>
            <div class='card mb-4 rounded-3 shadow-sm'>
              <div class='card-header py-3'>
                <h4 class='my-0 fw-normal'>Camisa Torcedor</h4>
              </div>
              <div class='card-body'>
                <h1 class='card-title pricing-card-title'>
                  R$149,99
                </h1>
                <ul class='list-unstyled mt-3 mb-4'>
                  <li>- Lorem ipsum</li>
                  <li>- Lorem ipsum</li>
                  <li>- Lorem ipsum</li>
                  <li>- Lorem ipsum</li>
                </ul>
                <button type='button' class='w-100 btn btn-lg btn-primary'>
                  Compre agora
                </button>
              </div>
            </div>
          </div>
          <div class='col'>
            <div class='card mb-4 rounded-3 shadow-sm'>
              <div class='card-header py-3'>
                <h4 class='my-0 fw-normal'>Camisa Regata Basquete</h4>
              </div>
              <div class='card-body'>
                <h1 class='card-title pricing-card-title'>
                  R$249,99
                </h1>
                <ul class='list-unstyled mt-3 mb-4'>
                  <li>- Lorem ipsum</li>
                  <li>- Lorem ipsum</li>
                  <li>- Lorem ipsum</li>
                  <li>- Lorem ipsum</li>
                </ul>
                <button type='button' class='w-100 btn btn-lg btn-primary'>
                  Compre agora
                </button>
              </div>
            </div>
          </div>
          <div class='col'>
            <div class='card mb-4 rounded-3 shadow-sm'>
            <div class='card-header py-3'>
                <h4 class='my-0 fw-normal'>Corta Vento</h4>
              </div>
              <div class='card-body'>
                <h1 class='card-title pricing-card-title'>
                  R$249,99
                </h1>
                <ul class='list-unstyled mt-3 mb-4'>
                  <li>- Lorem ipsum</li>
                  <li>- Lorem ipsum</li>
                  <li>- Lorem ipsum</li>
                  <li>- Lorem ipsum</li>
                </ul>
                <button type='button' class='w-100 btn btn-lg btn-primary'>
                  Compre agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Prices;
