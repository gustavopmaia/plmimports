import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

function Footer(props) {
  return (
    <>
      <div className='container'>
        <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
          <p className='col-md-4 mb-0 text-muted'>&copy; 2022 PLM Imports</p>

          <Link href='#'>
            <a className='col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none'>
              <Image src="/LogoPLM.png" alt="LogoPLM" width={120} height={65}/>
            </a>
          </Link>

          <ul className='nav col-md-4 justify-content-end'>
            <li className='nav-item'>
              <Link href='#'>
                <a className='nav-link px-2 text-muted'>
                  Whatsapp
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='#'>
                <a className='nav-link px-2 text-muted'>
                  Catalogo
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='#'>
                <a className='nav-link px-2 text-muted'>
                  TikTok
                </a>
              </Link>
            </li>
            <li className='nav-item'>
            <Link href='#'>
                <a className='nav-link px-2 text-muted'>
                  Instagram
                </a>
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default Footer;
