import { Component, EventEmitter, inject, OnInit } from '@angular/core';
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
  cartService = inject( CartServiceService )
  LocalCartsArray: DessertInterface[] = []

  showModal = false;

  // @Output() modalActive = new EventEmitter<boolean>(false)



  constructor() {  }


  ngOnInit(): void {
    this.cartService.CartsArray$.subscribe({
      next: ( data ) => this.LocalCartsArray = data
    })

  }


  openModal() {
    this.showModal = true
  }

  closeModal() {
    this.showModal = false
  }

  stopEventPropagation(event: Event) {
    event.stopPropagation()
  }

  grandTotal(cartsArray: DessertInterface[]) {
    return cartsArray.reduce((sum, item) => sum + item.total, 0 )
  }


}
