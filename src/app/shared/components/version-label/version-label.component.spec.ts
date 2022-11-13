import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionLabelComponent } from './version-label.component';

describe('VersionLabelComponent', () => {
  let component: VersionLabelComponent;
  let fixture: ComponentFixture<VersionLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersionLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VersionLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
