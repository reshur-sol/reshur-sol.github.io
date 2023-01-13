import * as RecentStyles from './RecentsPost.Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
export default function RecentPost() {
  return (
    <RecentStyles.Frame>
      {/* Left */}
      <RecentStyles.PostFrame>
        <RecentStyles.Post>
          <RecentStyles.Category>TIL</RecentStyles.Category>
          <RecentStyles.PostTitle>HTML이란 무엇인가?</RecentStyles.PostTitle>
          <RecentStyles.PostDate>2023.11.11</RecentStyles.PostDate>
          <RecentStyles.PostDescription>
            html은 하이퍼 텍스트 마크업 랭귀지 이다
          </RecentStyles.PostDescription>
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
