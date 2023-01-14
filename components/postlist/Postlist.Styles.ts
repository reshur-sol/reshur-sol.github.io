import styled from '@emotion/styled';
export const Frame = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid #2f4858;
  margin: 75px 50px;
  padding: 30px;
  width: 550px;
  height: 450px;
  font-family: 'Chivo Mono', monospace;
  background-color: #ffffff;
  :hover {
    cursor: pointer;
  }
`;
export const MiniNav = styled.div`
  background-color: black;
  border-bottom: 1px solid #2f4858;
`;
export const PostList = styled.div`
  padding: 50px;
`;
export const PostTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #2f4858;
  :hover {
    color: #ff6863;
    cursor: pointer;
  }
`;
export const PostDate = styled.div`
  font-size: 12px;
  color: #616161;
  margin-bottom: 10px;
  :hover {
    cursor: pointer;
  }
`;
export const PostDes = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: #2f4858;
  :hover {
    color: #ff6863;
    cursor: pointer;
  }
  ::before {
    content: '☀︎ ';
  }
`;
