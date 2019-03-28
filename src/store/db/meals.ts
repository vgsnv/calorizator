export interface Meal {
  id: string;
  parentId: string;
  title: string;
}

export interface Meals {
  entities: {
    [key: string]: Meal;
  };
}

const MEALS_ADD = "DB/MEALS_ADD";

export const mealsAdd = data => ({
  type: MEALS_ADD,
  data
});

const defaultMeals: Meals = {
  entities: {
    "1art": {
      id: "1art",
      parentId: null,
      title: "Понедельник"
    },
    "12art": {
      id: "12art",
      parentId: "1art",
      title: "Завтрак"
    },
    "13art": {
      id: "13art",
      parentId: "1art",
      title: "Обед"
    },
    "14art": {
      id: "14art",
      parentId: "1art",
      title: "Ужин"
    },
    "4uyt": {
      id: "4uyt",
      parentId: null,
      title: "Вторник"
    },
    "4uyt11": {
      id: "4uyt11",
      parentId: "4uyt",
      title: "Завтрак"
    },
    "2oip": {
      id: "2oip",
      parentId: null,
      title: "Среда"
    }
  }
};

export default (prevState: Meals = defaultMeals, action) => {
  switch (action.type) {
    case MEALS_ADD:
      return {
        entities: {
          ...prevState.entities,
          [action.data.id]: {
            ...action.data
          }
        }
      };

    default:
      return prevState;
  }
};

export const getChildMealsId = (meals: Meals, idMeal: string): Array<string> =>
  Object.keys(meals.entities).reduce((acc, id) => {
    if (meals.entities[id].parentId === idMeal) {
      acc.push(id);
    }
    return acc;
  }, []);
