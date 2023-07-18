import React, { useContext, useState } from 'react' 
import ButtonBall from './ButtonBall'
import { settings } from '../data/settings'
import { DataContext } from '../context/DataProvider';

export default function ButtonsNumber() {
 
  const value = useContext(DataContext);
  const numbersGenerated = value.gameSelection[0]
 
  
  let userButtons = settings.numbersToChoose.map((n, index) =>
  numbersGenerated.includes(n) ? (
      <li key={index}>
        <ButtonBall number={n} selected={true} />
      </li>
    ) : (
      <li key={index}>
        <ButtonBall number={n} selected={false} />
      </li>
    )
  );  
  return (
    <>
        <ul className='numeros'>
            {userButtons}
        </ul>
    </>
  )
}
