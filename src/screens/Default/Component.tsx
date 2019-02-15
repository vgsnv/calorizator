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
    s1: {
      value: 50
    },
    s2: {
      value: 45
    }
  };

  private changeS1 = value => {
    this.setState(() => {
      return {
        s1: { value: parseFloat(value) }
      };
    });
  };

  private changeS2 = value => {
    this.setState(() => {
      return {
        s2: { value: parseFloat(value) }
      };
    });
  };

  render() {
    // console.log("this value", this.state.value);
    const s1Text = this.state.s1.value.toFixed(1);
    const s2Text = this.state.s2.value.toFixed(1);

    return (
      <Page>
        <TitleContainer>
          <Title>DEFAULT</Title>
        </TitleContainer>

        <View
          style={{
            flexDirection: "row",
            flex: 2,
            justifyContent: "space-around"
          }}
        >
          <Text
            style={{
              fontSize: 20
            }}
          >
            {s1Text}
          </Text>
          <Text
            style={{
              fontSize: 20
            }}
          >
            {s2Text}
          </Text>
        </View>

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
              value={this.state.s1.value}
              onChangeValue={this.changeS1}
              maxValue={100}
              minValue={0}
              step={1}
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
              value={this.state.s2.value}
              onChangeValue={this.changeS2}
              maxValue={70}
              minValue={20}
              step={1}
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
