import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Custom made components
import { AppComponent } from './app.component';
import { StateComponent } from './components/state/state.component';
import { StateListComponent } from './components/state-list/state-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StateComponent,
    StateListComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
