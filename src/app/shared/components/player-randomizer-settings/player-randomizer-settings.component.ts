import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogService } from '../../services';

@Component({
  selector: 'player-randomizer-settings',
  templateUrl: './player-randomizer-settings.component.html',
  styleUrls: ['./player-randomizer-settings.component.scss']
})
export class PlayerRandomizerSettingsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PlayerRandomizerSettingsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: DialogService) { }

  ngOnInit(): void {
  }

  public closeDialog(): void {
    this.dialog.closeSettingsDialog(this.dialogRef);
  }

}
