import Head from 'next/head'
import { FunctionComponent } from 'react'

import Wrapper from '../components/Wrapper'
import Layout from '../components/Layout'
import Knowledge from '../components/Knowledge'

import learning from '../../public/res/learning.png'

const Home: FunctionComponent = () => {
  return(
    <Layout>
      <Head>
        <title>WM</title>
        <meta property="og:title" content="wmoralesdev" key="title" />
        <meta name="description" 
        content="Wellcome to my personal website!"/>
      </Head>
      <div>
        <h1 className="font-bold my-3 text-center lg:text-xl">I'm currently learning</h1>
        <Wrapper img={learning} alt="arduino" title="Microcontrollers with Arduino"/>
      </div>
    </Layout>
  )
}

export default Home