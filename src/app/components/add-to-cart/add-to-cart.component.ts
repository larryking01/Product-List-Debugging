import { Component, Input, inject } from '@angular/core';
import { DessertInterface } from '../../../shared/models';
import { CartServiceService } from '../../services/cart-service.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.scss'
})   
export class AddToCartComponent {
  isAddedToCart = false;
  quantity = 1;
  cartService = inject( CartServiceService)

  // @Output() addToCartEvent = new EventEmitter<any>()
  @Input() itemToAdd!: DessertInterface


  addToCart() {
    // this.addToCartEvent.emit()
    this.isAddedToCart = true;
    this.cartService.addToCart(this.itemToAdd)

  }

  decreaseProductItem() {
    if (this.quantity < 1) {
      this.isAddedToCart = false;
    }
    this.quantity--;
  }

  increaseProductItem() {
    ++this.quantity;
  }

};
