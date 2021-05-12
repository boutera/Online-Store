import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  cartItems:CartItem[]=[];
totalPrice:number=0;
totalQuantity:number=0;

  constructor(private cartservice:CartService) { }

  ngOnInit() {
    this.cartDetails();

  }
  cartDetails(){
    this.cartItems=this.cartservice.cartItems;
   this.cartservice.totalPrice.subscribe(data=>this.totalPrice=data);
   this.cartservice.totalQuantity.subscribe(data=>this.totalQuantity=data);
   this.cartservice.caluculateTotalPrice();

  }
increment(cartitem:CartItem){
this.cartservice.addToCart(cartitem);
}
decrement(cartitem:CartItem){
  this.cartservice.decrementQuantity(cartitem);
  
}
remove(cartitem:CartItem){
this.cartservice.remove(cartitem);
}

}
