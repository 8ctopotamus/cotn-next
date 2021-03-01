import Head from 'next/head';
import Layout from '../components/layout';
import BlockRenderer from '../components/blocks';
import { getAllGitlabIds, getRawData } from '../lib/gitlab';

const Page = ({ data }) => {
  const { title } = data;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <BlockRenderer organisms={data.organisms} />
      </article>
    </Layout>
  );
};

export default Page;

export const getStaticProps = async ({ params }) => {
  const data = await getRawData('pages', params.id);
  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await getAllGitlabIds('pages');
  return {
    paths,
    fallback: false,
  };
};
