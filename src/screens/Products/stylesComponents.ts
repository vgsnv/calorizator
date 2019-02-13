import palette from "../../constants/palette";

import styled from "styled-components/native";

export const Page = styled.View`
  flex: 1;
  /* background-color: #ccc; */
  flex-direction: row;
  /* align-items: center;
  justify-content: center; */
  background-color: ${palette.white};
`;

export const PageTotal = styled.View`
  height: 54px;
  background-color: ${palette.graySuperLight};
`;
