import Head from 'next/head'
import Layout from '../../components/layout'
import Container from '../../components/atoms/container'
import Title from '../../components/atoms/title'
import PostList from '../../components/post-list'
import { getAllDirFilesContentsAndMeta } from '../../lib/gitlab.js'

const CareersIndex = ({ data }) => (
  <Layout>
    <Head>
      <title>Careers</title>
    </Head>
    <Container>
      <Title className="text-center">Careers</Title>
      <PostList posts={data}/>
    </Container>
  </Layout>
)

export const getStaticProps = async () => {
  const data = await getAllDirFilesContentsAndMeta('careers')
  return { props: { data } }
}

export default CareersIndex




