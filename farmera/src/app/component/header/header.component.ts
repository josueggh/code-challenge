import { Component, OnInit } from '@angular/core';
import { ActionSheetController} from '@ionic/angular';
import { PigService } from '../../services/pigs.service';
import { InfoService, Info } from 'src/app/services/info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'farmera-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
   
  info: Info;

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private pigService: PigService,
    private generalInfo: InfoService,
    private router: Router
    ) { }

  async presentActions() {
    const actionSheet = await this.actionSheetCtrl.create({
      header : 'Select an action',
      buttons: [{
        text: 'Add pigs',
        icon: 'add',
        handler: this.pigService.addPig
      },{
        text: 'Move pigs',
        icon: 'move',
        handler: this.pigService.movePig
      },{
        text: 'Sale pigs',
        icon: 'card',
        handler: this.pigService.salePig
      }]
    });
    await actionSheet.present();
  }

  ngOnInit() {
    this.generalInfo.get().subscribe( data => {
      this.info = data;
    });
  }

}
