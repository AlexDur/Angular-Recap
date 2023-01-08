import { Component, OnInit } from '@angular/core';
import { Rezept } from '../rezept';
import { RezeptService } from '../rezept.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  rezepte: Rezept[] = [];

  constructor(private rezeptService: RezeptService) {}

  ngOnInit(): void {
    this.getRezepte();
  }

  getRezepte(): void {
    this.rezeptService
      .getRezepte()
      .subscribe((rezepte) => (this.rezepte = rezepte.slice(1, 5)));
  }
}
