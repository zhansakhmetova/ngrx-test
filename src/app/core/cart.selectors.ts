import {CartState, DetailState} from './model';
import { createSelector} from '@ngrx/store';

export const selectCartState = (state: { cart: CartState }) => state.cart;
export const selectProductState = (state: {details: DetailState}) => state.details;


export const selectCart = createSelector(
  selectCartState,
  (state: CartState) => state
);
export const selectLoading = createSelector(
  selectCartState,
  (state: CartState) => state.loading
);

export const selectProductDetails = createSelector(
  selectProductState,
  state => state.details
);



