import palette from "../../../constants/palette";

import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 56px;
  background-color: ${palette.white};
  margin-bottom: 8px;
  padding: 0 8px;
`;

export const Item = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.View`
  flex: 1;
  align-self: center;
`;

export const TitleText = styled.Text`
  font-size: 14;
  font-weight: 700;
  text-align: left;
  text-transform: uppercase;
  color: ${palette.mainDark};
`;

export const ItemText = styled.Text`
  font-size: 14;
  font-weight: 500;
  text-align: right;
`;
