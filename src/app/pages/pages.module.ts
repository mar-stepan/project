import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component';
import {BackOfficeComponent} from './back-office/back-office.component';
import {TypesComponent} from './main/types/types.component';
import {ContactsComponent} from './main/contacts/contacts.component';
import {FactsComponent} from './main/facts/facts.component';
import {MainComponent} from './main/main.component';
import {RuderalisComponent} from './ruderalis/ruderalis.component';
import {AboutComponent} from './main/about/about.component';
import {SativaComponent} from './sativa/sativa.component';
import {IndicaComponent} from './indica/indica.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule, MatInputModule, MatSelectModule} from '@angular/material';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    MainComponent,
    SativaComponent,
    IndicaComponent,
    RuderalisComponent,
    AboutComponent,
    FactsComponent,
    TypesComponent,
    ContactsComponent,
    LoginComponent,
    BackOfficeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
    ScrollToModule.forRoot(),
    RouterModule,
    MatInputModule
  ]
})
export class PagesModule { }
