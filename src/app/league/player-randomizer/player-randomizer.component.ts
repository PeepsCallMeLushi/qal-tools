import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services';
import { ArrayUtils } from 'src/app/shared/utils/array.utils';
import { runInThisContext } from 'vm';

@Component({
  selector: 'player-randomizer',
  templateUrl: './player-randomizer.component.html',
  styleUrls: ['./player-randomizer.component.scss']
})
export class PlayerRandomizerComponent implements OnInit {

  public playerList: FormGroup[] = [];
  public blueTeam: FormGroup[] = [];
  public redTeam: FormGroup[] = [];
  public randomized = false;

  constructor(private dialog: DialogService) { }

  ngOnInit(): void {
    this.loadFromLocalStorage();
  }

  public addPlayer(playerName: string): void {
    const newPlayer = new FormGroup({
      playerName: new FormControl(playerName, [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
      role: new FormControl(null),
      notBeingEdited: new FormControl(true, Validators.requiredTrue),
    });
    newPlayer.disable();
    this.playerList.push(newPlayer);
    const editInput = document.getElementById("player-name-input");
    if (editInput) {
      editInput.focus();
    }
    this.saveInLocalStorage();
  }

  public randomize(): void {
    if (this.playerList.length >= 3 && this.playerList.length <= 10) {
      let canShuffleTheList = true;
      const shuffledList: FormGroup[] = ArrayUtils.shuffle(this.playerList.slice());
      shuffledList.forEach((player) => {
        if (player.get('notBeingEdited')?.value === false) {
          canShuffleTheList = false;
        }
      });
      if (canShuffleTheList) {
        shuffledList.forEach((player, index)=>{
          if ( (index + 1) <= Math.floor(shuffledList.length / 2)) {
            this.blueTeam.push(player);
          } else {
            this.redTeam.push(player);
          }
        })
        this.randomized = true;
      }
    }
  }

  public clearRandomize(): void {
    this.blueTeam.splice(0, this.blueTeam.length);
    this.redTeam.splice(0, this.redTeam.length);
    this.randomized = false
  }

  public randomizeAgain(): void {
    this.clearRandomize();
    this.randomize();
  }

  public saveInLocalStorage(): void {
    const playerNameList: string[] = [];
    this.playerList.forEach(player => {
      playerNameList.push(player.get('playerName')?.value);
    })
    localStorage.setItem('playerList', playerNameList.join(','));
  }

  public clearList(): void {
    this.playerList.splice(0, this.playerList.length);
    this.saveInLocalStorage();
  }

  public openSettingsDialog(): void {
    this.dialog.openSettingsDialog();
  }

  private loadFromLocalStorage(): void {
    const playerNameList = localStorage.getItem('playerList');
    if (playerNameList) {
      playerNameList.split(',').forEach((name) => {
        this.addPlayer(name);
      });
    }
  }

}
