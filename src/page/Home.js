import React from 'react'
import Hero from '../component/Hero'
import Baneer from '../component/Baneer'
import { Link } from 'react-router-dom'
import Services from '../component/Services'
import Futearedroom from '../component/Futearedroom'


export default function Home() {
    return (<>
        <Hero>
            <Baneer
                title="luxurious rooms"
                subtitle="deluxe rooms starting at $299 "
            >

                <Link to="/rooms" className="btn-primary">
                    our rooms
                </Link>
            </Baneer>
        </Hero>
        <Services />
        <Futearedroom />

    </>
    )
}
