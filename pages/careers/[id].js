import Head from 'next/head'
import Layout from '../../components/layout'
import Container from '../../components/atoms/container'
import Title from '../../components/atoms/title'
import Description from '../../components/atoms/description'
import BlockWithCTA from '../../components/blocks/organisms/BlockWithCTA'
import { getAllGitlabIds, getRawData } from '../../lib/gitlab'

const Career = ({ data }) => {
  const { title, description, requirements, niceToHave, cta } = data
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <header className="text-center bg-gray-500 p-10 mb-10">
        <h2 className="text-6xl font-bold">Careers</h2>
      </header>
      <Container>
        <Title className="mb-5">{title}</Title>
        <Description>{description}</Description>

        {requirements && (
          <>
            <h3 className="mb-5 font-bold text-lg">Requirements</h3>
            <ul className="mb-5 list-disc pl-4">
              {requirements.map(text => <li>{text}</li>)}
            </ul>
          </>
        )}
        
        {niceToHave && (
          <>
            <h3 className="mb-5 font-bold text-lg">Nice To Have</h3>
            <ul className="mb-5 list-disc pl-4">
              {niceToHave.map(text => <li>{text}</li>)}
            </ul>
          </>
        )}

        <BlockWithCTA data={cta} />
      </Container>
    </Layout>
  )
}

export default Career

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
