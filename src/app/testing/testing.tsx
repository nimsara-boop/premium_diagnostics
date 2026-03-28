'use client'
import React from 'react'
import { motion } from "motion/react"
import Search from './search';
import supabase from '../../supabase-client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Testing = () => {
    const [testsList, setTestsList] = useState<any[]>([])
    const [error, setErrorMessage] = useState<string>('')
    const [categoriesList, setCategoriesList] = useState<{ id: number; test_cat: any; }[]>([])
    const [packageList, setPackageList] = useState<any[]>([])

    const fetchTestCat = async () => {
        try {
            const { data, error } = await supabase
                .from("tests_table")
                .select("test_cat, id");

            if (error) throw error;

            const uniqueCats = [...new Set(data.map(item => item.test_cat))]
            const catsWithIds = uniqueCats.map((cat, index) => ({
                id: index,
                test_cat: cat
            }))

            setCategoriesList(catsWithIds);

        } catch (error: any) {
            console.error(`Error fetching test categories: ${error.message}`);
            setErrorMessage('Error fetching tests. Please try again later');
        }
    };

    useEffect(() => {
        fetchTestCat();
    }, []);

    const fetchPackages = async () => {
        try {
            const { data, error } = await supabase.from("test_packages_table").select("*");
            if (error) throw error;

            setPackageList(data);

        } catch (error: any) {
            console.error(`Error fetching tests: ${error.message}`);
            setErrorMessage('Error fetching tests. Please try again later');
        }
    }

    useEffect(() => {
        fetchPackages();
    }, []);

    const fetchTests = async () => {
        try {
            const { data, error } = await supabase
                .from("tests_table")
                .select("*");

            if (error) throw error;

            setTestsList(data);

        } catch (error: any) {
            console.error(`Error fetching tests: ${error.message}`);
            setErrorMessage('Error fetching tests. Please try again later');
        }
    };

    useEffect(() => {
        fetchTests();
    }, []);

    return (
        <div>

            {/* HERO */}
            <div
                className='min-h-screen w-full bg-cover bg-center flex items-center justify-center px-4 sm:px-6 md:px-10 overflow-hidden'
                style={{
                    backgroundImage: `url('/testing-pic.png')`,
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className='flex flex-col md:flex-row items-center w-full max-w-7xl gap-8'>

                    {/* TEXT */}
                    <motion.div
                        initial={{ opacity: 0, y: 200 }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className='text-white w-full md:w-1/2 text-center md:text-left'
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            <span className="block py-2">Guaranteed Accurate</span>
                            <span className="bg-gradient-to-r from-[#05c1fa] to-[#034afc] bg-clip-text text-transparent">
                                Testing
                            </span>
                        </h2>

                        <div className='mt-6'>
                            <Search />
                        </div>
                    </motion.div>

                    {/* BUTTON */}
                    <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='w-full md:w-1/2 flex justify-center md:justify-end'
                    >
                        <Link
                            href="/contact"
                            className="bg-blue-700 text-white px-8 py-3 rounded shadow-xl text-sm sm:text-base font-semibold hover:bg-blue-500 transition"
                        >
                            Contact Us
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* INTRO */}
            <div className='flex flex-col items-center justify-center container mx-auto px-4 sm:px-6 md:px-10 py-12'>

                <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-center'>
                    Unmatchable Prices,
                    <span className='underline underline-offset-4 font-light ml-2'>
                        Guaranteed Precision
                    </span>
                </h2>

                <p className='mt-6 text-center text-sm sm:text-base max-w-3xl'>
                    Our laboratory results are consistently accurate. Our skilled professionals follow strict protocols,
                    conduct daily quality control checks, and ensure that every report meets the highest standards of reliability.
                </p>

                <p className='mt-4 text-center text-sm sm:text-base'>
                    All this comes at rates
                    <span className='px-2 underline font-bold'>TRULY UNMATCHED</span>
                    by any other laboratory in <span className='font-semibold'>Sri Lanka.</span>
                </p>

                {/* TESTS */}
                <h3 className='text-lg sm:text-xl md:text-2xl font-medium mt-10'>
                    Browse <span className="bg-gradient-to-r from-[#05c1fa] to-[#034afc] bg-clip-text text-transparent font-bold">Tests</span>
                </h3>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 w-full'>
                    {categoriesList.map((cats) => (
                        <Link key={cats.id} href={`/testingcat/${cats.test_cat}`}>
                            <div className='bg-blue-200 text-center py-4 px-2 shadow-lg rounded hover:shadow-xl hover:bg-blue-300 transition'>
                                <h2 className='text-base sm:text-lg font-semibold text-gray-800'>
                                    {cats.test_cat}
                                </h2>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* PACKAGES */}
                <h3 className='text-lg sm:text-xl md:text-2xl font-medium mt-14'>
                    Explore <span className="bg-gradient-to-r from-[#d889fa] to-[#034afc] bg-clip-text text-transparent font-bold">Packages</span>
                </h3>
            </div>

            {/* PACKAGES GRID */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-10 pb-12'>
                {packageList.map((packs) => (
                    <Link key={packs.id} href={`/testingpacks/${encodeURIComponent(packs.package_name)}`}>
                        <div
                            className='bg-cover bg-center rounded text-center py-6 px-4 shadow-lg hover:shadow-xl hover:bg-purple-300 transition'
                            style={{
                                backgroundImage: `url('/packages_card.png')`,
                            }}
                        >
                            <h2 className='text-base sm:text-lg font-semibold text-gray-200'>
                                {packs.package_name}
                            </h2>

                            <p className='text-gray-300 text-sm mt-2'>
                                Rs.{packs.package_price}/=
                                <span className='px-2'>|</span>
                                <span className='underline text-blue-700'>More Info</span>
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}


export default Testing;
