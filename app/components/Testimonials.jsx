import React from 'react'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <div className='bg-cream pt-[95px] px-[210px]'>
        <p className='text-[34px] leading-[41px] text-center font-semibold'>Testimonials</p>
        <div className='space-x-[110px] flex items-center'>
            <button className='h-[58px] w-[58px] rounded-[50px] bg-lightGray flex justify-center items-center mt-[37px]'><Image width={8} height={17} src='./svgs/left-arrow.svg'/></button>
            <p className='text-[18px] leading-[32px] w-[759px] mt-[47px]'>‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. Mauris accumsan felis fermentum euismod egestas. Mauris ante augue, cursus sit amet arcu a, maximus suscipit nibh. Integer vel nibh tellus. Pellentesque in risus non dui venenatis sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non. Pellentesque ma’’</p>
            <button className='h-[58px] w-[58px] rounded-[50px] bg-green flex justify-center items-center mt-[37px]'><Image width={8} height={17} src='./svgs/forward-arrow.svg'/></button>
        </div>
        <div className=' flex justify-center items-center mt-[42px]'>
            <Image width={77} height={77} src='./svgs/icon.svg' className=''/>
        </div>
        <div>
            <p className='text-center mt-[13px] text-[18px] leading-[22px]'>Michelle Anna</p>
            <p className='text-center mt-[4px] text-[13px] leading-[32px]'>CEO, Co-Founder, XYZ Inc.</p>
        </div>
        <div className='flex justify-center mt-[40px]'>
            <Image width={147} height={7} src='./svgs/indicator.svg'/>
        </div>
    </div>
  )
}

export default Testimonials