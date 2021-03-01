import Head from 'next/head';
import Layout from '../components/layout';
import BlockRenderer from '../components/blocks';

const data = {
  title: 'About',
  organisms: [
    {
      name: 'mainLogo',
      type: 'COTNFullLogo',
      class: '',
      data: 'codeofthenorth.com/logo.svg',
    },
    {
      name: 'twocolumntext',
      type: 'TwoColumnText',
      class: '',
      data: {
        leftText: 'Forward Onward Upward',
        rightText:
          'We work hard, fast and thorough. Our team is honest and diligent, so you get realistic expectations and durable solutions.',
      },
    },
    {
      name: 'infographic',
      type: 'WorkBlock',
      class: 'bg-indigo-400',
      data: {
        title: 'Be Prepared',
        image:
          'https://www.artranked.com/images/0c/0c60ac486cc737821434370c01e39c8a.jpg',
        description:
          "We prepare for crisis situatuions and build your system to be durable from the get-go. Code is rigorously tested in the sandbox. You'll know exactly what to expect before it's every deployed to production",
      },
    },
    {
      name: 'firstresponders',
      type: 'WorkBlock',
      class:
        'bg-gradient-to-b from-gray-300 to-transparent text-center pt-20 pb-40',
      data: {
        title: 'First Responders',
        description:
          "Your site going down is like getting caught in a storm without a shelter. Every second is lost revenue. Upset customers. Damage to your brand. If anything breaks, we're all hands on deck. Crisis response mode until you're up and running again.",
        button: {
          title: 'Get in Touch',
          url: '/contact',
        },
      },
    },
    {
      name: 'theCrew',
      type: 'TeamRoster',
      class: '',
      data: {
        title: 'Meet the Crew',
        crew: [
          {
            image: 'https://pbs.twimg.com/media/BcvmxibIYAAH8a3.jpg',
            name: 'Ken Tyborski',
            position: 'Founder & CEO',
          },
          {
            image: 'https://pbs.twimg.com/media/BcvmxibIYAAH8a3.jpg',
            name: 'Gabe Masiulis',
            position: 'Full Stack Engineer',
          },
          {
            image: 'https://pbs.twimg.com/media/BcvmxibIYAAH8a3.jpg',
            name: 'Cliff Coffee',
            position: 'Full Stack Engineer',
          },
          {
            image: 'https://pbs.twimg.com/media/BcvmxibIYAAH8a3.jpg',
            name: 'Steph Green',
            position: 'UX Design',
          },
          {
            image: 'https://pbs.twimg.com/media/BcvmxibIYAAH8a3.jpg',
            name: 'Lissette Garcia',
            position: 'Intern',
          },
        ],
      },
    },
  ],
};

const Page = () => {
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
