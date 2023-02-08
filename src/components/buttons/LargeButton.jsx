import React from 'react';
import styled from 'styled-components';

const LargeButton = ({ color, children, onClick, mode, disabled }) => {
  return (
    <Button color={color} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};

const Button = styled.button`
  width: 100%;
  max-width: 400px;
  height: 50px;
  background-color: ${(props) => props.color};
  border-radius: 12px;
  color: white;
  &:disabled {
    background-color: rgb(217, 217, 217);
    cursor: not-allowed;
  }
`;

export default LargeButton;
