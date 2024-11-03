import React from 'react'
import Image from 'next/image';
import dynamic from 'next/dynamic';
const PathfindingAlgorithm = dynamic(
    () => import('../components/pathfindingAlgorithm'),
    { ssr: false }
)

const PathfindingComparison = dynamic(
    () => import('../components/pathfindingComparison'),
    { ssr: false }
)

const Pathfinding = () => {
    return (
        <div>
            <section className="section blog-post ">
                <div className="container max-w-screen-lg mx-auto md:p-12 py-12 p-[20px]">
                    <article className="row justify-center">
                        <div className="md:col-10 text-center">
                            <h1 className="h2 text-4xl font-bold">A* Pathfinding Algorithm</h1>
                            <ul className="mt-4 flex flex-wrap items-center justify-center text-text">
                                <li className="mx-3"> <a href="/authors/john-doe" className="flex items-center hover:text-primary font-medium">
                                    <Image src="/images/authors/john-doe.jpg" alt="Kirishanth Rajaraj" className="mr-2 h-6 w-6 rounded-full" width="50" height="50" loading="lazy" decoding="async" /> <span>Kirishanth Rajaraj</span> </a> </li>
                                <li className="mx-3 flex items-center flex-wrap font-medium">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="mr-1 h-5 w-5 text-gray-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 4h-3V2h-2v2h-4V2H8v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM5 20V7h14V6l.002 14H5z"></path>
                                        <path d="m15.628 12.183-1.8-1.799 1.37-1.371 1.8 1.799zm-7.623 4.018V18h1.799l4.976-4.97-1.799-1.799z"></path>
                                    </svg>
                                    02 Nov, 2024
                                </li>
                                <li className="mx-3 flex items-center flex-wrap">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="mr-1 h-[18px] w-[18px] text-gray-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11 4h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6h-4v-4h4v4zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path>
                                    </svg>
                                    <ul>
                                        <li className="inline-block"> Experiments </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 max-w-full mt-8 mb-2 flex gap-3 md:gap-5 relative">
                            <PathfindingAlgorithm />
                        </div>

                        <div className="md:max-w-screen-md mx-auto">
                            <div className="content my-6 md:my-10 text-left">
                                <h2 className='md:text-3xl text-2xl font-bold'>
                                    Pathfinding
                                </h2>
                                <p className='mb-4'>
                                    Have you ever wondered how one can find the <strong className='font-extrabold'>shortest possible path</strong> from point A to point B? <br /><br />
                                    The easiest way to find out would be to explore and memorize
                                    every possible path that exists and pick the shortest one out of that list. That is called the Dijkstras Algorithm.
                                    But that is a very time consuming and slow process for both humans and Computers. And that&apos;s why the A* Algorithm exists. Here&apos;s a comparison:
                                </p>
                            </div>
                        </div>

                        <PathfindingComparison />

                        <div className="md:max-w-screen-md mx-auto">
                            <div className="content my-6 md:my-10 text-left">
                                <h2 className='md:text-3xl text-2xl font-bold mb-4'>
                                    How A* works:
                                </h2>

                                Here&apos;s the map i used above. Let&apos;s make it smaller for better understanding:
                                <p className='mb-4 w-52'>
                                    <Image src="/static/a_star_visualisation.png" alt="formula" className="max-w-full" width="1000" height="1000" layout='responsive' />
                                </p>

                                <p className='mb-4'>
                                    The core idea behind this algorithm, is that for every neighbouring spot of your current position you set a score for
                                    the distance it is away from the starting point (G cost, top left number) and the distance from the target point (H cost, top right number).
                                </p>

                                <p className='mb-4 w-52'>
                                    <Image src="/static/astar-formula.svg" alt="formula" className="invert max-w-full" width="1000" height="1000" layout='responsive' />
                                </p>

                                <p className='mb-4'>
                                    You take the sum of that evaluation, which we can define as F cost (middle large number),
                                    compare F cost score of every neighbour and pick the neighbouring spot with the lowest score i.e. the spot that is the best choice to explore next.
                                    Rinse and repeat until you find the target Spot.
                                </p>

                                <p className='mb-4'>
                                    There is a Wikipedia page about the A* algorithm which has an implementation of it in pseudocode. 
                                    Which i took as reference when building my version of it in p5.js:
                                </p>

                                <Image src="/static/a_star_wiki.png" alt="formula" className="max-w-full rounded-lg" width="1000" height="1000" layout='responsive' />

                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default Pathfinding