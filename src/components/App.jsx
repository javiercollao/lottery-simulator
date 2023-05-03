import React from 'react'
import NavbarKino from './NavbarKino'
import NumbersBox from './NumbersBox'
import LotteryTable from './LotteryTable'
import GameGenerator from './GameGenerator'

export default function App() {
  return (
    <>
        <NavbarKino />
        <NumbersBox content="main"/> 
        <NumbersBox content="CONSECUTIVOS"/>
        <NumbersBox content="SUELTOS"/>
        <LotteryTable />
        <NumbersBox content="FAVORITOS"/>
        <GameGenerator />
    </>
  )
}
