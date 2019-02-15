import * as React from "react";
import { SliderContainer } from "./stylesComponents";

import { View, Text } from "react-native";

import * as ui from "../../../ui";

export interface Props {
  value: number;
  labelName: string;
  emptyColor: string;
  backColor: string;
  minValue: number;
  maxValue: number;
}

export interface Dispatch {
  onChangeValue: (value: number) => void;
}

interface State {}

export default class extends React.PureComponent<Props & Dispatch, State> {
  render() {
    const { value, labelName, onChangeValue } = this.props;

    return (
      <View
        style={{
          height: 360,
          flexDirection: "column"
        }}
      >
        <View
          style={{
            flex: 1,
            width: 80
          }}
        >
          <Text
            style={{
              fontSize: 27,
              color: this.props.backColor,
              textAlign: "right",
              fontWeight: "600"
            }}
          >
            {value.toString()}
          </Text>

          <Text
            style={{
              fontSize: 12,
              color: this.props.backColor,
              textAlign: "right",
              fontWeight: "600"
            }}
          >
            {this.props.labelName}
          </Text>
        </View>

        <SliderContainer
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 1, height: 3 },
            shadowOpacity: 0.16,
            shadowRadius: 4,
            height: 300
          }}
        >
          <ui.Slider
            emptyColor={this.props.emptyColor}
            backColor={this.props.backColor}
            value={value}
            onChangeValue={onChangeValue}
            maxValue={this.props.maxValue}
            minValue={this.props.minValue}
            style={{
              borderRadius: 8,
              height: 300,
              width: 80
            }}
          />
        </SliderContainer>
      </View>
    );
  }
}
