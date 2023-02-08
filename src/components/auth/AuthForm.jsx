import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { loginUserApi, registerUserApi } from '../../api/auth';
import { LoginContext } from '../../App';
import LargeButton from '../buttons/LargeButton';

function AuthForm({ mode }) {
  const [idError, setIdError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [enterId, setEnterId] = useState();
  const [enterPassword, setEnterPassword] = useState();
  const [, setIsLogin] = useContext(LoginContext);
  const navigate = useNavigate();

  const idValidate = (e) => {
    const ID_REGEX = /@/;
    setEnterId(e.target.value);
    if (e.target.value === '') return setIdError('아이디를 입력해주세요');
    if (ID_REGEX.test(e.target.value)) return setIdError(true);
    setIdError('@를 포함해주세요');
  };

  const passwordValidate = (e) => {
    const PASSWORD_REGEX = /\w{8,}/;
    setEnterPassword(e.target.value);
    if (e.target.value === '') return setPasswordError('비밀번호를 입력해주세요');
    if (PASSWORD_REGEX.test(e.target.value)) return setPasswordError(true);
    setPasswordError('비밀번호는 8자이상 입니다');
  };

  const handleSubmit = async () => {
    try {
      if (mode === 'login') {
        const result = await loginUserApi(enterId, enterPassword);
        localStorage.setItem('jwtToken', result.access_token);
        setIsLogin(true);
        navigate('/todo');
        return;
      }

      await registerUserApi(enterId, enterPassword);
      navigate('/signin');
    } catch (error) {
      if (error.status === 401) {
        return alert('비밀번호를 확인해주세요');
      }
      alert(error.data.message);
    }
  };

  return (
    <LoginContainer>
      <Box>
        <InforWord>아이디</InforWord>
        <Input type="text" onChange={idValidate} data-testid="email-input"></Input>
        <ErrorMessage>{idError}</ErrorMessage>
      </Box>
      <Box>
        <InforWord>비밀번호</InforWord>
        <Input type="password" onChange={passwordValidate} data-testid="password-input"></Input>
        <ErrorMessage>{passwordError}</ErrorMessage>
      </Box>
      <Box>
        <LargeButton
          color={mode === 'login' ? 'rgb(166, 141, 202)' : 'rgb(192, 222, 255)'}
          disabled={idError === true && passwordError === true ? false : true}
          onClick={handleSubmit}
          data-testid="signin-button"
          mode={mode}
        >
          {mode === 'register' ? '회원가입' : '로그인'}
        </LargeButton>
      </Box>
    </LoginContainer>
  );
}

const ErrorMessage = styled.p`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.error};
`;

const LoginContainer = styled.div`
  width: 100%;
  max-width: 50%;
`;

const InforWord = styled.h1`
  position: absolute;
  left: 10px;
  top: -40px;
  font-weight: 500;
  font-size: 20px;
`;

const Box = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  & + & {
    margin-top: 50px;
  }
`;
const Input = styled.input`
  border-radius: 12px;
  border: 1px solid grey;
  height: 40px;
  width: 100%;
  text-align: center;
`;

export default AuthForm;
