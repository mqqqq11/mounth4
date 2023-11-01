import React from 'react';
import { Link } from 'react-router-dom';
import './core.css'
import Video from '../video/sea.mp4'
export const NotFound = () => {
    return (
        <div className='main'>
            <div className="block">
                <h1>404 - Не найдено</h1>
                <span className='content'><Link to='/'>Вернуться назад</Link></span>
            </div>
        </div>
        
    )
}