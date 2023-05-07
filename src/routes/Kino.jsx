import React from 'react'
import NavbarKino from './../components/NavbarKino'
import NumbersBox from './../components/NumbersBox'
import LotteryTable from './../components/LotteryTable'
import DataProvider from '../context/DataProvider'

export default function Kino() {

  return (
    <DataProvider>
      <NavbarKino />
      <NumbersBox content="KINO"/> 
      {/* <NumbersBox content="CONSECUTIVOS"/>
      <NumbersBox content="SUELTOS"/>
      <LotteryTable content="KINO RESULTADOS"/> */}
    </DataProvider>
  )
}