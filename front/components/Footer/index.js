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
              <Link target="_blank" href='https://api.whatsapp.com/send/?phone=5511981476124&text&app_absent=0'>
                <a className='nav-link px-2 text-muted'>
                  Whatsapp
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/catalogo/masculinas'>
                <a className='nav-link px-2 text-muted'>
                  Catalogo
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link target="_blank" href='https://www.tiktok.com/@importsplm?_d=secCgwIARCbDRjEFSACKAESPgo8cx8C6VzEPmYSAxgJWpTXjr3yO5GtVJKncwwNJ9taafFmqAGpg8GLmp6k5geQxb3zB1FoTiN2R7XgFKa0GgA%3D&checksum=569de16b527ef3a662336b8d83e48be3314a693078d72c3e117f6cedef7f542c&language=pt&sec_uid=MS4wLjABAAAAvGOSgTRZumchIgt4i5NHLrOTnCnPDj-JNAcI6I4dcFXmZTgH-EcSvEAmi8TFSOXk&sec_user_id=MS4wLjABAAAAvGOSgTRZumchIgt4i5NHLrOTnCnPDj-JNAcI6I4dcFXmZTgH-EcSvEAmi8TFSOXk&share_app_id=1233&share_author_id=6913604357779293189&share_link_id=9284A32E-18BE-48AE-A6B6-75A3B89C52A6&tt_from=copy&u_code=dgb096lhf57005&user_id=6913604357779293189&utm_campaign=client_share&utm_medium=ios&utm_source=copy&source=h5_m&_r=1'>
                <a className='nav-link px-2 text-muted'>
                  TikTok
                </a>
              </Link>
            </li>
            <li className='nav-item'>
            <Link target="_blank" href='https://www.instagram.com/importsplm/'>
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
