import Head from 'next/head';
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';

function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>DAVID'S BLOGSPOT</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;

// const DUMMY_POSTS = [
//   {
//     title: 'Getting Started with NextJS',
//     image: 'getting-started-nextjs.png',
//     excerpt:
//       'NextJS is the React framework for production- it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
//     date: '2023-02-10',
//     slug: 'getting-started-with-nextjs',
//   },
//   {
//     title: 'Getting Started with NextJS',
//     image: 'getting-started-nextjs.png',
//     excerpt:
//       'NextJS is the React framework for production- it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
//     date: '2023-02-10',
//     slug: 'getting-started-with-nextjs2',
//   },
//   {
//     title: 'Getting Started with NextJS',
//     image: 'getting-started-nextjs.png',
//     excerpt:
//       'NextJS is the React framework for production- it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
//     date: '2023-02-10',
//     slug: 'getting-started-with-nextjs3',
//   },
//   {
//     title: 'Getting Started with NextJS',
//     image: 'getting-started-nextjs.png',
//     excerpt:
//       'NextJS is the React framework for production- it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
//     date: '2023-02-10',
//     slug: 'getting-started-with-nextjs4',
//   },
// ];
