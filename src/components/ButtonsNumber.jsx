import React from 'react' 
import ButtonBall from './ButtonBall'

export default function ButtonsNumber() {
  let buttons = []
  for (let index = 1; index < 26; index++) {
    buttons.push(index)
  }

  return (
    <>
        <ul className='numeros'>
            { buttons.map((n) => <ButtonBall number={n}></ButtonBall>)}
        </ul>
    </>
  )
}
