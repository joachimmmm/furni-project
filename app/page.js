import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Body from './components/Body'
import Testimonials from './components/Testimonials'
import RecentBlog from './components/RecentBlog'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Body/>
      <Testimonials/>
      <RecentBlog/>
      <Footer/>
    </div>
  )
}

export default page