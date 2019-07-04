import palette from '../../../constants/palette'

import styled from 'styled-components/native'

export const PortionContainer = styled.TouchableOpacity`
  flex-direction: column;
  min-height: 100px;
  margin: 0 16px;
  padding: 16px;

  background-color: ${palette.graySuperLight};
  border-radius: 8px;
`

export const TilteContainer = styled.View`
  align-items: flex-start;
  flex-direction: row;
`

export const Left = styled.View`
  flex: 2;
  flex-direction: column;
`

export const Right = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: flex-start;
`

export const TitleText = styled.Text`
  flex: 1;
  font-size: 18px;
  color: #a6a6bc;
`

export const TotalNutrientsContainter = styled.View`
  flex: 1;
  padding: 8px 0 0 0;
  flex-direction: row;
`

export const TotalNutrientsItem = styled.View`
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: #74757c;
  margin: 0 8px 0 0;
`

export const TotalNutrientsText = styled.Text`
  text-align: center;
  font-size: 8px;
  color: ${palette.white};
`

export const ProductsContainer = styled.View`
  padding: 0 0 0 16px;
  flex-direction: column;
`

export const Product = styled.View`
  flex: 1;
  padding: 8px 0 8px 0;
  flex-direction: row;
`

export const ProductTitle = styled.Text`
  flex: 3;
  font-size: 18px;
  color: #494957;
`

export const ProductValue = styled.Text`
  flex: 1;
  text-align: right;
  font-size: 18px;
  color: #494957;
`

export const BigText = styled.Text`
  font-size: 20px;
  text-align: right;
  font-weight: 600;

  color: ${palette.grayText};
`

export const ChooseText = styled.Text`
  font-size: 20px;
  text-align: center;
  font-weight: 600;

  color: ${palette.grayText};
`
