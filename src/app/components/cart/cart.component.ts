import { Component, OnInit } from '@angular/core';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';
import {CartState, Details, DetailState} from '../../core/model';
import {loadCart, loadDetails} from '../../core/actions/cart.actions';
import {selectCart, selectProductDetails} from '../../core/cart.selectors';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProductDetailsComponent} from '../details/details.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartState$!: Observable<CartState>;
  product$!: Observable<Details | null | undefined>;

  constructor(private store: Store<{ cart: CartState , details: DetailState}>, private modalService: NgbModal) {

  }

  ngOnInit(): void {
    this.cartState$ = this.store.pipe(select(selectCart));
    this.store.dispatch(loadCart());
  }

  openModal(id: number) {
    const modalRef = this.modalService.open(ProductDetailsComponent);
    this.store.dispatch(loadDetails({ id }));
    this.product$ = this.store.pipe(select(selectProductDetails));
    modalRef.componentInstance.data$  = this.product$;
  }
}
