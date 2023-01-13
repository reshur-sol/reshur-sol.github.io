import styled from '@emotion/styled';
export const Frame = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid #2f4858;
  margin-bottom: 35px;
  padding: 50px;
  font-family: 'Chivo Mono', monospace;
`;
export const PostTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #3b2b09;
  :hover {
    color: #ff6863;
    cursor: pointer;
  }
`;
export const PostDate = styled.div`
  font-size: 14px;
  color: #616161;
  margin-bottom: 10px;
  :hover {
    cursor: pointer;
  }
`;
export const PostDes = styled.div`
  font-size: 16px;
  color: #3b2b09;
  :hover {
    color: #ff6863;
    cursor: pointer;
  }
`;
