import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private fb:FormBuilder, private _router:Router) { }

  ngOnInit() {
  }


  
  passwordType: string = 'password';
  passwordShown: boolean = false;

  formModel= this.fb.group({
    fullName: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    pins: this.fb.group({
      pin: ['', [Validators.required, Validators.minLength(4)]],
      confirmPin: ['', [Validators.required]],
    },
    {validator: this.comparePins})
   
  });



  comparePins(fb:FormGroup){
    let confirmPinCtrl = fb.get('confirmPin');

    if(confirmPinCtrl.errors == null || 'passwordMismatch' in confirmPinCtrl.errors){
      if(fb.get('pin').value!= confirmPinCtrl.value)
        confirmPinCtrl.setErrors({passwordMismatch:true});
      else
        confirmPinCtrl.setErrors(null);
    }
  }


  togglePassword(){
    if(this.passwordShown){
      this.passwordShown = false;
      this.passwordType = 'password';
    }
    else{
      this.passwordShown = true;
      this.passwordType = 'text'
    }
  }


  signIn(){
    this._router.navigate(['login'])
  }


    // Error handling
    errorHandl(error) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
   }

}
