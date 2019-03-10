import Component, { Props, Dispatch } from "./Component";
import NeedProps from "../../components/needProps/needProps";

import Header from "./HeaderScreen";

import { Meal, Meals, getChildMealsId } from "../../store/db/meals";
import {
  getTotalNutrients,
  getMealItemsByMealId
} from "../../store/db/mealItems";

type MapStateToProps = Props;

const getMealsById = (
  ChildMealsId: Array<string>,
  meals: Meals,
  mealItems,
  products
) =>
  ChildMealsId.map(mealId => {
    console.log(getTotalNutrients([mealId], mealItems, products));
    return {
      portion: meals.entities[mealId],
      totalNutrients: getTotalNutrients([mealId], mealItems, products)
    };
  });

const mapStateToProps = ({ app, db }): MapStateToProps => {
  const ChildMealsId = getChildMealsId(db.meals, app.diaryEdit.diaryItemId);

  const ChildMeals = getMealsById(
    ChildMealsId,
    db.meals,
    db.mealItems,
    db.products
  );

  const MealItemsByMealId = getMealItemsByMealId(ChildMealsId, db.mealItems);

  console.log("MealItemsByMealId", ChildMeals, MealItemsByMealId);

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

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({});

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
