import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  @Input() blueTeam: FormGroup[] = [];
  @Input() redTeam: FormGroup[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
