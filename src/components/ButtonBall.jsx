import React, { useState } from 'react' 

export default function ButtonBall({number}) {
    const [buttonStyleState, setState] = useState(false)

    const styleButtonHandle = () => setState(!buttonStyleState)

    let style;
    if(buttonStyleState){
        style = "bola"
    }else{
        style = "bola bola-noSeleccionada"
    }
    
    
    
  return (
    <li>
        <li>
            <span className={style} onClick={() => styleButtonHandle()}>{number}</span>  
        </li>
    </li>
  )
}
