import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBuildingproductComponent } from './components/add-buildingproduct/add-buildingproduct.component';
import { BuildingproductDetailsComponent } from './components/buildingproduct-details/buildingproduct-details.component';
import { BuildingproductsListComponent } from './components/buildingproducts-list/buildingproducts-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBuildingproductComponent,
    BuildingproductDetailsComponent,
    BuildingproductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
