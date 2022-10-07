import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Oneplay</title>
        <link rel="icon" href="/logo2.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp