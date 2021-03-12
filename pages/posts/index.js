import Head from 'next/head'
import Layout from '../../components/layout'
import Container from '../../components/atoms/container'
import Title from '../../components/atoms/title'
import PostList from '../../components/post-list'
import { getAllDirFilesContentsAndMeta } from '../../lib/gitlab.js'

const BlogIndex = ({ data }) => (
  <Layout>
    <Head>
      <title>Blog</title>
    </Head>
    <Container>
      <Title className="text-center">Blog</Title>
      <PostList posts={data}/>
    </Container>
  </Layout>
)

export const getStaticProps = async () => {
  const data = await getAllDirFilesContentsAndMeta('posts')
  return { props: { data } }
}

export default BlogIndex




