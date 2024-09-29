'use client'

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import underline from '../../images/wide-line.svg';
import kiri from '../images/intro_kiri.png';
import Typewriter from 'typewriter-effect';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Link from 'next/link';
import { useSpring, animated } from '@react-spring/web';

const intro = () => {
    const [index, setIndex] = useState(0);
    const [height, setHeight] = useState(0);
    const [prevHeight, setPrevHeight] = useState(0);

    const contentRef = useRef<(HTMLDivElement | null)[]>([]);



    const calculateTitleHeight = () => {
        if (contentRef.current) {
            const activeTitleItem = contentRef.current[index];
            console.log(activeTitleItem);
            if (activeTitleItem) {
                let prevEl = contentRef.current[index - 1];
                if (prevEl) {
                    setPrevHeight(prevEl.clientHeight);
                }
                setHeight(activeTitleItem.clientHeight + 2);
            }
        }
    };

    useEffect(() => {

        calculateTitleHeight();

        const handleResize = () => {
            AOS.init();
            calculateTitleHeight();
        };

        handleResize();

        const interval = setInterval(() => {
            nextContent();
        }, 7000);

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearInterval(interval);
        };
    }, []);


    const contents = [
        "Kirishanth Rajaraj",
        "Kiri",
    ];

    const props = useSpring({
        transform: `translateY(${index * -prevHeight - 4}px)`,
        config: { tension: 300, friction: 30 },
    });

    const nextContent = () => {
        setIndex((prev) => (prev + 1) % contents.length);
    };

    return (
        <>
            <div className="mx-auto px-4 sm:px-6 md:max-w-7xl md:px-8 max-w-[1140px] sm:max-w-[720px] xs:max-w-[540px] h-[calc(100vh - 5rem)] flex">
                <div className="flex flex-col gap-10 md:flex-row md:items-center pb-20 flex-col-reverse">

                    <div className="md:w-1/2" data-aos="fade-right">
                        <div>
                            <Image src={kiri} alt='Kiri' className='rounded-[100%] hidden md:block shadow-slate-600'></Image>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <h1 className="text-4xl md:text-6xl xl:text-6xl font-bold text-white" data-aos="fade-left">
                            <div className='text-2xl mb-4 opacity-40'>Hey, I am</div>
                            <div className="overflow-hidden relative duration-150 transition-[height]"
                                style={{ height: `${height}px` }}>
                                <animated.div style={props} className="flex flex-col">
                                    {contents.map((content, i) => (
                                        <div key={i} ref={(el) => {
                                            contentRef.current[i] = el;
                                            if (el && i === index) calculateTitleHeight();
                                        }}>
                                            {content}
                                        </div>
                                    ))}
                                </animated.div>
                            </div>

                            <span className={`inline-block leading-tight md:text-4xl text-3xl text-green  bg-no-repeat bg-bottom bg-contain`}>
                                <span><h1></h1></span>
                                <Typewriter
                                    options={{
                                        strings: ["Software Engineer", "Fullstack Developer"],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                ></Typewriter>
                            </span>
                        </h1>

                        <Image src={kiri} alt='kiri' className='rounded-[100%] md:hidden' data-aos="fade-right"></Image>


                        <div data-aos="fade-left">
                            <div className="btn mt-8">
                                <Link href={"/#projects"} className='px-6 py-3 text-xl hover:bg-green shadow-green duration-200 bg-green text-[var(--background)] font-extrabold border-background border-2 hover:bg-transparent hover:border-green hover:border-2 hover:text-green'>
                                    Projects
                                </Link>
                            </div>

                            <div className="mt-8">
                                <p className="text-base text-interface-200">
                                    Over <span className="font-bold text-green text-">2+ years</span> work experience
                                </p>
                            </div>
                        </div>

                    </div>


                </div >
            </div >
        </>
    )
};

export default intro;