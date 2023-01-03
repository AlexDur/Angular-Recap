import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GerichteComponent } from './gerichte/gerichte.component';

import { FormsModule } from '@angular/forms';
import { RezepteDetailComponent } from './rezepte-detail/rezepte-detail.component';
import { MessagesComponent } from './messages/messages.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    GerichteComponent,
    RezepteDetailComponent,
    MessagesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
