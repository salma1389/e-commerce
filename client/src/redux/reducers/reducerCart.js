import { CARD_ADD_ITEM, CARD_REMOVE_ITEM } from "../actionTypes/actionTypeCart";

const init = {
    cartItems:[]
  };



export const cartReducer = (state = init, {type,payload}) => {
  switch (type) {
    case CARD_ADD_ITEM:
      const item = payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CARD_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== payload),
      };
    default:
      return state;
  }
};
