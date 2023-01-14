import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GerichteComponent } from './gerichte/gerichte.component';

import { FormsModule } from '@angular/forms';
import { RezepteDetailComponent } from './rezepte-detail/rezepte-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RezeptService } from './rezept.service';
import { RezeptelisteComponent } from './rezept-liste/rezept-liste.component';

import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GerichteComponent,
    RezepteDetailComponent,
    MessagesComponent,
    RezeptelisteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, TableModule],
  providers: [RezeptService],
  bootstrap: [AppComponent],
})
export class AppModule {}
