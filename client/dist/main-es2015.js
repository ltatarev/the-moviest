(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/details/details.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/details/details.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\n    <app-navbar></app-navbar>\n\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/discover/discover.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/discover/discover.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\n    <app-navbar></app-navbar>\n    <div class=\"bg animated fadeIn\">\n        <h1 class=\"display-4 pl-5 ml-5 text-light text-left\">\n            <img src=\"../../../assets/img/ticket.png\" /> Movies in theathers\n        </h1>\n        <div class=\"container animated fadeIn\">\n            <a (click)=\"parseMovie(-4)\"\n                ><i class=\"fas fa-caret-left fa-3x\"></i\n            ></a>\n            <div class=\"box\" *ngFor=\"let movie of moviesDisplay\">\n                <a [routerLink]=\"['/movie', movie.id]\">\n                    <img src=\"{{ movie.poster_path }}\" />\n                    <span>{{ movie.original_title }}</span>\n                </a>\n            </div>\n            <a (click)=\"parseMovie(4)\"\n                ><i class=\"fas fa-caret-right fa-3x\"></i\n            ></a>\n        </div>\n    </div>\n\n    <h1 class=\"display-4 pr-5 mr-5 text-light text-right\">\n        Popular on TV\n        <img src=\"../../../assets/img/tvflix.png\" />\n    </h1>\n    <div class=\"container animated fadeIn\">\n        <a (click)=\"parseTv(-4)\"><i class=\"fas fa-caret-left fa-3x\"></i></a>\n        <div class=\"box\" *ngFor=\"let tvs of tvDisplay\">\n            <a [routerLink]=\"['/tv', tvs.id]\">\n                <img src=\"{{ tvs.poster_path }}\" />\n                <span>{{ tvs.original_name }}</span>\n            </a>\n        </div>\n        <a (click)=\"parseTv(4)\"><i class=\"fas fa-caret-right fa-3x\"></i></a>\n    </div>\n\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div style=\"display: inline;\">\n        <img src=\"./../../assets/img/tmdb.png\" alt=\"TMDB\" height=\"65\" />\n        <p class=\"lead pl-5 font-weight-bold\" style=\"display: inline;\">\n            The Moviest © 2019.\n        </p>\n    </div>\n    <div style=\"float: right;\">\n        <a href=\"https://github.com/ltatarev/the-moviest\" target=\"blank\">\n            <img\n                class=\"p-1\"\n                src=\"../../../assets/img/github.png\"\n                alt=\"Github\"\n                height=\"35\"\n            />\n        </a>\n        <a href=\"https://www.instagram.com/crvenamedeia/\" target=\"blank\">\n            <img\n                class=\"p-1\"\n                src=\"../../../assets/img/instagram-logo.png\"\n                alt=\"Github\"\n                height=\"33\"\n            />\n        </a>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\n    <app-navbar></app-navbar>\n\n    <div class=\"container-fluid animated fadeIn delay-1s\" id=\"trendingNow\">\n        <!-- T R E N D I N G N O W  -->\n        <div class=\"row\">\n            <div class=\"title\">\n                <p class=\"ml-5\">\n                    <img\n                        style=\"opacity: 1; filter: alpha(opacity=100); \"\n                        src=\"../../../assets/img/video-camera.png\"\n                        height=\"80\"\n                    />\n                    <!-- 🎬 -->\n                    TRENDING NOW\n                </p>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col w-100\">\n                <carousel>\n                    <slide\n                        *ngFor=\"let three of topThree\"\n                        (click)=\"goToMovie(three.id)\"\n                        style=\"cursor: pointer;\"\n                    >\n                        <img\n                            [src]=\"three.poster\"\n                            alt=\"first slide\"\n                            style=\"display: block; height: 600px; width: 100%; object-fit: cover;\"\n                        />\n\n                        <div class=\"carousel-caption d-none d-md-block\">\n                            <h3>\n                                {{ three.title }}\n                            </h3>\n                            <p class=\"lead\">{{ three.overview }}</p>\n                        </div>\n                    </slide>\n                </carousel>\n            </div>\n        </div>\n\n        <div class=\"row\" id=\"airingOnTv\">\n            <div class=\"col d-flex\" *ngFor=\"let five of topFive\">\n                <div class=\"card\" style=\"height: 600px; overflow: auto;\">\n                    <a class=\"c-preview\">\n                        <img\n                            [src]=\"five.poster\"\n                            class=\"card-img-top c-preview__img\"\n                            alt=\"...\"\n                            height=\"300\"\n                            style=\"object-fit: cover;\"\n                        />\n                    </a>\n                    <div class=\"card-body\">\n                        <div class=\"row p-1\">\n                            <h5 class=\"card-title\">{{ five.title }}</h5>\n\n                            <p class=\"card-text lead\">\n                                {{ five.overview }}\n                            </p>\n                            <div class=\"ml-2 pl-2\">\n                                <a (click)=\"goToMovie(five.id)\">\n                                    <button class=\"learn-more\">\n                                        <div class=\"circle\">\n                                            <span class=\"icon arrow\"></span>\n                                        </div>\n                                        <p class=\"button-text\">\n                                            Learn More\n                                        </p>\n                                    </button>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!-- A I R I N G O N T V -->\n\n        <div class=\"row\">\n            <div class=\"titleRight w-100 pr-5 pt-5 mt-5 mr-3\">\n                POPULAR ON TV\n                <!-- 📺 -->\n                <img\n                    style=\"opacity: 1; filter: alpha(opacity=100); padding: 10px;\"\n                    src=\"../../../assets/img/tv.png\"\n                    height=\"80\"\n                />\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col w-100\">\n                <carousel>\n                    <slide\n                        *ngFor=\"let three of topThreeTv\"\n                        (click)=\"goToTv(three.id)\"\n                        style=\"cursor: pointer;\"\n                    >\n                        <img\n                            [src]=\"three.poster\"\n                            alt=\"first slide\"\n                            style=\"display: block; height: 600px; width: 100%; object-fit: cover;\"\n                        />\n                        <div class=\"carousel-caption d-none d-md-block\">\n                            <h3>\n                                {{ three.name }}\n                            </h3>\n                            <p class=\"lead\">{{ three.overview }}</p>\n                        </div>\n                    </slide>\n                </carousel>\n            </div>\n        </div>\n\n        <div class=\"row p-2\">\n            <div class=\"col p-2 d-flex\" *ngFor=\"let five of topFiveTv\">\n                <div class=\"card\" style=\"height: 600px; overflow: auto;\">\n                    <a class=\"c-preview\">\n                        <img\n                            [src]=\"five.poster\"\n                            class=\"card-img-top c-preview__img \"\n                            alt=\"...\"\n                            height=\"300\"\n                            style=\"object-fit: cover;\"\n                        />\n                    </a>\n                    <div class=\"card-body\">\n                        <div class=\"row p-2\">\n                            <h5 class=\"card-title\">{{ five.name }}</h5>\n                            <p class=\"card-text lead\">\n                                {{ five.overview }}\n                            </p>\n                            <div class=\"ml-2 pl-2\">\n                                <a (click)=\"goToTv(five.id)\">\n                                    <button class=\"learn-more\">\n                                        <div class=\"circle\">\n                                            <span class=\"icon arrow\"></span>\n                                        </div>\n                                        <p class=\"button-text\">\n                                            Learn more\n                                        </p>\n                                    </button>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back animated fadeIn\"></div>\n<div class=\"registration-form\">\n    <header>\n        <h1>🎥 Sign In</h1>\n        <p>Enter your information</p>\n    </header>\n\n    <form\n        [formGroup]=\"loginForm\"\n        (ngSubmit)=\"onSubmit()\"\n        class=\"animated fadeInUp\"\n    >\n        <!-- U S E R N A M E -->\n        <div class=\"input-section username-section\">\n            <input\n                class=\"username\"\n                formControlName=\"username\"\n                type=\"text\"\n                required\n                placeholder=\"ENTER YOUR USERNAME\"\n            />\n            <!-- animated button -->\n            <div class=\"animated-button\">\n                <span\n                    [ngClass]=\"{\n                        'icon-lock': true,\n                        next: loginForm.get('username').valid\n                    }\"\n                    ><i class=\"fa fa-laptop\"></i\n                ></span>\n                <span class=\"next-button username\"\n                    ><i class=\"fa fa-arrow-up\"></i\n                ></span>\n            </div>\n        </div>\n\n        <!-- P A S S W O R D -->\n        <div class=\"input-section password-section folded\">\n            <input\n                class=\"password\"\n                formControlName=\"password\"\n                type=\"password\"\n                required\n                placeholder=\"ENTER YOUR PASSWORD\"\n            />\n\n            <!-- animated button -->\n            <div class=\"animated-button\">\n                <span\n                    [ngClass]=\"{\n                        'icon-repeat-lock': true,\n                        next: loginForm.get('password').valid\n                    }\"\n                    ><i class=\"fa fa-lock\"></i\n                ></span>\n\n                <!-- s u b m i t -->\n                <span class=\"next-button password\">\n                    <button\n                        type=\"submit\"\n                        class=\"btn btn-link\"\n                        [disabled]=\"loginForm.invalid\"\n                    >\n                        <i class=\"fa fa-paper-plane\"></i>\n                    </button>\n                </span>\n            </div>\n        </div>\n        <div class=\"success\">\n            <p>LOGGING IN...</p>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/movie/movie.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/movie/movie.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\n    <app-navbar></app-navbar>\n    <div\n        class=\"container mb-5 text-dark animated fadeInUp\"\n        *ngIf=\"!writingReview && !addingToWatchlist\"\n    >\n        <section class=\"product\">\n            <div class=\"product__photo\">\n                <div class=\"photo-container\">\n                    <div class=\"photo-main\">\n                        <img\n                            src=\"{{ movie?.poster_path }}\"\n                            style=\"width: 100%; \"\n                        />\n                    </div>\n                </div>\n            </div>\n            <div class=\"product__info\">\n                <div class=\"price\">\n                    <span>{{ movie.original_title }}</span>\n                </div>\n                <div class=\"title font-italic pt-3\">\n                    <h1>{{ movie.tagline }}</h1>\n                </div>\n                <div class=\"description\">\n                    <p>{{ movie.overview }}</p>\n                    <hr />\n                    <h3 style=\"display: inline; padding: 7px;\">Genres:</h3>\n                    <p\n                        *ngFor=\"let genre of movie.genres\"\n                        style=\"display: inline; padding: 7px;\"\n                    >\n                        {{ genreEmojis[genre.name] }} {{ genre.name }}\n                    </p>\n                    <div class=\"pt-4\">\n                        <button\n                            class=\"btn btn-outline-success btn-sm m-1 p-2\"\n                            (click)=\"addWatchlists()\"\n                        >\n                            <i class=\"fas fa-highlighter p-1\"></i> Add to\n                            watchlist\n                        </button>\n                        <button\n                            class=\"btn btnPink btn-sm m-1\"\n                            (click)=\"writeReview()\"\n                        >\n                            <i class=\"fas fa-clipboard-list p-1\"></i> Write a\n                            review\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </section>\n    </div>\n\n    <!-- R E V I E W  -->\n    <div\n        class=\"text-center container mb-5 bg-light p-5 rounded animated fadeInUp\"\n        *ngIf=\"writingReview && !addingToWatchlist\"\n    >\n        <button\n            class=\"btn btn-outline-danger btn-sm ml-auto\"\n            (click)=\"closeReview()\"\n        >\n            <i class=\"fas fa-times\" style=\"cursor:pointer;\"></i>\n        </button>\n        <h6 class=\"display-4\">Write a review</h6>\n        <!-- R E V I E W F O R M -->\n        <form\n            [formGroup]=\"reviewForm\"\n            (ngSubmit)=\"submitReview()\"\n            class=\"animated fadeInDown\"\n        >\n            <!-- T E M P L A T E  -->\n            <ng-template #t let-i=\"index\" let-v=\"value\">\n                <button\n                    type=\"button\"\n                    class=\"btn  btn{{ i < v ? 'Pink' : '-default' }} p-2\"\n                    style=\"transition: all 0.1s;\"\n                >\n                    {{ i < v ? \"&#9733;\" : \"&#9734;\" }}\n                </button>\n            </ng-template>\n            <!-- R A T I N G  -->\n            <div class=\"p-3\">\n                <rating\n                    [max]=\"5\"\n                    formControlName=\"rating\"\n                    [customTemplate]=\"t\"\n                    style=\"font-size: 20px;\"\n                ></rating>\n            </div>\n            <div class=\"input-group pb-3\">\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    formControlName=\"title\"\n                    id=\"title\"\n                    placeholder=\"Review title\"\n                />\n            </div>\n            <div class=\"form-group\">\n                <textarea\n                    class=\"form-control rounded-0\"\n                    formControlName=\"reviewText\"\n                    placeholder=\"Review text...\"\n                    rows=\"3\"\n                ></textarea>\n            </div>\n            <!-- S U B M I T  -->\n            <div class=\"p-2 ml-auto\">\n                <button\n                    class=\"btn btn-outline-success\"\n                    type=\"submit\"\n                    [disabled]=\"!reviewForm.valid\"\n                >\n                    Submit\n                </button>\n            </div>\n        </form>\n        <hr />\n    </div>\n\n    <!-- W A T C H L I S T -->\n    <div class=\"container\" *ngIf=\"addingToWatchlist && !writingReview\">\n        <button\n            class=\"btn btn-outline-danger btn-sm ml-auto\"\n            (click)=\"closeWatchlist()\"\n        >\n            <i class=\"fas fa-times\" style=\"cursor:pointer;\"></i>\n        </button>\n        <h6 class=\"display-4 font-italic p-3 text-light\">Add to watchlist</h6>\n        <div class=\"container m-3 bg-light p-3 rounded animated fadeInUp\">\n            <div *ngFor=\"let w of watchlists\">\n                <i class=\"fas fa-asterisk pl-3\" style=\"font-size: 13px;\"></i>\n                <p class=\"lead pl-1 d-inline-block\" (click)=\"addToWatchlist(w)\">\n                    {{ w.title }}\n                </p>\n                <hr />\n            </div>\n        </div>\n    </div>\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- NAVBAR -->\n<nav class=\"navbar navbar-expand-lg ml-5 mr-5 p-5 animated slideInDown\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/home']\">\n        <img\n            src=\"../../../assets/img/logo.png\"\n            alt=\"The Moviest\"\n            height=\"100\"\n        />\n    </a>\n\n    <button\n        class=\"navbar-toggler btn btn-outline-light\"\n        type=\"button\"\n        (click)=\"toggleNavbar()\"\n    >\n        <span class=\"navbar-toggler-icon\"\n            ><i class=\"fas fa-bars pt-1\"></i\n        ></span>\n    </button>\n\n    <div\n        class=\"collapse navbar-collapse show align-text-bottom\"\n        [ngClass]=\"{ show: navbarOpen }\"\n    >\n        <ul class=\"navbar-nav ml-auto align-text-bottom\">\n            <li class=\"nav-item align-text-bottom\">\n                <a\n                    class=\"nav-link align-text-bottom\"\n                    [routerLink]=\"['/discover']\"\n                    >Discover</a\n                >\n            </li>\n\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/reviews']\">Reviews</a>\n            </li>\n\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/watchlists']\"\n                    >Watchlists</a\n                >\n            </li>\n\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/search']\"\n                    ><i class=\"fas fa-search\"></i\n                ></a>\n            </li>\n\n            <li class=\"nav-items\">\n                <a class=\"nav-link\">\n                    <div class=\"dropdown\">\n                        <button class=\"dropbtn\">\n                            <img\n                                src=\"{{ avatarURL }}\"\n                                style=\"position:relative;top:-20px\"\n                                height=\"40\"\n                            />\n                        </button>\n\n                        <div class=\"dropdown-content\">\n                            <a [routerLink]=\"['/profile', id]\">Profile</a>\n                            <a [routerLink]=\"['/settings']\">Settings</a>\n\n                            <a id=\"logout\" (click)=\"logOut()\">Log out</a>\n                        </div>\n                    </div>\n                </a>\n            </li>\n        </ul>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/profile/profile.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pl-0 pr-0 main\">\n    <app-navbar></app-navbar>\n    <div class=\"card profile m-auto  animated fadeIn\">\n        <div class=\"card-header profileName\">\n            {{ username }}\n        </div>\n        <div class=\"card-body profileBody\">\n            <div class=\"profilePic\">\n                <img\n                    class=\"avatar\"\n                    [src]=\"avatarURL ? avatarURL : ''\"\n                    alt=\"Username\"\n                />\n            </div>\n            <div class=\"profileInfo\">\n                <p class=\"bio font-italic\">{{ bio }}</p>\n                <hr />\n                📼\n                <p class=\"title\">CURRENTLY WATCHING</p>\n                <p class=\"font-weight-bold\">{{ currentlyWatching }}</p>\n                <hr />\n                <p class=\"title\">FAVORITES</p>\n                <div>\n                    <p class=\"border\">📽️ {{ favorites.movie }}</p>\n                    <p class=\"border\">📺 {{ favorites.tvShow }}</p>\n                    <p class=\"border\">👨‍🎤 {{ favorites.actor }}</p>\n                    <p class=\"border\">🍿 {{ favorites.genre }}</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-footer actions\">\n            <div class=\"actionFirst\" (click)=\"getReviews()\">\n                <i class=\"fas fa-highlighter\"></i>\n                <p class=\"title\">Reviews</p>\n            </div>\n            <div class=\"actionSecond\" (click)=\"getWatchlists()\">\n                <i class=\"fas fa-clipboard-list\"></i>\n                <p class=\"title\">Watchlists</p>\n            </div>\n        </div>\n    </div>\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/register/register.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back animated fadeIn\"></div>\n<div class=\"registration-form\">\n    <header>\n        <h1>🎬 Register</h1>\n        <p class=\"lead text-italic\">Enter your information</p>\n    </header>\n\n    <form\n        [formGroup]=\"registerForm\"\n        (ngSubmit)=\"onSubmit()\"\n        class=\"animated fadeInDown\"\n    >\n        <!-- E M A I L -->\n        <div class=\"input-section email-section\">\n            <input\n                class=\"email\"\n                formControlName=\"email\"\n                type=\"email\"\n                placeholder=\"ENTER YOUR E-MAIL\"\n                required\n                autocomplete=\"off\"\n            />\n            <!-- animated button -->\n            <div class=\"animated-button\">\n                <span\n                    [ngClass]=\"{\n                        'icon-paper-plane': true,\n                        next: registerForm.get('email').valid\n                    }\"\n                    ><i class=\"fa fa-envelope-o\"></i\n                ></span>\n                <span class=\"next-button email\"\n                    ><i class=\"fa fa-arrow-up\"></i\n                ></span>\n            </div>\n        </div>\n\n        <!-- .next-button:hover {cursor:pointer} -->\n\n        <!-- U S E R N A M E -->\n        <div class=\"input-section username-section folded\">\n            <input\n                class=\"username\"\n                formControlName=\"username\"\n                type=\"text\"\n                required\n                placeholder=\"ENTER YOUR USERNAME\"\n            />\n            <!-- animated button -->\n            <div class=\"animated-button\">\n                <span\n                    [ngClass]=\"{\n                        'icon-lock': true,\n                        next: registerForm.get('username').valid\n                    }\"\n                    ><i class=\"fa fa-laptop\"></i\n                ></span>\n                <span class=\"next-button username\"\n                    ><i class=\"fa fa-arrow-up\"></i\n                ></span>\n            </div>\n        </div>\n\n        <!-- P A S S W O R D -->\n        <div class=\"input-section password-section folded\">\n            <input\n                class=\"password\"\n                formControlName=\"password\"\n                type=\"password\"\n                required\n                placeholder=\"ENTER YOUR PASSWORD\"\n            />\n\n            <!-- animated button -->\n            <div class=\"animated-button\">\n                <span\n                    [ngClass]=\"{\n                        'icon-repeat-lock': true,\n                        next: registerForm.get('password').valid\n                    }\"\n                    ><i class=\"fa fa-lock\"></i\n                ></span>\n\n                <!-- s u b m i t -->\n                <span class=\"next-button password\">\n                    <button\n                        type=\"submit\"\n                        class=\"btn btn-link\"\n                        [disabled]=\"registerForm.invalid\"\n                    >\n                        <i class=\"fa fa-paper-plane\"></i>\n                    </button>\n                </span>\n            </div>\n        </div>\n        <div class=\"success\">\n            <p>CREATING ACCOUNT...</p>\n        </div>\n    </form>\n    <p\n        class=\"lead p-5 mt-5 text-danger font-weight-bold\"\n        *ngIf=\"\n            registerForm.get('username').dirty &&\n            !registerForm.get('username').valid\n        \"\n    >\n        Minimum username length is 3!\n    </p>\n    <p\n        class=\"lead p-5 mt-5 text-danger font-weight-bold\"\n        *ngIf=\"\n            registerForm.get('password').dirty &&\n            !registerForm.get('password').valid\n        \"\n    >\n        Minimum password length is 3!\n    </p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/reviews/reviews.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/reviews/reviews.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back animated fadeIn\">\n    <app-navbar></app-navbar>\n    <div class=\"container\">\n        <div class=\"box\" *ngFor=\"let review of reviews\">\n            <div class=\"boxContent\">\n                <i class=\"fas fa-film icon\"></i>\n                <h1 class=\"title\">{{review.title}}</h1>\n                <h3 class=\"movie\">{{review.movie.movieTitle}}</h3>\n                <p class=\"desc font-italic\">\n                    {{review.author_id.username}}\n                </p>\n            </div>\n        </div>\n    </div>\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/search-result/search-result.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/search-result/search-result.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\n    <app-navbar></app-navbar>\n    <div class=\"container\">\n        <h1 class=\"text-light display-4\">Search results for \"{{ search }}\"</h1>\n        <h2\n            class=\"font-weight-bold font-italic text-light\"\n            style=\"border-bottom: 2px solid salmon;\"\n        >\n            {{ title }}\n        </h2>\n        <div class=\"div\" *ngFor=\"let data of displayData\">\n            <div class=\"card m-4 p-3\" (click)=\"navigateTo(data)\">\n                <div class=\"row\">\n                    <div class=\"col-2\" *ngIf=\"data.img\">\n                        <img [src]=\"data.img\" />\n                    </div>\n                    <div class=\"col\">\n                        <div class=\"card-title\">{{ data.title }}</div>\n                        <div class=\"card-subtitle\">{{ data.subtitle }}</div>\n                        <div class=\"card-body\">\n                            {{ data.body }}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/search/search.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/search/search.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\n    <app-navbar></app-navbar>\n    <p\n        *ngIf=\"false\"\n        class=\"text-center text-light font-italic pb-2\"\n        style=\"font-size: 12px; transition: 50ms all;\"\n    >\n        Search watchlists by title, reviews for a movie, user profiles by\n        username, movies & tv shows by name.\n    </p>\n    <form\n        [formGroup]=\"searchForm\"\n        (ngSubmit)=\"onSubmit()\"\n        class=\"animated fadeInUp\"\n    >\n        <div class=\"container\">\n            <input\n                type=\"text\"\n                formControlName=\"search\"\n                placeholder=\"Search...\"\n            />\n            <div class=\"search\"></div>\n        </div>\n\n        <div class=\"container m-auto text-center\" id=\"radios\">\n            <label for=\"watchlist\">\n                <input\n                    type=\"radio\"\n                    formControlName=\"type\"\n                    id=\"watchlist\"\n                    value=\"watchlist\"\n                    checked\n                />\n                <span> ‎‎🎞️</span>\n            </label>\n            <label for=\"review\">\n                <input\n                    type=\"radio\"\n                    formControlName=\"type\"\n                    id=\"review\"\n                    value=\"review\"\n                />\n                <span>📚</span>\n            </label>\n            <label for=\"profile\">\n                <input\n                    type=\"radio\"\n                    formControlName=\"type\"\n                    id=\"profile\"\n                    value=\"profile\"\n                />\n                <span>👥</span>\n            </label>\n            <label for=\"tv show\">\n                <input\n                    type=\"radio\"\n                    formControlName=\"type\"\n                    id=\"tv show\"\n                    value=\"tvShow\"\n                />\n                <span>📺</span>\n            </label>\n            <label for=\"movie\">\n                <input\n                    type=\"radio\"\n                    formControlName=\"type\"\n                    id=\"movie\"\n                    value=\"movie\"\n                />\n                <span>🎥</span>\n            </label>\n            <div class=\"row text-center p-5\">\n                <button\n                    type=\"submit\"\n                    class=\"btn btn-success m-auto p-2\"\n                    [disabled]=\"searchForm.invalid\"\n                    style=\"border-radius: 17px;\"\n                >\n                    SUBMIT\n                </button>\n            </div>\n        </div>\n    </form>\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/settings/settings.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/settings/settings.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\n    <app-navbar></app-navbar>\n    <h1 class=\"display-4 p text-center text-light\">Update your profile</h1>\n    <div class=\"container p-3 m-3 w-75 rounded m-auto bg-light\">\n        <!-- update avatar form -->\n        <div class=\"text-center m-auto pb-3\">\n            <img\n                class=\"m-auto\"\n                src=\"{{ avatarURL }}\"\n                height=\"50\"\n                (click)=\"shuffleAvatar()\"\n            />\n        </div>\n\n        <!-- update username form -->\n        <form\n            [formGroup]=\"usernameForm\"\n            (ngSubmit)=\"updateUsername()\"\n            class=\"animated fadeInDown p-1\"\n        >\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <div class=\"input-group-text\">🤠</div>\n                </div>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    formControlName=\"username\"\n                    id=\"updateUsername\"\n                    placeholder=\"Update username\"\n                />\n                <div class=\"input-group-append\">\n                    <button\n                        class=\"btn btn-outline-success\"\n                        type=\"submit\"\n                        [disabled]=\"!usernameForm.valid\"\n                    >\n                        Submit\n                    </button>\n                </div>\n            </div>\n        </form>\n        <hr />\n        <!-- update password form -->\n        <form\n            [formGroup]=\"passwordForm\"\n            (ngSubmit)=\"updatePassword()\"\n            class=\"animated fadeInDown p-1\"\n        >\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <div class=\"input-group-text\">🔒</div>\n                </div>\n                <input\n                    type=\"password\"\n                    class=\"form-control\"\n                    formControlName=\"password\"\n                    id=\"updatePassword\"\n                    placeholder=\"Update password\"\n                />\n                <div class=\"input-group-append\">\n                    <button\n                        class=\"btn btn-outline-success\"\n                        type=\"submit\"\n                        [disabled]=\"!passwordForm.valid\"\n                    >\n                        Submit\n                    </button>\n                </div>\n            </div>\n            <p\n                class=\"text-danger\"\n                *ngIf=\"\n                    passwordForm.invalid &&\n                    (passwordForm.touched || passwordForm.dirty)\n                \"\n            >\n                Password should be between 3 and 15 characters long.\n            </p>\n        </form>\n        <hr />\n        <!-- update bio, how much chars is max?? -->\n        <form\n            [formGroup]=\"bioForm\"\n            (ngSubmit)=\"updateBio()\"\n            class=\"animated fadeInDown p-1\"\n        >\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <div class=\"input-group-text\">🏞️</div>\n                </div>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    formControlName=\"bio\"\n                    id=\"updateBio\"\n                    placeholder=\"Update bio\"\n                />\n                <div class=\"input-group-append\">\n                    <button\n                        class=\"btn btn-outline-success\"\n                        type=\"submit\"\n                        [disabled]=\"!bioForm.valid\"\n                    >\n                        Submit\n                    </button>\n                </div>\n            </div>\n            <p\n                class=\"text-danger\"\n                *ngIf=\"bioForm.invalid && (bioForm.touched || bioForm.dirty)\"\n            >\n                Bio should be max. 250 characters long.\n            </p>\n        </form>\n        <hr />\n        <!-- update currently watching -->\n        <form\n            [formGroup]=\"currWatchingForm\"\n            (ngSubmit)=\"updateCurrentlyWatching()\"\n            class=\"animated fadeInDown p-1\"\n        >\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <div class=\"input-group-text\">📼</div>\n                </div>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    formControlName=\"currentlyWatching\"\n                    id=\"updateCurrentlyWatching\"\n                    placeholder=\"Update currently watching\"\n                />\n                <div class=\"input-group-append\">\n                    <button\n                        class=\"btn btn-outline-success\"\n                        type=\"submit\"\n                        [disabled]=\"!currWatchingForm.valid\"\n                    >\n                        Submit\n                    </button>\n                </div>\n            </div>\n        </form>\n        <hr />\n        <!-- update favorites -->\n        <!-- update movie -->\n        <form\n            [formGroup]=\"favoritesForm\"\n            (ngSubmit)=\"updateFavorites()\"\n            class=\"animated fadeInDown p-1\"\n        >\n            <div class=\"input-group p-1\">\n                <div class=\"input-group-prepend\">\n                    <div class=\"input-group-text\">📽️</div>\n                </div>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    formControlName=\"movie\"\n                    id=\"updateMovie\"\n                    placeholder=\"Update favorite movie\"\n                />\n            </div>\n            <!-- update tv show -->\n            <div class=\"input-group p-1\">\n                <div class=\"input-group-prepend\">\n                    <div class=\"input-group-text\">📺</div>\n                </div>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    formControlName=\"tvShow\"\n                    id=\"updateTvShow\"\n                    placeholder=\"Update favorite tv show\"\n                />\n            </div>\n            <!-- update actor -->\n            <div class=\"input-group p-1\">\n                <div class=\"input-group-prepend\">\n                    <div class=\"input-group-text\">👨‍🎤</div>\n                </div>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    formControlName=\"actor\"\n                    id=\"updateActor\"\n                    placeholder=\"Update favorite actor/actress\"\n                />\n            </div>\n            <!-- update genre -->\n            <div class=\"input-group p-1\">\n                <div class=\"input-group-prepend\">\n                    <div class=\"input-group-text\">🍿</div>\n                </div>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    formControlName=\"genre\"\n                    id=\"updateGenre\"\n                    placeholder=\"Update favorite genre\"\n                />\n                <button\n                    class=\"btn btn-outline-success\"\n                    type=\"submit\"\n                    [disabled]=\"!favoritesForm.touched\"\n                >\n                    Submit\n                </button>\n            </div>\n        </form>\n    </div>\n    <div class=\"h-25\"></div>\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/tv/tv.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/tv/tv.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\n    <app-navbar></app-navbar>\n    <div\n        class=\"container mb-5 text-dark animated fadeInUp\"\n        *ngIf=\"!writingReview && !addingToWatchlist\"\n    >\n        <section class=\"product\">\n            <div class=\"product__photo\">\n                <div class=\"photo-container\">\n                    <div class=\"photo-main\">\n                        <img\n                            src=\"{{ tv?.poster_path }}\"\n                            style=\"width: 100%; \"\n                        />\n                    </div>\n                </div>\n            </div>\n            <div class=\"product__info\">\n                <div class=\"price\">\n                    <span>{{ tv.original_name }}</span>\n                </div>\n                <div class=\"description\">\n                    <p>{{ tv.overview }}</p>\n                    <hr />\n                    <h3 style=\"display: inline; padding: 7px;\">Genres:</h3>\n                    <p\n                        *ngFor=\"let genre of tv.genres\"\n                        style=\"display: inline; padding: 7px;\"\n                    >\n                        {{ genreEmojis[genre.name] }} {{ genre.name }}\n                    </p>\n                    <div class=\"pt-4\">\n                        <button\n                            class=\"btn btn-outline-success btn-sm m-1 p-2\"\n                            (click)=\"addWatchlists()\"\n                        >\n                            <i class=\"fas fa-highlighter p-1\"></i> Add to\n                            watchlist\n                        </button>\n                        <button\n                            class=\"btn btnPink btn-sm m-1\"\n                            (click)=\"writeReview()\"\n                        >\n                            <i class=\"fas fa-clipboard-list p-1\"></i> Write a\n                            review\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </section>\n    </div>\n\n    <!-- R E V I E W  -->\n    <div\n        class=\"text-center container mb-5 bg-light p-5 rounded animated fadeInUp\"\n        *ngIf=\"writingReview && !addingToWatchlist\"\n    >\n        <button\n            class=\"btn btn-outline-danger btn-sm ml-auto\"\n            (click)=\"closeReview()\"\n        >\n            <i class=\"fas fa-times\" style=\"cursor:pointer;\"></i>\n        </button>\n        <h6 class=\"display-4\">Write a review</h6>\n        <!-- R E V I E W F O R M -->\n        <form\n            [formGroup]=\"reviewForm\"\n            (ngSubmit)=\"submitReview()\"\n            class=\"animated fadeInDown\"\n        >\n            <!-- T E M P L A T E  -->\n            <ng-template #t let-i=\"index\" let-v=\"value\">\n                <button\n                    type=\"button\"\n                    class=\"btn btn-sm btn{{ i < v ? 'Pink' : '-default' }} p-2\"\n                    style=\"border-radius: 10px; transition: all 0.1s;\"\n                >\n                    {{ i < v ? \"&#9733;\" : \"&#9734;\" }}\n                </button>\n            </ng-template>\n            <!-- R A T I N G  -->\n            <div class=\"p-3\">\n                <rating\n                    [max]=\"5\"\n                    formControlName=\"rating\"\n                    [customTemplate]=\"t\"\n                    style=\"font-size: 20px;\"\n                ></rating>\n            </div>\n            <div class=\"input-group pb-3\">\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    formControlName=\"title\"\n                    id=\"title\"\n                    placeholder=\"Review title\"\n                />\n            </div>\n            <div class=\"form-group\">\n                <textarea\n                    class=\"form-control rounded-0\"\n                    formControlName=\"reviewText\"\n                    placeholder=\"Review text...\"\n                    rows=\"3\"\n                ></textarea>\n            </div>\n            <!-- S U B M I T  -->\n            <div class=\"p-2 ml-auto\">\n                <button\n                    class=\"btn btn-outline-success\"\n                    type=\"submit\"\n                    [disabled]=\"!reviewForm.valid\"\n                >\n                    Submit\n                </button>\n            </div>\n        </form>\n        <hr />\n    </div>\n\n    <!-- W A T C H L I S T -->\n    <div class=\"container\" *ngIf=\"addingToWatchlist && !writingReview\">\n        <button\n            class=\"btn btn-outline-danger btn-sm ml-auto\"\n            (click)=\"closeWatchlist()\"\n        >\n            <i class=\"fas fa-times\" style=\"cursor:pointer;\"></i>\n        </button>\n        <h6 class=\"display-4 font-italic p-3 text-light\">Add to watchlist</h6>\n        <div class=\"container m-3 bg-light p-3 rounded animated fadeInUp\">\n            <div *ngFor=\"let w of watchlists\">\n                <i class=\"fas fa-asterisk pl-3\" style=\"font-size: 13px;\"></i>\n                <p class=\"lead pl-1 d-inline-block\" (click)=\"addToWatchlist(w)\">\n                    {{ w.title }}\n                </p>\n                <hr />\n            </div>\n        </div>\n    </div>\n\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/watchlists/watchlists.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/watchlists/watchlists.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back animated fadeIn\">\n    <app-navbar></app-navbar>\n    <div *ngIf=\"!writingWatchlist\">\n        <div class=\"text-right mr-5 mb-5 animated fadeIn\">\n            <button\n                type=\"button\"\n                class=\"btn btn-success\"\n                (click)=\"createWatchlist()\"\n            >\n                <i class=\"fas fa-plus p-1\"></i> Create new watchlist\n            </button>\n        </div>\n        <div class=\"container animated fadeInUp\">\n            <div class=\"box\" *ngFor=\"let watchlist of watchlists\">\n                <div class=\"boxContent\">\n                    <i class=\"fas fa-tv icon\"></i>\n                    <h1 class=\"title\">{{ watchlist.title }}</h1>\n                    <p class=\"desc\">\n                       <strong>{{ watchlist.author_id.username }}</strong>\n                        <br />\n                        <em>{{ watchlist.description }}</em>\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- W A T C H L I S T  -->\n    <div\n        class=\"m-5 p-5 bg-light rounded animated fadeInUp\"\n        *ngIf=\"writingWatchlist\"\n    >\n        <button\n            class=\"btn btn-outline-danger btn-sm\"\n            style=\"float: right\"\n            (click)=\"closeWatchlist()\"\n        >\n            <i class=\"fas fa-times\" style=\"cursor:pointer;\"></i>\n        </button>\n        <h6 class=\"display-4\">Create new watchlist</h6>\n        <!-- R E V I E W F O R M -->\n        <form\n            [formGroup]=\"watchlistForm\"\n            (ngSubmit)=\"submitWatchlist()\"\n            class=\"animated fadeInDown\"\n        >\n            <div class=\"input-group pb-3\">\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    formControlName=\"title\"\n                    id=\"title\"\n                    placeholder=\"Watchlist title\"\n                />\n            </div>\n            <div class=\"form-group\">\n                <textarea\n                    class=\"form-control rounded-0\"\n                    formControlName=\"description\"\n                    placeholder=\"Watchlist description...\"\n                    rows=\"3\"\n                ></textarea>\n            </div>\n            <!-- S U B M I T  -->\n            <div class=\"p-2 ml-auto\">\n                <button\n                    class=\"btn btn-outline-success\"\n                    type=\"submit\"\n                    [disabled]=\"!watchlistForm.valid\"\n                >\n                    Submit\n                </button>\n            </div>\n        </form>\n        <hr />\n    </div>\n\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/welcome/welcome.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/welcome/welcome.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fluid-container\">\n        <div class=\"nav p-5 mb-5 animated fadeIn\">\n            <a [routerLink]=\"['/login']\" class=\"ml-auto m-5 cool-link\" id=\"login\"\n                >LOGIN</a\n            >\n            <a [routerLink]=\"['/register']\" class=\"m-5\" id=\"register\">REGISTER</a>\n        </div>\n        <!--  -->\n        <div\n            class=\"row text-light pl-5 pt-5 m-0 animated fadeIn\"\n            *ngIf=\"!learnMore\"\n        >\n            <div class=\"col-9\">\n                <img\n                    *ngIf=\"false\"\n                    class=\"noselect\"\n                    src=\"../../../assets/img/logo.png\"\n                    alt=\"The Moviest \"\n                />\n            </div>\n            <div class=\"col m-5 text-right\">\n                <p\n                    class=\"cool-link font-weight-bold mt-5 pt-5\"\n                    (click)=\"toggleLearnMore()\"\n                >\n                    LEARN MORE <i class=\"fas fa-chevron-right p-1\"></i>\n                </p>\n            </div>\n        </div>\n        <div\n        *ngIf=\"learnMore\"\n        class=\"text-dark pl-5 pr-5 pb-5 m-0 row rounded animated fadeInLeft\"\n        id=\"learnMore\"\n    >\n        <div class=\"col-12 text-right\">\n            <p\n                class=\"cool-link text-dark font-weight-bold mt-5 text-right\"\n                (click)=\"toggleLearnMore()\"\n            >\n                BACK <i class=\"fas fa-chevron-left p-1\"></i>\n            </p>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-7\">\n                <h4 style=\"border-bottom: 7px solid rgb(11, 20, 99);\">\n                    Platform for your favorite movies & TV shows.\n                </h4>\n                <p class=\"font-italic\">\n                    Register by entering your e-mail, username & password.\n                    Discover popular movies & TV shows, write reviews, create\n                    watchlists, customize your profile...\n                </p>\n            </div>\n        </div>\n    </div>\n        <video autoplay loop [muted]=\"true\" id=\"background\">\n            <source src=\"../../../assets/bg.webm\" type=\"video/webm\" />\n        </video>\n    </div>\n    "

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/components/welcome/welcome.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_discover_discover_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/discover/discover.component */ "./src/app/components/discover/discover.component.ts");
/* harmony import */ var _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/movie/movie.component */ "./src/app/components/movie/movie.component.ts");
/* harmony import */ var _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/reviews/reviews.component */ "./src/app/components/reviews/reviews.component.ts");
/* harmony import */ var _components_watchlists_watchlists_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/watchlists/watchlists.component */ "./src/app/components/watchlists/watchlists.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_tv_tv_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/tv/tv.component */ "./src/app/components/tv/tv.component.ts");
/* harmony import */ var _components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/search-result/search-result.component */ "./src/app/components/search-result/search-result.component.ts");
/* harmony import */ var _components_details_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/details/details.component */ "./src/app/components/details/details.component.ts");


















const routes = [
    { path: "", redirectTo: "welcome", pathMatch: "full" },
    { path: "welcome", component: _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"] },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: "register", component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: "home", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    {
        path: "discover",
        component: _components_discover_discover_component__WEBPACK_IMPORTED_MODULE_8__["DiscoverComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    { path: "movie/:id", component: _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_9__["MovieComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: "tv/:id", component: _components_tv_tv_component__WEBPACK_IMPORTED_MODULE_15__["TvComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    {
        path: "reviews",
        component: _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_10__["ReviewsComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: { routeName: "allReviews" }
    },
    {
        path: "reviews/:id",
        component: _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_10__["ReviewsComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: "watchlists",
        component: _components_watchlists_watchlists_component__WEBPACK_IMPORTED_MODULE_11__["WatchlistsComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: { routeName: "allWatchlists" }
    },
    {
        path: "watchlists/:id",
        component: _components_watchlists_watchlists_component__WEBPACK_IMPORTED_MODULE_11__["WatchlistsComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: "details",
        component: _components_details_details_component__WEBPACK_IMPORTED_MODULE_17__["DetailsComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    { path: "search", component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    {
        path: "searchResult",
        component: _components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_16__["SearchResultComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: "profile/:id",
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: "settings",
        component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    { path: "**", redirectTo: "welcome" }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                onSameUrlNavigation: "reload"
            })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'the-moviest';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/components/welcome/welcome.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/rating */ "./node_modules/ngx-bootstrap/rating/fesm2015/ngx-bootstrap-rating.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_discover_discover_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/discover/discover.component */ "./src/app/components/discover/discover.component.ts");
/* harmony import */ var _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/movie/movie.component */ "./src/app/components/movie/movie.component.ts");
/* harmony import */ var _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/reviews/reviews.component */ "./src/app/components/reviews/reviews.component.ts");
/* harmony import */ var _components_watchlists_watchlists_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/watchlists/watchlists.component */ "./src/app/components/watchlists/watchlists.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _components_tv_tv_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/tv/tv.component */ "./src/app/components/tv/tv.component.ts");
/* harmony import */ var _components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/search-result/search-result.component */ "./src/app/components/search-result/search-result.component.ts");
/* harmony import */ var _components_details_details_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/details/details.component */ "./src/app/components/details/details.component.ts");





























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
            _components_discover_discover_component__WEBPACK_IMPORTED_MODULE_19__["DiscoverComponent"],
            _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_20__["MovieComponent"],
            _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_21__["ReviewsComponent"],
            _components_watchlists_watchlists_component__WEBPACK_IMPORTED_MODULE_22__["WatchlistsComponent"],
            _components_search_search_component__WEBPACK_IMPORTED_MODULE_23__["SearchComponent"],
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_24__["ProfileComponent"],
            _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_25__["SettingsComponent"],
            _components_tv_tv_component__WEBPACK_IMPORTED_MODULE_26__["TvComponent"],
            _components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_27__["SearchResultComponent"],
            _components_details_details_component__WEBPACK_IMPORTED_MODULE_28__["DetailsComponent"]
        ],
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__["ModalModule"].forRoot(),
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_17__["CarouselModule"].forRoot(),
            ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_14__["RatingModule"].forRoot(),
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
                timeOut: 1750,
                positionClass: "toast-top-right",
                countDuplicates: true,
                preventDuplicates: true,
                maxOpened: 5
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/classes/token.ts":
/*!**********************************!*\
  !*** ./src/app/classes/token.ts ***!
  \**********************************/
/*! exports provided: Token */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Token", function() { return Token; });
class Token {
    static parse(token) {
        let payload;
        let data;
        data = token.split(".")[1];
        data = window.atob(data);
        payload = JSON.parse(data);
        return payload;
    }
    static save(token) {
        window.localStorage['the-moviest'] = token;
    }
    static get() {
        return window.localStorage['the-moviest'];
    }
    static remove() {
        window.localStorage.removeItem('the-moviest');
    }
}


/***/ }),

/***/ "./src/app/components/details/details.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/details/details.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\n    background-image: url('10.jpg');\n    background-attachment: fixed;\n    background-size: cover;\n    position: relative;\n    height: 100%;\n    overflow: auto;\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 30px;\n    padding-bottom: 125px;\n    min-height: 100vh;\n    padding-bottom: 155px;\n    font-family: \"Montserrat\", sans-serif;\n    width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUFzRDtJQUN0RCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztJQUNkLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIscUNBQXFDO0lBQ3JDLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjayB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iZy8xMC5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTI1cHg7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1NXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/details/details.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/details/details.component.ts ***!
  \*********************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DetailsComponent = class DetailsComponent {
    constructor() { }
    ngOnInit() {
    }
};
DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details',
        template: __webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/details/details.component.html"),
        styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/components/details/details.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DetailsComponent);



/***/ }),

/***/ "./src/app/components/discover/discover.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/discover/discover.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\n    background-image: url('13.jpg');\n    background-attachment: fixed;\n    background-size: cover;\n    position: relative;\n    height: 100%;\n    overflow: auto;\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 30px;\n    padding-bottom: 155px;\n    min-height: 100vh;\n    width: 100%;\n}\n\n.container {\n    display: flex;\n    box-sizing: border-box;\n    padding: 20px;\n    width: 100%;\n}\n\ni {\n    position: relative;\n    top: 40%;\n    color: whitesmoke;\n}\n\ni:hover {\n    cursor: pointer;\n    color: rgb(72, 121, 255);\n    text-shadow: 0px 0px 25px #9a6bf3;\n    transition: all 0.1s ease-in;\n}\n\nh1 {\n    font-style: italic;\n}\n\nh1 > img {\n    width: 90px;\n    height: 90px;\n    padding: 10px;\n}\n\n.bg {\n    background-color: rgba(143, 106, 132, 0.075);\n}\n\n.box {\n    flex: 1;\n    overflow: hidden;\n    transition: 0.5s;\n    margin: 0 2%;\n    height: 450px;\n    border-radius: 10px;\n    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);\n    line-height: 0;\n}\n\n.box > a > img {\n    width: 200%;\n    height: calc(100% - 10vh);\n    -o-object-fit: cover;\n    object-fit: cover;\n    transition: 0.5s;\n}\n\n.box > a > span {\n    font-size: 17px;\n    padding-top: 20px;\n    display: block;\n    text-align: center;\n    height: 10vh;\n    line-height: 1.5;\n    color: white;\n    background-color: rgba(95, 73, 197, 0.404);\n}\n\n.box:hover {\n    flex: 1 1 30%;\n}\n\n.box:hover > a > img {\n    width: 100%;\n    height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaXNjb3Zlci9kaXNjb3Zlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQXNEO0lBQ3RELDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0lBQ2QscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixpQ0FBaUM7SUFJakMsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksT0FBTztJQUNQLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlzY292ZXIvZGlzY292ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnLzEzLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNTVweDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDQwJTtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuaTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiByZ2IoNzIsIDEyMSwgMjU1KTtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAyNXB4ICM5YTZiZjM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW47XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW47XG59XG5cbmgxIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbmgxID4gaW1nIHtcbiAgICB3aWR0aDogOTBweDtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmJnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0MywgMTA2LCAxMzIsIDAuMDc1KTtcbn1cblxuLmJveCB7XG4gICAgZmxleDogMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgbWFyZ2luOiAwIDIlO1xuICAgIGhlaWdodDogNDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDIwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG59XG5cbi5ib3ggPiBhID4gaW1nIHtcbiAgICB3aWR0aDogMjAwJTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwdmgpO1xuICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5ib3ggPiBhID4gc3BhbiB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NSwgNzMsIDE5NywgMC40MDQpO1xufVxuXG4uYm94OmhvdmVyIHtcbiAgICBmbGV4OiAxIDEgMzAlO1xufVxuXG4uYm94OmhvdmVyID4gYSA+IGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/discover/discover.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/discover/discover.component.ts ***!
  \***********************************************************/
/*! exports provided: DiscoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverComponent", function() { return DiscoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tv.service */ "./src/app/services/tv.service.ts");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let DiscoverComponent = class DiscoverComponent {
    constructor(tvService, movieService) {
        this.tvService = tvService;
        this.movieService = movieService;
        this.moviePage = 0;
        this.tvPage = 0;
    }
    ngOnInit() {
        // simulate 2 requests - TV & movie service
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(this.movieService.moviesInTheathers(), this.tvService.discoverTV()).subscribe(([resMovie, resTv]) => {
            this.movies = this.posterMovie(resMovie);
            this.tv = this.posterTv(resTv);
            this.parseMovie(0);
            this.parseTv(0);
        });
    }
    posterTv(tv) {
        let newTv = tv.results;
        newTv.poster_path = tv.results.map(tvs => (tvs.poster_path =
            "https://image.tmdb.org/t/p/original" + tvs.poster_path));
        return newTv;
    }
    posterMovie(movie) {
        let newMovie = movie.results;
        newMovie.poster_path = movie.results.map(movies => (movies.poster_path =
            "https://image.tmdb.org/t/p/original" + movies.poster_path));
        return newMovie;
    }
    parseTv(num) {
        if (this.tvPage === 0 && num === -4) {
            this.tvPage = 16;
        }
        else {
            this.tvPage = (this.tvPage + num) % 20;
        }
        this.tvDisplay = this.tv.slice(this.tvPage, this.tvPage + 4);
    }
    parseMovie(num) {
        if (this.moviePage === 0 && num === -4) {
            this.moviePage = 16;
        }
        else {
            this.moviePage = (this.moviePage + num) % 20;
        }
        this.moviesDisplay = this.movies.slice(this.moviePage, this.moviePage + 4);
    }
};
DiscoverComponent.ctorParameters = () => [
    { type: _services_tv_service__WEBPACK_IMPORTED_MODULE_2__["TvService"] },
    { type: _services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"] }
];
DiscoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-discover",
        template: __webpack_require__(/*! raw-loader!./discover.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/discover/discover.component.html"),
        styles: [__webpack_require__(/*! ./discover.component.css */ "./src/app/components/discover/discover.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tv_service__WEBPACK_IMPORTED_MODULE_2__["TvService"],
        _services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"]])
], DiscoverComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n    background: #0000003a;\n    background-attachment: fixed;\n    background-position: center;\n    display: inline-block;\n    height: 145px;\n    min-width: 100%;\n    overflow: auto;\n    padding: 40px;\n    padding-top: 30px;\n    position: absolute;\n    bottom: 0;\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 30px;\n    text-transform: uppercase;\n    font-weight: bold;\n    color: white;\n    z-index: -100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwM2E7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMTQ1cHg7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHotaW5kZXg6IC0xMDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() { }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-footer",
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\n    background-image: url('13.jpg');\n    background-attachment: fixed;\n    background-size: cover;\n    position: relative;\n    height: 100%;\n    overflow: auto;\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 30px;\n    text-transform: uppercase;\n    padding-bottom: 155px;\n    min-height: 100vh;\n    width: 100%;\n}\n\napp-footer {\n    width: 100%;\n}\n\n.container-fluid{\n    width: 90%;\n}\n\n.title {\n    font-size: 60px;\n    font-weight: bold;\n    color: white;\n    letter-spacing: 15px;\n    font-family: \"Montserrat\", sans-serif;\n    border-bottom: 10px solid #06285a;\n}\n\n.titleRight {\n    font-size: 60px;\n    font-weight: bold;\n    color: white;\n    letter-spacing: 15px;\n    text-align: right;\n    font-family: \"Montserrat\", sans-serif;\n    border-bottom: 10px solid #e63e65;\n}\n\n/* ////////////////////////////////////// */\n\nslide {\n    background: black;\n}\n\nimg {\n    opacity: 0.5;\n    filter: alpha(opacity=50);\n}\n\nimg:hover {\n    opacity: 0.8;\n    filter: alpha(opacity=80);\n    transition: 0.5s all;\n}\n\nh3 {\n    font-weight: bold;\n    font-size: 60px;\n    text-shadow: 1px 1px 15px #000000;\n    font-family: \"Montserrat\", sans-serif;\n}\n\na:hover {\n    cursor: pointer;\n}\n\nh5 {\n    font-weight: bold;\n    letter-spacing: 4px;\n    font-size: 23px;\n}\n\n.lead {\n    font-size: 13px;\n    text-transform: none;\n    font-style: italic;\n    letter-spacing: 1px;\n}\n\n.card {\n    background: rgba(255, 255, 255, 0.7);\n    border-top-left-radius: 50px;\n    border-bottom-right-radius: 50px;\n    border-bottom-left-radius: 10px;\n    border-top-right-radius: 10px;\n    margin: 15px;\n}\n\n.card-body {\n    font-size: 12px;\n}\n\n/* ////////////////////////////////////// */\n\n.blocks {\n    position: relative;\n    justify-items: center;\n    display: flex;\n    border-radius: 100px;\n    width: 100%;\n}\n\n.blocks .block {\n    position: relative;\n    align-self: center;\n    display: block;\n    width: 270px;\n    height: 270px;\n    margin: 30px;\n    -webkit-transform: perspective(600px) rotateY(-30deg);\n    transform: perspective(600px) rotateY(-30deg);\n    transition: -webkit-transform 0.3s;\n    transition: transform 0.3s;\n    transition: transform 0.3s, -webkit-transform 0.3s;\n}\n\n.blocks .block img {\n    height: auto;\n    max-width: 100%;\n}\n\n.blocks .block .overlay {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 2;\n    color: white;\n    font-weight: bold;\n    font-size: 30px;\n    letter-spacing: 2px;\n    background-color: rgba(0, 0, 0, 0.5);\n    opacity: 0;\n    transition: opacity 0.3s ease;\n    -webkit-transform: translate3d(0, 0, 0);\n}\n\n.blocks .block .overlay img {\n    width: auto;\n    max-width: 50%;\n}\n\n.blocks .block.hover,\n.blocks .block:hover {\n    color: white;\n    font-weight: bold;\n    font-size: 30px;\n    letter-spacing: 2px;\n    -webkit-transform: rotateY(0);\n    transform: rotateY(0);\n    cursor: pointer;\n}\n\n.blocks .block.hover .overlay,\n.blocks .block:hover .overlay {\n    color: white;\n    font-weight: bold;\n    font-size: 30px;\n    letter-spacing: 2px;\n    opacity: 1;\n}\n\n/* //////////////////////////////////////////////////////// */\n\n* {\n    box-sizing: border-box;\n}\n\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n.button-text {\n    font-size: 1rem;\n    line-height: 1.5;\n}\n\nbutton {\n    position: relative;\n    top: 0px;\n    display: inline-block;\n    cursor: pointer;\n    outline: none;\n    border: 0;\n    text-decoration: none;\n    background: transparent;\n    padding: 0;\n    font-size: inherit;\n    font-family: inherit;\n}\n\nbutton.learn-more {\n    width: 12rem;\n    height: auto;\n}\n\nbutton.learn-more .circle {\n    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n    position: relative;\n    margin: 0;\n    width: 3rem;\n    height: 3rem;\n    background: #e63e65;\n    border-radius: 1.625rem;\n}\n\nbutton.learn-more .circle .icon {\n    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    background: #fff;\n}\n\nbutton.learn-more .circle .icon.arrow {\n    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n    left: 0.625rem;\n    width: 1.125rem;\n    height: 0.125rem;\n    background: none;\n}\n\nbutton.learn-more .circle .icon.arrow::before {\n    position: absolute;\n    content: \"\";\n    top: -0.25rem;\n    right: 0.0625rem;\n    width: 0.625rem;\n    height: 0.625rem;\n    border-top: 0.125rem solid #fff;\n    border-right: 0.125rem solid #fff;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n}\n\nbutton.learn-more .button-text {\n    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    padding: 0.75rem 0;\n    margin: 0 0 0 1.85rem;\n    color: #282936;\n    font-weight: 700;\n    line-height: 1.6;\n    text-align: center;\n    text-transform: uppercase;\n}\n\nbutton:hover .circle {\n    width: 100%;\n}\n\nbutton:hover .circle .icon.arrow {\n    background: #fff;\n    -webkit-transform: translate(1rem, 0);\n    transform: translate(1rem, 0);\n}\n\nbutton:hover .button-text {\n    color: #fff;\n}\n\n/* ////////////////////////////////////// */\n\n.c-preview {\n    background: #000;\n    /* FF3.6-15 */\n    /* Chrome10-25,Safari5.1-6 */\n    background: linear-gradient(\n        135deg,\n        #000000 0%,\n        #000000 25%,\n        #1e539e 50%,\n        #ff3083 75%,\n        #7800a8 100%\n    );\n    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    background-size: 400% 400%;\n    background-repeat: no-repeat;\n    color: #fff;\n    cursor: pointer;\n    transition: 0.5s all;\n    border-top-left-radius: 50px;\n    border-top-right-radius: 10px;\n}\n\n.c-preview__img {\n    z-index: 1;\n    opacity: 0.8;\n    mix-blend-mode: screen;\n    border-top-left-radius: 50px;\n    border-top-right-radius: 10px;\n}\n\n.c-preview:hover {\n    background-position: 100% 100%;\n    border-top-left-radius: 50px;\n    border-top-right-radius: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUFzRDtJQUN0RCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztJQUNkLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLHFDQUFxQztJQUNyQyxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLHFDQUFxQztJQUNyQyxpQ0FBaUM7QUFDckM7O0FBRUEsMkNBQTJDOztBQUUzQztJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLHFDQUFxQztBQUN6Qzs7QUFFQztJQUNHLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQywrQkFBK0I7SUFDL0IsNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBLDJDQUEyQzs7QUFFM0M7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsV0FBVztBQUNmOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1oscURBQXFEO0lBQ3JELDZDQUE2QztJQUM3QyxrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLGtEQUFrRDtBQUN0RDs7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLHVDQUF1QztBQUMzQzs7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUNBOztJQUVJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBQ0E7O0lBRUksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQSw2REFBNkQ7O0FBRTdEO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUNBOztJQUVJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxxREFBcUQ7SUFDckQsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxxREFBcUQ7SUFDckQsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLHFEQUFxRDtJQUNyRCxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiwrQkFBK0I7SUFDL0IsaUNBQWlDO0lBQ2pDLGdDQUFnQztJQUNoQyx3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSxxREFBcUQ7SUFDckQsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIscUNBQXFDO0lBQ3JDLDZCQUE2QjtBQUNqQzs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFFQSwyQ0FBMkM7O0FBRTNDO0lBQ0ksZ0JBQWdCO0lBU2hCLGFBQWE7SUFTYiw0QkFBNEI7SUFDNUI7Ozs7Ozs7S0FPQztJQUNELHFEQUFxRDtJQUNyRCwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2sge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvMTMuanBnXCIpO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTU1cHg7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmFwcC1mb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWZsdWlke1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMTVweDtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjMDYyODVhO1xufVxuXG4udGl0bGVSaWdodCB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMTVweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZTYzZTY1O1xufVxuXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuXG5zbGlkZSB7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmltZyB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT01MCk7XG59XG5cbmltZzpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT04MCk7XG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGw7XG59XG5cbmgzIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMTVweCAjMDAwMDAwO1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbn1cblxuIGE6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaDUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgZm9udC1zaXplOiAyM3B4O1xufVxuXG4ubGVhZCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4uY2FyZCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICBtYXJnaW46IDE1cHg7XG59XG5cbi5jYXJkLWJvZHkge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cblxuLmJsb2NrcyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmJsb2NrcyAuYmxvY2sge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDI3MHB4O1xuICAgIGhlaWdodDogMjcwcHg7XG4gICAgbWFyZ2luOiAzMHB4O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg2MDBweCkgcm90YXRlWSgtMzBkZWcpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNjAwcHgpIHJvdGF0ZVkoLTMwZGVnKTtcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjNzO1xufVxuLmJsb2NrcyAuYmxvY2sgaW1nIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLmJsb2NrcyAuYmxvY2sgLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cbi5ibG9ja3MgLmJsb2NrIC5vdmVybGF5IGltZyB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWF4LXdpZHRoOiA1MCU7XG59XG4uYmxvY2tzIC5ibG9jay5ob3Zlcixcbi5ibG9ja3MgLmJsb2NrOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDApO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ibG9ja3MgLmJsb2NrLmhvdmVyIC5vdmVybGF5LFxuLmJsb2NrcyAuYmxvY2s6aG92ZXIgLm92ZXJsYXkge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuXG4qIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5idXR0b24tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbmJ1dHRvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xufVxuYnV0dG9uLmxlYXJuLW1vcmUge1xuICAgIHdpZHRoOiAxMnJlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5idXR0b24ubGVhcm4tbW9yZSAuY2lyY2xlIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40NXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuMDc2LCAxKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZTYzZTY1O1xuICAgIGJvcmRlci1yYWRpdXM6IDEuNjI1cmVtO1xufVxuYnV0dG9uLmxlYXJuLW1vcmUgLmNpcmNsZSAuaWNvbiB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNDVzIGN1YmljLWJlemllcigwLjY1LCAwLCAwLjA3NiwgMSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5idXR0b24ubGVhcm4tbW9yZSAuY2lyY2xlIC5pY29uLmFycm93IHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40NXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuMDc2LCAxKTtcbiAgICBsZWZ0OiAwLjYyNXJlbTtcbiAgICB3aWR0aDogMS4xMjVyZW07XG4gICAgaGVpZ2h0OiAwLjEyNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuYnV0dG9uLmxlYXJuLW1vcmUgLmNpcmNsZSAuaWNvbi5hcnJvdzo6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB0b3A6IC0wLjI1cmVtO1xuICAgIHJpZ2h0OiAwLjA2MjVyZW07XG4gICAgd2lkdGg6IDAuNjI1cmVtO1xuICAgIGhlaWdodDogMC42MjVyZW07XG4gICAgYm9yZGVyLXRvcDogMC4xMjVyZW0gc29saWQgI2ZmZjtcbiAgICBib3JkZXItcmlnaHQ6IDAuMTI1cmVtIHNvbGlkICNmZmY7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuYnV0dG9uLmxlYXJuLW1vcmUgLmJ1dHRvbi10ZXh0IHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40NXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuMDc2LCAxKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMDtcbiAgICBtYXJnaW46IDAgMCAwIDEuODVyZW07XG4gICAgY29sb3I6ICMyODI5MzY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuYnV0dG9uOmhvdmVyIC5jaXJjbGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuYnV0dG9uOmhvdmVyIC5jaXJjbGUgLmljb24uYXJyb3cge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcmVtLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcmVtLCAwKTtcbn1cbmJ1dHRvbjpob3ZlciAuYnV0dG9uLXRleHQge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuXG4uYy1wcmV2aWV3IHtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAtNDVkZWcsXG4gICAgICAgICMwMDAwMDAgMCUsXG4gICAgICAgICMwMDAwMDAgMjUlLFxuICAgICAgICAjMWU1MzllIDUwJSxcbiAgICAgICAgI2ZmMzA4MyA3NSUsXG4gICAgICAgICM3ODAwYTggMTAwJVxuICAgICk7XG4gICAgLyogRkYzLjYtMTUgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcbiAgICAgICAgLTQ1ZGVnLFxuICAgICAgICAjMDAwMDAwIDAlLFxuICAgICAgICAjMDAwMDAwIDI1JSxcbiAgICAgICAgIzFlNTM5ZSA1MCUsXG4gICAgICAgICNmZjMwODMgNzUlLFxuICAgICAgICAjNzgwMGE4IDEwMCVcbiAgICApO1xuICAgIC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAxMzVkZWcsXG4gICAgICAgICMwMDAwMDAgMCUsXG4gICAgICAgICMwMDAwMDAgMjUlLFxuICAgICAgICAjMWU1MzllIDUwJSxcbiAgICAgICAgI2ZmMzA4MyA3NSUsXG4gICAgICAgICM3ODAwYTggMTAwJVxuICAgICk7XG4gICAgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGw7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cbi5jLXByZXZpZXdfX2ltZyB7XG4gICAgei1pbmRleDogMTtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgbWl4LWJsZW5kLW1vZGU6IHNjcmVlbjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4uYy1wcmV2aWV3OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var src_app_services_tv_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tv.service */ "./src/app/services/tv.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let HomeComponent = class HomeComponent {
    constructor(movieService, tvService, router) {
        this.movieService = movieService;
        this.tvService = tvService;
        this.router = router;
    }
    ngOnInit() {
        this.movieService.weeklyTrendingMovies().subscribe((res) => {
            this.movies = res;
        }, err => console.error(err), () => {
            this.parseMovies(this.movies);
        });
        this.tvService.weeklyTrendingTv().subscribe((res) => {
            this.tv = res;
        }, err => console.error(err), () => {
            this.parseTv(this.tv);
        });
    }
    parseMovies(movies) {
        let { results } = movies;
        this.topThree = [
            this.getBackdrop(results[0]),
            this.getBackdrop(results[1]),
            this.getBackdrop(results[2])
        ];
        this.topFive = [
            this.getPoster(results[3]),
            this.getPoster(results[4]),
            this.getPoster(results[5]),
            this.getPoster(results[6]),
            this.getPoster(results[7])
        ];
    }
    getBackdrop(movie) {
        movie.poster = "https://image.tmdb.org/t/p/w1280" + movie.backdrop_path;
        return movie;
    }
    getPoster(movie) {
        movie.overview = this.getOverview(movie);
        movie.poster =
            "https://image.tmdb.org/t/p/original" + movie.poster_path;
        return movie;
    }
    getOverview(movie) {
        let re = /(.+\w+)\. /g;
        let overview = movie.overview.split(re);
        if (movie.title) {
            if (movie.title.length + movie.overview.length > 200) {
                let diff = 200 - movie.title.length;
                movie.overview = movie.overview.substring(0, diff) + "...";
            }
        }
        else if (movie.name) {
            if (movie.name.length + movie.overview.length > 200) {
                let diff = 200 - movie.name.length;
                movie.overview = movie.overview.substring(0, diff) + "...";
            }
        }
        return movie.overview;
    }
    parseTv(tv) {
        let { results } = tv;
        this.topThreeTv = [
            this.getBackdrop(results[0]),
            this.getBackdrop(results[1]),
            this.getBackdrop(results[2])
        ];
        this.topFiveTv = [
            this.getPoster(results[3]),
            this.getPoster(results[4]),
            this.getPoster(results[5]),
            this.getPoster(results[6]),
            this.getPoster(results[7])
        ];
    }
    goToMovie(id) {
        this.router.navigate(["movie", id]);
    }
    goToTv(id) {
        this.router.navigate(["tv", id]);
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] },
    { type: src_app_services_tv_service__WEBPACK_IMPORTED_MODULE_3__["TvService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"],
        src_app_services_tv_service__WEBPACK_IMPORTED_MODULE_3__["TvService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\n    background-image: linear-gradient(to bottom, #65398648, #062c6d88),\n        url('6.jpg');\n    background-image: fixed;\n    background-position: center center;\n    background-size: cover;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    min-height: 100vh;\n    min-width: 100vw;\n\n    \n}\n\n.registration-form {\n    width: 400px;\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translate(-50%, 0%);\n    transform: translate(-50%, 0%);\n    top: 15%;\n    background: transparent;\n}\n\n.registration-form header {\n    position: relative;\n    z-index: 4;\n    background: white;\n    padding: 20px 40px;\n    border-radius: 15px 15px 0 0;\n}\n\n.registration-form header h1 {\n    font-weight: 900;\n    letter-spacing: 1.5px;\n    color: #333;\n    font-size: 23px;\n    text-transform: uppercase;\n    margin: 0;\n}\n\n.registration-form header p {\n    word-spacing: 0px;\n    color: #9facb6;\n    font-size: 17px;\n    margin: 0;\n    margin-top: 5px;\n}\n\n.registration-form form {\n    position: relative;\n}\n\n.registration-form .input-section {\n    width: 100%;\n    position: absolute;\n    display: flex;\n    left: 50%;\n    -webkit-transform: translate(-50%, 0);\n    transform: translate(-50%, 0);\n    height: 75px;\n    border-radius: 0 0 15px 15px;\n    overflow: hidden;\n    z-index: 2;\n    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.2);\n    transition: all 0.2s ease-in;\n}\n\n.registration-form .input-section.folded {\n    width: 95%;\n    margin-top: 10px;\n    left: 50%;\n    -webkit-transform: translate(-50%, 0);\n    transform: translate(-50%, 0);\n    z-index: 1;\n}\n\n.registration-form .input-section.folded input {\n    background-color: #e9e2c0;\n}\n\n.registration-form .input-section.folded span {\n    background-color: #e9e2c0;\n}\n\n.registration-form .input-section.folded + .folded {\n    width: 90%;\n    margin-top: 20px;\n    left: 50%;\n    -webkit-transform: translate(-50%, 0);\n    transform: translate(-50%, 0);\n    z-index: 0;\n}\n\n.registration-form .input-section.folded + .folded input {\n    background-color: #e1bcef;\n}\n\n.registration-form .input-section.folded + .folded span {\n    background-color: #e1bcef;\n}\n\n.registration-form .input-section.fold-up {\n    margin-top: -75px;\n}\n\n.registration-form form input {\n    background: white;\n    color: #8f8fd6;\n    width: 80%;\n    border: 0;\n    padding: 20px 40px;\n    margin: 0;\n}\n\n.registration-form form input:focus {\n    outline: none;\n}\n\n.registration-form form input::-webkit-input-placeholder {\n    color: #8f8fd6;\n    font-weight: 100;\n}\n\n.registration-form form input::-ms-input-placeholder {\n    color: #8f8fd6;\n    font-weight: 100;\n}\n\n.registration-form form input::-moz-placeholder {\n    color: #8f8fd6;\n    font-weight: 100;\n}\n\n.registration-form form input::placeholder {\n    color: #8f8fd6;\n    font-weight: 100;\n}\n\n.animated-button {\n    width: 20%;\n    background-color: #d4d4ff;\n}\n\n.animated-button span {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    line-height: 75px;\n    text-align: center;\n    height: 75px;\n    transition: all 0.2s ease-in;\n}\n\n.animated-button span i {\n    font-size: 25px;\n    color: #9999f8;\n}\n\n.animated-button .next-button {\n    background: transparent;\n    color: #9999f8;\n    font-weight: 100;\n    width: 100%;\n    border: 0;\n}\n\n.next {\n    margin-top: -75px;\n}\n\n.success {\n    width: 100%;\n    position: absolute;\n    display: flex;\n    align-items: center;\n    left: 50%;\n    -webkit-transform: translate(-50%, 0);\n    transform: translate(-50%, 0);\n    height: 75px;\n    border-radius: 0 0 15px 15px;\n    overflow: hidden;\n    z-index: 2;\n    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.2);\n    transition: all 0.2s ease-in;\n    background: limegreen;\n    margin-top: -75px;\n}\n\n.success p {\n    color: white;\n    font-weight: 900;\n    letter-spacing: 2px;\n    font-size: 18px;\n    width: 100%;\n    text-align: center;\n}\n\n.next-button:hover {\n    cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7b0JBQ3VDO0lBQ3ZDLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7OztBQUdwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztJQUNULHNDQUFzQztJQUN0Qyw4QkFBOEI7SUFDOUIsUUFBUTtJQUNSLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFNBQVM7QUFDYjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtJQUNmLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsU0FBUztJQUNULHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLDRDQUE0QztJQUM1Qyw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxxQ0FBcUM7SUFDckMsNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsVUFBVTtBQUNkOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsU0FBUztJQUNULGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFLQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUhBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxxQ0FBcUM7SUFDckMsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDViw0Q0FBNEM7SUFDNUMsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjayB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzY1Mzk4NjQ4LCAjMDYyYzZkODgpLFxuICAgICAgICB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnLzYuanBnXCIpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIG1pbi13aWR0aDogMTAwdnc7XG5cbiAgICBcbn1cblxuLnJlZ2lzdHJhdGlvbi1mb3JtIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gICAgdG9wOiAxNSU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ucmVnaXN0cmF0aW9uLWZvcm0gaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogNDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcbn1cbi5yZWdpc3RyYXRpb24tZm9ybSBoZWFkZXIgaDEge1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbjogMDtcbn1cbi5yZWdpc3RyYXRpb24tZm9ybSBoZWFkZXIgcCB7XG4gICAgd29yZC1zcGFjaW5nOiAwcHg7XG4gICAgY29sb3I6ICM5ZmFjYjY7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ucmVnaXN0cmF0aW9uLWZvcm0gZm9ybSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIC5pbnB1dC1zZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IDI7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbn1cbi5yZWdpc3RyYXRpb24tZm9ybSAuaW5wdXQtc2VjdGlvbi5mb2xkZWQge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgICB6LWluZGV4OiAxO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIC5pbnB1dC1zZWN0aW9uLmZvbGRlZCBpbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTJjMDtcbn1cbi5yZWdpc3RyYXRpb24tZm9ybSAuaW5wdXQtc2VjdGlvbi5mb2xkZWQgc3BhbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTJjMDtcbn1cbi5yZWdpc3RyYXRpb24tZm9ybSAuaW5wdXQtc2VjdGlvbi5mb2xkZWQgKyAuZm9sZGVkIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gICAgei1pbmRleDogMDtcbn1cbi5yZWdpc3RyYXRpb24tZm9ybSAuaW5wdXQtc2VjdGlvbi5mb2xkZWQgKyAuZm9sZGVkIGlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFiY2VmO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIC5pbnB1dC1zZWN0aW9uLmZvbGRlZCArIC5mb2xkZWQgc3BhbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UxYmNlZjtcbn1cbi5yZWdpc3RyYXRpb24tZm9ybSAuaW5wdXQtc2VjdGlvbi5mb2xkLXVwIHtcbiAgICBtYXJnaW4tdG9wOiAtNzVweDtcbn1cbi5yZWdpc3RyYXRpb24tZm9ybSBmb3JtIGlucHV0IHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogIzhmOGZkNjtcbiAgICB3aWR0aDogODAlO1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XG4gICAgbWFyZ2luOiAwO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIGZvcm0gaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4ucmVnaXN0cmF0aW9uLWZvcm0gZm9ybSBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM4ZjhmZDY7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbi5yZWdpc3RyYXRpb24tZm9ybSBmb3JtIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM4ZjhmZDY7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbi5yZWdpc3RyYXRpb24tZm9ybSBmb3JtIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjOGY4ZmQ2O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4ucmVnaXN0cmF0aW9uLWZvcm0gZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjOGY4ZmQ2O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5hbmltYXRlZC1idXR0b24ge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRmZjtcbn1cbi5hbmltYXRlZC1idXR0b24gc3BhbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDc1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogNzVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xufVxuLmFuaW1hdGVkLWJ1dHRvbiBzcGFuIGkge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjb2xvcjogIzk5OTlmODtcbn1cbi5hbmltYXRlZC1idXR0b24gLm5leHQtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogIzk5OTlmODtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMDtcbn1cblxuLm5leHQge1xuICAgIG1hcmdpbi10b3A6IC03NXB4O1xufVxuXG4uc3VjY2VzcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBsZWZ0OiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IDI7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbiAgICBiYWNrZ3JvdW5kOiBsaW1lZ3JlZW47XG4gICAgbWFyZ2luLXRvcDogLTc1cHg7XG59XG4uc3VjY2VzcyBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uZXh0LWJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





let LoginComponent = class LoginComponent {
    constructor(fb, userService) {
        this.fb = fb;
        this.userService = userService;
        this.loginForm = this.fb.group({
            username: this.fb.control([], [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
            ]),
            password: this.fb.control([], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])
        });
    }
    ngOnInit() {
        // * Manipulating CSS classes with jQuery
        jquery__WEBPACK_IMPORTED_MODULE_4__(".next-button.username").click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_4__(".username-section").addClass("fold-up");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".password-section").removeClass("folded");
        });
        jquery__WEBPACK_IMPORTED_MODULE_4__(".next-button.password").click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_4__(".repeat-password-section").addClass("fold-up");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".success").css("marginTop", 0);
        });
    }
    onSubmit() {
        let value = this.loginForm.value;
        this.userService.login(value).subscribe();
        this.loginForm.reset;
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/components/movie/movie.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/movie/movie.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\n    background-image: url('14.jpg');\n    background-attachment: fixed;\n    background-size: cover;\n    position: relative;\n    height: 100%;\n    overflow: auto;\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 30px;\n    padding-bottom: 155px;\n    min-height: 100vh;\n    width: 100%;\n}\n\n.container {\n    display: grid;\n    grid-template-rows: 1fr;\n    padding-bottom: 70px;\n}\n\nh3 {\n    font-size: 0.7em;\n}\n\nimg {\n    width: 300px;\n    -webkit-filter: drop-shadow(1px 1px 3px #a6a6a6);\n    filter: drop-shadow(1px 1px 3px #a6a6a6);\n}\n\n.btnPink {\n    border-radius: 10px;\n    background: linear-gradient(\n            to left,\n            rgba(190, 117, 174, 0.795) 30%,\n            rgba(133, 124, 219, 0.795) 100%\n        )\n        left bottom rgba(255, 255, 255, 0) no-repeat;\n    transition: 0.5s all;\n    padding: 7px;\n    color: white;\n}\n\n.btnPink:hover {\n    background: none;\n    border: 1px solid palevioletred;\n    border-radius: 10px;\n    color: palevioletred;\n    transition: 0.5s all;\n}\n\n/* ----- Product Section ----- */\n\n.product {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    margin: auto;\n    padding: 1em 0em;\n    padding-right: 1em;\n    min-width: 400px;\n    background-color: rgba(255, 255, 255, 0.7);\n    border-radius: 5px;\n    margin-left: 100px;\n    margin-right: 100px;\n}\n\n/* ----- Photo Section ----- */\n\n.product__photo {\n    position: relative;\n}\n\n.photo-container {\n    position: absolute;\n    left: -2em;\n    display: grid;\n    grid-template-rows: 1fr;\n    width: 100%;\n    height: 100%;\n    border-radius: 6px;\n}\n\n.photo-main img {\n    position: absolute;\n    -webkit-filter: saturate(150%) contrast(120%) hue-rotate(10deg)\n        drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));\n    filter: saturate(150%) contrast(120%) hue-rotate(10deg)\n        drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));\n}\n\n/* ----- Informations Section ----- */\n\n.product__info {\n    padding: 5px;\n}\n\n.title h1 {\n    padding-bottom: 10px;\n    color: #4c4c4c;\n    font-size: 25px;\n}\n\n.title span {\n    font-size: 0.6em;\n}\n\n.price {\n    font-weight: bold;\n    margin: 10px;\n    line-height: 1.6em;\n    font-size: 1.2em;\n}\n\n.price span {\n    font-size: 2em;\n    padding-bottom: 2px;\n    background: linear-gradient(\n            to left,\n            rgba(170, 84, 151, 1) 30%,\n            rgba(77, 60, 221, 1) 100%\n        )\n        left bottom rgba(255, 255, 255, 0) no-repeat;\n    background-size: 100% 12px;\n}\n\n.description {\n    clear: left;\n    margin: 2em 0;\n}\n\n.description p {\n    margin-bottom: 1em;\n    font-size: 14px;\n}\n\n.lead {\n    font-size: 20px;\n}\n\n.lead:hover {\n    color: palevioletred;\n    font-weight: bold;\n    -webkit-transform: translateX(17px) scale(1.1);\n            transform: translateX(17px) scale(1.1);\n    transition: 150ms all ease-in;\n    cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS9tb3ZpZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQXNEO0lBQ3RELDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0lBQ2QscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdEQUFnRDtJQUNoRCx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkI7Ozs7O29EQUtnRDtJQUNoRCxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0FBQ3hCOztBQUVBLGdDQUFnQzs7QUFDaEM7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUEsOEJBQThCOztBQUM5QjtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQjtxREFDaUQ7SUFDakQ7cURBQ2lEO0FBQ3JEOztBQUVBLHFDQUFxQzs7QUFDckM7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQjs7Ozs7b0RBS2dEO0lBQ2hELDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQiw4Q0FBc0M7WUFBdEMsc0NBQXNDO0lBQ3RDLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS9tb3ZpZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2sge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvMTQuanBnXCIpO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1NXB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuXG5oMyB7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbn1cblxuaW1nIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDFweCAxcHggM3B4ICNhNmE2YTYpO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDFweCAzcHggI2E2YTZhNik7XG59XG5cbi5idG5QaW5rIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgIHRvIGxlZnQsXG4gICAgICAgICAgICByZ2JhKDE5MCwgMTE3LCAxNzQsIDAuNzk1KSAzMCUsXG4gICAgICAgICAgICByZ2JhKDEzMywgMTI0LCAyMTksIDAuNzk1KSAxMDAlXG4gICAgICAgIClcbiAgICAgICAgbGVmdCBib3R0b20gcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSBuby1yZXBlYXQ7XG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGw7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0blBpbms6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcGFsZXZpb2xldHJlZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiBwYWxldmlvbGV0cmVkO1xuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xufVxuXG4vKiAtLS0tLSBQcm9kdWN0IFNlY3Rpb24gLS0tLS0gKi9cbi5wcm9kdWN0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMWVtIDBlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4gICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xufVxuXG4vKiAtLS0tLSBQaG90byBTZWN0aW9uIC0tLS0tICovXG4ucHJvZHVjdF9fcGhvdG8ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBob3RvLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0yZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ucGhvdG8tbWFpbiBpbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtd2Via2l0LWZpbHRlcjogc2F0dXJhdGUoMTUwJSkgY29udHJhc3QoMTIwJSkgaHVlLXJvdGF0ZSgxMGRlZylcbiAgICAgICAgZHJvcC1zaGFkb3coMXB4IDIwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMykpO1xuICAgIGZpbHRlcjogc2F0dXJhdGUoMTUwJSkgY29udHJhc3QoMTIwJSkgaHVlLXJvdGF0ZSgxMGRlZylcbiAgICAgICAgZHJvcC1zaGFkb3coMXB4IDIwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMykpO1xufVxuXG4vKiAtLS0tLSBJbmZvcm1hdGlvbnMgU2VjdGlvbiAtLS0tLSAqL1xuLnByb2R1Y3RfX2luZm8ge1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLnRpdGxlIGgxIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBjb2xvcjogIzRjNGM0YztcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG4udGl0bGUgc3BhbiB7XG4gICAgZm9udC1zaXplOiAwLjZlbTtcbn1cblxuLnByaWNlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNmVtO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG59XG4ucHJpY2Ugc3BhbiB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICB0byBsZWZ0LFxuICAgICAgICAgICAgcmdiYSgxNzAsIDg0LCAxNTEsIDEpIDMwJSxcbiAgICAgICAgICAgIHJnYmEoNzcsIDYwLCAyMjEsIDEpIDEwMCVcbiAgICAgICAgKVxuICAgICAgICBsZWZ0IGJvdHRvbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTJweDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBjbGVhcjogbGVmdDtcbiAgICBtYXJnaW46IDJlbSAwO1xufVxuLmRlc2NyaXB0aW9uIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5sZWFkIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5sZWFkOmhvdmVyIHtcbiAgICBjb2xvcjogcGFsZXZpb2xldHJlZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTdweCkgc2NhbGUoMS4xKTtcbiAgICB0cmFuc2l0aW9uOiAxNTBtcyBhbGwgZWFzZS1pbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/movie/movie.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/movie/movie.component.ts ***!
  \*****************************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_review_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/review.service */ "./src/app/services/review.service.ts");
/* harmony import */ var src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/watchlist.service */ "./src/app/services/watchlist.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");








let MovieComponent = class MovieComponent {
    constructor(movieService, watchlistService, userService, reviewService, route, fb) {
        this.movieService = movieService;
        this.watchlistService = watchlistService;
        this.userService = userService;
        this.reviewService = reviewService;
        this.route = route;
        this.fb = fb;
        this.writingReview = false;
        this.addingToWatchlist = false;
        this.genreEmojis = {
            Action: "🚗",
            Adventure: "🗺️",
            "Action & Adventure": "🗺️",
            Animation: "🤖",
            Comedy: "😂",
            Crime: "🦹",
            Documentary: "👨‍💼",
            Drama: "🎭",
            Family: "👪",
            Fantasy: "🧝",
            History: "🏛️",
            Horror: "🧟",
            Kids: "🕹️",
            Music: "🎶",
            Mystery: "🕵️",
            Romance: "💞",
            "Sci-Fi & Fantasy": "🧝",
            "Science Fiction": "🦸",
            "TV Movie": "🎥",
            Thriller: "🔪",
            War: "⚔️",
            "War & Politics": "⚔️",
            Western: "🤠"
        };
        this.reviewForm = this.fb.group({
            title: this.fb.control("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)
            ]),
            rating: this.fb.control("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(5)
            ]),
            reviewText: this.fb.control("")
        });
        this.userId = this.userService.user.value._id;
    }
    ngOnInit() {
        // get movieId from url
        this.movieId = this.route.snapshot.url[1].path;
        this.movie = { genres: [] };
        this.movieService.getMovieById(this.movieId).subscribe((res) => {
            this.movie = res;
        }, err => console.error(err), () => {
            this.parseMovie(this.movie);
        });
        this.reviewForm.reset;
        this.writingReview = false;
    }
    parseMovie(movie) {
        movie.backdrop_path =
            "https://image.tmdb.org/t/p/original" + movie.backdrop_path;
        movie.poster_path =
            "https://image.tmdb.org/t/p/w500" + movie.poster_path;
        return movie;
    }
    writeReview() {
        this.writingReview = true;
    }
    closeReview() {
        this.writingReview = false;
    }
    submitReview() {
        let review = Object.assign({}, this.reviewForm.value, { movie: {
                movieId: this.movieId,
                movieTitle: this.movie.original_title
            } });
        this.reviewService.createReview(review).subscribe();
        this.reviewForm.reset();
        this.writingReview = false;
    }
    addWatchlists() {
        this.addingToWatchlist = true;
        this.watchlistService
            .findWatchlistsByAuthor(this.userId)
            .subscribe(res => {
            this.watchlists = res.watchlists;
        });
    }
    addToWatchlist(watchlist) {
        // watchlistId, movieId, movieTitle, moviePosterPath
        let watchlistObject = {
            watchlistId: watchlist._id,
            movieId: this.movie._id,
            movieTitle: this.movie.original_title,
            moviePosterPath: this.movie.poster_path
        };
        this.watchlistService.addMovieToWatchlist(watchlistObject).subscribe();
        this.addingToWatchlist = false;
    }
    closeWatchlist() {
        this.addingToWatchlist = false;
    }
};
MovieComponent.ctorParameters = () => [
    { type: src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] },
    { type: src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_6__["WatchlistService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: src_app_services_review_service__WEBPACK_IMPORTED_MODULE_5__["ReviewService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
MovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-movie",
        template: __webpack_require__(/*! raw-loader!./movie.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/movie/movie.component.html"),
        styles: [__webpack_require__(/*! ./movie.component.css */ "./src/app/components/movie/movie.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"],
        src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_6__["WatchlistService"],
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        src_app_services_review_service__WEBPACK_IMPORTED_MODULE_5__["ReviewService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], MovieComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    z-index: 1500;\n}\n\nli {\n    padding-left: 20px;\n    padding-right: 20px;\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 20px;\n    text-transform: uppercase;\n}\n\nli a {\n    padding: 20px;\n    color: white;\n    font-weight: bold;\n    letter-spacing: 5px;\n    font-size: 12px;\n}\n\nul {\n    visibility: hidden;\n}\n\nul > * {\n    visibility: visible;\n}\n\nul > * {\n    transition: opacity 150ms linear 100ms, -webkit-transform 150ms ease-in-out 100ms;\n    transition: opacity 150ms linear 100ms, transform 150ms ease-in-out 100ms;\n    transition: opacity 150ms linear 100ms, transform 150ms ease-in-out 100ms, -webkit-transform 150ms ease-in-out 100ms;\n}\n\nul:hover > * {\n    opacity: 0.4;\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n    -webkit-filter: blur(1px);\n            filter: blur(1px);\n}\n\nul > *:hover {\n    letter-spacing: 7px;\n    opacity: 1;\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n    transition-delay: 0ms, 0ms;\n    -webkit-filter: blur(0px);\n            filter: blur(0px);\n}\n\n.dropbtn {\n    background: none;\n    border: none;\n}\n\n.dropdown {\n    position: relative;\n    left: -20px;\n    font-size: 10px;\n}\n\n.dropdown-content {\n    border-radius: 15px;\n    display: none;\n    position: absolute;\n    font-size: 10px;\n    background-color: #f1f1f16b;\n    min-width: 100px;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n    z-index: 1;\n}\n\n.dropdown-content a {\n    color: black;\n    font-size: 10px;\n    padding: 7px 7px;\n    text-align: center;\n    text-decoration: none;\n    display: block;\n    border: 2px solid rgba(255, 0, 0, 0);\n}\n\n#logout:hover {\n    border-radius: 20px;\n    border: 2px solid rgb(199, 19, 64);\n    color: rgb(199, 19, 64);\n    font-weight: bold;\n    transition: all 400ms;\n    cursor: pointer;\n}\n\n.dropdown-content a:hover {\n    background-color: #ddd;\n    font-weight: bold;\n    color: mediumslateblue;\n    transition: all 400ms;\n    border: 2px solid rgba(255, 0, 0, 0);\n    border-radius: 20px;\n}\n\n.dropdown:hover .dropdown-content {\n    display: block;\n    border-radius: 20px;\n}\n\nnav {\n    -webkit-animation-delay: 10ms;\n            animation-delay: 10ms;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUZBQXlFO0lBQXpFLHlFQUF5RTtJQUF6RSxvSEFBeUU7QUFDN0U7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQix5QkFBaUI7WUFBakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDViw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQix5QkFBaUI7WUFBakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQiwrQ0FBK0M7SUFDL0MsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLG9DQUFvQztJQUNwQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgei1pbmRleDogMTUwMDtcbn1cblxubGkge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxubGkgYSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbnVsIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbnVsID4gKiB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxudWwgPiAqIHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGxpbmVhciAxMDBtcywgdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0IDEwMG1zO1xufVxuXG51bDpob3ZlciA+ICoge1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgZmlsdGVyOiBibHVyKDFweCk7XG59XG5cbnVsID4gKjpob3ZlciB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDdweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwbXMsIDBtcztcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbn1cblxuLmRyb3BidG4ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4uZHJvcGRvd24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMjBweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxNmI7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uZHJvcGRvd24tY29udGVudCBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHBhZGRpbmc6IDdweCA3cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMCwgMCwgMCk7XG59XG5cbiNsb2dvdXQ6aG92ZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDE5OSwgMTksIDY0KTtcbiAgICBjb2xvcjogcmdiKDE5OSwgMTksIDY0KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNDAwbXM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogbWVkaXVtc2xhdGVibHVlO1xuICAgIHRyYW5zaXRpb246IGFsbCA0MDBtcztcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMCwgMCwgMCk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG5uYXYge1xuICAgIGFuaW1hdGlvbi1kZWxheTogMTBtcztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");



let NavbarComponent = class NavbarComponent {
    constructor(userService) {
        this.userService = userService;
        this.navbarOpen = false;
    }
    ngOnInit() {
        this.getProfileData();
        this.id = this.userService.user.value._id;
    }
    getCoverLink() {
        return this.userService.user.value.avatarURL;
    }
    getProfileData() {
        this.userService
            .getProfileData(this.userService.user.value._id)
            .subscribe(res => {
            this.avatarURL = res.user.avatarURL;
        }, err => console.error(err));
    }
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
    logOut() {
        return this.userService.logOut();
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-navbar",
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    min-width: 100vw;\r\n    padding-bottom: 155px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-image: url('12.jpg');\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n}\r\n.profile {\r\n    background-image: url('profile-bg.jpg');\r\n    background-attachment: fixed;\r\n    background-position: top;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-color: #444;\r\n    width: 300px;\r\n    height: 530px;\r\n    position: relative;\r\n    bottom: 20px;\r\n    border: none;\r\n    border-radius: 20px;\r\n    box-shadow: 0 37.125px 70px -12.125px rgba(0, 0, 0, 0.2);\r\n    transition: all 0.3s;\r\n}\r\n.profileName {\r\n    background: transparent;\r\n    border: 0;\r\n    text-align: center;\r\n    padding-top: 15px;\r\n    font-style: italic;\r\n    font-size: 26px;\r\n    font-weight: 800;\r\n    color: #eee;\r\n}\r\n.card-body {\r\n    color: #eee;\r\n    padding: 15px;\r\n}\r\n.avatar {\r\n    max-width: 128px;\r\n    -webkit-transform: scale(0.95);\r\n            transform: scale(0.95);\r\n    transition: all 0.5s;\r\n    padding: 0;\r\n}\r\n.avatar:hover {\r\n    -webkit-transform: scale(1.25);\r\n            transform: scale(1.25);\r\n    box-shadow: 0 37.125px 70px -12.125px rgba(0, 0, 0, 0.2);\r\n}\r\n.profilePic {\r\n    text-align: center;\r\n}\r\n.profileInfo {\r\n    font-weight: 200;\r\n    font-size: 12px;\r\n    color: #eee;\r\n    text-align: center;\r\n    padding: 0px;\r\n}\r\n.profileInfo p {\r\n    margin: 3px;\r\n    padding: 1px;\r\n    overflow: hidden;\r\n    word-wrap: break-word;\r\n    display: inline-flex;\r\n    font-family: \"Montserrat\", sans-serif;\r\n}\r\n.title {\r\n    font-weight: bold;\r\n    font-style: italic;\r\n    letter-spacing: 2px;\r\n}\r\nhr {\r\n    padding: 0;\r\n    margin: 4px;\r\n}\r\n.actions {\r\n    background: transparent;\r\n    border: 0;\r\n    color: #fff;\r\n    display: inline-flex;\r\n}\r\n.border {\r\n    background-color: #eee;\r\n    color: black;\r\n    border: 2px solid gainsboro;\r\n    border-radius: 25px;\r\n    text-align: center;\r\n    padding: 4px !important;\r\n    opacity: 0.8;\r\n}\r\n.border:hover {\r\n    font-weight: bold;\r\n    opacity: 1;\r\n    cursor: pointer;\r\n    transition: 50ms all;\r\n}\r\n.actionFirst,\r\n.actionSecond {\r\n    width: 50%;\r\n    text-align: center;\r\n    fill: #ddd;\r\n    -webkit-transform: scale(0.8);\r\n            transform: scale(0.8);\r\n    transition: all 0.3s;\r\n    cursor: pointer;\r\n}\r\n.actionFirst:hover,\r\n.actionSecond:hover {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    fill: #fff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCwrQkFBc0Q7SUFDdEQsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksdUNBQTJEO0lBQzNELDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsd0RBQXdEO0lBQ3hELG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQiw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsd0RBQXdEO0FBQzVEO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHFDQUFxQztBQUN6QztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsV0FBVztJQUNYLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCO0FBQ0E7O0lBRUksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjtBQUNBOztJQUVJLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1NXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvMTIuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLnByb2ZpbGUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9wcm9maWxlLWJnLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDUzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMzcuMTI1cHggNzBweCAtMTIuMTI1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuLnByb2ZpbGVOYW1lIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgY29sb3I6ICNlZWU7XHJcbn1cclxuLmNhcmQtYm9keSB7XHJcbiAgICBjb2xvcjogI2VlZTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLmF2YXRhciB7XHJcbiAgICBtYXgtd2lkdGg6IDEyOHB4O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4uYXZhdGFyOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDM3LjEyNXB4IDcwcHggLTEyLjEyNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG4ucHJvZmlsZVBpYyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnByb2ZpbGVJbmZvIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI2VlZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4ucHJvZmlsZUluZm8gcCB7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4udGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcbmhyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDRweDtcclxufVxyXG4uYWN0aW9ucyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuLmJvcmRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ2FpbnNib3JvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDRweCAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcbi5ib3JkZXI6aG92ZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogNTBtcyBhbGw7XHJcbn1cclxuLmFjdGlvbkZpcnN0LFxyXG4uYWN0aW9uU2Vjb25kIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmaWxsOiAjZGRkO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmFjdGlvbkZpcnN0OmhvdmVyLFxyXG4uYWN0aW9uU2Vjb25kOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBmaWxsOiAjZmZmO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ProfileComponent = class ProfileComponent {
    constructor(userService, router, activatedRoute) {
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userId = this.userService.user.value._id;
    }
    ngOnInit() {
        this.favorites = { movie: "", tvShow: "", actor: "", genre: "" };
        this.activatedRoute.params.subscribe(params => {
            if (params.id) {
                this.getProfileData(params.id).subscribe((res) => {
                    this.user = res.user;
                    this.id = params.id;
                }, err => console.error(err), () => {
                    this.fillProfile(this.user);
                });
            }
            else {
                this.getProfileData(this.userId).subscribe((res) => {
                    this.user = res.user;
                }, err => console.error(err), () => {
                    this.fillProfile(this.user);
                });
            }
        });
    }
    fillProfile(user) {
        this.username = user.username;
        this.bio = user.bio;
        this.avatarURL = user.avatarURL;
        this.currentlyWatching = user.currentlyWatching;
        this.favorites = user.favorites;
    }
    getProfileData(id) {
        return this.userService.getProfileData(id);
    }
    getWatchlists() {
        this.router.navigate(["watchlists", this.id]);
    }
    getReviews() {
        this.router.navigate(["reviews", this.id]);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-profile",
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ProfileComponent);



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\n    background-image: linear-gradient(to bottom, #65398648, #062c6d88),\n        url('2.jpg');\n    background-image: fixed;\n    background-position: center center;\n    background-size: cover;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    min-height: 100vh;\n    min-width: 100vw;\n}\n\n.registration-form {\n    width: 400px;\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translate(-50%, 0%);\n    transform: translate(-50%, 0%);\n    top: 15%;\n    background: transparent;\n}\n\n.registration-form header {\n    position: relative;\n    z-index: 4;\n    background: white;\n    padding: 20px 40px;\n    border-radius: 15px 15px 0 0;\n}\n\n.registration-form header h1 {\n    font-weight: 900;\n    letter-spacing: 1.5px;\n    color: #333;\n    font-size: 23px;\n    text-transform: uppercase;\n    margin: 0;\n}\n\n.registration-form header p {\n    word-spacing: 0px;\n    color: #9facb6;\n    font-size: 17px;\n    margin: 0;\n    margin-top: 5px;\n}\n\n.registration-form form {\n    position: relative;\n}\n\n.registration-form .input-section {\n    width: 100%;\n    position: absolute;\n    display: flex;\n    left: 50%;\n    -webkit-transform: translate(-50%, 0);\n    transform: translate(-50%, 0);\n    height: 75px;\n    border-radius: 0 0 15px 15px;\n    overflow: hidden;\n    z-index: 2;\n    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.2);\n    transition: all 0.2s ease-in;\n}\n\n.registration-form .input-section.folded {\n    width: 95%;\n    margin-top: 10px;\n    left: 50%;\n    -webkit-transform: translate(-50%, 0);\n    transform: translate(-50%, 0);\n    z-index: 1;\n}\n\n.registration-form .input-section.folded input {\n    background-color: #e9e2c0;\n}\n\n.registration-form .input-section.folded span {\n    background-color: #e9e2c0;\n}\n\n.registration-form .input-section.folded + .folded {\n    width: 90%;\n    margin-top: 20px;\n    left: 50%;\n    -webkit-transform: translate(-50%, 0);\n    transform: translate(-50%, 0);\n    z-index: 0;\n}\n\n.registration-form .input-section.folded + .folded input {\n    background-color: #e1bcef;\n}\n\n.registration-form .input-section.folded + .folded span {\n    background-color: #e1bcef;\n}\n\n.registration-form .input-section.fold-up {\n    margin-top: -75px;\n}\n\n.registration-form form input {\n    background: white;\n    color: #8f8fd6;\n    width: 80%;\n    border: 0;\n    padding: 20px 40px;\n    margin: 0;\n}\n\n.registration-form form input:focus {\n    outline: none;\n}\n\n.registration-form form input::-webkit-input-placeholder {\n    color: #8f8fd6;\n    font-weight: 100;\n}\n\n.registration-form form input::-ms-input-placeholder {\n    color: #8f8fd6;\n    font-weight: 100;\n}\n\n.registration-form form input::-moz-placeholder {\n    color: #8f8fd6;\n    font-weight: 100;\n}\n\n.registration-form form input::placeholder {\n    color: #8f8fd6;\n    font-weight: 100;\n}\n\n.animated-button {\n    width: 20%;\n    background-color: #d4d4ff;\n}\n\n.animated-button span {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    line-height: 75px;\n    text-align: center;\n    height: 75px;\n    transition: all 0.2s ease-in;\n}\n\n.animated-button span i {\n    font-size: 25px;\n    color: #9999f8;\n}\n\n.animated-button .next-button {\n    background: transparent;\n    color: #9999f8;\n    font-weight: 100;\n    width: 100%;\n    border: 0;\n}\n\n.next {\n    margin-top: -75px;\n}\n\n.success {\n    width: 100%;\n    position: absolute;\n    display: flex;\n    align-items: center;\n    left: 50%;\n    -webkit-transform: translate(-50%, 0);\n    transform: translate(-50%, 0);\n    height: 75px;\n    border-radius: 0 0 15px 15px;\n    overflow: hidden;\n    z-index: 2;\n    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.2);\n    transition: all 0.2s ease-in;\n    background: limegreen;\n    margin-top: -75px;\n}\n\n.success p {\n    color: white;\n    font-weight: 900;\n    letter-spacing: 2px;\n    font-size: 18px;\n    width: 100%;\n    text-align: center;\n}\n\n.next-button:hover {\n    cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7b0JBQ3VDO0lBQ3ZDLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxzQ0FBc0M7SUFDdEMsOEJBQThCO0lBQzlCLFFBQVE7SUFDUix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7SUFDZixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFNBQVM7SUFDVCxxQ0FBcUM7SUFDckMsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDViw0Q0FBNEM7SUFDNUMsNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QscUNBQXFDO0lBQ3JDLDZCQUE2QjtJQUM3QixVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxxQ0FBcUM7SUFDckMsNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsVUFBVTtJQUNWLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBS0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFIQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDRCQUE0QjtBQUNoQzs7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QscUNBQXFDO0lBQ3JDLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsNENBQTRDO0lBQzVDLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2sge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM2NTM5ODY0OCwgIzA2MmM2ZDg4KSxcbiAgICAgICAgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iZy8yLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xufVxuXG4ucmVnaXN0cmF0aW9uLWZvcm0ge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgICB0b3A6IDE1JTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5yZWdpc3RyYXRpb24tZm9ybSBoZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiA0O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIGhlYWRlciBoMSB7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luOiAwO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIGhlYWRlciBwIHtcbiAgICB3b3JkLXNwYWNpbmc6IDBweDtcbiAgICBjb2xvcjogIzlmYWNiNjtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cbi5yZWdpc3RyYXRpb24tZm9ybSBmb3JtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmVnaXN0cmF0aW9uLWZvcm0gLmlucHV0LXNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgIGhlaWdodDogNzVweDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgei1pbmRleDogMjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIC5pbnB1dC1zZWN0aW9uLmZvbGRlZCB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgIHotaW5kZXg6IDE7XG59XG4ucmVnaXN0cmF0aW9uLWZvcm0gLmlucHV0LXNlY3Rpb24uZm9sZGVkIGlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllMmMwO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIC5pbnB1dC1zZWN0aW9uLmZvbGRlZCBzcGFuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllMmMwO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIC5pbnB1dC1zZWN0aW9uLmZvbGRlZCArIC5mb2xkZWQge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgICB6LWluZGV4OiAwO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIC5pbnB1dC1zZWN0aW9uLmZvbGRlZCArIC5mb2xkZWQgaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWJjZWY7XG59XG4ucmVnaXN0cmF0aW9uLWZvcm0gLmlucHV0LXNlY3Rpb24uZm9sZGVkICsgLmZvbGRlZCBzcGFuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFiY2VmO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIC5pbnB1dC1zZWN0aW9uLmZvbGQtdXAge1xuICAgIG1hcmdpbi10b3A6IC03NXB4O1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIGZvcm0gaW5wdXQge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiAjOGY4ZmQ2O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgICBtYXJnaW46IDA7XG59XG4ucmVnaXN0cmF0aW9uLWZvcm0gZm9ybSBpbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cbi5yZWdpc3RyYXRpb24tZm9ybSBmb3JtIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzhmOGZkNjtcbiAgICBmb250LXdlaWdodDogMTAwO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIGZvcm0gaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzhmOGZkNjtcbiAgICBmb250LXdlaWdodDogMTAwO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIGZvcm0gaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM4ZjhmZDY7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbi5yZWdpc3RyYXRpb24tZm9ybSBmb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM4ZjhmZDY7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmFuaW1hdGVkLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNGZmO1xufVxuLmFuaW1hdGVkLWJ1dHRvbiBzcGFuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogNzVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG59XG4uYW5pbWF0ZWQtYnV0dG9uIHNwYW4gaSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiAjOTk5OWY4O1xufVxuLmFuaW1hdGVkLWJ1dHRvbiAubmV4dC1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjOTk5OWY4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAwO1xufVxuXG4ubmV4dCB7XG4gICAgbWFyZ2luLXRvcDogLTc1cHg7XG59XG5cbi5zdWNjZXNzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgIGhlaWdodDogNzVweDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgei1pbmRleDogMjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xuICAgIGJhY2tncm91bmQ6IGxpbWVncmVlbjtcbiAgICBtYXJnaW4tdG9wOiAtNzVweDtcbn1cbi5zdWNjZXNzIHAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5leHQtYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





let RegisterComponent = class RegisterComponent {
    constructor(fb, userService) {
        this.fb = fb;
        this.userService = userService;
        this.registerForm = this.fb.group({
            email: this.fb.control([], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            username: this.fb.control([], [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
            ]),
            password: this.fb.control([], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])
        });
    }
    ngOnInit() {
        // * Manipulating CSS classes with jQuery
        jquery__WEBPACK_IMPORTED_MODULE_4__(".next-button.email").click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_4__(".email-section").addClass("fold-up");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".username-section").removeClass("folded");
        });
        jquery__WEBPACK_IMPORTED_MODULE_4__(".next-button.username").click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_4__(".username-section").addClass("fold-up");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".password-section").removeClass("folded");
        });
        jquery__WEBPACK_IMPORTED_MODULE_4__(".next-button.password").click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_4__(".repeat-password-section").addClass("fold-up");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".success").css("marginTop", 0);
        });
    }
    onSubmit() {
        let value = this.registerForm.value;
        this.userService.register(value).subscribe();
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-register",
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/components/reviews/reviews.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/reviews/reviews.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\n    background-image: url('14.jpg');\n    background-attachment: fixed;\n    background-size: cover;\n    position: relative;\n    height: 100%;\n    overflow: hidden;\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 30px;\n    padding-bottom: 125px;\n    min-height: 100vh;\n    padding-bottom: 155px;\n    min-width: 100vw;\n    width: 100%;\n}\n\n.container {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.container .box {\n    width: 250px;\n    border-radius: 10px;\n    background-color: white;\n    margin: 20px;\n    transition: 0.3s all ease-in-out;\n    position: relative;\n    box-shadow: 0px 0px 40px background;\n}\n\n.container .box .boxContent {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding: 15px;\n}\n\n.container .box .boxContent .icon {\n    color: #8293ff;\n    font-size: 48px;\n    padding: 15px;\n}\n\n.container .box .boxContent .title {\n    font-size: 24px;\n    color: #8293ff;\n    font-weight: bold;\n    padding: 10px;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n}\n\n.movie {\n    font-size: 24px;\n    color: #8293ff;\n    font-weight: bold;\n    padding: 10px;\n    text-transform: none;\n}\n\n.container .box .boxContent .desc {\n    color: #8293ff;\n    font-size: 15px;\n    height: 20%;\n}\n\n.container .box:hover {\n    background: linear-gradient(130deg, #503bff 0%, #8293ff 100%);\n    box-shadow: none;\n}\n\n.container .box:hover .boxContent .title,\n.container .box:hover .boxContent .icon,\n.container .box:hover .boxContent .desc {\n    color: white;\n    transition: 1s all;\n}\n\n.container .box:hover .boxContent .movie {\n    color: rgb(0, 217, 255);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXdzL3Jldmlld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUFzRDtJQUN0RCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixtQ0FBbUM7QUFDdkM7O0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDZEQUE2RDtJQUM3RCxnQkFBZ0I7QUFDcEI7O0FBRUE7OztJQUdJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jldmlld3MvcmV2aWV3cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2sge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvMTQuanBnXCIpO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTI1cHg7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1NXB4O1xuICAgIG1pbi13aWR0aDogMTAwdnc7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jb250YWluZXIgLmJveCB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggYmFja2dyb3VuZDtcbn1cbi5jb250YWluZXIgLmJveCAuYm94Q29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG4uY29udGFpbmVyIC5ib3ggLmJveENvbnRlbnQgLmljb24ge1xuICAgIGNvbG9yOiAjODI5M2ZmO1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uY29udGFpbmVyIC5ib3ggLmJveENvbnRlbnQgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICM4MjkzZmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5tb3ZpZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjODI5M2ZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5jb250YWluZXIgLmJveCAuYm94Q29udGVudCAuZGVzYyB7XG4gICAgY29sb3I6ICM4MjkzZmY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGhlaWdodDogMjAlO1xufVxuXG4uY29udGFpbmVyIC5ib3g6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzBkZWcsICM1MDNiZmYgMCUsICM4MjkzZmYgMTAwJSk7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmNvbnRhaW5lciAuYm94OmhvdmVyIC5ib3hDb250ZW50IC50aXRsZSxcbi5jb250YWluZXIgLmJveDpob3ZlciAuYm94Q29udGVudCAuaWNvbixcbi5jb250YWluZXIgLmJveDpob3ZlciAuYm94Q29udGVudCAuZGVzYyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IDFzIGFsbDtcbn1cblxuLmNvbnRhaW5lciAuYm94OmhvdmVyIC5ib3hDb250ZW50IC5tb3ZpZSB7XG4gICAgY29sb3I6IHJnYigwLCAyMTcsIDI1NSk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/reviews/reviews.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/reviews/reviews.component.ts ***!
  \*********************************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_review_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/review.service */ "./src/app/services/review.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");





let ReviewsComponent = class ReviewsComponent {
    constructor(userService, reviewService, activatedRoute) {
        this.userService = userService;
        this.reviewService = reviewService;
        this.activatedRoute = activatedRoute;
        // boolean for displaying "delete/update review"
        this.isOwner = false;
        let currentUserId = this.userService.user.value._id;
        this.activatedRoute.params.subscribe(params => {
            if (params.id) {
                // if there is an id, find only reviews for that id
                this.id = params.id;
                this.isOwner = this.id === currentUserId;
                this.getReviewsByAuthor(this.id);
            }
            else {
                // else show all reviews
                this.getAllReviews();
            }
        });
    }
    ngOnInit() { }
    getReviewsByAuthor(id) {
        return this.reviewService.findReviewsByAuthor(id).subscribe(res => {
            this.reviews = res.reviews;
        });
    }
    getAllReviews() {
        return this.reviewService.findAllReviews().subscribe(res => {
            this.reviews = res.reviews;
            console.log(this.reviews);
        });
    }
};
ReviewsComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_services_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ReviewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-reviews",
        template: __webpack_require__(/*! raw-loader!./reviews.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/reviews/reviews.component.html"),
        styles: [__webpack_require__(/*! ./reviews.component.css */ "./src/app/components/reviews/reviews.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        src_app_services_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ReviewsComponent);



/***/ }),

/***/ "./src/app/components/search-result/search-result.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/search-result/search-result.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\n    background-image: url('14.jpg');\n    background-attachment: fixed;\n    background-size: cover;\n    position: relative;\n    height: 100%;\n    overflow: hidden;\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 30px;\n    padding-bottom: 125px;\n    min-height: 100vh;\n    padding-bottom: 155px;\n    min-width: 100vw;\n    width: 100%;\n}\n\n.card {\n    background-color: rgba(250, 235, 215, 0.75);\n}\n\n.card:hover {\n    background-color: rgba(250, 235, 215, 1);\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n    transition: 0.7s all;\n    cursor: pointer;\n}\n\n.card-title {\n    font-weight: bold;\n    font-size: 21px;\n}\n\n.card-subtitle{\n    font-style: italic;\n    font-size: 18px;\n    border-bottom: 2px solid palevioletred;\n}\n\n.card-body {\n    font-size: 13px;\n}\n\nimg {\n    -o-object-fit: scale-down;\n       object-fit: scale-down;\n    max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtcmVzdWx0L3NlYXJjaC1yZXN1bHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUFzRDtJQUN0RCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQzs7QUFHQTtJQUNJLHdDQUF3QztJQUN4Qyw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBc0I7T0FBdEIsc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC1yZXN1bHQvc2VhcmNoLXJlc3VsdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2sge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvMTQuanBnXCIpO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTI1cHg7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1NXB4O1xuICAgIG1pbi13aWR0aDogMTAwdnc7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjM1LCAyMTUsIDAuNzUpO1xufVxuXG5cbi5jYXJkOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjM1LCAyMTUsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICB0cmFuc2l0aW9uOiAwLjdzIGFsbDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIxcHg7XG59XG5cbi5jYXJkLXN1YnRpdGxle1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHBhbGV2aW9sZXRyZWQ7XG59XG5cbi5jYXJkLWJvZHkge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuaW1nIHtcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICAgIG1heC13aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/search-result/search-result.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/search-result/search-result.component.ts ***!
  \*********************************************************************/
/*! exports provided: SearchResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function() { return SearchResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_data_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-provider.service */ "./src/app/services/data-provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SearchResultComponent = class SearchResultComponent {
    constructor(dataProvider, router) {
        this.dataProvider = dataProvider;
        this.router = router;
        this.displayData = [];
        this.data = this.dataProvider.data;
        this.search = this.dataProvider.data.search;
        switch (this.data.type) {
            case "reviews":
                this.parseReview(this.data.reviews);
                this.title = "Reviews";
                break;
            case "watchlist":
                this.parseWatchlist(this.data.watchlists);
                this.title = "Watchlists";
                break;
            case "tvShow":
                this.parseTv(this.data.res.results);
                this.title = "TV shows";
                break;
            case "movie":
                this.parseMovie(this.data.res.results);
                this.title = "Movies";
                break;
        }
    }
    parseReview(data) {
        for (let review of data) {
            this.displayData.push({
                title: review.title,
                subtitle: review.movie.movieTitle +
                    ", " +
                    review.rating.toString() +
                    "/5",
                body: review.reviewText
            });
        }
    }
    parseWatchlist(data) {
        for (let watchlist of data) {
            let movieTitles = JSON.stringify(watchlist.movies.map(movie => movie.movieTitle))
                .replace("[", "")
                .replace("]", "");
            this.displayData.push({
                title: watchlist.title,
                subtitle: watchlist.description,
                body: movieTitles,
                img: data.movies ? data.movies[0].moviePosterPath : ""
            });
        }
    }
    parseTv(data) {
        for (let tv of data) {
            if (!tv.overview || !tv.vote_average || !tv.poster_path) {
                continue;
            }
            this.displayData.push({
                id: tv.id,
                title: tv.original_name,
                subtitle: tv.vote_average + "/10",
                body: tv.overview,
                img: tv.poster_path
                    ? "https://image.tmdb.org/t/p/w500/" + tv.poster_path
                    : ""
            });
        }
    }
    parseMovie(data) {
        for (let movie of data) {
            if (!movie.overview || !movie.vote_average || !movie.poster_path) {
                continue;
            }
            this.displayData.push({
                id: movie.id,
                title: movie.original_title,
                subtitle: movie.vote_average + "/10",
                body: movie.overview,
                img: movie.poster_path
                    ? "https://image.tmdb.org/t/p/w500/" + movie.poster_path
                    : ""
            });
        }
    }
    navigateTo(data) {
        switch (this.data.type) {
            case "reviews":
                break;
            case "watchlist":
                break;
            case "tvShow":
                this.router.navigate(["tv", data.id]);
                break;
            case "movie":
                this.router.navigate(["movie", data.id]);
                break;
        }
    }
};
SearchResultComponent.ctorParameters = () => [
    { type: src_app_services_data_provider_service__WEBPACK_IMPORTED_MODULE_2__["DataProviderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SearchResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-search-result",
        template: __webpack_require__(/*! raw-loader!./search-result.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/search-result/search-result.component.html"),
        styles: [__webpack_require__(/*! ./search-result.component.css */ "./src/app/components/search-result/search-result.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_provider_service__WEBPACK_IMPORTED_MODULE_2__["DataProviderService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], SearchResultComponent);



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.back {\n    background-image: url('13.jpg');\n    background-size: cover;\n    position: absolute;\n    width: 100%;\n    height: 100vh;\n    overflow: auto;\n    padding-bottom: 155px;\n    min-height: 100vh;\n    width: 100%;\n}\n\n.container {\n    width: 300px;\n    height: 50px;\n}\n\n.container .search {\n    position: absolute;\n    margin: auto;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 80px;\n    height: 80px;\n    background: crimson;\n    border-radius: 50%;\n    transition: all 1s;\n    z-index: 4;\n    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);\n}\n\n.container .search:hover {\n    cursor: pointer;\n}\n\n.container .search::before {\n    content: \"\";\n    position: absolute;\n    margin: auto;\n    top: 22px;\n    right: 0;\n    bottom: 0;\n    left: 22px;\n    width: 12px;\n    height: 2px;\n    background: white;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    transition: all 0.5s;\n}\n\n.container .search::after {\n    content: \"\";\n    position: absolute;\n    margin: auto;\n    top: -5px;\n    right: 0;\n    bottom: 0;\n    left: -5px;\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    border: 2px solid white;\n    transition: all 0.5s;\n}\n\n.container input[type=\"text\"] {\n    font-family: \"Inconsolata\", monospace;\n    position: absolute;\n    margin: auto;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 50px;\n    height: 50px;\n    outline: none;\n    border: none;\n    background: crimson;\n    color: white;\n    text-shadow: 0 0 10px crimson;\n    padding: 0 80px 0 20px;\n    border-radius: 30px;\n    box-shadow: 0 0 25px 0 crimson, 0 20px 25px 0 rgba(0, 0, 0, 0.2);\n    transition: all 1s;\n    opacity: 0;\n    z-index: 5;\n    font-weight: bolder;\n    letter-spacing: 0.1em;\n}\n\n.container input[type=\"text\"]:hover {\n    cursor: pointer;\n}\n\n.container input[type=\"text\"]:focus {\n    width: 300px;\n    opacity: 1;\n    cursor: text;\n}\n\n.container input[type=\"text\"]:focus ~ .search {\n    right: -250px;\n    background: #151515;\n    z-index: 6;\n}\n\n.container input[type=\"text\"]:focus ~ .search::before {\n    top: 0;\n    left: 0;\n    width: 25px;\n}\n\n.container input[type=\"text\"]:focus ~ .search::after {\n    top: 0;\n    left: 0;\n    width: 25px;\n    height: 2px;\n    border: none;\n    background: white;\n    border-radius: 0%;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n}\n\n.container input[type=\"text\"]::-webkit-input-placeholder {\n    color: white;\n    opacity: 0.5;\n    font-weight: bolder;\n}\n\n.container input[type=\"text\"]::-moz-placeholder {\n    color: white;\n    opacity: 0.5;\n    font-weight: bolder;\n}\n\n.container input[type=\"text\"]::-ms-input-placeholder {\n    color: white;\n    opacity: 0.5;\n    font-weight: bolder;\n}\n\n.container input[type=\"text\"]::placeholder {\n    color: white;\n    opacity: 0.5;\n    font-weight: bolder;\n}\n\n/* =============================================\n* RADIO BUTTONS\n=============================================== */\n\n#radios label {\n    cursor: pointer;\n    position: relative;\n    margin: auto;\n    width: 100px;\n}\n\n#radios label + label {\n    margin-left: 8px;\n}\n\ninput[type=\"radio\"] {\n    opacity: 0; /* hidden but still tabable */\n    position: absolute;\n    height: 20px;\n}\n\ninput[type=\"radio\"] + span {\n    color: #b3cefb;\n    border-radius: 100%;\n    padding: 15px;\n    transition: all 0.4s;\n    text-align: center;\n    -webkit-transition: all 0.4s;\n}\n\ninput[type=\"radio\"]:checked + span {\n    color: #d9e7fd;\n    background-color: crimson;\n    border-radius: 50%;\n    box-shadow: inset 0 0 50px rgba(194, 0, 39, 0.397),\n        /* inner white */ inset 20px 0 80px crimson,\n        /* inner left magenta short */ inset -20px 0 80px rgb(0, 119, 255),\n        /* inner right cyan short */ inset 20px 0 300px crimson,\n        /* inner left magenta broad */ inset -20px 0 300px rgb(0, 119, 255),\n        /* inner right cyan broad */ 0 0 50px rgb(221, 58, 85),\n        /* outer white */ -10px 0 80px crimson,\n        /* outer left magenta */ 10px 0 80px rgb(0, 0, 0); /* outer right cyan */\n}\n\ninput[type=\"radio\"]:focus + span {\n    color: #fff;\n}\n\n/* ================ TOOLTIPS ================= */\n\n#radios label:hover::before {\n    content: attr(for);\n    font-family: Roboto, -apple-system, sans-serif;\n    text-transform: capitalize;\n    font-size: 11px;\n    width: 100px;\n    position: absolute;\n    top: 170%;\n    left: 3px;\n    opacity: 0.75;\n    background-color: #323232;\n    color: #fff;\n    padding: 5px;\n    border-radius: 5px;\n    display: block;\n    text-transform: uppercase;\n}\n\n#radios {\n    position: relative;\n    top: 100px;\n    width: 600px;\n}\n\nbutton {\n    font-family: \"Montserrat\", sans-serif;\n    font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLCtCQUFzRDtJQUN0RCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix5Q0FBeUM7QUFDN0M7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztJQUNULFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztJQUNULFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSxxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZ0VBQWdFO0lBQ2hFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7QUFDZjs7QUFDQTtJQUNJLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQ0FBeUI7WUFBekIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBSkE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFKQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUpBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O2lEQUVpRDs7QUFFakQ7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVSxFQUFFLDZCQUE2QjtJQUN6QyxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEI7Ozs7Ozs7eURBT3FELEVBQUUscUJBQXFCO0FBQ2hGOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBLGdEQUFnRDs7QUFFaEQ7SUFDSSxrQkFBa0I7SUFDbEIsOENBQThDO0lBQzlDLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULGFBQWE7SUFDYix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5iYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnLzEzLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNTVweDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cbi5jb250YWluZXIgLnNlYXJjaCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGJhY2tncm91bmQ6IGNyaW1zb247XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IGFsbCAxcztcbiAgICB6LWluZGV4OiA0O1xuICAgIGJveC1zaGFkb3c6IDAgMCAyNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuLmNvbnRhaW5lciAuc2VhcmNoOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyIC5zZWFyY2g6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogMjJweDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMjJweDtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG4uY29udGFpbmVyIC5zZWFyY2g6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdG9wOiAtNXB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAtNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG4uY29udGFpbmVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICBmb250LWZhbWlseTogXCJJbmNvbnNvbGF0YVwiLCBtb25vc3BhY2U7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IGNyaW1zb247XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCBjcmltc29uO1xuICAgIHBhZGRpbmc6IDAgODBweCAwIDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMjVweCAwIGNyaW1zb24sIDAgMjBweCAyNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIHRyYW5zaXRpb246IGFsbCAxcztcbiAgICBvcGFjaXR5OiAwO1xuICAgIHotaW5kZXg6IDU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG59XG4uY29udGFpbmVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICBjdXJzb3I6IHRleHQ7XG59XG4uY29udGFpbmVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzIH4gLnNlYXJjaCB7XG4gICAgcmlnaHQ6IC0yNTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMTUxNTE1O1xuICAgIHotaW5kZXg6IDY7XG59XG4uY29udGFpbmVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzIH4gLnNlYXJjaDo6YmVmb3JlIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMjVweDtcbn1cbi5jb250YWluZXIgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMgfiAuc2VhcmNoOjphZnRlciB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4uY29udGFpbmVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiogUkFESU8gQlVUVE9OU1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuI3JhZGlvcyBsYWJlbCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuXG4jcmFkaW9zIGxhYmVsICsgbGFiZWwge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gICAgb3BhY2l0eTogMDsgLyogaGlkZGVuIGJ1dCBzdGlsbCB0YWJhYmxlICovXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMjBweDtcbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgc3BhbiB7XG4gICAgY29sb3I6ICNiM2NlZmI7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIHNwYW4ge1xuICAgIGNvbG9yOiAjZDllN2ZkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1MHB4IHJnYmEoMTk0LCAwLCAzOSwgMC4zOTcpLFxuICAgICAgICAvKiBpbm5lciB3aGl0ZSAqLyBpbnNldCAyMHB4IDAgODBweCBjcmltc29uLFxuICAgICAgICAvKiBpbm5lciBsZWZ0IG1hZ2VudGEgc2hvcnQgKi8gaW5zZXQgLTIwcHggMCA4MHB4IHJnYigwLCAxMTksIDI1NSksXG4gICAgICAgIC8qIGlubmVyIHJpZ2h0IGN5YW4gc2hvcnQgKi8gaW5zZXQgMjBweCAwIDMwMHB4IGNyaW1zb24sXG4gICAgICAgIC8qIGlubmVyIGxlZnQgbWFnZW50YSBicm9hZCAqLyBpbnNldCAtMjBweCAwIDMwMHB4IHJnYigwLCAxMTksIDI1NSksXG4gICAgICAgIC8qIGlubmVyIHJpZ2h0IGN5YW4gYnJvYWQgKi8gMCAwIDUwcHggcmdiKDIyMSwgNTgsIDg1KSxcbiAgICAgICAgLyogb3V0ZXIgd2hpdGUgKi8gLTEwcHggMCA4MHB4IGNyaW1zb24sXG4gICAgICAgIC8qIG91dGVyIGxlZnQgbWFnZW50YSAqLyAxMHB4IDAgODBweCByZ2IoMCwgMCwgMCk7IC8qIG91dGVyIHJpZ2h0IGN5YW4gKi9cbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOmZvY3VzICsgc3BhbiB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi8qID09PT09PT09PT09PT09PT0gVE9PTFRJUFMgPT09PT09PT09PT09PT09PT0gKi9cblxuI3JhZGlvcyBsYWJlbDpob3Zlcjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBhdHRyKGZvcik7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgLWFwcGxlLXN5c3RlbSwgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE3MCU7XG4gICAgbGVmdDogM3B4O1xuICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiNyYWRpb3Mge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEwMHB4O1xuICAgIHdpZHRoOiA2MDBweDtcbn1cblxuYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var _services_tv_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tv.service */ "./src/app/services/tv.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_review_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/review.service */ "./src/app/services/review.service.ts");
/* harmony import */ var src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/watchlist.service */ "./src/app/services/watchlist.service.ts");
/* harmony import */ var src_app_services_data_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/data-provider.service */ "./src/app/services/data-provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");










let SearchComponent = class SearchComponent {
    constructor(fb, movieService, tvService, userService, reviewService, watchlistService, dataProviderService, router) {
        this.fb = fb;
        this.movieService = movieService;
        this.tvService = tvService;
        this.userService = userService;
        this.reviewService = reviewService;
        this.watchlistService = watchlistService;
        this.dataProviderService = dataProviderService;
        this.router = router;
        this.searchForm = this.fb.group({
            search: this.fb.control([], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            type: this.fb.control([], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ngOnInit() {
        this.dataProviderService.removeData();
    }
    onSubmit() {
        let value = this.searchForm.value;
        switch (value.type) {
            case "watchlist":
                this.watchlistService
                    .findWatchlistsByName(value.search)
                    .subscribe(res => {
                    this.dataProviderService.setData({
                        watchlists: res.watchlists,
                        type: "watchlist",
                        search: value.search
                    });
                });
                break;
            case "review":
                this.reviewService
                    .findReviewByMovie(value.search)
                    .subscribe(res => {
                    this.dataProviderService.setData({
                        reviews: res.reviews,
                        type: "reviews",
                        search: value.search
                    });
                });
                break;
            case "profile":
                this.userService.findUserByUsername(value.search).subscribe();
                break;
            case "tvShow":
                this.tvService.searchByName(value.search).subscribe(res => {
                    this.dataProviderService.setData({
                        res,
                        type: "tvShow",
                        search: value.search
                    });
                    this.router.navigate(["searchResult"]);
                });
                break;
            case "movie":
                this.movieService.searchByName(value.search).subscribe(res => {
                    this.dataProviderService.setData({
                        res,
                        type: "movie",
                        search: value.search
                    });
                    this.router.navigate(["searchResult"]);
                });
                break;
        }
    }
};
SearchComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"] },
    { type: _services_tv_service__WEBPACK_IMPORTED_MODULE_4__["TvService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_services_review_service__WEBPACK_IMPORTED_MODULE_6__["ReviewService"] },
    { type: src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_7__["WatchlistService"] },
    { type: src_app_services_data_provider_service__WEBPACK_IMPORTED_MODULE_8__["DataProviderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-search",
        template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/search/search.component.html"),
        styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"],
        _services_tv_service__WEBPACK_IMPORTED_MODULE_4__["TvService"],
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        src_app_services_review_service__WEBPACK_IMPORTED_MODULE_6__["ReviewService"],
        src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_7__["WatchlistService"],
        src_app_services_data_provider_service__WEBPACK_IMPORTED_MODULE_8__["DataProviderService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
], SearchComponent);



/***/ }),

/***/ "./src/app/components/settings/settings.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/settings/settings.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\n    background-image: url('11.jpg');\n    background-attachment: fixed;\n    background-size: cover;\n    position: relative;\n    overflow: auto;\n    height: 100%;\n    min-height: 100vh;\n    padding-bottom: 155px;\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 30px;\n    width: 100%;\n}\n\np {\n    font-size: 15px;\n}\n\ninput {\n    padding: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQXNEO0lBQ3RELDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2sge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvMTEuanBnXCIpO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNTVweDtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5wIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbmlucHV0IHtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let SettingsComponent = class SettingsComponent {
    constructor(userService, fb) {
        this.userService = userService;
        this.fb = fb;
        this.getProfileData();
        // * F O R M S
        // * username
        this.usernameForm = this.fb.group({
            username: this.fb.control("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)
            ])
        });
        // * password
        this.passwordForm = this.fb.group({
            password: this.fb.control("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)
            ])
        });
        // * bio
        this.bioForm = this.fb.group({
            bio: this.fb.control("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15)
            ])
        });
        // * currently watching
        this.currWatchingForm = this.fb.group({
            currentlyWatching: this.fb.control("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15)
            ])
        });
        // * favorites
        this.favoritesForm = this.fb.group({
            movie: this.fb.control("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15)]),
            tvShow: this.fb.control("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15)]),
            actor: this.fb.control("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15)]),
            genre: this.fb.control("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15)])
        });
    }
    ngOnInit() { }
    getProfileData() {
        this.userService
            .getProfileData(this.userService.user.value._id)
            .subscribe(res => {
            this.currentProfile$ = res;
        }, err => console.error(err), () => this.fillFormInitialValues(this.currentProfile$));
    }
    fillFormInitialValues(res) {
        this.user = res.user;
        this.avatarURL = this.user.avatarURL;
        // * Fill forms initial value with existing values from DB
        this.usernameForm.controls["username"].setValue(this.user.username);
        this.bioForm.controls["bio"].setValue(this.user.bio);
        this.currWatchingForm.controls["currentlyWatching"].setValue(this.user.currentlyWatching);
        this.favoritesForm.controls["movie"].setValue(this.user.favorites.movie);
        this.favoritesForm.controls["tvShow"].setValue(this.user.favorites.tvShow);
        this.favoritesForm.controls["actor"].setValue(this.user.favorites.actor);
        this.favoritesForm.controls["genre"].setValue(this.user.favorites.genre);
    }
    // * Submit functions
    updateUsername() {
        let value = this.usernameForm.value.username;
        this.userService.updateUsername(value).subscribe();
    }
    updatePassword() {
        let value = this.passwordForm.value.password;
        this.userService.updatePassword(value).subscribe();
        this.passwordForm.reset();
    }
    updateBio() {
        let value = this.bioForm.value.bio;
        this.userService.updateBio(value).subscribe();
    }
    updateCurrentlyWatching() {
        let value = this.currWatchingForm.value.currentlyWatching;
        this.userService.updateCurrentlyWatching(value).subscribe();
    }
    updateFavorites() {
        let favorites = this.favoritesForm.value;
        this.userService.updateFavorites(favorites).subscribe();
    }
    updateAvatar(id) {
        let avatarURL = "../../../assets/img/avatars/" + id + ".png";
        this.userService.updateAvatar(avatarURL).subscribe((res) => {
            this.avatarURL = res.user.avatarURL;
        }, err => console.error(err));
    }
    shuffleAvatar() {
        // function assigns new avatar id, different than current one
        let currentId = parseInt(this.avatarURL.split("/")[6].split(".")[0]);
        let newId = this.randomInt();
        if (newId === currentId) {
            this.shuffleAvatar();
        }
        else {
            let id = newId < 10 ? "0" + newId.toString() : newId.toString();
            this.updateAvatar(id);
        }
    }
    randomInt() {
        // random Int between 1 and 34 (number of current avatars)
        return Math.floor(Math.random() * 34) + 1;
    }
};
SettingsComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-settings",
        template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/settings/settings.component.html"),
        styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/components/settings/settings.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], SettingsComponent);



/***/ }),

/***/ "./src/app/components/tv/tv.component.css":
/*!************************************************!*\
  !*** ./src/app/components/tv/tv.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\n    background-image: url('14.jpg');\n    background-attachment: fixed;\n    background-size: cover;\n    position: relative;\n    height: 100%;\n    overflow: auto;\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 30px;\n    padding-bottom: 125px;\n    min-height: 100vh;\n    padding-bottom: 155px;\n    font-family: \"Montserrat\", sans-serif;\n    width: 100%;\n}\n\n.container {\n    display: grid;\n    grid-template-rows: 1fr;\n    padding-bottom: 70px;\n}\n\nh3 {\n    font-size: 0.7em;\n}\n\nimg {\n    max-width: 100%;\n    -webkit-filter: drop-shadow(1px 1px 3px #a6a6a6);\n    filter: drop-shadow(1px 1px 3px #a6a6a6);\n}\n\n.btnPink {\n    border-radius: 10px;\n    background: linear-gradient(\n            to left,\n            rgba(190, 117, 174, 0.795) 30%,\n            rgba(133, 124, 219, 0.795) 100%\n        )\n        left bottom rgba(255, 255, 255, 0) no-repeat;\n    transition: 0.5s all;\n    padding: 7px;\n    color: white;\n}\n\n.btnPink:hover {\n    background: none;\n    border: 1px solid palevioletred;\n    border-radius: 10px;\n    color: palevioletred;\n    transition: 0.5s all;\n}\n\n/* ----- Product Section ----- */\n\n.product {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    margin: auto;\n    padding: 1em 0em;\n    padding-right: 1em;\n    min-width: 400px;\n    background-color: rgba(255, 255, 255, 0.7);\n    border-radius: 5px;\n    margin-left: 100px;\n    margin-right: 100px;\n}\n\n/* ----- Photo Section ----- */\n\n.product__photo {\n    position: relative;\n}\n\n.photo-container {\n    position: absolute;\n    left: -2em;\n    display: grid;\n    grid-template-rows: 1fr;\n    width: 100%;\n    height: 100%;\n    border-radius: 6px;\n}\n\n.photo-main img {\n    position: absolute;\n    left: 0em;\n    max-width: 100%;\n    -webkit-filter: saturate(150%) contrast(120%) hue-rotate(10deg)\n        drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));\n    filter: saturate(150%) contrast(120%) hue-rotate(10deg)\n        drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));\n}\n\n/* ----- Informations Section ----- */\n\n.product__info {\n    padding: 0.8em 0;\n}\n\n.title h1 {\n    padding-bottom: 10px;\n    color: #4c4c4c;\n    font-size: 25px;\n}\n\n.title span {\n    font-size: 0.6em;\n}\n\n.price {\n    font-weight: bold;\n    margin: 10px;\n    line-height: 1.6em;\n    font-size: 1.2em;\n}\n\n.price span {\n    font-size: 2em;\n    border-bottom: 12px solid palevioletred;\n}\n\n.description {\n    clear: left;\n    margin: 2em 0;\n}\n\n.description p {\n    margin-bottom: 1em;\n    font-size: 14px;\n}\n\n.lead {\n    font-size: 20px;\n}\n\n.lead:hover {\n    color: palevioletred;\n    font-weight: bold;\n    -webkit-transform: translateX(17px) scale(1.1);\n            transform: translateX(17px) scale(1.1);\n    transition: 150ms all ease-in;\n    cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90di90di5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQXNEO0lBQ3RELDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0lBQ2QscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixxQ0FBcUM7SUFDckMsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0RBQWdEO0lBQ2hELHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQjs7Ozs7b0RBS2dEO0lBQ2hELG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQkFBb0I7QUFDeEI7O0FBRUEsZ0NBQWdDOztBQUNoQztJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQSw4QkFBOEI7O0FBQzlCO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxlQUFlO0lBQ2Y7cURBQ2lEO0lBQ2pEO3FEQUNpRDtBQUNyRDs7QUFFQSxxQ0FBcUM7O0FBQ3JDO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksY0FBYztJQUNkLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQiw4Q0FBc0M7WUFBdEMsc0NBQXNDO0lBQ3RDLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90di90di5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2sge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvMTQuanBnXCIpO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEyNXB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNTVweDtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgcGFkZGluZy1ib3R0b206IDcwcHg7XG59XG5cbmgzIHtcbiAgICBmb250LXNpemU6IDAuN2VtO1xufVxuXG5pbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDFweCAzcHggI2E2YTZhNik7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggMXB4IDNweCAjYTZhNmE2KTtcbn1cblxuLmJ0blBpbmsge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgdG8gbGVmdCxcbiAgICAgICAgICAgIHJnYmEoMTkwLCAxMTcsIDE3NCwgMC43OTUpIDMwJSxcbiAgICAgICAgICAgIHJnYmEoMTMzLCAxMjQsIDIxOSwgMC43OTUpIDEwMCVcbiAgICAgICAgKVxuICAgICAgICBsZWZ0IGJvdHRvbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIG5vLXJlcGVhdDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuUGluazpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBwYWxldmlvbGV0cmVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6IHBhbGV2aW9sZXRyZWQ7XG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGw7XG59XG5cbi8qIC0tLS0tIFByb2R1Y3QgU2VjdGlvbiAtLS0tLSAqL1xuLnByb2R1Y3Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAxZW0gMGVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XG59XG5cbi8qIC0tLS0tIFBob3RvIFNlY3Rpb24gLS0tLS0gKi9cbi5wcm9kdWN0X19waG90byB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGhvdG8tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTJlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5waG90by1tYWluIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBlbTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgLXdlYmtpdC1maWx0ZXI6IHNhdHVyYXRlKDE1MCUpIGNvbnRyYXN0KDEyMCUpIGh1ZS1yb3RhdGUoMTBkZWcpXG4gICAgICAgIGRyb3Atc2hhZG93KDFweCAyMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpKTtcbiAgICBmaWx0ZXI6IHNhdHVyYXRlKDE1MCUpIGNvbnRyYXN0KDEyMCUpIGh1ZS1yb3RhdGUoMTBkZWcpXG4gICAgICAgIGRyb3Atc2hhZG93KDFweCAyMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpKTtcbn1cblxuLyogLS0tLS0gSW5mb3JtYXRpb25zIFNlY3Rpb24gLS0tLS0gKi9cbi5wcm9kdWN0X19pbmZvIHtcbiAgICBwYWRkaW5nOiAwLjhlbSAwO1xufVxuXG4udGl0bGUgaDEge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGNvbG9yOiAjNGM0YzRjO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cbi50aXRsZSBzcGFuIHtcbiAgICBmb250LXNpemU6IDAuNmVtO1xufVxuXG4ucHJpY2Uge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMS42ZW07XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbn1cbi5wcmljZSBzcGFuIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBib3JkZXItYm90dG9tOiAxMnB4IHNvbGlkIHBhbGV2aW9sZXRyZWQ7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgY2xlYXI6IGxlZnQ7XG4gICAgbWFyZ2luOiAyZW0gMDtcbn1cbi5kZXNjcmlwdGlvbiBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubGVhZCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubGVhZDpob3ZlciB7XG4gICAgY29sb3I6IHBhbGV2aW9sZXRyZWQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE3cHgpIHNjYWxlKDEuMSk7XG4gICAgdHJhbnNpdGlvbjogMTUwbXMgYWxsIGVhc2UtaW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/tv/tv.component.ts":
/*!***********************************************!*\
  !*** ./src/app/components/tv/tv.component.ts ***!
  \***********************************************/
/*! exports provided: TvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvComponent", function() { return TvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_tv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tv.service */ "./src/app/services/tv.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_review_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/review.service */ "./src/app/services/review.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/watchlist.service */ "./src/app/services/watchlist.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");








let TvComponent = class TvComponent {
    constructor(tvService, reviewService, watchlistService, userService, route, fb) {
        this.tvService = tvService;
        this.reviewService = reviewService;
        this.watchlistService = watchlistService;
        this.userService = userService;
        this.route = route;
        this.fb = fb;
        this.writingReview = false;
        this.addingToWatchlist = false;
        this.genreEmojis = {
            Action: "🚗",
            Adventure: "🗺️",
            "Action & Adventure": "🗺️",
            Animation: "🤖",
            Comedy: "😂",
            Crime: "🦹",
            Documentary: "👨‍💼",
            Drama: "🎭",
            Family: "👪",
            Fantasy: "🧝",
            History: "🏛️",
            Horror: "🧟",
            Kids: "🕹️",
            Music: "🎶",
            Mystery: "🕵️",
            Romance: "💞",
            "Sci-Fi & Fantasy": "🧝",
            "Science Fiction": "🦸",
            Soap: "💞",
            "TV Movie": "🎥",
            Thriller: "🔪",
            War: "⚔️",
            "War & Politics": "⚔️",
            Western: "🤠"
        };
        this.reviewForm = this.fb.group({
            title: this.fb.control("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3)
            ]),
            rating: this.fb.control("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].max(5)
            ]),
            reviewText: this.fb.control("")
        });
        this.userId = this.userService.user.value._id;
    }
    ngOnInit() {
        // get tvId from url
        this.tvId = this.route.snapshot.url[1].path;
        this.tv = { genres: [] };
        this.tvService.getTvById(this.tvId).subscribe((res) => {
            this.tv = res;
        }, err => console.error(err), () => {
            this.parseTv(this.tv);
        });
    }
    parseTv(tv) {
        tv.backdrop_path =
            "https://image.tmdb.org/t/p/original" + tv.backdrop_path;
        tv.poster_path = "https://image.tmdb.org/t/p/w500" + tv.poster_path;
        return tv;
    }
    writeReview() {
        this.writingReview = true;
    }
    closeReview() {
        this.writingReview = false;
    }
    submitReview() {
        let review = Object.assign({}, this.reviewForm.value, { movie: {
                movieId: this.tvId,
                movieTitle: this.tv.original_title
            } });
        this.reviewService.createReview(review).subscribe();
        this.reviewForm.reset();
        this.writingReview = false;
    }
    addWatchlists() {
        this.addingToWatchlist = true;
        this.watchlistService
            .findWatchlistsByAuthor(this.userId)
            .subscribe(res => {
            this.watchlists = res.watchlists;
        });
    }
    addToWatchlist(watchlist) {
        // watchlistId, movieId, movieTitle, moviePosterPath
        let watchlistObject = {
            watchlistId: watchlist._id,
            movieId: this.tv._id,
            movieTitle: this.tv.original_name,
            moviePosterPath: this.tv.poster_path
        };
        this.watchlistService.addMovieToWatchlist(watchlistObject).subscribe();
        this.addingToWatchlist = false;
    }
    closeWatchlist() {
        this.addingToWatchlist = false;
    }
};
TvComponent.ctorParameters = () => [
    { type: src_app_services_tv_service__WEBPACK_IMPORTED_MODULE_2__["TvService"] },
    { type: src_app_services_review_service__WEBPACK_IMPORTED_MODULE_4__["ReviewService"] },
    { type: src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_6__["WatchlistService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
TvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-tv",
        template: __webpack_require__(/*! raw-loader!./tv.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/tv/tv.component.html"),
        styles: [__webpack_require__(/*! ./tv.component.css */ "./src/app/components/tv/tv.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tv_service__WEBPACK_IMPORTED_MODULE_2__["TvService"],
        src_app_services_review_service__WEBPACK_IMPORTED_MODULE_4__["ReviewService"],
        src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_6__["WatchlistService"],
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
], TvComponent);



/***/ }),

/***/ "./src/app/components/watchlists/watchlists.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/watchlists/watchlists.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\n    background-image: url('14.jpg');\n    background-attachment: fixed;\n    background-size: cover;\n    position: relative;\n    height: 100%;\n    overflow: hidden;\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 30px;\n    padding-bottom: 125px;\n    min-height: 100vh;\n    padding-bottom: 155px;\n    min-height: 100vh;\n    width: 100%;\n}\n\n.container {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.container .box {\n    width: 250px;\n    height: 250px;\n    border-radius: 10px;\n    background-color: white;\n    margin: 20px;\n    transition: 0.3s all ease-in-out;\n    position: relative;\n    box-shadow: 0px 0px 40px background;\n    /* Link */\n}\n\n.container .box .boxContent {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding: 15px;\n}\n\n.container .box .boxContent .icon {\n    color: #8293ff;\n    font-size: 48px;\n    padding: 15px;\n}\n\n.container .box .boxContent .title {\n    font-size: 24px;\n    color: #8293ff;\n    font-weight: bold;\n    padding: 10px;\n}\n\n.container .box .boxContent .desc {\n    color: #8293ff;\n    font-size: 15px;\n    height: 20%;\n}\n\n.container .box a {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n}\n\n.container .box:hover {\n    background: linear-gradient(130deg, #503bff 0%, #8293ff 100%);\n    box-shadow: none;\n}\n\n.container .box:hover .boxContent .title,\n.container .box:hover .boxContent .icon,\n.container .box:hover .boxContent .desc {\n    color: white;\n    transition: 1s all;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93YXRjaGxpc3RzL3dhdGNobGlzdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUFzRDtJQUN0RCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLFNBQVM7QUFDYjs7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLE1BQU07SUFDTixPQUFPO0FBQ1g7O0FBQ0E7SUFDSSw2REFBNkQ7SUFDN0QsZ0JBQWdCO0FBQ3BCOztBQUVBOzs7SUFHSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93YXRjaGxpc3RzL3dhdGNobGlzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnLzE0LmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEyNXB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNTVweDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNvbnRhaW5lciAuYm94IHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMjBweDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IGJhY2tncm91bmQ7XG4gICAgLyogTGluayAqL1xufVxuLmNvbnRhaW5lciAuYm94IC5ib3hDb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweDtcbn1cbi5jb250YWluZXIgLmJveCAuYm94Q29udGVudCAuaWNvbiB7XG4gICAgY29sb3I6ICM4MjkzZmY7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG4uY29udGFpbmVyIC5ib3ggLmJveENvbnRlbnQgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICM4MjkzZmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5jb250YWluZXIgLmJveCAuYm94Q29udGVudCAuZGVzYyB7XG4gICAgY29sb3I6ICM4MjkzZmY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGhlaWdodDogMjAlO1xufVxuLmNvbnRhaW5lciAuYm94IGEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG59XG4uY29udGFpbmVyIC5ib3g6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzBkZWcsICM1MDNiZmYgMCUsICM4MjkzZmYgMTAwJSk7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmNvbnRhaW5lciAuYm94OmhvdmVyIC5ib3hDb250ZW50IC50aXRsZSxcbi5jb250YWluZXIgLmJveDpob3ZlciAuYm94Q29udGVudCAuaWNvbixcbi5jb250YWluZXIgLmJveDpob3ZlciAuYm94Q29udGVudCAuZGVzYyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IDFzIGFsbDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/watchlists/watchlists.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/watchlists/watchlists.component.ts ***!
  \***************************************************************/
/*! exports provided: WatchlistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistsComponent", function() { return WatchlistsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/watchlist.service */ "./src/app/services/watchlist.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let WatchlistsComponent = class WatchlistsComponent {
    constructor(userService, watchlistService, activatedRoute, fb) {
        this.userService = userService;
        this.watchlistService = watchlistService;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.writingWatchlist = false;
        let currentUserId = this.userService.user.value._id;
        this.activatedRoute.params.subscribe(params => {
            if (params.id) {
                this.id = params.id;
                this.isOwner = this.id === currentUserId;
                this.getWatchlists(this.id);
            }
            else {
                this.getAllWatchlists();
            }
        });
        this.watchlistForm = this.fb.group({
            title: this.fb.control("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3)
            ]),
            description: this.fb.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
        });
    }
    ngOnInit() { }
    getWatchlists(id) {
        return this.watchlistService
            .findWatchlistsByAuthor(id)
            .subscribe(res => {
            this.watchlists = res.watchlists;
        });
    }
    getAllWatchlists() {
        return this.watchlistService.findAllWatchlists().subscribe(res => {
            this.watchlists = res.watchlists;
        });
    }
    createWatchlist() {
        this.writingWatchlist = true;
    }
    closeWatchlist() {
        this.writingWatchlist = false;
    }
    submitWatchlist() {
        let watchlist = this.watchlistForm.value;
        this.watchlistService.createWatchlist(watchlist).subscribe();
        this.watchlistForm.reset();
        this.writingWatchlist = false;
        // TODO: fetch watchlists after submitting
        // socket?
        if (this.id) {
            this.getWatchlists(this.id);
        }
        else
            this.getAllWatchlists();
    }
};
WatchlistsComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_2__["WatchlistService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
WatchlistsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-watchlists",
        template: __webpack_require__(/*! raw-loader!./watchlists.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/watchlists/watchlists.component.html"),
        styles: [__webpack_require__(/*! ./watchlists.component.css */ "./src/app/components/watchlists/watchlists.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_2__["WatchlistService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
], WatchlistsComponent);



/***/ }),

/***/ "./src/app/components/welcome/welcome.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#background {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    /*     max-width: 100%;\n    max-height: 100%;\n    min-width: 100vw;\n    animation: slideBg 10s infinite 1s;*/\n    background-image: url('1.jpg'); \n    background-position: center center;\n    background-size: cover;  \n    margin: 0 auto;\n    height: 100%;\n    width: 100%;\n    font-family: \"Montserrat\", sans-serif;\n    overflow: hidden;\n    position: absolute;\n    top: 0;\n    -o-object-fit: cover;\n       object-fit: cover;\n    max-width: 100vw;\n    max-height: 100vh;\n    z-index: -1000;\n}\n\n@-webkit-keyframes slideBg {\n    0% {\n        background-image: url('1.jpg');\n    }\n    30% {\n        background-image: url('3.jpg');\n    }\n    60% {\n        background-image: url('4.jpg');\n    }\n    100% {\n        background-image: url('1.jpg');\n    }\n}\n\n@keyframes slideBg {\n    0% {\n        background-image: url('1.jpg');\n    }\n    30% {\n        background-image: url('3.jpg');\n    }\n    60% {\n        background-image: url('4.jpg');\n    }\n    100% {\n        background-image: url('1.jpg');\n    }\n}\n\n.fluid-container {\n    height: 100%;\n    width: 100%;\n}\n\n.nav {\n    padding-top: 50px;\n    padding-left: 60px;\n}\n\n#login {\n    padding: 10px;\n    font-weight: bold;\n    color: white;\n    letter-spacing: 5px;\n}\n\n#register {\n    border: 2px solid white;\n    border-radius: 50px;\n    padding: 10px;\n    font-weight: bold;\n    color: white;\n    font-family: \"Montserrat\", sans-serif;\n    letter-spacing: 5px;\n    margin-left: 70px;\n    box-shadow: 6px 6px 0px 0px rgba(230, 62, 66, 1);\n    -webkit-animation-name: slideBoxShadowIn;\n            animation-name: slideBoxShadowIn;\n    -webkit-animation-duration: 300ms;\n            animation-duration: 300ms;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n}\n\n#register:hover {\n    background: rgba(230, 62, 66, 1);\n    -webkit-animation-name: slideBoxShadowOut;\n            animation-name: slideBoxShadowOut;\n    -webkit-animation-duration: 300ms;\n            animation-duration: 300ms;\n    font-family: \"Montserrat\", sans-serif;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    box-shadow: none;\n}\n\n@-webkit-keyframes slideBoxShadowOut {\n    0% {\n        background: rgba(230, 62, 66, 0);\n        box-shadow: 6px 6px 0px 0px rgba(230, 62, 66, 1);\n    }\n    50% {\n        background: rgba(230, 62, 66, 0.4);\n        box-shadow: 2px 2px 0px 0px rgba(230, 62, 66, 0.5);\n    }\n    100% {\n        background: rgba(230, 62, 66, 1);\n        box-shadow: none;\n    }\n}\n\n@keyframes slideBoxShadowOut {\n    0% {\n        background: rgba(230, 62, 66, 0);\n        box-shadow: 6px 6px 0px 0px rgba(230, 62, 66, 1);\n    }\n    50% {\n        background: rgba(230, 62, 66, 0.4);\n        box-shadow: 2px 2px 0px 0px rgba(230, 62, 66, 0.5);\n    }\n    100% {\n        background: rgba(230, 62, 66, 1);\n        box-shadow: none;\n    }\n}\n\n@-webkit-keyframes slideBoxShadowIn {\n    0% {\n        box-shadow: none;\n    }\n    50% {\n        box-shadow: 2px 2px 0px 0px rgba(230, 62, 66, 0.5);\n    }\n    100% {\n        box-shadow: 6px 6px 0px 0px rgba(230, 62, 66, 1);\n    }\n}\n\n@keyframes slideBoxShadowIn {\n    0% {\n        box-shadow: none;\n    }\n    50% {\n        box-shadow: 2px 2px 0px 0px rgba(230, 62, 66, 0.5);\n    }\n    100% {\n        box-shadow: 6px 6px 0px 0px rgba(230, 62, 66, 1);\n    }\n}\n\na:hover {\n    text-decoration: none;\n}\n\n.cool-link {\n    display: inline-block;\n    color: white;\n    text-decoration: none;\n}\n\n.cool-link::after {\n    content: \"\";\n    display: block;\n    width: 0;\n    height: 2px;\n    background: rgb(255, 255, 255);\n    transition: width 0.3s;\n}\n\n.cool-link:hover::after {\n    width: 100%;\n    transition: width 0.3s;\n}\n\n.noselect {\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\n    -moz-user-select: none; /* Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently\n                                        supported by Chrome and Opera */\n}\n\nimg {\n    max-width: 600px;\n}\n\np.cool-link:hover {\n    cursor: pointer;\n}\n\n#learnMore {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    top: 50%;\n    left:0;\n    background-color: white;\n    border-radius: 20px;\n}\n\n#learnMore.lead {\n    border-radius: 25px;\n    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Q7Ozt3Q0FHb0M7SUFDcEMsOEJBQXFEO0lBQ3JELGtDQUFrQztJQUNsQyxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gscUNBQXFDO0lBQ3JDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7UUFDSSw4QkFBcUQ7SUFDekQ7SUFDQTtRQUNJLDhCQUFxRDtJQUN6RDtJQUNBO1FBQ0ksOEJBQXFEO0lBQ3pEO0lBQ0E7UUFDSSw4QkFBcUQ7SUFDekQ7QUFDSjs7QUFiQTtJQUNJO1FBQ0ksOEJBQXFEO0lBQ3pEO0lBQ0E7UUFDSSw4QkFBcUQ7SUFDekQ7SUFDQTtRQUNJLDhCQUFxRDtJQUN6RDtJQUNBO1FBQ0ksOEJBQXFEO0lBQ3pEO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFHakIsZ0RBQWdEO0lBQ2hELHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QiwyQ0FBbUM7WUFBbkMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHlDQUFpQztZQUFqQyxpQ0FBaUM7SUFDakMsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QixxQ0FBcUM7SUFDckMsMENBQWtDO1lBQWxDLGtDQUFrQztJQUdsQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLGdDQUFnQztRQUdoQyxnREFBZ0Q7SUFDcEQ7SUFDQTtRQUNJLGtDQUFrQztRQUdsQyxrREFBa0Q7SUFDdEQ7SUFDQTtRQUNJLGdDQUFnQztRQUdoQyxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFuQkE7SUFDSTtRQUNJLGdDQUFnQztRQUdoQyxnREFBZ0Q7SUFDcEQ7SUFDQTtRQUNJLGtDQUFrQztRQUdsQyxrREFBa0Q7SUFDdEQ7SUFDQTtRQUNJLGdDQUFnQztRQUdoQyxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBR0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFHSSxrREFBa0Q7SUFDdEQ7SUFDQTtRQUdJLGdEQUFnRDtJQUNwRDtBQUNKOztBQWhCQTtJQUNJO1FBR0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFHSSxrREFBa0Q7SUFDdEQ7SUFDQTtRQUdJLGdEQUFnRDtJQUNwRDtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFFBQVE7SUFDUixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwyQkFBMkIsRUFBRSxlQUFlO0lBQzVDLHlCQUF5QixFQUFFLFdBQVcsRUFDWixtQkFBbUI7SUFDN0Msc0JBQXNCLEVBQUUsWUFBWTtJQUNwQyxxQkFBcUIsRUFBRSwyQkFBMkI7SUFDbEQsaUJBQWlCLEVBQUU7dUVBQ2dEO0FBQ3ZFOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFFBQVE7SUFDUixNQUFNO0lBQ04sdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiwyQ0FBMkM7QUFDL0MiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JhY2tncm91bmQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgLyogICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwdnc7XG4gICAgYW5pbWF0aW9uOiBzbGlkZUJnIDEwcyBpbmZpbml0ZSAxczsqL1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvMS5qcGdcIik7IFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgbWF4LWhlaWdodDogMTAwdmg7XG4gICAgei1pbmRleDogLTEwMDA7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVCZyB7XG4gICAgMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnLzEuanBnXCIpO1xuICAgIH1cbiAgICAzMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnLzMuanBnXCIpO1xuICAgIH1cbiAgICA2MCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnLzQuanBnXCIpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iZy8xLmpwZ1wiKTtcbiAgICB9XG59XG5cbi5mbHVpZC1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm5hdiB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xufVxuXG4jbG9naW4ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG59XG5cbiNyZWdpc3RlciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDZweCA2cHggMHB4IDBweCByZ2JhKDIzMCwgNjIsIDY2LCAxKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDZweCA2cHggMHB4IDBweCByZ2JhKDIzMCwgNjIsIDY2LCAxKTtcbiAgICBib3gtc2hhZG93OiA2cHggNnB4IDBweCAwcHggcmdiYSgyMzAsIDYyLCA2NiwgMSk7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlQm94U2hhZG93SW47XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDBtcztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cblxuI3JlZ2lzdGVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzMCwgNjIsIDY2LCAxKTtcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVCb3hTaGFkb3dPdXQ7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDBtcztcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVCb3hTaGFkb3dPdXQge1xuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMzAsIDYyLCA2NiwgMCk7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogNnB4IDZweCAwcHggMHB4IHJnYmEoMjMwLCA2MiwgNjYsIDEpO1xuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDZweCA2cHggMHB4IDBweCByZ2JhKDIzMCwgNjIsIDY2LCAxKTtcbiAgICAgICAgYm94LXNoYWRvdzogNnB4IDZweCAwcHggMHB4IHJnYmEoMjMwLCA2MiwgNjYsIDEpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzMCwgNjIsIDY2LCAwLjQpO1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggMHB4IDBweCByZ2JhKDIzMCwgNjIsIDY2LCAwLjUpO1xuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDJweCAycHggMHB4IDBweCByZ2JhKDIzMCwgNjIsIDY2LCAwLjUpO1xuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDBweCAwcHggcmdiYSgyMzAsIDYyLCA2NiwgMC41KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjMwLCA2MiwgNjYsIDEpO1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVCb3hTaGFkb3dJbiB7XG4gICAgMCUge1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDBweCAwcHggcmdiYSgyMzAsIDYyLCA2NiwgMC41KTtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDBweCAwcHggcmdiYSgyMzAsIDYyLCA2NiwgMC41KTtcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAwcHggMHB4IHJnYmEoMjMwLCA2MiwgNjYsIDAuNSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDZweCA2cHggMHB4IDBweCByZ2JhKDIzMCwgNjIsIDY2LCAxKTtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiA2cHggNnB4IDBweCAwcHggcmdiYSgyMzAsIDYyLCA2NiwgMSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDZweCA2cHggMHB4IDBweCByZ2JhKDIzMCwgNjIsIDY2LCAxKTtcbiAgICB9XG59XG5cbmE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvb2wtbGluayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb29sLWxpbms6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xufVxuXG4uY29vbC1saW5rOmhvdmVyOjphZnRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcbn1cblxuLm5vc2VsZWN0IHtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEtvbnF1ZXJvciBIVE1MICovXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xuICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cbn1cblxuaW1nIHtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuXG5wLmNvb2wtbGluazpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jbGVhcm5Nb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6MDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4jbGVhcm5Nb3JlLmxlYWQge1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/welcome/welcome.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.ts ***!
  \*********************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WelcomeComponent = class WelcomeComponent {
    constructor() {
        this.learnMore = false;
    }
    ngOnInit() { }
    toggleLearnMore() {
        this.learnMore = !this.learnMore;
    }
};
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-welcome",
        template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/welcome/welcome.component.html"),
        styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/components/welcome/welcome.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WelcomeComponent);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");




let AuthGuard = class AuthGuard {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate(route, state) {
        if (!this.userService.loggedIn.value) {
            this.router.navigate(['welcome']);
            return false;
        }
        return this.userService.loggedIn;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/services/data-provider.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/data-provider.service.ts ***!
  \***************************************************/
/*! exports provided: DataProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataProviderService", function() { return DataProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DataProviderService = class DataProviderService {
    constructor() { }
    setData(data) {
        console.log("Data provider", data);
        this.data = data;
    }
    removeData() {
        this.data = null;
    }
};
DataProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DataProviderService);



/***/ }),

/***/ "./src/app/services/movie.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/movie.service.ts ***!
  \*******************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let MovieService = class MovieService {
    constructor(http) {
        this.http = http;
        this.apiKey = "b5efa85196e4919222c431b10c08ef77";
    }
    handleError(operation = "operation", result) {
        return (response) => {
            console.log(response.error.errmsg, response.statusText);
            alert("Error has occured. Please try again.");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    }
    weeklyTrendingMovies() {
        let url = "https://api.themoviedb.org/3/trending/movie/week?api_key=" +
            this.apiKey;
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("movies")));
    }
    moviesInTheathers(page = 1) {
        let url = "https://api.themoviedb.org/3/discover/movie?api_key=" +
            this.apiKey +
            "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=" + page.toString() + "&primary_release_year=2019";
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("movies")));
    }
    getMovieById(id) {
        let url = "https://api.themoviedb.org/3/movie/" +
            id.toString() +
            "?api_key=" +
            this.apiKey +
            "&language=en-US";
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("movies")));
    }
    searchByName(query, page = 1) {
        let url = "https://api.themoviedb.org/3/search/movie?api_key=" +
            this.apiKey +
            "&language=en-US&query=" +
            query.toString() +
            "&page=" + page.toString() + "&include_adult=false";
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("tv")));
    }
};
MovieService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], MovieService);



/***/ }),

/***/ "./src/app/services/review.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/review.service.ts ***!
  \********************************************/
/*! exports provided: ReviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewService", function() { return ReviewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");








let ReviewService = class ReviewService {
    constructor(http, router, toasterService, userService) {
        this.http = http;
        this.router = router;
        this.toasterService = toasterService;
        this.userService = userService;
        this.reviewUrl = "/api/review";
    }
    handleError(operation = "operation", result) {
        return (response) => {
            this.toasterService.error(response.error.message, "Error has occured. Please try again.");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    }
    showToastrSuccess(message) {
        return this.toasterService.success(message, "Success!", {
            closeButton: true
        });
    }
    findReviewsByAuthor(id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("id", id);
        return this.http
            .get(this.reviewUrl + "/findReviewsByAuthor", { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("findReviewsByAuthor")));
    }
    findReviewByMovie(movieTitle) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("movieTitle", movieTitle);
        return this.http
            .get(this.reviewUrl + "/findReviewByMovie", { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(response => {
            if (!response.reviews.length) {
                this.toasterService.error("No reviews found!");
                return;
            }
            this.showToastrSuccess(response.message);
            this.router.navigate(["searchResult"]);
        }));
    }
    findAllReviews() {
        return this.http
            .get(this.reviewUrl + "/findAllReviews")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("findAllReviews")));
    }
    createReview(submittedReview) {
        // title, movie, rating, reviewText, authorId
        let authorId = this.userService.user.value._id;
        let review = Object.assign({}, submittedReview, { authorId });
        return this.http
            .post(this.reviewUrl + "/createReview", review)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(res => this.showToastrSuccess(res.message)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("createReview")));
    }
    updateReview(review) {
        // reviewId, title, rating, reviewText
        return this.http
            .put(this.reviewUrl + "/updateReview", review)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("updateReview")));
    }
    deleteReview(reviewId) {
        // reviewId
        return this.http
            .delete(this.reviewUrl + "/deleteReview", reviewId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("deleteReview")));
    }
};
ReviewService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
ReviewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
        _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
], ReviewService);



/***/ }),

/***/ "./src/app/services/tv.service.ts":
/*!****************************************!*\
  !*** ./src/app/services/tv.service.ts ***!
  \****************************************/
/*! exports provided: TvService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvService", function() { return TvService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let TvService = class TvService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.apiKey = "b5efa85196e4919222c431b10c08ef77";
    }
    handleError(operation = "operation", result) {
        return (response) => {
            console.log(response.error.errmsg, response.statusText);
            alert("Error has occured. Please try again.");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result);
        };
    }
    weeklyTrendingTv() {
        let url = "https://api.themoviedb.org/3/trending/tv/week?api_key=" +
            this.apiKey;
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("tv")));
    }
    discoverTV(page = 1) {
        let url = "https://api.themoviedb.org/3/discover/tv?api_key=" +
            this.apiKey +
            "&language=en-US&sort_by=popularity.desc&first_air_date_year=2016&page=" + page.toString + "&timezone=America%2FNew_York&include_null_first_air_dates=false&with_original_language=en";
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("tv")));
    }
    getTvById(id) {
        let url = "https://api.themoviedb.org/3/tv/" +
            id.toString() +
            "?api_key=" +
            this.apiKey +
            "&language=en-US";
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("tv")));
    }
    searchByName(query, page = 1) {
        let url = "https://api.themoviedb.org/3/search/tv?api_key=" +
            this.apiKey +
            "&language=en-US&query=" +
            query.toString() +
            "&page=" + page.toString();
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("tv")));
    }
};
TvService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
TvService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], TvService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _classes_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/token */ "./src/app/classes/token.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");









let UserService = class UserService {
    constructor(http, router, toasterService) {
        this.http = http;
        this.router = router;
        this.toasterService = toasterService;
        this.userUrl = "/api/user";
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        if (this.isLoggedIn()) {
            this.loggedIn.next(true);
            this.user.next(this.credentials());
        }
    }
    isLoggedIn() {
        let token = _classes_token__WEBPACK_IMPORTED_MODULE_3__["Token"].get();
        if (token) {
            let payload = _classes_token__WEBPACK_IMPORTED_MODULE_3__["Token"].parse(token);
            return payload.exp > Date.now() / 1000;
        }
        else
            return false;
    }
    credentials() {
        if (this.isLoggedIn()) {
            let token = _classes_token__WEBPACK_IMPORTED_MODULE_3__["Token"].get();
            let payload = _classes_token__WEBPACK_IMPORTED_MODULE_3__["Token"].parse(token);
            delete payload["exp"];
            delete payload["iat"];
            return payload;
        }
    }
    saveToken(token) {
        _classes_token__WEBPACK_IMPORTED_MODULE_3__["Token"].save(token);
        this.loggedIn.next(this.isLoggedIn());
        this.user.next(this.credentials());
    }
    showToastrSuccess(message) {
        return this.toasterService.success(message, "Success!", {
            closeButton: true
        });
    }
    handleError(operation = "operation", result) {
        return (response) => {
            this.toasterService.error("Error has occured. Please try again.");
            if (operation === "register" || operation === "login") {
                this.router.navigate(["welcome"]);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
    register(user) {
        return this.http.post(this.userUrl + "/register", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((response) => {
            this.saveToken(response.token);
            this.router.navigate(["home"]);
            this.showToastrSuccess(response.message);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("register", user)));
    }
    login(user) {
        return this.http.post(this.userUrl + "/login", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((response) => {
            this.saveToken(response.token);
            this.router.navigate(["home"]);
            this.showToastrSuccess(response.message);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("login", user)));
    }
    getProfileData(id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set("id", id);
        return this.http
            .get(this.userUrl + "/getProfileData", { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("getProfileData")));
    }
    findUserByUsername(username) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set("username", username);
        return this.http
            .get(this.userUrl + "/findUserByUsername", { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(response => {
            if (!response.user) {
                this.toasterService.error("No users found!");
                return;
            }
            this.showToastrSuccess(response.message);
            this.router.navigate(["profile", response.user._id]);
        }));
    }
    updateUsername(username) {
        const user = { id: this.user.value._id, username };
        return this.http.post(this.userUrl + "/updateUsername", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(response => {
            this.showToastrSuccess(response.message);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("updateUsername")));
    }
    updatePassword(password) {
        const user = { id: this.user.value._id, password };
        return this.http.post(this.userUrl + "/updatePassword", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(response => {
            this.showToastrSuccess(response.message);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("updatePassword")));
    }
    updateBio(bio) {
        const user = { id: this.user.value._id, bio };
        return this.http
            .post(this.userUrl + "/createOrUpdateBio", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(response => {
            this.showToastrSuccess(response.message);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("createOrUpdateBio")));
    }
    updateCurrentlyWatching(currentlyWatching) {
        const user = { id: this.user.value._id, currentlyWatching };
        return this.http
            .post(this.userUrl + "/createOrUpdateCurrentlyWatching", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(response => {
            this.showToastrSuccess(response.message);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("createOrUpdateCurrentlyWatching")));
    }
    updateFavorites(favorites) {
        const user = { id: this.user.value._id, favorites };
        return this.http
            .post(this.userUrl + "/createOrUpdateFavorites", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(response => {
            this.showToastrSuccess(response.message);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("createOrUpdateFavorites")));
    }
    updateAvatar(avatarURL) {
        const user = { id: this.user.value._id, avatarURL };
        return this.http.post(this.userUrl + "/updateAvatar", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(response => {
            this.showToastrSuccess(response.message);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("updateAvatar")));
    }
    logOut() {
        this.router.navigate(["/welcome"]);
        this.loggedIn.next(false);
        this.user.next(null);
        _classes_token__WEBPACK_IMPORTED_MODULE_3__["Token"].remove();
    }
    authHeaders() {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            Authorization: `Bearer ${_classes_token__WEBPACK_IMPORTED_MODULE_3__["Token"].get() ? _classes_token__WEBPACK_IMPORTED_MODULE_3__["Token"].get() : ""}`
        });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
], UserService);



/***/ }),

/***/ "./src/app/services/watchlist.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/watchlist.service.ts ***!
  \***********************************************/
/*! exports provided: WatchlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistService", function() { return WatchlistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");








let WatchlistService = class WatchlistService {
    constructor(http, router, toasterService, userService) {
        this.http = http;
        this.router = router;
        this.toasterService = toasterService;
        this.userService = userService;
        this.watchlistUrl = "/api/watchlist";
    }
    handleError(operation = "operation", result) {
        return (response) => {
            this.toasterService.error(response.error.message, "Error has occured. Please try again.");
            this.router.navigate(["welcome"]);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    }
    showToastrSuccess(message) {
        return this.toasterService.success(message, "Success!", {
            closeButton: true
        });
    }
    findWatchlistsByAuthor(id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("id", id);
        return this.http
            .get(this.watchlistUrl + "/findWatchlistsByAuthor", { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("findWatchlistsByAuthor")));
    }
    findWatchlistsByName(name) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("title", name);
        return this.http
            .get(this.watchlistUrl + "/findWatchlistsByName", { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(response => {
            if (!response.watchlists.length) {
                this.toasterService.error("No reviews found!");
                return;
            }
            this.showToastrSuccess(response.message);
            this.router.navigate(["searchResult"]);
        }));
    }
    findAllWatchlists() {
        return this.http
            .get(this.watchlistUrl + "/findAllWatchlists")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("findAllWatchlists")));
    }
    createWatchlist(submittedWatchlist) {
        // title, description, authorId
        let authorId = this.userService.user.value._id;
        let watchlist = Object.assign({}, submittedWatchlist, { authorId });
        return this.http
            .post(this.watchlistUrl + "/createWatchlist", watchlist)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(response => this.showToastrSuccess(response.message)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("createWatchlist")));
    }
    addMovieToWatchlist(watchlist) {
        // watchlistId, movieId, movieTitle, moviePosterPath
        return this.http
            .post(this.watchlistUrl + "/addMovieToWatchlist", watchlist)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(response => this.showToastrSuccess(response.message)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("addMovieToWatchlist")));
    }
    likeWatchlist(watchlistId) {
        // watchlistId
        return this.http
            .post(this.watchlistUrl + "/likeWatchlist", watchlistId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("likeWatchlist")));
    }
    updateTitleOrDescription(watchlist) {
        // watchlistId,title,description
        return this.http
            .put(this.watchlistUrl + "/updateTitleOrDescription", watchlist)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("updateTitleOrDescription")));
    }
    deleteWatchlist(watchlistId) {
        // watchlistId
        return this.http
            .delete(this.watchlistUrl + "/deleteWatchlist", watchlistId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("deleteWatchlist")));
    }
    deleteMovieFromWatchlist(watchlistId, movieId) {
        // watchlistId, movieId
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("watchlistId", watchlistId)
            .set("movieId", movieId);
        return this.http
            .delete(this.watchlistUrl + "/deleteMovieFromWatchlist", {
            params
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("deleteMovieFromWatchlist")));
    }
};
WatchlistService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
WatchlistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
        _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
], WatchlistService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/five/the-moviest/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map