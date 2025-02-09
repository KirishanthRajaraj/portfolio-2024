import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MilestoneData } from '../interface/milestone';

interface MilestoneProps {
    milestone: MilestoneData;
    index: number;
}

const Milestone: React.FC<MilestoneProps> = ({ milestone, index }) => {
    const dotRef = useRef(null);
    const dotIsInView = useInView(dotRef);
    const [spread, setSpread] = useState(false);

    const toggleSpread = () => {
        setSpread(!spread);
    };

    const content = (
        <div className="milestone-content__wrapper flex justify-end">
            {milestone.imageUrl ? (
                <div className="mt-6 md:mt-0 relative max-w-[80%] w-64 h-36 group" onClick={toggleSpread}>
                    <div className='wrapper duration-75 group-hover:opacity-100 opacity-75'>
                        <Image
                            src={milestone.imageUrl}
                            alt={milestone.title}
                            layout="responsive"
                            width={500}
                            height={500}
                            className={`absolute top-0 left-0 w-full h-full object-cover transition-all ease-in-out duration-500 rounded-3xl aspect-[4/3] 
                            ${milestone.imageUrl2 ?
                                    'group-hover:rotate-[-15deg] group-hover:translate-x-[-30px] group-hover:z-10 ' : ''
                                }`}
                        />
                    </div>

                    {milestone.imageUrl2 && (
                        <div className='wrapper duration-75 group-hover:opacity-75 opacity-100'>
                            <Image
                                src={milestone.imageUrl2}
                                alt={milestone.title}
                                layout="responsive"
                                width={500}
                                height={500}
                                className={`absolute top-0 left-0 w-full h-full object-cover transition-all ease-in-out duration-500 rounded-3xl aspect-[4/3] rotate-[-15deg] translate-x-[-30px] 
                                ${milestone.imageUrl2 ?
                                        'group-hover:rotate-[0] group-hover:translate-x-0 group-hover:opacity-75 opacity-100 ' : ''
                                    }`}
                            />
                        </div>
                    )}
                </div>
            ) : null}
        </div>
    );

    return (
        <div
            key={index}
            className={`flex items-start justify-center ${milestone.imageUrl2 || milestone.imageUrl ? 'mb-24' : 'my-6'} ${index % 2 === 0 ? 'lg:flex-row flex-col' : 'lg:flex-row-reverse flex-col '}`}
        >
            <div className={`text-right w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right justify-end' : 'lg:text-left justify-start'} flex`}>
                <div className="w-full lg:w-2/5">
                    <div className={`title__section relative flex gap-4 justify-end lg:justify-between items-center mb-2 hyphens-auto ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                        <Image src={milestone.logo} width={40} height={40} alt={milestone.logoAlt} className={`${milestone.isRound ? 'rounded-full' : ''}`} />
                        <h3 className="text-2xl font-semibold">{milestone.title}</h3>
                    </div>
                    <div className="text-sm opacity-40 font-semibold mb-2">{milestone.date}</div>
                    <div className="text-xl font-semibold">{milestone.subtitle}</div>
                </div>
            </div>
            <div className="w-full lg:w-[10%] flex lg:justify-center relative">
                <div className="relative flex items-center justify-center ml-[calc(-10%-13px)] lg:ml-0 mt-[-50%]  sm:mt-0">
                    <div className="w-16 h-16 bg-background rounded-full absolute z-0"></div>
                    <motion.div
                        ref={dotRef}
                        className="w-6 h-6 bg-green rounded-full flex items-center justify-center relative z-20 opacity-0"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ scale: dotIsInView ? 1 : 0, opacity: dotIsInView ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: 0.1, type: "spring", stiffness: 100 }}
                    >
                        <motion.div className="w-7 h-7 bg-green rounded-full absolute animate-ping z-10"></motion.div>
                    </motion.div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 relative flex items-center lg:justify-center justify-end">

                {(milestone.link ? (
                    <>
                        <div className="absolute top-[10%] xl:left-[35%] md:left-[60%] left-[35%] lg:left-[25%] sm:left-[40%] sm:w-[30%] w-[35%] lg:w-[35%] xl:w-[25%] h-[60%] rounded-3xl animate-ping border-2 border-green-500 rotate-[-15deg] translate-x-[-1px] group-hover:rotate-0 group-hover:translate-x-0"></div>

                        <Link href={milestone.link}>
                            {content}
                        </Link>
                    </>
                ) : (
                    content
                ))}
            </div>
        </div>
    );
};

export default Milestone;
