import { Component, OnInit, Input } from '@angular/core';
import { Rezept } from '../rezept';
import { RezeptService } from '../rezept.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rezepte-detail',
  templateUrl: './rezepte-detail.component.html',
  styleUrls: ['./rezepte-detail.component.scss'],
})
export class RezepteDetailComponent implements OnInit {
  rezept: Rezept | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private rezeptService: RezeptService
  ) {}

  ngOnInit(): void {
    this.getRezept();
  }

  getRezept(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.rezeptService
      .getRezept(id)
      .subscribe((rezept) => (this.rezept = rezept));
  }

  goBack(): void {
    this.location.back();
  }
}
