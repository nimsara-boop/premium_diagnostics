'use client'

import React, { useEffect, useState } from 'react';
import { fetchSearchData, createFuse } from './searchLogic';
import Fuse from 'fuse.js';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [fuse, setFuse] = useState<Fuse<any> | null>(null);
  const router = useRouter(); // renamed navigate → router

  // Load data and initialize Fuse
  useEffect(() => {
    async function loadData() {
      const data = await fetchSearchData();
      setFuse(createFuse(data)); // createFuse should return a Fuse instance
    }
    loadData();
  }, []);

  // Run search whenever query changes
  useEffect(() => {
    if (fuse && query.trim()) {
      const fuseResults = fuse.search(query);
      const items = fuseResults.map(r => r.item);
      setResults(items);
      console.log('Search results:', items);
    } else {
      setResults([]);
    }
  }, [query, fuse]);

  // Handle click navigation
  const handleClick = (r: any) => {
    const targetId = r.type === 'test' ? `test-${r.id}` : `package-${r.id}`;

    if (r.type === 'test') {
      // Navigate to test category page
      router.push(`/testing/${r.test_cat}#${targetId}`);
    } else if (r.type === 'package') {
      // Navigate to package details page
      router.push(`/testingpacks/${r.package_name}`);
    }
  };

  return (
    <div className='w-full bg-light-100 px-2 py-3 rounded-lg mt-5 max-w-3xl mx-auto'>
      <div className='relative flex'>
        <Image src='/search.png' alt='search' width={36} height={36} className='absolute top-1' />
      </div>

      <input
        className='w-full bg-transparent py-2 sm:pr-10 pl-10 text-base text-gray-200 placeholder-light-200 border border-white rounded-full'
        type='text'
        placeholder='Search tests and packages'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul className='mt-3 text-gray-200'>
        {results.slice(0, 6).map((r, idx) => (
          <li
            key={idx}
            onClick={() => handleClick(r)}
            className='cursor-pointer rounded-lg shadow-lg mb-2 px-2 py-1 border-b border-gray-700 hover:bg-blue-500 hover:text-black'
          >
            {r.test_name || r.package_name}{' '}
            <span className='text-sm text-gray-400'>({r.type})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}