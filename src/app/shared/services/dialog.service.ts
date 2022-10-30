import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { LoadingDialogComponent } from "../components/loading-dialog/loading-dialog.component";

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
}