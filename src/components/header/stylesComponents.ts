import styled from "styled-components/native";

import palette from "../../constants/palette";

export const HeaderContainer = styled.View`
  background-color: ${palette.white};
  height: 159px;
`;

export const EmptySpace = styled.View`
  height: 45px;
`;

export const Nav = styled.View`
  display: flex;
  flex-direction: row;
  height: 52px;
`;

export const LButtonContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-start;
`;

export const RButtonContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-end;
`;

export const Img = styled.Image`
  width: 52px;
  height: 52px;
`;

export const Title = styled.View`
  position: absolute;
  height: 62px;
  justify-content: center;
  z-index: -1;
`;

export const TitleText = styled.TouchableOpacity`
  font-weight: 500;
  padding-left: 18px;
  color: ${palette.grayLight};
  letter-spacing: -0.6px;
`;
