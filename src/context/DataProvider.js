import React, { createContext, useState } from "react";
import Data from './../data/kino'

export const DataContext = createContext();

export default function DataProvider(props) {
    
    const [lotteries, setLotteries] = useState(Data); 
	const [favoriteNumbers, setFavoriteNumbers] = useState([])
	const [myGenTickets, setGenTicket] = useState([])

    const value = {
	    lotteriesData : [lotteries, setLotteries], 
		myFavoritesNumbers: [favoriteNumbers, setFavoriteNumbers], 
		myTickets: [myGenTickets, setGenTicket]
	}

    return (
		<DataContext.Provider value={value}>
			{props.children}
		</DataContext.Provider>
	)
}
