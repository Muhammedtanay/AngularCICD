import { Routes } from '@angular/router';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
  { path: '', component: AppComponent },  
  { path: 'hakkimizda', component: HakkimizdaComponent }
];
