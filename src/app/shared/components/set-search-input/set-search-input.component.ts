import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { ProcessedSet } from '../../models';

@Component({
  selector: 'set-search-input',
  templateUrl: './set-search-input.component.html',
  styleUrls: ['./set-search-input.component.scss']
})
export class SetSearchInputComponent implements OnInit {

  public filterList: Observable<ProcessedSet[]>;
  public searchFormControl: FormControl = new FormControl('');
  
  @Input() public setList: ProcessedSet[] = [];

  @Output() public searchResults: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.filterList = this.searchFormControl.valueChanges.pipe(
      startWith(''),
      map((value) => this.filterOptions(value || '')));
  }

  ngOnInit(): void {
  }

  public emitOptionSelected(value: string): void {
    this.searchResults.emit(value);
  }

  private filterOptions(value: string): ProcessedSet[] {
    return this.setList.filter(set =>
      set.set_name.toLowerCase().includes(value.toLowerCase())
      || set.set_abreviation.toLowerCase().includes(value.toLowerCase())
    );
  }

}
