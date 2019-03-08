import * as React from "react";

import { Page, TitleContainer, Title } from "./stylesComponents";

import { FlatList, View, Text } from "react-native";

import { Meal } from "../../store/db/meals";

import { NavigationInjectedProps } from "react-navigation";

export interface Props {
  mealsList: Array<Meal>;
}

export interface Dispatch {}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch & NavigationInjectedProps,
  State
> {
  private keyExtractor = item => item.id;

  private renderItem = item => {
    console.log("item", item);
    return (
      <View>
        <Text>{item.id}</Text>
      </View>
    );
  };

  render() {
    console.log("this.props", this.props);
    return (
      <Page>
        <TitleContainer>
          <FlatList
            data={this.props.mealsList}
            extraData={this.state}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        </TitleContainer>
      </Page>
    );
  }
}
