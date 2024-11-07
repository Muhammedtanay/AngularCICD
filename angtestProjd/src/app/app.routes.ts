import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: 'hakkimizda', component: HakkimizdaComponent }
  { path: '', redirectTo: '/hakkimizda', pathMatch: 'full' }
];
