"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Image from "next/image";
const Hero = () => {
    return (
        <div className="text-mycolor-700 container mx-auto md:px-24">
            <div className="grid grid-cols-1 md:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-content-center text-left justify-self-start"
                >
                    <h1 className="text-mycolor-700 mb-4 text-2xl md:text-3xl lg:text-4xl font-semibold font-poppins">
                        <span
                            className="text-transparent bg-clip-text text-5xl
                        bg-gradient-to-r from-mycolor-200 to-mycolor-100"
                        >
                            Hello I&#39;m
                        </span>
                        <div className="h2"></div>
                        <TypeAnimation
                            sequence={[
                                "Muhammed Zeki Yılmaz",
                                1000,
                                "Frontend Developer",
                                1000,
                                "Backend Developer",
                                1000,
                                "Full Stack Developer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={30}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="mb-4 text-mycolor-100 lg:text-lg text-base font-poppins">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
                        incidunt distinctio veniam deleniti voluptate accusantium
                        dignissimos soluta rem eveniet tempora fugit, laborum dolor
                        molestias, voluptatibus odio exercitationem earum excepturi omnis?
                    </p>
                    <div>
                        <Link
                            href="/#contact"
                            className="px-6 inline-block py-3 w-full md:w-fit rounded-full bg-gradient-to-br
                    from-mycolor-200 to-mycolor-100 text-white text-center mr-4"
                        >
                            Hire
                        </Link>

                        <Link
                            href="/"
                            className="px-1 inline-block 
                    py-1 w-full md:w-fit rounded-full
                     bg-gradient-to-br
                    from-mycolor-200 to-mycolor-100
                     text-mycolor-700 text-center mt-3"
                        >
                            <span
                                className=" block bg-mycolor-300 rounded-full
                      px-5 py-2"
                            >
                                Download CV
                            </span>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 md:mt-0"
                >
                    <div
                        className="relative rounded-full bg-gradient-to-bl
                from-mycolor-100 to-mycolor-500 
                w-[250px] h-[250px]
                md:w-[350px] md:h-[350px]
                lg:w-[400px] lg:h-[400px]
                md:!ml-10
                
                "
                    >
                        <Image
                            alt=""
                            src="/1.png"
                            width={370}
                            height={370}
                            className="absolute transform 
                                -translate-x-1/2  -translate-y-1/2 top-1/2 left-1/2 rounded-full
                                w-[220px] h-[220px]
                                md:w-[320px] md:h-[320px]   lg:w-[370px] lg:h-[370px]
                                object-cover shadow-lg shadow-mycolor-300"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
