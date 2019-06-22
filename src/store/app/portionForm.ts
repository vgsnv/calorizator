export interface PortionForm {
  portionId: string;
}

const PORTIONFORM_ADD_ID = 'DB/PORTIONFORM_ADD_ID';

export const portionFormAddID = (data: string) => ({
  type: PORTIONFORM_ADD_ID,
  data
});

const defaultState: PortionForm = {
  portionId: null
};

export default (prevState: PortionForm = defaultState, action) => {
  switch (action.type) {
    case PORTIONFORM_ADD_ID:
      return {
        portionId: action.data
      };

    default:
      return prevState;
  }
};
