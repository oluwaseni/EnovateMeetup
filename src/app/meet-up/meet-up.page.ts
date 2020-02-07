import { Component, OnInit } from '@angular/core';
import { EnovateService } from '../services/enovate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meet-up',
  templateUrl: './meet-up.page.html',
  styleUrls: ['./meet-up.page.scss'],
})
export class MeetUpPage implements OnInit {

  constructor( private _service:EnovateService, private _route:Router) { }

  listAll:any;
  ngOnInit() {
    
    this.callLists()
  }

  logout(){
    sessionStorage.clear()
    this._route.navigate(['login'])
  }


  callLists(){
    this._service.list().subscribe(res=> {
      this.listAll = res['data'];
      console.log(this.listAll);
      
    });
  }


  create(){
    this._route.navigate(['create'])
  }

  edit(){
    this._route.navigate(['create'])
  }
  


  }
