import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnovateService {

  reqRes = 'https://reqres.in/api'

  constructor(private http: HttpClient) { }



  register(body: any) {


    return this.http.post(this.reqRes + '/register', body);
  }


  login(body: any) {

    return this.http.post(this.reqRes + '/login', body);
  }


  create(body: any) {

    return this.http.post(this.reqRes + '/users', body);
  }

  list() {

    return this.http.get(this.reqRes + '/users?page=2');
  }

  delete() {
    return this.http.delete(this.reqRes + '/users/2');
  }

}