import React from 'react'
import {} from 'reactstrap'

import Image from 'next/image'

function Heroe(props){
  return(
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <Image src="/Liverpool.jpg" className="d-block mx-lg-auto img-fluid" width="600" height="600" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">PLM Imports</h1>
            <p className="lead">Temos camisetas com qualidade excelentes, venha comprar agora!</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Compre agora</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Catalogo</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Heroe