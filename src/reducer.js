export const ADD_PROCESSOR = "ADD_PROCESSOR";
export const ADD_MEMORY = "ADD_MEMORY";
export const ADD_GRAPHICS = "ADD_GRAPHICS";
export const ADD_STORAGE = "ADD_STORAGE";

export const initialState = {
  productTotal: 239900,
  processorCost: 0,
  memoryCost: 0,
  graphicCardCost: 0,
  storageCost: 0,
};

export const getBasketTotal = (...items) => {
  let calculatedPrice = items?.reduce((total, curr) => {
    return total + curr;
  }, 0);

  return initialState.productTotal + calculatedPrice;
};

export const getEMI = (principal) => {
  let amount = parseInt(principal.replace(/\D/g, ""));
  let interest = (amount * (13 * 0.01)) / 12;

  let payment = (amount / 12 + interest).toFixed();

  payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return payment;
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_PROCESSOR:
      return {
        ...state,
        processorCost: action.payload,
      };
    case ADD_MEMORY:
      return {
        ...state,
        memoryCost: action.payload,
      };
    case ADD_GRAPHICS:
      return {
        ...state,
        graphicCardCost: action.payload,
      };
    case ADD_STORAGE:
      return {
        ...state,
        storageCost: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
