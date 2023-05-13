import React from 'react'
import NumbersContainer from './NumbersContainer'

export default function LotteryItem({number, date, idx}) {
  return (
    <tr> 
        <td>{number}</td>
        <td> 
          <NumbersContainer type="table" dataType="KINO" idx={idx}/>
        </td>
        <td>{date}</td>
    </tr> 
  )
}
