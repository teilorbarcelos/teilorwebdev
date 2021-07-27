import React from 'react'
import '../styles/_colors.scss'
import '../styles/_spacing.scss'
import '../styles/_typography.scss'
import '../styles/_layout.scss'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp