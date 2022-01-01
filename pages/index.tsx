import React, { useEffect } from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import About from '../components/About'
import Background from '../components/Background'
import globals from '../styles/globals.module.css'
import Works from '../components/Works'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main className={globals.main}>

      {/* HEAD */}

      <Head>
        <title>Teilor Web Developer</title>

        <meta
          name="description"
          content="I am a web developer full-stack, focused in Typescript and your ecosistem like React, Nextjs, Gatsbyjs and Nodejs!"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>

      {/* HEADER */}

      <Header />

      {/* BACKGROUND HERO */}

      <Background />

      {/* CONTAINER */}

      <Hero />

      {/* SELECTED WORKS */}

      <Works />

      {/* ABOUT */}

      <About />

      {/* GET IN TOUCH */}

      <Contact />

      {/* FOOTER */}

      <Footer />

      {/* <!-- Go to www.addthis.com/dashboard to customize your tools --> */}
      <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-608a9f9b7b91a1b0"></script>

    </main>
  )
}
