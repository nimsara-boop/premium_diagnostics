"use client";
import React from 'react'
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from "next/link"
import supabase from '../../../supabase-client';


const PackagesItems = () => {
  const { id } = useParams();
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [packageTests, setPackageTests] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchPackages = async () => {
    try {
      const { data, error } = await supabase
        .from("test_packages_table")
        .select("*")
        .eq('package_name', id);
      if (error) {
        throw error;
      }
      setPackages(data);

      const packageUUID = data[0].id;
      await fetchPackageTests(packageUUID);

    }

    catch (error) {
      console.error(`Error fetching test package: ${error.message}`);
      setErrorMessage('Error fetching tests. Please try again later');
    }

    finally { setLoading(false); }
  };

  useEffect(() => {
    fetchPackages();
  }, [id]);


  const fetchPackageTests = async (packageUUID) => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("packages_tests_junction_table")
        .select(`test_id, tests_table(test_name)`)
        .eq("package_id", packageUUID);
      if (error) { throw Error }

      setPackageTests(data);

    } catch (error) {
      console.error(`Error fetching test package: ${error.message}`);
      //setErrorMessage('Error fetching tests. Please try again later');
    }
    finally { setLoading(false); }
  }


  if (loading) {
    return <p className='text-3xl text-white font-bold'>Loading tests</p>;
  }

  return (

    <div>
      <div className='min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center px-3 py-10 overflow-hidden
    '
        style={{
          backgroundImage: `url('/testing-pic.png')`,
          backgroundSize: "cover", // width x height
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className='bg-cover bg-center 
                    rounded text-center 
                    w-full shadow-lg
                    hover:shadow-xl 
                    my-5 relative mt-40 lg:mt-25'
          style={{
            backgroundImage: `url('/packages_card.png')`,
          }}>
          <Link href={'/testing'} className='absolute  top-4 
                         left-4 px-5 py-1 border bg-gray-900 border border-white text-white font-thin
                         font-semibold rounded justify-start'> Back</Link>
          <h1 className='text-2xl font-bold text-center mb-2 text-gray-200'>{id}</h1>

          <div className='flex flex-wrap  justify-center'>
            {packages.length === 0 ? (<p>Package not found . </p>) : (packages.map((packs) => (
              <div key={packs.id} id={`package-${packs.id}`} className='w-full lg:w-full'>
                <div className='bg-gray-200 flex-shrink-0 lg:w-full md:w-200 md:mx-auto  lg:mr-10 shadow-lg my-5 sm:mt-10'>
                  <p className='text-gray-500 text-sm px-10 py-5'>{packs.description}
                    <ul className='mt-3'>{packageTests.length === 0 ? <li>No tests Found</li>
                      : packageTests.map((test, idx) => <li key={idx} className='text-gray-800 font-semibold py-1'>*{test.tests_table.test_name}</li>)}

                    </ul>
                    <button className='py-3 text-gray-300 font-bold bg-linear-to-r from-[#8c0ca4] to-[#4c046c] px-3 rounded-lg my-5'>Rs.{packs.package_price}/=</button>
                  </p>

                </div>
              </div>)))} </div></div>
      </div>

    </div>
  )
}

export default PackagesItems