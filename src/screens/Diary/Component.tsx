import * as React from "react";

import { Page, MealListContainer } from "./stylesComponents";

import DiaryList from "./DiaryList/List";

import { NavigationInjectedProps } from "react-navigation";

export interface Props {}

export interface Dispatch {}

interface State {}

const list = [
  {
    id: 1,
    Title: "Понедельник",
    kk: 0,
    protein: 0.0,
    fat: 0.0,
    crbh: 0.0
  },
  {
    id: 2,
    Title: "Вторник",
    kk: 0,
    protein: 0.0,
    fat: 0.0,
    crbh: 0.0
  },
  {
    id: 3,
    Title: "Среда",
    kk: 0,
    protein: 0.0,
    fat: 0.0,
    crbh: 0.0
  }
];

export default class Component extends React.Component<
  Props & Dispatch & NavigationInjectedProps,
  State
> {
  render() {
    const diaryList = {
      list: list
    };
    return (
      <Page>
        <MealListContainer>
          <DiaryList {...diaryList}>Hello</DiaryList>
        </MealListContainer>
      </Page>
    );
  }
}
