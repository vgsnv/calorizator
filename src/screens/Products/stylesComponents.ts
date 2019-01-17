import palette from "../../constants/palette";

import styled from "styled-components/native";

export const Page = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${palette.gray};
`;

export const ProductAdd = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 104px;
  padding: 10px;
  background-color: ${palette.white};
  color: ${palette.black};
`;

export const NewProductTitleText = styled.Text`
  color: ${palette.black};
`;

export const ProductAddButton = styled.TouchableOpacity`
  height: 100%;
  width: 60px;
  justify-content: center;
  align-items: flex-end;
`;

export const ProductAddButtonIcon = styled.Image``;
