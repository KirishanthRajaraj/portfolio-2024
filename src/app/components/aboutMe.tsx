'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Skill from './skill';

const AboutMe = () => {
    const t = useTranslations();
    const aboutMeT = t.raw('aboutMe.learnMore');


    const skills = [
        { name: "C# ASP.NET", percentage: 75 },
        { name: "HTML / CSS / JS", percentage: 90 },
        { name: "React", percentage: 75 },
        { name: "Typescript", percentage: 80 },
        { name: "Umbraco CMS", percentage: 80 },
        { name: "Hubspot CMS", percentage: 95 },
        { name: "Git", percentage: 80 },
        { name: "jQuery", percentage: 75 },
    ];

    const halfIndex = Math.ceil(skills.length / 2);
    const firstHalf = skills.slice(0, halfIndex);
    const secondHalf = skills.slice(halfIndex);

    return (
        <section id="about-me" className="mt-5">
            <div className="container mx-auto px-[25px] md:px-[25px] py-2">
                <h2 className="text-5xl relative font-black mb-8 md:mb-12 before:content-[''] before:absolute before:border-b-[18px] before:border-b-[#233047] before:w-[14rem] before:left-[3.5rem] before:top-[2.3rem] before:-z-10">
                    {t('general.skills')}
                </h2>
            </div>
            <div className="container mx-auto relative max-w-screen-xl p-8 md:p-24 !pt-0">
                <div className="flex gap-4 md:gap-24 justify-between flex-col md:flex-row">
                    <div className="content w-full md:w-[40%]">
                        <h3 className="text-3xl font-bold text-green mb-4">
                            {t('aboutMe.greeting')}
                        </h3>
                        <p className="mb-4">
                            {t('aboutMe.intro')}
                        </p>
                        <p className="mb-4">
                            {t('aboutMe.hobbies')}
                        </p>
                    </div>
                    <div className="skills w-full md:w-[60%]">
                        <h3 className="text-3xl font-bold text-green mb-4">
                            {t('general.skills')}
                        </h3>
                        <div className="grid md:gap-4 grid-cols-1 md:grid-cols-2">
                            <div className="flex flex-col">
                                {firstHalf.map((skill, index) => (
                                    <Skill key={index} name={skill.name} percentage={skill.percentage} />
                                ))}
                            </div>
                            <div className="flex flex-col">
                                {secondHalf.map((skill, index) => (
                                    <Skill key={index} name={skill.name} percentage={skill.percentage} />
                                ))}
                            </div>
                        </div>
                        <p className="mb-3 text-sm font-extralight" dangerouslySetInnerHTML={{ __html: aboutMeT }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
