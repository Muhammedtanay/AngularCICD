import { Routes } from '@angular/router';
import { HakkimizdaComponent } from './path-to-hakkimizda/hakkimizda.component';


export const routes: Routes = [
  { path: 'hakkimizda', component: HakkimizdaComponent },
  { path: '', redirectTo: '/hakkimizda', pathMatch: 'full' }
];
