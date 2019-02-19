import * as React from "react";

import { Page, MealListContainer } from "./stylesComponents";

import DiaryList, { Props as DiaryItemsList } from "./DiaryList/List";

import { NavigationInjectedProps } from "react-navigation";

export interface Props extends DiaryItemsList {}

export interface Dispatch {
  toDiaryEdit: (nav, id) => void;
}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch & NavigationInjectedProps,
  State
> {
  render() {
    const diaryList = {
      diaryItems: this.props.diaryItems,
      toDiaryEdit: this.props.toDiaryEdit,
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
