'use client'
import React, { useState } from 'react';
import HamburgerMenu from './hamburgerMenu';


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { value: "Timeline", link: "#timeline" },
        { value: "About me", link: "#about-me" },
        { value: "Projects", link: "#projects" },
        { value: "Blog", link: "/blog" },
        { value: "Contact me", link: "mailto:kiricommercial@gmail.com" },
    ];

    return (
        <nav className="fixed z-40 w-full right-0 bg-background shadow-md shadow-background">
        <div className="relative flex flex-col items-end p-8 !py-10 md:p-16">
            <div className="menu-wrapper relative z-50" onClick={toggleMenu}>
            <HamburgerMenu></HamburgerMenu>
            </div>
{/*           <button onClick={toggleMenu} className="flex flex-col items-center justify-center w-10 h-10 focus:outline-none z-50">
            <span className={`block w-10 h-[0.4rem] mb-2 bg-white transition-all duration-500 ${isOpen ? 'rotate-45 translate-y-1 mb-0' : 'mb-[0.4rem]'}`}></span>
            <span className={`block w-10 h-[0.4rem] mb-2 bg-white transition-all duration-300 ${isOpen ? 'opacity-0 mb-0' : 'opacity-100 mb-[0.4rem]'}`}></span>
            <span className={`block w-10 h-[0.4rem] bg-white transition-transform duration-500 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button> */}
          <ul className={`absolute z-30 top-0 right-0 pl-8 pt-32 md:pl-16 p-16 w-[90%] md:w-[50%] xl:w-[30%] h-screen bg-slate-800 shadow-lg transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {menuItems.map((item, index) => (
              <li key={index} className="py-2">
                <a href={item.link} className="text-white text-3xl font-bold hover:opacity-75">{item.value}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
};

export default Navigation;