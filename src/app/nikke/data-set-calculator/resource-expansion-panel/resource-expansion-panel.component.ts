import { Component, Input, OnInit } from '@angular/core';
import { ResourceExpansionPanel } from 'src/app/shared/models';

@Component({
  selector: 'resource-expansion-panel',
  templateUrl: './resource-expansion-panel.component.html',
  styleUrls: ['./resource-expansion-panel.component.scss']
})
export class ResourceExpansionPanelComponent implements OnInit {

  @Input() headerData = new ResourceExpansionPanel();

  constructor() { }

  ngOnInit(): void {
  }

}
