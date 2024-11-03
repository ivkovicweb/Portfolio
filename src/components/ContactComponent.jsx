import React from 'react'

function ContactComponent() {
  return (
    <div className='flex flex-col w-full h-full justify-center'>
        {/* heading */}
        <div className='flex justify-center w-full h-20 items-center'>
            <h1 className='text-white font-bold text-3xl 2xl:text-5xl'>Contact me</h1>             
        </div>
        {/* contact form */}
        <div className='flex flex-col gap-6 w-full items-center lg:invisible lg:hidden'>
            <input type="text" name="" id="" placeholder='Name...' className='w-[350px] p-2 rounded-xl md:w-[450px]'/>
            <input type="text" name="" id="" placeholder='E-mail...' className='w-[350px] p-2 rounded-xl md:w-[450px]'/>
            <input type="number" name="" id="" placeholder='Phone number...' className='w-[350px] p-2 rounded-xl md:w-[450px]'/>
            <textarea name="" id="" cols="20" rows="10" placeholder='Your message...' className='w-[350px] h-[150px] p-2 rounded-xl md:w-[450px]'></textarea>
            <button className='text-white border border-slate-200 px-4 py-2 rounded-xl active:bg-blue-600 active:border-blue-600'>Send message</button>
        </div>
        {/* contact form for >=lg devices */}
        <div className='invisible hidden lg:visible lg:flex lg:justify-evenly lg:my-32 2xl:my-44'>
          <div className='flex flex-col'>
            <input type="text" name="" id="" placeholder='Name...' className='w-[350px] px-4 py-2 mb-5 rounded-xl 2xl:w-[450px] 2xl:px-6 2xl:py-3'/>
            <input type="text" name="" id="" placeholder='E-mail...' className='w-[350px] px-4 py-2 mb-5 rounded-xl 2xl:w-[450px] 2xl:px-6 2xl:py-3'/>
            <input type="number" name="" id="" placeholder='Phone number...' className='w-[350px] px-4 py-2 mb-10 rounded-xl 2xl:w-[450px] 2xl:px-6 2xl:py-3'/>
          </div>
          <div className='flex flex-col'>
            <textarea name="" id="" cols="30" rows="10" placeholder='Your message...' className='w-[350px] h-[200px] px-4 py-2 rounded-xl mb-10 2xl:w-[450px]'></textarea>
            <button className='text-white border border-slate-200 px-4 py-2 rounded-xl duration-300 ease-in-out hover:bg-blue-600 hover:border-blue-600 2xl:px-6 2xl:py-3'>Send message</button>
          </div>
        </div>
    </div>
  )
}

export default ContactComponent
