export interface Product {
  id: string;
  title: string;
  kk: number;
  protein: number;
  fat: number;
  crbh: number;
}

export interface Products {
  loading: boolean;
  error: boolean;
  entities: {
    [key: string]: Product;
  };
}

const CATEGORIES_LOAD = "DB/CATEGORIES_LOAD";
const PRODUCTS_ADD = "DB/PRODUCTS_ADD";

export const categoriesLoad = () => ({
  type: CATEGORIES_LOAD
});

export const productsAdd = data => ({
  type: PRODUCTS_ADD,
  data
});

const defaultProducts: Products = {
  loading: false,
  error: false,
  entities: {
    "1": {
      id: "1",
      title: "Гречка",
      kk: 70,
      protein: 4,
      fat: 3,
      crbh: 20
    },
    "2": {
      id: "2",
      title: "Ягоды",
      kk: 80.52,
      protein: 0,
      fat: 7,
      crbh: 20
    },
    "3": {
      id: "3",
      title: "Творог",
      kk: 20.5,
      protein: 4,
      fat: 30,
      crbh: 3
    },
    "4": {
      id: "4",
      title: "Рис",
      kk: 200.5,
      protein: 4,
      fat: 30,
      crbh: 4
    },
    "5": {
      id: "5",
      title: "Куриные грудки",
      kk: 70,
      protein: 25,
      fat: 3,
      crbh: 2
    },
    "6": {
      id: "6",
      title: "Овсянка",
      kk: 40,
      protein: 5,
      fat: 0,
      crbh: 4
    }
  }
};

export default (prevState: Products = defaultProducts, action) => {
  switch (action.type) {
    case PRODUCTS_ADD:
      return {
        ...prevState,
        entities: {
          ...prevState.entities,
          [action.data.id]: {
            ...action.data
          }
        },
        loading: false,
        error: false
      };

    default:
      return prevState;
  }
};
