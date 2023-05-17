import React, { createContext, useState } from "react";
import Data from './../data/kino'
import { randomNumber } from "../myFunctions/randomKinoNumber";
import { kinoNumbers } from "../myFunctions/kinoNumers";
 

export const DataContext = createContext();

export default function DataProvider(props) {
    
    const [lotteries, setLotteries] = useState(Data); 
	const [favoriteNumbers, setFavoriteNumbers] = useState([])
	const [myGenTickets, setGenTicket] = useState([]) 
	const [mySelectionNumber, setSelection] = useState()
	const [buttonAddFState, setButtonAddFState] = useState(true)

	// Añade favoritos
	const addFavorite = (number) => {
		setFavoriteNumbers([number, ...favoriteNumbers])
	} 

	// Elimina favoritos
	const removeNumber = (numberDelete) => {
		setFavoriteNumbers(favoriteNumbers.filter((number) => number != numberDelete))
	}
 

    const value = { 
	    lotteriesData : [lotteries, setLotteries], 
		myFavoritesNumbers: [favoriteNumbers, setFavoriteNumbers], 
		myTickets: [myGenTickets, setGenTicket],
		mySelection: [mySelectionNumber, setSelection],
		btnState : [buttonAddFState, setButtonAddFState],
		addFavoriteFn : addFavorite, 
		removeNumberFn: removeNumber
	}

    return (
		<DataContext.Provider value={value}>
			{props.children}
		</DataContext.Provider>
	)
}
