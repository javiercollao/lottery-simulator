import React from 'react'

export default function NumbersBoxHeaderTitle({title}) {
  return (
    <>
        <div className="p-2 bg-warning rounded-top-3 d-flex justify-content-center">
            <span className="fw-bold">{title}</span> 
        </div>
    </>
  )
}
