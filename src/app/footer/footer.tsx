import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px:20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start mb-5'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src="/logo_dark.png" alt="logo"/>
                <p className='text-gray-400 mt-4'> Premium Diagnostics offers affordable, high-quality laboratory services with over 60,000 accurate tests completed. Using the latest machines and rigorous quality checks, we provide a wide range of tests and packages with weekly promotions—making reliable healthcare accessible to all. 
                    </p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                <ul className='flex flex-col'>
                    <Link href ='/' className='py-2 text-gray-400 hover:text-white'>Home</Link>
                    <Link href ='/testing' className='py-2 text-gray-400 hover:text-white'>Testing</Link>
                    <Link href ='/contact' className='py-2 text-gray-400 hover:text-white'>Contact Us</Link>
                    <Link href ='/about' className='py-2 text-gray-400 hover:text-white'>About</Link>
                </ul>
            </div>
            <div className='w-full md:w-1/3'>
            <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
            <p className='text-gray-400 mb-4 max-w-80'>Be the first to learn about our special limited-time promotions</p>
            <div className='flex'>
                <input type='email' placeholder='Enter your email' className='p-2 rounded bg-gray-800  text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto mx-2'></input>
                <button className='text-white bg-blue-900 rounded px-4 py-2'>Subscribe</button>
            </div>

            </div>
        </div>


        <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
           Copyright 2025 @ PremiumDiagnostics. All Rights Reserved
        </div>
    </div>
  )
}

export default Footer