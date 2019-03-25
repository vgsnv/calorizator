import * as React from "react";

import { Page, MealListContainer } from "./stylesComponents";

import DiaryList, { Props as DiaryItemsList } from "./DiaryList/List";

import { NavigationInjectedProps } from "react-navigation";

export interface Props extends DiaryItemsList {}

export interface Dispatch {
  toMeals: (nav, id) => void;
}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch & NavigationInjectedProps,
  State
> {
  render() {
    const diaryList = {
      dietsItems: this.props.dietsItems,
      toMeals: this.props.toMeals,
      navigation: this.props.navigation
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
