import palette from "../../constants/palette";

import styled from "styled-components/native";

export const Page = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 0 5px;
  background-color: ${palette.gray};
`;

export const ModalHeader = styled.View`
  height: 50px;
  flex-direction: row;
  padding: 0 8px;
  margin-top: 24px;
  margin-bottom: 50px;
  justify-content: space-between;
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
