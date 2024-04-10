export const ADD_ITEMS_TO_CART_ACTION = "ADD_ITEMS_TO_CART_ACTION";
export const REMOVE_ITEMS_FROM_CART_ACTION = "REMOVE_ITEMS_FROM_CART_ACTION";
export const SET_QUANTITY_ITEMS_FROM_CART_ACTION = "GET_ITEMS_FROM_CART_ACTION";
export const SET_PRICE = "SET_PRICE";
export const REMOVE_ALL_ITEMS_FROM_CART_ACTION = "REMOVE_ALL_ITEMS_FROM_CART";

export const addItemsToCart = (item) => ({
  type: ADD_ITEMS_TO_CART_ACTION,
  payload: item,
});

export const removeItemsFromCart = (id) => ({
  type: REMOVE_ITEMS_FROM_CART_ACTION,
  payload: id,
});

export const setQuantityItemsInCart = (quantity) => ({
  type: SET_QUANTITY_ITEMS_FROM_CART_ACTION,
  payload: quantity,
});

export const setPrice = (price) => ({
  type: SET_PRICE,
  payload: price,
});


export const removeAllItemsFromCart = () => ({
  type: REMOVE_ALL_ITEMS_FROM_CART_ACTION
});