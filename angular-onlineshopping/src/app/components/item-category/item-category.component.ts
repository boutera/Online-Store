import { Component, OnInit } from '@angular/core';
import { Itemcategory } from 'src/app/common/itemcategory';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.css']
})
export class ItemCategoryComponent implements OnInit {
  itemcategories:Itemcategory[];

  constructor(private itemService:ItemService) { }

  ngOnInit() {
    this.listItemCategories();
  }
  listItemCategories(){
    this.itemService.getItemCategories().subscribe(data=>this.itemcategories=data);
  }

}
