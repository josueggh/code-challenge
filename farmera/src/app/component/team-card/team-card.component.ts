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

  constructor( private team: TeamService ) { }

  ngOnInit() {
    this.team.getMembers(this.limit).subscribe( members => {
      this.members = members;
      console.log(this.members);
    });
  }

}
