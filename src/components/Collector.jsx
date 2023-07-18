import React, { useContext, useEffect } from 'react'
import Ball from './Ball'
import { DataContext } from '../context/DataProvider'; 

export default function Collector() {
    const value = useContext(DataContext); 

    const numberSelection =  value.mySelection[0];
    const setNumberSelection = value.mySelection[1]
 
    const favoritesColletion = value.myFavoritesNumbers[0]
    const addFavoriteNumber = value.addFavoriteFn 

    const buttonState = value.btnState[0]
    const setButtonState = value.btnState[1]

    const sendFavorite = (myNumber) => {
        addFavoriteNumber(myNumber)
        setNumberSelection()
        setButtonState(true)
    }

    let attribute
    if(favoritesColletion.includes(numberSelection)){
        attribute = "consecutive"
        useEffect(() => { 
            setButtonState(true)
        }, []);
    }else if(numberSelection === undefined){
        attribute = "alone"
        useEffect(() => { 
            setButtonState(true)
        }, []);
    }else{
        attribute = "alone"
        useEffect(() => { 
            setButtonState(false)
        }, []);
    }
        
  return (
    <div className="z-2 alert alert-dark alert-dismissible mb-0 px-2 rounded-0 sticky-b fade show" role="alert">
        <div className="container d-flex  justify-content-center">
        <Ball number={numberSelection} type={attribute} />
            <button className="btn btn-primary ms-5 btn-lg w-fit" disabled={buttonState} type="button" onClick={() => sendFavorite(numberSelection)}>Agregar favorito</button>
        </div>
    </div>
  )
}
