import { useState } from 'react'
import './scss/normalizez.scss';
import './scss/resets.scss'
import Header from './components/Header/Header.jsx';
import './index.scss';
import AboutUsSection from './components/AboutUsSection/AboutUsSection.jsx';
import OurPetsSection from './components/OurPetsSection/OurPetsSection.jsx';
import Partners from './components/Partners/Partners.jsx';
import Footer from './components/Footer/Footer.jsx';

export default function App() {

  return (
    <>
    <Header />
    <AboutUsSection />
    <OurPetsSection />
    <Partners />
    <Footer />
    </>
  )
}
