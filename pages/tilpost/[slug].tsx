import Container from 'components/container/Container';
import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import * as PostStyles from './PostStyles';

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post.body.code);
  return (
    <Container>
      <PostStyles.frame>
        <PostStyles.PostFrame>
          <PostStyles.PostTitle>{post.title}</PostStyles.PostTitle>
          <PostStyles.Date>{post.date}</PostStyles.Date>
        </PostStyles.PostFrame>
        <MDXComponent />
      </PostStyles.frame>
    </Container>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
};

export default Post;
