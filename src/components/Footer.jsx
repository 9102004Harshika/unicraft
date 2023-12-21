
import {
  FaFacebookF,
  FaDribbble,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaAngellist
} from "react-icons/fa";
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

const Footer = () => {
  return (
    <RevealOnScroll>
      <div className="pt-60">
        <div>
          <div className="text-5xl text-center font-bold">
            <h1>No long term contracts.</h1>
            <h1 className="mt-5">No catches.simple.</h1>
          </div>
          <div className="text-md text-center mt-5 text-gray-500 ">
            <p>Start your 30-day trial Now . Cancel anytime .</p>
          </div>
          <div className="text-center mt-5">
            {" "}
            <button className="px-8 py-3 rounded-md bg-purple-500 text-white font-bold mr-10 ">
              Contact US
            </button>
          </div>
        </div>
        <div className="p-5 border-t-2 border-gray-200 mt-20 flex justify-between">
          <div>
            <h2 className="text-xl font-bold mt-5 text-purple-600">UniCraft.</h2>
            <p className="mt-2 text-md text-gray-400">Design amazing digital experiences <br /> that
create more happy in the world.</p>
            <p className="mt-10 text-md text-gray-400">© 2077 Untitled UI. All rights reserved .</p>
          </div>
          <div className=" flex mt-40 gap-3 text-gray-500 cursor-pointer">
            <a href="">
                <FaTwitter/>
                </a>
            <a href="">
                <FaFacebookF/>
                </a>
            <a href="">
                <FaLinkedinIn/>
                </a>
            <a href="">
                <FaGithub/>
                </a>
            <a href="">
                <FaAngellist/>
                </a>
            <a href="">
                <FaDribbble/>
                </a>

          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default Footer;
