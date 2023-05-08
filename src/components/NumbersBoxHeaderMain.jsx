import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider';

export default function NumbersBoxHeaderMain() {
  const value = useContext(DataContext); 
  const [lotteries] =  value.lotteriesData;

  let dataLotteryDate
  let dataLotteryId
   
  dataLotteryDate =  lotteries[0].date
  dataLotteryId =  lotteries[0].id
   

  return (
    <>
        <div className="p-2 bg-primary rounded-top-3 d-flex justify-content-between">
            <span className="fw-bold text-light">Sorteo: {dataLotteryId}</span>
            <span className="fw-bold text-light">Juego: KINO</span>
            <span className="fw-bold text-light">Fecha: {dataLotteryDate}</span>
        </div>
    </>
  )
}
