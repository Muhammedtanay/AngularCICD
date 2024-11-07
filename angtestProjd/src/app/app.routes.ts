import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: 'hakkimizda', component: hakkimizdaComponent },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component },
  { path: '', redirectTo: '/page1', pathMatch: 'full' }
];
