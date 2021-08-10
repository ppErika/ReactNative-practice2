import React, {useState} from 'react';
import styled from 'styled-components/native';
import Button from './Button';

const StyledText = styled.Text`
  font-size: 24px;
  margin: 10px;
`;

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <StyledText>count: {count}</StyledText>
      <Button
        title="+"
        onPress={() => {
          setCount(count + 1);
          setCount(count + 1);
          // 자꾸 이전 값이 출력되는 문제 발생
          console.log(count);
        }}
      />
      <Button title="-" onPress={() => setCount(count - 1)} />
    </>
  );
};

export default Counter;
