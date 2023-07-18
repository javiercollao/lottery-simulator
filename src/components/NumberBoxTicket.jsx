import React from 'react'
import Ball from './Ball';
import NumbersBoxHeaderTitle from './NumbersBoxHeaderTitle';

export default function NumberBoxTicket({data, idx}) {
  const numbers = data.map((ball, index) => (
    <li key={index}>
      <Ball number={ball} type="alone" />
    </li>
  ));
  
  return (
    <div className="container py-3">
        <NumbersBoxHeaderTitle title={"Ticket "+ idx} />
        <div className="p-5 bg-grey rounded-bottom-3">
            <div className="container">
                <ul className="numeros">
                     {numbers}
                </ul>
            </div>
        </div>
    </div>
  )
}
