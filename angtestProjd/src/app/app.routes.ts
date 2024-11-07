import { Routes } from '@angular/router';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';



export const routes: Routes = [
  { path: 'hakkimizda', component: hakkimizdaComponent },
  { path: '', redirectTo: '/hakkimizda', pathMatch: 'full' }
];
