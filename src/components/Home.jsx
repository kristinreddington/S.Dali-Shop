import React from 'react';
import { ReactTyped } from 'react-typed';
const Home = () => {
  return (
    <div className='w-100% mt-[30px] w-full mx-auto py-4 text-center flex flex-col justify-center'>
      <p className='font-face-tenor text-dim-gray font-bold p-2'>Not just retail.</p>
      <h1 className='font-face-lemurmure text-black text-opacity-70 md:text-5xl sm:text-3xl text-3xl md:py-4'>
      Immerse Yourself Into the Dali Dimmension</h1>
      <div className='flex justify-center items-center'>
        <p className='font-face-tenor text-dim-gray text-xl font-bold py-4 px-2 md:px-0'>Ethereal, Classic, Sustainable,</p>
        <p className='text-xl text-dim-gray font-face-tenor font-bold'><ReactTyped strings={['Vibrant', 'Refreshing', 'Fabulous', 'Iconic', 'Chic']} typeSpeed={120} backSpeed={140} /></p>
      </div>
      <a href='/products'>
        <button className='border-2 bg-pearl border-opacity-50 bg-opacity-50 border-dim-gray w-[175px] hover:underline hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:shadow-none active:opacity-[0.85] text-rose-taupe rounded-md font-face-tenor font-medium my-6 mx-auto py-4'>Shop Now</button>
      </a>
    </div>
  )
}
export default Home;
