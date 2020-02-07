import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private fb:FormBuilder, private _router:Router) { }

  ngOnInit() {
  }

  passwordType: string = 'password';
  passwordShown: boolean = false;

  formModel= this.fb.group({
    phoneNumber: ['', Validators.required],
    pin: ['', Validators.required]
  })


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

  signUp(){
    this._router.navigate(['register'])
  }


  login(){
    this._router.navigate(['meet-up'])
  }

}
