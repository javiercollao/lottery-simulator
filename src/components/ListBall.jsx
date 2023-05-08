import React from 'react'
import Ball from './Ball';

export default function ListBall({attributes, balls}) {
  const numbers = balls.map((ball) => <Ball number={ball} />);
  return (
    <ul className={attributes}>
        {numbers}
    </ul>
  )
}
