import React from 'react'
import { Link } from 'react-router-dom';

import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaDiscord,
    FaTumblrSquare

} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='sticky bottom-0 shadow-xl max-width-[1240px] px-4 grid row-start-1 md:grid-cols-2 gap-8 text-gray-300'>
        <div className='col-start-1'>
           <a className="text-rose-taupe font-face-junicode text-3xl font-bold navbar-brand max-w-fit no-underline" href='/'>S.Dali</a>
            <p className='py-4 text-xs font-face-junicode md:text-base'>
                nunc aliquet bibendum enim facilisis gravida neque 
                convallis a cras semper auctor neque vitae tempus quam pellentesque nec
            </p>
        </div>
        <div className='md:col-start-2 hidden'></div>
            <div className='md:col-start-3 justify-between mt-6'>
                <ul className='flex'>
                    <li className='py-2 px-2 font-face-junicode text-sm'>Home</li>
                    <li className='py-2 px-2 font-face-junicode text-sm'>Contact</li>
                    <li className='py-2 px-2 font-face-junicode text-sm'>Shop</li>
                    <li className='py-2 px-2 font-face-junicode text-sm'>Inspo</li>
                </ul>
                <div className='flex'>
                    <FaFacebookSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaInstagram size={30}/>
                    <FaDiscord size={30}/>
                    <FaTumblrSquare size={30}/>
                </div>
            </div>
    </div>
  )
}

export default Footer