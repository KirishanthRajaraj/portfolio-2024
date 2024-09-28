import React from 'react'

const aboutMe = () => {
    return (
        <section>
            <div className="container mx-auto px-[25px] md:px-[25px] py-2">
                <h2 className="text-5xl relative font-black mb-8 md:mb-12 before:content-[''] before:absolute before:border-b-[18px] before:border-b-[#233047] before:w-[14rem] before:left-[3.5rem] before:top-[2.3rem] before:-z-10">
                    About me
                </h2>
            </div>
            <div className='container mx-auto relative max-w-screen-xl p-8 md:p-24 !pt-0'>

                <div className="flex gap-4 md:gap-24 justify-between flex-col md:flex-row">
                    <div className="content w-full md:w-[40%]">

                        <h3 className='text-3xl font-bold text-green mb-4'>
                            Hey! I am Kiri
                        </h3>
                        <p className='mb-4'>
                            I am currently 20 years old having gained my <strong className='font-black'>first practical years of experience. </strong>
                            From fixing my first Bug at 15 to building full fledged business ready applications now, i still get the same <strong className='font-black'>satisfaction</strong> in this branch.
                        </p>
                        <p className='mb-4'>
                            Apart from programming i like to learn and endulge myself in new skills such as drawing, language learning, music production, and of course <strong className='font-black'>programming.</strong> I regularly keep myself <strong className='font-black'>updated
                                on topics Software Development</strong> and exchange my knowledge with other developers.
                        </p>

                    </div>
                    <div className="skills w-full md:w-[60%]">
                        <h3 className='text-3xl font-bold text-green mb-4'>
                            Skills
                        </h3>
                        <div className="grid md:gap-4 grid-cols-1 md:grid-cols-2">

                            <div className="flex flex-col">
                                <p className="text-gray-200 text-sm mb-2 font-bold">C# ASP.NET</p>
                                <div className="border-green border h-4 mb-4"><div className="h-full bg-green" style={{ width: '80%' }}></div></div>
                                <p className="text-gray-200 text-sm mb-2 font-bold">HTML / CSS / JS</p>
                                <div className="border-green border h-4 mb-4"><div className="h-full bg-green" style={{ width: '90%' }}></div></div>
                                <p className="text-gray-200 text-sm mb-2 font-bold">React</p>
                                <div className="border-green border h-4 mb-4"><div className="h-full bg-green" style={{ width: '75%' }}></div></div>
                                <p className="text-gray-200 text-sm mb-2 font-bold">Typescript</p>
                                <div className="border-green border h-4 mb-4"><div className="h-full bg-green" style={{ width: '80%' }}></div></div>

                            </div>
                            <div className="flex flex-col">
                                <p className="text-gray-200 text-sm mb-2 font-bold">Umbraco CMS</p>
                                <div className="border-green border h-4 mb-4"><div className="h-full bg-green" style={{ width: '80%' }}></div></div>
                                <p className="text-gray-200 text-sm mb-2 font-bold">Hubspot CMS</p>
                                <div className="border-green border h-4 mb-4"><div className="h-full bg-green" style={{ width: '95%' }}></div></div>
                                <p className="text-gray-200 text-sm mb-2 font-bold">Git</p>
                                <div className="border-green border h-4 mb-4"><div className="h-full bg-green" style={{ width: '80%' }}></div></div>

                                <p className="text-gray-200 text-sm mb-2 font-bold">Python</p>
                                <div className="border-green border h-4 mb-4"><div className="h-full bg-green" style={{ width: '60%' }}></div></div>
                            </div>

                        </div>
                        <p className='mb-3 text-sm font-extralight'>Very much <strong className='font-bold'>open</strong> and <strong className='font-bold'>interested</strong> to learn more</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default aboutMe;