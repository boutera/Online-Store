import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../common/item';
import { Itemcategory } from '../common/itemcategory';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseUrl="http://localhost:8080/api/v1/items";
  private categoryUrl="http://localhost:8080/api/v1/itemcategories";
  private categorybyItemUrl="http://localhost:8080/api/v1/category";

  getItems(currentcategoryId: number):Observable<Item[]> {
    const searchUrl=`${this.baseUrl}/search/${currentcategoryId}`;
    return this.http.get<Item[]>(searchUrl);
    
  }
  getAllItems():Observable<Item[]> {
    const searchUrl=`${this.baseUrl}`;
    return this.http.get<Item[]>(searchUrl);
    
  }
  getItemCategories():Observable<Itemcategory[]> {
   
    return this.http.get<Itemcategory[]>(this.categoryUrl);
    
  }
  getItemsBySearch(keyword: string):Observable<Item[]> {
    const searchUrl=`${this.baseUrl}/searchkey/${keyword}`;
    return this.http.get<Item[]>(searchUrl);
    
  }
  getItemsById(id: number):Observable<Item> {
    const searchUrl=`${this.baseUrl}/${id}`;
    return this.http.get<Item>(searchUrl);
    
  }
  getCategoryByItemId(id: number):Observable<Itemcategory> {
    const searchUrl=`${this.categorybyItemUrl}/${id}`;
    return this.http.get<Itemcategory>(searchUrl);
    
  }
 


  constructor(private http:HttpClient) { }
}