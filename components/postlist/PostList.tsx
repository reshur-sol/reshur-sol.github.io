import Link from 'next/link';
import * as PostListStyles from './Postlist.Styles';

export default function PostList() {
  return (
    <PostListStyles.Frame>
      <Link
        href={'/til'}
        passHref
      >
        <PostListStyles.PostTitle>HTML이란 무엇인가?</PostListStyles.PostTitle>
        <PostListStyles.PostDate>23.01.01</PostListStyles.PostDate>
        <PostListStyles.PostDes>설명입니다.</PostListStyles.PostDes>
      </Link>
    </PostListStyles.Frame>
  );
}
