import * as React from "react";

import { Slider, View } from "react-native";

export interface Props {}

export interface Dispatch {}

interface State {
  value: number;
}

const sliderControllerImg = require("../../assets/pointer.png");

export default class Component extends React.Component<
  Props & Dispatch,
  State
> {
  state = {
    value: 50
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
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 1, height: 3 },
          shadowOpacity: 0.16,
          shadowRadius: 4
        }}
      >
        <View
          style={{
            overflow: "hidden",
            borderRadius: 16,
            flexDirection: "row",
            width: 72,
            height: 300
          }}
        >
          <View
            style={{
              zIndex: 2,
              position: "absolute",
              backgroundColor: "#A9C6D5",
              bottom: 0,
              height: (this.state.value / 100) * 300,
              width: 72
            }}
          />
          <Slider
            thumbImage={sliderControllerImg}
            minimumTrackTintColor="transparent"
            maximumTrackTintColor="transparent"
            thumbTintColor="transparent"
            style={{
              borderRadius: 16,
              width: 300,
              backgroundColor: "#EAF8FF",
              height: 72,
              marginTop: 300 / 2 - 72 / 2,
              marginLeft: -300 / 2 + 72 / 2,
              transform: [{ rotateZ: "-90deg" }]
            }}
            step={1}
            minimumValue={0}
            maximumValue={100}
            onValueChange={this.change}
            value={this.state.value}
          />
        </View>
      </View>
    );
  }
}
