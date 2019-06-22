import NeedProps from '../../components/needProps/needProps';
import Component, { Dispatch, Props } from './Component';

import Header from './HeaderScreen';

import toProductsChoose from './thunks/toProductsChoose';

import {
  getMealItemsByMealId,
  getTotalNutrients
} from '../../store/db/mealItems';
import { getChildMealsId, Meals } from '../../store/db/meals';

type MapStateToProps = Props;

const getMealsById = (
  ChildMealsId: string[],
  meals: Meals,
  mealItems,
  products
) =>
  ChildMealsId.map(mealId => {
    return {
      portion: meals.entities[mealId],
      totalNutrients: getTotalNutrients([mealId], mealItems, products)
    };
  });

const mapStateToProps = ({ app, db }): MapStateToProps => {
  const ChildMealsId = getChildMealsId(
    db.meals,
    app.mealsInDiet.selectedDietId
  );

  const ChildMeals = getMealsById(
    ChildMealsId,
    db.meals,
    db.mealItems,
    db.products
  );

  const MealItemsByMealId = getMealItemsByMealId(ChildMealsId, db.mealItems);

  const TotalNutrients = getTotalNutrients(
    ChildMealsId,
    db.mealItems,
    db.products
  );

  return {
    mealsList: ChildMeals,
    mealItemsByMealId: MealItemsByMealId,
    totalNutrients: TotalNutrients,
    products: db.products
  };
};

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  toProductsChoose: (nav, id) => dispatch(toProductsChoose(nav, id))
});

const headerOptions = {
  headerScreen: Header,
  gesturesEnabled: false
};

export default NeedProps(
  mapStateToProps,
  mapDispatchToProps,
  Component,
  headerOptions
);
