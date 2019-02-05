import * as React from "react";
import {
  Container,
  Item,
  Left,
  Right,
  TilteTextContainer,
  DetailContainer,
  DetailItem,
  DetailText,
  TitleText,
  BigText,
  Img
} from "./stylesComponents";

const forward = require("../../../assets/forward.png");

export interface Props {
  id: string;
  title: string;
  kk: string;
  protein: string;
  fat: string;
  crbh: string;
}

export interface Dispatch {
  onPressItem: (id: string) => void;
}

interface State {}

export default class extends React.PureComponent<Props & Dispatch, State> {
  private onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    const { title, kk, protein, fat, crbh } = this.props;

    return (
      <Container onPress={this.onPress}>
        <Item>
          <Left>
            <TilteTextContainer>
              <TitleText>{title}</TitleText>
            </TilteTextContainer>

            <DetailContainer>
              <DetailItem type={"protein"}>
                <DetailText>{parseFloat(protein).toFixed(1)}</DetailText>
              </DetailItem>
              <DetailItem type={"fat"}>
                <DetailText>{parseFloat(fat).toFixed(1)}</DetailText>
              </DetailItem>
              <DetailItem type={"crbh"}>
                <DetailText>{parseFloat(crbh).toFixed(1)}</DetailText>
              </DetailItem>
            </DetailContainer>
          </Left>
          <Right>
            <BigText>{parseFloat(kk).toFixed(0)}</BigText>
            <Img source={forward} />
          </Right>
        </Item>
      </Container>
    );
  }
}
