import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { PilotComponent } from './components/pilot/pilot.component';
import { DriveComponent } from './components/drive/drive.component';
import { basicReducer } from './store/basics.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PilotComponent,
    DriveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({basics: basicReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
