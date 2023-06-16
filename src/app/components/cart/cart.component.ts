import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Cart, Details, DetailState} from '../../core/';
import {loadCart, loadDetails} from '../../core/actions/cart.actions';
import {selectCart, selectLoading, selectProductDetails, selectProductDetails3} from '../../core/cart.selectors';
import {CartService} from '../../core/services/cart.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProductDetailsComponent} from '../product-details/product-details.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart$!: Observable<Cart[]>;
  loading$!: Observable<boolean>;
  product$!: Observable<any>;

  constructor(private store: Store<{ cart: { cart?: Cart[], loading?: boolean }}>, private modalService: NgbModal) {

  }

  ngOnInit(): void {
    this.store.dispatch(loadCart());
    this.cart$ = this.store.select(selectCart);
    this.loading$ = this.store.select(selectLoading);
  }

  openModal(id: any) {
    const modalRef = this.modalService.open(ProductDetailsComponent);
    this.store.dispatch(loadDetails({ id }));
    this.product$ = this.store.select(selectProductDetails3, {id});
    modalRef.componentInstance.data$  = this.product$;
  }
}
