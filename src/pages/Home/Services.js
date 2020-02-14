import React, { Component } from 'react'
import Title from '../../components/Title/Title';
import {FaCocktail,FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

class Services extends Component {

    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: 'Free cocktails',
                info: 'Complementary cocktails upon arrival. Bar is open 24/7. Room service available at all times. Our staff are available to make your stay with us memorable'
            },
            {
                icon: <FaHiking/>,
                title: 'Endless Hiking',
                info: 'Tour guides available free of charge for you hiking trips. We offer hiking trips to 7 destinations with varying difficulty level to suit all our guests'
            },
            {
                icon: <FaShuttleVan/>,
                title: 'Free Shuttle',
                info: 'We offer shuttle services, pick up and drop off, free of charge. Pickup and drop off includes destination such as the beach, airport, etc... 24hr notice required'
            },
            {
                icon: <FaBeer/>,
                title: 'Gym, Pool and Spa',
                info: 'Fully equipped gym with modern equipments. Half size olympic pool, hot tub and spa. Massage therapy available. '
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}

export default Services;