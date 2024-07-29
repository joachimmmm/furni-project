import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='bg-green text-white flex items-baseline space-x-[433px] px-[178px]'>
        <div>
            <p className='text-[32px] font-medium pt-[49px]'>Furni<span className='text-lightGreen'>.</span></p>
        </div>
        <div>
            <div className='flex items-baseline space-x-[87px]'>
                <ul className='flex gap-[44px] text-[16px] font-medium pt-[13px]'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
                <ul className='flex gap-[16px]'>
                    <li><Image width={24} height={67} alt='user-icon' src='./svgs/user-icon.svg'/></li>
                    <li><Image width={24} height={67} alt='cart-icon' src='./svgs/cart-icon.svg'/></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar