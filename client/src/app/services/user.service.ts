import { Injectable } from "@angular/core";
import { BehaviorSubject, from, Observable } from "rxjs";

import { User } from "../classes/user";
import { Token } from "../classes/token";

import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

import { tap, catchError } from "rxjs/operators";
import { Router } from "@angular/router";

import { ToastrService } from "ngx-toastr";

import { of } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class UserService {
    private userUrl = "/api/user";

    public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
        false
    );
    public user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

    constructor(
        private http: HttpClient,
        private router: Router,
        public toasterService: ToastrService
    ) {
        if (this.isLoggedIn()) {
            this.loggedIn.next(true);
            this.user.next(this.credentials());
        }
    }

    isLoggedIn() {
        let token = Token.get();
        if (token) {
            let payload = Token.parse(token);
            return payload.exp > Date.now() / 1000;
        } else return false;
    }

    credentials(): any {
        if (this.isLoggedIn()) {
            let token = Token.get();
            let payload = Token.parse(token);
            delete payload["exp"];
            delete payload["iat"];
            return payload;
        }
    }

    saveToken(token: string) {
        Token.save(token);
        this.loggedIn.next(this.isLoggedIn());
        this.user.next(this.credentials());
    }

    showToastrSuccess(message) {
        return this.toasterService.success(message, "Success!", {
            closeButton: true
        });
    }

    private handleError<T>(operation: string = "operation", result?: T) {
        return (response: any): Observable<T> => {
            this.toasterService.error("Error has occured. Please try again.");
            if (operation === "register" || operation === "login") {
                this.router.navigate(["welcome"]);
            }
            return of(result as T);
        };
    }

    register(user: User): Observable<any> {
        return this.http.post<any>(this.userUrl + "/register", user).pipe(
            tap((response: { token: string; message: string }) => {
                this.saveToken(response.token);
                this.router.navigate(["home"]);
                this.showToastrSuccess(response.message);
            }),
            catchError(this.handleError<any>("register", user))
        );
    }

    login(user: User): Observable<any> {
        return this.http.post<any>(this.userUrl + "/login", user).pipe(
            tap((response: { token: string; message: string }) => {
                this.saveToken(response.token);
                this.router.navigate(["home"]);
                this.showToastrSuccess(response.message);
            }),
            catchError(this.handleError<any>("login", user))
        );
    }

    getProfileData(id: any): Observable<any> {
        let params = new HttpParams().set("id", id);
        return this.http
            .get<any>(this.userUrl + "/getProfileData", { params })
            .pipe(catchError(this.handleError<any>("getProfileData")));
    }

    findUserByUsername(username: any): Observable<any> {
        let params = new HttpParams().set("username", username);
        return this.http
            .get<any>(this.userUrl + "/findUserByUsername", { params })
            .pipe(
                tap(response => {
                    if (!response.user) {
                        this.toasterService.error("No users found!");
                        return;
                    }
                    this.showToastrSuccess(response.message);
                    this.router.navigate(["profile", response.user._id]);
                })
            );
    }

    updateUsername(username: any): Observable<any> {
        const user = { id: this.user.value._id, username };
        return this.http.post<any>(this.userUrl + "/updateUsername", user).pipe(
            tap(response => {
                this.showToastrSuccess(response.message);
            }),
            catchError(this.handleError<any>("updateUsername"))
        );
    }

    updatePassword(password: any): Observable<any> {
        const user = { id: this.user.value._id, password };
        return this.http.post<any>(this.userUrl + "/updatePassword", user).pipe(
            tap(response => {
                this.showToastrSuccess(response.message);
            }),
            catchError(this.handleError<any>("updatePassword"))
        );
    }

    updateBio(bio: any): Observable<any> {
        const user = { id: this.user.value._id, bio };
        return this.http
            .post<any>(this.userUrl + "/createOrUpdateBio", user)
            .pipe(
                tap(response => {
                    this.showToastrSuccess(response.message);
                }),
                catchError(this.handleError<any>("createOrUpdateBio"))
            );
    }

    updateCurrentlyWatching(currentlyWatching: any): Observable<any> {
        const user = { id: this.user.value._id, currentlyWatching };
        return this.http
            .post<any>(this.userUrl + "/createOrUpdateCurrentlyWatching", user)
            .pipe(
                tap(response => {
                    this.showToastrSuccess(response.message);
                }),

                catchError(
                    this.handleError<any>("createOrUpdateCurrentlyWatching")
                )
            );
    }

    updateFavorites(favorites: any): Observable<any> {
        const user = { id: this.user.value._id, favorites };
        return this.http
            .post<any>(this.userUrl + "/createOrUpdateFavorites", user)
            .pipe(
                tap(response => {
                    this.showToastrSuccess(response.message);
                }),
                catchError(this.handleError<any>("createOrUpdateFavorites"))
            );
    }

    updateAvatar(avatarURL: any): Observable<any> {
        const user = { id: this.user.value._id, avatarURL };
        return this.http.post<any>(this.userUrl + "/updateAvatar", user).pipe(
            tap(response => {
                this.showToastrSuccess(response.message);
            }),
            catchError(this.handleError<any>("updateAvatar"))
        );
    }

    logOut() {
        this.router.navigate(["/welcome"]);
        this.loggedIn.next(false);
        this.user.next(null);
        Token.remove();
    }

    authHeaders() {
        return new HttpHeaders({
            Authorization: `Bearer ${Token.get() ? Token.get() : ""}`
        });
    }
}
