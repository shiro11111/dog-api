import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { DogEffects } from './dog/dog.effects';
import { HttpClientModule } from '@angular/common/http';
import { DogListComponent } from './dog/dog-list/dog-list.component';
import { DogDetailsComponent } from './dog/dog-details/dog-details.component';
import { MatChipsModule, MatInputModule, MatListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DogListComponent,
    DogDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    AppRoutingModule,
    HttpClientModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      DogEffects,
    ]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
