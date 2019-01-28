import palette from "../../../constants/palette";

import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 68px;
  background-color: ${palette.main};
  margin-bottom: 16px;
  padding: 0 12px;
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

export const TilteTextContainer = styled.View`
  flex: 2;
  align-self: center;
`;

export const TitleText = styled.Text`
  font-size: 14;
  text-align: left;
  text-transform: capitalize;
  color: ${palette.white};
`;

export const ItemText = styled.Text`
  font-size: 14;
  text-align: right;
  color: ${palette.white};
`;
