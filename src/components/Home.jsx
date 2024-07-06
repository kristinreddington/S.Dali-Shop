import React from 'react';
import './Home.css'
import { ReactTyped } from 'react-typed';
const Home = () => {
  return (
    <div className='w-100% mt-[30px] w-full h-screen mx-auto py-4 text-center flex flex-col justify-center'>
      <p className='font-face-lemurmure text-rose-taupe font-bold p-2'>Not just retail.</p>
      <h1 className='font-face-lemurmure text-rose-taupe md:text-5xl sm:text-3xl text-3xl md:py-4'>
      Immerse Yourself Into the Dali Dimmension</h1>
      <div className='flex justify-center items-center'>
        <p className='font-face-lemurmure text-dim-gray text-xl font-bold py-4 px-2 md:px-0'>Ethereal, Classic, Sustainable,</p>
        <p className='text-xl text-dim-gray font-bold md:pl-4 pl-2'><ReactTyped strings={['Vibrant', 'Refreshing', 'Fabulous', 'Iconic', 'Chic']} typeSpeed={120} backSpeed={140} /></p>
      </div>
      <a href='/products'>
        <button className='bg-black w-[200px] text-rose-taupe rounded-md font-medium my-6 mx-auto py-4'>Shop Now</button>
      </a>
    </div>
  )
}
export default Home;
