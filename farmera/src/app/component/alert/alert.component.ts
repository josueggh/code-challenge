import { Component, OnInit } from '@angular/core';
import { AlertService, Alert } from 'src/app/services/alert.service';

@Component({
  selector: 'farmera-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {

  alerts: Alert[];

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.get().subscribe( alerts => {
      this.alerts = alerts;
    });
  }

}
