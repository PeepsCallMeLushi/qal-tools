import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSetCalculatorComponent } from './data-set-calculator.component';

describe('DataSetCalculatorComponent', () => {
  let component: DataSetCalculatorComponent;
  let fixture: ComponentFixture<DataSetCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSetCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSetCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
