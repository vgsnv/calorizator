import * as React from 'react'
import { connect } from 'react-redux'

import Header from '../../../components/header'

import goBack from './thunks/goBack'
import openActionSheet from './thunks/openActionSheet'

import { ImageSourcePropType } from 'react-native'

const leftImg = require('../../../assets/GoBack.png')
const rightImg = require('../../../assets/ActionSheet.png')

interface Props {
  title: string
  leftImg: ImageSourcePropType
  rightImg: ImageSourcePropType
  navigation: any
}

interface Dispatch {
  goBack: (nav) => void
  openActionSheet: (nav) => void
}

interface State {}

class ComponentHeader extends React.Component<Props & Dispatch, State> {
  public render() {
    return (
      <Header
        {...{
          title: this.props.title,
          leftButton: {
            image: this.props.leftImg,
            onPress: this.onPressLeftButton,
          },
          rightButton: {
            image: this.props.rightImg,
            onPress: this.onPressRightButton,
          },
        }}
      />
    )
  }
  private onPressLeftButton = () => {
    this.props.goBack(this.props.navigation)
  }

  private onPressRightButton = () => {
    this.props.openActionSheet(this.props.navigation)
  }
}

const headerStateToProps = ({ app, db }) => ({
  title: db.meals.entities[app.mealsInDiet.selectedDietId].title,
  leftImg,
  rightImg,
})

const headerDispatchToProps = dispatch => ({
  goBack: nav => dispatch(goBack(nav)),
  openActionSheet: nav => dispatch(openActionSheet(nav)),
})

export default connect(
  headerStateToProps,
  headerDispatchToProps
)(ComponentHeader)
