import styled from '@emotion/styled';
export const Frame = styled.footer`
  display: flex;
  flex-direction: row;
  background-color: #e7e1e1;
  padding: 70px 100px;
  padding-bottom: 30px;
  font-family: 'Chivo Mono', monospace;
  border-top: 1.5px solid #000000;
  position: relative;
`;
export const CategoryFrame = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 50px;
`;
export const Title = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: 600;
  color: #2e4757;
`;
export const Pages = styled.li`
  width: 30px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 400;
  color: #2e4757;
  margin-bottom: 20px;
  padding-left: 5px;
  :hover {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    color: #fd526c;
    transition: all 300ms ease;
    ::after {
      content: ' ♥︎';
      color: #fd526c;
      font-size: 15px;
      padding-top: 5px;
    }
  }
`;
export const SocialFrame = styled.div`
  display: flex;
  padding-left: 5px;
  .icon {
    font-size: 32px;
    color: #2e4757;
    :hover {
      transform: scale(1.2);
      transition: all 300ms ease;
      cursor: pointer;
      color: #fd526c;
    }
  }
`;
export const TopBtn = styled.button`
  background-color: #ffffff;
  width: 50px;
  height: 50px;
  font-size: 16px;
  position: sticky;
  right: 10px;
  bottom: 10px;
`;
export const Categories = styled.div``;
