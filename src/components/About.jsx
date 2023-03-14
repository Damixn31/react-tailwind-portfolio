import React from 'react';

import SectionTitle from './SectionTitle';

function About() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20'>
      <div className='w-full md:w-6/12'>
      <SectionTitle>About Me</SectionTitle>
    <p className='text-md text-gray-600 dark:text-gray-300'>Hi! I'm Damian, and I'm pleased to present you my web portfolio. As I've been working in both server side development, but it's always good to learn new things both in technology and other areas, I've worked in 2 years in exciting and challenging projects. Through my web portfolio, you can see my backend and frontend experience, along with recent projects I've worked on. I'm proud to have helped on group projects and learned how to manage my mind because making mistakes is learning in both coding and personal domains. My focus is on Backend, but I am always up for any new challenge is attention to detail and customer satisfaction. I work collaboratively to ensure that each project meets goals and exceeds expectations. I'm sure you'll find that my web portfolio is proof of my ability to create creative and effective solutions.
   </p>
    <a href="maito:exequiel.ol29@gmail.com" className='block mt-3 text-md md:text-lg font-regular text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500'>exequiel.ol29@gmail.com</a>
        
      </div>
     <img src={`https://i.postimg.cc/0Q6KkTzJ/perfilsc.png`} alt="Damian Olmedo" className='w-full md:w-1/3 rounded-lg object-cover' />
    </div>
  )
  
}

export default About;
