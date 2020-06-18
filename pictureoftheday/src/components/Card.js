import React, { useStyle } from 'react';
import { VideoPlayer } from '../video/video_player';
const classes = {
    'margin-top': '0',
}
export const Card = ({ imageInfo, page }) => {
    const { date, url, title, explanation, media_type } = imageInfo;
    return (
        <div className='card_wrapper' style={classes}>
            <h2>{title}</h2>
            <h2>{date}</h2>
            {media_type === 'video' ? <VideoPlayer url={url} /> : <img src={url} />}
            <p>{explanation}</p>
        </div>
    )
}