import * as React from "react";
import {
  Container,
  Item,
  TilteTextContainer,
  TextContainer,
  TitleText,
  ItemText
} from "./stylesComponents";

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
          <TilteTextContainer>
            <TitleText>{title}</TitleText>
          </TilteTextContainer>
          <TextContainer>
            <ItemText>{parseFloat(kk).toFixed(1)}</ItemText>
          </TextContainer>
          <TextContainer>
            <ItemText>{parseFloat(protein).toFixed(1)}</ItemText>
          </TextContainer>
          <TextContainer>
            <ItemText>{parseFloat(fat).toFixed(1)}</ItemText>
          </TextContainer>
          <TextContainer>
            <ItemText>{parseFloat(crbh).toFixed(1)}</ItemText>
          </TextContainer>
        </Item>
      </Container>
    );
  }
}
