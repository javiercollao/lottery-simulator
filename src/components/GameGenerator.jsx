import React from 'react'
import { Button } from 'react-bootstrap'
import ButtonsNumber from './ButtonsNumber'

export default function GameGenerator() {
  return (
    <>
        <div class="container py-5">
            <div className="p-2 bg-carton rounded-top-3 d-flex justify-content-center">
                <span className="fw-bold text-light">GENERADOR</span> 
            </div>
            <div class="p-5 bg-carton rounded-bottom-3">
                <div class="container">
                  <ButtonsNumber></ButtonsNumber>
                  <div className="w-100 d-flex px-5 justify-content-around">
                    <Button>Generar</Button>
                    <Button>Limpiar</Button>
                    <Button>Guardar</Button>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}
