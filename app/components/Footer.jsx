import React from 'react'
import Image from 'next/image'
import SocialMediaIcons from '../ui/SocialMediaIcons'

const Footer = () => {
  return (
    <div className='ml-[185px] mt-[94px]'>
        <div className='flex gap-[114px]'>
          <div>
            <div className='flex items-center'>
                <Image width={22} height={26} src='./svgs/envelope.svg'/>
                <p className='font-semibold text-[18px] ml-[12px]'>Subscribe to Newsletter</p>
            </div>
            <div className='flex gap-[15px] mt-[24px]'>
              <input type="text" placeholder='Enter your name' className='w-[262px] h-[45px] border border-lightGray text-customBlack pl-[22px] pt-[12px] pb-[17px] rounded-[10px] text-[14px]'/>
              <input type="text" placeholder='Enter your e-mail' className='w-[262px] h-[45px] border border-lightGray text-customBlack pl-[22px] pt-[12px] pb-[17px] rounded-[10px] text-[14px]'/>
              <button className='border-[1px] rounded-[10px] w-[50px] h-[47.7px] bg-lightGreen border-lightGray flex justify-center items-center'><Image width={29} height={28} src='./svgs/paper-plane.svg'/></button>
            </div>
          </div>
          <div>
            <Image width={458} height={396} src='./svgs/green-sofa.svg' className='absolute top-[4239px] left-[888px]'/>
          </div>
        </div>
        <p className='font-medium text-[32px] leading-[38.73px] mt-[138px]'>Furni.</p>
        <div className='flex'>
          <div>
            <p className='font-normal text-[14px] leading-[24px] text-ash w-[360px] mt-[19px]'>Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done. the this is a long  post for the text.`This small text has to be place here, since this is </p>
          </div>
          <div className='ml-[65px]'>
            <ul className='text-ash text-[14px] leading-[28px] mt-[19px]'>
              <li>About Us</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='ml-[87px]'>
            <ul className='text-ash text-[14px] leading-[28px] mt-[19px]'>
              <li>Support</li>
              <li>Knowledge</li>
              <li>Live Chat</li>
            </ul>
          </div>
          <div className='ml-[56px]'>
            <ul className='text-ash text-[14px] leading-[28px] mt-[19px]'>
              <li>Jobs</li>
              <li>Our team</li>
              <li>Leadership</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='ml-[38px]'>
            <ul className='text-ash text-[14px] leading-[28px] mt-[19px]'>
              <li>Nordic Chair</li>
              <li>Kruzo Aero</li>
              <li>Ergonomic</li>
            </ul>
          </div>
        </div>
        <div className='flex gap-[11px] mt-[45px]'>
          <SocialMediaIcons height={19} width={12} img={'./svgs/facebook.svg'}/>
          <SocialMediaIcons height={18} width={16} img={'./svgs/instagram.svg'}/>
          <SocialMediaIcons height={17} width={17} img={'./svgs/twitter.svg'}/>
          <SocialMediaIcons height={14} width={16} img={'./svgs/linkedin.svg'}/>
        </div>
        <hr className='border-1px border-cream mt-[32px] mr-[175px]'></hr>
        <div className='mt-[36px] mr-[175px] flex justify-between mb-[93px]'>
          <p className='text-[13px] text-ash'>Copyright 2022 degraft87@gmail.com. All Rights Reserved.</p>
          <div className='flex gap-[42px] text-[14px] text-ash leading-[24px]'>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
    </div>
  )
}

export default Footer