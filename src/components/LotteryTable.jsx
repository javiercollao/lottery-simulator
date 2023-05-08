import React from 'react' 
import NumbersBoxHeaderTitle from './NumbersBoxHeaderTitle'
import LotteryItem from './LotteryItem'

export default function LotteryTable({content}) {

  return (
    <>
        <div class="container py-3">
            <NumbersBoxHeaderTitle title={content} />
            <div class="p-5 bg-grey rounded-bottom-3">
                <div class="table-responsive">
                    <table class="table responsive">
                        <thead>
                            <tr> 
                                <th scope="col">Sorteo</th>
                                <th scope="col">Numeros</th>
                                <th scope="col">Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            <LotteryItem />
                            <LotteryItem />
                            <LotteryItem />
                            <LotteryItem />
                            <LotteryItem />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
       
    </>
  )
}
