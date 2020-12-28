import React from 'react';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const LandingTemplate = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;

  button {
    width: 200px;
    height: 50px;
    margin-right: 10px;
  }
`;

function LandingPage() {
  return (
    <LandingTemplate>
      <button><PlusCircleOutlined />1</button>
      <button><MinusCircleOutlined />1</button>
    </LandingTemplate>
  )
}

export default LandingPage;
