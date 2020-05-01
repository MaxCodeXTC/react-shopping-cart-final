import { CREATE_ORDER, CLEAR_ORDER, FETCH_ORDERS } from "../actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_ORDERS:
      return { ...state, items: action.payload, orders: action.payload };
    case CREATE_ORDER:
      return {
        order: action.payload.order,
      };

    case CLEAR_ORDER:
      return { order: null };
    default:
      return state;
  }
}
