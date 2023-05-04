import React from 'react'
import NavbarKino from './../components/NavbarKino'
import NumbersBox from './../components/NumbersBox'
import LotteryTable from './../components/LotteryTable'


export default function Kino() {
  return (
    <>
        <NavbarKino />
        <NumbersBox content="main"/> 
        <NumbersBox content="CONSECUTIVOS"/>
        <NumbersBox content="SUELTOS"/>
        <LotteryTable content="KINO RESULTADOS"/>
    </>
  )
}