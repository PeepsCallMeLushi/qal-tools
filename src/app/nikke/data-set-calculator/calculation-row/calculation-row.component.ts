import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { MaterialOptions } from './material-options.const';

@Component({
  selector: 'calculation-row',
  templateUrl: './calculation-row.component.html',
  styleUrls: ['./calculation-row.component.scss']
})
export class CalculationRowComponent extends BaseComponent {

  @Input() row: FormGroup = new FormGroup({});
  @Output() deleteRow: EventEmitter<number> = new EventEmitter();
  @Output() duplicateRow: EventEmitter<number> = new EventEmitter();

  public materialOptions = MaterialOptions;

  constructor() {
    super()
  }

  public deleteAction(): void {
    this.deleteRow.emit();
  }

  public duplicateAction(): void {
    this.duplicateRow.emit();
  }

  public getMaterialName(): string {
    const selectedRowValue: number = this.row.get('materialType')?.value as number;
    const option = this.materialOptions.find(material => material.value === selectedRowValue);
    return option ? option.name : 'resource units';
  }

}
