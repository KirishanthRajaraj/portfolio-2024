import React from 'react'
import Image from 'next/image';

const Blitztypes = () => {
    return (
        <div>
            <section className="section blog-post ">
                <div className="container max-w-screen-lg mx-auto md:p-12 py-12 p-[20px]">
                    <article className="row justify-center">
                        <div className="md:col-10 text-center">
                            <h1 className="h2 text-4xl font-bold">BlitzTypes</h1>
                            <ul className="mt-4 flex flex-wrap items-center justify-center text-text">
                                <li className="mx-3"> <a href="/authors/john-doe" className="flex items-center hover:text-primary font-medium">
                                    <Image src="/images/authors/john-doe.jpg" alt="John Doe" className="mr-2 h-6 w-6 rounded-full" width="50" height="50" loading="lazy" decoding="async" /> <span>John Doe</span> </a> </li>
                                <li className="mx-3 flex items-center flex-wrap font-medium">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="mr-1 h-5 w-5 text-gray-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 4h-3V2h-2v2h-4V2H8v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM5 20V7h14V6l.002 14H5z"></path>
                                        <path d="m15.628 12.183-1.8-1.799 1.37-1.371 1.8 1.799zm-7.623 4.018V18h1.799l4.976-4.97-1.799-1.799z"></path>
                                    </svg>
                                    02 Apr, 2022
                                </li>
                                <li className="mx-3 flex items-center flex-wrap">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="mr-1 h-[18px] w-[18px] text-gray-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11 4h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6h-4v-4h4v4zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path>
                                    </svg>
                                    <ul>
                                        <li className="inline-block"> Development </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 max-w-full mt-8 mb-2 flex gap-3 md:gap-5 relative">
                            <Image className='rounded-3xl object-cover object-[50%_55%] shadow-black shadow-lg' src="/static/blitztypes_showcase_eval.png" layout='responsive' width={5000} height={3000} alt="Military Service Kiri" />
                            {/*                             <Image className='rounded-3xl !w-[50%] object-cover object-[80%_55%]' src="/static/kiri_military.jpeg" layout='responsive' width={5000} height={3000} alt="Military Service Kiri"/>
 */}                        </div>
                        <div className="md:max-w-screen-md mx-auto">
                            <div className="content my-6 md:my-10 text-left">
                                <h2 className='text-3xl font-bold mb-4'>Authentication</h2>
                                <p>
                                    For Blitztypes i wanted to have the full, secure, professional authentication experience. So i decided to use JWT Token based authentication,
                                    which is the golden standard of authentication in Web development. ASP.NET Identity made this process even simpler for me, providing secure authentication methods, hashed password storage etc.
                                </p>
                                <p>Here&apos;s how it works:</p>
                                <Image className='rounded-xl mb-4' src="/static/jwt_auth.png" alt='Jwt Authentication' layout='responsive' width={500} height={300}></Image>
                                <p>                 
                                    The basic idea is the client (the user) logs in with correct credentials and gets back a specialized token from the server,
                                    which in my case is stored within httpOnly browser cookies. This Cookie, which contains the custom token gets sent back
                                    to the server with every request. The server will only return user data if the token is valid. For example try accessing /profile page
                                    at blitz-types.vercel.app while you&apos;re not logged in. You will get redirected. 
                                </p>
                                
                                <p>
                                    This token called an access token is valid for 15 min upon logging in. <br /> 
                                    What happens after these 15 min? And why 15 min? For Security reasons a short lived access token is highly recommended. After the initial 15 min, the token will expire and the user is officially not logged in anymore.
                                    But upon failure of fetching the next user data, the server will check if the user has a valid so called refreshToken in their cookies, which was also created upon logging in.
                                    If the hashed refreshToken is valid the Server will generate another 15 min valid Access Token. Why a refreshToken? Since you don&apos;t want your users to have to log in again every 15 min,
                                    theres this longer lived refreshToken, which is valid for a few days to weeks. The trade back being, that you have to store this refreshToken very securely.
                                </p>

                                <h2 className='text-3xl font-bold mb-4'>Features</h2>
                                <p>
                                    A Feature i particularly want to show and is easy to grasp is this pagination.
                                </p>
                                <Image className='rounded-xl mb-4' src="/static/fetchmorewords.png" alt='pagination feature' layout='responsive' width={500} height={300}></Image>
                                <p>
                                    Since loading hundreds of words at once would give some clients some difficulty. There is this load more which loads more words everytime the user starts typing a new line. 
                                    Striking balance between not loading too much and not too little data.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center justify-between">
                                <ul className="mr-4 mb-4 space-x-3">
                                    <li className="inline-block"> <a href="/tags/diy" className="block rounded-lg bg-theme-light px-4 py-2 font-semibold text-dark text-sm hover:text-primary transition duration-300">
                                        #Diy </a>
                                    </li>
                                    <li className="inline-block"> <a href="/tags/toy" className="block rounded-lg bg-theme-light px-4 py-2 font-semibold text-dark text-sm hover:text-primary transition duration-300">
                                        #Toy </a>
                                    </li>
                                </ul>
                                <ul className="social-share mb-4">
                                    <li className="inline-block">
                                        <a aria-label="facebook share button" href="https://facebook.com/sharer/sharer.php?u=https://bookworm-light-astro.vercel.app/post-2" target="_blank" rel="noreferrer noopener">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="inline-block">
                                        <a aria-label="twitter share button" href="https://twitter.com/intent/tweet/?text=Why a balloon is a flexible bag&amp;url=https://bookworm-light-astro.vercel.app/post-2" target="_blank" rel="noreferrer noopener">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M496 109.5a201.8 201.8 0 0 1-56.55 15.3 97.51 97.51 0 0 0 43.33-53.6 197.74 197.74 0 0 1-62.56 23.5A99.14 99.14 0 0 0 348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 0 0 2.54 22.1 280.7 280.7 0 0 1-203-101.3A95.69 95.69 0 0 0 36 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0 1 35.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 0 1-25.94 3.4 94.38 94.38 0 0 1-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0 1 39.5 405.6a203 203 0 0 1-23.5-1.4A278.68 278.68 0 0 0 166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 0 0 496 109.5z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="inline-block">
                                        <a aria-label="linkedin share button" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://bookworm-light-astro.vercel.app/post-2&amp;title=Why a balloon is a flexible bag&amp;summary=meta description&amp;source=https://bookworm-light-astro.vercel.app" target="_blank" rel="noreferrer noopener">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="inline-block">
                                        <a aria-label="pinterest share button" href="https://pinterest.com/pin/create/button/?url=https://bookworm-light-astro.vercel.app/post-2&amp;media=&amp;description=meta description" target="_blank" rel="noreferrer noopener">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M256.05 32c-123.7 0-224 100.3-224 224 0 91.7 55.2 170.5 134.1 205.2-.6-15.6-.1-34.4 3.9-51.4 4.3-18.2 28.8-122.1 28.8-122.1s-7.2-14.3-7.2-35.4c0-33.2 19.2-58 43.2-58 20.4 0 30.2 15.3 30.2 33.6 0 20.5-13.1 51.1-19.8 79.5-5.6 23.8 11.9 43.1 35.4 43.1 42.4 0 71-54.5 71-119.1 0-49.1-33.1-85.8-93.2-85.8-67.9 0-110.3 50.7-110.3 107.3 0 19.5 5.8 33.3 14.8 43.9 4.1 4.9 4.7 6.9 3.2 12.5-1.1 4.1-3.5 14-4.6 18-1.5 5.7-6.1 7.7-11.2 5.6-31.3-12.8-45.9-47-45.9-85.6 0-63.6 53.7-139.9 160.1-139.9 85.5 0 141.8 61.9 141.8 128.3 0 87.9-48.9 153.5-120.9 153.5-24.2 0-46.9-13.1-54.7-27.9 0 0-13 51.6-15.8 61.6-4.7 17.3-14 34.5-22.5 48a225.13 225.13 0 0 0 63.5 9.2c123.7 0 224-100.3 224-224S379.75 32 256.05 32z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default Blitztypes