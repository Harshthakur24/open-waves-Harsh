import { useEffect, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
export function AboutArea() {
  const svgPathref = useRef<SVGPathElement | null>(null);
  const { scrollYProgress } = useScroll();
  const svgPathOffset = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  // useEffect(() => {
  //   const path = svgPathref.current;
  //   if (path) {
  //     const length = path.getTotalLength();
  //     document.documentElement.style.setProperty("--length", `${length}`);

  //     // console.log(length);
  //     // path.style.strokeDasharray = `${length + length}`;
  //     // path.style.strokeDashoffset = `${length}`;

  //     // window.addEventListener("scroll", () => {
  //     //   const scrollPercentage =
  //     //     (document.documentElement.scrollTop + 100) /
  //     //     (document.documentElement.scrollHeight - window.innerHeight);
  //     //   const drawLength = length * scrollPercentage;

  //     //   path!.style.strokeDashoffset = String(length - drawLength);
  //     //   if (scrollPercentage >= 0.99) {
  //     //     path.style.strokeDasharray = "none";
  //     //   } else {
  //     //     path.style.strokeDasharray = path + " " + path;
  //     //   }
  //     // });
  //   }
  // }, [scrollYProgress]);

  return (
    <section className="pt-40 pb-12 max-sm:pt-10 mx-10">
      <div className="max-container 2xl:px-24">
        <div className="w-full flex-col md:flex xl:flex-row xl:items-center justify-between gap-10">
          <div
            id="left"
            className="flex flex-col justify-start xl:max-w-96 w-full my-auto text-xl font-medium leading-6 text-zinc-900 text-opacity-80 max-md:mt-10"
          >
            <div className="w-[90%]">
              <div className="text-sm text-[#97203E] text-mono text-bold ml-2 uppercase tracking-[5px] max-sm:whitespace-nowrap max-sm:text-xs">
                CONSULTING EXCELLENCE
              </div>
              <h1 className="mt-8 text-5xl font-bold xl:tracking-tighter leading-[56px] text-neutral-800 max-md:text-4xl max-md:leading-10">
                Best pathway to our{" "}
                <span className="text-red-600">clients.</span>
              </h1>
              <p className="mt-11 leading-7 max-md:mt-10 max-sm:mt-5 max-sm:text-lg">
                Our consulting process begins with athorough assessment of your
                current IT infrastructure, workflows, and pain points.
              </p>
              <div className="flex gap-5 justify-between mt-16 max-md:mt-10 max-sm:text-base">
                <div className="self-start w-5 h-5 bg-red-700 rounded-xl" />
                <div className="flex-auto">24/7 Full Service Support</div>
              </div>
              <div className="flex gap-5 justify-between mt-8 max-sm:text-base">
                <div className="self-start w-5 h-5 bg-red-700 rounded-xl  " />
                <div className="flex-auto">Immediate Response</div>
              </div>
              <div className="flex gap-5 justify-between mt-8 max-sm:text-base">
                <div className="self-start w-5 h-5 bg-red-700 rounded-xl" />
                <div className="flex-auto">Easy to Approach us</div>
              </div>
            </div>
          </div>
          <div className="grow relative  z-10 max-md:mt-10 max-md:max-w-full">
            <div className="xl:mx-28 lg:mx-32 md:mx-10 mt-14 absolute -z-10   ">
              <motion.svg width="657" height="683">
                <defs>
                  <linearGradient
                    id="customGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#97203E" />
                    <stop offset="100%" stopColor="#FF3800" />
                  </linearGradient>
                </defs>
                <motion.path
                  initial={{ pathLength: 0, pathSpacing: 0.4 }}
                  whileInView={{ pathLength: 1, pathSpacing: 0.4 }}
                  transition={{
                    pathLength: {
                      delay: 0.4,
                      type: "tween",
                      duration: 10,
                      ease: "linear",
                      // repeat: Infinity,
                      bounce: 0,
                    },
                  }}
                  className="max-sm:hidden"
                  strokeDasharray="3.846, 2.282"
                  strokeDashoffset="0"
                  strokeWidth="3.641"
                  id="svgPath"
                  stroke="url(#customGradient)"
                  fill="none"
                  d="M 350 50 Q 150 200 350 300 Q 650 400 350 600 "
                  transform=" "
                ></motion.path>
                <path
                  id=""
                  className="max-sm:hidden"
                  stroke="#97203E"
                  strokeDasharray="3.846, 2.282"
                  strokeDashoffset="0"
                  strokeWidth="1.641"
                  fill="none"
                  d="M 350 50 Q 150 200 350 300 Q 650 400 350 600 "
                  transform=""
                ></path>
                <motion.path
                  initial={{ pathLength: 0, pathSpacing: 0.4 }}
                  whileInView={{ pathLength: 1, pathSpacing: 0.4 }}
                  transition={{
                    pathLength: {
                      delay: 0.4,
                      type: "tween",
                      duration: 10,
                      ease: "linear",
                      // repeat: Infinity,
                      bounce: 0,
                    },
                  }}
                  className="md:hidden"
                  strokeDasharray="3.846, 2.282"
                  strokeDashoffset="0"
                  strokeWidth="3.641"
                  id="svgPath"
                  stroke="url(#customGradient)"
                  fill="none"
                  d="M 25 45 L 250 154000"
                  transform=" "
                ></motion.path>
                <path
                  id=""
                  className="md:hidden"
                  stroke="#97203E"
                  strokeDasharray="3.846, 2.282"
                  strokeDashoffset="0"
                  strokeWidth="1.641"
                  fill="none"
                  d="M 25 45 L 250 154000"
                  transform=""
                ></path>
              </motion.svg>
            </div>

            <div className="gap-5 max-md:gap-0 z-10   ">
              <div className="flex justify-end w-full lg:-ml-8 xl:ml-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full xl:mr-12">
                  <div className="flex flex-col  grow max-md:max-w-full">
                    <div className="py-12 pr-5  rounded-xl max-md:pr-5 max-md:max-w-full">
                      <div className="flex  xl:gap-5 max-md:flex-row max-md:gap-5">
                        <div className="lg:w-[14%] max-md:ml-0">
                          <div className="justify-center items-center px-4 mt-5 h-[53px] w-[53px] text-2xl font-bold tracking-tight text-center text-[#97203E] whitespace-nowrap bg-violet-50 rounded-3xl aspect-square  leading-[53.02px] max-md:mt-10">
                            01
                          </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full bg-violet-50  py-4 sm:py-10 pl-4 pr-5">
                          <div className="flex flex-col max-md:mt-10">
                            <h2 className="text-2xl font-medium tracking-tight leading-6 text-neutral-800">
                              Discovery and Analysis
                            </h2>
                            <div className="mt-5 text-lg leading-7 text-zinc-900 text-opacity-70">
                              Perform a analysis of the client&apos;s <br />{" "}
                              existing IT systems.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full md:max-lg:-mt-24">
                <div className="flex  w-6/12 max-md:ml-0 max-md:w-full xl:ml-12 lg:ml-14 ">
                  <div className="flex flex-col grow max-md:max-w-full">
                    <div className="py-8 sm:py-12 pr-5  rounded-xl max-md:pr-5 max-md:max-w-full">
                      <div className="flex gap-10 flex-row-reverse max-md:flex-row max-md:gap-5 ">
                        <div className="w-[14%] max-md:ml-0">
                          <div className="justify-center items-center px-4 mt-5 w-[53px] text-2xl font-bold tracking-tight text-center text-[#97203E]  whitespace-nowrap bg-violet-50 rounded-3xl aspect-square h-[53px] leading-[53.02px] max-md:mt-10">
                            02
                          </div>
                        </div>
                        <div className="flex flex-col  ml-5 w-[72%] max-md:ml-0 max-md:w-full bg-violet-50  py-4 sm:py-10 pl-4 pr-5">
                          <div className="flex flex-col max-md:mt-10">
                            <h2 className="text-2xl font-medium tracking-tight leading-6 text-neutral-800">
                              Discovery and Analysis
                            </h2>
                            <div className="mt-5 text-lg leading-7 text-zinc-900 text-opacity-70">
                              Perform a analysis of the client's <br /> existing
                              IT systems.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end w-full ">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full xl:mr-10 lg:mr-10">
                  <div className="flex flex-col  grow max-md:max-w-full">
                    <div className="py-12 pr-5  rounded-xl max-md:pr-5 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-row max-md:gap-5 ">
                        <div className="w-[14%] max-md:ml-0">
                          <div className="justify-center items-center px-4 mt-5 text-2xl font-bold tracking-tight text-center text-[#97203E] whitespace-nowrap bg-violet-50 rounded-3xl aspect-square h-[53px] w-[53px] leading-[53.02px] max-md:mt-10">
                            03
                          </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full bg-violet-50 py-4 sm:py-10 pl-4 pr-5">
                          <div className="flex flex-col max-md:mt-10">
                            <h2 className="text-2xl font-medium tracking-tight leading-6 text-neutral-800">
                              Deployment and Support
                            </h2>
                            <div className="mt-5 text-lg leading-7 text-zinc-900 text-opacity-70">
                              Regularly communicate with our <br /> client to
                              any concern.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
