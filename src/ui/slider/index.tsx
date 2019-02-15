import * as React from "react";

import { View, PanResponder, ViewStyle } from "react-native";

export interface Props {
  style?: ViewStyle;
  emptyColor: string;
  backColor: string;
  value: number;
  minValue: number;
  maxValue: number;
}

export interface Dispatch {
  onChangeValue: (v) => void;
}

interface State {
  heightTouchOnPage: number;
  scaleUnit: number;
}

export default class Component extends React.Component<
  Props & Dispatch,
  State
> {
  state = {
    heightTouchOnPage: 0,
    scaleUnit: 0
  };

  componentDidMount = () => {
    const { minValue, maxValue, style } = this.props;
    const { height } = style;

    this.setState({
      scaleUnit: parseInt(height) / (maxValue - minValue)
    });
  };

  private _panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: e => {
      this.setState({ heightTouchOnPage: e.nativeEvent.pageY });
      return true;
    },

    onPanResponderMove: e => {
      const pageY = e.nativeEvent.pageY;

      const { value, onChangeValue } = this.props;
      const { heightTouchOnPage, scaleUnit } = this.state;

      onChangeValue(value - (pageY - heightTouchOnPage) / scaleUnit);

      this.setState({
        heightTouchOnPage: pageY
      });
    }
  });

  render() {
    const { style, emptyColor, backColor, value, minValue } = this.props;
    const { scaleUnit } = this.state;

    const heightOfFullSpace = (value - minValue) * scaleUnit;

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
            height: heightOfFullSpace,
            width: style.width
          }}
        />
      </View>
    );
  }
}
