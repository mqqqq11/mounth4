import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'
import Video from '../video/sea.mp4'

export const Navigation = () => {

    return (
        <div className='header'>

            <nav>
                <ul className='head'>
                    <li><Link className='link' to="/">Home</Link></li>
                    <li><Link className='link' to="/portfolio">Portfolio</Link></li>
                    <li><Link className='link' to="/contact">Contact</Link></li>
                    <li><Link className='link' to="/notfound">NotFound</Link></li>
                </ul>
            </nav>
        </div>
    )
}