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
        </div>
        <div className='card-footer'>
          <Link target="_blank" href='https://api.whatsapp.com/send/?phone=5511981476124&text&app_absent=0'>
            <a target="_blank" className='btn btn-primary'>
              Compre agora
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CardCamisa;
