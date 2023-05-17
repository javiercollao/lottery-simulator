import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider';
import NumbersBoxHeaderTitle from './NumbersBoxHeaderTitle';
import Ball from './Ball';

export default function NumbersBoxFavorites() {
    const value = useContext(DataContext); 
    const favoritesColletion = value.myFavoritesNumbers[0]
    const numbers = favoritesColletion.map((ball) => <li><Ball number={ball} type="alone"/></li>);
  return ( 
    <div className="container py-3">
        <NumbersBoxHeaderTitle title="FAVORITES" />
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
