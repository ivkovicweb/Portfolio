import React from 'react'
import image from '../assets/insta copy(1).jpg'

function AboutComponent() {
  return (
    <div className='flex flex-col gap-5 items-center'>
        {/* header */}
        <div className='flex justify-center w-full h-20 items-center'>
            <h1 className='text-white font-bold text-3xl lg:text-4xl 2xl:text-5xl'>About me</h1>
        </div>
        <div className='flex flex-col gap-5 items-center md:flex-row md:justify-between md:my-32 lg:justify-between lg:items-start lg:w-full'>
            {/* text content */}
          <div className='flex justify-center w-[350px] md:w-[500px]'>
              <p className='text-white text-center md:text-left lg:text-left lg:w-[700px] lg:text-xl 2xl:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ad iusto dolore facere accusamus impedit dignissimos eius maxime eum qui, deserunt ut tempora, sed repellendus veniam quam. Temporibus neque quae placeat rem deleniti ex recusandae fugit omnis qui iusto dicta aperiam quam voluptatum, id quis.</p>
          </div>
          {/* image */}
          <div className='flex justify-center'>
              <img src={image} alt="" className='h-[300px] w-[300px] object-cover object-center rounded-2xl md:w-[330px] md:h-[400px] lg:w-[450px] 2xl:w-[450px] 2xl:h-[500px]'/>
          </div>
        </div>
    </div>
  )
}

export default AboutComponent
