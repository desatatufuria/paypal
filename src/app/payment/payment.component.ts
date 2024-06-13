import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import QRCode from 'qrcode';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  qrCodeUrl: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.createPayment();
  }

  createPayment(): void {
    this.http.post<{ id: string, approvalUrl: string }>('https://localhost:7130/api/Payments/create-payment', { total: 20.00 })
      .subscribe(response => {
        this.generateQRCode(response.approvalUrl);
      });
  }

  generateQRCode(url: string): void {
    QRCode.toDataURL(url, (err: Error, url: string) => {
      if (err) {
        console.error(err);
        return;
      }
      this.qrCodeUrl = url;
    });
  }
}
