import React from 'react'

export default function Baneer({ children, title, subtile }) {
    return (
        <div className='banner' >
            <h1>{title}</h1>
            <div />

            <p>{subtile} </p>
            {children}
        </div>
    )
}
