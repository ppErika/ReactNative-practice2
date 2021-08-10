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
          // setCount에 함수를 전달해서 상태변수의 현재 값을 조절함으로써 해결
          setCount((count) => {
            console.log('prev 1: ', count);
            return count + 1;
          });
          setCount((count) => {
            console.log('prev 2: ', count);
            return count + 1;
          });
          console.log(count);
        }}
      />
      <Button title="-" onPress={() => setCount(count - 1)} />
    </>
  );
};

export default Counter;
