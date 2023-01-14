import * as RecentStyles from './RecentsPost.Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
export default function RecentPost() {
  return (
    <RecentStyles.Frame>
      {/* Left */}
      <RecentStyles.PostFrame>
        <RecentStyles.Post>
          <RecentStyles.Category>TIL</RecentStyles.Category>
          <RecentStyles.PostTitle>title</RecentStyles.PostTitle>
          <RecentStyles.PostDate>23.11.11</RecentStyles.PostDate>
          <RecentStyles.PostDescription>hello</RecentStyles.PostDescription>
        </RecentStyles.Post>
        <RecentStyles.BtnFrame>
          <RecentStyles.Btn>
            <FontAwesomeIcon
              className='Icon'
              icon={faAngleLeft}
            />
          </RecentStyles.Btn>
          <RecentStyles.Btn>
            <FontAwesomeIcon
              className='Icon'
              icon={faAngleRight}
            />
          </RecentStyles.Btn>
        </RecentStyles.BtnFrame>
      </RecentStyles.PostFrame>
      {/* Right */}
      <RecentStyles.PostImage></RecentStyles.PostImage>
    </RecentStyles.Frame>
  );
}
