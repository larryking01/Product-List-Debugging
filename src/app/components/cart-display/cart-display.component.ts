import { Component, inject, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CartServiceService } from '../../services/cart-service.service';
import { DessertInterface } from '../../../shared/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-display',
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './cart-display.component.html',
  styleUrl: './cart-display.component.scss'
})
export class CartDisplayComponent implements OnInit {
  // @Input() cartItemToAdd: DessertInterface
  cartService = inject( CartServiceService )
  LocalCartsArray: DessertInterface[] = []


  constructor() {

      // this.addItemToCart(this.cartItemToAdd! )
  }


  ngOnInit(): void {
    this.cartService.CartsArray$.subscribe({
      next: ( data ) => this.LocalCartsArray = data
    })

    console.log("local carts array = ", this.LocalCartsArray)
  }


  // ngOnChanges(changes: SimpleChanges): void {
  //   if(changes['cartItemToAdd'] && changes['cartItemToAdd'].currentValue) {
  //     console.log("from carts display, cartItem to add is ", this.cartItemToAdd)
  //     this.addItemToCart(this.cartItemToAdd! )
  //   }
  // }

  addItemToCart( cartItem: DessertInterface ) {
    this.cartService.addToCart( cartItem )
  }

}
