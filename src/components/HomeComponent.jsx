import React from 'react'
import profileImage from '../assets/profileImage.jpg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function HomeComponent() {
  return (
    <div className='flex flex-col items-center gap-3 md:flex-row-reverse md:justify-between md:my-32 2xl:my-44'>
        <img 
            src={profileImage}
            alt="porfilna" 
            className='w-[200px] h-[200px] object-cover rounded-full md:w-[300px] md:h-[400px] md:rounded-2xl lg:w-[400px] lg:h-[400px] 2xl:w-[500px] 2xl:h-[500px]'
        />
        {/* content */}
        <div className='flex flex-col gap-8'>
            {/* headers */}
            <div className='flex flex-col items-center gap-3 md:items-start 2xl:gap-5'>
                <h2 className='text-white text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl'>Hey there</h2>
                <h1 className='text-white text-3xl font-semibold md:text-5xl lg:text-6xl 2xl:text-7xl'>It's Ivkovic<span className='text-blue-600'>Dev</span></h1>
                <h3 className='text-white md:text-xl lg:text-2xl 2xl:text-3xl'>FrontEnd Developer & UI/UX Designer</h3>
            </div>
            {/* buttons */}
            <div className='flex gap-5 2xl:gap-10'>
                <button className='text-white px-5 py-2 border rounded-xl active:bg-blue-600 active:border-blue-600 lg:text-xl lg:duration-300 lg:ease-in-out lg:hover:bg-blue-600 lg:hover:border-blue-600 2xl:text-2xl'>Download CV</button>
                <button className='text-white px-5 py-2 border rounded-xl active:bg-blue-600 active:border-blue-600 lg:text-xl lg:duration-300 lg:ease-in-out lg:hover:bg-blue-600 lg:hover:border-blue-600 2xl:text-2xl'>Hire me</button>
            </div>
            {/* social icons */}
            <div>
                <ul className='flex justify-center gap-5 text-white md:justify-start'>
                    <li><a href="#" className='text-3xl inline-flex justify-center items-center w-14 h-14 border border-slate-200 rounded-full active:bg-blue-600 active:border-blue-600 md:text-2xl md:w-12 md:h-12 lg:duration-300 lg:ease-in-out lg:hover:bg-blue-600 lg:hover:border-blue-600 lg:text-3xl lg:w-14 lg:h-14 2xl:text-4xl 2xl:w-16 2xl:h-16 '><FaGithub /></a></li>
                    <li><a href="#" className='text-3xl inline-flex justify-center items-center w-14 h-14 border border-slate-200 rounded-full active:bg-blue-600 active:border-blue-600 md:text-2xl md:w-12 md:h-12 lg:duration-300 lg:ease-in-out lg:hover:bg-blue-600 lg:hover:border-blue-600 lg:text-3xl lg:w-14 lg:h-14 2xl:text-4xl 2xl:w-16 2xl:h-16'><FaLinkedinIn /></a></li>
                    <li><a href="#" className='text-3xl inline-flex justify-center items-center w-14 h-14 border border-slate-200 rounded-full active:bg-blue-600 active:border-blue-600 md:text-2xl md:w-12 md:h-12 lg:duration-300 lg:ease-in-out lg:hover:bg-blue-600 lg:hover:border-blue-600 lg:text-3xl lg:w-14 lg:h-14 2xl:text-4xl 2xl:w-16 2xl:h-16'><FaGitAlt /></a></li>
                    <li><a href="#" className='text-3xl inline-flex justify-center items-center w-14 h-14 border border-slate-200 rounded-full active:bg-blue-600 active:border-blue-600 md:text-2xl md:w-12 md:h-12 lg:duration-300 lg:ease-in-out lg:hover:bg-blue-600 lg:hover:border-blue-600 lg:text-3xl lg:w-14 lg:h-14 2xl:text-4xl 2xl:w-16 2xl:h-16'><FaInstagram /></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default HomeComponent
