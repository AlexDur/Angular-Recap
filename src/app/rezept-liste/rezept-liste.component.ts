import { Component, OnInit } from '@angular/core';
import { Input } from '@material-ui/core';
import { Rezept } from '../rezept';
import { RezeptService } from '../rezept.service';

@Component({
  templateUrl: './rezept-liste.component.html',
})
export class TableBasicDemo implements OnInit {
  /* @Input() rezept: string; */
  rezepte: Rezept[] = [];

  constructor(private rezeptService: RezeptService) {}

  ngOnInit() {
    this.rezeptService
      .getRezepte()
      .subscribe((rezepte) => (this.rezepte = rezepte));
  }
}
