import React from 'react'
import Ball from './Ball'

export default function Collector() {
  return (
    <div className="z-2 alert alert-dark alert-dismissible mb-0 px-2 rounded-0 sticky-b fade show" role="alert">
        <div className="container d-flex  justify-content-center">
            <Ball number="8" />
            <button className="btn btn-primary ms-5 btn-lg w-fit" type="button">Agregar favorito</button>
        </div>
    </div>
  )
}
