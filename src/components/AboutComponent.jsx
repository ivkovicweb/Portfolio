import React from 'react'
import image from '../assets/insta copy(1).jpg'

function AboutComponent() {
  return (
    <div className='flex flex-col gap-5 items-center'>
        {/* header */}
        <div className='flex justify-center w-full h-20 items-center'>
            <h1 className='text-white font-bold text-3xl'>About me</h1>
        </div>
        {/* text content */}
        <div className='flex justify-center w-[350px]'>
            <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ad iusto dolore facere accusamus impedit dignissimos eius maxime eum qui, deserunt ut tempora, sed repellendus veniam quam. Temporibus neque quae placeat rem deleniti ex recusandae fugit omnis qui iusto dicta aperiam quam voluptatum, id quis.</p>
        </div>
        {/* image */}
        <div className='flex justify-center'>
            <img src={image} alt="" className='h-[300px] w-[300px] object-cover object-center rounded-2xl'/>
        </div>
    </div>
  )
}

export default AboutComponent
