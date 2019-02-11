import palette from "../../constants/palette";

import styled from "styled-components/native";

export const Page = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  color: ${palette.mainDark};
`;

export const Title = styled.Text`
  font-size: 50px;
  color: ${palette.mainDark};
`;
