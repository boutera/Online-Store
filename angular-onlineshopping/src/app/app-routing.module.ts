import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';
import { ItemdetailComponent } from './components/itemdetail/itemdetail.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
{path:'items',component:ItemsListComponent},
{path:'home',component:ItemsListComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'checkout',component:CheckoutComponent},


{path:'category/:id',component:ItemsListComponent},
{path:'cart-details',component:CartDetailsComponent},
{path:'searchitem/:id',component:ItemdetailComponent},
{path:'search/:keyword',component:ItemsListComponent},
{path:'contact',component:ContactComponent},
{path:'about',component:AboutComponent},
{path:'',redirectTo:'/home', pathMatch:'full'},
{path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





