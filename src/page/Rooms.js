import React from 'react'
import { Link } from 'react-router-dom'
import Baneer from '../component/Baneer'
import Hero from '../component/Hero'
import Roomcontainer from '../component/Roomcontainer'

export default function Rooms() {
    return (
        <>
            <Hero hero='roomsHero'>
                <Baneer title='our rooms'>
                    <Link to='/' className='btn-primary'>
                        return Home
                    </Link>
                </Baneer>
            </Hero>
            <Roomcontainer></Roomcontainer>
        </>

    )
}
