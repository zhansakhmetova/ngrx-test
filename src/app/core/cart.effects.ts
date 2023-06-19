
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {loadCart, loadCartError, loadCartSuccess, loadDetails, loadDetailsSuccess} from './actions/cart.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {CartService} from './cart.service';
import {of} from 'rxjs';
import {DetailState} from './model';
import {Store} from '@ngrx/store';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions, private cartService: CartService, private store: Store<DetailState[]>, private http: HttpClient) {
  }

  loadCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCart),
      mergeMap(() => this.cartService.getCart().pipe(
        map((cart) => loadCartSuccess({ cart })),
        catchError((error) => of(loadCartError({error: error.message})))
      ))
    )
  );

  loadProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadDetails),
      mergeMap((action) =>
        this.cartService.getProductByID(action.id).pipe(
          map((details) => loadDetailsSuccess({details})),
        )
      )
    );
  });


  // loadProduct$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(loadDetails),
  //     withLatestFrom(this.store.select(getProductById)),
  //     filter(([action, product]) => !product),
  //     switchMap(([action, product]) =>
  //       this.http.get(https://fakestoreapi.com/products/${action.id}).pipe(
  //         map((details: Details[]) => loadDetailsSuccess({ details }))
  //       )
  //     )
  //   )
  // );



  // loadProduct$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(loadDetails),
  //     withLatestFrom(this.store.select(selectProductDetails3)),
  //     mergeMap((action) =>
  //       this.cartService.getProductByID(action.id).pipe(
  //         map((details) => loadDetailsSuccess({ details })),
  //       )
  //     )
  //   );
  // });


  // loadProductDetails$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(loadDetails),
  //     withLatestFrom(this.store.select(selectProductDetailsLoadedById)), // Check if product details are already loaded
  //     filter(([action, loaded]) => !loaded), // Only execute if details are not already loaded
  //   )
  // );
}
