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

module.exports = "<p>details works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/discover/discover.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/discover/discover.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\r\n    <app-navbar></app-navbar>\r\n    <div class=\"bg animated fadeIn\">\r\n        <h1 class=\"display-4 pl-5 ml-5 text-light text-left\">\r\n            <img src=\"../../../assets/img/ticket.png\" /> Movies in theathers\r\n        </h1>\r\n        <div class=\"container animated fadeIn\">\r\n            <a (click)=\"parseMovie(-4)\"\r\n                ><i class=\"fas fa-caret-left fa-3x\"></i\r\n            ></a>\r\n            <div class=\"box\" *ngFor=\"let movie of moviesDisplay\">\r\n                <a [routerLink]=\"['/movie', movie.id]\">\r\n                    <img src=\"{{ movie.poster_path }}\" />\r\n                    <span>{{ movie.original_title }}</span>\r\n                </a>\r\n            </div>\r\n            <a (click)=\"parseMovie(4)\"\r\n                ><i class=\"fas fa-caret-right fa-3x\"></i\r\n            ></a>\r\n        </div>\r\n    </div>\r\n\r\n    <h1 class=\"display-4 pr-5 mr-5 text-light text-right\">\r\n        Popular on TV\r\n        <img src=\"../../../assets/img/tvflix.png\" />\r\n    </h1>\r\n    <div class=\"container animated fadeIn\">\r\n        <a (click)=\"parseTv(-4)\"><i class=\"fas fa-caret-left fa-3x\"></i></a>\r\n        <div class=\"box\" *ngFor=\"let tvs of tvDisplay\">\r\n            <a [routerLink]=\"['/tv', tvs.id]\">\r\n                <img src=\"{{ tvs.poster_path }}\" />\r\n                <span>{{ tvs.original_name }}</span>\r\n            </a>\r\n        </div>\r\n        <a (click)=\"parseTv(4)\"><i class=\"fas fa-caret-right fa-3x\"></i></a>\r\n    </div>\r\n\r\n    <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <div style=\"display: inline;\">\r\n        <img src=\"./../../assets/img/tmdb.png\" alt=\"TMDB\" height=\"65\" />\r\n        <p class=\"lead pl-5 font-weight-bold\" style=\"display: inline;\">\r\n            The Moviest © 2019.\r\n        </p>\r\n    </div>\r\n    <div style=\"float: right;\">\r\n        <a href=\"https://github.com/ltatarev/the-moviest\" target=\"blank\">\r\n            <img\r\n                class=\"p-1\"\r\n                src=\"../../../assets/img/github.png\"\r\n                alt=\"Github\"\r\n                height=\"35\"\r\n            />\r\n        </a>\r\n        <a href=\"https://www.instagram.com/crvenamedeia/\" target=\"blank\">\r\n            <img\r\n                class=\"p-1\"\r\n                src=\"../../../assets/img/instagram-logo.png\"\r\n                alt=\"Github\"\r\n                height=\"33\"\r\n            />\r\n        </a>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\r\n    <app-navbar></app-navbar>\r\n\r\n    <div class=\"container-fluid  animated fadeIn delay-1s\" id=\"trendingNow\">\r\n        <!-- T R E N D I N G N O W  -->\r\n        <div class=\"row\">\r\n            <div class=\"title\">\r\n                <p class=\"ml-5\">\r\n                    <img\r\n                        style=\"opacity: 1; filter: alpha(opacity=100); \"\r\n                        src=\"../../../assets/img/video-camera.png\"\r\n                        height=\"80\"\r\n                    />\r\n                    <!-- 🎬 -->\r\n                    TRENDING NOW\r\n                </p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col w-100\">\r\n                <carousel>\r\n                    <slide *ngFor=\"let three of topThree\">\r\n                            <a (click)=\"goToMovie(three.id)\">\r\n                        <img\r\n                            [src]=\"three.poster\"\r\n                            alt=\"first slide\"\r\n                            style=\"display: block; height: 600px; width: 100%; object-fit: cover;\"\r\n                        />\r\n                        <div class=\"carousel-caption d-none d-md-block\">\r\n                            <h3>\r\n                               {{\r\n                                    three.title\r\n                                }}\r\n                            </h3>\r\n                            <p class=\"lead\">{{ three.overview }}</p>\r\n                        </a>\r\n                        </div>\r\n                    </slide>\r\n                </carousel>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"container-fluid\" id=\"airingOnTv\">\r\n            <div class=\"row p-2\">\r\n                <div class=\"col p-2 d-flex\" *ngFor=\"let five of topFive\">\r\n                    <div class=\"card\" style=\"height: 600px; overflow: auto;\">\r\n                        <a class=\"c-preview\">\r\n                            <img\r\n                                [src]=\"five.poster\"\r\n                                class=\"card-img-top c-preview__img\"\r\n                                alt=\"...\"\r\n                                height=\"300\"\r\n                                style=\"object-fit: cover;\"\r\n                            />\r\n                        </a>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row p-1\">\r\n                                <h5 class=\"card-title\">{{ five.title }}</h5>\r\n\r\n                                <p class=\"card-text lead\">\r\n                                    {{ five.overview }}\r\n                                </p>\r\n                                <div class=\"ml-2 pl-2\">\r\n                                    <a (click)=\"goToMovie(five.id)\">\r\n                                        <button class=\"learn-more\">\r\n                                            <div class=\"circle\">\r\n                                                <span class=\"icon arrow\"></span>\r\n                                            </div>\r\n                                            <p class=\"button-text\">\r\n                                                Learn More\r\n                                            </p>\r\n                                        </button>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- A I R I N G O N T V -->\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"titleRight w-100 pr-5 mr-3\">\r\n                    POPULAR ON TV\r\n                    <!-- 📺 -->\r\n                    <img\r\n                        style=\"opacity: 1; filter: alpha(opacity=100); padding: 10px;\"\r\n                        src=\"../../../assets/img/tv.png\"\r\n                        height=\"80\"\r\n                    />\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col w-100\">\r\n                    <carousel>\r\n                        <slide *ngFor=\"let three of topThreeTv\">\r\n                                <a (click)=\"goToTv(three.id)\">\r\n                            <img\r\n                                [src]=\"three.poster\"\r\n                                alt=\"first slide\"\r\n                                style=\"display: block; height: 600px; width: 100%; object-fit: cover;\"\r\n                            />\r\n                            <div class=\"carousel-caption d-none d-md-block\">\r\n                                <h3>\r\n                                   {{\r\n                                        three.name\r\n                                    }}\r\n                                </h3>\r\n                                <p class=\"lead\">{{ three.overview }}</p>\r\n                            </a>\r\n                            </div>\r\n                        </slide>\r\n                    </carousel>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"container-fluid\" id=\"airingOnTv\">\r\n            <div class=\"row p-2\">\r\n                <div class=\"col p-2 d-flex\" *ngFor=\"let five of topFiveTv\">\r\n                    <div class=\"card\" style=\"height: 600px; overflow: auto;\">\r\n                        <a class=\"c-preview\">\r\n                            <img\r\n                                [src]=\"five.poster\"\r\n                                class=\"card-img-top c-preview__img \"\r\n                                alt=\"...\"\r\n                                height=\"300\"\r\n                                style=\"object-fit: cover;\"\r\n                            />\r\n                        </a>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row p-2\">\r\n                                <h5 class=\"card-title\">{{ five.name }}</h5>\r\n                                <p class=\"card-text lead\">\r\n                                    {{ five.overview }}\r\n                                </p>\r\n                                <div class=\"ml-2 pl-2\">\r\n                                    <a (click)=\"goToTv(five.id)\">\r\n                                        <button class=\"learn-more\">\r\n                                            <div class=\"circle\">\r\n                                                <span class=\"icon arrow\"></span>\r\n                                            </div>\r\n                                            <p class=\"button-text\">\r\n                                                Learn more\r\n                                            </p>\r\n                                        </button>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back animated fadeIn\"></div>\r\n<div class=\"registration-form\">\r\n    <header>\r\n        <h1>🎥 Sign In</h1>\r\n        <p>Enter your information</p>\r\n    </header>\r\n\r\n    <form\r\n        [formGroup]=\"loginForm\"\r\n        (ngSubmit)=\"onSubmit()\"\r\n        class=\"animated fadeInUp\"\r\n    >\r\n        <!-- U S E R N A M E -->\r\n        <div class=\"input-section username-section\">\r\n            <input\r\n                class=\"username\"\r\n                formControlName=\"username\"\r\n                type=\"text\"\r\n                required\r\n                placeholder=\"ENTER YOUR USERNAME\"\r\n            />\r\n            <!-- animated button -->\r\n            <div class=\"animated-button\">\r\n                <span\r\n                    [ngClass]=\"{\r\n                        'icon-lock': true,\r\n                        next: loginForm.get('username').valid\r\n                    }\"\r\n                    ><i class=\"fa fa-laptop\"></i\r\n                ></span>\r\n                <span class=\"next-button username\"\r\n                    ><i class=\"fa fa-arrow-up\"></i\r\n                ></span>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- P A S S W O R D -->\r\n        <div class=\"input-section password-section folded\">\r\n            <input\r\n                class=\"password\"\r\n                formControlName=\"password\"\r\n                type=\"password\"\r\n                required\r\n                placeholder=\"ENTER YOUR PASSWORD\"\r\n            />\r\n\r\n            <!-- animated button -->\r\n            <div class=\"animated-button\">\r\n                <span\r\n                    [ngClass]=\"{\r\n                        'icon-repeat-lock': true,\r\n                        next: loginForm.get('password').valid\r\n                    }\"\r\n                    ><i class=\"fa fa-lock\"></i\r\n                ></span>\r\n\r\n                <!-- s u b m i t -->\r\n                <span class=\"next-button password\">\r\n                    <button\r\n                        type=\"submit\"\r\n                        class=\"btn btn-link\"\r\n                        [disabled]=\"loginForm.invalid\"\r\n                    >\r\n                        <i class=\"fa fa-paper-plane\"></i>\r\n                    </button>\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <div class=\"success\">\r\n            <p>LOGGING IN...</p>\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/movie/movie.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/movie/movie.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\r\n    <app-navbar></app-navbar>\r\n    <div\r\n        class=\"container mb-5 text-dark animated fadeInUp\"\r\n        *ngIf=\"!writingReview\"\r\n    >\r\n        <section class=\"product\">\r\n            <div class=\"product__photo\">\r\n                <div class=\"photo-container\">\r\n                    <div class=\"photo-main\">\r\n                        <img\r\n                            src=\"{{ movie?.poster_path }}\"\r\n                            style=\"width: 100%; \"\r\n                        />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"product__info\">\r\n                <div class=\"price\">\r\n                    <span>{{ movie.original_title }}</span>\r\n                </div>\r\n                <div class=\"title font-italic pt-3\">\r\n                    <h1>{{ movie.tagline }}</h1>\r\n                </div>\r\n                <div class=\"description\">\r\n                    <p>{{ movie.overview }}</p>\r\n                    <hr />\r\n                    <h3 style=\"display: inline; padding: 7px;\">Genres:</h3>\r\n                    <p\r\n                        *ngFor=\"let genre of movie.genres\"\r\n                        style=\"display: inline; padding: 7px;\"\r\n                    >\r\n                        {{ genreEmojis[genre.name] }} {{ genre.name }}\r\n                    </p>\r\n                    <div class=\"pt-4\">\r\n                        <button\r\n                            class=\"btn btn-outline-success btn-sm m-1 p-2\"\r\n                            (click)=\"addToWatchlist()\"\r\n                        >\r\n                            <i class=\"fas fa-highlighter p-1\"></i> Add to\r\n                            watchlist\r\n                        </button>\r\n                        <button\r\n                            class=\"btn btnPink btn-sm m-1\"\r\n                            (click)=\"writeReview()\"\r\n                        >\r\n                            <i class=\"fas fa-clipboard-list p-1\"></i> Write a\r\n                            review\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n\r\n    <!-- R E V I E W  -->\r\n    <div\r\n        class=\"text-center container mb-5 bg-light p-5 rounded animated fadeInUp\"\r\n        *ngIf=\"writingReview\"\r\n    >\r\n        <button\r\n            class=\"btn btn-outline-danger btn-sm ml-auto\"\r\n            (click)=\"closeReview()\"\r\n        >\r\n            <i class=\"fas fa-times\" style=\"cursor:pointer;\"></i>\r\n        </button>\r\n        <h6 class=\"display-4\">Write a review</h6>\r\n        <!-- R E V I E W F O R M -->\r\n        <form\r\n            [formGroup]=\"reviewForm\"\r\n            (ngSubmit)=\"submitReview()\"\r\n            class=\"animated fadeInDown\"\r\n        >\r\n            <!-- T E M P L A T E  -->\r\n            <ng-template #t let-i=\"index\" let-v=\"value\">\r\n                <button\r\n                    type=\"button\"\r\n                    class=\"btn  btn{{ i < v ? 'Pink' : '-default' }}\"\r\n                    style=\"transition: all 0.1s;\"\r\n                >\r\n                    {{ i < v ? \"&#9733;\" : \"&#9734;\" }}\r\n                </button>\r\n            </ng-template>\r\n            <!-- R A T I N G  -->\r\n            <div class=\"p-3\">\r\n                <rating\r\n                    [max]=\"5\"\r\n                    formControlName=\"rating\"\r\n                    [customTemplate]=\"t\"\r\n                    style=\"font-size: 20px;\"\r\n                ></rating>\r\n            </div>\r\n            <div class=\"input-group pb-3\">\r\n                <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    formControlName=\"title\"\r\n                    id=\"title\"\r\n                    placeholder=\"Review title\"\r\n                />\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <textarea\r\n                    class=\"form-control rounded-0\"\r\n                    formControlName=\"reviewText\"\r\n                    placeholder=\"Review text...\"\r\n                    rows=\"3\"\r\n                ></textarea>\r\n            </div>\r\n            <!-- S U B M I T  -->\r\n            <div class=\"p-2 ml-auto\">\r\n                <button\r\n                    class=\"btn btn-outline-success\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"!reviewForm.valid\"\r\n                >\r\n                    Submit\r\n                </button>\r\n            </div>\r\n        </form>\r\n        <hr />\r\n    </div>\r\n\r\n    <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- NAVBAR -->\r\n<nav class=\"navbar navbar-expand-lg ml-5 mr-5 p-5 animated slideInDown\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['/home']\">\r\n        <img\r\n            src=\"../../../assets/img/logo.png\"\r\n            alt=\"The Moviest\"\r\n            height=\"100\"\r\n        />\r\n    </a>\r\n\r\n    <button\r\n        class=\"navbar-toggler btn btn-outline-light\"\r\n        type=\"button\"\r\n        (click)=\"toggleNavbar()\"\r\n    >\r\n        <span class=\"navbar-toggler-icon\"\r\n            ><i class=\"fas fa-bars pt-1\"></i\r\n        ></span>\r\n    </button>\r\n\r\n    <div\r\n        class=\"collapse navbar-collapse show align-text-bottom\"\r\n        [ngClass]=\"{ show: navbarOpen }\"\r\n    >\r\n        <ul class=\"navbar-nav ml-auto align-text-bottom\">\r\n            <li class=\"nav-item align-text-bottom\">\r\n                <a\r\n                    class=\"nav-link align-text-bottom\"\r\n                    [routerLink]=\"['/discover']\"\r\n                    >Discover</a\r\n                >\r\n            </li>\r\n\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/reviews']\">Reviews</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/watchlists']\"\r\n                    >Watchlists</a\r\n                >\r\n            </li>\r\n\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/search']\"\r\n                    ><i class=\"fas fa-search\"></i\r\n                ></a>\r\n            </li>\r\n\r\n            <li class=\"nav-items\">\r\n                <a class=\"nav-link\">\r\n                    <div class=\"dropdown\">\r\n                        <button class=\"dropbtn\">\r\n                            <img\r\n                                src=\"{{ avatarURL }}\"\r\n                                style=\"position:relative;top:-20px\"\r\n                                height=\"40\"\r\n                            />\r\n                        </button>\r\n\r\n                        <div class=\"dropdown-content\">\r\n                            <a [routerLink]=\"['/profile', id]\">Profile</a>\r\n                            <a [routerLink]=\"['/settings']\">Settings</a>\r\n\r\n                            <a id=\"logout\" (click)=\"logOut()\">Log out</a>\r\n                        </div>\r\n                    </div>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/profile/profile.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pl-0 pr-0 main\">\r\n    <app-navbar></app-navbar>\r\n    <div class=\"card profile m-auto  animated fadeIn\">\r\n        <div class=\"card-header profileName\">\r\n            {{ username }}\r\n        </div>\r\n        <div class=\"card-body profileBody\">\r\n            <div class=\"profilePic\">\r\n                <img\r\n                    class=\"avatar\"\r\n                    [src]=\"avatarURL ? avatarURL : ''\"\r\n                    alt=\"Username\"\r\n                />\r\n            </div>\r\n            <div class=\"profileInfo\">\r\n                <p class=\"bio font-italic\">{{ bio }}</p>\r\n                <hr />\r\n                📼\r\n                <p class=\"title\">CURRENTLY WATCHING</p>\r\n                <p class=\"font-weight-bold\">{{ currentlyWatching }}</p>\r\n                <hr />\r\n                <p class=\"title\">FAVORITES</p>\r\n                <div>\r\n                    <p class=\"border\">📽️ {{ favorites.movie }}</p>\r\n                    <p class=\"border\">📺 {{ favorites.tvShow }}</p>\r\n                    <p class=\"border\">👨‍🎤 {{ favorites.actor }}</p>\r\n                    <p class=\"border\">🍿 {{ favorites.genre }}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-footer actions\">\r\n            <div class=\"actionFirst\" (click)=\"getReviews()\">\r\n                <i class=\"fas fa-highlighter\"></i>\r\n                <p class=\"title\">Reviews</p>\r\n            </div>\r\n            <div class=\"actionSecond\" (click)=\"getWatchlists()\">\r\n                <i class=\"fas fa-clipboard-list\"></i>\r\n                <p class=\"title\">Watchlists</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/register/register.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back animated fadeIn\"></div>\r\n<div class=\"registration-form\">\r\n    <header>\r\n        <h1>🎬 Register</h1>\r\n        <p class=\"lead text-italic\">Enter your information</p>\r\n    </header>\r\n\r\n    <form\r\n        [formGroup]=\"registerForm\"\r\n        (ngSubmit)=\"onSubmit()\"\r\n        class=\"animated fadeInDown\"\r\n    >\r\n        <!-- E M A I L -->\r\n        <div class=\"input-section email-section\">\r\n            <input\r\n                class=\"email\"\r\n                formControlName=\"email\"\r\n                type=\"email\"\r\n                placeholder=\"ENTER YOUR E-MAIL\"\r\n                required\r\n                autocomplete=\"off\"\r\n            />\r\n            <!-- animated button -->\r\n            <div class=\"animated-button\">\r\n                <span\r\n                    [ngClass]=\"{\r\n                        'icon-paper-plane': true,\r\n                        next: registerForm.get('email').valid\r\n                    }\"\r\n                    ><i class=\"fa fa-envelope-o\"></i\r\n                ></span>\r\n                <span class=\"next-button email\"\r\n                    ><i class=\"fa fa-arrow-up\"></i\r\n                ></span>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- .next-button:hover {cursor:pointer} -->\r\n\r\n        <!-- U S E R N A M E -->\r\n        <div class=\"input-section username-section folded\">\r\n            <input\r\n                class=\"username\"\r\n                formControlName=\"username\"\r\n                type=\"text\"\r\n                required\r\n                placeholder=\"ENTER YOUR USERNAME\"\r\n            />\r\n            <!-- animated button -->\r\n            <div class=\"animated-button\">\r\n                <span\r\n                    [ngClass]=\"{\r\n                        'icon-lock': true,\r\n                        next: registerForm.get('username').valid\r\n                    }\"\r\n                    ><i class=\"fa fa-laptop\"></i\r\n                ></span>\r\n                <span class=\"next-button username\"\r\n                    ><i class=\"fa fa-arrow-up\"></i\r\n                ></span>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- P A S S W O R D -->\r\n        <div class=\"input-section password-section folded\">\r\n            <input\r\n                class=\"password\"\r\n                formControlName=\"password\"\r\n                type=\"password\"\r\n                required\r\n                placeholder=\"ENTER YOUR PASSWORD\"\r\n            />\r\n\r\n            <!-- animated button -->\r\n            <div class=\"animated-button\">\r\n                <span\r\n                    [ngClass]=\"{\r\n                        'icon-repeat-lock': true,\r\n                        next: registerForm.get('password').valid\r\n                    }\"\r\n                    ><i class=\"fa fa-lock\"></i\r\n                ></span>\r\n\r\n                <!-- s u b m i t -->\r\n                <span class=\"next-button password\">\r\n                    <button\r\n                        type=\"submit\"\r\n                        class=\"btn btn-link\"\r\n                        [disabled]=\"registerForm.invalid\"\r\n                    >\r\n                        <i class=\"fa fa-paper-plane\"></i>\r\n                    </button>\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <div class=\"success\">\r\n            <p>CREATING ACCOUNT...</p>\r\n        </div>\r\n    </form>\r\n    <p\r\n        class=\"lead p-5 mt-5 text-danger font-weight-bold\"\r\n        *ngIf=\"\r\n            registerForm.get('username').dirty &&\r\n            !registerForm.get('username').valid\r\n        \"\r\n    >\r\n        Minimum username length is 3!\r\n    </p>\r\n    <p\r\n        class=\"lead p-5 mt-5 text-danger font-weight-bold\"\r\n        *ngIf=\"\r\n            registerForm.get('password').dirty &&\r\n            !registerForm.get('password').valid\r\n        \"\r\n    >\r\n        Minimum password length is 3!\r\n    </p>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/reviews/reviews.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/reviews/reviews.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back animated fadeIn\">\r\n    <app-navbar></app-navbar>\r\n    <div class=\"container\">\r\n        <div class=\"box\" *ngFor=\"let review of reviews\">\r\n            <div class=\"boxContent\">\r\n                <i class=\"fas fa-film icon\"></i>\r\n                <h1 class=\"title\">{{review.title}}</h1>\r\n                <h3 class=\"movie\">{{review.movie.movieTitle}}</h3>\r\n                <p class=\"desc font-italic\">\r\n                    {{review.author_id.username}}\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/search-result/search-result.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/search-result/search-result.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"back\">\r\n    <h1>Search results</h1>\r\n    <div class=\"card\">\r\n        <div class=\"card-title\">Title</div>\r\n        <div class=\"card-subtitle\">Subtitle</div>\r\n        <div class=\"card-body\">\r\n            This is some text within a card body.\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/search/search.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/search/search.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\r\n    <app-navbar></app-navbar>\r\n    <form\r\n        [formGroup]=\"searchForm\"\r\n        (ngSubmit)=\"onSubmit()\"\r\n        class=\"animated fadeInUp\"\r\n    >\r\n        <div class=\"container\">\r\n            <input\r\n                type=\"text\"\r\n                formControlName=\"search\"\r\n                placeholder=\"Search...\"\r\n            />\r\n            <div class=\"search\"></div>\r\n        </div>\r\n\r\n        <div class=\"container m-auto text-center\" id=\"radios\">\r\n            <label for=\"watchlist\">\r\n                <input\r\n                    type=\"radio\"\r\n                    formControlName=\"type\"\r\n                    id=\"watchlist\"\r\n                    value=\"watchlist\"\r\n                    checked\r\n                />\r\n                <span> ‎‎🎞️</span>\r\n            </label>\r\n            <label for=\"review\">\r\n                <input\r\n                    type=\"radio\"\r\n                    formControlName=\"type\"\r\n                    id=\"review\"\r\n                    value=\"review\"\r\n                />\r\n                <span>📚</span>\r\n            </label>\r\n            <label for=\"profile\">\r\n                <input\r\n                    type=\"radio\"\r\n                    formControlName=\"type\"\r\n                    id=\"profile\"\r\n                    value=\"profile\"\r\n                />\r\n                <span>👥</span>\r\n            </label>\r\n            <label for=\"tv show\">\r\n                <input\r\n                    type=\"radio\"\r\n                    formControlName=\"type\"\r\n                    id=\"tv show\"\r\n                    value=\"tvShow\"\r\n                />\r\n                <span>📺</span>\r\n            </label>\r\n            <label for=\"movie\">\r\n                <input\r\n                    type=\"radio\"\r\n                    formControlName=\"type\"\r\n                    id=\"movie\"\r\n                    value=\"movie\"\r\n                />\r\n                <span>🎥</span>\r\n            </label>\r\n            <div class=\"row text-center p-5\">\r\n                <button\r\n                    type=\"submit\"\r\n                    class=\"btn btn-success m-auto p-2\"\r\n                    [disabled]=\"searchForm.invalid\"\r\n                    style=\"border-radius: 17px;\"\r\n                >\r\n                    SUBMIT\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/settings/settings.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/settings/settings.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\r\n    <app-navbar></app-navbar>\r\n    <h1 class=\"display-4 p text-center text-light\">Update your profile</h1>\r\n    <div class=\"container p-3 m-3 w-75 rounded m-auto bg-light\">\r\n        <!-- update avatar form -->\r\n        <div class=\"text-center m-auto pb-3\">\r\n            <img\r\n                class=\"m-auto\"\r\n                src=\"{{ avatarURL }}\"\r\n                height=\"50\"\r\n                (click)=\"shuffleAvatar()\"\r\n            />\r\n        </div>\r\n\r\n        <!-- update username form -->\r\n        <form\r\n            [formGroup]=\"usernameForm\"\r\n            (ngSubmit)=\"updateUsername()\"\r\n            class=\"animated fadeInDown p-1\"\r\n        >\r\n            <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text\">🤠</div>\r\n                </div>\r\n                <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    formControlName=\"username\"\r\n                    id=\"updateUsername\"\r\n                    placeholder=\"Update username\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                    <button\r\n                        class=\"btn btn-outline-success\"\r\n                        type=\"submit\"\r\n                        [disabled]=\"!usernameForm.valid\"\r\n                    >\r\n                        Submit\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <hr />\r\n        <!-- update password form -->\r\n        <form\r\n            [formGroup]=\"passwordForm\"\r\n            (ngSubmit)=\"updatePassword()\"\r\n            class=\"animated fadeInDown p-1\"\r\n        >\r\n            <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text\">🔒</div>\r\n                </div>\r\n                <input\r\n                    type=\"password\"\r\n                    class=\"form-control\"\r\n                    formControlName=\"password\"\r\n                    id=\"updatePassword\"\r\n                    placeholder=\"Update password\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                    <button\r\n                        class=\"btn btn-outline-success\"\r\n                        type=\"submit\"\r\n                        [disabled]=\"!passwordForm.valid\"\r\n                    >\r\n                        Submit\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <p\r\n                class=\"text-danger\"\r\n                *ngIf=\"\r\n                    passwordForm.invalid &&\r\n                    (passwordForm.touched || passwordForm.dirty)\r\n                \"\r\n            >\r\n                Password should be between 3 and 15 characters long.\r\n            </p>\r\n        </form>\r\n        <hr />\r\n        <!-- update bio, how much chars is max?? -->\r\n        <form\r\n            [formGroup]=\"bioForm\"\r\n            (ngSubmit)=\"updateBio()\"\r\n            class=\"animated fadeInDown p-1\"\r\n        >\r\n            <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text\">🏞️</div>\r\n                </div>\r\n                <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    formControlName=\"bio\"\r\n                    id=\"updateBio\"\r\n                    placeholder=\"Update bio\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                    <button\r\n                        class=\"btn btn-outline-success\"\r\n                        type=\"submit\"\r\n                        [disabled]=\"!bioForm.valid\"\r\n                    >\r\n                        Submit\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <p\r\n                class=\"text-danger\"\r\n                *ngIf=\"bioForm.invalid && (bioForm.touched || bioForm.dirty)\"\r\n            >\r\n                Bio should be max. 250 characters long.\r\n            </p>\r\n        </form>\r\n        <hr />\r\n        <!-- update currently watching -->\r\n        <form\r\n            [formGroup]=\"currWatchingForm\"\r\n            (ngSubmit)=\"updateCurrentlyWatching()\"\r\n            class=\"animated fadeInDown p-1\"\r\n        >\r\n            <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text\">📼</div>\r\n                </div>\r\n                <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    formControlName=\"currentlyWatching\"\r\n                    id=\"updateCurrentlyWatching\"\r\n                    placeholder=\"Update currently watching\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                    <button\r\n                        class=\"btn btn-outline-success\"\r\n                        type=\"submit\"\r\n                        [disabled]=\"!currWatchingForm.valid\"\r\n                    >\r\n                        Submit\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <hr />\r\n        <!-- update favorites -->\r\n        <!-- update movie -->\r\n        <form\r\n            [formGroup]=\"favoritesForm\"\r\n            (ngSubmit)=\"updateFavorites()\"\r\n            class=\"animated fadeInDown p-1\"\r\n        >\r\n            <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text\">📽️</div>\r\n                </div>\r\n                <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    formControlName=\"movie\"\r\n                    id=\"updateMovie\"\r\n                    placeholder=\"Update favorite movie\"\r\n                />\r\n            </div>\r\n            <!-- update tv show -->\r\n            <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text\">📺</div>\r\n                </div>\r\n                <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    formControlName=\"tvShow\"\r\n                    id=\"updateTvShow\"\r\n                    placeholder=\"Update favorite tv show\"\r\n                />\r\n            </div>\r\n            <!-- update actor -->\r\n            <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text\">👨‍🎤</div>\r\n                </div>\r\n                <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    formControlName=\"actor\"\r\n                    id=\"updateActor\"\r\n                    placeholder=\"Update favorite actor/actress\"\r\n                />\r\n            </div>\r\n            <!-- update genre -->\r\n            <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text\">🍿</div>\r\n                </div>\r\n                <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    formControlName=\"genre\"\r\n                    id=\"updateGenre\"\r\n                    placeholder=\"Update favorite genre\"\r\n                />\r\n                <button\r\n                    class=\"btn btn-outline-success\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"!favoritesForm.touched\"\r\n                >\r\n                    Submit\r\n                </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"h-25\"></div>\r\n    <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/tv/tv.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/tv/tv.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\r\n    <app-navbar></app-navbar>\r\n    <div\r\n        class=\"container mb-5 text-dark animated fadeInUp\"\r\n        *ngIf=\"!writingReview\"\r\n    >\r\n        <section class=\"product\">\r\n            <div class=\"product__photo\">\r\n                <div class=\"photo-container\">\r\n                    <div class=\"photo-main\">\r\n                        <img\r\n                            src=\"{{ tv?.poster_path }}\"\r\n                            style=\"width: 100%; \"\r\n                        />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"product__info\">\r\n                <div class=\"price\">\r\n                    <span>{{ tv.original_name }}</span>\r\n                </div>\r\n                <div class=\"description\">\r\n                    <p>{{ tv.overview }}</p>\r\n                    <hr />\r\n                    <h3 style=\"display: inline; padding: 7px;\">Genres:</h3>\r\n                    <p\r\n                        *ngFor=\"let genre of tv.genres\"\r\n                        style=\"display: inline; padding: 7px;\"\r\n                    >\r\n                        {{ genreEmojis[genre.name] }} {{ genre.name }}\r\n                    </p>\r\n                    <div class=\"pt-4\">\r\n                        <button\r\n                            class=\"btn btn-outline-success btn-sm m-1 p-2\"\r\n                            (click)=\"addToWatchlist()\"\r\n                        >\r\n                            <i class=\"fas fa-highlighter p-1\"></i> Add to\r\n                            watchlist\r\n                        </button>\r\n                        <button\r\n                            class=\"btn btnPink btn-sm m-1\"\r\n                            (click)=\"writeReview()\"\r\n                        >\r\n                            <i class=\"fas fa-clipboard-list p-1\"></i> Write a\r\n                            review\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n\r\n    <!-- R E V I E W  -->\r\n    <div\r\n        class=\"text-center container mb-5 bg-light p-5 rounded animated fadeInUp\"\r\n        *ngIf=\"writingReview\"\r\n    >\r\n        <button\r\n            class=\"btn btn-outline-danger btn-sm ml-auto\"\r\n            (click)=\"closeReview()\"\r\n        >\r\n            <i class=\"fas fa-times\" style=\"cursor:pointer;\"></i>\r\n        </button>\r\n        <h6 class=\"display-4\">Write a review</h6>\r\n        <!-- R E V I E W F O R M -->\r\n        <form\r\n            [formGroup]=\"reviewForm\"\r\n            (ngSubmit)=\"submitReview()\"\r\n            class=\"animated fadeInDown\"\r\n        >\r\n            <!-- T E M P L A T E  -->\r\n            <ng-template #t let-i=\"index\" let-v=\"value\">\r\n                <button\r\n                    type=\"button\"\r\n                    class=\"btn btn-sm btn{{ i < v ? 'Pink' : '-default' }}\"\r\n                    style=\"border-radius: 10px; transition: all 0.1s;\"\r\n                >\r\n                    {{ i < v ? \"&#9733;\" : \"&#9734;\" }}\r\n                </button>\r\n            </ng-template>\r\n            <!-- R A T I N G  -->\r\n            <div class=\"p-3\">\r\n                <rating\r\n                    [max]=\"5\"\r\n                    formControlName=\"rating\"\r\n                    [customTemplate]=\"t\"\r\n                    style=\"font-size: 20px;\"\r\n                ></rating>\r\n            </div>\r\n            <div class=\"input-group pb-3\">\r\n                <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    formControlName=\"title\"\r\n                    id=\"title\"\r\n                    placeholder=\"Review title\"\r\n                />\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <textarea\r\n                    class=\"form-control rounded-0\"\r\n                    formControlName=\"reviewText\"\r\n                    placeholder=\"Review text...\"\r\n                    rows=\"3\"\r\n                ></textarea>\r\n            </div>\r\n            <!-- S U B M I T  -->\r\n            <div class=\"p-2 ml-auto\">\r\n                <button\r\n                    class=\"btn btn-outline-success\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"!reviewForm.valid\"\r\n                >\r\n                    Submit\r\n                </button>\r\n            </div>\r\n        </form>\r\n        <hr />\r\n    </div>\r\n\r\n    <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/watchlists/watchlists.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/watchlists/watchlists.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back animated fadeIn\">\r\n    <app-navbar></app-navbar>\r\n    <div *ngIf=\"!writingWatchlist\">\r\n        <div class=\"text-right mr-5 mb-5 animated fadeIn\">\r\n            <button\r\n                type=\"button\"\r\n                class=\"btn btn-success\"\r\n                (click)=\"createWatchlist()\"\r\n            >\r\n                <i class=\"fas fa-plus p-1\"></i> Create new watchlist\r\n            </button>\r\n        </div>\r\n        <div class=\"container animated fadeInUp\">\r\n            <div class=\"box\" *ngFor=\"let watchlist of watchlists\">\r\n                <div class=\"boxContent\">\r\n                    <i class=\"fas fa-tv icon\"></i>\r\n                    <h1 class=\"title\">{{ watchlist.title }}</h1>\r\n                    <p class=\"desc\">\r\n                       <strong>{{ watchlist.author_id.username }}</strong>\r\n                        <br />\r\n                        <em>{{ watchlist.description }}</em>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- W A T C H L I S T  -->\r\n    <div\r\n        class=\"m-5 p-5 bg-light rounded animated fadeInUp\"\r\n        *ngIf=\"writingWatchlist\"\r\n    >\r\n        <button\r\n            class=\"btn btn-outline-danger btn-sm\"\r\n            style=\"float: right\"\r\n            (click)=\"closeWatchlist()\"\r\n        >\r\n            <i class=\"fas fa-times\" style=\"cursor:pointer;\"></i>\r\n        </button>\r\n        <h6 class=\"display-4\">Create new watchlist</h6>\r\n        <!-- R E V I E W F O R M -->\r\n        <form\r\n            [formGroup]=\"watchlistForm\"\r\n            (ngSubmit)=\"submitWatchlist()\"\r\n            class=\"animated fadeInDown\"\r\n        >\r\n            <div class=\"input-group pb-3\">\r\n                <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    formControlName=\"title\"\r\n                    id=\"title\"\r\n                    placeholder=\"Watchlist title\"\r\n                />\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <textarea\r\n                    class=\"form-control rounded-0\"\r\n                    formControlName=\"description\"\r\n                    placeholder=\"Watchlist description...\"\r\n                    rows=\"3\"\r\n                ></textarea>\r\n            </div>\r\n            <!-- S U B M I T  -->\r\n            <div class=\"p-2 ml-auto\">\r\n                <button\r\n                    class=\"btn btn-outline-success\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"!watchlistForm.valid\"\r\n                >\r\n                    Submit\r\n                </button>\r\n            </div>\r\n        </form>\r\n        <hr />\r\n    </div>\r\n\r\n    <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/welcome/welcome.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/welcome/welcome.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fluid-container\">\r\n\r\n\r\n    <div class=\"nav p-5 mb-5 animated fadeIn\">\r\n        <a [routerLink]=\"['/login']\" class=\"ml-auto m-5 pr-4 cool-link\" id=\"login\">LOGIN</a>\r\n        <a [routerLink]=\"['/register']\" class=\"m-5\" id=\"register\">REGISTER</a>\r\n    </div>\r\n\r\n    <!--     <div class=\"row pl-5 pt-5 m-0\">\r\n        <div class=\"col pt-5 mt-5\">\r\n           <img class=\"w-50 mt-5 pt-5 noselect animated pulse\" src=\"../../../assets/img/logo.png\" alt=\"The Moviest \">\r\n        </div>\r\n    </div> -->\r\n    <video playsinline autoplay muted loop id=\"background\">\r\n        <source src=\"../../../assets/bg.mp4\" type=\"video/mp4\">\r\n    </video>\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
















var routes = [
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
    { path: "search", component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
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
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
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
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'the-moviest';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/components/welcome/welcome.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/rating */ "./node_modules/ngx-bootstrap/rating/fesm5/ngx-bootstrap-rating.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
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





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
    return AppModule;
}());



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
var Token = /** @class */ (function () {
    function Token() {
    }
    Token.parse = function (token) {
        var payload;
        var data;
        data = token.split(".")[1];
        data = window.atob(data);
        payload = JSON.parse(data);
        return payload;
    };
    Token.save = function (token) {
        window.localStorage['the-moviest'] = token;
    };
    Token.get = function () {
        return window.localStorage['the-moviest'];
    };
    Token.remove = function () {
        window.localStorage.removeItem('the-moviest');
    };
    return Token;
}());



/***/ }),

/***/ "./src/app/components/details/details.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/details/details.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailsComponent = /** @class */ (function () {
    function DetailsComponent() {
    }
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/components/details/details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/discover/discover.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/discover/discover.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\r\n    background-image: url('13.jpg');\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    position: relative;\r\n    height: 100%;\r\n    overflow: auto;\r\n    font-family: \"Montserrat\", sans-serif;\r\n    font-size: 30px;\r\n    padding-bottom: 155px;\r\n    min-height: 100vh;\r\n    min-width: 100vw;\r\n    margin: 0;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    box-sizing: border-box;\r\n    padding: 20px;\r\n    width: 100%;\r\n}\r\n\r\ni {\r\n    position: relative;\r\n    top: 40%;\r\n    color: whitesmoke;\r\n}\r\n\r\ni:hover {\r\n    cursor: pointer;\r\n    color: rgb(72, 121, 255);\r\n    text-shadow: 0px 0px 25px #9a6bf3;\r\n    transition: all 0.1s ease-in;\r\n}\r\n\r\nh1 {\r\n    font-style: italic;\r\n}\r\n\r\nh1 > img {\r\n    width: 90px;\r\n    height: 90px;\r\n    padding: 10px;\r\n}\r\n\r\n.bg {\r\n    background-color: rgba(143, 106, 132, 0.075);\r\n}\r\n\r\n.box {\r\n    flex: 1;\r\n    overflow: hidden;\r\n    transition: 0.5s;\r\n    margin: 0 2%;\r\n    height: 450px;\r\n    border-radius: 10px;\r\n    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);\r\n    line-height: 0;\r\n}\r\n\r\n.box > a > img {\r\n    width: 200%;\r\n    height: calc(100% - 10vh);\r\n    -o-object-fit: cover;\r\n    object-fit: cover;\r\n    transition: 0.5s;\r\n}\r\n\r\n.box > a > span {\r\n    font-size: 17px;\r\n    padding-top: 20px;\r\n    display: block;\r\n    text-align: center;\r\n    height: 10vh;\r\n    line-height: 1.5;\r\n    color: white;\r\n    background-color: rgba(95, 73, 197, 0.404);\r\n}\r\n\r\n.box:hover {\r\n    flex: 1 1 30%;\r\n}\r\n\r\n.box:hover > a > img {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaXNjb3Zlci9kaXNjb3Zlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQXNEO0lBQ3RELDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0lBQ2QscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsaUNBQWlDO0lBSWpDLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLE9BQU87SUFDUCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rpc2NvdmVyL2Rpc2NvdmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnLzEzLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTU1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuaTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDcyLCAxMjEsIDI1NSk7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAyNXB4ICM5YTZiZjM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW47XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbjtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5oMSA+IGltZyB7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0MywgMTA2LCAxMzIsIDAuMDc1KTtcclxufVxyXG5cclxuLmJveCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBtYXJnaW46IDAgMiU7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMjBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4uYm94ID4gYSA+IGltZyB7XHJcbiAgICB3aWR0aDogMjAwJTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTB2aCk7XHJcbiAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLmJveCA+IGEgPiBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NSwgNzMsIDE5NywgMC40MDQpO1xyXG59XHJcblxyXG4uYm94OmhvdmVyIHtcclxuICAgIGZsZXg6IDEgMSAzMCU7XHJcbn1cclxuXHJcbi5ib3g6aG92ZXIgPiBhID4gaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tv.service */ "./src/app/services/tv.service.ts");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var DiscoverComponent = /** @class */ (function () {
    function DiscoverComponent(tvService, movieService) {
        this.tvService = tvService;
        this.movieService = movieService;
        this.moviePage = 0;
        this.tvPage = 0;
    }
    DiscoverComponent.prototype.ngOnInit = function () {
        var _this = this;
        // simulate 2 requests - TV & movie service
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(this.movieService.moviesInTheathers(), this.tvService.discoverTV()).subscribe(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), resMovie = _b[0], resTv = _b[1];
            _this.movies = _this.posterMovie(resMovie);
            _this.tv = _this.posterTv(resTv);
            _this.parseMovie(0);
            _this.parseTv(0);
        });
    };
    DiscoverComponent.prototype.posterTv = function (tv) {
        var newTv = tv.results;
        newTv.poster_path = tv.results.map(function (tvs) {
            return (tvs.poster_path =
                "https://image.tmdb.org/t/p/original" + tvs.poster_path);
        });
        return newTv;
    };
    DiscoverComponent.prototype.posterMovie = function (movie) {
        var newMovie = movie.results;
        newMovie.poster_path = movie.results.map(function (movies) {
            return (movies.poster_path =
                "https://image.tmdb.org/t/p/original" + movies.poster_path);
        });
        return newMovie;
    };
    DiscoverComponent.prototype.parseTv = function (num) {
        if (this.tvPage === 0 && num === -4) {
            this.tvPage = 16;
        }
        else {
            this.tvPage = (this.tvPage + num) % 20;
        }
        this.tvDisplay = this.tv.slice(this.tvPage, this.tvPage + 4);
    };
    DiscoverComponent.prototype.parseMovie = function (num) {
        if (this.moviePage === 0 && num === -4) {
            this.moviePage = 16;
        }
        else {
            this.moviePage = (this.moviePage + num) % 20;
        }
        this.moviesDisplay = this.movies.slice(this.moviePage, this.moviePage + 4);
    };
    DiscoverComponent.ctorParameters = function () { return [
        { type: _services_tv_service__WEBPACK_IMPORTED_MODULE_2__["TvService"] },
        { type: _services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"] }
    ]; };
    DiscoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-discover",
            template: __webpack_require__(/*! raw-loader!./discover.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/discover/discover.component.html"),
            styles: [__webpack_require__(/*! ./discover.component.css */ "./src/app/components/discover/discover.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tv_service__WEBPACK_IMPORTED_MODULE_2__["TvService"],
            _services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"]])
    ], DiscoverComponent);
    return DiscoverComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n    background: #0000003a;\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    display: inline-block;\r\n    height: 145px;\r\n    min-width: 100%;\r\n    overflow: auto;\r\n    padding: 40px;\r\n    padding-top: 30px;\r\n    position: absolute;\r\n    bottom: 0;\r\n    font-family: \"Montserrat\", sans-serif;\r\n    font-size: 30px;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    color: white;\r\n    z-index: -100px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDAzYTtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDE0NXB4O1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB6LWluZGV4OiAtMTAwcHg7XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-footer",
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\r\n    background-image: url('13.jpg');\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    position: relative;\r\n    height: 100%;\r\n    overflow: auto;\r\n    font-family: \"Montserrat\", sans-serif;\r\n    font-size: 30px;\r\n    text-transform: uppercase;\r\n    padding-bottom: 155px;\r\n    min-height: 100vh;\r\n    min-width: 100vw;\r\n}\r\n\r\napp-footer {\r\n    width: 100%;\r\n}\r\n\r\n.title {\r\n    font-size: 60px;\r\n    font-weight: bold;\r\n    color: white;\r\n    letter-spacing: 15px;\r\n    font-family: \"Montserrat\", sans-serif;\r\n    border-bottom: 10px solid #06285a;\r\n}\r\n\r\n.titleRight {\r\n    font-size: 60px;\r\n    font-weight: bold;\r\n    color: white;\r\n    letter-spacing: 15px;\r\n    text-align: right;\r\n    font-family: \"Montserrat\", sans-serif;\r\n    border-bottom: 10px solid #e63e65;\r\n}\r\n\r\n/* ////////////////////////////////////// */\r\n\r\nslide {\r\n    background: black;\r\n}\r\n\r\nimg {\r\n    opacity: 0.5;\r\n    filter: alpha(opacity=50);\r\n}\r\n\r\nimg:hover {\r\n    opacity: 0.8;\r\n    filter: alpha(opacity=80);\r\n    transition: 0.5s all;\r\n}\r\n\r\nh3 {\r\n    font-weight: bold;\r\n    font-size: 60px;\r\n    text-shadow: 1px 1px 15px #000000;\r\n    font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\nh3 a:hover {\r\n    cursor: pointer;\r\n}\r\n\r\nh5 {\r\n    font-weight: bold;\r\n    letter-spacing: 4px;\r\n    font-size: 23px;\r\n}\r\n\r\n.lead {\r\n    font-size: 13px;\r\n    text-transform: none;\r\n    font-style: italic;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.card {\r\n    background: rgba(255, 255, 255, 0.7);\r\n    border-top-left-radius: 50px;\r\n    border-bottom-right-radius: 50px;\r\n    border-bottom-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n    margin: 15px;\r\n}\r\n\r\n.card-body {\r\n    font-size: 12px;\r\n}\r\n\r\n/* ////////////////////////////////////// */\r\n\r\n.blocks {\r\n    position: relative;\r\n    justify-items: center;\r\n    display: flex;\r\n    border-radius: 100px;\r\n    width: 100%;\r\n}\r\n\r\n.blocks .block {\r\n    position: relative;\r\n    align-self: center;\r\n    display: block;\r\n    width: 270px;\r\n    height: 270px;\r\n    margin: 30px;\r\n    -webkit-transform: perspective(600px) rotateY(-30deg);\r\n    transform: perspective(600px) rotateY(-30deg);\r\n    transition: -webkit-transform 0.3s;\r\n    transition: transform 0.3s;\r\n    transition: transform 0.3s, -webkit-transform 0.3s;\r\n}\r\n\r\n.blocks .block img {\r\n    height: auto;\r\n    max-width: 100%;\r\n}\r\n\r\n.blocks .block .overlay {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 2;\r\n    color: white;\r\n    font-weight: bold;\r\n    font-size: 30px;\r\n    letter-spacing: 2px;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    opacity: 0;\r\n    transition: opacity 0.3s ease;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n}\r\n\r\n.blocks .block .overlay img {\r\n    width: auto;\r\n    max-width: 50%;\r\n}\r\n\r\n.blocks .block.hover,\r\n.blocks .block:hover {\r\n    color: white;\r\n    font-weight: bold;\r\n    font-size: 30px;\r\n    letter-spacing: 2px;\r\n    -webkit-transform: rotateY(0);\r\n    transform: rotateY(0);\r\n    cursor: pointer;\r\n}\r\n\r\n.blocks .block.hover .overlay,\r\n.blocks .block:hover .overlay {\r\n    color: white;\r\n    font-weight: bold;\r\n    font-size: 30px;\r\n    letter-spacing: 2px;\r\n    opacity: 1;\r\n}\r\n\r\n/* //////////////////////////////////////////////////////// */\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.button-text {\r\n    font-size: 1rem;\r\n    line-height: 1.5;\r\n}\r\n\r\nbutton {\r\n    position: relative;\r\n    top: 0px;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    outline: none;\r\n    border: 0;\r\n    text-decoration: none;\r\n    background: transparent;\r\n    padding: 0;\r\n    font-size: inherit;\r\n    font-family: inherit;\r\n}\r\n\r\nbutton.learn-more {\r\n    width: 12rem;\r\n    height: auto;\r\n}\r\n\r\nbutton.learn-more .circle {\r\n    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\r\n    position: relative;\r\n    margin: 0;\r\n    width: 3rem;\r\n    height: 3rem;\r\n    background: #e63e65;\r\n    border-radius: 1.625rem;\r\n}\r\n\r\nbutton.learn-more .circle .icon {\r\n    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n    background: #fff;\r\n}\r\n\r\nbutton.learn-more .circle .icon.arrow {\r\n    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\r\n    left: 0.625rem;\r\n    width: 1.125rem;\r\n    height: 0.125rem;\r\n    background: none;\r\n}\r\n\r\nbutton.learn-more .circle .icon.arrow::before {\r\n    position: absolute;\r\n    content: \"\";\r\n    top: -0.25rem;\r\n    right: 0.0625rem;\r\n    width: 0.625rem;\r\n    height: 0.625rem;\r\n    border-top: 0.125rem solid #fff;\r\n    border-right: 0.125rem solid #fff;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}\r\n\r\nbutton.learn-more .button-text {\r\n    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    padding: 0.75rem 0;\r\n    margin: 0 0 0 1.85rem;\r\n    color: #282936;\r\n    font-weight: 700;\r\n    line-height: 1.6;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\n\r\nbutton:hover .circle {\r\n    width: 100%;\r\n}\r\n\r\nbutton:hover .circle .icon.arrow {\r\n    background: #fff;\r\n    -webkit-transform: translate(1rem, 0);\r\n    transform: translate(1rem, 0);\r\n}\r\n\r\nbutton:hover .button-text {\r\n    color: #fff;\r\n}\r\n\r\n/* ////////////////////////////////////// */\r\n\r\n.c-preview {\r\n    background: #000;\r\n    /* FF3.6-15 */\r\n    /* Chrome10-25,Safari5.1-6 */\r\n    background: linear-gradient(\r\n        135deg,\r\n        #000000 0%,\r\n        #000000 25%,\r\n        #1e539e 50%,\r\n        #ff3083 75%,\r\n        #7800a8 100%\r\n    );\r\n    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n    background-size: 400% 400%;\r\n    background-repeat: no-repeat;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    transition: 0.5s all;\r\n    border-top-left-radius: 50px;\r\n    border-top-right-radius: 10px;\r\n}\r\n\r\n.c-preview__img {\r\n    z-index: 1;\r\n    opacity: 0.8;\r\n    mix-blend-mode: screen;\r\n    border-top-left-radius: 50px;\r\n    border-top-right-radius: 10px;\r\n}\r\n\r\n.c-preview:hover {\r\n    background-position: 100% 100%;\r\n    border-top-left-radius: 50px;\r\n    border-top-right-radius: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUFzRDtJQUN0RCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztJQUNkLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLHFDQUFxQztJQUNyQyxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLHFDQUFxQztJQUNyQyxpQ0FBaUM7QUFDckM7O0FBRUEsMkNBQTJDOztBQUUzQztJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQywrQkFBK0I7SUFDL0IsNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBLDJDQUEyQzs7QUFFM0M7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsV0FBVztBQUNmOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1oscURBQXFEO0lBQ3JELDZDQUE2QztJQUM3QyxrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLGtEQUFrRDtBQUN0RDs7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLHVDQUF1QztBQUMzQzs7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUNBOztJQUVJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBQ0E7O0lBRUksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQSw2REFBNkQ7O0FBRTdEO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUNBOztJQUVJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxxREFBcUQ7SUFDckQsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxxREFBcUQ7SUFDckQsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLHFEQUFxRDtJQUNyRCxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiwrQkFBK0I7SUFDL0IsaUNBQWlDO0lBQ2pDLGdDQUFnQztJQUNoQyx3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSxxREFBcUQ7SUFDckQsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIscUNBQXFDO0lBQ3JDLDZCQUE2QjtBQUNqQzs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFFQSwyQ0FBMkM7O0FBRTNDO0lBQ0ksZ0JBQWdCO0lBRWhCLGFBQWE7SUFFYiw0QkFBNEI7SUFDNUI7Ozs7Ozs7S0FBaUs7SUFDaksscURBQXFEO0lBQ3JELDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQzs7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnLzEzLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1NXB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xyXG59XHJcblxyXG5hcHAtZm9vdGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgIzA2Mjg1YTtcclxufVxyXG5cclxuLnRpdGxlUmlnaHQge1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMTVweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZTYzZTY1O1xyXG59XHJcblxyXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xyXG5cclxuc2xpZGUge1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NTApO1xyXG59XHJcblxyXG5pbWc6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTgwKTtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDE1cHggIzAwMDAwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaDMgYTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmg1IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxufVxyXG5cclxuLmxlYWQge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xyXG5cclxuLmJsb2NrcyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYmxvY2tzIC5ibG9jayB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIGhlaWdodDogMjcwcHg7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNjAwcHgpIHJvdGF0ZVkoLTMwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNjAwcHgpIHJvdGF0ZVkoLTMwZGVnKTtcclxuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjNzO1xyXG59XHJcbi5ibG9ja3MgLmJsb2NrIGltZyB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLmJsb2NrcyAuYmxvY2sgLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbn1cclxuLmJsb2NrcyAuYmxvY2sgLm92ZXJsYXkgaW1nIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA1MCU7XHJcbn1cclxuLmJsb2NrcyAuYmxvY2suaG92ZXIsXHJcbi5ibG9ja3MgLmJsb2NrOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDApO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDApO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5ibG9ja3MgLmJsb2NrLmhvdmVyIC5vdmVybGF5LFxyXG4uYmxvY2tzIC5ibG9jazpob3ZlciAub3ZlcmxheSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xyXG5cclxuKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbio6OmJlZm9yZSxcclxuKjo6YWZ0ZXIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmJ1dHRvbi10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxufVxyXG5idXR0b24ubGVhcm4tbW9yZSB7XHJcbiAgICB3aWR0aDogMTJyZW07XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuYnV0dG9uLmxlYXJuLW1vcmUgLmNpcmNsZSB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40NXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuMDc2LCAxKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2U2M2U2NTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuNjI1cmVtO1xyXG59XHJcbmJ1dHRvbi5sZWFybi1tb3JlIC5jaXJjbGUgLmljb24ge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNDVzIGN1YmljLWJlemllcigwLjY1LCAwLCAwLjA3NiwgMSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbmJ1dHRvbi5sZWFybi1tb3JlIC5jaXJjbGUgLmljb24uYXJyb3cge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNDVzIGN1YmljLWJlemllcigwLjY1LCAwLCAwLjA3NiwgMSk7XHJcbiAgICBsZWZ0OiAwLjYyNXJlbTtcclxuICAgIHdpZHRoOiAxLjEyNXJlbTtcclxuICAgIGhlaWdodDogMC4xMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcbmJ1dHRvbi5sZWFybi1tb3JlIC5jaXJjbGUgLmljb24uYXJyb3c6OmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgdG9wOiAtMC4yNXJlbTtcclxuICAgIHJpZ2h0OiAwLjA2MjVyZW07XHJcbiAgICB3aWR0aDogMC42MjVyZW07XHJcbiAgICBoZWlnaHQ6IDAuNjI1cmVtO1xyXG4gICAgYm9yZGVyLXRvcDogMC4xMjVyZW0gc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci1yaWdodDogMC4xMjVyZW0gc29saWQgI2ZmZjtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcbmJ1dHRvbi5sZWFybi1tb3JlIC5idXR0b24tdGV4dCB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40NXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuMDc2LCAxKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMDtcclxuICAgIG1hcmdpbjogMCAwIDAgMS44NXJlbTtcclxuICAgIGNvbG9yOiAjMjgyOTM2O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbmJ1dHRvbjpob3ZlciAuY2lyY2xlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbmJ1dHRvbjpob3ZlciAuY2lyY2xlIC5pY29uLmFycm93IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDFyZW0sIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXJlbSwgMCk7XHJcbn1cclxuYnV0dG9uOmhvdmVyIC5idXR0b24tdGV4dCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cclxuXHJcbi5jLXByZXZpZXcge1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIC00NWRlZyxcclxuICAgICAgICAjMDAwMDAwIDAlLFxyXG4gICAgICAgICMwMDAwMDAgMjUlLFxyXG4gICAgICAgICMxZTUzOWUgNTAlLFxyXG4gICAgICAgICNmZjMwODMgNzUlLFxyXG4gICAgICAgICM3ODAwYTggMTAwJVxyXG4gICAgKTtcclxuICAgIC8qIEZGMy42LTE1ICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAtNDVkZWcsXHJcbiAgICAgICAgIzAwMDAwMCAwJSxcclxuICAgICAgICAjMDAwMDAwIDI1JSxcclxuICAgICAgICAjMWU1MzllIDUwJSxcclxuICAgICAgICAjZmYzMDgzIDc1JSxcclxuICAgICAgICAjNzgwMGE4IDEwMCVcclxuICAgICk7XHJcbiAgICAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIDEzNWRlZyxcclxuICAgICAgICAjMDAwMDAwIDAlLFxyXG4gICAgICAgICMwMDAwMDAgMjUlLFxyXG4gICAgICAgICMxZTUzOWUgNTAlLFxyXG4gICAgICAgICNmZjMwODMgNzUlLFxyXG4gICAgICAgICM3ODAwYTggMTAwJVxyXG4gICAgKTtcclxuICAgIC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxufVxyXG4uYy1wcmV2aWV3X19pbWcge1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5jLXByZXZpZXc6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDAlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var src_app_services_tv_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tv.service */ "./src/app/services/tv.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(movieService, tvService, router) {
        this.movieService = movieService;
        this.tvService = tvService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.weeklyTrendingMovies().subscribe(function (res) {
            _this.movies = res;
        }, function (err) { return console.error(err); }, function () {
            _this.parseMovies(_this.movies);
        });
        this.tvService.weeklyTrendingTv().subscribe(function (res) {
            _this.tv = res;
        }, function (err) { return console.error(err); }, function () {
            _this.parseTv(_this.tv);
        });
    };
    HomeComponent.prototype.parseMovies = function (movies) {
        var results = movies.results;
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
    };
    HomeComponent.prototype.getBackdrop = function (movie) {
        movie.poster = "https://image.tmdb.org/t/p/w1280" + movie.backdrop_path;
        return movie;
    };
    HomeComponent.prototype.getPoster = function (movie) {
        movie.overview = this.getOverview(movie);
        movie.poster =
            "https://image.tmdb.org/t/p/original" + movie.poster_path;
        return movie;
    };
    HomeComponent.prototype.getOverview = function (movie) {
        var re = /(.+\w+)\. /g;
        var overview = movie.overview.split(re);
        if (movie.title) {
            if (movie.title.length + movie.overview.length > 200) {
                var diff = 200 - movie.title.length;
                movie.overview = movie.overview.substring(0, diff) + "...";
            }
        }
        else if (movie.name) {
            if (movie.name.length + movie.overview.length > 200) {
                var diff = 200 - movie.name.length;
                movie.overview = movie.overview.substring(0, diff) + "...";
            }
        }
        return movie.overview;
    };
    HomeComponent.prototype.parseTv = function (tv) {
        var results = tv.results;
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
    };
    HomeComponent.prototype.goToMovie = function (id) {
        this.router.navigate(["movie", id]);
    };
    HomeComponent.prototype.goToTv = function (id) {
        this.router.navigate(["tv", id]);
    };
    HomeComponent.ctorParameters = function () { return [
        { type: src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] },
        { type: src_app_services_tv_service__WEBPACK_IMPORTED_MODULE_3__["TvService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
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
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\r\n    background-image: linear-gradient(to bottom, #65398648, #062c6d88),\r\n        url('6.jpg');\r\n    background-image: fixed;\r\n    background-position: center center;\r\n    background-size: cover;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    min-height: 100vh;\r\n    min-width: 100vw;\r\n}\r\n\r\n.registration-form {\r\n    width: 400px;\r\n    position: absolute;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n    transform: translate(-50%, 0%);\r\n    top: 15%;\r\n    background: transparent;\r\n}\r\n\r\n.registration-form header {\r\n    position: relative;\r\n    z-index: 4;\r\n    background: white;\r\n    padding: 20px 40px;\r\n    border-radius: 15px 15px 0 0;\r\n}\r\n\r\n.registration-form header h1 {\r\n    font-weight: 900;\r\n    letter-spacing: 1.5px;\r\n    color: #333;\r\n    font-size: 23px;\r\n    text-transform: uppercase;\r\n    margin: 0;\r\n}\r\n\r\n.registration-form header p {\r\n    word-spacing: 0px;\r\n    color: #9facb6;\r\n    font-size: 17px;\r\n    margin: 0;\r\n    margin-top: 5px;\r\n}\r\n\r\n.registration-form form {\r\n    position: relative;\r\n}\r\n\r\n.registration-form .input-section {\r\n    width: 100%;\r\n    position: absolute;\r\n    display: flex;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0);\r\n    transform: translate(-50%, 0);\r\n    height: 75px;\r\n    border-radius: 0 0 15px 15px;\r\n    overflow: hidden;\r\n    z-index: 2;\r\n    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.2);\r\n    transition: all 0.2s ease-in;\r\n}\r\n\r\n.registration-form .input-section.folded {\r\n    width: 95%;\r\n    margin-top: 10px;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0);\r\n    transform: translate(-50%, 0);\r\n    z-index: 1;\r\n}\r\n\r\n.registration-form .input-section.folded input {\r\n    background-color: #e9e2c0;\r\n}\r\n\r\n.registration-form .input-section.folded span {\r\n    background-color: #e9e2c0;\r\n}\r\n\r\n.registration-form .input-section.folded + .folded {\r\n    width: 90%;\r\n    margin-top: 20px;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0);\r\n    transform: translate(-50%, 0);\r\n    z-index: 0;\r\n}\r\n\r\n.registration-form .input-section.folded + .folded input {\r\n    background-color: #e1bcef;\r\n}\r\n\r\n.registration-form .input-section.folded + .folded span {\r\n    background-color: #e1bcef;\r\n}\r\n\r\n.registration-form .input-section.fold-up {\r\n    margin-top: -75px;\r\n}\r\n\r\n.registration-form form input {\r\n    background: white;\r\n    color: #8f8fd6;\r\n    width: 80%;\r\n    border: 0;\r\n    padding: 20px 40px;\r\n    margin: 0;\r\n}\r\n\r\n.registration-form form input:focus {\r\n    outline: none;\r\n}\r\n\r\n.registration-form form input::-webkit-input-placeholder {\r\n    color: #8f8fd6;\r\n    font-weight: 100;\r\n}\r\n\r\n.registration-form form input::-ms-input-placeholder {\r\n    color: #8f8fd6;\r\n    font-weight: 100;\r\n}\r\n\r\n.registration-form form input::-moz-placeholder {\r\n    color: #8f8fd6;\r\n    font-weight: 100;\r\n}\r\n\r\n.registration-form form input::placeholder {\r\n    color: #8f8fd6;\r\n    font-weight: 100;\r\n}\r\n\r\n.animated-button {\r\n    width: 20%;\r\n    background-color: #d4d4ff;\r\n}\r\n\r\n.animated-button span {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    line-height: 75px;\r\n    text-align: center;\r\n    height: 75px;\r\n    transition: all 0.2s ease-in;\r\n}\r\n\r\n.animated-button span i {\r\n    font-size: 25px;\r\n    color: #9999f8;\r\n}\r\n\r\n.animated-button .next-button {\r\n    background: transparent;\r\n    color: #9999f8;\r\n    font-weight: 100;\r\n    width: 100%;\r\n    border: 0;\r\n}\r\n\r\n.next {\r\n    margin-top: -75px;\r\n}\r\n\r\n.success {\r\n    width: 100%;\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0);\r\n    transform: translate(-50%, 0);\r\n    height: 75px;\r\n    border-radius: 0 0 15px 15px;\r\n    overflow: hidden;\r\n    z-index: 2;\r\n    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.2);\r\n    transition: all 0.2s ease-in;\r\n    background: limegreen;\r\n    margin-top: -75px;\r\n}\r\n\r\n.success p {\r\n    color: white;\r\n    font-weight: 900;\r\n    letter-spacing: 2px;\r\n    font-size: 18px;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.next-button:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7b0JBQ3VDO0lBQ3ZDLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxzQ0FBc0M7SUFDdEMsOEJBQThCO0lBQzlCLFFBQVE7SUFDUix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7SUFDZixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFNBQVM7SUFDVCxxQ0FBcUM7SUFDckMsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDViw0Q0FBNEM7SUFDNUMsNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QscUNBQXFDO0lBQ3JDLDZCQUE2QjtJQUM3QixVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxxQ0FBcUM7SUFDckMsNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsVUFBVTtJQUNWLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBS0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFIQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDRCQUE0QjtBQUNoQzs7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QscUNBQXFDO0lBQ3JDLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsNENBQTRDO0lBQzVDLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2sge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzY1Mzk4NjQ4LCAjMDYyYzZkODgpLFxyXG4gICAgICAgIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvNi5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbn1cclxuXHJcbi5yZWdpc3RyYXRpb24tZm9ybSB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxuICAgIHRvcDogMTUlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnJlZ2lzdHJhdGlvbi1mb3JtIGhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA0O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xyXG59XHJcbi5yZWdpc3RyYXRpb24tZm9ybSBoZWFkZXIgaDEge1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4ucmVnaXN0cmF0aW9uLWZvcm0gaGVhZGVyIHAge1xyXG4gICAgd29yZC1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogIzlmYWNiNjtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4ucmVnaXN0cmF0aW9uLWZvcm0gZm9ybSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnJlZ2lzdHJhdGlvbi1mb3JtIC5pbnB1dC1zZWN0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcclxufVxyXG4ucmVnaXN0cmF0aW9uLWZvcm0gLmlucHV0LXNlY3Rpb24uZm9sZGVkIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4ucmVnaXN0cmF0aW9uLWZvcm0gLmlucHV0LXNlY3Rpb24uZm9sZGVkIGlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWUyYzA7XHJcbn1cclxuLnJlZ2lzdHJhdGlvbi1mb3JtIC5pbnB1dC1zZWN0aW9uLmZvbGRlZCBzcGFuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWUyYzA7XHJcbn1cclxuLnJlZ2lzdHJhdGlvbi1mb3JtIC5pbnB1dC1zZWN0aW9uLmZvbGRlZCArIC5mb2xkZWQge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XHJcbiAgICB6LWluZGV4OiAwO1xyXG59XHJcbi5yZWdpc3RyYXRpb24tZm9ybSAuaW5wdXQtc2VjdGlvbi5mb2xkZWQgKyAuZm9sZGVkIGlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWJjZWY7XHJcbn1cclxuLnJlZ2lzdHJhdGlvbi1mb3JtIC5pbnB1dC1zZWN0aW9uLmZvbGRlZCArIC5mb2xkZWQgc3BhbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFiY2VmO1xyXG59XHJcbi5yZWdpc3RyYXRpb24tZm9ybSAuaW5wdXQtc2VjdGlvbi5mb2xkLXVwIHtcclxuICAgIG1hcmdpbi10b3A6IC03NXB4O1xyXG59XHJcbi5yZWdpc3RyYXRpb24tZm9ybSBmb3JtIGlucHV0IHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6ICM4ZjhmZDY7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5yZWdpc3RyYXRpb24tZm9ybSBmb3JtIGlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLnJlZ2lzdHJhdGlvbi1mb3JtIGZvcm0gaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM4ZjhmZDY7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcbi5yZWdpc3RyYXRpb24tZm9ybSBmb3JtIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzhmOGZkNjtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuLnJlZ2lzdHJhdGlvbi1mb3JtIGZvcm0gaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzhmOGZkNjtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuLnJlZ2lzdHJhdGlvbi1mb3JtIGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjOGY4ZmQ2O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuLmFuaW1hdGVkLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRmZjtcclxufVxyXG4uYW5pbWF0ZWQtYnV0dG9uIHNwYW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNzVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XHJcbn1cclxuLmFuaW1hdGVkLWJ1dHRvbiBzcGFuIGkge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6ICM5OTk5Zjg7XHJcbn1cclxuLmFuaW1hdGVkLWJ1dHRvbiAubmV4dC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogIzk5OTlmODtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLm5leHQge1xyXG4gICAgbWFyZ2luLXRvcDogLTc1cHg7XHJcbn1cclxuXHJcbi5zdWNjZXNzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW1lZ3JlZW47XHJcbiAgICBtYXJnaW4tdG9wOiAtNzVweDtcclxufVxyXG4uc3VjY2VzcyBwIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uZXh0LWJ1dHRvbjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, userService) {
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
    LoginComponent.prototype.ngOnInit = function () {
        // * Manipulating CSS classes with jQuery
        jquery__WEBPACK_IMPORTED_MODULE_4__(".next-button.username").click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_4__(".username-section").addClass("fold-up");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".password-section").removeClass("folded");
        });
        jquery__WEBPACK_IMPORTED_MODULE_4__(".next-button.password").click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_4__(".repeat-password-section").addClass("fold-up");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".success").css("marginTop", 0);
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var value = this.loginForm.value;
        this.userService.login(value).subscribe();
        this.loginForm.reset;
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/movie/movie.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/movie/movie.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\r\n    background-image: url('14.jpg');\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    position: relative;\r\n    height: 100%;\r\n    overflow: auto;\r\n    font-family: \"Montserrat\", sans-serif;\r\n    font-size: 30px;\r\n    padding-bottom: 155px;\r\n    min-height: 100vh;\r\n    min-width: 100vw;\r\n}\r\n\r\n.container {\r\n    display: grid;\r\n    grid-template-rows: 1fr;\r\n    padding-bottom: 70px;\r\n}\r\n\r\nh3 {\r\n    font-size: 0.7em;\r\n}\r\n\r\nimg {\r\n    width: 300px;\r\n    -webkit-filter: drop-shadow(1px 1px 3px #a6a6a6);\r\n    filter: drop-shadow(1px 1px 3px #a6a6a6);\r\n}\r\n\r\n.btnPink {\r\n    border-radius: 10px;\r\n    background: linear-gradient(\r\n            to left,\r\n            rgba(190, 117, 174, 0.795) 30%,\r\n            rgba(133, 124, 219, 0.795) 100%\r\n        )\r\n        left bottom rgba(255, 255, 255, 0) no-repeat;\r\n    transition: 0.5s all;\r\n    padding: 7px;\r\n    color: white;\r\n}\r\n\r\n.btnPink:hover {\r\n    background: none;\r\n    border: 1px solid palevioletred;\r\n    border-radius: 10px;\r\n    color: palevioletred;\r\n    transition: 0.5s all;\r\n}\r\n\r\n/* ----- Product Section ----- */\r\n\r\n.product {\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr;\r\n    margin: auto;\r\n    padding: 1em 0em;\r\n    padding-right: 1em;\r\n    min-width: 400px;\r\n    background-color: rgba(255, 255, 255, 0.7);\r\n    border-radius: 5px;\r\n    margin-left: 100px;\r\n    margin-right: 100px;\r\n}\r\n\r\n/* ----- Photo Section ----- */\r\n\r\n.product__photo {\r\n    position: relative;\r\n}\r\n\r\n.photo-container {\r\n    position: absolute;\r\n    left: -2em;\r\n    display: grid;\r\n    grid-template-rows: 1fr;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 6px;\r\n}\r\n\r\n.photo-main img {\r\n    position: absolute;\r\n    -webkit-filter: saturate(150%) contrast(120%) hue-rotate(10deg)\r\n        drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));\r\n    filter: saturate(150%) contrast(120%) hue-rotate(10deg)\r\n        drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));\r\n}\r\n\r\n/* ----- Informations Section ----- */\r\n\r\n.product__info {\r\n    padding: 5px;\r\n}\r\n\r\n.title h1 {\r\n    padding-bottom: 10px;\r\n    color: #4c4c4c;\r\n    font-size: 25px;\r\n}\r\n\r\n.title span {\r\n    font-size: 0.6em;\r\n}\r\n\r\n.price {\r\n    font-weight: bold;\r\n    margin: 10px;\r\n    line-height: 1.6em;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.price span {\r\n    font-size: 2em;\r\n    padding-bottom: 2px;\r\n    background: linear-gradient(\r\n            to left,\r\n            rgba(170, 84, 151, 1) 30%,\r\n            rgba(77, 60, 221, 1) 100%\r\n        )\r\n        left bottom rgba(255, 255, 255, 0) no-repeat;\r\n    background-size: 100% 12px;\r\n}\r\n\r\n.description {\r\n    clear: left;\r\n    margin: 2em 0;\r\n}\r\n\r\n.description p {\r\n    margin-bottom: 1em;\r\n    font-size: 14px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS9tb3ZpZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQXNEO0lBQ3RELDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0lBQ2QscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdEQUFnRDtJQUNoRCx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkI7Ozs7O29EQUtnRDtJQUNoRCxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0FBQ3hCOztBQUVBLGdDQUFnQzs7QUFDaEM7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUEsOEJBQThCOztBQUM5QjtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQjtxREFDaUQ7SUFDakQ7cURBQ2lEO0FBQ3JEOztBQUVBLHFDQUFxQzs7QUFDckM7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQjs7Ozs7b0RBS2dEO0lBQ2hELDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vdmllL21vdmllLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnLzE0LmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTU1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDcwcHg7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDFweCAzcHggI2E2YTZhNik7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDFweCAxcHggM3B4ICNhNmE2YTYpO1xyXG59XHJcblxyXG4uYnRuUGluayB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICB0byBsZWZ0LFxyXG4gICAgICAgICAgICByZ2JhKDE5MCwgMTE3LCAxNzQsIDAuNzk1KSAzMCUsXHJcbiAgICAgICAgICAgIHJnYmEoMTMzLCAxMjQsIDIxOSwgMC43OTUpIDEwMCVcclxuICAgICAgICApXHJcbiAgICAgICAgbGVmdCBib3R0b20gcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSBuby1yZXBlYXQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0blBpbms6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHBhbGV2aW9sZXRyZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6IHBhbGV2aW9sZXRyZWQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxufVxyXG5cclxuLyogLS0tLS0gUHJvZHVjdCBTZWN0aW9uIC0tLS0tICovXHJcbi5wcm9kdWN0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxZW0gMGVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xyXG4gICAgbWluLXdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi8qIC0tLS0tIFBob3RvIFNlY3Rpb24gLS0tLS0gKi9cclxuLnByb2R1Y3RfX3Bob3RvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnBob3RvLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtMmVtO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcbi5waG90by1tYWluIGltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogc2F0dXJhdGUoMTUwJSkgY29udHJhc3QoMTIwJSkgaHVlLXJvdGF0ZSgxMGRlZylcclxuICAgICAgICBkcm9wLXNoYWRvdygxcHggMjBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSk7XHJcbiAgICBmaWx0ZXI6IHNhdHVyYXRlKDE1MCUpIGNvbnRyYXN0KDEyMCUpIGh1ZS1yb3RhdGUoMTBkZWcpXHJcbiAgICAgICAgZHJvcC1zaGFkb3coMXB4IDIwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMykpO1xyXG59XHJcblxyXG4vKiAtLS0tLSBJbmZvcm1hdGlvbnMgU2VjdGlvbiAtLS0tLSAqL1xyXG4ucHJvZHVjdF9faW5mbyB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi50aXRsZSBoMSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGNvbG9yOiAjNGM0YzRjO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbi50aXRsZSBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMC42ZW07XHJcbn1cclxuXHJcbi5wcmljZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuLnByaWNlIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICB0byBsZWZ0LFxyXG4gICAgICAgICAgICByZ2JhKDE3MCwgODQsIDE1MSwgMSkgMzAlLFxyXG4gICAgICAgICAgICByZ2JhKDc3LCA2MCwgMjIxLCAxKSAxMDAlXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGxlZnQgYm90dG9tIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEycHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICBjbGVhcjogbGVmdDtcclxuICAgIG1hcmdpbjogMmVtIDA7XHJcbn1cclxuLmRlc2NyaXB0aW9uIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_review_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/review.service */ "./src/app/services/review.service.ts");






var MovieComponent = /** @class */ (function () {
    function MovieComponent(movieService, reviewService, route, fb) {
        this.movieService = movieService;
        this.reviewService = reviewService;
        this.route = route;
        this.fb = fb;
        this.writingReview = false;
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
    }
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get movieId from url
        this.movieId = this.route.snapshot.url[1].path;
        this.movie = { genres: [] };
        this.movieService.getMovieById(this.movieId).subscribe(function (res) {
            _this.movie = res;
        }, function (err) { return console.error(err); }, function () {
            _this.parseMovie(_this.movie);
        });
        this.reviewForm.reset;
        this.writingReview = false;
    };
    MovieComponent.prototype.parseMovie = function (movie) {
        movie.backdrop_path =
            "https://image.tmdb.org/t/p/original" + movie.backdrop_path;
        movie.poster_path =
            "https://image.tmdb.org/t/p/w500" + movie.poster_path;
        return movie;
    };
    MovieComponent.prototype.writeReview = function () {
        this.writingReview = true;
    };
    MovieComponent.prototype.closeReview = function () {
        this.writingReview = false;
    };
    MovieComponent.prototype.submitReview = function () {
        var review = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.reviewForm.value, { movie: {
                movieId: this.movieId,
                movieTitle: this.movie.original_title
            } });
        this.reviewService.createReview(review).subscribe();
        this.reviewForm.reset();
        this.writingReview = false;
    };
    MovieComponent.prototype.addToWatchlist = function () {
        // TODO: router navigate to profile with user id ?? OR open div with users watchlists as a form ?
        // * save movie id, title, poster path to local storage ??
    };
    MovieComponent.ctorParameters = function () { return [
        { type: src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] },
        { type: src_app_services_review_service__WEBPACK_IMPORTED_MODULE_5__["ReviewService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    MovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-movie",
            template: __webpack_require__(/*! raw-loader!./movie.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/movie/movie.component.html"),
            styles: [__webpack_require__(/*! ./movie.component.css */ "./src/app/components/movie/movie.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"],
            src_app_services_review_service__WEBPACK_IMPORTED_MODULE_5__["ReviewService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], MovieComponent);
    return MovieComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    z-index: 1500;\r\n}\r\n\r\nli {\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    font-family: \"Montserrat\", sans-serif;\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n}\r\n\r\nli a {\r\n    padding: 20px;\r\n    color: white;\r\n    font-weight: bold;\r\n    letter-spacing: 5px;\r\n    font-size: 12px;\r\n}\r\n\r\nul {\r\n    visibility: hidden;\r\n}\r\n\r\nul > * {\r\n    visibility: visible;\r\n}\r\n\r\nul > * {\r\n    transition: opacity 150ms linear 100ms, -webkit-transform 150ms ease-in-out 100ms;\r\n    transition: opacity 150ms linear 100ms, transform 150ms ease-in-out 100ms;\r\n    transition: opacity 150ms linear 100ms, transform 150ms ease-in-out 100ms, -webkit-transform 150ms ease-in-out 100ms;\r\n}\r\n\r\nul:hover > * {\r\n    opacity: 0.4;\r\n    -webkit-transform: scale(0.9);\r\n            transform: scale(0.9);\r\n    -webkit-filter: blur(1px);\r\n            filter: blur(1px);\r\n}\r\n\r\nul > *:hover {\r\n    letter-spacing: 7px;\r\n    opacity: 1;\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n    transition-delay: 0ms, 0ms;\r\n    -webkit-filter: blur(0px);\r\n            filter: blur(0px);\r\n}\r\n\r\n.dropbtn {\r\n    background: none;\r\n    border: none;\r\n}\r\n\r\n.dropdown {\r\n    position: relative;\r\n    left: -20px;\r\n    font-size: 10px;\r\n}\r\n\r\n.dropdown-content {\r\n    border-radius: 15px;\r\n    display: none;\r\n    position: absolute;\r\n    font-size: 10px;\r\n    background-color: #f1f1f16b;\r\n    min-width: 100px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\r\n    z-index: 1;\r\n}\r\n\r\n.dropdown-content a {\r\n    color: black;\r\n    font-size: 10px;\r\n    padding: 7px 7px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: block;\r\n    border: 2px solid rgba(255, 0, 0, 0);\r\n}\r\n\r\n#logout:hover {\r\n    border-radius: 20px;\r\n    border: 2px solid rgb(199, 19, 64);\r\n    color: rgb(199, 19, 64);\r\n    font-weight: bold;\r\n    transition: all 400ms;\r\n    cursor: pointer;\r\n}\r\n\r\n.dropdown-content a:hover {\r\n    background-color: #ddd;\r\n    font-weight: bold;\r\n    color: mediumslateblue;\r\n    transition: all 400ms;\r\n    border: 2px solid rgba(255, 0, 0, 0);\r\n    border-radius: 20px;\r\n}\r\n\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n    border-radius: 20px;\r\n}\r\n\r\nnav {\r\n    -webkit-animation-delay: 10ms;\r\n            animation-delay: 10ms;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUZBQXlFO0lBQXpFLHlFQUF5RTtJQUF6RSxvSEFBeUU7QUFDN0U7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQix5QkFBaUI7WUFBakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDViw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQix5QkFBaUI7WUFBakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQiwrQ0FBK0M7SUFDL0MsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLG9DQUFvQztJQUNwQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICB6LWluZGV4OiAxNTAwO1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxubGkgYSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG51bCB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbnVsID4gKiB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG51bCA+ICoge1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBsaW5lYXIgMTAwbXMsIHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dCAxMDBtcztcclxufVxyXG5cclxudWw6aG92ZXIgPiAqIHtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgIGZpbHRlcjogYmx1cigxcHgpO1xyXG59XHJcblxyXG51bCA+ICo6aG92ZXIge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDdweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwbXMsIDBtcztcclxuICAgIGZpbHRlcjogYmx1cigwcHgpO1xyXG59XHJcblxyXG4uZHJvcGJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZHJvcGRvd24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTIwcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTZiO1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA3cHggN3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMCwgMCwgMCk7XHJcbn1cclxuXHJcbiNsb2dvdXQ6aG92ZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxOTksIDE5LCA2NCk7XHJcbiAgICBjb2xvcjogcmdiKDE5OSwgMTksIDY0KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDQwMG1zO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IG1lZGl1bXNsYXRlYmx1ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCA0MDBtcztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAwLCAwLCAwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDEwbXM7XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(userService) {
        this.userService = userService;
        this.navbarOpen = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.getProfileData();
        this.id = this.userService.user.value._id;
    };
    NavbarComponent.prototype.getCoverLink = function () {
        return this.userService.user.value.avatarURL;
    };
    NavbarComponent.prototype.getProfileData = function () {
        var _this = this;
        this.userService
            .getProfileData(this.userService.user.value._id)
            .subscribe(function (res) {
            _this.avatarURL = res.user.avatarURL;
        }, function (err) { return console.error(err); });
    };
    NavbarComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    NavbarComponent.prototype.logOut = function () {
        return this.userService.logOut();
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-navbar",
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, router, activatedRoute) {
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userId = this.userService.user.value._id;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.favorites = { movie: "", tvShow: "", actor: "", genre: "" };
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id) {
                _this.getProfileData(params.id).subscribe(function (res) {
                    _this.user = res.user;
                }, function (err) { return console.error(err); }, function () {
                    _this.fillProfile(_this.user);
                });
            }
            else {
                _this.getProfileData(_this.userId).subscribe(function (res) {
                    _this.user = res.user;
                }, function (err) { return console.error(err); }, function () {
                    _this.fillProfile(_this.user);
                });
            }
        });
    };
    ProfileComponent.prototype.fillProfile = function (user) {
        this.username = user.username;
        this.bio = user.bio;
        this.avatarURL = user.avatarURL;
        this.currentlyWatching = user.currentlyWatching;
        this.favorites = user.favorites;
    };
    ProfileComponent.prototype.getProfileData = function (id) {
        return this.userService.getProfileData(id);
    };
    ProfileComponent.prototype.getWatchlists = function () {
        this.router.navigate(["watchlists", this.userId]);
    };
    ProfileComponent.prototype.getReviews = function () {
        this.router.navigate(["reviews", this.userId]);
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
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
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\r\n    background-image: linear-gradient(to bottom, #65398648, #062c6d88),\r\n        url('2.jpg');\r\n    background-image: fixed;\r\n    background-position: center center;\r\n    background-size: cover;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    min-height: 100vh;\r\n    min-width: 100vw;\r\n}\r\n\r\n.registration-form {\r\n    width: 400px;\r\n    position: absolute;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n    transform: translate(-50%, 0%);\r\n    top: 15%;\r\n    background: transparent;\r\n}\r\n\r\n.registration-form header {\r\n    position: relative;\r\n    z-index: 4;\r\n    background: white;\r\n    padding: 20px 40px;\r\n    border-radius: 15px 15px 0 0;\r\n}\r\n\r\n.registration-form header h1 {\r\n    font-weight: 900;\r\n    letter-spacing: 1.5px;\r\n    color: #333;\r\n    font-size: 23px;\r\n    text-transform: uppercase;\r\n    margin: 0;\r\n}\r\n\r\n.registration-form header p {\r\n    word-spacing: 0px;\r\n    color: #9facb6;\r\n    font-size: 17px;\r\n    margin: 0;\r\n    margin-top: 5px;\r\n}\r\n\r\n.registration-form form {\r\n    position: relative;\r\n}\r\n\r\n.registration-form .input-section {\r\n    width: 100%;\r\n    position: absolute;\r\n    display: flex;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0);\r\n    transform: translate(-50%, 0);\r\n    height: 75px;\r\n    border-radius: 0 0 15px 15px;\r\n    overflow: hidden;\r\n    z-index: 2;\r\n    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.2);\r\n    transition: all 0.2s ease-in;\r\n}\r\n\r\n.registration-form .input-section.folded {\r\n    width: 95%;\r\n    margin-top: 10px;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0);\r\n    transform: translate(-50%, 0);\r\n    z-index: 1;\r\n}\r\n\r\n.registration-form .input-section.folded input {\r\n    background-color: #e9e2c0;\r\n}\r\n\r\n.registration-form .input-section.folded span {\r\n    background-color: #e9e2c0;\r\n}\r\n\r\n.registration-form .input-section.folded + .folded {\r\n    width: 90%;\r\n    margin-top: 20px;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0);\r\n    transform: translate(-50%, 0);\r\n    z-index: 0;\r\n}\r\n\r\n.registration-form .input-section.folded + .folded input {\r\n    background-color: #e1bcef;\r\n}\r\n\r\n.registration-form .input-section.folded + .folded span {\r\n    background-color: #e1bcef;\r\n}\r\n\r\n.registration-form .input-section.fold-up {\r\n    margin-top: -75px;\r\n}\r\n\r\n.registration-form form input {\r\n    background: white;\r\n    color: #8f8fd6;\r\n    width: 80%;\r\n    border: 0;\r\n    padding: 20px 40px;\r\n    margin: 0;\r\n}\r\n\r\n.registration-form form input:focus {\r\n    outline: none;\r\n}\r\n\r\n.registration-form form input::-webkit-input-placeholder {\r\n    color: #8f8fd6;\r\n    font-weight: 100;\r\n}\r\n\r\n.registration-form form input::-ms-input-placeholder {\r\n    color: #8f8fd6;\r\n    font-weight: 100;\r\n}\r\n\r\n.registration-form form input::-moz-placeholder {\r\n    color: #8f8fd6;\r\n    font-weight: 100;\r\n}\r\n\r\n.registration-form form input::placeholder {\r\n    color: #8f8fd6;\r\n    font-weight: 100;\r\n}\r\n\r\n.animated-button {\r\n    width: 20%;\r\n    background-color: #d4d4ff;\r\n}\r\n\r\n.animated-button span {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    line-height: 75px;\r\n    text-align: center;\r\n    height: 75px;\r\n    transition: all 0.2s ease-in;\r\n}\r\n\r\n.animated-button span i {\r\n    font-size: 25px;\r\n    color: #9999f8;\r\n}\r\n\r\n.animated-button .next-button {\r\n    background: transparent;\r\n    color: #9999f8;\r\n    font-weight: 100;\r\n    width: 100%;\r\n    border: 0;\r\n}\r\n\r\n.next {\r\n    margin-top: -75px;\r\n}\r\n\r\n.success {\r\n    width: 100%;\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0);\r\n    transform: translate(-50%, 0);\r\n    height: 75px;\r\n    border-radius: 0 0 15px 15px;\r\n    overflow: hidden;\r\n    z-index: 2;\r\n    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.2);\r\n    transition: all 0.2s ease-in;\r\n    background: limegreen;\r\n    margin-top: -75px;\r\n}\r\n\r\n.success p {\r\n    color: white;\r\n    font-weight: 900;\r\n    letter-spacing: 2px;\r\n    font-size: 18px;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.next-button:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7b0JBQ3VDO0lBQ3ZDLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxzQ0FBc0M7SUFDdEMsOEJBQThCO0lBQzlCLFFBQVE7SUFDUix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7SUFDZixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFNBQVM7SUFDVCxxQ0FBcUM7SUFDckMsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDViw0Q0FBNEM7SUFDNUMsNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QscUNBQXFDO0lBQ3JDLDZCQUE2QjtJQUM3QixVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxxQ0FBcUM7SUFDckMsNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsVUFBVTtJQUNWLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBS0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFIQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDRCQUE0QjtBQUNoQzs7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QscUNBQXFDO0lBQ3JDLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsNENBQTRDO0lBQzVDLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2sge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzY1Mzk4NjQ4LCAjMDYyYzZkODgpLFxyXG4gICAgICAgIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvMi5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbn1cclxuXHJcbi5yZWdpc3RyYXRpb24tZm9ybSB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxuICAgIHRvcDogMTUlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnJlZ2lzdHJhdGlvbi1mb3JtIGhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA0O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xyXG59XHJcbi5yZWdpc3RyYXRpb24tZm9ybSBoZWFkZXIgaDEge1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4ucmVnaXN0cmF0aW9uLWZvcm0gaGVhZGVyIHAge1xyXG4gICAgd29yZC1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogIzlmYWNiNjtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4ucmVnaXN0cmF0aW9uLWZvcm0gZm9ybSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnJlZ2lzdHJhdGlvbi1mb3JtIC5pbnB1dC1zZWN0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcclxufVxyXG4ucmVnaXN0cmF0aW9uLWZvcm0gLmlucHV0LXNlY3Rpb24uZm9sZGVkIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4ucmVnaXN0cmF0aW9uLWZvcm0gLmlucHV0LXNlY3Rpb24uZm9sZGVkIGlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWUyYzA7XHJcbn1cclxuLnJlZ2lzdHJhdGlvbi1mb3JtIC5pbnB1dC1zZWN0aW9uLmZvbGRlZCBzcGFuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWUyYzA7XHJcbn1cclxuLnJlZ2lzdHJhdGlvbi1mb3JtIC5pbnB1dC1zZWN0aW9uLmZvbGRlZCArIC5mb2xkZWQge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XHJcbiAgICB6LWluZGV4OiAwO1xyXG59XHJcbi5yZWdpc3RyYXRpb24tZm9ybSAuaW5wdXQtc2VjdGlvbi5mb2xkZWQgKyAuZm9sZGVkIGlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWJjZWY7XHJcbn1cclxuLnJlZ2lzdHJhdGlvbi1mb3JtIC5pbnB1dC1zZWN0aW9uLmZvbGRlZCArIC5mb2xkZWQgc3BhbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFiY2VmO1xyXG59XHJcbi5yZWdpc3RyYXRpb24tZm9ybSAuaW5wdXQtc2VjdGlvbi5mb2xkLXVwIHtcclxuICAgIG1hcmdpbi10b3A6IC03NXB4O1xyXG59XHJcbi5yZWdpc3RyYXRpb24tZm9ybSBmb3JtIGlucHV0IHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6ICM4ZjhmZDY7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5yZWdpc3RyYXRpb24tZm9ybSBmb3JtIGlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLnJlZ2lzdHJhdGlvbi1mb3JtIGZvcm0gaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM4ZjhmZDY7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcbi5yZWdpc3RyYXRpb24tZm9ybSBmb3JtIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzhmOGZkNjtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuLnJlZ2lzdHJhdGlvbi1mb3JtIGZvcm0gaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzhmOGZkNjtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuLnJlZ2lzdHJhdGlvbi1mb3JtIGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjOGY4ZmQ2O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuLmFuaW1hdGVkLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRmZjtcclxufVxyXG4uYW5pbWF0ZWQtYnV0dG9uIHNwYW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNzVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XHJcbn1cclxuLmFuaW1hdGVkLWJ1dHRvbiBzcGFuIGkge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6ICM5OTk5Zjg7XHJcbn1cclxuLmFuaW1hdGVkLWJ1dHRvbiAubmV4dC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogIzk5OTlmODtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLm5leHQge1xyXG4gICAgbWFyZ2luLXRvcDogLTc1cHg7XHJcbn1cclxuXHJcbi5zdWNjZXNzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW1lZ3JlZW47XHJcbiAgICBtYXJnaW4tdG9wOiAtNzVweDtcclxufVxyXG4uc3VjY2VzcyBwIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uZXh0LWJ1dHRvbjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, userService) {
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
    RegisterComponent.prototype.ngOnInit = function () {
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
    };
    RegisterComponent.prototype.onSubmit = function () {
        var value = this.registerForm.value;
        this.userService.register(value).subscribe();
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/reviews/reviews.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/reviews/reviews.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\r\n    background-image: url('14.jpg');\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    position: relative;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    font-family: \"Montserrat\", sans-serif;\r\n    font-size: 30px;\r\n    padding-bottom: 125px;\r\n    min-height: 100vh;\r\n    padding-bottom: 155px;\r\n    min-width: 100vw;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.container .box {\r\n    width: 250px;\r\n    border-radius: 10px;\r\n    background-color: white;\r\n    margin: 20px;\r\n    transition: 0.3s all ease-in-out;\r\n    position: relative;\r\n    box-shadow: 0px 0px 40px background;\r\n}\r\n\r\n.container .box .boxContent {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    padding: 15px;\r\n}\r\n\r\n.container .box .boxContent .icon {\r\n    color: #8293ff;\r\n    font-size: 48px;\r\n    padding: 15px;\r\n}\r\n\r\n.container .box .boxContent .title {\r\n    font-size: 24px;\r\n    color: #8293ff;\r\n    font-weight: bold;\r\n    padding: 10px;\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.movie {\r\n    font-size: 24px;\r\n    color: #8293ff;\r\n    font-weight: bold;\r\n    padding: 10px;\r\n    text-transform: none;\r\n}\r\n\r\n.container .box .boxContent .desc {\r\n    color: #8293ff;\r\n    font-size: 15px;\r\n    height: 20%;\r\n}\r\n\r\n.container .box:hover {\r\n    background: linear-gradient(130deg, #503bff 0%, #8293ff 100%);\r\n    box-shadow: none;\r\n}\r\n\r\n.container .box:hover .boxContent .title,\r\n.container .box:hover .boxContent .icon,\r\n.container .box:hover .boxContent .desc {\r\n    color: white;\r\n    transition: 1s all;\r\n}\r\n\r\n.container .box:hover .boxContent .movie {\r\n    color: rgb(0, 217, 255);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXdzL3Jldmlld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUFzRDtJQUN0RCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLG1DQUFtQztBQUN2Qzs7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksNkRBQTZEO0lBQzdELGdCQUFnQjtBQUNwQjs7QUFFQTs7O0lBR0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmV2aWV3cy9yZXZpZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnLzE0LmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMjVweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1NXB4O1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5ib3gge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggYmFja2dyb3VuZDtcclxufVxyXG4uY29udGFpbmVyIC5ib3ggLmJveENvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbi5jb250YWluZXIgLmJveCAuYm94Q29udGVudCAuaWNvbiB7XHJcbiAgICBjb2xvcjogIzgyOTNmZjtcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmJveCAuYm94Q29udGVudCAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICM4MjkzZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLm1vdmllIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjODI5M2ZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmJveCAuYm94Q29udGVudCAuZGVzYyB7XHJcbiAgICBjb2xvcjogIzgyOTNmZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGhlaWdodDogMjAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5ib3g6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzMGRlZywgIzUwM2JmZiAwJSwgIzgyOTNmZiAxMDAlKTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmJveDpob3ZlciAuYm94Q29udGVudCAudGl0bGUsXHJcbi5jb250YWluZXIgLmJveDpob3ZlciAuYm94Q29udGVudCAuaWNvbixcclxuLmNvbnRhaW5lciAuYm94OmhvdmVyIC5ib3hDb250ZW50IC5kZXNjIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IDFzIGFsbDtcclxufVxyXG5cclxuLmNvbnRhaW5lciAuYm94OmhvdmVyIC5ib3hDb250ZW50IC5tb3ZpZSB7XHJcbiAgICBjb2xvcjogcmdiKDAsIDIxNywgMjU1KTtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_review_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/review.service */ "./src/app/services/review.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");





var ReviewsComponent = /** @class */ (function () {
    function ReviewsComponent(userService, reviewService, activatedRoute) {
        var _this = this;
        this.userService = userService;
        this.reviewService = reviewService;
        this.activatedRoute = activatedRoute;
        // boolean for displaying "delete/update review"
        this.isOwner = false;
        var currentUserId = this.userService.user.value._id;
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id) {
                // if there is an id, find only reviews for that id
                _this.id = params.id;
                _this.isOwner = _this.id === currentUserId;
                _this.getReviewsByAuthor(_this.id);
            }
            else {
                // else show all reviews
                _this.getAllReviews();
            }
        });
    }
    ReviewsComponent.prototype.ngOnInit = function () { };
    ReviewsComponent.prototype.getReviewsByAuthor = function (id) {
        var _this = this;
        return this.reviewService.findReviewsByAuthor(id).subscribe(function (res) {
            _this.reviews = res.reviews;
        });
    };
    ReviewsComponent.prototype.getAllReviews = function () {
        var _this = this;
        return this.reviewService.findAllReviews().subscribe(function (res) {
            _this.reviews = res.reviews;
            console.log(_this.reviews);
        });
    };
    ReviewsComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: src_app_services_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
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
    return ReviewsComponent;
}());



/***/ }),

/***/ "./src/app/components/search-result/search-result.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/search-result/search-result.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\r\n    background-image: url('13.jpg');\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    position: relative;\r\n    height: 100%;\r\n    overflow: auto;\r\n    font-family: \"Montserrat\", sans-serif;\r\n    font-size: 30px;\r\n    padding-bottom: 155px;\r\n    min-height: 100vh;\r\n    min-width: 100vw;\r\n    margin: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtcmVzdWx0L3NlYXJjaC1yZXN1bHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUFzRDtJQUN0RCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztJQUNkLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtcmVzdWx0L3NlYXJjaC1yZXN1bHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvMTMuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNTVweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchResultComponent = /** @class */ (function () {
    // TODO: display movie,tv,reviews,watchlist search results
    function SearchResultComponent() {
    }
    SearchResultComponent.prototype.ngOnInit = function () { };
    SearchResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-search-result",
            template: __webpack_require__(/*! raw-loader!./search-result.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/search-result/search-result.component.html"),
            styles: [__webpack_require__(/*! ./search-result.component.css */ "./src/app/components/search-result/search-result.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchResultComponent);
    return SearchResultComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.back {\r\n    background-image: url('13.jpg');\r\n    background-size: cover;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100vh;\r\n    overflow: auto;\r\n    padding-bottom: 155px;\r\n    min-height: 100vh;\r\n    width: 100%;\r\n}\r\n\r\n.container {\r\n    width: 300px;\r\n    height: 50px;\r\n}\r\n\r\n.container .search {\r\n    position: absolute;\r\n    margin: auto;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 80px;\r\n    height: 80px;\r\n    background: crimson;\r\n    border-radius: 50%;\r\n    transition: all 1s;\r\n    z-index: 4;\r\n    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.container .search:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.container .search::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    margin: auto;\r\n    top: 22px;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 22px;\r\n    width: 12px;\r\n    height: 2px;\r\n    background: white;\r\n    -webkit-transform: rotate(45deg);\r\n            transform: rotate(45deg);\r\n    transition: all 0.5s;\r\n}\r\n\r\n.container .search::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    margin: auto;\r\n    top: -5px;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: -5px;\r\n    width: 25px;\r\n    height: 25px;\r\n    border-radius: 50%;\r\n    border: 2px solid white;\r\n    transition: all 0.5s;\r\n}\r\n\r\n.container input[type=\"text\"] {\r\n    font-family: \"Inconsolata\", monospace;\r\n    position: absolute;\r\n    margin: auto;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 50px;\r\n    height: 50px;\r\n    outline: none;\r\n    border: none;\r\n    background: crimson;\r\n    color: white;\r\n    text-shadow: 0 0 10px crimson;\r\n    padding: 0 80px 0 20px;\r\n    border-radius: 30px;\r\n    box-shadow: 0 0 25px 0 crimson, 0 20px 25px 0 rgba(0, 0, 0, 0.2);\r\n    transition: all 1s;\r\n    opacity: 0;\r\n    z-index: 5;\r\n    font-weight: bolder;\r\n    letter-spacing: 0.1em;\r\n}\r\n\r\n.container input[type=\"text\"]:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.container input[type=\"text\"]:focus {\r\n    width: 300px;\r\n    opacity: 1;\r\n    cursor: text;\r\n}\r\n\r\n.container input[type=\"text\"]:focus ~ .search {\r\n    right: -250px;\r\n    background: #151515;\r\n    z-index: 6;\r\n}\r\n\r\n.container input[type=\"text\"]:focus ~ .search::before {\r\n    top: 0;\r\n    left: 0;\r\n    width: 25px;\r\n}\r\n\r\n.container input[type=\"text\"]:focus ~ .search::after {\r\n    top: 0;\r\n    left: 0;\r\n    width: 25px;\r\n    height: 2px;\r\n    border: none;\r\n    background: white;\r\n    border-radius: 0%;\r\n    -webkit-transform: rotate(-45deg);\r\n            transform: rotate(-45deg);\r\n}\r\n\r\n.container input[type=\"text\"]::-webkit-input-placeholder {\r\n    color: white;\r\n    opacity: 0.5;\r\n    font-weight: bolder;\r\n}\r\n\r\n.container input[type=\"text\"]::-moz-placeholder {\r\n    color: white;\r\n    opacity: 0.5;\r\n    font-weight: bolder;\r\n}\r\n\r\n.container input[type=\"text\"]::-ms-input-placeholder {\r\n    color: white;\r\n    opacity: 0.5;\r\n    font-weight: bolder;\r\n}\r\n\r\n.container input[type=\"text\"]::placeholder {\r\n    color: white;\r\n    opacity: 0.5;\r\n    font-weight: bolder;\r\n}\r\n\r\n/* =============================================\r\n* RADIO BUTTONS\r\n=============================================== */\r\n\r\n#radios label {\r\n    cursor: pointer;\r\n    position: relative;\r\n    margin: auto;\r\n    width: 100px;\r\n}\r\n\r\n#radios label + label {\r\n    margin-left: 8px;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n    opacity: 0; /* hidden but still tabable */\r\n    position: absolute;\r\n    height: 20px;\r\n}\r\n\r\ninput[type=\"radio\"] + span {\r\n    color: #b3cefb;\r\n    border-radius: 100%;\r\n    padding: 15px;\r\n    transition: all 0.4s;\r\n    text-align: center;\r\n    -webkit-transition: all 0.4s;\r\n}\r\n\r\ninput[type=\"radio\"]:checked + span {\r\n    color: #d9e7fd;\r\n    background-color: crimson;\r\n    border-radius: 50%;\r\n    box-shadow: inset 0 0 50px rgba(194, 0, 39, 0.397),\r\n        /* inner white */ inset 20px 0 80px crimson,\r\n        /* inner left magenta short */ inset -20px 0 80px rgb(0, 119, 255),\r\n        /* inner right cyan short */ inset 20px 0 300px crimson,\r\n        /* inner left magenta broad */ inset -20px 0 300px rgb(0, 119, 255),\r\n        /* inner right cyan broad */ 0 0 50px rgb(221, 58, 85),\r\n        /* outer white */ -10px 0 80px crimson,\r\n        /* outer left magenta */ 10px 0 80px rgb(0, 0, 0); /* outer right cyan */\r\n}\r\n\r\ninput[type=\"radio\"]:focus + span {\r\n    color: #fff;\r\n}\r\n\r\n/* ================ TOOLTIPS ================= */\r\n\r\n#radios label:hover::before {\r\n    content: attr(for);\r\n    font-family: Roboto, -apple-system, sans-serif;\r\n    text-transform: capitalize;\r\n    font-size: 11px;\r\n    width: 100px;\r\n    position: absolute;\r\n    top: 170%;\r\n    left: 3px;\r\n    opacity: 0.75;\r\n    background-color: #323232;\r\n    color: #fff;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    display: block;\r\n    text-transform: uppercase;\r\n}\r\n\r\n#radios {\r\n    position: relative;\r\n    top: 100px;\r\n    width: 600px;\r\n}\r\n\r\nbutton {\r\n    font-family: \"Montserrat\", sans-serif;\r\n    font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLCtCQUFzRDtJQUN0RCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix5Q0FBeUM7QUFDN0M7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztJQUNULFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztJQUNULFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSxxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZ0VBQWdFO0lBQ2hFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7QUFDZjs7QUFDQTtJQUNJLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQ0FBeUI7WUFBekIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBSkE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFKQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUpBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O2lEQUVpRDs7QUFFakQ7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVSxFQUFFLDZCQUE2QjtJQUN6QyxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEI7Ozs7Ozs7eURBT3FELEVBQUUscUJBQXFCO0FBQ2hGOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBLGdEQUFnRDs7QUFFaEQ7SUFDSSxrQkFBa0I7SUFDbEIsOENBQThDO0lBQzlDLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULGFBQWE7SUFDYix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5iYWNrIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvMTMuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1NXB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLmNvbnRhaW5lciAuc2VhcmNoIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYmFja2dyb3VuZDogY3JpbXNvbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxcztcclxuICAgIHotaW5kZXg6IDQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMjVweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG4uY29udGFpbmVyIC5zZWFyY2g6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jb250YWluZXIgLnNlYXJjaDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6IDIycHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDIycHg7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxufVxyXG4uY29udGFpbmVyIC5zZWFyY2g6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6IC01cHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IC01cHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbn1cclxuLmNvbnRhaW5lciBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICBmb250LWZhbWlseTogXCJJbmNvbnNvbGF0YVwiLCBtb25vc3BhY2U7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBjcmltc29uO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IGNyaW1zb247XHJcbiAgICBwYWRkaW5nOiAwIDgwcHggMCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAyNXB4IDAgY3JpbXNvbiwgMCAyMHB4IDI1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbn1cclxuLmNvbnRhaW5lciBpbnB1dFt0eXBlPVwidGV4dFwiXTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNvbnRhaW5lciBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgY3Vyc29yOiB0ZXh0O1xyXG59XHJcbi5jb250YWluZXIgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMgfiAuc2VhcmNoIHtcclxuICAgIHJpZ2h0OiAtMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTUxNTE1O1xyXG4gICAgei1pbmRleDogNjtcclxufVxyXG4uY29udGFpbmVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzIH4gLnNlYXJjaDo6YmVmb3JlIHtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMjVweDtcclxufVxyXG4uY29udGFpbmVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzIH4gLnNlYXJjaDo6YWZ0ZXIge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG4uY29udGFpbmVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBSQURJTyBCVVRUT05TXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4jcmFkaW9zIGxhYmVsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuI3JhZGlvcyBsYWJlbCArIGxhYmVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICBvcGFjaXR5OiAwOyAvKiBoaWRkZW4gYnV0IHN0aWxsIHRhYmFibGUgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgc3BhbiB7XHJcbiAgICBjb2xvcjogI2IzY2VmYjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIHNwYW4ge1xyXG4gICAgY29sb3I6ICNkOWU3ZmQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDUwcHggcmdiYSgxOTQsIDAsIDM5LCAwLjM5NyksXHJcbiAgICAgICAgLyogaW5uZXIgd2hpdGUgKi8gaW5zZXQgMjBweCAwIDgwcHggY3JpbXNvbixcclxuICAgICAgICAvKiBpbm5lciBsZWZ0IG1hZ2VudGEgc2hvcnQgKi8gaW5zZXQgLTIwcHggMCA4MHB4IHJnYigwLCAxMTksIDI1NSksXHJcbiAgICAgICAgLyogaW5uZXIgcmlnaHQgY3lhbiBzaG9ydCAqLyBpbnNldCAyMHB4IDAgMzAwcHggY3JpbXNvbixcclxuICAgICAgICAvKiBpbm5lciBsZWZ0IG1hZ2VudGEgYnJvYWQgKi8gaW5zZXQgLTIwcHggMCAzMDBweCByZ2IoMCwgMTE5LCAyNTUpLFxyXG4gICAgICAgIC8qIGlubmVyIHJpZ2h0IGN5YW4gYnJvYWQgKi8gMCAwIDUwcHggcmdiKDIyMSwgNTgsIDg1KSxcclxuICAgICAgICAvKiBvdXRlciB3aGl0ZSAqLyAtMTBweCAwIDgwcHggY3JpbXNvbixcclxuICAgICAgICAvKiBvdXRlciBsZWZ0IG1hZ2VudGEgKi8gMTBweCAwIDgwcHggcmdiKDAsIDAsIDApOyAvKiBvdXRlciByaWdodCBjeWFuICovXHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpmb2N1cyArIHNwYW4ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT0gVE9PTFRJUFMgPT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbiNyYWRpb3MgbGFiZWw6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBhdHRyKGZvcik7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCAtYXBwbGUtc3lzdGVtLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE3MCU7XHJcbiAgICBsZWZ0OiAzcHg7XHJcbiAgICBvcGFjaXR5OiAwLjc1O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4jcmFkaW9zIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTAwcHg7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var _services_tv_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tv.service */ "./src/app/services/tv.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_review_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/review.service */ "./src/app/services/review.service.ts");
/* harmony import */ var src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/watchlist.service */ "./src/app/services/watchlist.service.ts");








var SearchComponent = /** @class */ (function () {
    function SearchComponent(fb, movieService, tvService, userService, reviewService, watchlistService) {
        this.fb = fb;
        this.movieService = movieService;
        this.tvService = tvService;
        this.userService = userService;
        this.reviewService = reviewService;
        this.watchlistService = watchlistService;
        this.searchForm = this.fb.group({
            search: this.fb.control([], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            type: this.fb.control([], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    SearchComponent.prototype.ngOnInit = function () { };
    SearchComponent.prototype.onSubmit = function () {
        var value = this.searchForm.value;
        switch (value.type) {
            case "watchlist":
                this.watchlistService
                    .findWatchlistsByName(value.search)
                    .subscribe();
                break;
            case "review":
                this.reviewService.findReviewByMovie(value.search).subscribe();
                break;
            case "profile":
                this.userService.findUserByUsername(value.search).subscribe();
                break;
            case "tvShow":
                this.tvService.searchByName(value.search).subscribe();
                break;
            case "movie":
                this.movieService.searchByName(value.search).subscribe();
                break;
        }
    };
    SearchComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"] },
        { type: _services_tv_service__WEBPACK_IMPORTED_MODULE_4__["TvService"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: src_app_services_review_service__WEBPACK_IMPORTED_MODULE_6__["ReviewService"] },
        { type: src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_7__["WatchlistService"] }
    ]; };
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
            src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_7__["WatchlistService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/settings.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/settings/settings.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\r\n    background-image: url('11.jpg');\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    position: relative;\r\n    overflow: auto;\r\n    height: 100%;\r\n    min-height: 100vh;\r\n    padding-bottom: 155px;\r\n    font-family: \"Montserrat\", sans-serif;\r\n    font-size: 30px;\r\n    width: 100%;\r\n}\r\n\r\np {\r\n    font-size: 15px;\r\n}\r\n\r\ninput {\r\n    padding: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQXNEO0lBQ3RELDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2sge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iZy8xMS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTU1cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(userService, fb) {
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
    SettingsComponent.prototype.ngOnInit = function () { };
    SettingsComponent.prototype.getProfileData = function () {
        var _this = this;
        this.userService
            .getProfileData(this.userService.user.value._id)
            .subscribe(function (res) {
            _this.currentProfile$ = res;
        }, function (err) { return console.error(err); }, function () { return _this.fillFormInitialValues(_this.currentProfile$); });
    };
    SettingsComponent.prototype.fillFormInitialValues = function (res) {
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
    };
    // * Submit functions
    SettingsComponent.prototype.updateUsername = function () {
        var value = this.usernameForm.value.username;
        this.userService.updateUsername(value).subscribe();
    };
    SettingsComponent.prototype.updatePassword = function () {
        var value = this.passwordForm.value.password;
        this.userService.updatePassword(value).subscribe();
        this.passwordForm.reset();
    };
    SettingsComponent.prototype.updateBio = function () {
        var value = this.bioForm.value.bio;
        this.userService.updateBio(value).subscribe();
    };
    SettingsComponent.prototype.updateCurrentlyWatching = function () {
        var value = this.currWatchingForm.value.currentlyWatching;
        this.userService.updateCurrentlyWatching(value).subscribe();
    };
    SettingsComponent.prototype.updateFavorites = function () {
        var favorites = this.favoritesForm.value;
        this.userService.updateFavorites(favorites).subscribe();
    };
    SettingsComponent.prototype.updateAvatar = function (id) {
        var _this = this;
        var avatarURL = "../../../assets/img/avatars/" + id + ".png";
        this.userService.updateAvatar(avatarURL).subscribe(function (res) {
            _this.avatarURL = res.user.avatarURL;
        }, function (err) { return console.error(err); });
    };
    SettingsComponent.prototype.shuffleAvatar = function () {
        // function assigns new avatar id, different than current one
        var currentId = parseInt(this.avatarURL.split("/")[6].split(".")[0]);
        var newId = this.randomInt();
        if (newId === currentId) {
            this.shuffleAvatar();
        }
        else {
            var id = newId < 10 ? "0" + newId.toString() : newId.toString();
            this.updateAvatar(id);
        }
    };
    SettingsComponent.prototype.randomInt = function () {
        // random Int between 1 and 34 (number of current avatars)
        return Math.floor(Math.random() * 34) + 1;
    };
    SettingsComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-settings",
            template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/components/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/tv/tv.component.css":
/*!************************************************!*\
  !*** ./src/app/components/tv/tv.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\r\n    background-image: url('14.jpg');\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    position: relative;\r\n    height: 100%;\r\n    overflow: auto;\r\n    font-family: \"Montserrat\", sans-serif;\r\n    font-size: 30px;\r\n    padding-bottom: 125px;\r\n    min-height: 100vh;\r\n    padding-bottom: 155px;\r\n    font-family: \"Montserrat\", sans-serif;\r\n    width: 100%;\r\n}\r\n\r\n.container {\r\n    display: grid;\r\n    grid-template-rows: 1fr;\r\n    padding-bottom: 70px;\r\n}\r\n\r\nh3 {\r\n    font-size: 0.7em;\r\n}\r\n\r\nimg {\r\n    max-width: 100%;\r\n    -webkit-filter: drop-shadow(1px 1px 3px #a6a6a6);\r\n    filter: drop-shadow(1px 1px 3px #a6a6a6);\r\n}\r\n\r\n.btnPink {\r\n    border-radius: 10px;\r\n    background: linear-gradient(\r\n            to left,\r\n            rgba(190, 117, 174, 0.795) 30%,\r\n            rgba(133, 124, 219, 0.795) 100%\r\n        )\r\n        left bottom rgba(255, 255, 255, 0) no-repeat;\r\n    transition: 0.5s all;\r\n    padding: 7px;\r\n    color: white;\r\n}\r\n\r\n.btnPink:hover {\r\n    background: none;\r\n    border: 1px solid palevioletred;\r\n    border-radius: 10px;\r\n    color: palevioletred;\r\n    transition: 0.5s all;\r\n}\r\n\r\n/* ----- Product Section ----- */\r\n\r\n.product {\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr;\r\n    margin: auto;\r\n    padding: 1em 0em;\r\n    padding-right: 1em;\r\n    min-width: 400px;\r\n    background-color: rgba(255, 255, 255, 0.7);\r\n    border-radius: 5px;\r\n    margin-left: 100px;\r\n    margin-right: 100px;\r\n}\r\n\r\n/* ----- Photo Section ----- */\r\n\r\n.product__photo {\r\n    position: relative;\r\n}\r\n\r\n.photo-container {\r\n    position: absolute;\r\n    left: -2em;\r\n    display: grid;\r\n    grid-template-rows: 1fr;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 6px;\r\n}\r\n\r\n.photo-main img {\r\n    position: absolute;\r\n    left: 0em;\r\n    max-width: 100%;\r\n    -webkit-filter: saturate(150%) contrast(120%) hue-rotate(10deg)\r\n        drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));\r\n    filter: saturate(150%) contrast(120%) hue-rotate(10deg)\r\n        drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));\r\n}\r\n\r\n/* ----- Informations Section ----- */\r\n\r\n.product__info {\r\n    padding: 0.8em 0;\r\n}\r\n\r\n.title h1 {\r\n    padding-bottom: 10px;\r\n    color: #4c4c4c;\r\n    font-size: 25px;\r\n}\r\n\r\n.title span {\r\n    font-size: 0.6em;\r\n}\r\n\r\n.price {\r\n    font-weight: bold;\r\n    margin: 10px;\r\n    line-height: 1.6em;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.price span {\r\n    font-size: 2em;\r\n    border-bottom: 12px solid palevioletred;\r\n}\r\n\r\n.description {\r\n    clear: left;\r\n    margin: 2em 0;\r\n}\r\n\r\n.description p {\r\n    margin-bottom: 1em;\r\n    font-size: 14px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90di90di5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQXNEO0lBQ3RELDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0lBQ2QscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixxQ0FBcUM7SUFDckMsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0RBQWdEO0lBQ2hELHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQjs7Ozs7b0RBS2dEO0lBQ2hELG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQkFBb0I7QUFDeEI7O0FBRUEsZ0NBQWdDOztBQUNoQztJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQSw4QkFBOEI7O0FBQzlCO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxlQUFlO0lBQ2Y7cURBQ2lEO0lBQ2pEO3FEQUNpRDtBQUNyRDs7QUFFQSxxQ0FBcUM7O0FBQ3JDO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksY0FBYztJQUNkLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3R2L3R2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnLzE0LmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTI1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3MHB4O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LXNpemU6IDAuN2VtO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDFweCAxcHggM3B4ICNhNmE2YTYpO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggMXB4IDNweCAjYTZhNmE2KTtcclxufVxyXG5cclxuLmJ0blBpbmsge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgdG8gbGVmdCxcclxuICAgICAgICAgICAgcmdiYSgxOTAsIDExNywgMTc0LCAwLjc5NSkgMzAlLFxyXG4gICAgICAgICAgICByZ2JhKDEzMywgMTI0LCAyMTksIDAuNzk1KSAxMDAlXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGxlZnQgYm90dG9tIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgbm8tcmVwZWF0O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG5QaW5rOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBwYWxldmlvbGV0cmVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiBwYWxldmlvbGV0cmVkO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbn1cclxuXHJcbi8qIC0tLS0tIFByb2R1Y3QgU2VjdGlvbiAtLS0tLSAqL1xyXG4ucHJvZHVjdCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMWVtIDBlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxuICAgIG1pbi13aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4vKiAtLS0tLSBQaG90byBTZWN0aW9uIC0tLS0tICovXHJcbi5wcm9kdWN0X19waG90byB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5waG90by1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTJlbTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4ucGhvdG8tbWFpbiBpbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMGVtO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IHNhdHVyYXRlKDE1MCUpIGNvbnRyYXN0KDEyMCUpIGh1ZS1yb3RhdGUoMTBkZWcpXHJcbiAgICAgICAgZHJvcC1zaGFkb3coMXB4IDIwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMykpO1xyXG4gICAgZmlsdGVyOiBzYXR1cmF0ZSgxNTAlKSBjb250cmFzdCgxMjAlKSBodWUtcm90YXRlKDEwZGVnKVxyXG4gICAgICAgIGRyb3Atc2hhZG93KDFweCAyMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpKTtcclxufVxyXG5cclxuLyogLS0tLS0gSW5mb3JtYXRpb25zIFNlY3Rpb24gLS0tLS0gKi9cclxuLnByb2R1Y3RfX2luZm8ge1xyXG4gICAgcGFkZGluZzogMC44ZW0gMDtcclxufVxyXG5cclxuLnRpdGxlIGgxIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6ICM0YzRjNGM7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuLnRpdGxlIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAwLjZlbTtcclxufVxyXG5cclxuLnByaWNlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG4ucHJpY2Ugc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDEycHggc29saWQgcGFsZXZpb2xldHJlZDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICAgIGNsZWFyOiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAyZW0gMDtcclxufVxyXG4uZGVzY3JpcHRpb24gcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tv.service */ "./src/app/services/tv.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_review_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/review.service */ "./src/app/services/review.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var TvComponent = /** @class */ (function () {
    function TvComponent(tvService, reviewService, route, fb) {
        this.tvService = tvService;
        this.reviewService = reviewService;
        this.route = route;
        this.fb = fb;
        this.writingReview = false;
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
    }
    TvComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get tvId from url
        this.tvId = this.route.snapshot.url[1].path;
        this.tv = { genres: [] };
        this.tvService.getTvById(this.tvId).subscribe(function (res) {
            _this.tv = res;
        }, function (err) { return console.error(err); }, function () {
            _this.parseTv(_this.tv);
        });
    };
    TvComponent.prototype.parseTv = function (tv) {
        tv.backdrop_path =
            "https://image.tmdb.org/t/p/original" + tv.backdrop_path;
        tv.poster_path = "https://image.tmdb.org/t/p/w500" + tv.poster_path;
        return tv;
    };
    TvComponent.prototype.writeReview = function () {
        this.writingReview = true;
    };
    TvComponent.prototype.closeReview = function () {
        this.writingReview = false;
    };
    TvComponent.prototype.submitReview = function () {
        var review = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.reviewForm.value, { movie: {
                movieId: this.tvId,
                movieTitle: this.tv.original_title
            } });
        this.reviewService.createReview(review).subscribe();
        this.reviewForm.reset();
        this.writingReview = false;
    };
    TvComponent.prototype.addToWatchlist = function () { };
    TvComponent.ctorParameters = function () { return [
        { type: src_app_services_tv_service__WEBPACK_IMPORTED_MODULE_2__["TvService"] },
        { type: src_app_services_review_service__WEBPACK_IMPORTED_MODULE_4__["ReviewService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
    ]; };
    TvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-tv",
            template: __webpack_require__(/*! raw-loader!./tv.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/tv/tv.component.html"),
            styles: [__webpack_require__(/*! ./tv.component.css */ "./src/app/components/tv/tv.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tv_service__WEBPACK_IMPORTED_MODULE_2__["TvService"],
            src_app_services_review_service__WEBPACK_IMPORTED_MODULE_4__["ReviewService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], TvComponent);
    return TvComponent;
}());



/***/ }),

/***/ "./src/app/components/watchlists/watchlists.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/watchlists/watchlists.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\r\n    background-image: url('14.jpg');\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    position: relative;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    font-family: \"Montserrat\", sans-serif;\r\n    font-size: 30px;\r\n    padding-bottom: 125px;\r\n    min-height: 100vh;\r\n    padding-bottom: 155px;\r\n    min-height: 100vh;\r\n    width: 100%;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.container .box {\r\n    width: 250px;\r\n    height: 250px;\r\n    border-radius: 10px;\r\n    background-color: white;\r\n    margin: 20px;\r\n    transition: 0.3s all ease-in-out;\r\n    position: relative;\r\n    box-shadow: 0px 0px 40px background;\r\n    /* Link */\r\n}\r\n\r\n.container .box .boxContent {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    padding: 15px;\r\n}\r\n\r\n.container .box .boxContent .icon {\r\n    color: #8293ff;\r\n    font-size: 48px;\r\n    padding: 15px;\r\n}\r\n\r\n.container .box .boxContent .title {\r\n    font-size: 24px;\r\n    color: #8293ff;\r\n    font-weight: bold;\r\n    padding: 10px;\r\n}\r\n\r\n.container .box .boxContent .desc {\r\n    color: #8293ff;\r\n    font-size: 15px;\r\n    height: 20%;\r\n}\r\n\r\n.container .box a {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.container .box:hover {\r\n    background: linear-gradient(130deg, #503bff 0%, #8293ff 100%);\r\n    box-shadow: none;\r\n}\r\n\r\n.container .box:hover .boxContent .title,\r\n.container .box:hover .boxContent .icon,\r\n.container .box:hover .boxContent .desc {\r\n    color: white;\r\n    transition: 1s all;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93YXRjaGxpc3RzL3dhdGNobGlzdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUFzRDtJQUN0RCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLFNBQVM7QUFDYjs7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLE1BQU07SUFDTixPQUFPO0FBQ1g7O0FBQ0E7SUFDSSw2REFBNkQ7SUFDN0QsZ0JBQWdCO0FBQ3BCOztBQUVBOzs7SUFHSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93YXRjaGxpc3RzL3dhdGNobGlzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvMTQuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEyNXB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTU1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmJveCB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggYmFja2dyb3VuZDtcclxuICAgIC8qIExpbmsgKi9cclxufVxyXG4uY29udGFpbmVyIC5ib3ggLmJveENvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbi5jb250YWluZXIgLmJveCAuYm94Q29udGVudCAuaWNvbiB7XHJcbiAgICBjb2xvcjogIzgyOTNmZjtcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLmNvbnRhaW5lciAuYm94IC5ib3hDb250ZW50IC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogIzgyOTNmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uY29udGFpbmVyIC5ib3ggLmJveENvbnRlbnQgLmRlc2Mge1xyXG4gICAgY29sb3I6ICM4MjkzZmY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxufVxyXG4uY29udGFpbmVyIC5ib3ggYSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuLmNvbnRhaW5lciAuYm94OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzBkZWcsICM1MDNiZmYgMCUsICM4MjkzZmYgMTAwJSk7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5ib3g6aG92ZXIgLmJveENvbnRlbnQgLnRpdGxlLFxyXG4uY29udGFpbmVyIC5ib3g6aG92ZXIgLmJveENvbnRlbnQgLmljb24sXHJcbi5jb250YWluZXIgLmJveDpob3ZlciAuYm94Q29udGVudCAuZGVzYyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiAxcyBhbGw7XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/watchlist.service */ "./src/app/services/watchlist.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var WatchlistsComponent = /** @class */ (function () {
    function WatchlistsComponent(userService, watchlistService, activatedRoute, fb) {
        var _this = this;
        this.userService = userService;
        this.watchlistService = watchlistService;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.writingWatchlist = false;
        var currentUserId = this.userService.user.value._id;
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id) {
                _this.id = params.id;
                _this.isOwner = _this.id === currentUserId;
                _this.getWatchlists(_this.id);
            }
            else {
                _this.getAllWatchlists();
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
    WatchlistsComponent.prototype.ngOnInit = function () { };
    WatchlistsComponent.prototype.getWatchlists = function (id) {
        var _this = this;
        return this.watchlistService
            .findWatchlistsByAuthor(id)
            .subscribe(function (res) {
            _this.watchlists = res.watchlists;
        });
    };
    WatchlistsComponent.prototype.getAllWatchlists = function () {
        var _this = this;
        return this.watchlistService.findAllWatchlists().subscribe(function (res) {
            _this.watchlists = res.watchlists;
        });
    };
    WatchlistsComponent.prototype.createWatchlist = function () {
        this.writingWatchlist = true;
    };
    WatchlistsComponent.prototype.closeWatchlist = function () {
        this.writingWatchlist = false;
    };
    WatchlistsComponent.prototype.submitWatchlist = function () {
        var watchlist = this.watchlistForm.value;
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
    };
    WatchlistsComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_2__["WatchlistService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
    ]; };
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
    return WatchlistsComponent;
}());



/***/ }),

/***/ "./src/app/components/welcome/welcome.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#background {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    /*     max-width: 100%;\r\n    max-height: 100%;\r\n    min-width: 100vw;\r\n    background-position: right center;\r\n    background-size: cover;\r\n    animation: slideBg 10s infinite 1s;\r\n    background-image: url(\"../../../assets/img/bg/1.jpg\");   */\r\n    margin: 0 auto;\r\n    height: 100%;\r\n    width: 100%;\r\n    font-family: \"Montserrat\", sans-serif;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    top: 0;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    max-width: 100vw;\r\n    max-height: 100vh;\r\n    z-index: -1000;\r\n}\r\n\r\n@-webkit-keyframes slideBg {\r\n    0% {\r\n        background-image: url('1.jpg');\r\n    }\r\n    30% {\r\n        background-image: url('3.jpg');\r\n    }\r\n    60% {\r\n        background-image: url('4.jpg');\r\n    }\r\n    100% {\r\n        background-image: url('1.jpg');\r\n    }\r\n}\r\n\r\n@keyframes slideBg {\r\n    0% {\r\n        background-image: url('1.jpg');\r\n    }\r\n    30% {\r\n        background-image: url('3.jpg');\r\n    }\r\n    60% {\r\n        background-image: url('4.jpg');\r\n    }\r\n    100% {\r\n        background-image: url('1.jpg');\r\n    }\r\n}\r\n\r\n.fluid-container {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.nav {\r\n    padding-top: 50px;\r\n    padding-left: 60px;\r\n}\r\n\r\n#login {\r\n    padding: 10px;\r\n    font-weight: bold;\r\n    color: white;\r\n    letter-spacing: 5px;\r\n}\r\n\r\n#register {\r\n    border: 2px solid white;\r\n    border-radius: 50px;\r\n    padding: 10px;\r\n    font-weight: bold;\r\n    color: white;\r\n    font-family: \"Montserrat\", sans-serif;\r\n    letter-spacing: 5px;\r\n    margin-left: 70px;\r\n    box-shadow: 6px 6px 0px 0px rgba(230, 62, 66, 1);\r\n    -webkit-animation-name: slideBoxShadowIn;\r\n            animation-name: slideBoxShadowIn;\r\n    -webkit-animation-duration: 300ms;\r\n            animation-duration: 300ms;\r\n    -webkit-animation-timing-function: ease-out;\r\n            animation-timing-function: ease-out;\r\n}\r\n\r\n#register:hover {\r\n    background: rgba(230, 62, 66, 1);\r\n    -webkit-animation-name: slideBoxShadowOut;\r\n            animation-name: slideBoxShadowOut;\r\n    -webkit-animation-duration: 300ms;\r\n            animation-duration: 300ms;\r\n    font-family: \"Montserrat\", sans-serif;\r\n    -webkit-animation-timing-function: ease-in;\r\n            animation-timing-function: ease-in;\r\n    box-shadow: none;\r\n}\r\n\r\n@-webkit-keyframes slideBoxShadowOut {\r\n    0% {\r\n        background: rgba(230, 62, 66, 0);\r\n        box-shadow: 6px 6px 0px 0px rgba(230, 62, 66, 1);\r\n    }\r\n    50% {\r\n        background: rgba(230, 62, 66, 0.4);\r\n        box-shadow: 2px 2px 0px 0px rgba(230, 62, 66, 0.5);\r\n    }\r\n    100% {\r\n        background: rgba(230, 62, 66, 1);\r\n        box-shadow: none;\r\n    }\r\n}\r\n\r\n@keyframes slideBoxShadowOut {\r\n    0% {\r\n        background: rgba(230, 62, 66, 0);\r\n        box-shadow: 6px 6px 0px 0px rgba(230, 62, 66, 1);\r\n    }\r\n    50% {\r\n        background: rgba(230, 62, 66, 0.4);\r\n        box-shadow: 2px 2px 0px 0px rgba(230, 62, 66, 0.5);\r\n    }\r\n    100% {\r\n        background: rgba(230, 62, 66, 1);\r\n        box-shadow: none;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes slideBoxShadowIn {\r\n    0% {\r\n        box-shadow: none;\r\n    }\r\n    50% {\r\n        box-shadow: 2px 2px 0px 0px rgba(230, 62, 66, 0.5);\r\n    }\r\n    100% {\r\n        box-shadow: 6px 6px 0px 0px rgba(230, 62, 66, 1);\r\n    }\r\n}\r\n\r\n@keyframes slideBoxShadowIn {\r\n    0% {\r\n        box-shadow: none;\r\n    }\r\n    50% {\r\n        box-shadow: 2px 2px 0px 0px rgba(230, 62, 66, 0.5);\r\n    }\r\n    100% {\r\n        box-shadow: 6px 6px 0px 0px rgba(230, 62, 66, 1);\r\n    }\r\n}\r\n\r\na:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.cool-link {\r\n    display: inline-block;\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\n.cool-link::after {\r\n    content: \"\";\r\n    display: block;\r\n    width: 0;\r\n    height: 2px;\r\n    background: rgb(255, 255, 255);\r\n    transition: width 0.3s;\r\n}\r\n\r\n.cool-link:hover::after {\r\n    width: 100%;\r\n    transition: width 0.3s;\r\n}\r\n\r\n.noselect {\r\n    -webkit-touch-callout: none; /* iOS Safari */\r\n    -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\r\n    -moz-user-select: none; /* Firefox */\r\n    -ms-user-select: none; /* Internet Explorer/Edge */\r\n    user-select: none; /* Non-prefixed version, currently\r\n                                        supported by Chrome and Opera */\r\n}\r\n\r\nimg {\r\n    max-width: 600px;\r\n}\r\n\r\np.cool-link:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n#learnMore {\r\n    background-color: white;\r\n    border-radius: 20px;\r\n}\r\n\r\n#learnMore.lead {\r\n    border-radius: 25px;\r\n    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Q7Ozs7Ozs4REFNMEQ7SUFDMUQsY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gscUNBQXFDO0lBQ3JDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7UUFDSSw4QkFBcUQ7SUFDekQ7SUFDQTtRQUNJLDhCQUFxRDtJQUN6RDtJQUNBO1FBQ0ksOEJBQXFEO0lBQ3pEO0lBQ0E7UUFDSSw4QkFBcUQ7SUFDekQ7QUFDSjs7QUFiQTtJQUNJO1FBQ0ksOEJBQXFEO0lBQ3pEO0lBQ0E7UUFDSSw4QkFBcUQ7SUFDekQ7SUFDQTtRQUNJLDhCQUFxRDtJQUN6RDtJQUNBO1FBQ0ksOEJBQXFEO0lBQ3pEO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFHakIsZ0RBQWdEO0lBQ2hELHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QiwyQ0FBbUM7WUFBbkMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHlDQUFpQztZQUFqQyxpQ0FBaUM7SUFDakMsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QixxQ0FBcUM7SUFDckMsMENBQWtDO1lBQWxDLGtDQUFrQztJQUdsQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLGdDQUFnQztRQUdoQyxnREFBZ0Q7SUFDcEQ7SUFDQTtRQUNJLGtDQUFrQztRQUdsQyxrREFBa0Q7SUFDdEQ7SUFDQTtRQUNJLGdDQUFnQztRQUdoQyxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFuQkE7SUFDSTtRQUNJLGdDQUFnQztRQUdoQyxnREFBZ0Q7SUFDcEQ7SUFDQTtRQUNJLGtDQUFrQztRQUdsQyxrREFBa0Q7SUFDdEQ7SUFDQTtRQUNJLGdDQUFnQztRQUdoQyxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBR0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFHSSxrREFBa0Q7SUFDdEQ7SUFDQTtRQUdJLGdEQUFnRDtJQUNwRDtBQUNKOztBQWhCQTtJQUNJO1FBR0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFHSSxrREFBa0Q7SUFDdEQ7SUFDQTtRQUdJLGdEQUFnRDtJQUNwRDtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFFBQVE7SUFDUixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwyQkFBMkIsRUFBRSxlQUFlO0lBQzVDLHlCQUF5QixFQUFFLFdBQVcsRUFDWixtQkFBbUI7SUFDN0Msc0JBQXNCLEVBQUUsWUFBWTtJQUNwQyxxQkFBcUIsRUFBRSwyQkFBMkI7SUFDbEQsaUJBQWlCLEVBQUU7dUVBQ2dEO0FBQ3ZFOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsMkNBQTJDO0FBQy9DIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNrZ3JvdW5kIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIC8qICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBhbmltYXRpb246IHNsaWRlQmcgMTBzIGluZmluaXRlIDFzO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iZy8xLmpwZ1wiKTsgICAqL1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxuICAgIHotaW5kZXg6IC0xMDAwO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlQmcge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvMS5qcGdcIik7XHJcbiAgICB9XHJcbiAgICAzMCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvMy5qcGdcIik7XHJcbiAgICB9XHJcbiAgICA2MCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvNC5qcGdcIik7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnLzEuanBnXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmx1aWQtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubmF2IHtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG59XHJcblxyXG4jbG9naW4ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxufVxyXG5cclxuI3JlZ2lzdGVyIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogNnB4IDZweCAwcHggMHB4IHJnYmEoMjMwLCA2MiwgNjYsIDEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiA2cHggNnB4IDBweCAwcHggcmdiYSgyMzAsIDYyLCA2NiwgMSk7XHJcbiAgICBib3gtc2hhZG93OiA2cHggNnB4IDBweCAwcHggcmdiYSgyMzAsIDYyLCA2NiwgMSk7XHJcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVCb3hTaGFkb3dJbjtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMzAwbXM7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxufVxyXG5cclxuI3JlZ2lzdGVyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMwLCA2MiwgNjYsIDEpO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlQm94U2hhZG93T3V0O1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDBtcztcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlQm94U2hhZG93T3V0IHtcclxuICAgIDAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzMCwgNjIsIDY2LCAwKTtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDZweCA2cHggMHB4IDBweCByZ2JhKDIzMCwgNjIsIDY2LCAxKTtcclxuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDZweCA2cHggMHB4IDBweCByZ2JhKDIzMCwgNjIsIDY2LCAxKTtcclxuICAgICAgICBib3gtc2hhZG93OiA2cHggNnB4IDBweCAwcHggcmdiYSgyMzAsIDYyLCA2NiwgMSk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjMwLCA2MiwgNjYsIDAuNCk7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDBweCAwcHggcmdiYSgyMzAsIDYyLCA2NiwgMC41KTtcclxuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDJweCAycHggMHB4IDBweCByZ2JhKDIzMCwgNjIsIDY2LCAwLjUpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMHB4IDBweCByZ2JhKDIzMCwgNjIsIDY2LCAwLjUpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMzAsIDYyLCA2NiwgMSk7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlQm94U2hhZG93SW4ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDBweCAwcHggcmdiYSgyMzAsIDYyLCA2NiwgMC41KTtcclxuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDJweCAycHggMHB4IDBweCByZ2JhKDIzMCwgNjIsIDY2LCAwLjUpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMHB4IDBweCByZ2JhKDIzMCwgNjIsIDY2LCAwLjUpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiA2cHggNnB4IDBweCAwcHggcmdiYSgyMzAsIDYyLCA2NiwgMSk7XHJcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiA2cHggNnB4IDBweCAwcHggcmdiYSgyMzAsIDYyLCA2NiwgMSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNnB4IDZweCAwcHggMHB4IHJnYmEoMjMwLCA2MiwgNjYsIDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmNvb2wtbGluayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5jb29sLWxpbms6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xyXG59XHJcblxyXG4uY29vbC1saW5rOmhvdmVyOjphZnRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3M7XHJcbn1cclxuXHJcbi5ub3NlbGVjdCB7XHJcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xyXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcbnAuY29vbC1saW5rOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2xlYXJuTW9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbiNsZWFybk1vcmUubGVhZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
        this.learnMore = false;
    }
    WelcomeComponent.prototype.ngOnInit = function () { };
    WelcomeComponent.prototype.toggleLearnMore = function () {
        this.learnMore = !this.learnMore;
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-welcome",
            template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/components/welcome/welcome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (!this.userService.loggedIn.value) {
            this.router.navigate(['welcome']);
            return false;
        }
        return this.userService.loggedIn;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
        this.apiKey = "b5efa85196e4919222c431b10c08ef77";
    }
    MovieService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = "operation"; }
        return function (response) {
            console.log(response.error.errmsg, response.statusText);
            alert("Error has occured. Please try again.");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    };
    MovieService.prototype.weeklyTrendingMovies = function () {
        var url = "https://api.themoviedb.org/3/trending/movie/week?api_key=" +
            this.apiKey;
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("movies")));
    };
    MovieService.prototype.moviesInTheathers = function () {
        var url = "https://api.themoviedb.org/3/discover/movie?api_key=" +
            this.apiKey +
            "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019";
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("movies")));
    };
    MovieService.prototype.getMovieById = function (id) {
        var url = "https://api.themoviedb.org/3/movie/" +
            id.toString() +
            "?api_key=" +
            this.apiKey +
            "&language=en-US";
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("movies")));
    };
    MovieService.prototype.searchByName = function (query) {
        var url = "https://api.themoviedb.org/3/search/movie?api_key=" +
            this.apiKey +
            "&language=en-US&query=" +
            query.toString() +
            "&page=1&include_adult=false";
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("tv")));
    };
    MovieService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MovieService);
    return MovieService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");








var ReviewService = /** @class */ (function () {
    function ReviewService(http, router, toasterService, userService) {
        this.http = http;
        this.router = router;
        this.toasterService = toasterService;
        this.userService = userService;
        this.reviewUrl = "/api/review";
    }
    ReviewService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = "operation"; }
        return function (response) {
            _this.toasterService.error(response.error.message, "Error has occured. Please try again.");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    };
    ReviewService.prototype.showToastrSuccess = function (message) {
        return this.toasterService.success(message, "Success!", {
            closeButton: true
        });
    };
    ReviewService.prototype.findReviewsByAuthor = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("id", id);
        return this.http
            .get(this.reviewUrl + "/findReviewsByAuthor", { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("findReviewsByAuthor")));
    };
    ReviewService.prototype.findReviewByMovie = function (movieTitle) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("movieTitle", movieTitle);
        return this.http
            .get(this.reviewUrl + "/findReviewByMovie", { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) {
            if (!response.reviews.length) {
                _this.toasterService.error("No reviews found!");
                return;
            }
            _this.showToastrSuccess(response.message);
            // TODO: OPEN SEARCH RESULT COMPONENT
            console.log(response.reviews);
        }));
    };
    ReviewService.prototype.findAllReviews = function () {
        return this.http
            .get(this.reviewUrl + "/findAllReviews")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("findAllReviews")));
    };
    ReviewService.prototype.createReview = function (submittedReview) {
        var _this = this;
        // title, movie, rating, reviewText, authorId
        var authorId = this.userService.user.value._id;
        var review = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, submittedReview, { authorId: authorId });
        return this.http
            .post(this.reviewUrl + "/createReview", review)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { return _this.showToastrSuccess(res.message); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("createReview")));
    };
    ReviewService.prototype.updateReview = function (review) {
        // reviewId, title, rating, reviewText
        return this.http
            .put(this.reviewUrl + "/updateReview", review)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("updateReview")));
    };
    ReviewService.prototype.deleteReview = function (reviewId) {
        // reviewId
        return this.http
            .delete(this.reviewUrl + "/deleteReview", reviewId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("deleteReview")));
    };
    ReviewService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
    ]; };
    ReviewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
    ], ReviewService);
    return ReviewService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var TvService = /** @class */ (function () {
    function TvService(http, router) {
        this.http = http;
        this.router = router;
        this.apiKey = "b5efa85196e4919222c431b10c08ef77";
    }
    TvService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = "operation"; }
        return function (response) {
            console.log(response.error.errmsg, response.statusText);
            alert("Error has occured. Please try again.");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result);
        };
    };
    TvService.prototype.weeklyTrendingTv = function () {
        var url = "https://api.themoviedb.org/3/trending/tv/week?api_key=" +
            this.apiKey;
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("tv")));
    };
    TvService.prototype.discoverTV = function () {
        var url = "https://api.themoviedb.org/3/discover/tv?api_key=" +
            this.apiKey +
            "&language=en-US&sort_by=popularity.desc&first_air_date_year=2016&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_original_language=en";
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("tv")));
    };
    TvService.prototype.getTvById = function (id) {
        var url = "https://api.themoviedb.org/3/tv/" +
            id.toString() +
            "?api_key=" +
            this.apiKey +
            "&language=en-US";
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("tv")));
    };
    TvService.prototype.searchByName = function (query) {
        var url = "https://api.themoviedb.org/3/search/tv?api_key=" +
            this.apiKey +
            "&language=en-US&query=" +
            query.toString() +
            "&page=1";
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("tv")));
    };
    TvService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    TvService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TvService);
    return TvService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _classes_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/token */ "./src/app/classes/token.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");









var UserService = /** @class */ (function () {
    function UserService(http, router, toasterService) {
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
    UserService.prototype.isLoggedIn = function () {
        var token = _classes_token__WEBPACK_IMPORTED_MODULE_3__["Token"].get();
        if (token) {
            var payload = _classes_token__WEBPACK_IMPORTED_MODULE_3__["Token"].parse(token);
            return payload.exp > Date.now() / 1000;
        }
        else
            return false;
    };
    UserService.prototype.credentials = function () {
        if (this.isLoggedIn()) {
            var token = _classes_token__WEBPACK_IMPORTED_MODULE_3__["Token"].get();
            var payload = _classes_token__WEBPACK_IMPORTED_MODULE_3__["Token"].parse(token);
            delete payload["exp"];
            delete payload["iat"];
            return payload;
        }
    };
    UserService.prototype.saveToken = function (token) {
        _classes_token__WEBPACK_IMPORTED_MODULE_3__["Token"].save(token);
        this.loggedIn.next(this.isLoggedIn());
        this.user.next(this.credentials());
    };
    UserService.prototype.showToastrSuccess = function (message) {
        return this.toasterService.success(message, "Success!", {
            closeButton: true
        });
    };
    UserService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = "operation"; }
        return function (response) {
            _this.toasterService.error("Error has occured. Please try again.");
            if (operation === "register" || operation === "login") {
                _this.router.navigate(["welcome"]);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    UserService.prototype.register = function (user) {
        var _this = this;
        return this.http.post(this.userUrl + "/register", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (response) {
            _this.saveToken(response.token);
            _this.router.navigate(["home"]);
            _this.showToastrSuccess(response.message);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("register", user)));
    };
    UserService.prototype.login = function (user) {
        var _this = this;
        return this.http.post(this.userUrl + "/login", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (response) {
            _this.saveToken(response.token);
            _this.router.navigate(["home"]);
            _this.showToastrSuccess(response.message);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("login", user)));
    };
    UserService.prototype.getProfileData = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set("id", id);
        return this.http
            .get(this.userUrl + "/getProfileData", { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("getProfileData")));
    };
    UserService.prototype.findUserByUsername = function (username) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set("username", username);
        return this.http
            .get(this.userUrl + "/findUserByUsername", { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (response) {
            if (!response.user) {
                _this.toasterService.error("No users found!");
                return;
            }
            _this.showToastrSuccess(response.message);
            _this.router.navigate(["profile", response.user._id]);
        }));
    };
    UserService.prototype.updateUsername = function (username) {
        var _this = this;
        var user = { id: this.user.value._id, username: username };
        return this.http.post(this.userUrl + "/updateUsername", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (response) {
            _this.showToastrSuccess(response.message);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("updateUsername")));
    };
    UserService.prototype.updatePassword = function (password) {
        var _this = this;
        var user = { id: this.user.value._id, password: password };
        return this.http.post(this.userUrl + "/updatePassword", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (response) {
            _this.showToastrSuccess(response.message);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("updatePassword")));
    };
    UserService.prototype.updateBio = function (bio) {
        var _this = this;
        var user = { id: this.user.value._id, bio: bio };
        return this.http
            .post(this.userUrl + "/createOrUpdateBio", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (response) {
            _this.showToastrSuccess(response.message);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("createOrUpdateBio")));
    };
    UserService.prototype.updateCurrentlyWatching = function (currentlyWatching) {
        var _this = this;
        var user = { id: this.user.value._id, currentlyWatching: currentlyWatching };
        return this.http
            .post(this.userUrl + "/createOrUpdateCurrentlyWatching", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (response) {
            _this.showToastrSuccess(response.message);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("createOrUpdateCurrentlyWatching")));
    };
    UserService.prototype.updateFavorites = function (favorites) {
        var _this = this;
        var user = { id: this.user.value._id, favorites: favorites };
        return this.http
            .post(this.userUrl + "/createOrUpdateFavorites", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (response) {
            _this.showToastrSuccess(response.message);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("createOrUpdateFavorites")));
    };
    UserService.prototype.updateAvatar = function (avatarURL) {
        var _this = this;
        var user = { id: this.user.value._id, avatarURL: avatarURL };
        return this.http.post(this.userUrl + "/updateAvatar", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (response) {
            _this.showToastrSuccess(response.message);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("updateAvatar")));
    };
    UserService.prototype.logOut = function () {
        this.router.navigate(["/welcome"]);
        this.loggedIn.next(false);
        this.user.next(null);
        _classes_token__WEBPACK_IMPORTED_MODULE_3__["Token"].remove();
    };
    UserService.prototype.authHeaders = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            Authorization: "Bearer " + (_classes_token__WEBPACK_IMPORTED_MODULE_3__["Token"].get() ? _classes_token__WEBPACK_IMPORTED_MODULE_3__["Token"].get() : "")
        });
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], UserService);
    return UserService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");








var WatchlistService = /** @class */ (function () {
    function WatchlistService(http, router, toasterService, userService) {
        this.http = http;
        this.router = router;
        this.toasterService = toasterService;
        this.userService = userService;
        this.watchlistUrl = "/api/watchlist";
    }
    WatchlistService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = "operation"; }
        return function (response) {
            _this.toasterService.error(response.error.message, "Error has occured. Please try again.");
            _this.router.navigate(["welcome"]);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    };
    WatchlistService.prototype.showToastrSuccess = function (message) {
        return this.toasterService.success(message, "Success!", {
            closeButton: true
        });
    };
    WatchlistService.prototype.findWatchlistsByAuthor = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("id", id);
        return this.http
            .get(this.watchlistUrl + "/findWatchlistsByAuthor", { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("findWatchlistsByAuthor")));
    };
    WatchlistService.prototype.findWatchlistsByName = function (name) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("title", name);
        return this.http
            .get(this.watchlistUrl + "/findWatchlistsByName", { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) {
            if (!response.watchlists.length) {
                _this.toasterService.error("No reviews found!");
                return;
            }
            _this.showToastrSuccess(response.message);
            // TODO: OPEN SEARCH RESULT COMPONENT
            console.log(response);
        }));
    };
    WatchlistService.prototype.findAllWatchlists = function () {
        return this.http
            .get(this.watchlistUrl + "/findAllWatchlists")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("findAllWatchlists")));
    };
    WatchlistService.prototype.createWatchlist = function (submittedWatchlist) {
        var _this = this;
        // title, description, authorId
        var authorId = this.userService.user.value._id;
        var watchlist = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, submittedWatchlist, { authorId: authorId });
        return this.http
            .post(this.watchlistUrl + "/createWatchlist", watchlist)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) { return _this.showToastrSuccess(response.message); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("createWatchlist")));
    };
    WatchlistService.prototype.addMovieToWatchlist = function (watchlist) {
        // watchlistId, movieId, movieTitle, moviePosterPath
        return this.http
            .post(this.watchlistUrl + "/addMovieToWatchlist", watchlist)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("addMovieToWatchlist")));
    };
    WatchlistService.prototype.likeWatchlist = function (watchlistId) {
        // watchlistId
        return this.http
            .post(this.watchlistUrl + "/likeWatchlist", watchlistId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("likeWatchlist")));
    };
    WatchlistService.prototype.updateTitleOrDescription = function (watchlist) {
        // watchlistId,title,description
        return this.http
            .put(this.watchlistUrl + "/updateTitleOrDescription", watchlist)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("updateTitleOrDescription")));
    };
    WatchlistService.prototype.deleteWatchlist = function (watchlistId) {
        // watchlistId
        return this.http
            .delete(this.watchlistUrl + "/deleteWatchlist", watchlistId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("deleteWatchlist")));
    };
    WatchlistService.prototype.deleteMovieFromWatchlist = function (watchlistId, movieId) {
        // watchlistId, movieId
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("watchlistId", watchlistId)
            .set("movieId", movieId);
        return this.http
            .delete(this.watchlistUrl + "/deleteMovieFromWatchlist", {
            params: params
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("deleteMovieFromWatchlist")));
    };
    WatchlistService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
    ]; };
    WatchlistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
    ], WatchlistService);
    return WatchlistService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\LUCIJA\01 WORK\01 faks\kwp\the-moviest\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map