import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Item } from 'src/app/common/item';
import { Itemcategory } from 'src/app/common/itemcategory';
import { CartService } from 'src/app/services/cart.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.css']
})
export class ItemdetailComponent implements OnInit {
itemid:number;
category:Itemcategory;
item:Item;
  constructor(private _activatedroute:ActivatedRoute ,private itemservice:ItemService,private cartservice:CartService) { }

  ngOnInit() {
    this.itemid=parseInt(this._activatedroute.snapshot.paramMap.get('id'));
    this.itemservice.getCategoryByItemId(this.itemid).subscribe(data=>this.category=data);
    this.itemservice.getItemsById(this.itemid).subscribe(data=>this.item=data);


    
  }
  addToCart(){
    const cartItem=new CartItem(this.item);
    this.cartservice.addToCart(cartItem);
  }

}
