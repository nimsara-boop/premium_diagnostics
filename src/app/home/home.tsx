'use client';
import React from 'react'
import { motion } from "motion/react"
import { useInView } from 'react-intersection-observer';
import Link from 'next/link'


const Header = () => {

    const [refHeader, inViewHeader] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [refWhyUs, inViewWhyUs] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [inViewNumbers] = useInView({ triggerOnce: false, threshold: 0.8 });

    return (
        <div>

            {/* HERO SECTION */}
            <div
                className='min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden px-4 sm:px-6 md:px-10'
                style={{ backgroundImage: `url('/header_img.png')` }}
                id='Header'
            >
                <motion.div
                    ref={refHeader}
                    initial={{ opacity: 0, y: 200 }}
                    transition={{ duration: 1.5 }}
                    animate={inViewHeader ? { opacity: 1, y: 0 } : {}}
                    className='container text-center mx-auto py-20 sm:py-32 md:py-40 text-white'
                >
                    <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] inline-block max-w-3xl font-bold pt-10">
                        Precision in Diagnostics
                    </h2>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 sm:mt-16">
                        <Link
                            href='/testing'
                            className="border px-10 sm:px-16 py-3 rounded text-sm sm:text-base"
                        >
                            Testing
                        </Link>
                                    


                        <Link
                            href='/contact'
                            className="bg-blue-800 px-10 sm:px-16 py-3 rounded shadow-xl text-sm sm:text-base"
                        >
                            Contact Us
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* WHY US SECTION */}
            <div
                className="flex flex-col items-center justify-center container mx-auto py-10 w-full overflow-hidden px-4 sm:px-6 md:px-10"
                id="About"
            >
                <motion.div
                    ref={refWhyUs}
                    initial={{ opacity: 0, x: 200 }}
                    animate={inViewWhyUs ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1.2 }}
                    className="w-full"
                >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center">
                        Why <span className="underline underline-offset-4 font-light">Us</span>
                    </h1>

                    <p className="text-center text-gray-700 mb-8 max-w-md mx-auto text-sm sm:text-base">
                        Unmatchable prices, consistent accuracy
                    </p>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">

                        {/* IMAGE */}
                        <img
                            src="/labpic_2.png"                           
                                alt="brand img"
                            className="w-full max-w-sm md:max-w-md"
                        />

                        {/* CONTENT */}
                        <div className="flex flex-col items-center md:items-start text-gray-600">

                            {/* STATS GRID */}
                            <div className="grid grid-cols-2 gap-6 md:gap-10 w-full">
                                <div>
                                    <div className="sm:w-32 sm:h-24">
                                        <h1 className="font-bold text-7xl">{'>'}60k</h1>
                                    </div>
                                    <p className="text-sm sm:text-base">Tests Completed</p>
                                </div>

                                <div>
                                    <div className="w-28 h-20 sm:w-32 sm:h-24">
                                        <h1 className="font-bold text-7xl">30+</h1>
                                    </div>
                                    <p className="text-sm sm:text-base">Professionals recommend</p>
                                </div>

                                <div>
                                    <div className="w-28 h-20 sm:w-32 sm:h-24">
                                        <h1 className="font-bold text-7xl">5+</h1>
                                    </div>
                                    <p className="text-sm sm:text-base">Large Scale Projects Completed</p>
                                </div>

                                <div>
                                    <div className="w-28 h-20 sm:w-32 sm:h-24">
                                        <h1 className="font-bold text-7xl">4+</h1>
                                    </div>
                                    <p className="text-sm sm:text-base">Years of Experience</p>
                                </div>
                            </div>

                            {/* TEXT */}
                            <p className="my-8 max-w-lg text-center md:text-left text-sm sm:text-base">
                                Premium Diagnostics offers affordable, high-quality laboratory services with over 60,000 accurate tests completed. Using the latest machines and rigorous quality checks, we provide a wide range of tests and packages with weekly promotions—making reliable healthcare accessible to all.
                            </p>

                            <Link href='/about'>
                                <button className="bg-blue-900 text-white px-6 py-2 rounded cursor-pointer text-sm sm:text-base">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* LOCATION SECTION */}
            <div className="px-4 sm:px-6 md:px-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
                    Find <span className="underline underline-offset-4 font-light">Us</span>
                </h1>

                <p className='text-center py-5 max-w-3xl mx-auto text-sm sm:text-base'>
                    Premium Diagnostics is conveniently located along the Kandy–Colombo main road, on the Colombo-bound side, in the peaceful village of Belummahara. Open hours are from <span className='font-bold'>6:30 am to 8:00 pm, Monday through Sunday.</span> It is just a 21-minute drive from the Kadawatha interchange.
                </p>

                <div className='flex flex-col md:flex-row items-center gap-8'>

                    {/* MAP */}
                    <iframe
                        className='w-full md:w-1/2 h-64 sm:h-80 md:h-[400px] rounded'
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDPXPXrx8jyWP2ezwDAW6evgtKBY7RQseM&q=7.0609042024672215,80.00986859116306"
                    />

                    {/* IMAGE */}
                    <img
                        src='/labimg.png'
                        className='w-full md:w-1/2 rounded'
                        alt="lab"
                    />
                </div>
            </div>
        </div>
    )
}


export default Header;
