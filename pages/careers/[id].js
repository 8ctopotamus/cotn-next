const axios = require('axios')
import Head from 'next/head'
import Layout from '../../components/layout'
import BlockRenderer from '../../components/blocks'
import { getAllGitlabIds, getRawData } from '../../lib/gitlab'

const Carrer = ({ data }) => {
  const { title } = data
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1>{title}</h1>
        <BlockRenderer organisms={ data.organisms } />
      </article>
    </Layout>
  )
}

export default Carrer

export const getStaticProps = async ({ params }) => {
  const data = await getRawData('careers', params.id)
  return {
    props: {
      data,
    }
  }
}

export const getStaticPaths = async () => {
  const paths = await getAllGitlabIds('careers')
  return {
    paths,
    fallback: false
  }
}
