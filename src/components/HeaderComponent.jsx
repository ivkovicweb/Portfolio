import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import {useState} from 'react'

function HeaderComponent() {
    const [isActive, setIsActive] = useState(false)
    const handleMenu = () => {
        setIsActive(!isActive)
    }
    return (
        <div className='flex justify-between items-center w-full h-[100px] relative px-4 md:px-0'>
            <a href="#" className='text-white text-2xl font-semibold lg:duration-300 lg:ease-in-out lg:hover:scale-110'>Ivkovic<span className='text-blue-600'>Dev</span></a>
            {/* navigation bar */}
            <div className='md:hidden'>
                <RxHamburgerMenu onClick={handleMenu} className='text-white size-7 cursor-pointer'/>
                {(isActive) ? 
                    <ul className='bg-slate-200 fixed w-full p-5 left-0 flex flex-col gap-3 mt-5 items-center justify-center duration-300 ease-in-out'>
                        <li><a href="#" className='text-xl font-medium'>Home</a></li>
                        <li><a href="#" className='text-xl font-medium'>About</a></li>
                        <li><a href="#" className='text-xl font-medium'>Services</a></li>
                        <li><a href="#" className='text-xl font-medium'>Contact</a></li>
                    </ul> : null
                }
            </div>
            <div className='hidden invisible md:visible md:block'>
                <ul className='flex gap-5'>
                    <li><a href="#" className='text-2xl text-white font-normal duration-300 ease-in-out hover:text-blue-600'>Home</a></li>
                    <li><a href="#" className='text-2xl text-white font-normal duration-300 ease-in-out hover:text-blue-600'>About</a></li>
                    <li><a href="#" className='text-2xl text-white font-normal duration-300 ease-in-out hover:text-blue-600'>Services</a></li>
                    <li><a href="#" className='text-2xl text-white font-normal duration-300 ease-in-out hover:text-blue-600'>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent
