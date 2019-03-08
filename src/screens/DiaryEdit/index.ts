import Component, { Props, Dispatch } from "./Component";
import NeedProps from "../../components/needProps/needProps";

import Header from "./HeaderScreen";

import { Meals } from "../../store/db/meals";

type MapStateToProps = Props;

const getMeals = (id, meals) =>
  Object.keys(meals.entities).reduce((acc, curIdMeal) => {
    const ParentId = meals.entities[curIdMeal].parentId;

    if (!!ParentId && ParentId === id) {
      acc.push(meals.entities[curIdMeal]);
    }

    return acc;
  }, []);

const mapStateToProps = ({ app, db }): MapStateToProps => ({
  //TOFO тут надо понять что передавать
  mealsList: getMeals(app.diaryEdit.diaryItemId, db.meals)
});

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
