
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

const FAQ = ({ inactiveIcon, activeIcon }) => {
  const [isFirstActive, setIsFirstActive] = useState(false);
  const [isSecondActive, setIsSecondActive] = useState(false);
  const [isThirdActive, setIsThirdActive] = useState(false);
  const [isFourthActive, setIsFourthActive] = useState(false);
  const [isFifthActive, setIsFifthActive] = useState(false);

  return (
    <RevealOnScroll>
      <div id="faq">
        <div>
          <h1 className="text-5xl text-center pt-20 font-bold">
            Frequently Asked Questions
          </h1>
          <p className="text-center pt-5 mr-5">
            Everything you need to know about the product and billing.
          </p>
        </div >
        <div className="md:text-center md:grid md:grid-cols-1 flex flex-col">
          <div className="p-2 mt-8 ">
            <div className="flex flex-col md:ml-80 ml-60">
              <div className="md:flex flex items-center justify-center text-center mr-80">
                <h2 className="text-xl">Is there free trial available?</h2>
                <div
                  className="cursor-pointer md:ml-80 ml-80 "
                  onClick={() => setIsFirstActive(!isFirstActive)}
                >
                  {isFirstActive ? activeIcon : inactiveIcon}
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-2">
                {/* Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30- <br/>
          minute onboarding call to get you up and running as soon as possible. */}
                {isFirstActive ? (
                  <div className="md:mr-80">
                    <p className=" text-sm text-gray-500 ">
                      Yes , you can try us for free for 30 days. If you want ,
                      we'll provide you with a free, personalized <br />{" "}
                      30-minute onboarding call to get you up and running as
                      soon as possible.
                    </p>
                  </div>
                ) : (
                  <div></div>
                )}
              </p>
            </div>
          </div>

          <div className="p-2 mt-8 ">
            <div className="flex flex-col md:ml-80 ml-60">
              <div className="md:flex flex items-center justify-center text-center mr-80">
                <h2 className="text-xl">Can i change my plan later?</h2>
                <div
                  className="cursor-pointer md:ml-80 ml-80 "
                  onClick={() => setIsSecondActive(!isSecondActive)}
                >
                  {isSecondActive ? activeIcon : inactiveIcon}
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-2">
                {/* Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30- <br/>
          minute onboarding call to get you up and running as soon as possible. */}
                {isSecondActive ? (
                  <div className="md:mr-80">
                    <p>
                      Yes , you can try us for free for 30 days. If you want ,
                      we'll provide you with a free, personalized <br />{" "}
                      30-minute onboarding call to get you up and running as
                      soon as possible.
                    </p>
                  </div>
                ) : (
                  <div></div>
                )}
              </p>
            </div>
          </div>
          <div className="p-2 mt-8 ">
            <div className="flex flex-col md:ml-80 ml-60">
              <div className="md:flex flex items-center justify-center text-center mr-80">
                <h2 className="text-xl">What is cancellation policy?</h2>
                <div
                  className="cursor-pointer md:ml-80 ml-80 "
                  onClick={() => setIsThirdActive(!isThirdActive)}
                >
                  {isThirdActive ? activeIcon : inactiveIcon}
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-2">
                {/* Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30- <br/>
          minute onboarding call to get you up and running as soon as possible. */}
                {isThirdActive ? (
                  <div className="md:mr-80">
                    <p>
                      Yes , you can try us for free for 30 days. If you want ,
                      we'll provide you with a free, personalized <br />{" "}
                      30-minute onboarding call to get you up and running as
                      soon as possible.
                    </p>
                  </div>
                ) : (
                  <div></div>
                )}
              </p>
            </div>
          </div>
          <div className="p-2 mt-8 ">
            <div className="flex flex-col md:ml-80 ml-60">
              <div className="md:flex flex items-center justify-center text-center mr-80">
                <h2 className="text-xl">Can other info added to invoice?</h2>
                <div
                  className="cursor-pointer md:ml-80 ml-80 "
                  onClick={() => setIsFourthActive(!isFourthActive)}
                >
                  {isFourthActive ? activeIcon : inactiveIcon}
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-2">
                {/* Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30- <br/>
          minute onboarding call to get you up and running as soon as possible. */}
                {isFourthActive ? (
                  <div className="md:mr-80">
                    <p>
                      Yes , you can try us for free for 30 days. If you want ,
                      we'll provide you with a free, personalized <br />{" "}
                      30-minute onboarding call to get you up and running as
                      soon as possible.
                    </p>
                  </div>
                ) : (
                  <div></div>
                )}
              </p>
            </div>
          </div>
          <div className="p-2 mt-8 ">
            <div className="flex flex-col md:ml-80 ml-60">
              <div className="md:flex flex items-center justify-center text-center mr-80">
                <h2 className="text-xl">How does billing work?</h2>
                <div
                  className="cursor-pointer md:ml-80 ml-80 "
                  onClick={() => setIsFifthActive(!isFifthActive)}
                >
                  {isFifthActive ? activeIcon : inactiveIcon}
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-2">
                {/* Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30- <br/>
          minute onboarding call to get you up and running as soon as possible. */}
                {isFifthActive ? (
                  <div className="md:mr-80">
                    <p>
                      Yes , you can try us for free for 30 days. If you want ,
                      we'll provide you with a free, personalized <br />{" "}
                      30-minute onboarding call to get you up and running as
                      soon as possible.
                    </p>
                  </div>
                ) : (
                  <div></div>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default FAQ;
