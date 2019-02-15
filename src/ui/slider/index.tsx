import * as React from "react";

import { View, PanResponder, ViewStyle } from "react-native";

export interface Props {
  style?: ViewStyle;
  emptyColor: string;
  backColor: string;
  value: number;
}

export interface Dispatch {
  onChangeValue: (v) => void;
}

interface State {
  minValue: number;
  maxValue: number;
  step: number;
  value: number;
  emptyColor: string;
  backColor: string;
}

export default class Component extends React.Component<
  Props & Dispatch,
  State
> {
  state = {
    minValue: 0,
    maxValue: 100,
    step: 1,
    value: 25,
    emptyColor: "yellow",
    backColor: "red"
  };

  curY: number = 0;

  private _panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: evt => {
      this.curY = evt.nativeEvent.pageY;
      return true;
    },

    onPanResponderMove: evt => {
      let p = {
        pageY: evt.nativeEvent.pageY
      };

      const a = this.curY;

      this.curY = p.pageY;

      const { value } = this.props;

      this.handleGesture(value - (p.pageY - a));
    }
  });

  private handleGesture = v => {
    const { onChangeValue } = this.props;
    onChangeValue(v);
  };

  render() {
    const { style, emptyColor, backColor, value } = this.props;

    return (
      <View
        style={[
          {
            backgroundColor: emptyColor,
            overflow: "hidden"
          },
          style
        ]}
        {...this._panResponder.panHandlers}
      >
        <View
          style={{
            zIndex: 2,
            position: "absolute",
            backgroundColor: backColor,
            bottom: 0,
            height: value,
            width: style.width
          }}
        />
      </View>
    );
  }
}
