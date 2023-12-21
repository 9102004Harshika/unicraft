import React, { useState } from 'react';
import { hamburgerMenu, close} from '../assets'

const Navbar = () => {

    const [toggle,setToggle]=useState(false)
    const handleClick = ()=> setToggle(!toggle)

  return (
    <div className='w-full h-[80px] hero border-b border-gray-100'>
        <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4'>
            
            <p className="h-[25px] text-3xl ml-10 font-bold text-purple-500 animate-slide" >UniCraft.</p>
            
            <div className='hidden md:flex items-center '>
                <ul className='flex gap-8 text-xl animate-slide'>
                    <li className='hover:text-purple-400 hover:cursor-pointer'><a href="#work">How it works</a></li>
                    <li className='hover:text-purple-400 hover:cursor-pointer'><a href="#pricing">Pricing</a></li>
                    <li className='hover:text-purple-400 hover:cursor-pointer'><a href="#faq">FAQ</a></li>
                </ul>
            </div>


            <div className='hidden md:flex'>
                <button className='px-8 py-3 rounded-md bg-purple-500 text-white font-bold mr-10 animate-slide'>Contact US</button>
            </div>

            <div className='md:hidden'  onClick={handleClick}>
                    <img src={toggle?close:hamburgerMenu} />
            </div>




        </div>

        <div className={toggle?'absolute z-10 p-4 hero bg-white w-full px-8 md:hidden border-b':'hidden'}>
            <ul>
                    <li className='p-4 hover:bg-gray-100'><a href="#work">How it works</a></li>
                    <li className='p-4 hover:bg-gray-100'><a href="#pricing">Pricing</a></li>
                    <li className='p-4 hover:bg-gray-100'><a href="#faq">FAQ</a></li>
                    <div className='flex flex-col my-4 gap-4'>
                        <button className='px-8 py-5 rounded-md bg-purple-500 text-white font-bold'>Contact US</button>
                    </div>
            </ul>
        </div>
        
        
    </div>
  )
}

export default Navbar