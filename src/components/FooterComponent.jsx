import React from 'react'

function FooterComponent() {
  return (
    <div className='bg-blue-950 w-full h-[100px] flex justify-center items-center text-white mt-20'>
        <p>&copy; {new Date().getFullYear()} IvkovicDev. All rights reserved.</p>
    </div>
  )
}

export default FooterComponent
