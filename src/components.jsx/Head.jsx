import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import { TfiSearch } from "react-icons/tfi";
const Head = () => {

    const dispatch = useDispatch()
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());

    }
    return (
        <div className='grid grid-flow-col p-2 m-2 shadow-lg '>
            <div className='flex col-span-1'>
                <img onClick={()=>toggleMenuHandler()} className='h-8 mx-2 cursor-pointer' 
                alt='menu'
                src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp'
                />
                <a href='/'>
                <img className='h-8 '
                alt='youtube logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png'/>
                </a>
            </div>
            <div className='col-span-10 px-20'>
                <input className='w-1/2 border border-gray-400 rounded-l-full p-2 '
                type='text'
                placeholder='Search'
                />
                <button className='border border-gray-500 rounded-r-full px-4 py-3 bg-gray-100'><TfiSearch/></button>
            </div>
            <div className= 'flex justify-between'>
                <IoIosNotificationsOutline size={"24px"} className='cursor-pointer'/>
                <CiVideoOn size={"24px"} />
            </div>
            <div className='col-span-1 justify-between ml-10'>
                <img className='h-6'
                alt='user icon'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJUcZP8UWywZOYwpOUMcf4S6-HmAxHMIx4OA&usqp=CAU'
                />
            </div>
        </div>
    )
}
export default Head;