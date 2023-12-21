import React from 'react';
import { companyLogo1, companyLogo2, companyLogo3, companyLogo4 ,companyLogo5 } from '../assets';

const Companies = () => {
  return (
    <div className='w-full bg-white py-[5px] '>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <h1 className='text-center text-2xl font-bold text-gray-400'>Trusted by 250+ Companies.</h1>
           
            <div className='w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] mt-10'>
                <ul  className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'>
                  <li>
                    <img src={companyLogo1} width="80" />
                    </li>
                  <li>
                    <img src={companyLogo2} width="100" />
                    </li>
                  <li>
                    <img src={companyLogo3} width="80" />
                    </li>
                  <li>
                    <img src={companyLogo4} width="80"/>
                    </li>
                  <li>
                    <img src={companyLogo5} width="80"/>
                    </li>
                </ul>
                <ul  className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                  <li>
                    <img src={companyLogo1} width="80" />
                    </li>
                  <li>
                    <img src={companyLogo2} width="100" />
                    </li>
                  <li>
                    <img src={companyLogo3} width="80" />
                    </li>
                  <li>
                    <img src={companyLogo4} width="80"/>
                    </li>
                  <li>
                    <img src={companyLogo5} width="80"/>
                    </li>
                </ul>
            </div>
        
        </div>

    </div>
  )
}

export default Companies