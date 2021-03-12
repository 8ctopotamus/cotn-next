import Head from 'next/head';
import Layout from '../../components/layout';
import Container from '../../components/atoms/container';
import Title from '../../components/atoms/title';
import BlockRenderer from '../../components/blocks';
import { getAllGitlabIds, getRawData } from '../../lib/gitlab';

const Project = ({ data }) => {
  const {
    title,
    date,
    featuredImage,
    services,
    features,
    results,
    organisms,
  } = data;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <header className="text-center bg-gray-500 p-10 mb-10">
        <h2 className="text-6xl font-bold">Projects</h2>
      </header>
      <Container>
        <Title className="mb-5">{title}</Title>
        <Date>{date}</Date>
        <img src={featuredImage} alt={title} />
        {services && (
          <>
            <h3 className="mb-5 font-bold text-lg">Services</h3>
            <ul className="mb-5 list-disc pl-4">
              {services.map(text => (
                <li>{text}</li>
              ))}
            </ul>
          </>
        )}

        {features && (
          <>
            <h3 className="mb-5 font-bold text-lg">Features</h3>
            <ul className="mb-5 list-disc pl-4">
              {features.map(text => (
                <li>{text}</li>
              ))}
            </ul>
          </>
        )}

        {results && (
          <>
            <h3 className="mb-5 font-bold text-lg">Results</h3>
            <ul className="mb-5 list-disc pl-4">
              {results.map(text => (
                <li>{text}</li>
              ))}
            </ul>
          </>
        )}

        <BlockRenderer organisms={organisms} />
      </Container>
    </Layout>
  );
};

export default Project;

export const getStaticProps = async ({ params }) => {
  const data = await getRawData('projects', params.id);
  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await getAllGitlabIds('projects');
  return {
    paths,
    fallback: false,
  };
};
