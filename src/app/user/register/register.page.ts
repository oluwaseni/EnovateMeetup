import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { EnovateService } from 'src/app/services/enovate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private fb:FormBuilder, private _router:Router, private _service:EnovateService) { }

  ngOnInit() {
  }

  spinner = false;
  incorrect = false;
  incorrects = false;
  passwordType: string = 'password';
  passwordShown: boolean = false;

  formModel= this.fb.group({
    fullName: [''],
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
      if(fb.get('pin').value != confirmPinCtrl.value){
        confirmPinCtrl.setErrors({passwordMismatch:true})
      }
      else{
        confirmPinCtrl.setErrors(null);
      }
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

  registration(){
    this.spinner = true;
    var body = {
      email: this.formModel.value.fullName,
      password: this.formModel.value.pins.pin,
    
    }

    console.log(body)

    this._service.register(body).subscribe(
      res =>{
        
       console.log(res)
       this.spinner = false;
       this._router.navigate(['login'])
      },
      err =>
      {
        if(err.status == 400){
          this.incorrect=true
          this.spinner = false;
        }
        else{
        
        this.incorrects=true
        console.log(err);
        this.spinner = false;
        }
      });
      
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
