import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import imgHero from '../public/hero.jpg'

export default function Home() {
  return (
    <div>

      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500&display=swap" rel="stylesheet" />
        <title>Teilor Web Developer</title>
      </Head>

      {/* HEADER */}
      
      <header className="menu">
        <div className="menu-left">
          <Link href="#">
            <a className="link">HOME</a>
          </Link>
          <Link href="#">
            <a className="link">ABOUT</a>
          </Link>
        </div>
        <div className="menu-logo">
        <Link href="/">
            <a className="link">Teilor.</a>
          </Link>
        </div>
        <div className="menu-right">
          <Link href="#">
            <a className="link">WORKS</a>
          </Link>
          <Link href="#">
            <a className="link">GET IN TOUCH</a>
          </Link>
        </div>
      </header>

      {/* BACKGROUND HERO */}

      <div className="bg-hero">

      </div>

      {/* CONTAINER */}

      <section className="container hero">
        <div className="container-item border">
          <h1>Teilor S. Barcelos</h1>
          <h3>Web Developer</h3>
          <h3>Front & Back-end Programming</h3>
          <Link href="#">
            <a className="square">WORKS</a>
          </Link>
        </div>
        <div className="container-item border">
          <div className="img-hero">
            <Image
              src={imgHero}
              alt="Picture of the author"
            />
          </div>
        </div>
      </section>
      
    </div>
  )
}
