import Component, { Props, Dispatch } from "./Component";
import NeedProps from "../../components/needProps/needProps";

import Header from "./HeaderScreen";

import toDiaryEdit from "./thunks/toDiaryEdit";

import { DiaryItems } from "../../store/app/diary";
import { Meals } from "../../store/db/meals";
import { MealItems } from "../../store/db/mealItems";
import { Products } from "../../store/db/products";

type MapStateToProps = Props;

const getDiaryItems = (
  mealItems: MealItems,
  meals: Meals,
  diary: DiaryItems,
  products: Products
) => {
  return diary.entities.map(item => {
    const id = item.id;

    const ChildMeals = Object.keys(meals.entities).reduce((acc, curIdMeal) => {
      const ParentId = meals.entities[curIdMeal].parentId;

      if (!!ParentId && ParentId === id) {
        acc.push(curIdMeal);
      }

      return acc;
    }, []);

    const TotalNutrients = ChildMeals.length
      ? Object.keys(mealItems.entities).reduce(
          (acc, curMealItem) => {
            const {
              mealId: MealId,
              productId: ProductId,
              weight: Weight
            } = mealItems.entities[curMealItem];

            if (ChildMeals.some(element => element === MealId)) {
              const k = Weight / 100;
              acc = {
                totalKK: acc.totalKK + products.entities[ProductId].kk * k,
                totalProtein:
                  acc.totalProtein + products.entities[ProductId].protein * k,
                totalFat: acc.totalFat + products.entities[ProductId].fat * k,
                totalCRBH: acc.totalCRBH + products.entities[ProductId].crbh * k
              };
            }

            return acc;
          },
          {
            totalKK: 0,
            totalProtein: 0,
            totalFat: 0,
            totalCRBH: 0
          }
        )
      : { totalKK: 0, totalProtein: 0, totalFat: 0, totalCRBH: 0 };

    return { ...meals.entities[item.id], ...TotalNutrients };
  });
};

const mapStateToProps = ({ app, db }): MapStateToProps => ({
  diaryItems: getDiaryItems(db.mealItems, db.meals, app.diary, db.products)
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
