import * as React from 'react'
import { connect } from 'react-redux'

import Header from '../../components/header'

import toProductsFormAdd from './thunks/toProductsFormAdd'

import { ImageSourcePropType } from 'react-native'

const rightImg = require('../../assets/Add.png')

interface Props {
  title: string
  leftImg: ImageSourcePropType
  rightImg: ImageSourcePropType
  navigation: any
}

interface Dispatch {
  toProductsFormAdd: (nav) => void
}

interface State {}

class ComponentHeader extends React.Component<Props & Dispatch, State> {
  public render() {
    return (
      <Header
        {...{
          title: this.props.title,
          leftButton: null,
          rightButton: {
            image: this.props.rightImg,
            onPress: this.onPressRightButton,
          },
        }}
      />
    )
  }
  private onPressRightButton = () => {
    this.props.toProductsFormAdd(this.props.navigation)
  }
}

const headerStateToProps = () => ({
  title: 'Продукты',
  rightImg,
})

const headerDispatchToProps = dispatch => ({
  toProductsFormAdd: nav => dispatch(toProductsFormAdd(nav)),
})

export default connect(
  headerStateToProps,
  headerDispatchToProps
)(ComponentHeader)
