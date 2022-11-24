import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceExpansionPanelComponent } from './resource-expansion-panel.component';

describe('ResourceExpansionPanelComponent', () => {
  let component: ResourceExpansionPanelComponent;
  let fixture: ComponentFixture<ResourceExpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceExpansionPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
