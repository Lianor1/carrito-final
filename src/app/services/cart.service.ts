import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: any[] = [];
  constructor() { }

  //Método para agregar productos al carrito
  addToCart(productos: any) {
    this.cartItems.push(productos);
    return this.cartItems;
  }

  //Método para obtener los productos en el carrito
  getCartItems() {
    return this.cartItems;
  }
}
