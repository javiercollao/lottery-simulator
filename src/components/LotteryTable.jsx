import React, { useContext } from 'react' 
import NumbersBoxHeaderTitle from './NumbersBoxHeaderTitle'
import LotteryItem from './LotteryItem'
import { DataContext } from '../context/DataProvider';

export default function LotteryTable({content}) {
    const value = useContext(DataContext); 
    const [lotteries] =  value.lotteriesData;
 
    const items = lotteries.map((lott,idx)=> <LotteryItem idx={idx} content={content} number={lott.id} date={lott.date} /> )
 
  return (
    <>
        <div className="container py-3">
            <NumbersBoxHeaderTitle title={content} />
            <div className="p-5 bg-grey rounded-bottom-3">
                <div className="table-responsive">
                    <table className="table responsive">
                        <thead>
                            <tr> 
                                <th scope="col">Sorteo</th>
                                <th scope="col">Numeros</th>
                                <th scope="col">Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
       
    </>
  )
}
