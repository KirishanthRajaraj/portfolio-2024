import React from 'react'
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Navigation from '../components/navigation';

const Blitztypes = () => {

    return (
        <div>
            <Navigation></Navigation>

            <section className="section blog-post pt-32">
                <div className="container max-w-screen-lg mx-auto md:p-12 py-12 p-[20px]">
                    <article className="row justify-center">
                        <div className="md:col-10 text-center">
                            <h1 className="h2 text-4xl font-bold">BlitzTypes</h1>
                            <ul className="mt-4 flex flex-wrap items-center justify-center text-text">
                                <li className="mx-3">
                                    <span>Kirishanth Rajaraj</span>
                                </li>
                                <li className="mx-3 flex items-center flex-wrap font-medium">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="mr-1 h-5 w-5 text-gray-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 4h-3V2h-2v2h-4V2H8v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM5 20V7h14V6l.002 14H5z"></path>
                                        <path d="m15.628 12.183-1.8-1.799 1.37-1.371 1.8 1.799zm-7.623 4.018V18h1.799l4.976-4.97-1.799-1.799z"></path>
                                    </svg>
                                    02 Apr, 2022
                                </li>
                                <li className="mx-3 flex items-center flex-wrap">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="mr-1 h-[18px] w-[18px] text-gray-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11 4h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6h-4v-4h4v4zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path>
                                    </svg>
                                    <ul>
                                        <li className="inline-block"> Development </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="md:max-w-screen-md mx-auto">
                            <div className="content my-6 md:my-10 text-left">
                                <h2 className='text-3xl font-bold mb-4'>Authentication</h2>
                                <p>
                                    For Blitztypes, I aimed to create a comprehensive, secure, and professional authentication mainly for learning purposes.
                                    To achieve this, I implemented JWT (JSON Web Token) authentication, which is widely regarded as the gold
                                    standard in web development. ASP.NET Identity streamlined this process, with a prebuilt JWT validator, automatic password hashing etc.
                                </p>
                                <p>Here&apos;s how it works:</p>
                                <Image className='rounded-xl mb-4' src="/static/jwt_auth.png" alt='Jwt Authentication' layout='responsive' width={500} height={300}></Image>
                                <p>
                                    The basic idea is the client (the user) logs in with correct credentials and gets back a specialized token from the server,
                                    which in my case is stored within httpOnly browser cookies. This Cookie, which contains the custom token gets sent back
                                    to the server with every request. The server will only return user data if the token is valid. For example try accessing /profile page
                                    at blitz-types.vercel.app while you&apos;re not logged in. You will get redirected.
                                </p>

                                <p className='!mb-8'>
                                    This token called an access token is valid for 15 min upon logging in. <br />
                                    What happens after these 15 min? And why 15 min? For Security reasons a short lived access token is highly recommended. After the initial 15 min, the token will expire and the user is officially not logged in anymore.
                                    But upon failure of fetching the next user data, the server will check if the user has a valid so called refreshToken in their cookies, which was also created upon logging in.
                                    If the hashed refreshToken is valid the Server will generate another 15 min valid Access Token. Why a refreshToken? Since you don&apos;t want your users to have to log in again every 15 min,
                                    theres this longer lived refreshToken, which is valid for a few days to weeks. The trade back being, that you have to store this refreshToken very securely.
                                </p>

                                <h2 className='text-3xl font-bold mb-2'>Frontend</h2>
                                <div className="col-12 max-w-full mb-2 flex gap-3 md:gap-5 relative">
                                    <Image className='rounded-3xl object-cover object-[50%_55%] shadow-black shadow-lg' src="/static/blitztypes_showcase_eval.png" layout='responsive' width={5000} height={3000} alt="Military Service Kiri" />
                                </div>
                                <p>
                                    Setting up the frontend was relatively straightforward. Since i went for a simple and modern design. I mainly used Shadcn UI library which gave
                                    me a few singular components that i could customize like Cards, Buttons, Dropdowns etc. alongside tailwind CSS and other libraries like recharts.js.
                                    This allowed me to quickly setup a frontend and focus on other functionalities i didn't have much experiences with.
                                </p>
                                <div className="col-12 max-w-full mb-2 flex gap-3 md:gap-5 relative">
                                    <Image className='rounded-3xl object-cover object-[50%_55%] shadow-black shadow-lg' src="/static/textbox.png" layout='responsive' width={5000} height={3000} alt="Military Service Kiri" />
                                </div>
                                <p>
                                    If you visit <a href="https://blitz-types.vercel.app/">Blitztypes</a> you will notice that the text you're typing is not into a text inputfield but rather
                                    updates the text that you're seeing yourself. Enabling you to directly view your typing progress/mistakes without straining your eyes. It's a clever
                                    trick, where you hide the text inputfield and redirect the input focus when the user clicks in a certain place.
                                    <br />The updating of the text works because, every single character is an independent object, tracking various information such as isCorrect, color, timeStamp etc.
                                </p>

                            </div>
                        </div>


                    </article>
                </div>
            </section>
        </div>
    )
}

export default Blitztypes