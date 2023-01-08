import { r3JitTypeSourceSpan } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  Observable,
  Subject,
} from 'rxjs';
import { Rezept } from '../rezept';
import { RezeptService } from '../rezept.service';

@Component({
  selector: 'app-rezept-search',
  templateUrl: './rezept-search.component.html',
  styleUrls: ['./rezept-search.component.scss'],
})
export class RezeptSearchComponent implements OnInit {
  rezepte$!: Observable<Rezept[]>;

  /* A Subject is both a source of observable values and an Observable itself. You can subscribe to a Subject as you would any Observable. */

  private searchTerms = new Subject<string>();

  constructor(private rezeptService: RezeptService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }


/* ngOnInit() pipes the searchTerms observable through a sequenve of RxJS operator that reduce the number of calls to the searchRezepte().
This means less taxation of the server resources. */

  ngOnInit(): void {
    this.rezepte$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.rezeptService.searchRezepte(term))
    );
  }
}
