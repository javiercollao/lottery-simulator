import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import ButtonsNumber from './ButtonsNumber'
import { DataContext } from '../context/DataProvider'
import { generateRandomNumbers } from '../myFunctions/randomNumbersKino';

export default function GameGenerator() {
  const value = useContext(DataContext); 
  const favoritesColletion = value.myFavoritesNumbers[0]
  const setGameSelectedNumbers = value.gameSelection[1]
  console.log(favoritesColletion)

  const handlerGenerateBtn = (fav) => {
    setGameSelectedNumbers(generateRandomNumbers(fav))
  }

  const handleCleanBtn = () => setGameSelectedNumbers([])

 
  return (
    <>
        <div className="container py-5">
            <div className="p-2 bg-carton rounded-top-3 d-flex justify-content-center">
                <span className="fw-bold text-light">GENERADOR</span> 
            </div>
            <div className="p-5 bg-carton rounded-bottom-3">
                <div className="container">
                  <ButtonsNumber></ButtonsNumber>
                  <div className="w-100 d-flex px-5 justify-content-around">
                    <Button onClick={() => handlerGenerateBtn(favoritesColletion)}>Generar</Button>
                    <Button onClick={() => handleCleanBtn()}>Limpiar</Button>
                    <Button>Guardar</Button>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}
