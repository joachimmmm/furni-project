import React from 'react'
import Image from 'next/image'
import Chaircard from '../ui/Chaircard'

const Body = () => {
  return (
    <div className='pt-[164px] bg-cream'>
        <div className='pl-[177px] pr-[242px] flex gap-[44px]'>
            <div>
                <p className='text-[34px] font-semibold w-[205px] text-customBlack leading-[41px]'>Crafted with excellent material.</p>
                <p className='text-[14px] font-normal w-[228px] text-ash mt-[27px] leading-[24px]'>Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done.</p>
                <button className='w-[122px] h-[50px] border-customBlack bg-customBlack rounded-[30px] text-white mt-[33px]'>Explore</button>
            </div>
            <div>
                <Image width={189} height={261} alt='Nordic chair' src='./svgs/nordic-chair.svg' className='relative left-[50px] bottom-[44px] z-10'/>
                <Image width={296} height={307} alt='blue-background' src='./svgs/blue-background.svg' className='relative bottom-[200px]'/>
                <p className='font-semibold text-[16px] text-customBlack leading-[24px] relative bottom-[295px] left-[95px]'>Nordic CHAIR</p>
                <p className='font-bold text-[18px] align-middle text-customBlack leading-[24px] relative bottom-[295px] left-[120px]'>$50.00</p>
                <button className='h-[35px] w-[35px] bg-customBlack rounded-[30px] text-white text-[20px] relative bottom-[270px] left-[133px]'>+</button>
            </div>
            <div>
                <Image width={237} height={256} alt='kruzo chair' src='./svgs/kruzo-chair.svg'/>
                <p className='text-customBlack font-semibold text-center mt-[51px]'>Kruzo Aero Chair</p>
                <p className='text-customBlack font-bold text-[18px] text-center'>$78.00</p>
            </div>
            <div>
                <Image width={153} height={235} alt='ergonomic chair' src='./svgs/ergonomic-chair.svg' className='ml-[35px]'/>
                <p className='text-customBlack font-semibold text-center mt-[70px]'>Ergonomic Chair</p>
                <p className='text-customBlack font-bold text-[18px] text-center'>$43.00</p>
            </div>
        </div>
        <div className='flex pl-[180px] pr-[184px] gap-[87px]'>
            <div>
                <p className='text-customBlack font-semibold text-[34px]'>Why Choose Us</p>
                <p className='text-ash font-normal text-[14px] leading-[24px] w-[444px] mt-[24px]'>Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done. the</p>
                <div className='flex gap-[50px] mt-[87px]'>
                    <div className='grid-cols-2 flex flex-col gap-[24px]'>
                        <div>
                            <div>
                                <Image width={31} height={25} alt='truck' src='./svgs/truck.svg'/>
                                <Image width={33} height={33} alt='truck' src='./svgs/blue-circle.svg' className='relative bottom-[26px] left-[11px]'/>
                            </div>
                            <p className='text-customBlack text-[14px] font-semibold mt-[-23px]'>Fast & Free Shipping</p>
                            <p className='text-ash text-[14px] font-normal leading-[22px] w-[247px] mt-[9px]'>Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was</p>
                        </div>
                        <div>
                            <div>
                                <Image width={27} height={27} alt='truck' src='./svgs/support.svg'/>
                                <Image width={33} height={33} alt='truck' src='./svgs/blue-circle.svg' className='relative left-[12px] bottom-[27px]'/>
                            </div>
                            <p className='text-customBlack text-[14px] font-semibold mt-[-23px]'>24/7 Support</p>
                            <p className='text-ash text-[14px] font-normal leading-[22px] w-[247px] mt-[9px]'>Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was</p>
                        </div>
                    </div>
                    <div className='grid-cols-2 flex flex-col gap-[24px]'>
                        <div>
                            <div>
                                <Image width={24} height={26} alt='truck' src='./svgs/shop-bag.svg'/>
                                <Image width={33} height={33} alt='truck' src='./svgs/blue-circle.svg' className='relative bottom-[24px] left-[10px]'/>
                                <p className='text-customBlack text-[14px] font-semibold mt-[-23px]'>Easy to Shop</p>
                                <p className='text-ash text-[14px] font-normal leading-[22px] w-[247px] mt-[9px]'>Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <Image width={23} height={28} alt='truck' src='./svgs/return.svg'/>
                                <Image width={33} height={33} alt='truck' src='./svgs/blue-circle.svg' className='relative bottom-[29px] left-[9px]'/>
                            </div>
                            <p className='text-customBlack text-[14px] font-semibold mt-[-23px]'>Hassle Free Returns</p>
                            <p className='text-ash text-[14px] font-normal leading-[22px] w-[247px] mt-[9px]'>Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <Image width={542} height={709.05} src='./svgs/why-choose-us-img.svg' className='relative z-10'/>
                <Image width={262} height={176} src='./svgs/yellow-dotted-lines.svg' className='absolute bottom-[517px] right-[340px] z-0'/>
            </div>
        </div>
        <div className='mt-[168px] pl-[180px] pr-[184px]'>
            <div className='flex'>
                <div className='relative'>
                    <div className='flex gap-[23px]'>
                        <Image width={422} height={514} src='./svgs/interior.svg' className='relative z-10'/>
                        <Image width={187} height={187} src='./svgs/interior-two.svg' className='mb-[325px]'/>
                    </div>
                    <Image width={291} height={349} src='./svgs/stool.svg' className='absolute left-[345px] top-[213px] z-20'/>
                    <Image width={262} height={176} src='./svgs/blue-dotted-lines.svg' className='absolute bottom-[392px] right-[296px]'/>
                </div>
                <div className='ml-[265px] mt-[33px]'>
                    <p className='text-customBlack font-semibold text-[34px] leading-[41px] w-[378px]'>We help you make Modern Interior Design</p>
                    <p className='text-ash font-normal text-[14px] leading-[24px] w-[444px] mt-[28px]'>Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done. the this is a long  post for the text.`This small text has to be place here, since this is a place holder. You can also chane it.</p>
                    <div className='flex gap-[41px] ml-[4px]'>
                        <ul className='list-disc mt-[31px] text-ash'>
                            <li className='w-[194px]'>Donec mattis porta eors, let aliquet finibus ri</li>
                            <li className='w-[194px] mt-[24px]'>Donec mattis porta eors, let aliquet finibus ri</li>
                        </ul>
                        <ul className='list-disc mt-[31px] text-ash'>
                            <li className='w-[194px]'>Donec mattis porta eors, let aliquet finibus ri</li>
                            <li className='w-[194px] mt-[24px]'>Donec mattis porta eors, let aliquet finibus ri</li>
                        </ul>
                    </div>
                    <button className='w-[122px] h-[50px] mt-[38px] border-[2px] border-customBlack text-white bg-customBlack rounded-[30px]'>Explore</button>
                </div>
            </div>
        </div>
        <div className='mt-[194px] mr-[197px] ml-[179px]'>
            <div className='flex gap-[49px]'>
                <Chaircard description={"Donec mattis porta eros, aliquet finibus risus in. Donecd "} image={'./svgs/nordic-chair.svg'} title={"Nordic Chair"} width={91} height={125}/>
                <Chaircard description={"Donec mattis porta eros, aliquet finibus risus in. Donecd "} image={'./svgs/kruzo-chair.svg'} title={"Kruzo Aero"} width={113} height={123}/>
                <Chaircard description={"Donec mattis porta eros, aliquet finibus risus in. Donecd "} image={'./svgs/ergonomic-chair.svg'} title={"Ergonomic Chair"} width={78} height={119}/>
            </div>
        </div>
    </div>
  )
}

export default Body