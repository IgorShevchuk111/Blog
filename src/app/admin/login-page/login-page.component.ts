import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  // reset material form
  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;

  hide = true;
  form!: FormGroup;
  passwordResponseError = false
  inputResponseError: boolean = false;

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
// Get  Error Subject from authService
    this.authService.getErrorSubject().subscribe(errorMessage => {
      switch (errorMessage) {
        case 'Invalid password':
          this.passwordResponseError = true
          this.inputResponseError = false
          break;

          case 'Wrong email':
          this.inputResponseError = true
          this.passwordResponseError = false
          break;
      
        default:
          this.passwordResponseError = false
          this.inputResponseError = false
          break;
      }
    });
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
// Submit  form login
  submit() {
   if (this.form.invalid) {
    return 
   }
   const user = {...this.form.value}
   this.authService.login(user).subscribe(()=>{
    this.router.navigate(['/admin','posts'])
    this.formDirective.resetForm()
   })
    }
}