import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { SquareArrowOutUpRight } from 'lucide-react';

const projects = () => {
    return (
        <section id="projects">
            <div className="container mx-auto px-[25px] py-20 relative">

                <h2 className="text-5xl font-black mb-24 -mt-12 before:content-[''] before:absolute before:border-b-[18px] before:border-b-[#233047] before:w-[14rem] before:left-[3.5rem] before:top-[4.3rem] before:-z-10">Projects</h2>

                <div className="bg-container w-full h-full mx-auto flex justify-center">
                    <div className="absolute bg-[#233047] w-full md:w-[50%] h-full mx-auto -z-10 -mt-16 rounded-xl">

                    </div>
                </div>

                <div className="flex gap-10 md:gap-16 flex-col lg:flex-row">
                    <div className='img__wrapper w-full lg:w-[70%] xl:w-[70%]'>
                        <Image src="/static/blitztypes_showcase.png" className='rounded-3xl shadow-black shadow-lg' width={500} height={500} layout='responsive' alt='BlitzTypes Showcase'></Image>
                    </div>

                    <div className="content w-full xl:w-[40%] lg:w-[40%]">
                        <h3 className='text-3xl font-bold mb-6 text-green'>
                            BlitzTypes
                        </h3>
                        <div className="lead md:text-xl font-semibold ">
                            A Full Stack Typing Application to help you practice your typing, with a competitive leaderboard. Built with React, Next.js, .NET Web API, MS SQL Server DB, Azure App Service, Tailwind.
                        </div>

                        <div className="flex items-center flex-wrap gap-4">
                            <div className="btn mt-8">
                                <Link href={"/https://blitz-types.vercel.app/"} className='flex items-center px-6 py-3 text-xl hover:bg-green shadow-green duration-200 bg-green text-[var(--background)] font-extrabold border-transparent border-2 hover:bg-transparent hover:border-green hover:border-2 hover:text-green'>
                                    <SquareArrowOutUpRight />
                                </Link>
                            </div>

                            <div className="btn mt-8">
                                <Link href={"/blog"} className='px-6 py-3 text-xl hover:bg-green shadow-green duration-200 bg-green text-[var(--background)] font-extrabold border-transparent border-2 hover:bg-transparent hover:border-green hover:border-2 hover:text-green'>
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default projects;