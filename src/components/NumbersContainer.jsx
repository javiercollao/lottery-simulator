import React, { useContext } from 'react'
import Ball from './Ball'
import { DataContext } from '../context/DataProvider';

export default function NumbersContainer({type, dataType}) {
    const value = useContext(DataContext); 
    const [lotteries] =  value.lotteriesData;

    let atributes;
    if(type === "table"){
        atributes = "numeros-tabla d-flex list-unstyled"
    }else{
        atributes = "numeros"
    }

    let dataLottery
    if(dataType === "KINO"){
      dataLottery =  lotteries[0].kino
    }
    

  return (
    <>
        <ul className={atributes} >
            {
              dataLottery.map((number) => <Ball number={number} />)
            }
        </ul>
    
    </>
  )
}
