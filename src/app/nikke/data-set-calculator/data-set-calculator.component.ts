import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MaterialOptionValues } from 'src/app/shared/components/enums/material-options.enum';
import { CalculationModel, CalculationResults, ResourceExpansionPanel } from 'src/app/shared/models';
import { CalculationRow } from 'src/app/shared/models/calculation-row.model';
import { combineLatest, debounceTime } from 'rxjs';

@Component({
  selector: 'data-set-calculator',
  templateUrl: './data-set-calculator.component.html',
  styleUrls: ['./data-set-calculator.component.scss']
})
export class DataSetCalculatorComponent implements OnInit {

  public calculationRows: FormGroup[] = [];
  public creditsPerMinute: FormControl = new FormControl(0, [Validators.min(1)]);
  public creditsOwned: FormControl = new FormControl(0);
  public dataSetsPerMinute: FormControl = new FormControl(0, [Validators.min(1)]);
  public dataSetsOwned: FormControl = new FormControl(0);
  public coreDustPerHour: FormControl = new FormControl(0, [Validators.min(1)]);
  public coreDustOwned: FormControl = new FormControl(0);

  public creditCalcResult = '';
  public dataSetsCalcResult = '';
  public coreDustCalcResult = '';

  public resourceHeaders: ResourceExpansionPanel[] = [
    new ResourceExpansionPanel(
      'Credits',
      'Credits Per Minute',
      'creditsPerMinute',
      'How many credits per minute?',
      this.creditsPerMinute,
      'Credits Owned',
      'creditsOwned',
      'How many credits do you have?',
      this.creditsOwned,
    ),
    new ResourceExpansionPanel(
      'Data Sets',
      'Data Sets Per Minute',
      'dataSetsPerMinute',
      'How many data sets per minute?',
      this.dataSetsPerMinute,
      'Data Sets Owned',
      'dataSetsOwned',
      'How many data sets do you have?',
      this.dataSetsOwned,
    ),
    new ResourceExpansionPanel(
      'Core Dust',
      'Core Dust Per Hour',
      'coreDustPerHour',
      'How much core dust per hour?',
      this.coreDustPerHour,
      'Core Dust Owned',
      'coreDustOwned',
      'How core dust do you have?',
      this.coreDustOwned,
    ),
  ];

  constructor() {
    this.addRow();
    combineLatest([
      this.creditsPerMinute.valueChanges,
      this.creditsOwned.valueChanges,
      this.dataSetsPerMinute.valueChanges,
      this.dataSetsOwned.valueChanges,
      this.coreDustPerHour.valueChanges,
      this.coreDustOwned.valueChanges,
    ]).pipe(debounceTime(100))
    .subscribe()
  }

  ngOnInit(): void {
  }

  public addRow(rowValue?: CalculationRow) {
    const row = !!rowValue
      ? new CalculationRow(
        rowValue.materialType,
        rowValue.materialQuantity,
        rowValue.howManyCharactersNeedIt,)
      : new CalculationRow();
    this.calculationRows.push(new FormGroup({
      materialType: new FormControl(row.materialType, Validators.required),
      materialQuantity: new FormControl(row.materialQuantity, [Validators.required, Validators.min(1)]),
      howManyCharactersNeedIt: new FormControl(row.howManyCharactersNeedIt, [Validators.required, Validators.min(1)]),
    }));
  }

  public deleteAllRows() {
    this.calculationRows.splice(0, this.calculationRows.length);
    this.addRow();
  }

  public deleteRow(index: number): void{
    this.calculationRows.splice(index, 1);
    if (this.calculationRows.length === 0) {
      this.addRow();
    }
  }

  public duplicateRow(index: number): void {
    const rowToDuplicate: CalculationRow = this.calculationRows[index].value;
    this.addRow(rowToDuplicate);
  }

  public calculate(): void {
    const valueArr: CalculationRow[] = [];

    this.calculationRows.forEach((group: FormGroup) => {
      valueArr.push(group.value as CalculationRow);
    })

    this.creditCalcResult = this.calculateMaterial(valueArr, MaterialOptionValues.CREDITS, this.creditsPerMinute.value, this.creditsOwned.value);
    this.dataSetsCalcResult = this.calculateMaterial(valueArr, MaterialOptionValues.DATA_SETS, this.dataSetsPerMinute.value, this.dataSetsOwned.value);
    this.coreDustCalcResult = this.calculateMaterial(valueArr, MaterialOptionValues.CORE_DUSTS, this.coreDustPerHour.value/60, this.coreDustPerHour.value);

  }

  private calculateMaterial(calculationRows: CalculationRow[], comparisson: number, materialPerTime: number, ownedMaterials: number): string {
    const materialList = calculationRows.filter(value => value.materialType === comparisson);
    const materialAmmount = new CalculationModel(0, materialPerTime);
    this.gatherNeededAmmounts(materialAmmount, materialList);
    materialAmmount.totalMaterial -= ownedMaterials;
    return this.calculateNeededAmmounts(materialAmmount);
  }
  private gatherNeededAmmounts(ammount: CalculationModel, dataList: CalculationRow[]): void {
    dataList.forEach((calcRow: CalculationRow) => {
      ammount.totalMaterial += (calcRow.materialQuantity * calcRow.howManyCharactersNeedIt);
    });
  }

  private calculateNeededAmmounts (data: CalculationModel): string {
    if (data.materialPerTime > 0 && data.totalMaterial > 0) {
      const auxMinutes = Math.floor(data.totalMaterial / data.materialPerTime);
      const auxHours = Math.floor(auxMinutes / 60);
      const auxDays = Math.floor(auxHours / 24);
      const auxMonths = Math.floor(auxDays / 30);
      const years = Math.floor(auxMonths / 12);
      const months = auxMonths - (years * 12);
      const days = auxDays - (auxMonths * 30);
      const hours = auxHours - (auxDays * 24);
      const minutes = auxMinutes - (auxHours * 60) ;
      const leftOverMaterials = data.totalMaterial - (auxMinutes * data.materialPerTime);
      const seconds = Math.ceil(leftOverMaterials / (data.materialPerTime / 60));
      const results = new CalculationResults(seconds, minutes, hours, days, months, years);
      return results.toString();
    }
    return '';
  }

}
