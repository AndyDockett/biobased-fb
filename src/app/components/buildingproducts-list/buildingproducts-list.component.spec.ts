import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingproductsListComponent } from './buildingproducts-list.component';

describe('BuildingproductsListComponent', () => {
  let component: BuildingproductsListComponent;
  let fixture: ComponentFixture<BuildingproductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingproductsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingproductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
