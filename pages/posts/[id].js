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
      <header className="text-center bg-gray-500 p-10 mb-10">
        <h1 className="text-6xl font-bold">title</h1>
      </header>
      <article>
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
