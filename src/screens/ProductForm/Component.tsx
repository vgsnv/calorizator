import * as React from "react";

import { Page, ModalHeader, BtnContainer, TxtButton } from "./stylesComponents";

import * as ui from "../../ui";

import { KeyboardAvoidingView } from "react-native";

import { NavigationInjectedProps } from "react-navigation";

import { Product } from "../../store/app/curProduct";

export interface Props {
  curProduct: Product;
}

export interface Dispatch {
  goBack: (nav) => void;
  submit: (nav, data) => void;
}

interface Inputs {
  title: string;
  kk: string;
  protein: string;
  fat: string;
  crbh: string;
}
interface State {
  submitTitle: string;
  inputs: Inputs;
}

export default class Component extends React.Component<
  Props & Dispatch & NavigationInjectedProps,
  State
> {
  static navigationOptions = {
    title: "ПРОДУКТЫ"
  };

  constructor(props) {
    super(props);

    let curProduct, submitTitle;

    if (!!this.props.curProduct) {
      submitTitle = "Сохранить";
      curProduct = this.props.curProduct;
    } else {
      submitTitle = "Добавить";
      curProduct = {
        title: "",
        kk: "",
        protein: "",
        fat: "",
        crbh: ""
      };
    }

    this.state = {
      submitTitle,
      inputs: {
        title: curProduct.title,
        kk: curProduct.kk,
        protein: curProduct.protein,
        fat: curProduct.fat,
        crbh: curProduct.crbh
      }
    };
  }

  private handleOnPressClose = () => {
    this.props.goBack(this.props.navigation);
  };

  private handleOnChangeTITLE = text => {
    this.setState(prevState => ({
      ...prevState,
      inputs: {
        ...prevState.inputs,
        title: text
      }
    }));
  };

  private handleOnChangeKK = text => {
    this.setState(prevState => ({
      ...prevState,
      inputs: {
        ...prevState.inputs,
        kk: text
      }
    }));
  };

  private handleOnChangePROTEIN = text => {
    this.setState(prevState => ({
      ...prevState,
      inputs: {
        ...prevState.inputs,
        protein: text
      }
    }));
  };

  private handleOnChangeFAT = text => {
    this.setState(prevState => ({
      ...prevState,
      inputs: {
        ...prevState.inputs,
        fat: text
      }
    }));
  };

  private handleOnChangeCRBN = text => {
    this.setState(prevState => ({
      ...prevState,
      inputs: {
        ...prevState.inputs,
        crbh: text
      }
    }));
  };

  private handleOnPressSubmit = () => {
    const nav = this.props.navigation;
    const submit = this.props.submit;

    submit(nav, this.state.inputs);
  };

  render() {
    console.log("state", this.state);

    const titleInput = {
      placeholder: "Название",
      onChangeText: this.handleOnChangeTITLE,
      value: this.state.inputs.title,
      inputType: ui.InputType.STRING
    };

    const kkInput = {
      placeholder: "0.0",
      label: "Килокалории",
      onChangeText: this.handleOnChangeKK,
      value: this.state.inputs.kk,
      inputType: ui.InputType.NUMBER
    };

    const proteinInput = {
      placeholder: "0.0",
      label: "Белки",
      onChangeText: this.handleOnChangePROTEIN,
      value: this.state.inputs.protein,
      inputType: ui.InputType.NUMBER
    };

    const fatInput = {
      placeholder: "0.0",
      label: "Жиры",
      onChangeText: this.handleOnChangeFAT,
      value: this.state.inputs.fat,
      inputType: ui.InputType.NUMBER
    };

    const crbhInput = {
      placeholder: "0.0",
      label: "Углеводы",
      onChangeText: this.handleOnChangeCRBN,
      value: this.state.inputs.crbh,
      inputType: ui.InputType.NUMBER
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
        <KeyboardAvoidingView behavior="position" enabled>
          <ui.Input {...titleInput} />
          <ui.Input {...kkInput} />
          <ui.Input {...proteinInput} />
          <ui.Input {...fatInput} />
          <ui.Input {...crbhInput} />
        </KeyboardAvoidingView>
      </Page>
    );
  }
}
