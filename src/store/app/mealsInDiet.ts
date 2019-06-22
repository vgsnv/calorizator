export interface MealsInDiet {
  selectedDietId: string;
}

const UPD_SELECTEDDIET = 'APP/UPD_SELECTEDDIET';

export const updSelectedDiet = (data: string) => ({
  type: UPD_SELECTEDDIET,
  data
});

const defaultProducts: MealsInDiet = {
  selectedDietId: null
};

export default (prevState: MealsInDiet = defaultProducts, action) => {
  switch (action.type) {
    case UPD_SELECTEDDIET:
      return {
        selectedDietId: action.data
      };

    default:
      return prevState;
  }
};
