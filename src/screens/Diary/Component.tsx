import * as React from "react";

import { Page, MealListContainer } from "./stylesComponents";

import DiaryList from "./DiaryList/List";

import { NavigationInjectedProps } from "react-navigation";

interface DiaryItem {
  id: string;
  title: string;
}

export interface Props {
  diaryItems: Array<DiaryItem>;
}

export interface Dispatch {}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch & NavigationInjectedProps,
  State
> {
  render() {
    const diaryList = {
      diaryItems: this.props.diaryItems
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
