import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerRandomizerComponent } from './player-randomizer.component';

describe('PlayerRandomizerComponent', () => {
  let component: PlayerRandomizerComponent;
  let fixture: ComponentFixture<PlayerRandomizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerRandomizerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerRandomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
