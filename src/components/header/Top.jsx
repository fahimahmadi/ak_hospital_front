import React from 'react'
import Login from './Login'
import {InlineIcon} from '@iconify/react'

function Top() {
  return (
    <div className="md:flex items-center justify-between py-2 px-4 lg:px-8 bg-gray-100 md:h-12">
      <Login classes='flex flex-col md:flex-row gap-2 text-sm md:w-3/5'/>
      <a 
      href="tel:+93792400238"
      className="hidden text-md text-gray-500 md:flex md:gap-x-2 md:items-center hover:text-gray-600 hover:cursor-pointer"
      style={{direction: 'ltr'}}
      >
        <InlineIcon icon="solar:phone-outline" className="text-xl md:text-md"/>
        <span className='md:text-xs font-sans' style={{direction: 'ltr'}}>(+93) 792-400 238</span>
      </a>
    </div>
  );
}

export default Top