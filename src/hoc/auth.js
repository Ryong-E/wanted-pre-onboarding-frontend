import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTE } from '../constant/route';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (RequestedComponent, option) {
  function AuthenticationCheck() {
    const navigate = useNavigate();

    useEffect(() => {
      const isToken = localStorage.getItem('jwtToken');

      if (!isToken) {
        if (option) {
          alert('로그인이 필요한 서비스입니다');
          navigate(ROUTE.SIGNIN.link);
        }
      } else {
        if (option === false) {
          navigate(ROUTE.HOME.link);
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
      <Wrap>
        <Container>
          <RequestedComponent />
        </Container>
      </Wrap>
    );
  }

  return AuthenticationCheck;
}

const Wrap = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 640px;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
