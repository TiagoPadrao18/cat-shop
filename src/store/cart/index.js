import {
  ADD_ITEMS_TO_CART_ACTION,
  REMOVE_ITEMS_FROM_CART_ACTION,
  REMOVE_ALL_ITEMS_FROM_CART_ACTION,
  SET_QUANTITY_ITEMS_FROM_CART_ACTION,
  SET_PRICE,
} from "./actions";

export const initialState = {
  itemsInCart: [],
  quantityInCart: 0,
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEMS_TO_CART_ACTION:
      return {
        ...state,
        itemsInCart: [...state.itemsInCart, action.payload],
      };

    case REMOVE_ITEMS_FROM_CART_ACTION:
      return {
        ...state,
        itemsInCart: state.itemsInCart.filter(
          (item) => item.id !== action.payload
        ),
      };
      case REMOVE_ALL_ITEMS_FROM_CART_ACTION:
        return {
         ...state,
          itemsInCart: [],
          quantityInCart: 0,
          totalPrice: 0,
        };

    case SET_QUANTITY_ITEMS_FROM_CART_ACTION:
      return {
        ...state,
        quantityInCart: action.payload,
      };
    case SET_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
