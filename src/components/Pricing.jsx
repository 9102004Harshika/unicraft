
import { tick } from "../assets";
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
const Pricing = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  return (
    <RevealOnScroll className="w-full bg-purple-100 py-32" >
      <div id="pricing" className="md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0">
        <div className="py-4">
          <h1 className="py-3 text-center text-5xl font-bold">
            Pricing made for{" "}
            <span className="text-purple-500">collaborative support.</span>
          </h1>
          <p className="text-[#6D737A] text-center text-sm">
            Plan is made for your entire company. Only pay for users that
            actually message customers. Everyone else is free, forever.
          </p>
        </div>

        <div className="flex flex-col lg:flex lg:flex-row items-center justify-center gap-2">
          <div className="  bg-white p-8 rounded-3xl shadow-xl my-8 mx-2  w-90 h-90 items-center justify-center">
            <div>
              <div>
                <h3 className="text-xl font-bold">Freebie</h3>
                <p className="text-sm mt-2 text-gray-500">
                  Ideal for individuals who need quick access to basic features
                </p>
                <div className="flex">
                  <h1 className="text-5xl font-bold mt-2">$0</h1>
                  <p className="mt-5 text-gray-500 ml-2">/Month</p>
                </div>
                <button className='px-8 py-2 rounded-md border-solid border-gray-500 text-gray-500 w-full bg-transparent border-2 font-bold mt-2'>Get Started Now</button>
                <div>
                  <div className="mt-5">
                    <div className="">
                      <div className="flex gap-2 ">
                        {" "}
                        <img src={tick} />
                        <p>20,000+ of PNG & SVG graphics</p>
                      </div>
                      <div className="flex gap-2 mt-2">
                        {" "}
                        <img src={tick} />
                        <p>Access to 100 million stock images</p>
                      </div>
                      <div className="flex gap-2 text-gray-500 mt-2">
                        {" "}
                        <img src={tick} />
                        <p>Upload custom icons and fonts</p>
                      </div>
                      <div className="flex gap-2 text-gray-500 mt-2">
                        {" "}
                        <img src={tick} />
                        <p>Unlimited Sharing</p>
                      </div>
                      <div className="flex gap-2 text-gray-500 mt-2">
                        {" "}
                        <img src={tick} />
                        <p>Upload graphics & video in up to 4k</p>
                      </div>
                      <div className="flex gap-2 text-gray-500 mt-2">
                        {" "}
                        <img src={tick} />
                        <p>Unlimited Projects</p>
                      </div>
                      <div className="flex gap-2 text-gray-500 mt-2">
                        {" "}
                        <img src={tick} />
                        <p>Instant Access to our design system</p>
                      </div>
                      <div className="flex gap-2 text-gray-500 mt-2 ">
                        {" "}
                        <img src={tick} />
                        <p>Create teams to collaborate on designs</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="  bg-purple-300 text-white p-8 rounded-3xl shadow-xl my-8 mx-2  w-150 h-90 items-center justify-center">
            <div>
              <div>
                <h3 className="text-xl font-bold">Professional</h3>
                <p className="text-sm mt-2">
                Ideal for individuals who  need advanced 
                features and tools 
                for 
                client 
                work.
                </p>
                <div className="flex">
                  <h1 className="text-5xl font-bold mt-2">$25</h1>
                  <p className="mt-5  ml-2">/Month</p>
                </div>
                <button className='px-8 py-2 rounded-md border-solid border-white text-white w-full bg-transparent border-2 font-bold mt-2'>Get Started Now</button>
                <div>
                  <div className="mt-5">
                    <div className="">
                      <div className="flex gap-2 ">
                        {" "}
                        <img src={tick} className="invert brightness-0" />
                        <p>20,000+ of PNG & SVG graphics</p>
                      </div>
                      <div className="flex gap-2 mt-2">
                        {" "}
                        <img src={tick} className="invert brightness-0" />
                        <p>Access to 100 million stock images</p>
                      </div>
                      <div className="flex gap-2  mt-2">
                        {" "}
                        <img src={tick} className="invert brightness-0"/>
                        <p>Upload custom icons and fonts</p>
                      </div>
                      <div className="flex gap-2  mt-2">
                        {" "}
                        <img src={tick} className="invert brightness-0" />
                        <p>Unlimited Sharing</p>
                      </div>
                      <div className="flex gap-2 text-gray-500 mt-2">
                        {" "}
                        <img src={tick} className="invert" />
                        <p>Upload graphics & video in up to 4k</p>
                      </div>
                      <div className="flex gap-2 text-gray-500 mt-2">
                        {" "}
                        <img src={tick} className="invert" />
                        <p>Unlimited Projects</p>
                      </div>
                      <div className="flex gap-2 text-gray-500 mt-2">
                        {" "}
                        <img src={tick} className="invert" />
                        <p>Instant Access to our design system</p>
                      </div>
                      <div className="flex gap-2 text-gray-600 mt-2">
                        {" "}
                        <img src={tick} className="invert" />
                        <p>Create teams to collaborate on designs</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="  bg-white p-8 rounded-3xl shadow-xl my-8 mx-2  w-90 h-90 items-center justify-center">
            <div>
              <div>
                <h3 className="text-xl font-bold">Enterprise</h3>
                <p className="text-sm mt-2 text-gray-500">
                Ideal for businesses <br /> who  need personalized services and security for large teams. 
                </p>
                <div className="flex">
                  <h1 className="text-5xl font-bold mt-2">$100</h1>
                  <p className="mt-5 text-gray-500 ml-2">/Month</p>
                </div>
                <button className='px-8 py-2 rounded-md border-solid border-gray-500 text-gray-500 w-full bg-transparent border-2 font-bold mt-2'>Get Started Now</button>
                <div>
                  <div className="mt-5">
                    <div className="">
                      <div className="flex gap-2 ">
                        {" "}
                        <img src={tick} />
                        <p>20,000+ of PNG & SVG graphics</p>
                      </div>
                      <div className="flex gap-2 mt-2">
                        {" "}
                        <img src={tick} />
                        <p>Access to 100 million stock images</p>
                      </div>
                      <div className="flex gap-2 text-gray-500 mt-2">
                        {" "}
                        <img src={tick} />
                        <p>Upload custom icons and fonts</p>
                      </div>
                      <div className="flex gap-2 text-gray-500 mt-2">
                        {" "}
                        <img src={tick} />
                        <p>Unlimited Sharing</p>
                      </div>
                      <div className="flex gap-2 text-gray-500 mt-2">
                        {" "}
                        <img src={tick} />
                        <p>Upload graphics & video in up to 4k</p>
                      </div>
                      <div className="flex gap-2 text-gray-500 mt-2">
                        {" "}
                        <img src={tick} />
                        <p>Unlimited Projects</p>
                      </div>
                      <div className="flex gap-2 text-gray-500 mt-2">
                        {" "}
                        <img src={tick} />
                        <p>Instant Access to our design system</p>
                      </div>
                      <div className="flex gap-2 text-gray-500 mt-2">
                        {" "}
                        <img src={tick} />
                        <p>Create teams to collaborate on designs</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default Pricing;
