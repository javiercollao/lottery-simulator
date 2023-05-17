import React, { useContext, useState } from 'react'
import { DataContext } from '../context/DataProvider';
 

export default function Ball({number, type}) {
  const value = useContext(DataContext); 
  
  const setNumberSelection = value.mySelection[1]
  const setButtonState = value.btnState[1]
  const favoritesColletion = value.myFavoritesNumbers[0]

  let attribute
  if(type === "consecutive"){
    attribute = "bola consecutive"
  }else{
    attribute = "bola"
  }

  const handlerSelection = (n) => {
    if(favoritesColletion.length === 6){
      setButtonState(true)
    }else{
      setNumberSelection(n)
      setButtonState(false)
    }
  }

  return (
    <> 
      <span className={attribute} onClick={() => handlerSelection(number)}>{number}</span>
    </>
  )
}
