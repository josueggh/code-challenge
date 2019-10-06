import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ TabsComponent ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [TabsComponent]
})
export class TabsModule{ }