import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  products = [
    { "service": "Password Reset", "price": 39.99, "image": "password.png" },
    { "service": "Spyware Removal", "price": 99.99, "image": "spyware.png" },
    { "service": "RAM Upgrade", "price": 129.99, "image": "ram.png" },
    { "service": "Software Installation", "price": 49.99, "image": "software.png" },
    { "service": "Tune-up", "price": 89.99, "image": "tune_up.png" },
    { "service": "Keyboard Cleaning", "price": 45.00, "image": "keyboard.png" },
    { "service": "Disk Clean-up", "price": 149.99, "image": "hard_drive.png" }
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formData) {
    console.log(formData);
  }
}
