import Component, { Props, Dispatch } from "./Component";
import NeedProps from "../../components/needProps/needProps";

import Header from "./HeaderScreen";

import toMeals from "./thunks/toMeals";

import { DietsItems } from "../../store/app/diets";
import { Meals, getChildMealsId } from "../../store/db/meals";
import { MealItems, getTotalNutrients } from "../../store/db/mealItems";
import { Products } from "../../store/db/products";

type MapStateToProps = Props;

const getDietsItems = (
  diary: DietsItems,
  mealItems: MealItems,
  meals: Meals,
  products: Products
) =>
  diary.entities.map(item => {
    const Id = item.id;

    const ChildMeals = getChildMealsId(meals, Id);

    const TotalNutrients = getTotalNutrients(ChildMeals, mealItems, products);

    return {
      ...meals.entities[item.id],
      ...TotalNutrients
    };
  });

const mapStateToProps = ({ app, db }): MapStateToProps => ({
  dietsItems: getDietsItems(app.diets, db.mealItems, db.meals, db.products)
});

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  toMeals: (nav, id) => dispatch(toMeals(nav, id))
});

const headerOptions = {
  headerScreen: Header
};

export default NeedProps(
  mapStateToProps,
  mapDispatchToProps,
  Component,
  headerOptions
);
