import React from 'react';

function Footer(props) {
  return (
    <>
      <div class='container'>
        <footer class='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
          <p class='col-md-4 mb-0 text-muted'>&copy; 2022 PLM Imports</p>

          <a
            href='/'
            class='col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none'
          >
            <img src="LogoPLM.png" width={120}/>
          </a>

          <ul class='nav col-md-4 justify-content-end'>
            <li class='nav-item'>
              <a href='#' class='nav-link px-2 text-muted'>
                Whatsapp
              </a>
            </li>
            <li class='nav-item'>
              <a href='#' class='nav-link px-2 text-muted'>
                Catalogo
              </a>
            </li>
            <li class='nav-item'>
              <a href='#' class='nav-link px-2 text-muted'>
                TikTok
              </a>
            </li>
            <li class='nav-item'>
              <a href='#' class='nav-link px-2 text-muted'>
                Instagram
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default Footer;
