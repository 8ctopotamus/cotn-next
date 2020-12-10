import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'


export default ({ postData }) => {
  const { title, id, date } = postData
  return (
    <Layout>
      {title}
      <br />
      {id}
      <br />
      {date}
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export const getStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}
