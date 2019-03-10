import Component, { Props, Dispatch } from "./Component";
import NeedProps from "../../components/needProps/needProps";

import Header from "./HeaderScreen";

import { Meals, getChildMealsId } from "../../store/db/meals";
import {
  getTotalNutrients,
  getMealItemsByMealId
} from "../../store/db/mealItems";

type MapStateToProps = Props;

const getProdutWeightFromMeailItems = (mealItems, mealId) => {
  return Object.keys(mealItems).reduce((acc, id) => {
    const Meal = mealItems[id];

    if (Meal.mealId === mealId) {
      acc = {
        ...acc,
        [Meal.productId]: {
          ...Meal
        }
      };
    }

    return acc;
  }, {});
};

const mergeProductWithWeight = (products, productWeight) => {
  return Object.keys(products).reduce((acc, id) => {
    const Product = products[id];

    acc = [
      ...acc,
      {
        ...Product,
        weight: productWeight[Product.id] ? productWeight[Product.id].weight : 0
      }
    ];

    return acc;
  }, []);
};

const mapStateToProps = ({ app, db }): MapStateToProps => {
  const TotalNutrients = getTotalNutrients(
    [app.portionForm.portionId],
    db.mealItems,
    db.products
  );

  const ProdutWeightFromMeailItems = getProdutWeightFromMeailItems(
    db.mealItems.entities,
    app.portionForm.portionId
  );

  const ProductWithWeight = mergeProductWithWeight(
    db.products.entities,
    ProdutWeightFromMeailItems
  );
  return {
    productWithWeight: ProductWithWeight,
    totalNutrients: TotalNutrients
  };
};

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({});

const headerOptions = {
  headerScreen: Header
};

export default NeedProps(
  mapStateToProps,
  mapDispatchToProps,
  Component,
  headerOptions
);
