export interface Product {
  id: string;
  title: string;
  kk: string;
  protein: string;
  fat: string;
  crbh: string;
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
      kk: "400.5",
      protein: "4",
      fat: "3",
      crbh: "20"
    },
    "2": {
      id: "2",
      title: "Ягоды",
      kk: "100.52",
      protein: "0",
      fat: "7",
      crbh: "2"
    },
    "3": {
      id: "3",
      title: "Творог",
      kk: "200.5",
      protein: "4",
      fat: "30",
      crbh: "20"
    },
    "4": {
      id: "4",
      title: "Рис",
      kk: "200.5",
      protein: "4",
      fat: "30",
      crbh: "20"
    }
  }
};

export default (prevProducts: Products = defaultProducts, action) => {
  switch (action.type) {
    case PRODUCTS_ADD:
      return {
        ...prevProducts,
        entities: {
          ...prevProducts.entities,
          [action.data.id]: {
            ...action.data
          }
        },
        loading: false,
        error: false
      };

    default:
      return prevProducts;
  }
};
