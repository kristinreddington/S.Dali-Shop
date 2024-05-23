import React from 'react';
import './Home.css'
import { ReactTyped } from 'react-typed';
const Home = () => {
  return (
    <div className='max-w-[800px] mt-[-46px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <p className='font-bold p-2'>
        Not just retail. Emmerse yourself into the Dali Dimmension
      </p>
      <h1 className='md:text-5xl sm:text-3xl text-3xl md:py-4'>
        Welcome to the community
      </h1>
      <div className='flex justify-center items-center'>
        <p>Ethereal, Classic, Sustainable,</p>
        <p className='pl-2'><ReactTyped strings={['Vibrant', 'Refreshing', 'Fabulous', 'Iconic', 'Chic']} typeSpeed={120} backSpeed={140} /></p>
      </div>
      <img className='sm:max-w-[500px]' id="dress" src="/dresses.jpg" alt="Welcome!"></img>
    </div>


  )
}
export default Home;
