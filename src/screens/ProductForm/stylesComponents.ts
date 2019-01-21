import palette from "../../constants/palette";

import styled from "styled-components/native";

export const Page = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 0 5px;
  background-color: ${palette.white};
`;

export const EmptyHeader = styled.View`
  height: 25px;
`;

export const NewProduct = styled.View`
  flex: 1;
  height: 50px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  align-self: flex-end;
  height: 50px;
  width: 50;
`;
