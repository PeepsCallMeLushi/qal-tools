import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSetCalculatorComponent } from './data-set-calculator/data-set-calculator.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CalculationRowComponent } from './data-set-calculator/calculation-row/calculation-row.component';
import { ResourceExpansionPanelComponent } from './data-set-calculator/resource-expansion-panel/resource-expansion-panel.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'data-set-calculator',
  },
  {
    path: 'data-set-calculator',
    component: DataSetCalculatorComponent,
  },
];

@NgModule({
  declarations: [
    DataSetCalculatorComponent,
    CalculationRowComponent,
    ResourceExpansionPanelComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class NikkeModule { }
