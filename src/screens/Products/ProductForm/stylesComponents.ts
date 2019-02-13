import palette from "../../../constants/palette";

import styled from "styled-components/native";

export const Page = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 0 5px;
  background-color: ${palette.white};
`;

export const BtnContainer = styled.View`
  margin-top: 40px;
  flex: 1;
  align-self: stretch;
  /* width: 280px; */
  height: 58px;

  align-self: center;
`;
