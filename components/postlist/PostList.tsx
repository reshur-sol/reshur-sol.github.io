import Link from 'next/link';
import * as PostListStyles from './PostList.Styles';

export default function PostList({ date, title, des, slug }) {
  return (
    <Link
      href={`/tilpost/${slug}`}
      passHref
    >
      <PostListStyles.Frame>
        <PostListStyles.PostTitle>{title}</PostListStyles.PostTitle>
        <PostListStyles.PostDate>{date}</PostListStyles.PostDate>
        <PostListStyles.PostDes>{des}</PostListStyles.PostDes>
      </PostListStyles.Frame>
    </Link>
  );
}
