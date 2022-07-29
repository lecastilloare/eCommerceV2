import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import HomeAbout from '../components/HomeAbout'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Announcement />
      <HomeAbout />
      <Footer />
    </div>
  )
}
