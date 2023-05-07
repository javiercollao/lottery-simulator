import React from 'react'
import NumbersContainer from './NumbersContainer'
import NumbersBoxHeaderMain from './NumbersBoxHeaderMain'
import NumbersBoxHeaderTitle from './NumbersBoxHeaderTitle'

export default function NumbersBox({content}) {
  let header;

  if (content === "KINO") {
    header = <NumbersBoxHeaderMain />;
  } else {
    header = <NumbersBoxHeaderTitle title={content} />;
  }

  return (
    <div className="container py-3">
        {header}
        <div className="p-5 bg-grey rounded-bottom-3">
            <div className="container">
              <NumbersContainer type="noTable" dataType={content}/>
            </div>
        </div>
    </div>
  )
}
