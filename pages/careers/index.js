import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Container from '../../components/blocks/atoms/container'
import Title from '../../components/blocks/atoms/title'
import { getAllDirFilesContentsAndMeta } from '../../lib/gitlab.js'

const CareersIndex = ({ data }) => (
  <Layout>
    <Head>
      <title>Careers</title>
    </Head>
    <Container>
      <Title className="text-center">Careers</Title>
      {data.map(({ name }) => {
        return (
          <div>
            <Link href="/">
              <h2 className="text-2xl">{name}</h2>
            </Link> 
          </div>
        )
      })}
    </Container>
  </Layout>
)

export const getStaticProps = async () => {
  const data = await getAllDirFilesContentsAndMeta('careers')
  console.log(data)
  return {
    props: { data }
  }
}

export default CareersIndex




