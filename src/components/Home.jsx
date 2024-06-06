import React from 'react';
import './Home.css'
import { ReactTyped } from 'react-typed';
const Home = () => {
  return (
    <div className='max-w-[1000px] mt-[10px] w-full h-screen mx-auto py-4 text-center flex flex-col justify-center'>
      <p className='font-bold p-2'>
        Not just retail. Emmerse yourself into the Dali Dimmension
      </p>
      <h1 className='md:text-5xl sm:text-3xl text-3xl md:py-4'>
        Welcome to the community
      </h1>
      <div className='flex justify-center items-center'>
        <p className='text-xl font-bold py-4 px-2 md:px-0'>Ethereal, Classic, Sustainable,</p>
        <p className='text-xl font-bold md:pl-4 pl-2'><ReactTyped strings={['Vibrant', 'Refreshing', 'Fabulous', 'Iconic', 'Chic']} typeSpeed={120} backSpeed={140} /></p>
      </div>
      <a href='/products'>
        <button className='bg-[#4f738a] w-[200px] text-[rgb(154,208,202)] rounded-md font-medium my-6 mx-auto py-4'>Shop Now</button>
      </a>
    </div>
  )
}
export default Home;
