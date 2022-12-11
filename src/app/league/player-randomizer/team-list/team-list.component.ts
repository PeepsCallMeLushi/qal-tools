import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  @Input() playerList: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
