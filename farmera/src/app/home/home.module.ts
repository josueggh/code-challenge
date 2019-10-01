import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { TeamCardComponent } from '../component/team-card/team-card.component';
import { AlertComponent } from '../component/alert/alert.component';
import { HeaderModule } from '../component/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, TeamCardComponent, AlertComponent ]
})
export class HomePageModule {}
