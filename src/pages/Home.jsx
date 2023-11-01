import React from 'react';
import './core.css'
import Video from '../video/sea.mp4'
export const Home = () => {
    return(
        <div className='main'>

            <video src={Video} autoPlay loop muted className='video'></video>

            <div className="block">
                <h1>О нас</h1>
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam illum tempora amet dolor beatae, suscipit nesciunt quibusdam quaerat odit maiores nemo architecto. Hic fugiat ad pariatur eum eaque molestias rem numquam placeat? Quo quisquam illo perferendis harum. Eos modi porro aliquid fuga? Error quam, laudantium exercitationem officiis laborum impedit quidem illo enim ipsum soluta temporibus modi corrupti praesentium cupiditate sint cumque magnam vero cum asperiores officia commodi. Aut, in eum.
                </span>
            </div>
        </div>
    )
}