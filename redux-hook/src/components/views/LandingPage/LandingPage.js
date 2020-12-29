import React from 'react';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../../actions/counter';

const LandingTemplate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;

  h1 {

  }

  button {
    width: 200px;
    height: 50px;
    margin-right: 10px;
  }
`;

function LandingPage() {

  const num = useSelector(state => state.counter.number)   // reducers/index.js에 정의된 reducer를 기준으로 가져온다
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increment())
  }

  const onDecrease = () => {
    dispatch(decrement())
  }

  return (
    <LandingTemplate>
      <div>
        <h1>{num}</h1>
      </div>
      <button onClick={onIncrease}><PlusCircleOutlined />1</button>
      <button onClick={onDecrease}><MinusCircleOutlined />1</button>
    </LandingTemplate>
  )
}

export default LandingPage;
