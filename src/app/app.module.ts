import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ // Declaraciones, componentes, directivas, pipes. Lo que no sea modulo
    AppComponent
  ],
  imports: [ // solo se importan otros modulos. Si es modulo se importa
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
