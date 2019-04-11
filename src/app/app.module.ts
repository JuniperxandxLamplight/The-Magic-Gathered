import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { routing } from './app.routing';
import { AuthGuard } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';

import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SearchDataComponent } from './search-data/search-data.component';
import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';
import { DeckListComponent } from './deck-list/deck-list.component';

import { WINDOW_PROVIDERS } from "./window.service";

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    UserComponent,
    LoginComponent,
    SearchDataComponent,
    DetailsComponent,
    RegisterComponent,
    DeckListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    routing
  ],
  providers: [AuthGuard, AuthenticationService, WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
