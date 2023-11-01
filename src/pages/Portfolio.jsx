import React from 'react';
import './core.css'
import Video from '../video/sea.mp4'
export const Portfolio = () => {
    return (
        <div className='main'>
        <video src={Video} autoPlay loop muted className='video'></video>   
            <div className="block">
                <h1 className='title'>Портфолио</h1>
                <span className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae omnis sapiente porro distinctio dolorum id vitae aspernatur pariatur, consequuntur, dolorem architecto dicta fugit nam corrupti eveniet quibusdam, ab facere.</span>
            </div>
        </div>
    )
}