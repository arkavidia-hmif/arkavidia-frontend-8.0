import React from 'react'
import Head from 'next/head'

interface SEOProps {
  title: string
  children: JSX.Element | JSX.Element[]
}

const SEO = ({ title, children }: SEOProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </>
  )
}

export default SEO
