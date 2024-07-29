import React from 'react'
import RecentBlogCard from '../ui/RecentBlogCard'

const RecentBlog = () => {
  return (
    <div className='bg-cream pt-[41px] px-[180px] pb-[159px]'>
        <div className='flex justify-between'>
            <p className='text-[34px] leading-[41px] text-customBlack font-semibold'>Recent Blog</p>
            <p className='text-[16px] leading-[41px] text-customBlack font-semibold mr-[18px] border-b-[3px] border-black'>View All Posts</p>
        </div>
        <div className='flex gap-[30px] mt-[36px]'>
            <RecentBlogCard img={'./svgs/two-stools.svg'}/>
            <RecentBlogCard img={'./svgs/chair-arm.svg'}/>
            <RecentBlogCard img={'./svgs/brown-blocks.svg'}/>
        </div>
    </div>
  )
}

export default RecentBlog