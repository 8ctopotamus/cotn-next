const axios = require('axios')
import Head from 'next/head'
import Layout from '../../components/layout'
import BlockRenderer from '../../components/blocks'
import { getAllGitlabIds, getRawData } from '../../lib/gitlab'

const Post = ({ data }) => {
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

export default Post

export const getStaticProps = async ({ params }) => {
  const data = await getRawData('blog', params.id)
  return {
    props: {
      data,
    }
  }
}

export const getStaticPaths = async () => {
  const paths = await getAllGitlabIds('blog')
  return {
    paths,
    fallback: false
  }
}
