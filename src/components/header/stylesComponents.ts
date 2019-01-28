import palette from "../../constants/palette";

import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  padding: 0;
  border-bottom-color: ${palette.gray};
  border-bottom-width: 0.5;
  background-color: ${palette.white};
`;

export const HeaderTop = styled.View`
  height: 20px;
`;

export const Header = styled.View`
  height: 60;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonContainer = styled.View`
  justify-content: center;
  height: 100%;
  width: 50;
`;

export const Title = styled.View`
  align-items: center;
`;

export const TitleText = styled.Text`
  font-size: 17;
  font-family: "System";
  font-style: normal;
  letter-spacing: -0.4px;
`;

export const LeftButton = styled.TouchableOpacity`
  padding-left: 8px;
  align-self: flex-start;
`;

export const RightButton = styled.TouchableOpacity`
  align-self: flex-end;
`;
