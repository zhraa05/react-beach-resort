import React, { Component } from 'react'
import Title from './Title'
import { FaBeer, FaCocktail, FaHiking, FaShuttleVan } from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free Cocktail",
                info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, distinctio necessitatibus necessitatibus necessitatibuss necessitatibus."
            },
            {
                icon: <FaHiking />,
                title: "endless Hiking",
                info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, distinctio necessitatibus necessitatibus necessitatibuss necessitatibus."
            },

            {
                icon: <FaShuttleVan />,
                title: "free ShuttleVan",
                info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, distinctio necessitatibus necessitatibus necessitatibuss necessitatibus."
            },
            {
                icon: <FaBeer />,
                title: "strongest FBeer",
                info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, distinctio necessitatibus necessitatibus necessitatibuss necessitatibus."
            },
        ]
    }
    render() {
        return (
            <section className='services' >
                <Title title="services"></Title>
                <div className='services-center'>
                    {this.state.services.map((item, index) => {
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
