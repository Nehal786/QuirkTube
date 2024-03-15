import React from 'react'

const VideoCard = ({info})=> {
    console.log(info);
    const { snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
    return(
        <div className='p-3 m-3 w-80 shadow-lg'>
            <img className='rounded-lg' alt='thumbnails' src={thumbnails.medium.url}/>
            <ul>
                <li className='font-bold py-2'>{title}</li>
                <li className='text-gray-500'>{channelTitle}</li>
                <li className='text-gray-500'>{statistics.viewCount} views</li>
            </ul>
            
            
        </div>
    )
}

export default VideoCard;