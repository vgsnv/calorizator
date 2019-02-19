export interface MealItem {
  id: string;
  productId: string;
  mealId: string;
  weight: number;
}

export interface MealItems {
  entities: {
    [key: string]: MealItem;
  };
}

const defaultMealItems: MealItems = {
  entities: {
    "189art11": {
      id: "189art11",
      productId: "1",
      mealId: "12art",
      weight: 80
    },
    "189art12": {
      id: "189art12",
      productId: "6",
      mealId: "12art",
      weight: 30
    },
    "277art11": {
      id: "277art11",
      productId: "1",
      mealId: "13art",
      weight: 24
    },
    "277art12": {
      id: "277art12",
      productId: "3",
      mealId: "13art",
      weight: 50
    },
    "477art11": {
      id: "477art11",
      productId: "3",
      mealId: "4uyt11",
      weight: 100
    },
    "477art12": {
      id: "477art12",
      productId: "1",
      mealId: "4uyt11",
      weight: 10
    }
  }
};

export default (prevState: MealItems = defaultMealItems, action) => {
  switch (action.type) {
    default:
      return prevState;
  }
};
