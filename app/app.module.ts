import { NgModule, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MaterializeDirective } from 'angular2-materialize';
import { FormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MaterializeDirective
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})

export class AppModule { 

  
  
}
