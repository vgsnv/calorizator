import palette from '../../../../constants/palette'

import styled from 'styled-components/native'

export const TotalNutrients = styled.View`
  height: 110px;
  flex-direction: row;
  padding: 16px;
`

export const Left = styled.View`
  flex: 4;
  flex-direction: column;
`

export const DetailContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`

interface DetailItem {
  type: string
}

export const DetailItem = styled.View<DetailItem>`
  height: 28px;
  width: 54px;
  background-color: ${props => palette.nutrients[props.type]};
  border-radius: 6px;
  margin-right: 10px;
  justify-content: center;
`

export const DetailText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: ${palette.grayLight};
`

export const Right = styled.View`
  flex: 1;
  align-self: center;
  justify-content: center;
`

export const BigText = styled.Text`
  font-size: 37px;
  text-align: right;
  font-weight: 600;
  color: ${palette.grayText};
`
