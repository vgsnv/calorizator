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

export const ModalHeader = styled.View`
  z-index: 999;
  height: 50px;
  flex-direction: row;
  padding: 0 16px;
  margin-top: 48px;
  margin-bottom: 50px;
  justify-content: space-between;
  border-color: ${palette.grayRoze};
  border-bottom-width: 1px;
`;

export const BodyContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BtnContainer = styled.TouchableOpacity`
  height: 100%;
  align-content: space-between;
  justify-content: center;
`;

export const TxtButton = styled.Text`
  font-size: 18px;
  color: ${palette.mainDark};
`;
