import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeetUpPageRoutingModule } from './meet-up-routing.module';

import { MeetUpPage } from './meet-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeetUpPageRoutingModule
  ],
  declarations: [MeetUpPage]
})
export class MeetUpPageModule {}
