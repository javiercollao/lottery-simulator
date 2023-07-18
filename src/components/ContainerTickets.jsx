import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider';
import NumberBoxTicket from './NumberBoxTicket';

export default function ContainerTickets() { 
    const value = useContext(DataContext); 
    const myGenTickets = value.myTickets[0]
    const tickets = myGenTickets.map((ticket, idx) => (
      <NumberBoxTicket key={idx+1} data={ticket} idx={idx+1} />
    ));
    
  return (
    <> 
        {tickets}
    </>
  )
}
