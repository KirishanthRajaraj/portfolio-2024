'use client'
import React, { useEffect, useState } from 'react';
import HamburgerMenu from './hamburgerMenu';
import Image from 'next/image';
import Link from 'next/link';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { value: "Timeline", link: "/#timeline" },
    { value: "About me", link: "/#about-me" },
    { value: "Projects", link: "/#projects" },
    { value: "Contact me", link: "mailto:kiricommercial@gmail.com" },
  ];

  return (
    <nav className={`fixed z-40 w-full right-0 bg-background transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="relative flex justify-between p-8 !py-6 md:p-16">
        <div className="logo flex items-center">
          <Link href={"/"}>
            <Image src="/static/kiri-logo.png" width={75} height={75} alt="Kiri" />
          </Link>
        </div>
        <div className="menu-wrapper relative z-50" onClick={toggleMenu}>
          <HamburgerMenu active={isOpen} setActive={setIsOpen} ></HamburgerMenu>
        </div>
        <ul className={`absolute z-30 top-0 right-0 pl-8 pt-32 md:pl-16 p-16 w-[90%] md:w-[50%] xl:w-[30%] h-screen bg-slate-800 shadow-lg transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {menuItems.map((item, index) => (
            <li key={index} className="py-2">
              <a href={item.link} className="text-white text-3xl font-bold hover:opacity-75" onClick={toggleMenu}>{item.value}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;