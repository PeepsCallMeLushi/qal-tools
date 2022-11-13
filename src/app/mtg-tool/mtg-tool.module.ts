import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtgToolComponent } from './mtg-tool.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MtgToolComponent,
  },
];

@NgModule({
  declarations: [
    MtgToolComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class MtgToolModule { }
