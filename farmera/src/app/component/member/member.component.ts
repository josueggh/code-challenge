import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/services/team.service';

@Component({
  selector: 'farmera-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent implements OnInit {
  @Input() Member: Member;

  constructor() { }

  ngOnInit() {}

}
