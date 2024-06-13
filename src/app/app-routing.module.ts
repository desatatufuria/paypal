import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { HomeComponent } from './home/home.component'; // Suponiendo que tienes un componente Home
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', component: PaymentComponent },
  { path: 'payment-success', component: PaymentSuccessComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
