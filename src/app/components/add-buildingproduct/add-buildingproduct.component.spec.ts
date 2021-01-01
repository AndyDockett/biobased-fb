import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBuildingproductComponent } from './add-buildingproduct.component';

describe('AddBuildingproductComponent', () => {
  let component: AddBuildingproductComponent;
  let fixture: ComponentFixture<AddBuildingproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBuildingproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBuildingproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
