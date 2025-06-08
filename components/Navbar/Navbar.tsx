"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";
import { HiBars3BottomLeft, HiBars3BottomRight } from "react-icons/hi2";
import { Button } from "../ui/button";
import NavMenuBar from "./NavMenuBar";

const navLinks = [
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="fixed mx-auto !border-b bg-mycolor-400 !border-mycolor-300 top-0 left-0 right-0 z-10  bg-opacity-85">
            <div className="lg:container mx-auto py-3 px-8 md:px-8 ">
                <div className="mx-auto flex items-center justify-between flex-wrap py-2 lg:py-4 px-2">
                    <Link
                        href={"/"}
                        className="text-2xl md:text-4xl text-mycolor-700 font-semibold font-pacifico"
                    >
                        MuhammedDev
                    </Link>

                    <div className="block md:hidden text-mycolor-700">
                        {!isOpen ? (
                            <Button onClick={() => setIsOpen(!isOpen)}>
                                <HiBars3BottomLeft className="!w-7 !h-7" />
                            </Button>
                        ) : (
                            <Button onClick={() => setIsOpen(!isOpen)}>
                                <HiBars3BottomRight className="!w-7 !h-7" />
                            </Button>
                        )}
                    </div>

                    <div className="hidden md:block md:w-auto">
                        <div className="md:flex md:flex-row md:space-x-5">
                            {navLinks.map((link, i) => (
                                <NavItem key={i} href={link.path} name={link.name} />
                            ))}
                        </div>
                    </div>

                </div>
                {isOpen && (
                    <NavMenuBar links={navLinks} />
                )}
            </div>
        </nav>
    );
};

export default Navbar;
