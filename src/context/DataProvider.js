import React, { createContext, useState } from "react";
import Data from './../data/kino' 
 

export const DataContext = createContext();

export default function DataProvider(props) {
    
	// Datos de los sorteos
    const [lotteries, setLotteries] = useState(Data); 

	// Datos de los numeros favoritos
	const [favoriteNumbers, setFavoriteNumbers] = useState([])

	// Numero seleccionado para agregar a favorito
	const [selectedNumberForFavorite , setSelectedNumberForFavorite] = useState()

	// 
	const [buttonAddFState, setButtonAddFState] = useState(true)

	// vista Generador
	const [gameSelectedNumbers, setGameSelectedNumbers] = useState([]) 
	const [myGenTickets, setGenTicket] = useState([])

	
	// Añade favoritos
	const addFavorite = (number) => {
		setFavoriteNumbers([number, ...favoriteNumbers])
	} 

	// Elimina favoritos
	const removeNumber = (numberDelete) => {
		setFavoriteNumbers(favoriteNumbers.filter((number) => number != numberDelete))
	}

	// Agregar Seleccion
	const addGameSelection = (number) => {
		setGameSelectedNumbers([number, ...gameSelectedNumbers])
	} 

	// Eliminar Seleccion 
	const removeGameNumber = (numberDelete) => {
		setGameSelectedNumbers(gameSelectedNumbers.filter((number) => number != numberDelete))
	}

	// Agregar Ticket
	const addTicket = (ticket) => {
		setGenTicket([ticket, ...myGenTickets])
	} 

 

    const value = { 
	    lotteriesData : [lotteries, setLotteries], 
		myFavoritesNumbers: [favoriteNumbers, setFavoriteNumbers], 
		myTickets: [myGenTickets, setGenTicket],
		mySelection: [selectedNumberForFavorite , setSelectedNumberForFavorite],
		btnState : [buttonAddFState, setButtonAddFState],
		gameSelection: [gameSelectedNumbers, setGameSelectedNumbers],
		addFavoriteFn : addFavorite, 
		removeNumberFn: removeNumber,
		removeGameNumberFn: removeGameNumber,
		addGameSelectionFn: addGameSelection,
		addTicketFn: addTicket
	}

    return (
		<DataContext.Provider value={value}>
			{props.children}
		</DataContext.Provider>
	)
}
