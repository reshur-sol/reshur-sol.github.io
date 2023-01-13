import styled from '@emotion/styled';
export const Frame = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #e7e1e1;
  padding: 0 30px;
  border-bottom: 1px solid #2f4858; ;
`;
export const Logo = styled.div`
  margin: 25px 0;
  font-size: 35px;
  color: #ff6863;
  :hover {
    color: #98bcf9;
    transition: all 350ms ease-out;
    cursor: pointer;
  }
`;
export const Title = styled.div`
  font-size: 32px;
  font-family: 'Bebas Neue', cursiv;
  color: #2f4858;
  :hover {
    color: #ff6863;
    transition: all 300ms ease-in;
  }
`;
export const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const MenuItem = styled.li`
  margin: 0 20px;
  font-size: 16px;
  cursor: pointer;
  color: #2f4858;
  font-family: 'Chivo Mono', monospace;
  :hover {
    color: #ff6863;
  }
`;
