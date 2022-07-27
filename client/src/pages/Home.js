import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>

      <Navbar />
      <Slider />
      <Announcement />
      <Footer />
    </div>
  )
}
