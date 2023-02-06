import React from 'react';
import styled from 'styled-components';

function LargeButton({ color, children, onClick }) {
  return (
    <Button color={color} onClick={onClick}>
      {children}
    </Button>
  );
}

const Button = styled.button`
  width: 100vw;
  max-width: 400px;
  height: 50px;
  background-color: ${(props) => props.color};
  border-radius: 12px;
  color: white;
`;

export default LargeButton;
