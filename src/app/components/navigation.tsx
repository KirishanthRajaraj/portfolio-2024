'use client'
import React, { useEffect, useState } from 'react';
import HamburgerMenu from './hamburgerMenu';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const locale = useLocale();

  const t = useTranslations('general');

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
    { value: t('timeline'), link: "#timeline" },
    { value: t('skills'), link: "#about-me" },
    { value: t('projects'), link: "#projects" },
    { value: t('contactMe'), link: "mailto:kiricommercial@gmail.com" },
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
          <div className='flex gap-4 mb-6'>
            <Button className={`font-bold text-2xl p-6 hover:bg-slate-700 ${locale === 'de' ? 'bg-slate-700' : ''}`} variant={'ghost'}>
              <Link href={'/de'}>DE</Link>
            </Button>
            <div className='shrink-0 bg-white w-[2px] h-11'></div>
            <Button className={`font-bold text-2xl py-6 hover:bg-slate-700 ${locale === 'en' ? 'bg-slate-700' : ''}`} variant={'ghost'}>
              <Link href={'/en'}>EN</Link>
            </Button>
          </div>
          {menuItems.map((item, index) => (
            <li key={index} className="py-2">
              <a href={item.link} className="text-white text-3xl font-bold hover:opacity-75" onClick={toggleMenu} {...(item.newTab && { target: "_blank", rel: "noopener noreferrer" })}>{item.value}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;