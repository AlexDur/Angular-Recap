import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Rezept } from './rezept';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const rezepte = [
      { id: 12, name: 'Reisgerichte' },
      { id: 13, name: 'Nudelgerichte' },
      { id: 14, name: 'International' },
      { id: 15, name: 'Desserts' },
      { id: 16, name: 'Trinks' },
    ];
    return { rezepte };
  }

  // Overrides the genId method to ensure that a rezept always has an id.
  // If the rezepte array is empty,
  // the method below returns the initial number (11).
  // if the rezepte array is not empty, the method below returns the highest
  // rezept id + 1.
  genId(rezepte: Rezept[]): number {
    return rezepte.length > 0
      ? Math.max(...rezepte.map((rezept) => rezept.id)) + 1
      : 11;
  }
}
