import * as React from "react";

import { View, PanResponder, ViewStyle } from "react-native";

export interface Props {
  style?: ViewStyle;
  emptyColor: string;
  backColor: string;
  value: number;
  minValue: number;
  maxValue: number;
  step: number;
}

export interface Dispatch {
  onChangeValue: (v) => void;
}

interface State {
  curY: number;
  k: number;
}

export default class Component extends React.Component<
  Props & Dispatch,
  State
> {
  state = {
    curY: 0,
    k: 0
  };
  componentDidMount = () => {
    const { minValue, maxValue, step, style } = this.props;
    const { height } = style;

    const k = parseInt(height) / (maxValue - minValue);

    this.setState({
      k: k
    });
    console.log("componentDidMount", "k", k, "this.state.k", this.state.k);
  };

  private _panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: evt => {
      this.setState({
        curY: evt.nativeEvent.pageY
      });
      return true;
    },

    onPanResponderMove: evt => {
      let pageY = evt.nativeEvent.pageY;

      const { value } = this.props;
      const h = value - (pageY - this.state.curY) / this.state.k;
      const v = h;

      console.log("h:", h, "v:", v);

      this.handleGesture(v);

      this.setState({
        curY: pageY
      });
    }
  });

  private handleGesture = v => {
    const { onChangeValue } = this.props;
    onChangeValue(v);
  };

  render() {
    const { style, emptyColor, backColor, value } = this.props;

    const caclHeight = (value - this.props.minValue) * this.state.k;

    console.log(
      "render",
      "this.state.k",
      this.state.k,
      "value",
      value,
      caclHeight
    );

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
            height: caclHeight,
            width: style.width
          }}
        />
      </View>
    );
  }
}
