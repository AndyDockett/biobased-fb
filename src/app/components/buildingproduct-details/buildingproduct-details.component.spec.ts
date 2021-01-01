import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingproductDetailsComponent } from './buildingproduct-details.component';

describe('BuildingproductDetailsComponent', () => {
  let component: BuildingproductDetailsComponent;
  let fixture: ComponentFixture<BuildingproductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingproductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingproductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
