import NeedProps from '../../components/needProps/needProps'
import Component, { Dispatch, Props } from './Component'

import onLoginFinished from './thunks/onLoginFinished'

type MapStateToProps = Props

const mapStateToProps = (state): MapStateToProps => ({})

type MapDispatchToProps = Dispatch

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  onLoginFinished: nav => dispatch(onLoginFinished(nav)),
})

const headerOptions = {
  headerScreen: null,
}

export default NeedProps(
  mapStateToProps,
  mapDispatchToProps,
  Component,
  headerOptions
)
