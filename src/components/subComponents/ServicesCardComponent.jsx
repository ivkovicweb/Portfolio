import React from 'react'

function ServicesCardComponent(props) {
  return (
    <div className='w-[300px] h-full flex flex-col items-center p-[20px] rounded-xl border border-slate-200 gap-3 bg-blue-950'>
      <h2 className='text-white text-2xl'>{props.serviceName}</h2>
      <img src={props.serviceImg} alt="" className='w-[300px] h-[300px] object-cover rounded-xl'/>
      <button className='text-white border border-slate-200 px-4 py-2 rounded-xl active:bg-blue-600 active:border-blue-600'>Request service</button>
    </div>
  )
}

export default ServicesCardComponent
