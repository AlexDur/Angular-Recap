import { Component, OnInit, Input } from '@angular/core';
import { Rezept } from '../rezept';

@Component({
  selector: 'app-rezepte-detail',
  templateUrl: './rezepte-detail.component.html',
  styleUrls: ['./rezepte-detail.component.scss'],
})
export class RezepteDetailComponent implements OnInit {
  @Input() rezept?: Rezept;

  constructor() {}

  ngOnInit(): void {}
}
