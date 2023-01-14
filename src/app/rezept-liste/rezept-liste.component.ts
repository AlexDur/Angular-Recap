import { Component, OnInit } from '@angular/core';
import { Rezept } from '../rezept';
import { RezeptService } from '../rezept.service';

@Component({
  selector: 'app-rezepteliste',
  templateUrl: './rezept-liste.component.html',
  styleUrls: ['./rezept-liste.component.scss'],
})
export class RezeptelisteComponent implements OnInit {
  /* @Input() rezept: string; */
  rezepte: Rezept[] = [];

  constructor(private rezeptService: RezeptService) {}

  ngOnInit() {
    this.rezeptService.getRezepte().then((rezepte) => (this.rezepte = rezepte));
  }

}
