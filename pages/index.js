import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'
import Section from '../components/section'

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Section
        className="pt-8 pb-8 text-black"
        fill="turquoise"
        borders={true}
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error rerum, labore quibusdam ducimus, distinctio nihil cumque asperiores quis, atque repudiandae sit unde explicabo perferendis et blanditiis repellat quia quae. Repellendus?</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </Section>
      
      
      <section className="container mx-auto">
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>          
          ))}
        </ul>
      </section>
    </Layout>
  )
}
