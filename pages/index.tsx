import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>

      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <title>Teilor Web Developer</title>
      </Head>

      {/* HEADER */}
      
      <header className="menu">
        <div className="menu-left"></div>
        <div className="menu-logo"></div>
        <div className="menu-right"></div>
      </header>

      {/* BACKGROUND HERO */}

      <div className="hero">

      </div>

      {/* CONTAINER */}

      <section className="container">
        <div className="container-item">
          <h1>Teilor S. Barcelos</h1>
          <h3>Web Developer</h3>
          <h3>Front & Back-end Programming</h3>
          <Link href="#">
            <a className="link">WORKS</a>
          </Link>
        </div>
        <div className="container-item"></div>
      </section>
      
    </div>
  )
}
