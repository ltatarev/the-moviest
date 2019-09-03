import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

import { ModalModule } from 'ngx-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FooterComponent } from './components/footer/footer.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { MovieComponent } from './components/movie/movie.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { WatchlistsComponent } from './components/watchlists/watchlists.component';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TvComponent } from './components/tv/tv.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    DiscoverComponent,
    MovieComponent,
    ReviewsComponent,
    WatchlistsComponent,
    SearchComponent,
    ProfileComponent,
    SettingsComponent,
    TvComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
