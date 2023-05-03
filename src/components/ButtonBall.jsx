import React, { useState } from 'react' 

export default function ButtonBall({number}) {
    const [buttonState, setState] = useState()

    
  return (
    <li>
        <li>
            <span className="bola" onClick={() => console.log("hola")}>{number}</span>  
        </li>
    </li>
  )
}
