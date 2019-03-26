import * as React from "react";

import {
  PortionContainer,
  TilteContainer,
  TitleText,
  ProductsContainer,
  Product,
  ProductTitle,
  ProductValue,
  TotalNutrientsContainter,
  TotalNutrientsItem,
  TotalNutrientsText,
  Left,
  Right,
  BigText,
  ChooseText
} from "./stylesComponents";

import {
  MealItemsByMealIdItem,
  TotalNutrients as ITotalNutrients
} from "../../../store/db/mealItems";
import { Products } from "../../../store/db/products";

export interface Props {
  id: string;
  title: string;
  totalNutrients: ITotalNutrients;
  products: Products;
  mealItemsByMealIdItem: MealItemsByMealIdItem;
}

export interface Dispatch {
  onPressItem: (id: string) => void;
}

interface State {}

export default class extends React.PureComponent<Props & Dispatch, State> {
  private onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  private renderProduct = (id, title, weight) => {
    return (
      <Product key={id}>
        <ProductTitle>{title}</ProductTitle>
        <ProductValue>{`${weight}г`}</ProductValue>
      </Product>
    );
  };

  private renderProducts = () => {
    const { mealItemsByMealIdItem, products } = this.props;
    const ProductEntities = products.entities;

    return Object.keys(mealItemsByMealIdItem).map(key => {
      const MealItem = mealItemsByMealIdItem[key];

      const ProductId = MealItem.productId;
      const ProductTitle = ProductEntities[ProductId].title;
      const ProductWeight = MealItem.weight;

      return (
        <ProductsContainer key={MealItem.id}>
          {this.renderProduct(ProductId, ProductTitle, ProductWeight)}
        </ProductsContainer>
      );
    });
  };

  render() {
    const { title, mealItemsByMealIdItem, totalNutrients } = this.props;
    console.log("this.props", this.props);
    return (
      <PortionContainer
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 3, height: 1 },
          shadowOpacity: 0.16,
          shadowRadius: 6
        }}
        onPress={this.onPress}
      >
        <TilteContainer>
          <Left>
            <TitleText>{title}</TitleText>
            {mealItemsByMealIdItem && (
              <TotalNutrientsContainter>
                <TotalNutrientsItem>
                  <TotalNutrientsText>
                    {totalNutrients.totalProtein.toFixed(0)}
                  </TotalNutrientsText>
                </TotalNutrientsItem>

                <TotalNutrientsItem>
                  <TotalNutrientsText>
                    {totalNutrients.totalFat.toFixed(0)}
                  </TotalNutrientsText>
                </TotalNutrientsItem>

                <TotalNutrientsItem>
                  <TotalNutrientsText>
                    {totalNutrients.totalCRBH.toFixed(0)}
                  </TotalNutrientsText>
                </TotalNutrientsItem>
              </TotalNutrientsContainter>
            )}
          </Left>
          {mealItemsByMealIdItem && (
            <Right>
              <BigText>{totalNutrients.totalKK.toFixed(0)}</BigText>
            </Right>
          )}
        </TilteContainer>

        {mealItemsByMealIdItem && this.renderProducts()}

        {!mealItemsByMealIdItem && <ChooseText>Выбрать продукты</ChooseText>}
      </PortionContainer>
    );
  }
}
