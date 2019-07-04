import NeedProps from '../../../components/needProps/needProps'
import Component, { Dispatch, Props } from './Component'

type MapStateToProps = Props

const mapStateToProps = (state): MapStateToProps => ({})

type MapDispatchToProps = Dispatch

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({})

const headerOptions = {
  headerScreen: null,
}

export default NeedProps(
  mapStateToProps,
  mapDispatchToProps,
  Component,
  headerOptions
)
