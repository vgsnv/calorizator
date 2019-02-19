import * as React from "react";

import { Page, ModalHeader, BtnContainer, TxtButton } from "./stylesComponents";

import { NavigationInjectedProps } from "react-navigation";

import * as ui from "../../ui";

export interface Props {}

export interface Dispatch {
  goBack: (nav) => void;
  submit: (nav, data) => void;
}

interface State {
  diaryTitle: string;
}

export default class Component extends React.Component<
  Props & Dispatch & NavigationInjectedProps,
  State
> {
  state = {
    diaryTitle: ""
  };

  private handleOnPressClose = () => {
    this.props.goBack(this.props.navigation);
  };

  private handleOnPressSubmit = () => {
    const nav = this.props.navigation;
    const submit = this.props.submit;

    submit(nav, {
      title: this.state.diaryTitle
    });
  };

  private handleOnChangeTITLE = text => {
    this.setState(prevState => ({
      diaryTitle: text
    }));
  };

  render() {
    const closeButton = {
      onPress: this.handleOnPressClose
    };

    const SubmitBtn = {
      onPress: this.handleOnPressSubmit
    };

    const diaryTitle = {
      placeholder: "Название",
      onChangeText: this.handleOnChangeTITLE,
      value: this.state.diaryTitle,
      inputType: ui.InputType.STRING
    };

    return (
      <Page>
        <ModalHeader>
          <BtnContainer {...closeButton}>
            <TxtButton>Отмена</TxtButton>
          </BtnContainer>
          <BtnContainer {...SubmitBtn}>
            <TxtButton>Готово</TxtButton>
          </BtnContainer>
        </ModalHeader>
        <ui.Input {...diaryTitle} />
      </Page>
    );
  }
}
