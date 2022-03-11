import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

function CardCamisa(props) {
  return (
    <>
      <div className='card'>
        <Image src={props.src} alt='Camisa' className='card-img-top' layout='responsive' width={280} height={280} />
        <div className='card-body'>
          <h5 className='card-title'>{props.children}</h5>
          <p className='card-text'>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <div className='card-footer'>
          <Link href='#'>
            <a className='btn btn-primary'>
              Compre agora
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CardCamisa;
