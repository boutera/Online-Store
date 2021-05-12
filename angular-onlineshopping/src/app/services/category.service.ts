import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itemcategory } from '../common/itemcategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
private baseUrl="http://localhost:8080/api/v1/items"
  constructor(private http:HttpClient) { }
}
