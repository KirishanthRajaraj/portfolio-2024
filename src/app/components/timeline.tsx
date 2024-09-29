'use client';

import React from 'react'
import Milestone from './milestone';
import { MilestoneData } from '../interface/milestone';

const milestones: MilestoneData[] = [
    { title: "Chili Digital AG", date: "2022 - current", subtitle: "My current dayjob in the middle of Zurich", imageUrl: '/static/chiliweb-showcase.png', logo: '/static/chiliweb-showcase.png', logoAlt: 'swissarmedforces' },
    { title: "Swiss Armed Forces", date: "2024 Jan. - May", subtitle: "Recruit School, as a Richtstrahl Pionier next to Zurich International Airport", imageUrl: '/static/kiri_military.jpeg', logo: '/static/swiss.png', logoAlt: 'swissarmedforces', link: '/military' },
    { title: "Language stay Eastbourne, England", date: "2019 - 2023", subtitle: "My formal education in IT Application Development, economics & law", imageUrl: '/static/chiliweb-showcase.png', logo: '/static/swiss.png', logoAlt: 'swissarmedforces' },
    { title: "IMS Aarau\u00AD/\u00ADBaden", date: "2019 - 2023", subtitle: "My formal education in IT Application Development, economics & law", imageUrl: '/static/chiliweb-showcase.png', logo: '/static/swiss.png', logoAlt: 'swissarmedforces' },
]

const Timeline = () => {

    return (
        <div className="container mx-auto p-[25px] relative">
            <h2 className="text-5xl font-bold mb-20 before:content-[''] before:absolute before:border-b-[18px] before:border-b-[#233047] before:w-[14rem] before:left-[3.5rem] before:top-[3.6rem] before:-z-10">Timeline</h2>
            <div className="relative flex lg:block h-full gap-6 lg:gap-16 lg:gap-0">

                <div className="line__wrapper flex-1 h-full w-[10%] lg:w-auto">
                    <div className="line absolute flex-1 left-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-[4px] h-full bg-white z-0"></div>
                </div>

                <div className='milestone__wrapper h-full w-[90%] lg:w-auto'>
                    {milestones.map((milestone, index) => (
                        <Milestone key={index} milestone={milestone} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Timeline;