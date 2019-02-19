import palette from "../../constants/palette";

import styled from "styled-components/native";

export const Page = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: stretch;
`;

export const TitleContainer = styled.View`
  flex: 1;
  background-color: #ccc;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 50px;
  color: ${palette.mainDark};
`;

export const SliderContainer = styled.View`
  flex: 5;
  align-items: center;
  justify-content: center;
`;
