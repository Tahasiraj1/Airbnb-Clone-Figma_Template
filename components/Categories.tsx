import React from 'react';
import Image from 'next/image';

const Categories = () => {
  return (
    <div className='bg-white text-slate-500 w-full gap-6 h-25 flex flex-wrap justify-center p-4 overflow-x-auto'>
      <button className="flex flex-col items-center">
        <Image
        src="/amazingview.png"
        alt='amazing views'
        width={25}
        height={25}
        />
        <span className='mt-2'>Amazing Views</span>
      </button>
      <button className="flex flex-col items-center">
        <Image
        src="/amazingview.png"
        alt='lake front'
        width={25}
        height={25}
        />
        <span className='mt-2'>Lakefront</span>
      </button>
      <button className="flex flex-col items-center">
        <Image
        src="/caves.png"
        alt='lake front'
        width={25}
        height={25}
        />
        <span className='mt-2'>Caves</span>
      </button>
      <button className="flex flex-col items-center">
        <Image
        src="/omg.png"
        alt='lake front'
        width={25}
        height={25}
        />
        <span className='mt-2'>OMG!</span>
      </button>
      <button className="flex flex-col items-center">
        <Image
        src="/earthhomes.png"
        alt='lake front'
        width={25}
        height={25}
        />
        <span className='mt-2'>Earth homes</span>
      </button>
      <button className="flex flex-col items-center">
        <Image
        src="/treehouses.png"
        alt='lake front'
        width={25}
        height={25}
        />
        <span className='mt-2'>Treehouses</span>
      </button>
      <button className="flex flex-col items-center">
        <Image
        src="/mansions.png"
        alt='lake front'
        width={25}
        height={25}
        />
        <span className='mt-2'>Mansions</span>
      </button>
      <button className="flex flex-col items-center">
        <Image
        src="/cabins.png"
        alt='lake front'
        width={25}
        height={25}
        />
        <span className='mt-2'>Cabin</span>
      </button>
      <button className="flex flex-col items-center">
        <Image
        src="/amazingpools.png"
        alt='lake front'
        width={25}
        height={25}
        />
        <span className='mt-2'>Amazing pools</span>
      </button>
      <button className="flex flex-col items-center">
        <Image
        src="/islands.png"
        alt='lake front'
        width={25}
        height={25}
        />
        <span className='mt-2'>Islands</span>
      </button>
      <button className="flex flex-col items-center">
        <Image
        src="/beachfront.png"
        alt='lake front'
        width={25}
        height={25}
        />
        <span className='mt-2'>Beachfront</span>
      </button>
      <button className="flex flex-col items-center">
        <Image
        src="/trending.png"
        alt='lake front'
        width={25}
        height={25}
        />
        <span className='mt-2'>Trending</span>
      </button>
      <button className='rounded-full border w-10 h-10 items-center flex justify-center mt-1'>
        <Image
        src="/next.png"
        alt='next'
        width={20}
        height={20}
        />
      </button>
      <button className="flex items-center border rounded-2xl px-2 mb-2">
        <Image
        src="/filter.png"
        alt='lake front'
        width={20}
        height={20}
        />
        <span className='ml-2'>Filter</span>
      </button>
    </div>
  )
}

export default Categories;
