import React from 'react';

function CardCamisa(props) {
  console.log(props);
  return (
    <>
      <div class='card'>
        <img class='card-img-top' src={props.src} alt='Card image cap' />
        <div class='card-body'>
          <h5 class='card-title'>{props.children}</h5>
          <p class='card-text'>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <div class='card-footer'>
          <a href='#' className='btn btn-primary'>
            Compre agora
          </a>
        </div>
      </div>
    </>
  );
}

export default CardCamisa;
