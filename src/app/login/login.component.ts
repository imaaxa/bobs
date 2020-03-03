import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // FormGroup object
  myForm: FormGroup;

  // Add the FormGroup object
  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      // Defalut field values and validators
      userName: ['', [
        Validators.required
      ]],
      passWord: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!?@#$%^&+=])([a-zA-Z0-9!?@#$%^&+=]+){8,}$')
      ]]
    });
  }

  // Submit handler
  onSubmit() {
    console.log(this.myForm.value.userName);
    console.log(this.myForm.value.passWord);
  }
}
