import palette from '../../constants/palette'

import styled from 'styled-components/native'

export const Page = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 0;
  background-color: ${palette.graySuperLight};
`

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
`

export const BtnContainer = styled.TouchableOpacity`
  height: 100%;
  align-content: space-between;
  justify-content: center;
`

export const TxtButton = styled.Text`
  font-size: 18px;
  color: ${palette.mainDark};
`
