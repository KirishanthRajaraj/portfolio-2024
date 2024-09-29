import { motion, MotionConfig } from 'framer-motion'
import { OctagonPauseIcon } from 'lucide-react';
import React, { useState } from 'react'

const hamburgerMenu = () => {

    const [active, setActive] = useState(false);

    const VARIANTS = {
        top: {
            open: {
                rotate: 45,
                top: "50%",
                left: "calc(50% + 4px)",
                width: "2rem",
            },
            closed: {
                rotate: 0,
                top: "35%",
                width: "2rem",
            },
        },
        middle: {
            open: {
                rotate: -45,
                width: "2rem",
                left: "calc(50% + 4px)",

            },
            closed: {
                rotate: 0,
                width: "3rem",
            },
        },
        bottom: {
            open: {
                rotate: 45,
                bottom: "50%",
                left: "50%",
                opacity: 0,
                width: "1.5rem",
            },
            closed: {
                rotate: 0,
                bottom: "35%",
                right: "0",
                opacity: 1,
                width: "1rem",
            },
        },
    };

    return (
        <div>
            <MotionConfig
                transition={{
                    duration: 0.1,
                    ease: "easeInOut",
                    type: "spring", 
                    stiffness: 200,
                    damping: 15,
                }}
            >
                <motion.button
                    initial={false}
                    animate={active ? "open" : "closed"}
                    onClick={() => setActive((pv) => !pv)}
                    className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
                >
                    <motion.span
                        variants={VARIANTS.top}
                        className="absolute h-1 bg-white"
                        style={{
                            y: "-50%",
                            left: "calc(50% + 4px)",
                            x: "-50%",
                            top: "35%",
                            width: "2rem",
                        }}
                    />
                    <motion.span
                        variants={VARIANTS.middle}
                        className="absolute h-1 bg-white"
                        style={{
                            left: "calc(50% - 4px)",
                            x: "-50%",
                            top: "50%",
                            y: "-50%",
                            width: "3rem",
                        }}
                    />
                    <motion.span
                        variants={VARIANTS.bottom}
                        className="absolute h-1 bg-white"
                        style={{
                            x: "-50%",
                            y: "50%",
                            bottom: "35%",
                            left: "calc(50% + 12px)",
                            width: "1.5rem",
                        }}
                    />
                </motion.button>
            </MotionConfig></div>
    )
}

export default hamburgerMenu;