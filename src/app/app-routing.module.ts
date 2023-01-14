import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerichteComponent } from './gerichte/gerichte.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RezepteDetailComponent } from './rezepte-detail/rezepte-detail.component';
import { RezeptelisteComponent } from './rezept-liste/rezept-liste.component';
/* This tells the router to match that URL to path: 'rezepte' and display the GerichteComponent when the URL is something like localhost:4200/rezepte. */

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: RezepteDetailComponent },
  { path: 'rezepte', component: GerichteComponent },
  { path: 'rezepteliste', component: RezeptelisteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
