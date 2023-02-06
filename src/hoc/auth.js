import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTE } from '../constant/route';

export default function (RequestedComponent, option) {
  function AuthenticationCheck() {
    const navigate = useNavigate();
    const { pathname, state } = useLocation();

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
    }, []);
    return <RequestedComponent />;
  }

  return AuthenticationCheck;
}
