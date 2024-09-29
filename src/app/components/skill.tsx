'use client';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

interface SkillProps {
    name: string;
    percentage: number;
}

const Skill: React.FC<SkillProps> = ({ name, percentage }) => {
    const barRef = useRef(null);
    const barIsInView = useInView(barRef);

    return (
        <div ref={barRef} className="mb-4">
            <p className="text-gray-200 text-sm mb-2 font-bold">{name}</p>
            <div className="border-green border h-4">
                <motion.div className="h-full bg-green" style={{ width: `${percentage}%` }}
                            initial={{ width: 0 }}
                            animate={{ width: barIsInView ? `${percentage}%` : 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}></motion.div>
            </div>
        </div>
    )
};

export default Skill;
