"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import Tabs from './Tabs';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>NextJS</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>NextJs</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Karadeniz Techinal University</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Düzenlenecek</li>
            </ul>
        ),
    },
];

const About = () => {

    const [activeTab, setActiveTab] = useState("skills");
    const handleChange = (id: string) => {
        setActiveTab(id)
    }
    return (
        <div className='text-mycolor-700' id='about'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8 px-4'>
                <Image className='rounded-md' alt='' src={"/2.png"} width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <p className='text-base lg:text-lg'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quidem officia neque minus laborum, sit illo accusamus vero, velit animi consequuntur corporis id rem pariatur!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda praesentium cum, beatae ea et expedita ipsam! Tempora minus itaque et.
                    </p>
                    <div className='flex flex-row justify-start items-center mt-4'>
                        <Tabs
                            active={activeTab === "skills"}
                            selectTab={() => handleChange("skills")}
                        >
                            Skills
                        </Tabs>
                        <Tabs
                            active={activeTab === "education"}
                            selectTab={() => handleChange("education")}
                        >
                            Education
                        </Tabs>
                        <Tabs
                            active={activeTab === "certifications"}
                            selectTab={() => handleChange("certifications")}
                        >
                            Certifications
                        </Tabs>
                    </div>
                    <div className='mt-8'>
                        {TAB_DATA.find((tab => tab.id === activeTab))?.content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About