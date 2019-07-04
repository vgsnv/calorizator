import * as React from 'react'
import {
  BigText,
  Bottom,
  Container,
  DetailContainer,
  DetailItem,
  DetailText,
  Item,
  SliderContainer,
  TilteTextContainer,
  TitleText,
  Top,
} from './stylesComponents'

import Slider from 'react-native-slider'
import * as ui from '../../../ui'

export interface Props {
  id: string
  title: string
  kk: string
  protein: string
  fat: string
  crbh: string
  weight: string
}

export interface Dispatch {}

interface State {
  weight: string
  kk: string
  protein: string
  fat: string
  crbh: string
}

export default class extends React.PureComponent<Props & Dispatch, State> {
  public state = {
    weight: this.props.weight,
    kk: (
      (parseFloat(this.props.kk) * parseFloat(this.props.weight)) /
      100
    ).toFixed(0),
    protein: (
      (parseFloat(this.props.protein) * parseFloat(this.props.weight)) /
      100
    ).toFixed(0),
    fat: (
      (parseFloat(this.props.fat) * parseFloat(this.props.weight)) /
      100
    ).toFixed(0),
    crbh: (
      (parseFloat(this.props.crbh) * parseFloat(this.props.weight)) /
      100
    ).toFixed(0),
  }

  public render() {
    const { title, weight } = this.props
    const { kk, protein, fat, crbh } = this.state

    const s2Text = parseFloat(this.state.weight).toFixed(0)

    return (
      <Container>
        <Item>
          <Top>
            <TilteTextContainer>
              <TitleText>{title}</TitleText>
              <TitleText>{`${s2Text}г`}</TitleText>
            </TilteTextContainer>
          </Top>
          <Bottom>
            <DetailContainer>
              <DetailItem>
                <DetailText>{parseFloat(protein).toFixed(1)}</DetailText>
              </DetailItem>
              <DetailItem>
                <DetailText>{parseFloat(fat).toFixed(1)}</DetailText>
              </DetailItem>
              <DetailItem>
                <DetailText>{parseFloat(crbh).toFixed(1)}</DetailText>
              </DetailItem>
            </DetailContainer>
            <BigText>{parseFloat(kk).toFixed(0)}</BigText>
          </Bottom>

          <Slider
            value={this.state.weight}
            onValueChange={this.changeS2}
            minimumValue={0}
            maximumValue={400}
            step={1}
            thumbTouchSize={{ width: 40, height: 40 }}
            thumbStyle={{
              width: 40,
              height: 40,
              borderRadius: 50,
            }}
            thumbTintColor={'#e2e1eb'}
            animateTransitions={true}
            minimumTrackTintColor={'#e2e1eb'}
            maximumTrackTintColor={'#e2e1eb'}
            trackStyle={{
              height: 2,
            }}
          />
        </Item>
      </Container>
    )
  }

  private changeS2 = value => {
    this.setState(prevState => {
      return {
        weight: value,
        kk: ((parseFloat(this.props.kk) * value) / 100).toFixed(1),
        protein: ((parseFloat(this.props.protein) * value) / 100).toFixed(1),
        fat: ((parseFloat(this.props.fat) * value) / 100).toFixed(1),
        crbh: ((parseFloat(this.props.crbh) * value) / 100).toFixed(1),
      }
    })
  }
}
