import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'farmera-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  constructor(private authService: AuthService,
    private router:Router) { }

  ngOnInit() {}

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }

}
