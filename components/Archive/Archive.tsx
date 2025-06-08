"use client";
import React from 'react'
import { FiActivity, FiUsers, FiClock } from "react-icons/fi";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
    ssr: false,
});
const Listachieve = [
    {
        metric: "Projects",
        value: "16",
        postfix: "+",
        icon: FiActivity,
    },
    {
        prefix: "~",
        metric: "Users",
        value: "93",
        icon: FiUsers,
    },
    {
        metric: "Years",
        value: "3",
        icon: FiClock,
    },

];

const Archive = () => {
    return (
        <div className='py-12 px-4'>
            <div className='container mx-auto  px-12 md:px-24'>
                <div className='py-6 flex flex-col md:flex-row items-center justify-between'>
                    {Listachieve.map((arc, i) => {
                        const IconComponent = arc.icon
                        return (
                            <div key={i} className='flex flex-col items-center justify-between mt-4'>
                                <div className='flex !space-x-3 items-center justify-center'>
                                    <IconComponent className='text-mycolor-700 w-10 h-10 ' />
                                    <h2 className='text-mycolor-700 text-4xl font-semibold mr-0 flex'>
                                        <div className='mr-3'>{arc.prefix}</div>
                                        <AnimatedNumbers
                                            useThousandsSeparator
                                            transitions={(index) => ({
                                                type: "spring",
                                                duration: index + 0.3,
                                            })}
                                            animateToNumber={parseInt(arc.value)}
                                            fontStyle={{
                                                fontSize: 40,
                                                fontWeight: "bold",
                                                color: "white",
                                            }}
                                        />
                                        <div className='ml-3'> {arc.postfix}</div>
                                    </h2>


                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Archive