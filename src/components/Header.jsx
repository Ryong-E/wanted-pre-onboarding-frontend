import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LoginContext } from '../App';

const Header = () => {
  const isToken = localStorage.getItem('jwtToken');
  const naviagate = useNavigate();
  const [, setIsLogin] = useContext(LoginContext);
  const logOut = () => {
    localStorage.removeItem('jwtToken');
    setIsLogin(false);
    naviagate('/');
  };

  return (
    <Nav>
      <NavContainer>
        <Logo>
          <Link to={isToken ? '/todo' : '/'}>뚜두뚜두</Link>
        </Logo>
        <NavContentContainer>
          <NavMenu>
            {isToken ? (
              <NavItem onClick={() => logOut()}>로그아웃</NavItem>
            ) : (
              <>
                <NavItem>
                  <Link to="/signin">로그인</Link>
                </NavItem>
                <NavItem>
                  <Link to="/signup">회원가입</Link>
                </NavItem>
              </>
            )}
          </NavMenu>
        </NavContentContainer>
      </NavContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  z-index: 1000;
  border-bottom: 1px solid #a9a9a9;
  padding: 10px;
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 640px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
`;

const NavContentContainer = styled.div``;

const NavMenu = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

const NavItem = styled.li`
  & + & {
    margin-left: 20px;
  }
  cursor: pointer;
`;

export default Header;
