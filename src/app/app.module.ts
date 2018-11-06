import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PonyDetailsComponent } from './pony-details/pony-details.component';
import { PoniesComponent } from './ponies/ponies.component';
import { RacesComponent } from './races/races.component';
import { RaceDetailsComponent } from './race-details/race-details.component';
import { PonyFormComponent } from './pony-form/pony-form.component';
import { RaceFormComponent } from './race-form/race-form.component';
import  {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PickListModule } from 'primeng/picklist';
import { ReactiveFormsModule } from '@angular/forms';
import { PonyReactiveFormComponent } from './pony-reactive-form/pony-reactive-form.component';
import { RaceReactiveFormComponent } from './race-reactive-form/race-reactive-form-component';

const routes: Routes = [
  {path: '', component: RacesComponent},
  {path: 'Ponies', component: PoniesComponent},
  {path: 'addPony', component: PonyReactiveFormComponent},
  {path: 'addRace', component: RaceReactiveFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PonyDetailsComponent,
    PoniesComponent,
    RacesComponent,
    RaceDetailsComponent,
    PonyFormComponent,
    RaceFormComponent,
    PonyReactiveFormComponent,
    RaceReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NgbModule,
    PickListModule,
    ReactiveFormsModule,
  ],
    

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
