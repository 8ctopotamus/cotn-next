import Head from 'next/head'
import Layout from '../components/layout'
import Container from '../components/blocks/atoms/container'
import Title from '../components/blocks/atoms/title'

export default function Contact() {
  return (
    <Layout home>
      <Head>
        <title>Contact</title>
      </Head>
      <Container>
        <Title>Contact Us</Title>
      </Container>
    </Layout>
  )
}
