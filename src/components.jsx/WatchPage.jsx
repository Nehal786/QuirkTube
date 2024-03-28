import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constants";
import { AiOutlineLike,AiOutlineDislike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { GoDownload } from "react-icons/go";

function WatchPage() {
  const [singleVideo, setSingleVideo] = useState(null);
  const [searchParams] = useSearchParams();
  const result = searchParams.get("v");
  // console.log(result);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const hanldeSingleVideo = async () => {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${result}&key=${GOOGLE_API_KEY}`
    );
    const data = await res.json();
    // console.log(data.items[0].snippet);
    setSingleVideo(data.items[0]);
  };
  useEffect(() => {
    hanldeSingleVideo();
  }, []);

  console.log(singleVideo);

  return (
    <div className="px-5">
      <iframe
        className="rounded-lg"
        width="700"
        height="400"
        src={`https://www.youtube.com/embed/${result}?&autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <h1 className=" flex item-center justify-center font-bold py-3">
        {singleVideo?.snippet?.title}
      </h1>
      <div className="flex justify-between items-center">
        <div className="flex items-center  w-[40%]">
          <div className=" flex  font-medium">
            <h1>{singleVideo?.snippet?.channelTitle}</h1>
          </div>
          <button className="px-5 py-1 font-medium bg-black text-white rounded-full ml-3">Subscribe</button>
        </div>
        <div className="flex">
          <div className="flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-r-full rounded-l-full ">
            <AiOutlineLike className=" size-[20px] mr-5" />
            <AiOutlineDislike className="size-[20px]"/>
          </div> 
          <div className="flex border bg-gray-200  items-center justify-between px-3 ml-2  font-medium rounded-r-full rounded-l-full cursor-pointer"><PiShareFatLight className="size-[20px] m-2"/>Share</div>
          <div className="flex border bg-gray-200  items-center justify-between px-3 ml-2  font-medium rounded-r-full rounded-l-full cursor-pointer"><GoDownload className="size-[20px]"/>Download</div>

        </div>
      </div>
    </div>
  );
}

export default WatchPage;
