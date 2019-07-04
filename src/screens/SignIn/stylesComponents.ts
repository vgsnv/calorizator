import palette from '../../constants/palette'

import styled from 'styled-components/native'

export const Page = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  /* background-color: ${palette.black}; */
`

export const TitleContainer = styled.View`
  flex: 1;
  background-color: ${palette.main};
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 50px;
  color: ${palette.mainDark};
`

export const Buttons = styled.View`
  flex: 4;
  font-size: 50px;
  color: ${palette.white};
  justify-content: center;
  align-items: center;
`
