const axios = require('axios')
import Head from 'next/head'
import Layout from '../components/layout'
// import Date from '../components/date'
import { getAllGitlabIds, getRawData } from '../lib/gitlab'

const Page = ({ data }) => {
  // const { title, date, contentHtml } = pageData
  return (
    <Layout>
      {/* <Head>
        <title>{title}</title>
      </Head> */}
      <article>
        TEST
        {JSON.stringify(data, null, 2)}
      </article>
    </Layout>
  )
}

export default Page

export const getStaticProps = async ({ params }) => {
  const data = await getRawData('pages', params.id)
  return {
    props: {
      data,
    }
  }
}

export const getStaticPaths = async () => {
  const paths = await getAllGitlabIds('pages')
  return {
    paths,
    fallback: false
  }
}
