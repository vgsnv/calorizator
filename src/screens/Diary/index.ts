import Component, { Props, Dispatch } from "./Component";
import NeedProps from "../../components/needProps/needProps";

import Header from "./HeaderScreen";

import { DiaryItems } from "../../store/app/diary";
import { Meals } from "../../store/db/meals";

type MapStateToProps = Props;

const getDiaryItems = (meals: Meals, diary: DiaryItems) => {
  return diary.entities.map((item, index) => {
    return meals.entities[item.id];
  });
};

const mapStateToProps = ({ app, db }): MapStateToProps => ({
  diaryItems: getDiaryItems(db.meals, app.diary)
});

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
