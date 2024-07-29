import React from 'react'
import Image from 'next/image'

const RecentBlogCard = ({img}) => {
  return (
    <div>
        <Image width={360} height={249} src={img}/>
        <p className='font-semibold text-[18px] text-customBlack mt-[44px]'>First Time Home Owner Ideas</p>
        <p className='text-[14px] leading-[17px]'><span className='italic'>by</span> <span className='font-semibold'>Nana Ama</span> <span className='italic'>on</span> <span className='font-semibold'>Nov 18th, 2022</span></p>
    </div>
  )
}

export default RecentBlogCard