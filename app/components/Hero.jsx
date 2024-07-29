import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='bg-green pl-[177px]'>
        <div className='flex'>
            <div>
                <p className='text-white font-semibold text-[52px] w-[419px] pt-[129px]'>Modern Interior Designer Studio</p>
                <div className='flex gap-[14px] mt-[117px] pb-[157px]'>
                    <button className='w-[150px] h-[50px] border border-yellow rounded-[30px] bg-yellow'>Shop Now</button>
                    <button className='w-[150px] h-[50px] border-[2px] border-offWhite text-white rounded-[30px]'>Explore</button>
                </div>
            </div>
            <div className='pt-[26px]'>
                <Image width={810} height={581} alt='couch' src='./svgs/couch.svg' className='absolute z-10'/>
                <Image width={260} height={176} alt='dotted-lines' src='./svgs/dotted-lines.svg' className='relative left-[550px] top-[81px]'/>
            </div>
        </div>
    </div>
  )
}

export default Hero