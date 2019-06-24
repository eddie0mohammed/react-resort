import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../../Context/Context';
import Title from '../Title/Title';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}

const RoomsFilter = ({rooms}) => {
    const context = useContext(RoomContext);

    const {handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = context;

    //get unique types
    let types = getUnique(rooms, 'type');
    //add 'all'
    types = ['all', ...types];
    // map to jsx
    types = types.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })
    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index)=> {
        return <option key={index} value={item}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* end type */}
                {/* guests */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/* guests */}
                {/* price */}
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input type="range" name="price"  min='0' max='600' id="price" 
                        value={price} onChange={handleChange} className="form-control"/>
                </div>

                {/* price */}
                {/* size */}
                
                {/* size */}


            </form>
        </section>
    )
}

export default RoomsFilter
