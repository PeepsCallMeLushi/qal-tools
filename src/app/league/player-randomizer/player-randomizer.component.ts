import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor() { }

  ngOnInit(): void {
  }

  public addPlayer(playerName: string): void {
    const newPlayer = new FormGroup({
      playerName: new FormControl(playerName, [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
      role: new FormControl(null),
      edit: new FormControl(false),
    });
    newPlayer.disable();
    this.playerList.push(newPlayer);
  }

  public randomize(): void {
    if (this.playerList.length >= 3 && this.playerList.length <= 10) {
      const shuffledList: FormGroup[] = ArrayUtils.shuffle(this.playerList.slice());
      shuffledList.forEach((player, index)=>{
        console.log(Math.floor(shuffledList.length / 2));
        if ( (index + 1) <= Math.floor(shuffledList.length / 2)) {
          this.blueTeam.push(player);
        } else {
          this.redTeam.push(player);
        }
      })
      this.randomized = true;
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

}
