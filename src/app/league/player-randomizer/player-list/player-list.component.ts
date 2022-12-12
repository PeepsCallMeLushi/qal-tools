import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StringUtils } from 'src/app/shared/utils/string.utils';

@Component({
  selector: 'player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  public playerNameInput: FormControl = new FormControl(null, [Validators.maxLength(16), Validators.minLength(3)]);
  @Input() playerList: FormGroup[] = [];
  @Output() added: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public addPlayer(): void {
    const editPlayerName = this.playerNameInput.value
    if (this.playerNameInput.valid && StringUtils.isNotNullNotEmptyNotUndefinedNotZero(editPlayerName)) {
      this.added.emit(editPlayerName);
      this.playerNameInput.setValue(null);
      this.playerNameInput.updateValueAndValidity();
    }
  }

  public deletePlayer(index: number): void {
    this.playerList.splice(index, 1);
  }

  public editPlayer(index: number): void {
    const player = this.playerList[index] as FormGroup;
    const editThePlayer = player.get('edit');
    if (editThePlayer) {
      if (editThePlayer.value) {
        player.disable();
      } else {
        player.enable()
      }
      editThePlayer.setValue(!editThePlayer.value);
    }
  }

}
