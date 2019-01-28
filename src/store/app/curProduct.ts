export interface Product {
  id: string;
  title: string;
  kk: string;
  protein: string;
  fat: string;
  crbh: string;
}

const CURPRODUCT_ADD = "DB/CURPRODUCT_ADD";
const CURPRODUCT_RESET = "DB/CURPRODUCT_RESET";

export const curproductAdd = (data: Product) => ({
  type: CURPRODUCT_ADD,
  data
});

export const curproductReset = () => ({
  type: CURPRODUCT_RESET
});

const defaultProducts: Product = null;

export default (prevProducts: Product = defaultProducts, action) => {
  switch (action.type) {
    case CURPRODUCT_ADD:
      return {
        ...action.data
      };

    case CURPRODUCT_RESET:
      return defaultProducts;

    default:
      return prevProducts;
  }
};
