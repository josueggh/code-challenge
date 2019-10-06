import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { TeamCardComponent } from '../component/team-card/team-card.component';
import { AlertComponent } from '../component/alert/alert.component';
import { HeaderModule } from '../component/header/header.module';
import { MemberComponent } from '../component/member/member.component';
import { TabsModule } from '../component/tabs/tabs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    TabsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, TeamCardComponent, AlertComponent, MemberComponent  ]
})
export class HomePageModule {}
