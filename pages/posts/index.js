import Head from 'next/head';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

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

function AllPostsPage({ posts }) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts."
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
