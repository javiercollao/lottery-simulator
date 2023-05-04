import React from 'react'
import NavbarKino from '../components/NavbarKino'
import GameGenerator from './../components/GameGenerator'
import LotteryTable from './../components/LotteryTable'
import NumbersBox from './../components/NumbersBox'

export default function Generator() {
  return (
    <>
        <NavbarKino />
        <NumbersBox content="FAVORITOS"/>
        <GameGenerator />
        <LotteryTable content="GENERADOS" />
    </>
  )
}
