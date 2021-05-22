import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StateComponent } from './components/state/state.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { StateListComponent } from './components/state-list/state-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StateComponent,
    StateListComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
