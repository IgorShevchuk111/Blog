import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  hide = true;

  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    })
  }
  
// Error massage for Email
  getErrorMessageEmail() {
    if (this.form.get('email')?.hasError('required')) {
      return 'You must enter a Email';
    }
    return this.form.get('email')?.hasError('email') ? 'Not a valid email' : '';
  }
  // Error massage for Password
  getErrorMessagePassword() {
    if (this.form.get('password')?.hasError('required')) {
      return 'You must enter a password';
    } else  if( this.form.get('password')?.hasError('minlength')){
      return `Current length ${this.form.get('password')?.getError('minlength').actualLength}, required length 
      ${this.form.get('password')?.getError('minlength').requiredLength}`
    }
    return null
  }

  submit() {
   if (this.form.invalid) {
    return
   }
    }
}
