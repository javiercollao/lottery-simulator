import React from 'react'
import Ball from './Ball'

export default function NumbersContainer({type}) {
    let atributes;
    if(type === "table"){
        atributes = "numeros-tabla d-flex list-unstyled"
    }else{
        atributes = "numeros"
    }
  return (
    <>
        <ul className={atributes} >
                 <Ball />
                 <Ball />
                 <Ball />
                 <Ball />
                 <Ball />
                 <Ball />
                 <Ball />
                 <Ball />
                 <Ball />
                 <Ball />
                 <Ball />
                 <Ball />
                 <Ball />
                 <Ball />
        </ul>
    
    </>
  )
}
