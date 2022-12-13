import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { LoadingDialogComponent } from "../components/loading-dialog/loading-dialog.component";
import { PlayerRandomizerSettingsComponent } from '../components/player-randomizer-settings/player-randomizer-settings.component';

@Injectable({
    providedIn: 'root'
})
export class DialogService {

    constructor(public dialog: MatDialog) {}

    public openLoadingDialog(): MatDialogRef<LoadingDialogComponent, any> {
        return this.dialog.open(LoadingDialogComponent, {
            width: '25%',
            height: '25%',
            disableClose: true,
        });
    }

    public closeLoadingDialog(loadingDialog: MatDialogRef<LoadingDialogComponent, any>): void {
        loadingDialog.close();
    }

    public openSettingsDialog(): MatDialogRef<PlayerRandomizerSettingsComponent, any> {
        return this.dialog.open(PlayerRandomizerSettingsComponent, {
            width: '100%',
            height: '100%',
            disableClose: true,
        });
    }

    public closeSettingsDialog(settingsDialog: MatDialogRef<PlayerRandomizerSettingsComponent, any>): void {
        settingsDialog.close();
    }
}