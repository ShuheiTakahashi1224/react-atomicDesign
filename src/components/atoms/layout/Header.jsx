import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
  height: 50px;
  background: #11999e;
  color: #fff;
`;
const SNav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  height: 100%;
  margin: 0;
  padding: 0;
`;
const SNavItem = styled.li`
  margin: 0;
  &:not(:first-child) {
    margin-left: 16px;
  }
`;

const Header = () => {
  return (
    <SHeader>
      <SNav>
        <SNavItem>
          <Link to="/">HOME</Link>
        </SNavItem>
        <SNavItem>
          <Link to="/users">USERS</Link>
        </SNavItem>
      </SNav>
    </SHeader>
  );
};

export default Header;
