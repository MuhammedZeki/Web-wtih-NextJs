'use client'
import { motion } from 'framer-motion'
import React from 'react'


const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" }
}
interface TabsProps {
    selectTab: () => void;
    active: boolean;
    children: React.ReactNode;
}


const Tabs = ({ active, children, selectTab }: TabsProps) => {
    const buttonClasses = active ? "text-mycolor-700 " : "text-gray-500 ";
    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold ${buttonClasses}`}>
                {children}
            </p>
            <motion.div
                animate={active ? "active" : "default"}
                variants={variants}
                className='h-1 bg-mycolor-100 mt-2 mr-3'
            >

            </motion.div>
        </button>
    )
}

export default Tabs