import React, { useContext, useState } from 'react' 
import DataProvider, { DataContext } from '../context/DataProvider';
import { settings } from '../data/settings';

export default function ButtonBall({number, selected}) {
    
    const value = useContext(DataContext); 
    const [buttonStyleState, setState] = useState(selected)
    const gameSelectedNumbers = value.gameSelection[0]
    const removeGameNumber = value.removeGameNumberFn
    const addGameSelection = value.addGameSelectionFn

  
    let style;
    if(buttonStyleState){
        style = "bola"
    }else{
        style = "bola bola-noSeleccionada"
    }

    const styleButtonHandle = () => {
        if( gameSelectedNumbers.length < settings.numbersToChooseCount){
            setState(!buttonStyleState) 
        }
    }

    const handlerButtonAddGame = (n) => {
        if(!buttonStyleState && gameSelectedNumbers.length < settings.numbersToChooseCount){
            addGameSelection(n)
            console.log(buttonStyleState)
        }else{
            removeGameNumber(n)
            console.log("removed")
            console.log(buttonStyleState)
        }
        styleButtonHandle()
    }
    
  return (
    <>
        <span className={style}  onClick={() => handlerButtonAddGame(number)}>{number}</span>  
    </>
  )
}
