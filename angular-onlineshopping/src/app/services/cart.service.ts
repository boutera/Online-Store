import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cartItems:CartItem[]=[];
  totalPrice:Subject<number>=new Subject<number>();
  totalQuantity:Subject<number>=new Subject<number>();


  constructor() { }


  addToCart(theCartItem:CartItem){
    let alreadyExitsInCart:boolean=false;
    let existingCartItem :CartItem=undefined;
    if(this.cartItems.length>0){
    existingCartItem= this.cartItems.find(tempcartItem=>tempcartItem.id===theCartItem.id);
    }
    alreadyExitsInCart=(existingCartItem!=undefined);
    if(alreadyExitsInCart){
      existingCartItem.quantity++;
      
    }
    else{
      this.cartItems.push(theCartItem);
    }
    this.caluculateTotalPrice();

  }
  caluculateTotalPrice(){
let totalPricevalue:number=0;
let totalQuantityvalue:number=0;
for(let currentCartItem of this.cartItems){
  totalPricevalue+=currentCartItem.unitprice*currentCartItem.quantity;
  totalQuantityvalue+=currentCartItem.quantity;

}
this.totalPrice.next(totalPricevalue);
this.totalQuantity.next(totalQuantityvalue);

  }
  decrementQuantity(cartitem: CartItem) {
cartitem.quantity--;
if(cartitem.quantity==0){
  this.remove(cartitem);
}
else{
this.caluculateTotalPrice();
}

  }
  remove(cartitem:CartItem){
    const itemindex=this.cartItems.findIndex(tempcartitem=>tempcartitem.id===cartitem.id);
    if(itemindex>-1){
      this.cartItems.splice(itemindex,1);
      this.caluculateTotalPrice();
    }
  }



}
