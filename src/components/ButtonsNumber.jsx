import React, { useContext, useState } from 'react' 
import ButtonBall from './ButtonBall'
import { settings } from '../data/settings'
import { DataContext } from '../context/DataProvider';

export default function ButtonsNumber() {
 
  const value = useContext(DataContext);
  const numbersGenerated = value.gameSelection[0]
 
  console.log(numbersGenerated)

  const userButtons = settings.numbersToChoose.map((n) =>  numbersGenerated.includes(n)? <li><ButtonBall number={n} selected={true}></ButtonBall></li> : <li><ButtonBall number={n} selected={false}></ButtonBall></li>)
 
  return (
    <>
        <ul className='numeros'>
            {userButtons}
        </ul>
    </>
  )
}
