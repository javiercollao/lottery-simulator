import React from 'react'
import NumbersContainer from './NumbersContainer'

export default function LotteryItem() {
  return (
    <tr>
        <th scope="row">1</th>
        <td>2704</td>
        <td> 
            <NumbersContainer type="table" />
        </td>
        <td>26/03/2023</td>
    </tr> 
  )
}
