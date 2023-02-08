import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LargeButton from '../components/buttons/LargeButton';

function Home() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <LinkButtonContainer>
      <LargeButton color={'#a68dca'} onClick={() => handleClick('/signin')}>
        로그인 하러가기
      </LargeButton>
      <LargeButton color={'#C0DEFF'} onClick={() => handleClick('/signup')}>
        회원가입 하러가기
      </LargeButton>
    </LinkButtonContainer>
  );
}

const LinkButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > button {
    margin-bottom: 20px;
  }
`;

export default Home;
