export enum ProductFormMode {
  EDIT = "EDIT",
  ADD = "ADD"
}

export interface Product {
  id: string;
  mode: ProductFormMode;
  title: string;
  kk: string;
  protein: string;
  fat: string;
  crbh: string;
}

const CURPRODUCT_ADD = "DB/CURPRODUCT_ADD";
const CURPRODUCT_EDIT = "DB/CURPRODUCT_EDIT";
const CURPRODUCT_RESET = "DB/CURPRODUCT_RESET";

export const curproductAdd = (id: string) => ({
  type: CURPRODUCT_ADD,
  data: id
});

export const curproductEdit = (data: Product) => ({
  type: CURPRODUCT_EDIT,
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
        id: action.data,
        title: "",
        kk: "",
        protein: "",
        fat: "",
        crbh: "",
        mode: ProductFormMode.ADD
      };

    case CURPRODUCT_EDIT:
      return {
        ...action.data,
        mode: ProductFormMode.EDIT
      };

    case CURPRODUCT_RESET:
      return defaultProducts;

    default:
      return prevProducts;
  }
};
