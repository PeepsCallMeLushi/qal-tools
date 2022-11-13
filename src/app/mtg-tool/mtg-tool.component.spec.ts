import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtgToolComponent } from './mtg-tool.component';

describe('MtgToolComponent', () => {
  let component: MtgToolComponent;
  let fixture: ComponentFixture<MtgToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtgToolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MtgToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
