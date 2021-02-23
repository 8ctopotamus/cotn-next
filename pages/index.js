import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import BlockRenderer from '../components/blocks'
import { homeData } from '../testData'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <BlockRenderer organisms={ homeData.organisms } />
    </Layout>
  )
}
