import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment-success',
  template: `<h1>Payment Success</h1>
             <p>Processing your payment...</p>`
})
export class PaymentSuccessComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const paymentId = params['paymentId'];
      const payerId = params['PayerID'];

      if (paymentId && payerId) {
        this.executePayment(paymentId, payerId);
      }
    });
  }

  executePayment(paymentId: string, payerId: string): void {
    this.http.post('/api/payments/execute-payment', { paymentId, payerId })
      .subscribe(response => {
        console.log('Payment executed successfully', response);
      }, error => {
        console.error('Error executing payment', error);
      });
  }
}
