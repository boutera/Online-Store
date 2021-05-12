import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemService } from './services/item.service';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ItemCategoryComponent } from './components/item-category/item-category.component';
import { SearchComponentComponent } from './components/search-component/search-component.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ItemdetailComponent } from './components/itemdetail/itemdetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwPaginationModule } from 'jw-angular-pagination';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { LoginComponent } from './components/login/login.component';
import { CartService } from './services/cart.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { SignupComponent } from './components/signup/signup.component';
import { CheckoutComponent } from './components/checkout/checkout.component'; 
import { CheckoutService } from './services/checkout.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    PagenotfoundComponent,
    ItemCategoryComponent,
    SearchComponentComponent,
    ContactComponent,
    AboutComponent,
    ItemdetailComponent,
    CartStatusComponent,
    LoginComponent,
    CartDetailsComponent,
    SignupComponent,
    CheckoutComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwPaginationModule,
    NgxSpinnerModule,
BrowserAnimationsModule,
ReactiveFormsModule
    
       
    
  ],
  providers: [ItemService,CartService,NgxSpinnerService,CheckoutService],
  bootstrap: [AppComponent],
})
export class AppModule { }
