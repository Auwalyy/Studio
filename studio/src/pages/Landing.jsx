import React from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import AboutSection from '../components/About';
import CoursesSection from '../components/CourseSection';
import Course from '../components/Course';
import Testimonials from '../components/Testimoials';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <Course />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Landing