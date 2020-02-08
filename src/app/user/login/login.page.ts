import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EnovateService } from 'src/app/services/enovate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private fb: FormBuilder, private _router: Router, private _service: EnovateService) { }

  ngOnInit() {
    if (sessionStorage.getItem('token') != null) {
      this._router.navigate(['meet-up'])
    }
  }

  spinner = false;
  incorrect = false;
  incorrects = false;
  passwordType: string = 'password';
  passwordShown: boolean = false;

  formModel = this.fb.group({
    phoneNumber: ['', Validators.required],
    pin: ['', Validators.required]
  })


  togglePassword() {
    if (this.passwordShown) {
      this.passwordShown = false;
      this.passwordType = 'password';
    }
    else {
      this.passwordShown = true;
      this.passwordType = 'text'
    }
  }

  signUp() {
    this._router.navigate(['register'])
  }


  logins() {
    this.spinner = true;
    var body = {
      email: this.formModel.value.phoneNumber,
      password: this.formModel.value.pin,

    }

    console.log(body)

    this._service.login(body).subscribe(
      (res: any) => {
        // this.toastr.success("Login Successful", "successful");
        sessionStorage.setItem('token', res.token);
        console.log(res)
        this.spinner = false;
        this._router.navigate(['meet-up'])
      },
      err => {
        if (err.status == 400) {
          this.incorrect = true;
          this.spinner = false;
        }
        else {
          console.log(err);
          this.spinner = false;
          this.incorrects = true;
        }
      });

  }



  login() {
    this._router.navigate(['meet-up'])
  }

}
