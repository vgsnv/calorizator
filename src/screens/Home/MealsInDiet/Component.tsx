import * as React from 'react'

import { Page } from './stylesComponents'

import MealsList, { MealItem } from './MealsList/List'

import {
  MealItemsByMealId,
  TotalNutrients as ITotalNutrients,
} from '../../../store/db/mealItems'
import { Products } from '../../../store/db/products'

import { NavigationInjectedProps } from 'react-navigation'

export interface Props {
  totalNutrients: ITotalNutrients
  mealsList: MealItem[]
  mealItemsByMealId: MealItemsByMealId
  products: Products
}

export interface Dispatch {
  toProductsChoose: (nav, id) => void
}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch & NavigationInjectedProps,
  State
> {
  public render() {
    const mealsList = {
      mealsList: this.props.mealsList,
      mealItemsByMealId: this.props.mealItemsByMealId,
      products: this.props.products,
      totalNutrients: this.props.totalNutrients,
      toProductsChoose: this.props.toProductsChoose,
      navigation: this.props.navigation,
    }

    return (
      <Page>
        <MealsList {...mealsList} />
      </Page>
    )
  }
}
