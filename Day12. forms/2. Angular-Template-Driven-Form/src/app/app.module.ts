import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from'@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/pages/customer/customer.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import{ReactiveFormsModule} from '@angular/forms'
import { SignupComponent } from './components/pages/signup/signup.component';
import { ProductMenuComponent } from './components/pages/product-menu/product-menu.component';
import { OrderProductComponent } from './components/pages/order-product/order-product.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    DashboardComponent,
    SignupComponent,
    ProductMenuComponent,
    OrderProductComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
