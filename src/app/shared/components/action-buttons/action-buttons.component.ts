import { Component, OnInit, Input } from '@angular/core';
import { ActionButton } from '../../models';

@Component({
  selector: 'action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent implements OnInit {

  @Input() actions: ActionButton[] = [];

  public openMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

}
