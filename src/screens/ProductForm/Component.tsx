import * as React from "react";

import { Page, IcnContainer, BtnContainer } from "./stylesComponents";

import * as ui from "../../ui";

import { Image, KeyboardAvoidingView, ScrollView } from "react-native";

import { NavigationInjectedProps } from "react-navigation";

const uuidv1 = require("uuid/v1");

export interface Props {}

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
  inputs: Inputs;
}

const CloseIcon = require("../../assets/Close.png");

export default class Component extends React.Component<
  Props & Dispatch & NavigationInjectedProps,
  State
> {
  static navigationOptions = {
    title: "ПРОДУКТЫ"
  };

  state = {
    inputs: {
      title: "",
      kk: "",
      protein: "",
      fat: "",
      crbh: ""
    }
  };

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

  private handleOnSubmit = () => {
    const nav = this.props.navigation;
    const submit = this.props.submit;

    console.log("state", this.state.inputs);
    submit(nav, {
      id: uuidv1(),
      ...this.state.inputs
    });
  };

  render() {
    console.log("state", this.state);
    const closeButton = {
      onPress: this.handleOnPressClose
    };

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
      inputType: ui.InputType.NUMBER,
      onSubmitEditing: () => console.log("submit")
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

    const SubmitBtn = {
      name: "ДОБАВИТЬ",
      onPress: this.handleOnSubmit
    };

    return (
      <Page>
        <KeyboardAvoidingView behavior="position" enabled>
          <IcnContainer {...closeButton}>
            <Image source={CloseIcon} />
          </IcnContainer>

          <ui.Input {...titleInput} />
          <ui.Input {...kkInput} />
          <ui.Input {...proteinInput} />
          <ui.Input {...fatInput} />
          <ui.Input {...crbhInput} />
        </KeyboardAvoidingView>

        <BtnContainer>
          <ui.Button {...SubmitBtn} />
        </BtnContainer>
      </Page>
    );
  }
}
