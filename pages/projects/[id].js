import Head from 'next/head'
import Layout from '../../components/layout'
import BlockRenderer from '../../components/blocks'
import { getAllGitlabIds, getRawData } from '../../lib/gitlab'

const Project = ({ data }) => {
  const { title } = data
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1>{title}</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </article>
    </Layout>
  )
}

export default Project

export const getStaticProps = async ({ params }) => {
  const data = await getRawData('portfolio', params.id)
  return {
    props: {
      data,
    }
  }
}

export const getStaticPaths = async () => {
  const paths = await getAllGitlabIds('portfolio')
  return {
    paths,
    fallback: false
  }
}
