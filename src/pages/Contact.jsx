import React from 'react';
import './core.css'
import Video from '../video/sea.mp4'
export const Contact = () => {
    return(
        <div className='main'>
            <video src={Video} autoPlay loop muted className='video'></video> 
            <div className="block">
                <h1 className='title'>Контакты</h1>
                <span className='content'>+996701555022</span>
            </div>
        </div>
    )
}