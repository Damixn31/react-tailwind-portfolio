import React from 'react';

function Footer() {
  return (
    <div className='py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg'>
    <a href="#hero" className='block text-xl md:text-2xl font-semibold'>Damian Olmedo</a>
    <a href="mailto:exequiel.ol29@gmail.com" className='font-regular text-sm md:text-md hover:text-indigo-500'>exequiel.ol29@gmail.com</a>
    <p className='text-xs font-regular mt-2 text-gray-500'>
       © Damian Olmedo {new Date().getFullYear()}. All rights reserved
    </p>
    </div>
  )
  
}

export default Footer;
