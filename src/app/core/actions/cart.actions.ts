import {createAction, props} from '@ngrx/store';
import {Cart, Details} from '../model';

export const loadCart = createAction( '[Cart] Load Carts');

export const loadCartSuccess = createAction(
  '[Cart] Load Cart Success',
  props<{ cart: Cart[] }>()
);

export const loadCartError = createAction(
  '[Cart] Load Cart Error',
  props<{ error: string }>()
);

export const loadDetails = createAction(
  '[Product Details] Load Details',
  props<{ id: number }>()
);

export const loadDetailsSuccess = createAction(
  '[Product Details] Load Details Success',
  props<{details: Details}>()
);
