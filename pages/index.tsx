import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import imgHero from '../public/hero.jpg'
import logo from '../public/logo.svg'
import square from '../public/square.svg'

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
            <a className="logo">
              <Image
                src={logo}
                alt="Logo of the site"
              />
            </a>
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
        <div className="container-item">
          <h1>Teilor S. Barcelos</h1>
          <h3 className="mask text-right">Web Developer</h3>
          <h3 className="mask text-center">Front & Back-end Programming</h3>
          <Link href="#">
            <a className="square">
              <Image
                src={square}
                alt="Works button"
              />
            </a>
          </Link>
        </div>
        <div className="container-item">
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
