import styled from '@emotion/styled';

export const Frame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f0b9bc;
  height: 100vh;
  padding-top: 100px;
  font-family: 'Chivo Mono', monospace;
`;
// left
export const PostFrame = styled.div`
  width: 490px;
  height: 660px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: #ffffff;
`;
export const Post = styled.div`
  height: 350px;
  margin-bottom: 150px;
  padding: 50px;
  background-color: #ffffff;
`;
export const Category = styled.div`
  color: #ff3257;
  margin-bottom: 10px;
  font-size: 16px;
  background-color: #ffffff;
`;
export const PostTitle = styled.h1`
  margin-bottom: 10px;
  font-weight: 600;
  color: #3b2b09;
  background-color: #ffffff;
`;
export const PostDate = styled.div`
  font-size: 14px;
  color: #616161;
  background-color: #ffffff;
  margin-bottom: 10px;
`;
export const PostDescription = styled.span`
  font-size: 16px;
  color: #3b2b09;
  background-color: #ffffff;
`;
export const BtnFrame = styled.div`
  display: flex;
  padding: 50px;
  background-color: #ffffff;
`;
export const Btn = styled.button`
  border-radius: 50%;
  border: 1px solid #bdbdbd;
  background-color: #ffffff;
  width: 50px;
  height: 50px;
  font-size: 24px;
  color: #616161;
  margin-right: 50px;
  :hover {
    border: 1px solid #616161;
    cursor: pointer;
  }
  .Icon {
    background-color: #ffffff;
    :hover {
      cursor: pointer;
    }
  }
`;
// right
export const PostImage = styled.div`
  width: 790px;
  height: 660px;
`;
