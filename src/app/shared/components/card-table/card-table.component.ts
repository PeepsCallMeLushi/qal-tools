import { Component, OnInit, Input } from '@angular/core';
import { CardTable } from '../../models/card-table.model';

@Component({
  selector: 'card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.scss']
})
export class CardTableComponent implements OnInit {

  public displayedColumns: string[] = [
    'count',
    'tradelist_count',
    'name',
    'edition',
    'condition',
    'language',
    'foil',
    'tags',
    'last_modified',
    'collector_number'
  ];

  @Input() public cardListForTable: CardTable[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
