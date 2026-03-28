"use client";
import React from 'react'
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from "next/link"
import supabase from '../../../supabase-client';


const TestCatItems = () => {
    const { id } = useParams();
    const [tests, setTests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string>('');

    // Fixed scrolling logic for Next.js using hash
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const targetId = hash.replace('#', '');
            const el = document.getElementById(targetId);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth", block: "center" });
                }, 100);
            }
        }
    }, [tests]);


    const fetchCatTests = async () => {
        try {
            const { data, error } = await supabase
                .from("tests_table")
                .select("*")
                .eq('test_cat', id);
            if (error) {
                throw error;
            }
            setTests(data);
        }

        catch (error) {
            console.error(`Error fetching test categories: ${error.message}`);
            setErrorMessage('Error fetching tests. Please try again later');
        }

        finally { setLoading(false); }
    };

    useEffect(() => {
        fetchCatTests();
    }, [id]);

    if (loading) {
        return <p className='text-3xl text-white font-bold'>Loading tests</p>;
    }


    return (

        <div>
            <div className='min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center px-3 overflow-hidden py-6
        '
                style={{
                    backgroundImage: `url('/testing-pic.png')`,
                    backgroundSize: "cover", // width x height
                    backgroundRepeat: "no-repeat"
                }}
            >



                <div className='flex flex-wrap mt-10 gap-4 justify-center w-full'>
                    <div className='bg-cover bg-center 
                        rounded text-center 
                        w-full  shadow-lg 
                        hover:shadow-xl 
                        hover:px-2 hover:bg-purple-300 
                        transition-all duration-300 ease-in-out 
                        mx-20   relative sm:mt-30 '
                        style={{
                            backgroundImage: `url('/testcat_card.png')`,
                        }}>
                        <h1 className='relative text-2xl font-bold text-gray-300 py-10 text-center mb-6'>{id} Tests</h1>
                        <Link href={'/testing'} className='absolute  top-4 
                         left-4 px-5 py-1 border bg-gray-900 border border-white text-white font-thin
                         font-semibold rounded justify-start'> Back</Link>

                        {tests.length === 0 ? (<p>No tests found in this category</p>) : (tests.map((tests) => (

                            <div key={tests.id}
                                id={`test-${tests.id}`}>

                                <div className='bg-gray-200 w-3/4 px-4 py-2 shadow-lg mx-auto my-5 '>

                                    <h2 className='text-xl font-semibold text-gray-800'>{tests.test_name}</h2>
                                    <p className='text-gray-500 text-sm'>{tests.test_code}<span className='px-1'>  |  </span> <span className='text-gray-700'>Rs.{tests.test_price}/=</span></p>

                                </div>


                            </div>)))}</div>
                </div>
            </div>
        </div>
    )
}

export default TestCatItems