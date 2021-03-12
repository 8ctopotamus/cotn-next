import Head from 'next/head';
import Layout from '../../components/layout';
import Container from '../../components/atoms/container';
import Title from '../../components/atoms/title';
import Date from '../../components/date';
import BlockRenderer from '../../components/blocks';
import { getAllGitlabIds, getRawData } from '../../lib/gitlab';

const Post = ({ data }) => {
  const { title, date, subTitle, featuredImage, content } = data;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <header className="text-center bg-gray-500 p-10 mb-10">
        <h2 className="text-6xl font-bold">BLOG</h2>
      </header>

      <Container>
        <Title>{title}</Title>
        <h3>{subTitle}</h3>
        <Date dateString={date} />
      </Container>
      <img src={featuredImage} alt={title} />
      <Container>
        <article>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </Container>
    </Layout>
  );
};

export default Post;

export const getStaticProps = async ({ params }) => {
  const data = await getRawData('posts', params.id);
  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await getAllGitlabIds('posts');
  return {
    paths,
    fallback: false,
  };
};
