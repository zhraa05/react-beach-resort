import React from 'react'
import { Roomconraxt } from '../contax'
import { useContext } from 'react'
import Title from './Title'

const getuniuqe = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}
export default function Roomfilter({ rooms }) {
    const context = useContext(Roomconraxt)
    const { handlchange, type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets } = context

    let types = getuniuqe(rooms, 'type')
    types = ['all', ...types]
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })
    let people = getuniuqe(rooms, 'capacity')
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })

    return (
        <section className='filter-container'>
            <Title title="search rooms " />
            <form className='filter-form'>
                <div className='form-group'>
                    <label htmlFor='type' id=''>room type</label>
                    <select name='type' id='type' value={type} className="form-control" onChange={handlchange}>
                        {types}
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='capacity' id=''>guests </label>
                    <select name='capacity' id='capacity' value={capacity} className="form-control" onChange={handlchange}>
                        {people}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input
                        type="range"
                        name="price"
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        value={price}
                        onChange={handlchange}
                        className="form-control"

                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">room size </label>
                    <div className="size-inputs">
                        <input
                            type="number"
                            name="minSize"
                            value={minSize}
                            onChange={handlchange}
                            className="size-input"
                        />
                        <input
                            type="number"
                            name="maxSize"
                            value={maxSize}
                            onChange={handlchange}
                            className="size-input"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="breakfast"
                            id="breakfast"
                            checked={breakfast}
                            onChange={handlchange}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="pets"
                            checked={pets}
                            onChange={handlchange}
                        />
                        <label htmlFor="breakfast">pets</label>
                    </div>
                </div>
            </form>
        </section>
    )
}
