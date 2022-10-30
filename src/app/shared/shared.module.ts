import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardTableComponent } from './components/card-table/card-table.component';
import { LoadingDialogComponent } from './components/loading-dialog/loading-dialog.component';
import { SetSearchInputComponent } from './components/set-search-input/set-search-input.component';
import { SharedImportsModule } from './shared-imports.module';

@NgModule({
  declarations: [
    CardTableComponent,
    LoadingDialogComponent,
    SetSearchInputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedImportsModule,
  ],
  exports: [
    CardTableComponent,
    LoadingDialogComponent,
    ReactiveFormsModule,
    SetSearchInputComponent,
    SharedImportsModule,
  ]
})
export class SharedModule { }
