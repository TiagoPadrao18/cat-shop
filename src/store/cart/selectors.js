import { get } from "lodash";

export const getCart = (state) => get(state, "cart.itemsInCart");
export const getPrice = (state) => get(state, "cart.totalPrice");
export const getQuantityInCart = (state) => get(state, "cart.quantityInCart");
