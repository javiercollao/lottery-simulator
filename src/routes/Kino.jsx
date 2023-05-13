import React from 'react'
import NavbarKino from './../components/NavbarKino'
import NumbersBox from './../components/NumbersBox'
import LotteryTable from './../components/LotteryTable'
import DataProvider from '../context/DataProvider'

export default function Kino() {

  const number=0

  return (
    <DataProvider>
      <NavbarKino />
      <NumbersBox content="KINO" idx={number}/>   
      <LotteryTable content="KINO"/>
    </DataProvider>
  )
}