/* Services are a great way to share information among classes that don't know each other. */
import { Rezept } from './rezept';
import { REZEPTE } from './mock-rezept';
import { MessageService } from './message.service';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RezeptService {
  constructor(private messageService: MessageService) {}

  getRezepte(): Observable<Rezept[]> {
    const rezepte = of(REZEPTE);
    this.messageService.add('RezeptService: fetched rezepte');
    return rezepte;
  }
}
