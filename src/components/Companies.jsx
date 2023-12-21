import React from 'react';
import { companyLogo1, companyLogo2, companyLogo3, companyLogo4 ,companyLogo5 } from '../assets';

const Companies = () => {
  return (
    <div className='w-full bg-white py-[5px] animate-slide'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <h1 className='text-center text-2xl font-bold text-gray-400'>Trusted by 250+ Companies.</h1>
           
            <div className='flex justify-center py-8 md:gap-8 '>
                <div className='grid md:grid-cols-5 grid-cols-5 gap-5 '>
                  <img src={companyLogo1} width="80" />
                  <img src={companyLogo2} width="100" />
                  <img src={companyLogo3} width="80" />
                  <img src={companyLogo4} width="80"/>
                  <img src={companyLogo5} width="80"/>
                </div>
            </div>
        
        </div>

    </div>
  )
}

export default Companies