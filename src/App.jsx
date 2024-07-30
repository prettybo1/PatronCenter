import { useState } from 'react'
import './scss/normalizez.scss';
import './scss/resets.scss'
import Header from './components/Header/Header.jsx';
import './index.scss';
import AboutUsSection from './components/AboutUsSection/AboutUsSection.jsx';

export default function App() {

  return (
    <>
    <Header />
    <AboutUsSection />
    </>
  )
}
