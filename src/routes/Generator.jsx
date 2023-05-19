import React from 'react'
import NavbarKino from '../components/NavbarKino'
import GameGenerator from './../components/GameGenerator'
import NumbersBoxFavorites from '../components/NumbersBoxFavorites'
import ContainerTickets from '../components/ContainerTickets'

export default function Generator() {
  return (
    <>
      <NavbarKino />
      <NumbersBoxFavorites />
      <GameGenerator />
      <ContainerTickets />
    </>
  )
}
