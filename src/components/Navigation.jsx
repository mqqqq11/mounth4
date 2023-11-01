import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

export const Navigation = () => {

    return (
        <div className='header'>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/notfound">NotFound</Link></li>
                </ul>
            </nav>
        </div>
    )
}