import { Products } from './products';

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
    '189art11': {
      id: '189art11',
      productId: '1',
      mealId: '12art',
      weight: 80
    },
    '189art12': {
      id: '189art12',
      productId: '6',
      mealId: '12art',
      weight: 30
    },
    '277art11': {
      id: '277art11',
      productId: '1',
      mealId: '13art',
      weight: 24
    },
    '277art12': {
      id: '277art12',
      productId: '3',
      mealId: '13art',
      weight: 50
    },
    '477art11': {
      id: '477art11',
      productId: '3',
      mealId: '4uyt11',
      weight: 100
    },
    '477art12': {
      id: '477art12',
      productId: '1',
      mealId: '4uyt11',
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

export interface MealItemsByMealIdItem {
  [key: string]: MealItem;
}

export interface MealItemsByMealId {
  [key: string]: MealItemsByMealIdItem;
}

export const getMealItemsByMealId = (
  mealsId: string[],
  portions: MealItems
): MealItemsByMealId => {
  const portionsEntities = portions.entities;
  const defaultMeals = {};

  return mealsId.length
    ? Object.keys(portionsEntities).reduce((acc, id) => {
        const meal = portionsEntities[id];

        if (mealsId.includes(meal.mealId)) {
          if (acc[meal.mealId]) {
            acc[meal.mealId] = {
              ...acc[meal.mealId],
              [meal.id]: { ...meal }
            };
          } else {
            acc = {
              ...acc,
              [meal.mealId]: {
                [meal.id]: { ...meal }
              }
            };
          }
        }

        return acc;
      }, defaultMeals)
    : defaultMeals;
};

export interface TotalNutrients {
  totalKK: number;
  totalProtein: number;
  totalFat: number;
  totalCRBH: number;
}

export const getTotalNutrients = (
  mealsId: string[],
  portions: MealItems,
  products: Products
): TotalNutrients => {
  const portionsEntities = portions.entities;
  const productsEntities = products.entities;

  const defaultTotalNutrients: TotalNutrients = {
    totalKK: 0,
    totalProtein: 0,
    totalFat: 0,
    totalCRBH: 0
  };

  return mealsId.length
    ? Object.keys(portionsEntities).reduce((acc, id) => {
        const {
          mealId: MealId,
          productId: ProductId,
          weight: Weight
        } = portionsEntities[id];

        if (mealsId.includes(MealId)) {
          const k = Weight / 100;
          acc = {
            totalKK: acc.totalKK + productsEntities[ProductId].kk * k,
            totalProtein:
              acc.totalProtein + productsEntities[ProductId].protein * k,
            totalFat: acc.totalFat + productsEntities[ProductId].fat * k,
            totalCRBH: acc.totalCRBH + productsEntities[ProductId].crbh * k
          };
        }

        return acc;
      }, defaultTotalNutrients)
    : defaultTotalNutrients;
};
