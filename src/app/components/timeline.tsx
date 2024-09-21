import React from 'react'
import Link from 'next/link';
import showcase from '../images/chiliweb-showcase.png'
import Image from 'next/image';

const milestones: Milestone[] = [
    { title: "Project Inception", imageUrl: '/static/chiliweb-showcase.png' },
    { title: "First Prototype", imageUrl: '/static/chiliweb-showcase.png' },
    { title: "Beta Launch", imageUrl: '/static/chiliweb-showcase.png' },
    { title: "Public Release", imageUrl: '/static/chiliweb-showcase.png' },
  ]


const timeline = () => {

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Timeline</h2>
            <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-300"></div>

                {milestones.map((milestone, index) => (
                    <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                            <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                            <Image src={milestone.imageUrl} alt={milestone.title} layout="responsive" width={500} height={500} className="rounded-lg shadow-md" ></Image>
                        </div>
                        <div className="w-2/12 flex justify-center">
                            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center relative">
                                <div className="w-7 h-7 bg-white rounded-full absolute animate-ping"></div>
                            </div>
                        </div>
                        <div className="w-5/12"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default timeline;