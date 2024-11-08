import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { SquareArrowOutUpRight } from 'lucide-react';
const PathfindingAlgorithm = dynamic(
    () => import('../components/pathfindingAlgorithm'),
    { ssr: false }
)


const projects = () => {
    return (
        <section id="projects">
            <div className="container mx-auto px-[25px] pt-20 relative">

                <h2 className="text-5xl font-black mb-24 -mt-12 before:content-[''] before:absolute before:border-b-[18px] before:border-b-[#233047] before:w-[14rem] before:left-[3.5rem] before:top-[4.3rem] before:-z-10">Projects</h2>

                <div className="bg-container w-full h-full mx-auto flex justify-center">
                    <div className="absolute bg-[#233047] w-full md:w-[50%] h-full mx-auto -z-10 -mt-16 rounded-xl">

                    </div>
                </div>

                <div className="flex gap-10 md:gap-16 md:flex-col flex-col-reverse lg:flex-row mb-20 md:mb-10 justify-center">
                    <div className='img__wrapper w-full lg:w-[70%] xl:w-[70%]'>
                        <Link href={"https://blitz-types.vercel.app/"} target='_blank' className=''>
                            <Image src="/static/blitztypes_showcase.png" className='rounded-3xl shadow-black shadow-lg  transition-transform duration-500 ease-in-out transform hover:scale-105' width={500} height={500} layout='responsive' alt='BlitzTypes Showcase'></Image>
                        </Link>
                    </div>

                    <div className="content w-full xl:w-[40%] lg:w-[40%] flex items-center">
                        <div className="content-wrapper">
                            <h3 className='text-3xl font-bold mb-6 text-green'>
                                BlitzTypes
                            </h3>
                            <div className="lead md:text-xl font-semibold ">
                                A Full Stack Typing Application to help you practice your typing, with a competitive leaderboard. Built with React, Next.js, .NET Web API, MS SQL Server DB, Tailwind, Azure App Service and Vercel for deployment.
                            </div>

                            <div className="flex items-center flex-wrap gap-4">
                                <div className="btn mt-8">
                                    <Link href={"https://blitz-types.vercel.app/"} target='_blank' className='flex items-center px-6 py-3 text-xl hover:bg-green shadow-green duration-200 bg-green text-[var(--background)] font-extrabold border-transparent border-2 hover:bg-transparent hover:border-green hover:border-2 hover:text-green'>
                                        <SquareArrowOutUpRight />
                                    </Link>
                                </div>

                                <div className="btn mt-8">
                                    <Link href={"/BlitzTypes"} className='px-6 py-3 text-xl hover:bg-green shadow-green duration-200 bg-green text-[var(--background)] font-extrabold border-transparent border-2 hover:bg-transparent hover:border-green hover:border-2 hover:text-green'>
                                        Learn more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-10 md:gap-16 flex-col lg:flex-row justify-center">
                    <div className="content w-full xl:w-[40%] lg:w-[40%] flex items-center">
                        <div className="content-wrapper">
                            <h3 className='text-3xl font-bold mb-6 text-green'>
                                A* Pathfinding Algorithm
                            </h3>
                            <div className="lead md:text-xl font-semibold ">
                                Here i am showcasing a highly efficient Algorithm to find the shortest path form Point A to Point B. For this visualization i used a Javascript library called p5.js, commonly used for demonstrations. 
                            </div>

                            <div className="flex items-center flex-wrap gap-4">
                                <div className="btn mt-8">
                                    <Link href={"/pathfinding"} className='px-6 py-3 text-xl hover:bg-green shadow-green duration-200 bg-green text-[var(--background)] font-extrabold border-transparent border-2 hover:bg-transparent hover:border-green hover:border-2 hover:text-green'>
                                        Learn more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='img__wrapper w-full lg:w-[30%] xl:w-[30%]'>
                        <Link href={"/pathfinding"} target='_blank' className=''>
                            <PathfindingAlgorithm className='rounded-3xl transition-transform duration-500 ease-in-out transform hover:scale-105'/>
                        </Link>
                    </div>
                </div>

                <div className="flex gap-10 md:gap-16 flex-col lg:flex-row justify-center">
                    <div className="content">
                        <p className='text-lg mt-2'>Including <strong className='font-extrabold'>dozens</strong> of projects during my time at Chili Digital AG</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default projects;