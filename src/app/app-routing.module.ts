import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {IndicaComponent} from './pages/indica/indica.component';
import {SativaComponent} from './pages/sativa/sativa.component';
import {RuderalisComponent} from './pages/ruderalis/ruderalis.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'indica', component: IndicaComponent},
  {path: 'sativa', component: SativaComponent},
  {path: 'ruderalis', component: RuderalisComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
