import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ HeaderComponent ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule{ }