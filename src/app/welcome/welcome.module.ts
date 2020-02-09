import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomePageRoutingModule } from './welcome-routing.module';

import { WelcomePage } from './welcome.page';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    WelcomePageRoutingModule
  ],
  declarations: [WelcomePage,SlidesComponent, StartComponent],
  exports:[SlidesComponent, StartComponent],
})
export class WelcomePageModule {}
