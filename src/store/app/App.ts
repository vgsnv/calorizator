export const appStart = () => ({
  type: 'APP_START'
});

export const appStop = () => ({
  type: 'APP_STOP'
});

const reducer = (state = { ready: true }, action) => {
  switch (action.type) {
    case 'APP_START':
      return {
        ...state,
        ready: true
      };
    case 'APP_STOP':
      return {
        ...state,
        ready: false
      };

    default:
      return state;
  }
};

export default reducer;
