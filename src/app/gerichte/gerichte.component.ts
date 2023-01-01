import { Component } from '@angular/core';
import { Rezept } from '../rezept';

@Component({
  selector: 'app-gerichte',
  templateUrl: './gerichte.component.html',
  styleUrls: ['./gerichte.component.scss'],
})
export class GerichteComponent implements onInit {
  rezept: Rezept = {
    id: 1,
    rezept1: 'Reisgericht',
  };

  rezept2 = 'Nudelgericht';
  rezept3 = 'Desert';

  constructor() {}

  ngOnInit(): void {}
}
