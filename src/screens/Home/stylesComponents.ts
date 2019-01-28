import palette from "../../constants/palette";

import styled from "styled-components/native";

export const Page = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${palette.white};
  align-items: center;
  justify-content: flex-end;
`;

export const BtnContainer = styled.View`
  margin-bottom: 40px;
  width: 280px;
  height: 58px;
`;
