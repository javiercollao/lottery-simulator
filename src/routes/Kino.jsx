import React from 'react'
import NavbarKino from './../components/NavbarKino'
import NumbersBox from './../components/NumbersBox'
import LotteryTable from './../components/LotteryTable'
import DataProvider from '../context/DataProvider'
import Collector from '../components/Collector'

export default function Kino() {

  const number=0

  return (
    <>
      <NavbarKino />
      <NumbersBox content="KINO" idx={number}/>   
      <LotteryTable content="KINO"/>
      <Collector></Collector>
    </>
  )
}