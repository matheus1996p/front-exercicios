import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { VeiculosComponent } from './component/veiculos/veiculos.component';
import { MenuComponent } from './component/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';

import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    VeiculosComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    AccordionModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
