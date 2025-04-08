import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { SquareArrowOutUpRight, Github } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
const PathfindingAlgorithm = dynamic(
    () => import('./pathfindingAlgorithm'),
    { ssr: false }
)

const projects = () => {
    const locale = useLocale();
    const t = useTranslations();
    const projectsT = t.raw('projects')
    const tg = useTranslations('general');
    const pd = t.raw('general.projectDozens');


    return (
        <section id="projects">
            <div className="container mx-auto px-[25px] pt-20 relative">

                <h2 className="text-5xl font-black mb-24 -mt-12 before:content-[''] before:absolute before:border-b-[18px] before:border-b-[#233047] before:w-[14rem] before:left-[3.5rem] before:top-[4.3rem] before:-z-10">{tg("projects")}</h2>

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
                                {projectsT[0].title}
                            </h3>
                            <div className="lead md:text-xl font-semibold ">
                                {projectsT[0].description}
                            </div>

                            <div className="flex items-center flex-wrap gap-x-4">
                                <div className="btn mt-8">
                                    <Link href={"https://github.com/KirishanthRajaraj/BlitzTypes"} target='_blank' className='flex items-center px-6 py-3 text-xl text-black hover:bg-green shadow-green duration-200 bg-green text-[var(--background)] font-extrabold border-transparent border-2 hover:bg-transparent hover:border-green hover:border-2 hover:text-green'>
                                        <Github />
                                    </Link>
                                </div>

                                <div className="btn mt-8">
                                    <Link href={"https://blitz-types.vercel.app/"} target='_blank' className='flex items-center px-6 py-3 text-xl text-black hover:bg-green shadow-green duration-200 bg-green text-[var(--background)] font-extrabold border-transparent border-2 hover:bg-transparent hover:border-green hover:border-2 hover:text-green'>
                                        <SquareArrowOutUpRight />
                                    </Link>
                                </div>

                                <div className="btn mt-8">
                                    <Link href={`/${locale}/BlitzTypes`} className='px-6 py-3 text-xl text-black hover:bg-green shadow-green duration-200 bg-green text-[var(--background)] font-extrabold border-transparent border-2 hover:bg-transparent hover:border-green hover:border-2 hover:text-green'>
                                        {tg('learnMore')}
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
                                {projectsT[1].title}
                            </h3>
                            <div className="lead md:text-xl font-semibold ">
                                {projectsT[1].description}
                            </div>

                            <div className="flex items-center flex-wrap gap-4">
                                <div className="btn mt-8">
                                    <Link href={"https://github.com/KirishanthRajaraj/PathfindingAlgorithm/"} target='_blank' className='flex items-center px-6 py-3 text-xl text-black hover:bg-green shadow-green duration-200 bg-green text-[var(--background)] font-extrabold border-transparent border-2 hover:bg-transparent hover:border-green hover:border-2 hover:text-green'>
                                        <Github />
                                    </Link>
                                </div>

                                <div className="btn mt-8">
                                    <Link href={`/${locale}/pathfinding`} className='px-6 py-3 text-xl text-black hover:bg-green shadow-green duration-200 bg-green text-[var(--background)] font-extrabold border-transparent border-2 hover:bg-transparent hover:border-green hover:border-2 hover:text-green'>
                                        {tg('learnMore')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='img__wrapper w-full lg:w-[30%] xl:w-[30%]'>
                        <Link href={`/${locale}/pathfinding`} target='_blank' className=''>
                            <PathfindingAlgorithm className='rounded-3xl transition-transform duration-500 ease-in-out transform hover:scale-105' />
                        </Link>
                    </div>
                </div>

                <div className="flex gap-10 md:gap-16 flex-col lg:flex-row justify-center">
                    <div className="content">
                        <p className='text-lg md:mt-2 mt-8' dangerouslySetInnerHTML={{ __html: pd }} />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default projects;