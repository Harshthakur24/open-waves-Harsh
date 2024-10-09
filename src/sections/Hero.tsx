import * as React from "react";
import { motion } from "framer-motion";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, x: 600 },
    show: { opacity: 1, x: 0, duration: 100 },
  };

  return (
    <div className="flex justify-center items-center px-4 xl:px-12 pt-12 w-full max-md:max-w-full bg-gradient-to-r">
      <div className="-z-10 bg-white">
        <svg viewBox="0 0 500 200">
          <path d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0"></path>
        </svg>
      </div>
      <div className="justify-center pb-12 max-w-full w-[1545px]">
        <div className="flex flex-col xl:flex-row gap-3 max-md:gap-0">
          <div className="flex flex-col xl:w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col xl:mt-11 w-full font-medium max-md:mt-10 max-md:max-w-full">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
                className="mt-5 text-4xl lg:text-6xl xl:tracking-tighter font-bold text-neutral-800 max-md:max-w-full max-md:text-xl max-md:leading-10"
              >
                Seamless IT for your business, boosting your growth.
              </motion.div>
              <div className="mt-4 lg:mt-10 text-lg lg:text-lg font-semibold leading-10 text-black max-md:mt-10 max-md:mr-1.5 max-md:max-w-full max-sm:text-lg">
                We provide the expertise and support to propel your business
                forward in the digital landscape.
              </div>
              <div className="flex gap-4 self-start mt-3 lg:mt-8 text-lg leading-7 space-x-4">
                <button className="grow justify-center px-7 py-5 whitespace-nowrap bg-red-700 rounded-[30px] text-stone-50 max-md:px-4 max-md:py-3 hover:scale-110 duration-100">
                  Learn More
                </button>
                <div className="flex gap-3 shadow-md justify-between px-7 py-5 text-red-700 hover:text-white bg-red-100 hover:bg-red-600 rounded-[30px] max-md:px-4 max-md:py-3">
                  <button>Let&apos;s Talk</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
