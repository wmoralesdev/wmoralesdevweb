import { FunctionComponent } from 'react'

import Layout from '../../components/Layout'
import Separator from '../../components/Separator'
import Knowledge from '../../components/Knowledge'
import Survey from '../../components/Survey'

const Home: FunctionComponent = () => {
    return (
        <Layout>
            <Separator />
            <Survey />
        </Layout>
    )
}

export default Home