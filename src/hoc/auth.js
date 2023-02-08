import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTE } from '../constant/route';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (RequestedComponent, option) {
  function AuthenticationCheck() {
    const [isCheck, setIsCheck] = useState(false);
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
          navigate(ROUTE.TODO.link);
        }
      }
      setIsCheck(true);
    }, []);

    return (
      isCheck && (
        <Wrap>
          <Container>
            <RequestedComponent />
          </Container>
        </Wrap>
      )
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
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
