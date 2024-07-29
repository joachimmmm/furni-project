import React from 'react'
import Image from 'next/image'
const SocialMediaIcons = ({img, width, height}) => {
  return (
    <div>
        <button className='flex justify-center items-center h-[41px] w-[41px] rounded-[50px] bg-darkGray'><Image width={width} height={height} src={img}/></button>
    </div>
  )
}

export default SocialMediaIcons