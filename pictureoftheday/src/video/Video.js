import React from 'react';
import MilkyWay from './MilkyWay.mp4';
import './style.css';

export const Video = () => {
    return (
            <video
                autoPlay
                loop
                muted
                className='back_video'
                height='100%'
            >
                <source src={MilkyWay} type='video/mp4' />
            </video>
    )
}
