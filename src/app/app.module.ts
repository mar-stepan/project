import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { SativaComponent } from './pages/sativa/sativa.component';
import { IndicaComponent } from './pages/indica/indica.component';
import { RuderalisComponent } from './pages/ruderalis/ruderalis.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import { AboutComponent } from './pages/main/about/about.component';
import { FactsComponent } from './pages/main/facts/facts.component';
import { TypesComponent } from './pages/main/types/types.component';
import { ContactsComponent } from './pages/main/contacts/contacts.component';
import { LoginComponent } from './pages/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BackOfficeComponent } from './pages/back-office/back-office.component';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyDIGr5OSx_Jcwj8zhbs1lGoZkgxRL1ZN1c',
  authDomain: 'something-new-cf50a.firebaseapp.com',
  databaseURL: 'https://something-new-cf50a.firebaseio.com',
  projectId: 'something-new-cf50a',
  storageBucket: 'something-new-cf50a.appspot.com',
  messagingSenderId: '306327080971',
  appId: '1:306327080971:web:f1ffa73bc0f519d8'
};

@NgModule({
  declarations: [
    AppComponent,
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
    MatInputModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    ScrollToModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
