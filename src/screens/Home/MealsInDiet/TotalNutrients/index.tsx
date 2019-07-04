import * as React from 'react'

import {
  BigText,
  DetailContainer,
  DetailItem,
  DetailText,
  Left,
  Right,
  TotalNutrients,
} from './stylesComponents'

import { TotalNutrients as ITotalNutrients } from '../../../../store/db/mealItems'

export interface Props {
  totalNutrients: ITotalNutrients
}

export interface Dispatch {}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch,
  State
> {
  public render() {
    const {
      totalNutrients: { totalKK, totalProtein, totalFat, totalCRBH },
    } = this.props

    return (
      <TotalNutrients>
        <Left>
          <DetailContainer>
            <DetailItem type={'protein'}>
              <DetailText>{totalProtein.toFixed(1)}</DetailText>
            </DetailItem>
            <DetailItem type={'fat'}>
              <DetailText>{totalFat.toFixed(1)}</DetailText>
            </DetailItem>
            <DetailItem type={'crbh'}>
              <DetailText>{totalCRBH.toFixed(1)}</DetailText>
            </DetailItem>
          </DetailContainer>
        </Left>
        <Right>
          <BigText>{totalKK.toFixed(0)}</BigText>
        </Right>
      </TotalNutrients>
    )
  }
}
