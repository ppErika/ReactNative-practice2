import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
  padding: 10px 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledText = styled.Text`
  font-size: 20px;
  font-weight: ${({bold}) => (bold ? '600' : '400')};
`;

const CoinInfo = ({symbol, name, price}) => {
  return (
    <Container>
      <StyledText>
        {symbol} ({name})
      </StyledText>
      {/* 문자형태의 price를 숫자형태로 변환해줌 (*1) */}
      <StyledText bold>${(price * 1).toLocaleString()}</StyledText>
    </Container>
  );
};

export default CoinInfo;
