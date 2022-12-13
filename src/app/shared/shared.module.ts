import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { OptionButtonsComponent } from './components/action-buttons/option-buttons/option-buttons.component';
import { BaseComponent } from './components/base/base.component';
import { CardTableComponent } from './components/card-table/card-table.component';
import { LoadingDialogComponent } from './components/loading-dialog/loading-dialog.component';
import { PlayerRandomizerSettingsComponent } from './components/player-randomizer-settings/player-randomizer-settings.component';
import { SetSearchInputComponent } from './components/set-search-input/set-search-input.component';
import { VersionLabelComponent } from './components/version-label/version-label.component';
import { SharedImportsModule } from './shared-imports.module';

@NgModule({
  declarations: [
    ActionButtonsComponent,
    BaseComponent,
    CardTableComponent,
    LoadingDialogComponent,
    OptionButtonsComponent,
    PlayerRandomizerSettingsComponent,
    SetSearchInputComponent,
    VersionLabelComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedImportsModule,
  ],
  exports: [
    ActionButtonsComponent,
    BaseComponent,
    CardTableComponent,
    LoadingDialogComponent,
    ReactiveFormsModule,
    OptionButtonsComponent,
    PlayerRandomizerSettingsComponent,
    SetSearchInputComponent,
    VersionLabelComponent,
    SharedImportsModule,
  ]
})
export class SharedModule { }
