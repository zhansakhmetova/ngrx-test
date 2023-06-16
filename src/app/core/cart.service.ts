import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Cart, Details} from './model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private details: Details[] = [];

  constructor(private http: HttpClient) { }

  getCart(): Observable<Cart[]> {
    return this.http.get<Cart[]>(`https://fakestoreapi.com/carts/`).pipe();
  }

  getProductByID(id: number): Observable<Details> {
    const product = this.details.find(p => p.id === id);
    if (product) {
      return of(product);
    } else {
      return this.http.get<Details>(`https://fakestoreapi.com/products/${id}`).pipe(
      map(data => {
        this.details.push(data);
        return data;
      })
    );
    }
  }
}
