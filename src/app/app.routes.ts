import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { Dnd5eComponent } from './pages/dnd5e/dnd5e/dnd5e.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Gera Ficha'},
  {path: 'sistema/dnd5e', component: Dnd5eComponent, title: 'Gerar Ficha Dnd 5e'}
];
