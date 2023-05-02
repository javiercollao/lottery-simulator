import React from 'react'
import NavbarKino from './NavbarKino'
import NumbersBox from './NumbersBox'

export default function App() {
  return (
    <>
        <NavbarKino />
        <NumbersBox content="main"/> 
        <NumbersBox content="consecutive"/>
        <NumbersBox content="alone"/>
    </>
  )
}
