import NeedProps from '../../../components/needProps/needProps'
import Component, { Dispatch, Props } from './Component'

import Header from './HeaderScreen'

import toMealsInDiet from './thunks/toMealsInDiet'

import { DietsItems } from '../../../store/app/diets'
import { getTotalNutrients, MealItems } from '../../../store/db/mealItems'
import { getChildMealsId, Meals } from '../../../store/db/meals'
import { Products } from '../../../store/db/products'

type MapStateToProps = Props

const getDietsItems = (
  diets: DietsItems,
  mealItems: MealItems,
  meals: Meals,
  products: Products
) =>
  diets.entities.map(item => {
    const Id = item.id

    const ChildMeals = getChildMealsId(meals, Id)

    const TotalNutrients = getTotalNutrients(ChildMeals, mealItems, products)

    return {
      ...meals.entities[item.id],
      ...TotalNutrients,
    }
  })

const mapStateToProps = ({ app, db }): MapStateToProps => ({
  dietsItems: getDietsItems(app.diets, db.mealItems, db.meals, db.products),
})

type MapDispatchToProps = Dispatch

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  toMealsInDiet: (nav, id) => dispatch(toMealsInDiet(nav, id)),
})

const headerOptions = {
  headerScreen: Header,
}

export default NeedProps(
  mapStateToProps,
  mapDispatchToProps,
  Component,
  headerOptions
)
