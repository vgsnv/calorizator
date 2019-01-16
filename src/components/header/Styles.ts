import { StyleSheet } from "react-native";
import palette from "../../constants/palette";

import styled from "styled-components/native";

export const Header = styled.View`
  border-color: ${palette.gray};
  background-color: ${palette.main};
  border-bottom-width: 0.5;
  height: 80;
  padding-top: 4;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  width: 50;
`;

export const Title = styled.View`
  align-items: center;
`;

export const TitleText = styled.Text`
  text-transform: uppercase;
  font-size: 18;
  color: ${palette.white};
  font-weight: 700;
`;

export const LeftButton = styled.TouchableOpacity`
  align-self: flex-start;
`;

export const RightButton = styled.TouchableOpacity`
  align-self: flex-end;
`;
