import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ToastrModule } from "ngx-toastr";
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";

import { RatingModule } from "ngx-bootstrap/rating";
import { ModalModule } from "ngx-bootstrap";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { FooterComponent } from "./components/footer/footer.component";
import { DiscoverComponent } from "./components/discover/discover.component";
import { MovieComponent } from "./components/movie/movie.component";
import { ReviewsComponent } from "./components/reviews/reviews.component";
import { WatchlistsComponent } from "./components/watchlists/watchlists.component";
import { SearchComponent } from "./components/search/search.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { TvComponent } from "./components/tv/tv.component";
import { SearchResultComponent } from "./components/search-result/search-result.component";
import { DetailsComponent } from "./components/details/details.component";

const config: SocketIoConfig = { url: "http://localhost:3000", options: {} };

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
        TvComponent,
        SearchResultComponent,
        DetailsComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        ModalModule.forRoot(),
        CarouselModule.forRoot(),
        RatingModule.forRoot(),
        CommonModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 1750,
            positionClass: "toast-top-right",
            countDuplicates: true,
            preventDuplicates: true,
            maxOpened: 5
        }),
        SocketIoModule.forRoot(config)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
