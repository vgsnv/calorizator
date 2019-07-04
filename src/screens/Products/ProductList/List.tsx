import * as React from 'react'

import Item from './Item'

import { FlatList } from 'react-native'

import { Product } from '../../../store/db/products'

export interface Props {
  products: Product[]
  navigation: any
}

export interface Dispatch {
  toProductsFormToEdit: (nav, id) => void
}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch,
  State
> {
  public render() {
    return (
      <FlatList
        data={this.props.products}
        extraData={this.state}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    )
  }
  private keyExtractor = item => item.id

  private onPressItem = (id: string) => {
    this.props.toProductsFormToEdit(this.props.navigation, id)
  }

  private renderItem = ({ item }) => {
    const itemProps = {
      id: item.id,
      title: item.title,
      kk: item.kk,
      protein: item.protein,
      fat: item.fat,
      crbh: item.crbh,
      onPressItem: this.onPressItem,
    }
    return <Item {...itemProps} />
  }
}
