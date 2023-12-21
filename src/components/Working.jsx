
import { one ,two,three,arrow} from '../assets'
import { TbWorldLongitude } from 'react-icons/tb'
import React, { useEffect, useRef, useState } from "react";
 
const RevealOnScroll = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
 
    useEffect(() => {
        const onWindScroll = () => {
            const element = ref.current;
            if (element) {
                const { top } = element.getBoundingClientRect();
                const isVisible = top < window.innerHeight;
                setIsVisible(isVisible);
            }
        };
 
        window.addEventListener("scroll", onWindScroll);
        return () => {
            window.removeEventListener("scroll", onWindScroll);
        };
    }, []);
 
    const classes = `transition-opacity duration-1000 mt-40
        ${isVisible ? "opacity-100" : "opacity-0"
        }`;
 
    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
};
const Working = () => {
  return (
    <RevealOnScroll className='w-full bg-white py-24 hero mt-20 ' >
        <div id='work' className='md:max-w-[1480px] m-auto grid md:grid-cols-1 max-w-[600px]  px-4 md:px-0'>
            
            <div className='flex flex-col justify-center items-center '>
                <h1 className='md:leading-[72px] md:text-5xl text-4xl font-bold'>How it Works</h1>
                <p className='text-lg text-gray-600'>Premium designs, unlimited requests, super fast delivery, for one flat monthly fee.</p>
            </div>
        <div className='flex gap-20  grid md:grid-cols-4 lg:grid-cols-6'>
              <div className="relative mt-20 pb-5 ml-20">
        <img  src={one} width="50"/>
        <h3 className="absolute text-3xl font-bold top-20 truncate left-1">Subscribe.</h3>
        <p className="absolute text-xl  top-30 left-1 w-80">Subscribe to a plan & you’ll get an instant access to your private Slack channel.</p>
        
       </div>
    <div><img src={arrow} alt=""className='mt-40 ml-40 ' /></div>
    <div className="relative mt-20 ml-10">
        <img  src={two} width="80"/>
        <h3 className="absolute truncate text-3xl font-bold top-20 ">Request.</h3>
        <p className="absolute text-xl  top-30  w-80 mt-2">Submit any number of requests. We'll work through them, one at a time, ensuring consistent updates every 24-48 hours</p>
        
    </div>
    <div><img src={arrow} alt=""className='mt-40 ml-40' /></div>
    <div className="relative mt-20 ml-10 ">
        <img  src={three} width="80"/>
        <h3 className="absolute truncate text-3xl font-bold top-20 left-1">Revise.</h3>
        <p className="absolute text-xl  top-30 left-1 w-80 mt-2">Need changes? We guarantee unlimited revisions until you're 200% satisfied.</p>
        
    </div>
            
             
             


              </div>


        </div>
        

    </RevealOnScroll>
  )
}

export default Working