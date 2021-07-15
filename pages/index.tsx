import React from 'react'
import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Teilor Web Developer</title>
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://github.com/tsbcylon">Teilor's Web Dev Portfolio</a>
        </h1>
      </main>
    </div>
  )
}

export default Home