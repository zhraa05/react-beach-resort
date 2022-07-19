import React from 'react'
import { Link } from 'react-router-dom'
import Baneer from '../component/Baneer'
import Hero from '../component/Hero'
export default function Erorr() {
    return (
        <Hero>
            <Baneer title="404" subtitle="page not found">
                <Link to="/" className="btn-primary">
                    return home
                </Link>
            </Baneer>
        </Hero>

    )
}
