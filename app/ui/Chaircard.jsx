import React from 'react'
import Image from 'next/image'

const Chaircard = ({image, title, description, width, height}) => {
  return (
    <div className='flex'>
    <div>
        <Image width={width} height={height} src={image} className='absolute top-[3020px]'/>
        <Image width={98} height={98} src='./svgs/blue-background.svg'/>
    </div>
    <div className='ml-[36px]'>
        <p className='font-bold text-[14px] mt-[14px]'>{title}</p>
        <p className='font-normal text-[14px] text-ash mt-[11px] w-[211px] leading-[22px]'>{description}</p>
        <p className='font-bold text-[12px] text-ash mt-[11px]'>Read more</p>
    </div>
</div>
  )
}

export default Chaircard