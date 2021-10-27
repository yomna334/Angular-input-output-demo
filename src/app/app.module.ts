import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EquipmentslistComponent } from './components/equipmentslist/equipmentslist.component';
import { LoginComponent } from './components/login/login.component';
import { EquipmentDetailComponent } from './components/equipment-detail/equipment-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EquipmentslistComponent,
    LoginComponent,
    EquipmentDetailComponent
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
