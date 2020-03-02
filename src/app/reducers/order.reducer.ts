import { OrderActionTypes, OrderActions } from '../actions/order.actions';
import { Action } from '@ngrx/store';


export interface OrderState {
  orders: Array<string>
}

export const initialState: OrderState = {
  orders: []
};

export function orderReducer(state = initialState, action: OrderActions): OrderState {
  switch (action.type) {

    case OrderActionTypes.AddToOrder:
      return {...state, orders: [...state.orders, action.productIndex]};

    case OrderActionTypes.RemoveFromOrder:
      return {...state, orders: state.orders
        .filter(item => item !== action.productIndex)};

    default:
      return state;
  }
}
