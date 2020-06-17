import React from 'react';
import { useEffect } from 'react';
import { VideoPlayer } from '../video/video_player';
import { useHttp } from '../hooks/http.hook';


export const Card = ({ imageInfo }) => {
    const { date, url, title, explanation, media_type } = imageInfo;
    return (
        <div className='card_wrapper'>
            <h2>{title}</h2>
            <h2>{date}</h2>
            {media_type === 'video' ? <VideoPlayer url={url}/> : <img src={url} />}
            <p>{explanation}</p>
        </div>
    )
}