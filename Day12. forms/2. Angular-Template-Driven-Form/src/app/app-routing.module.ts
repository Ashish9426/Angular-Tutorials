import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthoGuard } from './authentication/autho.guard';
import { CustomerComponent } from './components/pages/customer/customer.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { OrderProductComponent } from './components/pages/order-product/order-product.component';
import { ProductMenuComponent } from './components/pages/product-menu/product-menu.component';
import {SignupComponent} from './components/pages/signup/signup.component'
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'',component:CustomerComponent},
  {path:'customer',component:CustomerComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthoGuard],children:[
    {path:'product-menu',component:ProductMenuComponent},
    {path:'order-product',component:OrderProductComponent}
  ]},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
