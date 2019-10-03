import { Component, OnInit } from '@angular/core';
import { TeamService, Member } from '../../services/team.service';

@Component({
  selector: 'farmera-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss'],
})
export class TeamCardComponent implements OnInit {

  members: Member[];
  limit = 3;
  display = 1;

  constructor( private team: TeamService ) { }

  hideOrShow(){
    this.display = this.display === 1 ? this.limit : 1;
  }

  ngOnInit() {
    this.team.getMembers(this.limit).subscribe( members => {
      this.members = members;
    });
  }

}
