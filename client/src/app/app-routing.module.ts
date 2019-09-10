import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "./guards/auth.guard";

import { WelcomeComponent } from "./components/welcome/welcome.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";
import { DiscoverComponent } from "./components/discover/discover.component";
import { MovieComponent } from "./components/movie/movie.component";
import { ReviewsComponent } from "./components/reviews/reviews.component";
import { WatchlistsComponent } from "./components/watchlists/watchlists.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { SearchComponent } from "./components/search/search.component";
import { TvComponent } from "./components/tv/tv.component";
import { SearchResultComponent } from './components/search-result/search-result.component';

const routes: Routes = [
    { path: "", redirectTo: "welcome", pathMatch: "full" },
    { path: "welcome", component: WelcomeComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
    {
        path: "discover",
        component: DiscoverComponent,
        canActivate: [AuthGuard]
    },
    { path: "movie/:id", component: MovieComponent, canActivate: [AuthGuard] },
    { path: "tv/:id", component: TvComponent, canActivate: [AuthGuard] },
    {
        path: "reviews",
        component: ReviewsComponent,
        canActivate: [AuthGuard],
        data: { routeName: "allReviews" }
    },
    {
        path: "reviews/:id",
        component: ReviewsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "watchlists",
        component: WatchlistsComponent,
        canActivate: [AuthGuard],
        data: { routeName: "allWatchlists" }
    },
    {
        path: "watchlists/:id",
        component: WatchlistsComponent,
        canActivate: [AuthGuard]
    },
    { path: "search", component: SearchComponent, canActivate: [AuthGuard] },
    { path: "searchResult", component: SearchResultComponent, canActivate: [AuthGuard] },
    {
        path: "profile/:id",
        component: ProfileComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "settings",
        component: SettingsComponent,
        canActivate: [AuthGuard]
    },
    { path: "**", redirectTo: "welcome" }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            onSameUrlNavigation: "reload"
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
