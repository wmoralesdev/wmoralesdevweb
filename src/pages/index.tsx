import { FunctionComponent } from 'react'

import Layout from '../components/Layout'
import Separator from '../components/Separator'
import Knowledge from '../components/Knowledge'

const Home: FunctionComponent = () => {
  return(
    <Layout>
      <Separator />
      <Knowledge />
    </Layout>
  )
}

export default Home