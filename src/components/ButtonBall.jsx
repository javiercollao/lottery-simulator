import React, { useContext, useState } from 'react' 
import { DataContext } from '../context/DataProvider';
import { settings } from '../data/settings';

export default function ButtonBall({number, selected}) {
    
    
    const value = useContext(DataContext); 
    const [buttonStyleState, setState] = useState(selected)
    const gameSelectedNumbers = value.gameSelection[0]
    const removeGameNumber = value.removeGameNumberFn
    const addGameSelection = value.addGameSelectionFn
    
    let style = selected ? "bola":  "bola bola-noSeleccionada" ;
 
    const styleButtonHandle = () => {
        if( gameSelectedNumbers.length < settings.numbersToChooseCount){
            setState(!buttonStyleState) 
        }
    }

    const handlerButtonAddGame = (n) => {
        if(!buttonStyleState && gameSelectedNumbers.length < settings.numbersToChooseCount){
            addGameSelection(n) 
        }else{ 
            removeGameNumber(n)  
        }
        styleButtonHandle()
    }
    
  return (
    <>
        <span className={style}   onClick={() => handlerButtonAddGame(number)}>{number}</span>  
    </>
  )
}
