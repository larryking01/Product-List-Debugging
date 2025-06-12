import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DessertInterface } from '../../shared/models';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private CartsArray = new BehaviorSubject<DessertInterface[]>([])
  CartsArray$ = this.CartsArray.asObservable()


  constructor() { }


  addToCart( cartItem: DessertInterface ) {
    console.log('cart item added in service')
    const currentCartItems = this.CartsArray.getValue();
    const updatedCartItems = [...currentCartItems, cartItem];
    this.CartsArray.next( updatedCartItems );
  }




}
