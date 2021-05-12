import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
   name:'';

  constructor(private router:Router) { }

  ngOnInit() {
  }
searchitems(keyword:string){
  this.name='';
  if(keyword){
   
  this.router.navigateByUrl('/search/'+keyword);
  }
  else{
    this.router.navigateByUrl(this.router.url);
  }
}
}
