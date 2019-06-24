import React, { Component } from 'react'
import Title from '../../components/Title/Title';
import {FaCocktail,FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

class Services extends Component {

    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: 'free cocktails',
                info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis doloribus repellat voluptas id inventore quo magnam vero nisi earum odit.'
            },
            {
                icon: <FaHiking/>,
                title: 'Endless Hiking',
                info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis doloribus repellat voluptas id inventore quo magnam vero nisi earum odit.'
            },
            {
                icon: <FaShuttleVan/>,
                title: 'Free Shuttle',
                info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis doloribus repellat voluptas id inventore quo magnam vero nisi earum odit.'
            },
            {
                icon: <FaBeer/>,
                title: 'Strongest Beer',
                info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis doloribus repellat voluptas id inventore quo magnam vero nisi earum odit.'
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