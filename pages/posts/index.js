import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Container from '../../components/blocks/atoms/container'
import Title from '../../components/blocks/atoms/title'
import { getAllDirFilesContentsAndMeta } from '../../lib/gitlab.js'

const BlogIndex = ({ data }) => (
  <Layout>
    <Head>
      <title>Blog</title>
    </Head>
    <Container>
      <Title className="text-center">Blog</Title>
      {data.map(({ name, content }) => {
        const slug = `/posts/${name.replace('.json', '')}`
        return (
          <div className="mb-6" key={slug}>
            <Link href={slug}>
              <h2 className="text-2xl cursor-pointer">{name}</h2>  
            </Link> 
            <p>{content.excerpt}</p>
          </div>
        )
      })}
    </Container>
  </Layout>
)

export const getStaticProps = async () => {
  const data = await getAllDirFilesContentsAndMeta('posts')
  return { props: { data } }
}

export default BlogIndex




