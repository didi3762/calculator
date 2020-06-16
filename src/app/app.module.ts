import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LiInputerComponent } from './comps/li-inputer/li-inputer.component';
import { LiShowerComponent } from './comps/li-shower/li-shower.component';


@NgModule({
  declarations: [
    AppComponent,
    LiInputerComponent,
    LiShowerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
