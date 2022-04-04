import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Route, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { DettagliComponent } from './components/dettagli/dettagli.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


const routes : Route [] = [
    {
        path: '',
        component:HomeComponent
    },
     {

        path: 'carrello',
        component: CarrelloComponent

     },
     {

         path:'products/:id',
         component: DettagliComponent
     }


]




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarrelloComponent,
    DettagliComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
