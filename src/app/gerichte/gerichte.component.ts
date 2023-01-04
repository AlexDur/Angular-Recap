import { Component, OnInit } from '@angular/core';

import { Rezept } from '../rezept';
import { RezeptService } from '../rezept.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-gerichte',
  templateUrl: './gerichte.component.html',
  styleUrls: ['./gerichte.component.scss'],
})
export class GerichteComponent implements OnInit {
  /*   selectedRezept?: Rezept; */

  rezepte: Rezept[] = [];

  constructor(private rezeptService: RezeptService) {}
  /*     private messageService: MessageService */

  ngOnInit(): void {
    this.getRezepte();
  }

  /*   onSelect(rezept: Rezept): void {
    this.selectedRezept = rezept;
    this.messageService.add(
      `RezepteComponent: Selected rezept id=${rezept.id}`
    );
  } */

  getRezepte(): void {
    this.rezeptService
      .getRezepte()
      .subscribe((rezepte) => (this.rezepte = rezepte));
  }
}
