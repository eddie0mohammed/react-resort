import React from 'react';
import Hero from '../../components/Hero/Hero';
import Banner from '../../components/Banner/Banner';
import {Link} from 'react-router-dom';
import RoomsContainer from '../../components/Rooms/RoomsContainer';


const Rooms = () => {
    return (
        <React.Fragment>
            <Hero hero="roomsHero">
                <Banner title="Our Rooms" subtitle="">
                    <Link to='/' className="btn-primary">Return Home</Link>
                </Banner>
            </Hero>
            <RoomsContainer /> 
        </React.Fragment>
    )
}

export default Rooms