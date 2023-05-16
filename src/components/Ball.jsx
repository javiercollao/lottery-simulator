import React, { useState } from 'react'
 

export default function Ball({number, type}) {

  const [selectState, setSelectstate] = useState()
 

  let attribute
  if(type === "consecutive"){
    attribute = "bola consecutive"
  }else{
    attribute = "bola"
  }

  const handlerDrop = (n) => setSelectstate(n)

  console.log(selectState)

  return (
    <> 
      <span className={attribute} >{number}</span>
    </>
  )
}
