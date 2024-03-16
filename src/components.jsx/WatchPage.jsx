import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

function WatchPage() {
    const [searchParams] = useSearchParams();
    const result = searchParams.get("v");
    console.log(result);
    
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[])
  return (
    <div className='px-5'>
        <iframe className='rounded-lg' width="700" height="400"
         src={"https://www.youtube.com/embed/"+searchParams.get("v")}
          title="YouTube video player"
           frameBorder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           allowFullScreen>
            

           </iframe>

    </div>
  )
}

export default WatchPage