import Head from 'next/head'
import Layout from '../../components/layout'
import Container from '../../components/blocks/atoms/container'
import Title from '../../components/blocks/atoms/title'
import PostList from '../../components/post-list'
import { getAllDirFilesContentsAndMeta } from '../../lib/gitlab.js'

const CareersIndex = ({ data }) => (
  <Layout>
    <Head>
      <title>Projects</title>
    </Head>
    <Container>
      <Title className="text-center">Projects</Title>
      <PostList posts={data}/>
    </Container>
  </Layout>
)

export const getStaticProps = async () => {
  const data = await getAllDirFilesContentsAndMeta('projects')
  return { props: { data } }
}

export default CareersIndex




