import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import BackgroundHero from '../components/BackgroundHero'
import ContainerHero from '../components/ContainerHero'
import SelectedWorks from '../components/SelectedWorks'
import GetInTouch from '../components/GetInTouch'

export default function Home() {
  return (
    <div>

      {/* HEAD */}

      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500&display=swap" rel="stylesheet" />
        
        <title>Teilor Web Developer</title>
      </Head>

      {/* HEADER */}
      
      <Header />

      {/* BACKGROUND HERO */}

      <BackgroundHero />

      {/* CONTAINER */}

      <ContainerHero />

      {/* SELECTED WORKS */}

      <SelectedWorks />

      {/* GET IN TOUCH */}

      <GetInTouch />
      
    </div>
  )
}
