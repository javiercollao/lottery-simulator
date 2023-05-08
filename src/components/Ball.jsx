import React from 'react'

export default function Ball({number, type}) {

  let attribute
  if(type === "consecutive"){
    attribute = "bola consecutive"
  }else{
    attribute = "bola"
  }

  return (
    <>
        <li>
            <span className={attribute}>{number}</span>
        </li>
    </>
  )
}
