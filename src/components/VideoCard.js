import React from 'react'

const VideoCard = ({ info }) => {
    // console.log("info ", info);
    const { snippet, statistics } = info;
    // console.log("snippet ", snippet);
    // console.log("statistics ", statistics);
    const { channelTitle, title, thumbnails } = snippet;



    return (
        <div className="m-5 w-60 shadow-lg">
            <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
            <ul>
                <li className='font-bold py-2'>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
        </div>
    )
}

export default VideoCard;