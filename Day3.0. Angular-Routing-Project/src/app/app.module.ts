import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { ChangebgDirective } from './tools/utils/changebg.directive';
import { FormatgenderPipe } from './tools/utils/formatgender.pipe';
import { FormatnamePipe } from './tools/utils/formatname.pipe';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { EmployeesComponent } from './components/pages/employees/employees.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';
import { MobileRechargeComponent } from './components/pages/mobile-recharge/mobile-recharge.component';
import { TicketBookingComponent } from './components/pages/ticket-booking/ticket-booking.component';
import { PaymentTransferComponent } from './components/pages/payment-transfer/payment-transfer.component';
import { EmployeesListComponent } from './components/pages/employees-list/employees-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ChangebgDirective,
    FormatgenderPipe,
    FormatnamePipe,
    AboutComponent,
    ContactComponent,
    EmployeesComponent,
    ServicesComponent,
    PagenotfoundComponent,
    MobileRechargeComponent,
    TicketBookingComponent,
    PaymentTransferComponent,
    EmployeesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
