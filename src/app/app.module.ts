import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { VeiculosComponent } from './component/veiculos/veiculos.component';
import { MenuComponent } from './component/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';
import { Exercicio1Component } from './component/exercicio1/exercicio1.component';
import {InputTextModule} from 'primeng/inputtext';
import { Exercicio2Component } from './component/exercicio2/exercicio2.component';

import { NgxMaskModule, IConfig } from 'ngx-mask'

export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;


@NgModule({
  declarations: [
    AppComponent,
    VeiculosComponent,
    MenuComponent,
    Exercicio1Component,
    Exercicio2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    AccordionModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
