import React from 'react'
import Image from 'next/image'
import { StarIcon } from 'lucide-react'

const Properties = () => {
  return (
    <div className='grid grid-cols-2 gap-4 lg:grid-cols-4 p-8 bg-white'>
        {/* House1 */}
        <div className='flex flex-col'>
            <Image
            src='/house1.png'
            alt=''
            width={400}
            height={400}
            className='object-cover rounded-3xl'
            />
            <h1 className="flex justify-between items-center text-xl text-slate-700 font-semibold mt-3 mb-1">
                Knoxville, Tennessee
                <div className="flex items-center space-x-1">
                <StarIcon size={16} fill="black" />
                <span className='text-xl pr-1'>5.0</span>
                </div>
            </h1>
            <h2 className='text-lg text-slate-500'>Mountain and lake views</h2>
            <p className='text-lg text-slate-500'>Apr 16 - 21</p>
            <p className='text-lg text-black'><strong>$388</strong> night</p>
        </div>
        {/* House2 */}
        <div className='flex flex-col'>
            <Image
            src='/house2.png'
            alt=''
            width={400}
            height={400}
            className='object-cover rounded-3xl'
            />
            <h1 className="flex justify-between items-center text-xl text-slate-700 font-semibold mt-3 mb-1">
                Chicago, Illinois
                <div className="flex items-center space-x-1">
                <StarIcon size={16} fill="black" />
                <span className='text-xl pr-1'>5.0</span>
                </div>
            </h1>
            <h2 className='text-lg text-slate-500'>Lake and city views</h2>
            <p className='text-lg text-slate-500'>Mar 4 - 9</p>
            <p className='text-lg text-black'><strong>$349</strong> night</p>
        </div>
        {/* House3 */}
        <div className='flex flex-col'>
            <Image
            src='/house3.png'
            alt=''
            width={400}
            height={400}
            className='object-cover rounded-3xl'
            />
            <h1 className="flex justify-between items-center text-xl text-slate-700 font-semibold mt-3 mb-1">
                Sevierville, Tennessee
                <div className="flex items-center space-x-1">
                <StarIcon size={16} fill="black" />
                <span className='text-xl pr-1'>4.94</span>
                </div>
            </h1>
            <h2 className='text-lg text-slate-500'>Mountain and park views</h2>
            <p className='text-lg text-slate-500'>Mar 18 - 23</p>
            <p className='text-lg text-black'><strong>$229</strong> night</p>
        </div>
        {/* House4 */}
        <div className='flex flex-col'>
            <Image
            src='/house5.png'
            alt=''
            width={400}
            height={400}
            className='object-cover rounded-3xl'
            />
            <h1 className="flex justify-between items-center text-xl text-slate-700 font-semibold mt-3 mb-1">
                Sevierville, Tennessee
                <div className="flex items-center space-x-1">
                <StarIcon size={16} fill="black" />
                <span className='text-xl pr-1'>4.93</span>
                </div>
            </h1>
            <h2 className='text-lg text-slate-500'>Mountain views</h2>
            <p className='text-lg text-slate-500'>Jun 5 - 10</p>
            <p className='text-lg text-black'><strong>$343</strong> night</p>
        </div>
        {/* House5 */}
        <div className='flex flex-col'>
            <Image
            src='/house6.png'
            alt=''
            width={400}
            height={400}
            className='object-cover rounded-3xl'
            />
            <h1 className="flex justify-between items-center text-xl text-slate-700 font-semibold mt-3 mb-1">
                Sevierville, Tennessee
                <div className="flex items-center space-x-1">
                <StarIcon size={16} fill="black" />
                <span className='text-xl pr-1'>4.82</span>
                </div>
            </h1>
            <h2 className='text-lg text-slate-500'>Mountain and lake views</h2>
            <p className='text-lg text-slate-500'>Mar 5 - 10</p>
            <p className='text-lg text-black'><strong>$255</strong> night</p>
        </div>
        {/* House6 */}
        <div className='flex flex-col'>
            <Image
            src='/house9.png'
            alt=''
            width={400}
            height={400}
            className='object-cover rounded-3xl'
            />
            <h1 className="flex justify-between items-center text-xl text-slate-700 font-semibold mt-3 mb-1">
                Branson, Missouri
                <div className="flex items-center space-x-1">
                <StarIcon size={16} fill="black" />
                <span className='text-xl pr-1'>5.0</span>
                </div>
            </h1>
            <h2 className='text-lg text-slate-500'>Mountain views</h2>
            <p className='text-lg text-slate-500'>Apr 30 - May 5</p>
            <p className='text-lg text-black'><strong>$388</strong> night</p>
        </div>
        {/* House7 */}
        <div className='flex flex-col'>
            <Image
            src='/house10.png'
            alt=''
            width={400}
            height={400}
            className='object-cover rounded-3xl'
            />
            <h1 className="flex justify-between items-center text-xl text-slate-700 font-semibold mt-3 mb-1">
                Cassopolis, Michigan
                <div className="flex items-center space-x-1">
                <StarIcon size={16} fill="black" />
                <span className='text-xl pr-1'>4.96</span>
                </div>
            </h1>
            <h2 className='text-lg text-slate-500'>Lake views</h2>
            <p className='text-lg text-slate-500'>Mar 5 - 10</p>
            <p className='text-lg text-black'><strong>$595</strong> night</p>
        </div>
        {/* House8 */}
        <div className='flex flex-col'>
            <Image
            src='/house11.png'
            alt=''
            width={400}
            height={400}
            className='object-cover rounded-3xl'
            />
            <h1 className="flex justify-between items-center text-xl text-slate-700 font-semibold mt-3 mb-1">
                Osage Beach, Missouri
                <div className="flex items-center space-x-1">
                <StarIcon size={16} fill="black" />
                <span className='text-xl pr-1'>4.85</span>
                </div>
            </h1>
            <h2 className='text-lg text-slate-500'>Lake and pool views</h2>
            <p className='text-lg text-slate-500'>Mar 3 - 8</p>
            <p className='text-lg text-black'><strong>$850</strong> night</p>
        </div>
        {/* House9 */}
        <div className='flex flex-col'>
            <Image
            src='/house13.png'
            alt=''
            width={400}
            height={400}
            className='object-cover rounded-3xl'
            />
            <h1 className="flex justify-between items-center text-xl text-slate-700 font-semibold mt-3 mb-1">
                Chicago, Illinois 
                <div className="flex items-center space-x-1">
                <StarIcon size={16} fill="black" />
                <span className='text-xl pr-1'>4.72</span>
                </div>
            </h1>
            <h2 className='text-lg text-slate-500'>city views</h2>
            <p className='text-lg text-slate-500'>Apr 16 - 21</p>
            <p className='text-lg text-black'><strong>$326</strong> night</p>
        </div>
        {/* House10 */}
        <div className='flex flex-col'>
            <Image
            src='/house14.png'
            alt=''
            width={400}
            height={400}
            className='object-cover rounded-3xl'
            />
            <h1 className="flex justify-between items-center text-xl text-slate-700 font-semibold mt-3 mb-1">
                Tofte, Minnesota
                <div className="flex items-center space-x-1">
                <StarIcon size={16} fill="black" />
                <span className='text-xl pr-1'>4.89</span>
                </div>
            </h1>
            <h2 className='text-lg text-slate-500'>Beach and lake views</h2>
            <p className='text-lg text-slate-500'>Mar 16 - 21</p>
            <p className='text-lg text-black'><strong>$170</strong> night</p>
        </div>
        {/* House11 */}
        <div className='flex flex-col'>
            <Image
            src='/house7.png'
            alt=''
            width={400}
            height={400}
            className='object-cover rounded-3xl'
            />
            <h1 className="flex justify-between items-center text-xl text-slate-700 font-semibold mt-3 mb-1">
                Sevierville, Tennessee 
                <div className="flex items-center space-x-1">
                <StarIcon size={16} fill="black" />
                <span className='text-xl pr-1'>4.93</span>
                </div>
            </h1>
            <h2 className='text-lg text-slate-500'>Mountain views</h2>
            <p className='text-lg text-slate-500'>Apr 21 - 26</p>
            <p className='text-lg text-black'><strong>$200</strong> night</p>
        </div>
        {/* House12 */}
        <div className='flex flex-col'>
            <Image
            src='/house15.png'
            alt=''
            width={400}
            height={400}
            className='object-cover rounded-3xl'
            />
            <h1 className="flex justify-between items-center text-xl text-slate-700 font-semibold mt-3 mb-1">
                Sevierville, Tennessee
                <div className="flex items-center space-x-1">
                <StarIcon size={16} fill="black" />
                <span className='text-xl pr-1'>4.96</span>
                </div>
            </h1>
            <h2 className='text-lg text-slate-500'>Mountain views</h2>
            <p className='text-lg text-slate-500'>Mar 16 - 21</p>
            <p className='text-lg text-black'><strong>$428</strong> night</p>
        </div>
        {/* House13 */}
        <div className='flex flex-col'>
            <Image
            src='/house4.png'
            alt=''
            width={400}
            height={400}
            className='object-cover rounded-3xl'
            />
            <h1 className="flex justify-between items-center text-xl text-slate-700 font-semibold mt-3 mb-1">
                Knoxville, Tennessee
                <div className="flex items-center space-x-1">
                <StarIcon size={16} fill="black" />
                <span className='text-xl pr-1'>5.0</span>
                </div>
            </h1>
            <h2 className='text-lg text-slate-500'>Mountain views</h2>
            <p className='text-lg text-slate-500'>Jun 16 - 21</p>
            <p className='text-lg text-black'><strong>$288</strong> night</p>
        </div>
        {/* House14 */}
        <div className='flex flex-col'>
            <Image
            src='/house8.png'
            alt=''
            width={400}
            height={400}
            className='object-cover rounded-3xl'
            />
            <h1 className="flex justify-between items-center text-xl text-slate-700 font-semibold mt-3 mb-1">
                Knoxville, Tennessee
                <div className="flex items-center space-x-1">
                <StarIcon size={16} fill="black" />
                <span className='text-xl pr-1'>4.5</span>
                </div>
            </h1>
            <h2 className='text-lg text-slate-500'>Mountain and lake views</h2>
            <p className='text-lg text-slate-500'>May 16 - 21</p>
            <p className='text-lg text-black'><strong>$360</strong> night</p>
        </div>
        {/* House15 */}
        <div className='flex flex-col'>
            <Image
            src='/house12.png'
            alt=''
            width={400}
            height={400}
            className='object-cover rounded-3xl'
            />
            <h1 className="flex justify-between items-center text-xl text-slate-700 font-semibold mt-3 mb-1">
                Knoxville, Tennessee
                <div className="flex items-center space-x-1">
                <StarIcon size={16} fill="black" />
                <span className='text-xl pr-1'>5.0</span>
                </div>
            </h1>
            <h2 className='text-lg text-slate-500'>Mountain and lake views</h2>
            <p className='text-lg text-slate-500'>Apr 16 - 21</p>
            <p className='text-lg text-black'><strong>$280</strong> night</p>
        </div>
        {/* House16 */}
        <div className='flex flex-col'>
            <Image
            src='/house16.png'
            alt=''
            width={400}
            height={400}
            className='object-cover rounded-3xl h-auto'
            />
            <h1 className="flex justify-between items-center text-xl text-slate-700 font-semibold mt-3 mb-1">
                Knoxville, Tennessee
                <div className="flex items-center space-x-1">
                <StarIcon size={16} fill="black" />
                <span className='text-xl pr-1'>5.0</span>
                </div>
            </h1>
            <h2 className='text-lg text-slate-500'>Mountain and lake views</h2>
            <p className='text-lg text-slate-500'>Mar 16 - 21</p>
            <p className='text-lg text-black'><strong>$488</strong> night</p>
        </div>
    </div>
  )
}

export default Properties
