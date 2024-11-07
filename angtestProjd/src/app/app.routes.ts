import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: 'hakkimizda', component: hakkimizdaComponent }
  { path: '', redirectTo: '/hakkimizda', pathMatch: 'full' }
];
