import palette from '../../../constants/palette'

import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 0 10px 0 34px;
  min-height: 120px;
  background-color: ${palette.graySuperLight};
`

export const Item = styled.View`
  flex-direction: column;
  padding: 5px 0;
`

export const Top = styled.View`
  flex-direction: column;
  padding: 5px 0;
`

export const TilteTextContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
`

export const TitleText = styled.Text`
  font-size: 26px;
  font-weight: 600;
  color: ${palette.gray};
`

export const Bottom = styled.View`
  padding: 5px 0;
  flex-direction: row;
  align-self: flex-start;
  justify-content: space-between;
`

export const DetailContainer = styled.View`
  flex: 4;
  flex-direction: row;
  align-items: flex-start;
`

interface DetailItem {
  type: string
}

export const DetailItem = styled.View`
  height: 18px;
  width: 44px;
  margin-right: 10px;
  justify-content: flex-start;
`

export const DetailText = styled.Text`
  font-size: 12px;
  color: ${palette.grayLight};
`

export const BigText = styled.Text`
  flex: 1;
  font-size: 24px;
  text-align: right;
  font-weight: 600;
  color: ${palette.grayText};
`

export const SliderContainer = styled.View`
  flex: 2;
  align-items: center;
`
