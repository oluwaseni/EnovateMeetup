import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeetUpPage } from './meet-up.page';

const routes: Routes = [
  {
    path: '',
    component: MeetUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeetUpPageRoutingModule {}
