import React from 'react';
import { Dot, Globe, ChevronUp } from "lucide-react";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='flex justify-between bg-white border h-auto w-full text-slate-700 px-4 lg:px-8 py-4'>
        <div className='text-base flex lg:flex-row flex-col items-start'>
            <h1 className='flex cursor-pointer'>&copy; Airbnb, Inc
            <Dot className='mt-0.5' />
            </h1>
            <h2 className='flex cursor-pointer'>Terms
            <Dot className='mt-0.5' />
            </h2>
            <h3 className='flex cursor-pointer'>Sitemap
            <Dot className='mt-0.5' />
            </h3>
            <h4 className='flex cursor-pointer'>Privacy
            <Dot className='mt-0.5' />
            </h4>
            <h5 className='flex cursor-pointer'>Your Privacy Choices
            <Image
            src="/choice.png"
            alt='Privacy choice'
            width={30}
            height={20}
            className='ml-2 h-5 mt-6 mr-12 lg:mr-0 lg:mt-0.5'
            />
            </h5>
        </div>
        <div className='flex flex-col lg:flex-row text-lg text-slate-700'>
            <p className='flex cursor-pointer'>
                <Globe className='mr-3 mt-0.5' />
                English (US)
            </p>
            <p className='flex mt-5 lg:mt-0 cursor-pointer lg:mr-4'>
                <strong className='lg:ml-4 lg:mr-3 mr-5 ml-2'>$</strong> USD
            </p>
            <p className='flex mt-5 lg:mt-0 cursor-pointer'>
                Support & Resources
                <strong><ChevronUp className='mt-0.5 ml-2 cursor-pointer' /></strong>
            </p>
        </div>
    </footer>
  )
}

export default Footer
