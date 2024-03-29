import React, { useContext } from 'react'
import Ball from './Ball'
import { DataContext } from '../context/DataProvider';
import { findConsecutive } from '../myFunctions/findConsecutive';
 

export default function NumbersContainer({type, dataType, idx}) {
    const value = useContext(DataContext); 
    const [lotteries] =  value.lotteriesData;
 
    let attributes;
    if(type === "table"){
        attributes = "numeros-tabla d-flex list-unstyled"
    }else{
        attributes = "numeros"
    }

    let dataLottery
    let lotteryPrint;
    if(dataType === "KINO"){
      dataLottery = lotteries[idx].reKino
      const myConsecutive = findConsecutive(dataLottery) 

      lotteryPrint = dataLottery.map((ball, index) =>
      myConsecutive.includes(ball) ? (
          <li key={index}>
            <Ball number={ball} type="consecutive" />
          </li>
        ) : (
          <li key={index}>
            <Ball number={ball} type="alone" />
          </li>
        )
      );
    }
 
  return (
    <ul className={attributes}>
        { lotteryPrint }
    </ul>
  )
}
