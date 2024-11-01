import React from 'react'

function ContactComponent() {
  return (
    <div className='flex flex-col w-full h-full justify-center'>
        {/* heading */}
        <div className='flex justify-center w-full h-20 items-center'>
            <h1 className='text-white font-bold text-3xl'>Contact me</h1>             
        </div>
        {/* contact form */}
        <div className='flex flex-col gap-6 w-full items-center'>
            <input type="text" name="" id="" placeholder='Name..' className='w-[350px] p-2 rounded-xl'/>
            <input type="text" name="" id="" placeholder='E-mail...' className='w-[350px] p-2 rounded-xl'/>
            <textarea name="" id="" cols="20" rows="10" placeholder='Your message' className='w-[350px] h-[150px] p-2 rounded-xl'></textarea>
            <button className='text-white border border-slate-200 px-4 py-2 rounded-xl active:bg-blue-600 active:border-blue-600'>Send message</button>
        </div>
        
    </div>
  )
}

export default ContactComponent
