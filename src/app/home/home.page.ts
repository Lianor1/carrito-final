import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cartCount: number = 0;
  productos: any[] = [
    
  ];
  constructor(private cartService: CartService) {}
  //Método para agregar productos al carrito
  addToCart(productos: any ): void {
  //Agregamos el producto al carrito
    this.cartService.addToCart(productos);
  //Actualizamos el número de productos en el carrito
    this.cartCount = this.cartService.getCartItems().length;
  }
}
