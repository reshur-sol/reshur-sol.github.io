import Link from 'next/link';
import * as PostListStyles from './PostList.Styles';

export default function PostList({ date, title, des, slug }) {
  return (
    <PostListStyles.Frame>
      <Link
        href={`/tilpost/${slug}`}
        passHref
      >
        <PostListStyles.PostTitle>{title}</PostListStyles.PostTitle>
        <PostListStyles.PostDate>{date}</PostListStyles.PostDate>
        <PostListStyles.PostDes>{des}</PostListStyles.PostDes>
      </Link>
    </PostListStyles.Frame>
  );
}
