import React from 'react';
import { Link } from 'react-router-dom';
import './core.css'
export const NotFound = () => {
    return (
        <div className='main'>
            <img src="https://images.unsplash.com/photo-1559962219-f52ccd86944e?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="block">
                <h1>404 - Не найдено</h1>
                <span><Link to='/'>Вернуться назад</Link></span>
            </div>
        </div>
        
    )
}