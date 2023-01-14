import PostList from 'components/postlist/PostList';
import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import Container from '../components/container/Container';
import * as TilStyles from '../components/pagestyles/TilStyles';
export default function Til({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <TilStyles.Frame>
        <TilStyles.SubTitle>Today I Learn</TilStyles.SubTitle>
        <TilStyles.List>
          {posts.map((post) => (
            <PostList
              date={post.date}
              title={post.title}
              des={post.description}
              slug={post._raw.flattenedPath}
              key={post._id}
            />
          ))}
        </TilStyles.List>
      </TilStyles.Frame>
    </Container>
  );
}
export const getStaticProps = async () => {
  const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return {
    props: {
      posts,
    },
  };
};
