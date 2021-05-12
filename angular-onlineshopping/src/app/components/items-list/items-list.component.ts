import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CartItem } from 'src/app/common/cart-item';
import { Item } from 'src/app/common/item';
import { CartService } from 'src/app/services/cart.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-grid.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  currentcategoryId: number;
  searchMode: boolean;
  /* pageOfItems:Array<Item>;
  pageSize:number=6; */

  items:Item[]
  constructor(private itemservice: ItemService, private _activateroute: ActivatedRoute
    ,private cartservice :CartService,private ngxspinnerservice:NgxSpinnerService) { }

  ngOnInit() {
    this._activateroute.paramMap.subscribe(() => this.getAllItems());

  }
  /* pageClick(pageOfItems:Array<Item>){
    this.pageOfItems=pageOfItems;
  } */
  getAllItems() {
    this.ngxspinnerservice.show();
    this.searchMode = this._activateroute.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchItems();
    }
    else {
      this.handleListItems();
    }
   setTimeout(()=>{this.ngxspinnerservice.hide()},500);

  }
  handleListItems() {
    const hasCategoryId: boolean = this._activateroute.snapshot.paramMap.has("id")
    if (hasCategoryId) {
      this.currentcategoryId = parseInt(this._activateroute.snapshot.paramMap.get("id"));
    }
    else {
      this.itemservice.getAllItems().subscribe(data =>
        this.items = data)
      }
    this.itemservice.getItems(this.currentcategoryId).subscribe(data =>{
      this.items = data})

  }
  handleSearchItems() {
   const keyword:string= this._activateroute.snapshot.paramMap.get('keyword');
   this.itemservice.getItemsBySearch(keyword)
   .subscribe(data=>this.items=data)

  }
  addToCartO(item:Item){
    const cartItem=new CartItem(item);
this.cartservice.addToCart(cartItem);    
  }

}
