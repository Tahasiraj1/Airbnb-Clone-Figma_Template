import React from 'react';
import Image from 'next/image';
import { Globe, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className='w-full h-30 bg-white px-2 py-6 flex items-center justify-between border'>
        <Image
        src="/airbnb.png"
        alt='airbnb-logo'
        width={100}
        height={100}
        className='items-start w-28 h-8 cursor-pointer'
        />
        <div className='hidden lg:flex md:flex w-96 h-11 bg-white rounded-full border shadow-lg lg:ml-96'>
            <h1 className='text-slate-700 p-2.5 font-bold ml-1'>Anywhere</h1>
            <span className='h-7 w-0.5 mt-2 bg-slate-300 ml-2' />
            <h2 className='text-slate-700 p-2.5 font-bold ml-1'>Any week</h2>
            <span className='h-7 w-0.5 mt-2 bg-slate-300 ml-2' />
            <h3 className='text-slate-400 p-2.5 font-semibold ml-2 mr-2'>Add guests</h3>
            <button>
                <Image
                src="/search.png"
                alt='Search'
                width={35}
                height={40}
                />
            </button>
        </div>
        <h4 className='hidden lg:flex text-black font-bold ml-40 mr-4'>
            Airbnb your home
            <Globe className='ml-4' />
        </h4>
        <div className='h-12 w-24 border rounded-full p-2 flex'>
            <button>
                <Menu className='text-slate-500 ml-1' />
            </button>
            <button>
            <Image
                src="/profile.png"
                alt='profile'
                width={40}
                height={40}
                className='-translate-y-1 -translate-x-3 ml-6'
            />
            </button>
        </div>
    </header>
  )
}

export default Header
