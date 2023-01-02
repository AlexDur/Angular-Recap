import { Component, OnInit } from '@angular/core';

import { Rezept } from './rezept';
import { REZEPTE } from './mock-rezept';

@Component({
  selector: 'app-gerichte',
  templateUrl: './gerichte.component.html',
  styleUrls: ['./gerichte.component.scss'],
})
export class GerichteComponent implements OnInit {
  rezepte = REZEPTE;
  selectedRezept?: Rezept;

  constructor() {}

  ngOnInit(): void {}

  onSelect(rezept: Rezept): void {
    this.selectedRezept = rezept;
  }
}
