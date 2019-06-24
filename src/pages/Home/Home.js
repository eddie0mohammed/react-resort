import React from 'react';
import Hero from '../../components/Hero/Hero';
import Banner from '../../components/Banner/Banner';
import {Link} from 'react-router-dom';
import Services from './Services';
import FeaturedRooms from './FeaturedRooms';

const Home = () => {
    return (
        <React.Fragment>
            <Hero>
                <Banner title="Luxurious rooms" subtitle="deluxe rooms starting at $299">
                    <Link to='/rooms' className="btn-primary">Our rooms</Link>
                </Banner>
                
            </Hero>
            <Services />
            <FeaturedRooms />
        </React.Fragment>
    );

   
}

export default Home
