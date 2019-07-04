import palette from '../../../../constants/palette'

import styled from 'styled-components/native'

export const TotalNutrients = styled.View`
  height: 110px;
  flex-direction: row;
  padding: 16px;
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
  height: 40px;
  width: 72px;
  background-color: ${props => palette.nutrients[props.type]};
  border-radius: 12px;
  margin-right: 32px;
  justify-content: center;
`

export const DetailText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: ${palette.grayLight};
`

export const DetailDesc = styled.Text`
  font-size: 11px;
  font-weight: 500;
  text-align: center;
  color: ${palette.grayLight};
`
