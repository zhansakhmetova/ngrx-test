import {CartState, DetailState} from './model';
import {createReducer, on} from '@ngrx/store';
import * as CartActions from './actions/cart.actions';

export const initialState: CartState = {
  cart: [],
  loading: false,
  error: ''
};

export const initialStateDetails: DetailState = {
  details: null,
  loading: false
};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.loadCart, (state) => ({ ...state, loading: true })),
  on(CartActions.loadCartSuccess, (state, { cart }) => ({ ...state, cart, loading: false })),
  on(CartActions.loadCartError, (state, { error }) => ({ ...state, error, loading: false })),
);

export const detailsReducer = createReducer(
  initialStateDetails,
  on(CartActions.loadDetails, (state) => ({...state, loading: true})),
  on(CartActions.loadDetailsSuccess,(state, {details}) => ({...state, details, loading: false}))
);
// initialStateDetails,
// on(CartActions.loadDetails, (state) => ({...state, loading: true})),
// on(CartActions.loadDetailsSuccess, (state, { details }) => ({
//   ...state,
//   details: {
//     ...state.details,
//     [details.id]: details
//   },
//   loading: false
// })));
