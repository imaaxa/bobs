import { Action } from '@ngrx/store';

export enum OrderActionTypes {
  AddToOrder    = '[Order] Add to Order',
  RemoveFromOrder = '[Order] Remove to Order'
}

export class AddToOrder implements Action {
  readonly type = OrderActionTypes.AddToOrder;

  constructor(public productIndex: string) {}
}

export class RemoveFromOrder implements Action {
  readonly type = OrderActionTypes.RemoveFromOrder;

  constructor(public productIndex: string) {}
}

export type OrderActions = AddToOrder | RemoveFromOrder;
