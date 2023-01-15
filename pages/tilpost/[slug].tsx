import Container from 'components/container/Container';
import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import * as PostStyles from '../../components/pagestyles/PostStyles';

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post.body.code);
  return (
    <Container>
      <PostStyles.Frame>
        <PostStyles.PostFrame>
          <PostStyles.TitleFrame>
            <PostStyles.Category>TODAY I LEARN</PostStyles.Category>
            <PostStyles.PostTitle>{post.title}</PostStyles.PostTitle>
            <PostStyles.Date>{post.date}</PostStyles.Date>
            <PostStyles.Author>author: RESHUR</PostStyles.Author>
          </PostStyles.TitleFrame>
          <PostStyles.ContentFrame>
            <MDXComponent />
          </PostStyles.ContentFrame>
        </PostStyles.PostFrame>
      </PostStyles.Frame>
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
