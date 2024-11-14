## Proyecto Carrito de Compras

Este proyecto implementa un contador de carrito en una aplicación utilizando Angular e Ionic. En este ejemplo, se muestra cómo se puede agregar un contador dinámico en la cabecera de la página y actualizar el número de productos en el carrito.

## Tecnologías utilizadas
- [Angular](https://angular.dev/)
- [Ionic](https://ionicframework.com/)
## Estructura del proyecto
1. En el archivo home.page.html, hemos colocado un contador de carrito que muestra el número de productos añadidos al carrito.
 
### home.page.html
```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title>Blank</ion-title>

     <ion-buttons slot="end"><ion-button routerLink="/carrito"><ion-icon name="cart-outline"></ion-icon>
        <ion-badge>{{cartCount}}</ion-badge>
      </ion-button>
    </ion-buttons>

  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <div>
        <ion-card-content >
          <ion-button  expand="block" (click)="addToCart(productos)">Añadir al carrito</ion-button>
        </ion-card-content>
  </div>
</ion-content>
```
## Creamos nuestra carpeta  servicio 
```
ionic g service services/cart
```
- nos dirigimos a la carpeta services

### cart.service.ts 
``` cart.services.ts
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
```
## Nos dirigimos a nuestra carpeta home del proyecto
### home.page.ts
```home.page.ts
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
```






