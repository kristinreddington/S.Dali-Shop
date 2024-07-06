import React from 'react'
import { Link } from 'react-router-dom';

import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaDiscord

} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='shadow-xl max-width-[1240px] px-4 grid row-start-1 md:grid-cols-2 gap-8 text-gray-300 sticky bottom-0'>
        <div className='col-start-1'>
            <a href='/'><button className="text-rose-taupe text-3xl font-bold navbar-brand">S.Dali</button></a>
            <p className='py-4 text-xs md:text-base'>
                nunc aliquet bibendum enim facilisis gravida neque 
                convallis a cras semper auctor neque vitae tempus quam pellentesque nec
            </p>
           
        </div>
            <div className='md:col-span-1 justify-between mt-6'>
                <ul className='flex'>
                    <li className='py-2 px-2 text-sm'>Home</li>
                    <li className='py-2 px-2 text-sm'>Contact</li>
                    <li className='py-2 px-2 text-sm'>Shop</li>
                    <li className='py-2 px-2 text-sm'>Inspo</li>
                </ul>
                <div className='flex'>
                <FaFacebookSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaInstagram size={30}/>
                    <FaDiscord size={30}/>
                </div>
               
                   
                
            </div>
    </div>
  )
}

export default Footer