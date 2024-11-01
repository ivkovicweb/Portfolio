import React from 'react'
import profileImage from '../assets/profileImage.jpg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function HomeComponent() {
  return (
    <div className='flex flex-col items-center gap-3'>
        <img src={profileImage} alt="porfilna" className='w-[200px] h-[200px] object-cover rounded-full'/>
        {/* content */}
        <div className='flex flex-col gap-8'>
            {/* headers */}
            <div className='flex flex-col items-center gap-3'>
                <h2 className='text-white text-2xl'>Hey there</h2>
                <h1 className='text-white text-3xl font-semibold'>It's Ivkovic<span className='text-blue-600'>Dev</span></h1>
                <h3 className='text-white'>FrontEnd Developer & UI/UX Designer</h3>
            </div>
            {/* buttons */}
            <div className='flex justify-between'>
                <button className='text-white px-5 py-2 border rounded-xl duration-300 ease-in-out active:bg-blue-600 active:border-blue-600'>Download CV</button>
                <button className='text-white px-5 py-2 border rounded-xl duration-300 ease-in-out active:bg-blue-600 active:border-blue-600'>Hire me</button>
            </div>
            {/* social icons */}
            <div>
                <ul className='flex justify-center gap-5 text-white'>
                    <li><a href="#" className='text-3xl inline-flex justify-center items-center w-14 h-14 border border-slate-200 rounded-full active:bg-blue-600 active:border-blue-600'><FaGithub /></a></li>
                    <li><a href="#" className='text-3xl inline-flex justify-center items-center w-14 h-14 border border-slate-200 rounded-full active:bg-blue-600 active:border-blue-600'><FaLinkedinIn /></a></li>
                    <li><a href="#" className='text-3xl inline-flex justify-center items-center w-14 h-14 border border-slate-200 rounded-full active:bg-blue-600 active:border-blue-600'><FaGitAlt /></a></li>
                    <li><a href="#" className='text-3xl inline-flex justify-center items-center w-14 h-14 border border-slate-200 rounded-full active:bg-blue-600 active:border-blue-600'><FaInstagram /></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default HomeComponent
