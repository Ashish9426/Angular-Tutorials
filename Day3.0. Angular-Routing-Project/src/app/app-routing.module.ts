import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { EmployeesListComponent } from './components/pages/employees-list/employees-list.component';
import { EmployeesComponent } from './components/pages/employees/employees.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MobileRechargeComponent } from './components/pages/mobile-recharge/mobile-recharge.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';
import { PaymentTransferComponent } from './components/pages/payment-transfer/payment-transfer.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { TicketBookingComponent } from './components/pages/ticket-booking/ticket-booking.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'employees', component:EmployeesComponent,children:[
    {path:'', component:EmployeesListComponent},
    {path:'search-employee/:id', component:EmployeesListComponent}
  ]},
  {path:'services', component:ServicesComponent, children:[
    {path:'', component:TicketBookingComponent},
    {path:'ticket-booking', component:TicketBookingComponent},
    {path:'mobile-recharge', component:MobileRechargeComponent},
    {path:'payment-transfer', component:PaymentTransferComponent},
    
  ]},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'**', component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
