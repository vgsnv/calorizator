import * as React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/header';

import toDietChange from './thunks/toDietChange';

import { ImageSourcePropType } from 'react-native';

const rightImg = require('../../assets/Add.png');

interface Props {
  title: string;
  leftImg: ImageSourcePropType;
  rightImg: ImageSourcePropType;
  navigation: any;
}

interface Dispatch {
  toDietChange: (nav) => void;
}

interface State {}

class componentHeader extends React.Component<Props & Dispatch, State> {

  public render() {
    return (
      <Header
        {...{
          title: this.props.title,
          leftButton: null,

          rightButton: {
            image: this.props.rightImg,
            onPress: this.onPressRightButton
          }
        }}
      />
    );
  }
  private onPressRightButton = () => {
    this.props.toDietChange(this.props.navigation);
  };
}

const headerStateToProps = state => ({
  title: 'Рационы',
  rightImg
});

const headerDispatchToProps = dispatch => ({
  toDietChange: nav => dispatch(toDietChange(nav))
});

export default connect(
  headerStateToProps,
  headerDispatchToProps
)(componentHeader);
