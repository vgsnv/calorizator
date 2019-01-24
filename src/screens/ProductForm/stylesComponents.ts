import palette from "../../constants/palette";

import styled from "styled-components/native";

export const Page = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 0 5px;
  background-color: ${palette.white};
`;

export const NewProduct = styled.View``;

export const IcnContainer = styled.TouchableOpacity`
  margin-top: 24px;
  margin-bottom: 54px;
  align-self: flex-end;
  height: 50px;
  width: 50;
`;

export const BtnContainer = styled.TouchableOpacity`
  margin-top: 24px;
  align-self: center;
  margin-bottom: 40px;
  width: 280px;
  height: 58px;
`;
