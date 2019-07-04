import * as React from 'react'

import {
  DetailContainer,
  DetailDesc,
  DetailItem,
  DetailText,
  TotalNutrients,
} from './stylesComponents'

const shadowStyle = {
  shadowColor: '#000',
  shadowOffset: { width: 1, height: 3 },
  shadowOpacity: 0.16,
  shadowRadius: 4,
}

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
        <DetailContainer>
          <DetailItem style={shadowStyle} type={'protein'}>
            <DetailText>{totalProtein.toFixed(1)}</DetailText>
            <DetailDesc>{'Белки'}</DetailDesc>
          </DetailItem>
          <DetailItem style={shadowStyle} type={'fat'}>
            <DetailText>{totalFat.toFixed(1)}</DetailText>
            <DetailDesc>{'Жиры'}</DetailDesc>
          </DetailItem>
          <DetailItem style={shadowStyle} type={'crbh'}>
            <DetailText>{totalCRBH.toFixed(1)}</DetailText>
            <DetailDesc>{'Углеводы'}</DetailDesc>
          </DetailItem>
          <DetailItem style={shadowStyle} type={'kk'}>
            <DetailText>{totalKK.toFixed(0)}</DetailText>
            <DetailDesc>{'ККал'}</DetailDesc>
          </DetailItem>
        </DetailContainer>
      </TotalNutrients>
    )
  }
}
