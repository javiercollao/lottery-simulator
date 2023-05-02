import React from 'react'
import NumbersContainer from './NumbersContainer'
import NumbersBoxHeaderMain from './NumbersBoxHeaderMain'
import NumbersBoxHeaderTitle from './NumbersBoxHeaderTitle'

export default function NumbersBox({content}) {
  let header;

  if (content === "main") {
    header = <NumbersBoxHeaderMain />;
  } else if (content === "consecutive") {
    header = <NumbersBoxHeaderTitle title="Consecutivos" />;
  }else{
    header = <NumbersBoxHeaderTitle title="Sueltos" />;
  }

  return (
    <div className="container py-5">
        {header}
        <div className="p-5 bg-grey rounded-bottom-3">
            <div className="container">
              <NumbersContainer />
            </div>
        </div>
    </div>
  )
}
