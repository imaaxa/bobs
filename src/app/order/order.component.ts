import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers/index';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  products = [
    { "nid": 1, "service": "Password Reset",        "price": 39.99, "src": "password.png" },
    { "nid": 2, "service": "Spyware Removal",       "price": 99.99, "src": "spyware.png" },
    { "nid": 3, "service": "RAM Upgrade",           "price": 129.99,"src": "ram.png" },
    { "nid": 4, "service": "Software Installation", "price": 49.99, "src": "software.png" },
    { "nid": 5, "service": "Tune-up",               "price": 89.99, "src": "tune_up.png" },
    { "nid": 6, "service": "Keyboard Cleaning",     "price": 45.00, "src": "keyboard.png" },
    { "nid": 7, "service": "Disk Clean-up",         "price": 149.99,"src": "hard_drive.png" }
  ];

  tempstore1 = -1;

  constructor( private store: Store<State> ) { }//private store: Store<State>

  ngOnInit() {
  }

  changeOrder(nid) {
    console.log(nid);
    //this.store.dispatch(new AddToOrder(nid));
  }

  onSubmit(formData) {
    console.log(formData);
  }
}
