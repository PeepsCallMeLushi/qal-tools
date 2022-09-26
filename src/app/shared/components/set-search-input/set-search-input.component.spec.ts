import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSearchInputComponent } from './set-search-input.component';

describe('SetSearchInputComponent', () => {
  let component: SetSearchInputComponent;
  let fixture: ComponentFixture<SetSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetSearchInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
