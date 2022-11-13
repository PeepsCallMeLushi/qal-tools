import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSetCalculatorComponent } from './data-set-calculator/data-set-calculator.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: 'data-set-calculator',
    component: DataSetCalculatorComponent,
  },
];

@NgModule({
  declarations: [
    DataSetCalculatorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class NikkeModule { }
