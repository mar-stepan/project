import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AngularFireModule } from 'angularfire2';
import {PagesModule} from './pages/pages.module';

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
  ],
  imports: [
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
    AngularFireModule.initializeApp(firebaseConfig),
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
