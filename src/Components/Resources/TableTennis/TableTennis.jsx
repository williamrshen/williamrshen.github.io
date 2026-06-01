import React from 'react'
import './TableTennis.css'
import '.././Resources.css'
import Cat from '../../../assets/cat2.png'

const TableTennis = () => {
  return (
    <div className="tt">

        <h1 className="tt-develop">under development :&#93;</h1>
        <img src={Cat} alt="" className="tt-banner"/>
        <div className="tt-description">
            <p>will add some match logs, training notes, or equipment setups idk</p>
        </div>

    </div>
  )
}

export default TableTennis
