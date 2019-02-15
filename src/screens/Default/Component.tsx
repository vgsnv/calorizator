import * as React from "react";

import {
  Page,
  TitleContainer,
  Title,
  SliderContainer
} from "./stylesComponents";

import * as ui from "../../ui";

import { View, Text } from "react-native";

import { NavigationInjectedProps } from "react-navigation";

export interface Props {}

export interface Dispatch {}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch & NavigationInjectedProps,
  State
> {
  static navigationOptions = {
    header: null
  };

  state = {
    value: 20
  };

  private change = value => {
    this.setState(() => {
      return {
        value: parseFloat(value)
      };
    });
  };

  render() {
    return (
      <Page>
        <TitleContainer>
          <Title>DEFAULT</Title>
        </TitleContainer>

        <View
          style={{
            flexDirection: "row",
            flex: 5
          }}
        >
          <SliderContainer
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 1, height: 3 },
              shadowOpacity: 0.16,
              shadowRadius: 4
            }}
          >
            <ui.Slider
              emptyColor={"#E8F8F5"}
              backColor={"#A9C6D5"}
              value={this.state.value}
              onChangeValue={this.change}
              style={{
                borderRadius: 16,
                height: 400,
                width: 50
              }}
            />
          </SliderContainer>

          <SliderContainer
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 1, height: 3 },
              shadowOpacity: 0.16,
              shadowRadius: 4
            }}
          >
            <ui.Slider
              emptyColor={"yellow"}
              backColor={"red"}
              value={300}
              onChangeValue={v => console.log(v)}
              style={{
                borderRadius: 32,
                height: 400,
                width: 100
              }}
            />
          </SliderContainer>
        </View>
      </Page>
    );
  }
}
