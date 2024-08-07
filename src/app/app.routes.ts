import { Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

export const routes: Routes = [
  /* { path: '', redirectTo: '/home', pathMatch: 'full' }, */ // Redirection par défaut
  {path: 'crisis-list', component: CrisisListComponent},
  {path: 'heroes-list', component: HeroesListComponent},
];
