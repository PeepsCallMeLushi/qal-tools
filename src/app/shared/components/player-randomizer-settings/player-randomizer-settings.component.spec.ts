import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerRandomizerSettingsComponent } from './player-randomizer-settings.component';

describe('PlayerRandomizerSettingsComponent', () => {
  let component: PlayerRandomizerSettingsComponent;
  let fixture: ComponentFixture<PlayerRandomizerSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerRandomizerSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerRandomizerSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
