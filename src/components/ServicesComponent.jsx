import React from 'react'
import ServicesCardComponent from './subComponents/ServicesCardComponent'
import webDevelopmentImg from '../assets/webdevelopment.jpg'
import webDesignImg from '../assets/webdesign.jpg'
import photoEditingImg from '../assets/photoedit.jpg'
import videoEditingImg from '../assets/videoediting.jpg'
function ServicesComponent() {
  return (
    <div className='flex flex-col gap-5 items-center'>
        {/* heading */}
        <div className='flex justify-center w-full h-20 items-center'>
            <h1 className='text-white font-bold text-3xl'>Services</h1>
        </div>
        <ServicesCardComponent serviceName='WebDevelopment' serviceImg={webDevelopmentImg}/>
        <ServicesCardComponent serviceName='Web Design' serviceImg={webDesignImg}/>
        <ServicesCardComponent serviceName='Photo Editing' serviceImg={photoEditingImg}/>
        <ServicesCardComponent serviceName='Video Editing' serviceImg={videoEditingImg}/>
    </div>
  )
}

export default ServicesComponent
