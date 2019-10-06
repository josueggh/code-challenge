import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LogbookPage } from './logbook.page';
import { HeaderModule } from '../component/header/header.module';
import { TabsModule } from '../component/tabs/tabs.module';

const routes: Routes = [
  {
    path: '',
    component: LogbookPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    TabsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LogbookPage]
})
export class LogbookPageModule {}
