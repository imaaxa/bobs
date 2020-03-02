import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment} from '../../environments/environment';
import { orderReducer, OrderState } from './order.reducer';

export interface State {
  selectedProducts: OrderState
}

export const reducers: ActionReducerMap<State> = {
  selectedProducts: orderReducer
}

export const MetaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
