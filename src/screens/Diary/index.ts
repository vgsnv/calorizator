import Component, { Props, Dispatch } from "./Component";
import NeedProps from "../../components/needProps/needProps";

import Header from "./HeaderScreen";

import toDiaryEdit from "./thunks/toDiaryEdit";

import { DiaryItems } from "../../store/app/diary";
import { Meals, getChildMealsId } from "../../store/db/meals";
import { MealItems, getTotalNutrients } from "../../store/db/mealItems";
import { Products } from "../../store/db/products";

type MapStateToProps = Props;

const getDiaryItems = (
  diary: DiaryItems,
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
  diaryItems: getDiaryItems(app.diary, db.mealItems, db.meals, db.products)
});

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  toDiaryEdit: (nav, id) => dispatch(toDiaryEdit(nav, id))
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
