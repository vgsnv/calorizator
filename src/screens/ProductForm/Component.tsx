import * as React from "react";

import { Page, ModalHeader, BtnContainer, TxtButton } from "./stylesComponents";

import * as ui from "../../ui";
import palette from "../../constants/palette";

import { View, Text } from "react-native";

import { NavigationInjectedProps } from "react-navigation";

import { Product } from "../../store/app/curProduct";
import Slider from "./Slider/Slider";

export interface Props {
  curProduct: Product;
}

export interface Dispatch {
  goBack: (nav) => void;
  submit: (nav, data) => void;
}

interface State {
  submitTitle: string;
  productTitle: string;
  kk: number;
  protein: number;
  fat: number;
  crbh: number;
}

export default class Component extends React.Component<
  Props & Dispatch & NavigationInjectedProps,
  State
> {
  state = {
    productTitle: this.props.curProduct.title,
    submitTitle: "Сохранить",
    kk: parseFloat(this.props.curProduct.kk),
    protein: parseFloat(this.props.curProduct.protein),
    fat: parseFloat(this.props.curProduct.fat),
    crbh: parseFloat(this.props.curProduct.crbh)
  };

  private changeKK = value => {
    this.setState(() => ({
      kk: value.toFixed(1)
    }));
  };

  private changePROTEIN = value => {
    this.setState(() => ({
      protein: value.toFixed(1)
    }));
  };
  private changeFAT = value => {
    this.setState(() => ({
      fat: value.toFixed(1)
    }));
  };
  private changeCRBH = value => {
    this.setState(() => ({
      crbh: value.toFixed(1)
    }));
  };

  private handleOnPressClose = () => {
    this.props.goBack(this.props.navigation);
  };

  private handleOnPressSubmit = () => {
    const nav = this.props.navigation;
    const submit = this.props.submit;

    submit(nav, {
      title: this.state.productTitle,
      protein: this.state.protein,
      fat: this.state.fat,
      crbh: this.state.crbh,
      kk: this.state.kk
    });
  };

  private handleOnChangeTITLE = text => {
    this.setState(prevState => ({
      productTitle: text
    }));
  };

  render() {
    const titleInput = {
      placeholder: "Название",
      onChangeText: this.handleOnChangeTITLE,
      value: this.state.productTitle,
      inputType: ui.InputType.STRING
    };

    const closeButton = {
      onPress: this.handleOnPressClose
    };

    const SubmitBtn = {
      onPress: this.handleOnPressSubmit
    };

    return (
      <Page>
        <ModalHeader>
          <BtnContainer {...closeButton}>
            <TxtButton>Отмена</TxtButton>
          </BtnContainer>
          <BtnContainer {...SubmitBtn}>
            <TxtButton>{this.state.submitTitle}</TxtButton>
          </BtnContainer>
        </ModalHeader>

        <ui.Input {...titleInput} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingLeft: 8,
            paddingRight: 8
          }}
        >
          <Slider
            value={this.state.protein}
            labelName={"Белки"}
            minValue={0}
            maxValue={40}
            onChangeValue={this.changePROTEIN}
            emptyColor={palette.nutrients.proteinLight}
            backColor={palette.nutrients.protein}
          />
          <Slider
            value={this.state.fat}
            labelName={"Жиры"}
            minValue={0}
            maxValue={100}
            onChangeValue={this.changeFAT}
            emptyColor={palette.nutrients.fatLight}
            backColor={palette.nutrients.fat}
          />
          <Slider
            value={this.state.crbh}
            labelName={"Углеводы"}
            minValue={0}
            maxValue={100}
            onChangeValue={this.changeCRBH}
            emptyColor={palette.nutrients.crbhLight}
            backColor={palette.nutrients.crbh}
          />

          <Slider
            value={this.state.kk}
            labelName={"Килокалории"}
            minValue={0}
            maxValue={500}
            onChangeValue={this.changeKK}
            emptyColor={palette.nutrients.kkLight}
            backColor={palette.nutrients.kk}
          />
        </View>
      </Page>
    );
  }
}
