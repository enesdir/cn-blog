import Head from 'next/head'
import React from 'react'

interface WithTitleProps {
  title: string
}

function WithTitle(props: WithTitleProps) {
  return (
    <Head>
      <title> {props.title} </title>
    </Head>
  )
}

export default WithTitle
