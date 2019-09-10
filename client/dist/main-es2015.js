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

module.exports = "<div class=\"back\">\n    <app-navbar></app-navbar>\n\n    <div class=\"container-fluid  animated fadeIn delay-1s\" id=\"trendingNow\">\n        <!-- T R E N D I N G N O W  -->\n        <div class=\"row\">\n            <div class=\"title\">\n                <p class=\"ml-5\">\n                    <img\n                        style=\"opacity: 1; filter: alpha(opacity=100); \"\n                        src=\"../../../assets/img/video-camera.png\"\n                        height=\"80\"\n                    />\n                    <!-- 🎬 -->\n                    TRENDING NOW\n                </p>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col w-100\">\n                <carousel>\n                    <slide *ngFor=\"let three of topThree\">\n                        <img\n                            [src]=\"three.poster\"\n                            alt=\"first slide\"\n                            style=\"display: block; height: 600px; width: 100%; object-fit: cover;\"\n                        />\n                        <div class=\"carousel-caption d-none d-md-block\">\n                            <h3>\n                                <a (click)=\"goToMovie(three.id)\">{{\n                                    three.title\n                                }}</a>\n                            </h3>\n                            <p class=\"lead\">{{ three.overview }}</p>\n                        </div>\n                    </slide>\n                </carousel>\n            </div>\n        </div>\n\n        <div class=\"container-fluid\" id=\"airingOnTv\">\n            <div class=\"row p-2\">\n                <div class=\"col p-2 d-flex\" *ngFor=\"let five of topFive\">\n                    <div class=\"card\" style=\"height: 600px; overflow: auto;\">\n                        <a class=\"c-preview\">\n                            <img\n                                [src]=\"five.poster\"\n                                class=\"card-img-top c-preview__img\"\n                                alt=\"...\"\n                                height=\"300\"\n                                style=\"object-fit: cover;\"\n                            />\n                        </a>\n                        <div class=\"card-body\">\n                            <div class=\"row p-1\">\n                                <h5 class=\"card-title\">{{ five.title }}</h5>\n\n                                <p class=\"card-text lead\">\n                                    {{ five.overview }}\n                                </p>\n                                <div class=\"ml-2 pl-2\">\n                                    <a (click)=\"goToMovie(five.id)\">\n                                        <button class=\"learn-more\">\n                                            <div class=\"circle\">\n                                                <span class=\"icon arrow\"></span>\n                                            </div>\n                                            <p class=\"button-text\">\n                                                Learn More\n                                            </p>\n                                        </button>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!-- A I R I N G O N T V -->\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"titleRight w-100 pr-5 mr-3\">\n                    POPULAR ON TV\n                    <!-- 📺 -->\n                    <img\n                        style=\"opacity: 1; filter: alpha(opacity=100); padding: 10px;\"\n                        src=\"../../../assets/img/tv.png\"\n                        height=\"80\"\n                    />\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col w-100\">\n                    <carousel>\n                        <slide *ngFor=\"let three of topThreeTv\">\n                            <img\n                                [src]=\"three.poster\"\n                                alt=\"first slide\"\n                                style=\"display: block; height: 600px; width: 100%; object-fit: cover;\"\n                            />\n                            <div class=\"carousel-caption d-none d-md-block\">\n                                <h3>\n                                    <a (click)=\"goToTv(three.id)\">{{\n                                        three.name\n                                    }}</a>\n                                </h3>\n                                <p class=\"lead\">{{ three.overview }}</p>\n                            </div>\n                        </slide>\n                    </carousel>\n                </div>\n            </div>\n        </div>\n        <div class=\"container-fluid\" id=\"airingOnTv\">\n            <div class=\"row p-2\">\n                <div class=\"col p-2 d-flex\" *ngFor=\"let five of topFiveTv\">\n                    <div class=\"card\" style=\"height: 600px; overflow: auto;\">\n                        <a class=\"c-preview\">\n                            <img\n                                [src]=\"five.poster\"\n                                class=\"card-img-top c-preview__img \"\n                                alt=\"...\"\n                                height=\"300\"\n                                style=\"object-fit: cover;\"\n                            />\n                        </a>\n                        <div class=\"card-body\">\n                            <div class=\"row p-2\">\n                                <h5 class=\"card-title\">{{ five.name }}</h5>\n                                <p class=\"card-text lead\">\n                                    {{ five.overview }}\n                                </p>\n                                <div class=\"ml-2 pl-2\">\n                                    <a (click)=\"goToTv(five.id)\">\n                                        <button class=\"learn-more\">\n                                            <div class=\"circle\">\n                                                <span class=\"icon arrow\"></span>\n                                            </div>\n                                            <p class=\"button-text\">\n                                                Learn more\n                                            </p>\n                                        </button>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <app-footer></app-footer>\n</div>\n"

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

module.exports = "<div class=\"back\">\n    <app-navbar></app-navbar>\n    <div\n        class=\"container mb-5 text-dark animated fadeInUp\"\n        *ngIf=\"!writingReview\"\n    >\n        <section class=\"product\">\n            <div class=\"product__photo\">\n                <div class=\"photo-container\">\n                    <div class=\"photo-main\">\n                        <img\n                            src=\"{{ movie?.poster_path }}\"\n                            style=\"width: 100%; \"\n                        />\n                    </div>\n                </div>\n            </div>\n            <div class=\"product__info\">\n                <div class=\"price\">\n                    <span>{{ movie.original_title }}</span>\n                </div>\n                <div class=\"title font-italic pt-3\">\n                    <h1>{{ movie.tagline }}</h1>\n                </div>\n                <div class=\"description\">\n                    <p>{{ movie.overview }}</p>\n                    <hr />\n                    <h3 style=\"display: inline; padding: 7px;\">Genres:</h3>\n                    <p\n                        *ngFor=\"let genre of movie.genres\"\n                        style=\"display: inline; padding: 7px;\"\n                    >\n                        {{ genreEmojis[genre.name] }} {{ genre.name }}\n                    </p>\n                    <div class=\"pt-4\">\n                        <button\n                            class=\"btn btn-outline-success btn-sm m-1 p-2\"\n                            (click)=\"addToWatchlist()\"\n                        >\n                            <i class=\"fas fa-highlighter p-1\"></i> Add to\n                            watchlist\n                        </button>\n                        <button\n                            class=\"btn btnPink btn-sm m-1\"\n                            (click)=\"writeReview()\"\n                        >\n                            <i class=\"fas fa-clipboard-list p-1\"></i> Write a\n                            review\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </section>\n    </div>\n\n    <!-- R E V I E W  -->\n    <div\n        class=\"text-center container mb-5 bg-light p-5 rounded animated fadeInUp\"\n        *ngIf=\"writingReview\"\n    >\n        <button\n            class=\"btn btn-outline-danger btn-sm ml-auto\"\n            (click)=\"closeReview()\"\n        >\n            <i class=\"fas fa-times\" style=\"cursor:pointer;\"></i>\n        </button>\n        <h6 class=\"display-4\">Write a review</h6>\n        <!-- R E V I E W F O R M -->\n        <form\n            [formGroup]=\"reviewForm\"\n            (ngSubmit)=\"submitReview()\"\n            class=\"animated fadeInDown\"\n        >\n            <!-- T E M P L A T E  -->\n            <ng-template #t let-i=\"index\" let-v=\"value\">\n                <button\n                    type=\"button\"\n                    class=\"btn  btn{{ i < v ? 'Pink' : '-default' }}\"\n                    style=\"transition: all 0.1s;\"\n                >\n                    {{ i < v ? \"&#9733;\" : \"&#9734;\" }}\n                </button>\n            </ng-template>\n            <!-- R A T I N G  -->\n            <div class=\"p-3\">\n                <rating\n                    [max]=\"5\"\n                    formControlName=\"rating\"\n                    [customTemplate]=\"t\"\n                    style=\"font-size: 20px;\"\n                ></rating>\n            </div>\n            <div class=\"input-group pb-3\">\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    formControlName=\"title\"\n                    id=\"title\"\n                    placeholder=\"Review title\"\n                />\n            </div>\n            <div class=\"form-group\">\n                <textarea\n                    class=\"form-control rounded-0\"\n                    formControlName=\"reviewText\"\n                    placeholder=\"Review text...\"\n                    rows=\"3\"\n                ></textarea>\n            </div>\n            <!-- S U B M I T  -->\n            <div class=\"p-2 ml-auto\">\n                <button\n                    class=\"btn btn-outline-success\"\n                    type=\"submit\"\n                    [disabled]=\"!reviewForm.valid\"\n                >\n                    Submit\n                </button>\n            </div>\n        </form>\n        <hr />\n    </div>\n\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- NAVBAR -->\n<nav class=\"navbar navbar-expand-lg ml-5 mr-5 p-5 animated slideInDown\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/home']\">\n        <img\n            src=\"../../../assets/img/logo.png\"\n            alt=\"The Moviest\"\n            height=\"100\"\n        />\n    </a>\n\n    <button\n        class=\"navbar-toggler btn btn-outline-light\"\n        type=\"button\"\n        (click)=\"toggleNavbar()\"\n    >\n        <span class=\"navbar-toggler-icon\"\n            ><i class=\"fas fa-bars pt-1\"></i\n        ></span>\n    </button>\n\n    <div\n        class=\"collapse navbar-collapse show align-text-bottom\"\n        [ngClass]=\"{ show: navbarOpen }\"\n    >\n        <ul class=\"navbar-nav ml-auto align-text-bottom\">\n            <li class=\"nav-item align-text-bottom\">\n                <a\n                    class=\"nav-link align-text-bottom\"\n                    [routerLink]=\"['/discover']\"\n                    >Discover</a\n                >\n            </li>\n\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/reviews']\">Reviews</a>\n            </li>\n\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/watchlists']\"\n                    >Watchlists</a\n                >\n            </li>\n\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/search']\"\n                    ><i class=\"fas fa-search\"></i\n                ></a>\n            </li>\n\n            <li class=\"nav-items\">\n                <a class=\"nav-link\">\n                    <div class=\"dropdown\">\n                        <button class=\"dropbtn\">\n                            <img\n                                src=\"{{ avatarURL }}\"\n                                style=\"position:relative;top:-20px\"\n                                height=\"50\"\n                            />\n                        </button>\n\n                        <div class=\"dropdown-content\">\n                            <a [routerLink]=\"['/profile', id]\">Profile</a>\n                            <a [routerLink]=\"['/settings']\">Settings</a>\n\n                            <a id=\"logout\" (click)=\"logOut()\">Log out</a>\n                        </div>\n                    </div>\n                </a>\n            </li>\n        </ul>\n    </div>\n</nav>\n"

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

module.exports = "<div class=\"back animated fadeIn\"></div>\n<div class=\"registration-form\">\n  <header>\n    <h1>🎬 Register</h1>\n    <p class=\"lead text-italic\">Enter your information</p>\n  </header>\n\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\" class=\"animated fadeInDown\">\n\n  <!-- E M A I L -->\n    <div class=\"input-section email-section\">\n      <input class=\"email\" formControlName=\"email\" type=\"email\" placeholder=\"ENTER YOUR E-MAIL\" required autocomplete=\"off\" />\n      <!-- animated button -->\n      <div class=\"animated-button\">\n      <span [ngClass]=\"{'icon-paper-plane':true,'next':registerForm.get('email').valid}\"><i class=\"fa fa-envelope-o\"></i></span>\n      <span class=\"next-button email\"><i class=\"fa fa-arrow-up\"></i></span>\n      </div>\n    </div>\n\n    <!-- .next-button:hover {cursor:pointer} -->\n\n  <!-- U S E R N A M E -->\n    <div class=\"input-section username-section folded\">\n      <input class=\"username\" formControlName=\"username\" type=\"text\" required placeholder=\"ENTER YOUR USERNAME\" />\n   <!-- animated button -->\n     <div class=\"animated-button\">\n      <span [ngClass]=\"{'icon-lock':true,'next':registerForm.get('username').valid}\"><i class=\"fa fa-laptop\"></i></span>\n      <span class=\"next-button username\"><i class=\"fa fa-arrow-up\"></i></span>\n    </div>\n      </div>\n\n\n  <!-- P A S S W O R D -->\n    <div class=\"input-section password-section folded\">\n      <input class=\"password\" formControlName=\"password\" type=\"password\" required placeholder=\"ENTER YOUR PASSWORD\" />\n    \n    <!-- animated button -->\n    <div class=\"animated-button\">\n    <span [ngClass]=\"{'icon-repeat-lock':true,'next':registerForm.get('password').valid}\"><i class=\"fa fa-lock\"></i></span>\n\n    <!-- s u b m i t -->\n        <span class=\"next-button password\">\n          <button type=\"submit\" class=\"btn btn-link\" [disabled]=\"registerForm.invalid\"><i class=\"fa fa-paper-plane\"></i></button>\n        </span>\n        </div>\n    </div>\n    <div class=\"success\"> \n      <p>CREATING ACCOUNT...</p>\n    </div>\n  </form>\n  <p class=\"lead p-5 mt-5 text-danger font-weight-bold\" \n  *ngIf=\"(registerForm.get('username').dirty)&&!registerForm.get('username').valid\">\n  Minimum username length is 3!\n</p>\n<p class=\"lead p-5 mt-5 text-danger font-weight-bold\" \n*ngIf=\"(registerForm.get('password').dirty)&&!registerForm.get('password').valid\">\nMinimum password length is 3!\n</p>\n   \n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/reviews/reviews.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/reviews/reviews.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back animated fadeIn\">\n    <app-navbar></app-navbar>\n    <div class=\"container\">\n        <div class=\"box\" *ngFor=\"let review of reviews\">\n            <div class=\"boxContent\">\n                <i class=\"fas fa-film icon\"></i>\n                <h1 class=\"title\">{{review.title}}</h1>\n                <h3 class=\"movie\">{{review.movie.movieTitle}}</h3>\n                <p class=\"desc font-italic\">\n                    {{review.author_id.username}}\n                </p>\n            </div>\n        </div>\n    </div>\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/search/search.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/search/search.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\n    <app-navbar></app-navbar>\n    <form\n        [formGroup]=\"searchForm\"\n        (ngSubmit)=\"onSubmit()\"\n        class=\"animated fadeInUp\"\n    >\n        <div class=\"container\">\n            <input\n                type=\"text\"\n                formControlName=\"search\"\n                placeholder=\"Search...\"\n            />\n            <div class=\"search\"></div>\n        </div>\n\n        <div class=\"container m-auto text-center\" id=\"radios\">\n            <label for=\"watchlist\">\n                <input\n                    type=\"radio\"\n                    formControlName=\"type\"\n                    id=\"watchlist\"\n                    value=\"watchlist\"\n                    checked\n                />\n                <span> ‎‎🎞️</span>\n            </label>\n            <label for=\"review\">\n                <input\n                    type=\"radio\"\n                    formControlName=\"type\"\n                    id=\"review\"\n                    value=\"review\"\n                />\n                <span>📚</span>\n            </label>\n            <label for=\"profile\">\n                <input\n                    type=\"radio\"\n                    formControlName=\"type\"\n                    id=\"profile\"\n                    value=\"profile\"\n                />\n                <span>👥</span>\n            </label>\n            <label for=\"tv show\">\n                <input\n                    type=\"radio\"\n                    formControlName=\"type\"\n                    id=\"tv show\"\n                    value=\"tvShow\"\n                />\n                <span>📺</span>\n            </label>\n            <label for=\"movie\">\n                <input\n                    type=\"radio\"\n                    formControlName=\"type\"\n                    id=\"movie\"\n                    value=\"movie\"\n                />\n                <span>🎥</span>\n            </label>\n            <div class=\"row text-center p-5\">\n                <button\n                    type=\"submit\"\n                    class=\"btn btn-success m-auto p-2\"\n                    [disabled]=\"searchForm.invalid\"\n                    style=\"border-radius: 17px;\"\n                >\n                    SUBMIT\n                </button>\n            </div>\n        </div>\n    </form>\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/settings/settings.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/settings/settings.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\n    <app-navbar></app-navbar>\n    <h1 class=\"display-4 p text-center text-light\">Update your profile</h1>\n    <div class=\"container p-3 m-3 w-75 rounded m-auto bg-light\">\n        <!-- update avatar form -->\n        <div class=\"text-center m-auto pb-3\">\n            <img\n                class=\"m-auto\"\n                src=\"{{ avatarURL }}\"\n                height=\"50\"\n                (click)=\"shuffleAvatar()\"\n            />\n        </div>\n\n        <!-- update username form -->\n        <form\n            [formGroup]=\"usernameForm\"\n            (ngSubmit)=\"updateUsername()\"\n            class=\"animated fadeInDown p-1\"\n        >\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <div class=\"input-group-text\">🤠</div>\n                </div>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    formControlName=\"username\"\n                    id=\"updateUsername\"\n                    placeholder=\"Update username\"\n                />\n                <div class=\"input-group-append\">\n                    <button\n                        class=\"btn btn-outline-success\"\n                        type=\"submit\"\n                        [disabled]=\"!usernameForm.valid\"\n                    >\n                        Submit\n                    </button>\n                </div>\n            </div>\n        </form>\n        <hr />\n        <!-- update password form -->\n        <form\n            [formGroup]=\"passwordForm\"\n            (ngSubmit)=\"updatePassword()\"\n            class=\"animated fadeInDown p-1\"\n        >\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <div class=\"input-group-text\">🔒</div>\n                </div>\n                <input\n                    type=\"password\"\n                    class=\"form-control\"\n                    formControlName=\"password\"\n                    id=\"updatePassword\"\n                    placeholder=\"Update password\"\n                />\n                <div class=\"input-group-append\">\n                    <button\n                        class=\"btn btn-outline-success\"\n                        type=\"submit\"\n                        [disabled]=\"!passwordForm.valid\"\n                    >\n                        Submit\n                    </button>\n                </div>\n            </div>\n            <p\n                class=\"text-danger\"\n                *ngIf=\"\n                    passwordForm.invalid &&\n                    (passwordForm.touched || passwordForm.dirty)\n                \"\n            >\n                Password should be between 3 and 15 characters long.\n            </p>\n        </form>\n        <hr />\n        <!-- update bio, how much chars is max?? -->\n        <form\n            [formGroup]=\"bioForm\"\n            (ngSubmit)=\"updateBio()\"\n            class=\"animated fadeInDown p-1\"\n        >\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <div class=\"input-group-text\">🏞️</div>\n                </div>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    formControlName=\"bio\"\n                    id=\"updateBio\"\n                    placeholder=\"Update bio\"\n                />\n                <div class=\"input-group-append\">\n                    <button\n                        class=\"btn btn-outline-success\"\n                        type=\"submit\"\n                        [disabled]=\"!bioForm.valid\"\n                    >\n                        Submit\n                    </button>\n                </div>\n            </div>\n            <p\n                class=\"text-danger\"\n                *ngIf=\"bioForm.invalid && (bioForm.touched || bioForm.dirty)\"\n            >\n                Bio should be max. 250 characters long.\n            </p>\n        </form>\n        <hr />\n        <!-- update currently watching -->\n        <form\n            [formGroup]=\"currWatchingForm\"\n            (ngSubmit)=\"updateCurrentlyWatching()\"\n            class=\"animated fadeInDown p-1\"\n        >\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <div class=\"input-group-text\">📼</div>\n                </div>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    formControlName=\"currentlyWatching\"\n                    id=\"updateCurrentlyWatching\"\n                    placeholder=\"Update currently watching\"\n                />\n                <div class=\"input-group-append\">\n                    <button\n                        class=\"btn btn-outline-success\"\n                        type=\"submit\"\n                        [disabled]=\"!currWatchingForm.valid\"\n                    >\n                        Submit\n                    </button>\n                </div>\n            </div>\n        </form>\n        <hr />\n        <!-- update favorites -->\n        <!-- update movie -->\n        <form\n            [formGroup]=\"favoritesForm\"\n            (ngSubmit)=\"updateFavorites()\"\n            class=\"animated fadeInDown p-1\"\n        >\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <div class=\"input-group-text\">📽️</div>\n                </div>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    formControlName=\"movie\"\n                    id=\"updateMovie\"\n                    placeholder=\"Update favorite movie\"\n                />\n            </div>\n            <!-- update tv show -->\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <div class=\"input-group-text\">📺</div>\n                </div>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    formControlName=\"tvShow\"\n                    id=\"updateTvShow\"\n                    placeholder=\"Update favorite tv show\"\n                />\n            </div>\n            <!-- update actor -->\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <div class=\"input-group-text\">👨‍🎤</div>\n                </div>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    formControlName=\"actor\"\n                    id=\"updateActor\"\n                    placeholder=\"Update favorite actor/actress\"\n                />\n            </div>\n            <!-- update genre -->\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <div class=\"input-group-text\">🍿</div>\n                </div>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    formControlName=\"genre\"\n                    id=\"updateGenre\"\n                    placeholder=\"Update favorite genre\"\n                />\n                <button\n                    class=\"btn btn-outline-success\"\n                    type=\"submit\"\n                    [disabled]=\"!favoritesForm.touched\"\n                >\n                    Submit\n                </button>\n            </div>\n        </form>\n    </div>\n    <div class=\"h-25\"></div>\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/tv/tv.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/tv/tv.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\n    <app-navbar></app-navbar>\n    <div\n        class=\"container mb-5 text-dark animated fadeInUp\"\n        *ngIf=\"!writingReview\"\n    >\n        <section class=\"product\">\n            <div class=\"product__photo\">\n                <div class=\"photo-container\">\n                    <div class=\"photo-main\">\n                        <img\n                            src=\"{{ tv?.poster_path }}\"\n                            style=\"width: 100%; \"\n                        />\n                    </div>\n                </div>\n            </div>\n            <div class=\"product__info\">\n                <div class=\"price\">\n                    <span>{{ tv.original_name }}</span>\n                </div>\n                <div class=\"description\">\n                    <p>{{ tv.overview }}</p>\n                    <hr />\n                    <h3 style=\"display: inline; padding: 7px;\">Genres:</h3>\n                    <p\n                        *ngFor=\"let genre of tv.genres\"\n                        style=\"display: inline; padding: 7px;\"\n                    >\n                        {{ genreEmojis[genre.name] }} {{ genre.name }}\n                    </p>\n                    <div class=\"pt-4\">\n                        <button\n                            class=\"btn btn-outline-success btn-sm m-1 p-2\"\n                            (click)=\"addToWatchlist()\"\n                        >\n                            <i class=\"fas fa-highlighter p-1\"></i> Add to\n                            watchlist\n                        </button>\n                        <button\n                            class=\"btn btnPink btn-sm m-1\"\n                            (click)=\"writeReview()\"\n                        >\n                            <i class=\"fas fa-clipboard-list p-1\"></i> Write a\n                            review\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </section>\n    </div>\n\n    <!-- R E V I E W  -->\n    <div\n        class=\"text-center container mb-5 bg-light p-5 rounded animated fadeInUp\"\n        *ngIf=\"writingReview\"\n    >\n        <button\n            class=\"btn btn-outline-danger btn-sm ml-auto\"\n            (click)=\"closeReview()\"\n        >\n            <i class=\"fas fa-times\" style=\"cursor:pointer;\"></i>\n        </button>\n        <h6 class=\"display-4\">Write a review</h6>\n        <!-- R E V I E W F O R M -->\n        <form\n            [formGroup]=\"reviewForm\"\n            (ngSubmit)=\"submitReview()\"\n            class=\"animated fadeInDown\"\n        >\n            <!-- T E M P L A T E  -->\n            <ng-template #t let-i=\"index\" let-v=\"value\">\n                <button\n                    type=\"button\"\n                    class=\"btn btn-sm btn{{ i < v ? 'Pink' : '-default' }}\"\n                    style=\"border-radius: 10px; transition: all 0.1s;\"\n                >\n                    {{ i < v ? \"&#9733;\" : \"&#9734;\" }}\n                </button>\n            </ng-template>\n            <!-- R A T I N G  -->\n            <div class=\"p-3\">\n                <rating\n                    [max]=\"5\"\n                    formControlName=\"rating\"\n                    [customTemplate]=\"t\"\n                    style=\"font-size: 20px;\"\n                ></rating>\n            </div>\n            <div class=\"input-group pb-3\">\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    formControlName=\"title\"\n                    id=\"title\"\n                    placeholder=\"Review title\"\n                />\n            </div>\n            <div class=\"form-group\">\n                <textarea\n                    class=\"form-control rounded-0\"\n                    formControlName=\"reviewText\"\n                    placeholder=\"Review text...\"\n                    rows=\"3\"\n                ></textarea>\n            </div>\n            <!-- S U B M I T  -->\n            <div class=\"p-2 ml-auto\">\n                <button\n                    class=\"btn btn-outline-success\"\n                    type=\"submit\"\n                    [disabled]=\"!reviewForm.valid\"\n                >\n                    Submit\n                </button>\n            </div>\n        </form>\n        <hr />\n    </div>\n\n    <app-footer></app-footer>\n</div>\n"

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

module.exports = "<div class=\"fluid-container\" style=\"overflow: auto;\">\n    <div class=\"nav p-5 mb-5 animated fadeIn\">\n        <a [routerLink]=\"['/login']\" class=\"ml-auto m-5 cool-link\" id=\"login\"\n            >LOGIN</a\n        >\n        <a [routerLink]=\"['/register']\" class=\"m-5\" id=\"register\">REGISTER</a>\n    </div>\n\n    <!--     <div class=\"row pl-5 pt-5 m-0\">\n        <div class=\"col pt-5 mt-5\">\n           <img class=\"w-50 mt-5 pt-5 noselect animated pulse\" src=\"../../../assets/img/logo.png\" alt=\"The Moviest \">\n        </div>\n    </div> -->\n    <video autoplay muted loop id=\"background\">\n        <source src=\"../../../assets/bg.mp4\" type=\"video/mp4\" />\n    </video>\n</div>\n"

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
            _components_tv_tv_component__WEBPACK_IMPORTED_MODULE_26__["TvComponent"]
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

/***/ "./src/app/components/discover/discover.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/discover/discover.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\n    background-image: url('13.jpg');\n    background-attachment: fixed;\n    background-size: cover;\n    position: relative;\n    height: 100%;\n    overflow: auto;\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 30px;\n    padding-bottom: 155px;\n    min-height: 100vh;\n    margin: 0;\n}\n\n.container {\n    display: flex;\n    box-sizing: border-box;\n    padding: 20px;\n    width: 100%;\n}\n\ni {\n    position: relative;\n    top: 40%;\n    color: whitesmoke;\n}\n\ni:hover {\n    cursor: pointer;\n    color: rgb(72, 121, 255);\n    text-shadow: 0px 0px 25px #9a6bf3;\n    transition: all 0.1s ease-in;\n}\n\nh1 {\n    font-style: italic;\n}\n\nh1 > img {\n    width: 90px;\n    height: 90px;\n    padding: 10px;\n}\n\n.bg {\n    background-color: rgba(143, 106, 132, 0.075);\n}\n\n.box {\n    flex: 1;\n    overflow: hidden;\n    transition: 0.5s;\n    margin: 0 2%;\n    height: 450px;\n    border-radius: 10px;\n    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);\n    line-height: 0;\n}\n\n.box > a > img {\n    width: 200%;\n    height: calc(100% - 10vh);\n    -o-object-fit: cover;\n    object-fit: cover;\n    transition: 0.5s;\n}\n\n.box > a > span {\n    font-size: 17px;\n    padding-top: 20px;\n    display: block;\n    text-align: center;\n    height: 10vh;\n    line-height: 1.5;\n    color: white;\n    background-color: rgba(95, 73, 197, 0.404);\n}\n\n.box:hover {\n    flex: 1 1 30%;\n}\n\n.box:hover > a > img {\n    width: 100%;\n    height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaXNjb3Zlci9kaXNjb3Zlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQXNEO0lBQ3RELDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0lBQ2QscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixpQ0FBaUM7SUFJakMsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksT0FBTztJQUNQLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlzY292ZXIvZGlzY292ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnLzEzLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNTVweDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5pIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA0MCU7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbmk6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogcmdiKDcyLCAxMjEsIDI1NSk7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMjVweCAjOWE2YmYzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbjtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xufVxuXG5oMSB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5oMSA+IGltZyB7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5iZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDMsIDEwNiwgMTMyLCAwLjA3NSk7XG59XG5cbi5ib3gge1xuICAgIGZsZXg6IDE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIG1hcmdpbjogMCAyJTtcbiAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCAyMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xufVxuXG4uYm94ID4gYSA+IGltZyB7XG4gICAgd2lkdGg6IDIwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMHZoKTtcbiAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uYm94ID4gYSA+IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTUsIDczLCAxOTcsIDAuNDA0KTtcbn1cblxuLmJveDpob3ZlciB7XG4gICAgZmxleDogMSAxIDMwJTtcbn1cblxuLmJveDpob3ZlciA+IGEgPiBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"

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
            "https://image.tmdb.org/t/p/w342" + tvs.poster_path));
        return newTv;
    }
    posterMovie(movie) {
        let newMovie = movie.results;
        newMovie.poster_path = movie.results.map(movies => (movies.poster_path =
            "https://image.tmdb.org/t/p/w342" + movies.poster_path));
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

module.exports = ".back {\n    background-image: url('13.jpg');\n    background-attachment: fixed;\n    background-size: cover;\n    position: relative;\n    height: 100%;\n    overflow: auto;\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 30px;\n    text-transform: uppercase;\n    padding-bottom: 155px;\n    min-height: 100vh;\n}\n\napp-footer {\n    width: 100%;\n}\n\n.title {\n    font-size: 60px;\n    font-weight: bold;\n    color: white;\n    letter-spacing: 15px;\n    font-family: \"Montserrat\", sans-serif;\n    border-bottom: 10px solid #06285a;\n}\n\n.titleRight {\n    font-size: 60px;\n    font-weight: bold;\n    color: white;\n    letter-spacing: 15px;\n    text-align: right;\n    font-family: \"Montserrat\", sans-serif;\n    border-bottom: 10px solid #e63e65;\n}\n\n/* ////////////////////////////////////// */\n\nslide {\n    background: black;\n}\n\nimg {\n    opacity: 0.5;\n    filter: alpha(opacity=50);\n}\n\nimg:hover {\n    opacity: 0.8;\n    filter: alpha(opacity=80);\n    transition: 0.5s all;\n}\n\nh3 {\n    font-weight: bold;\n    font-size: 60px;\n    text-shadow: 1px 1px 15px #000000;\n    font-family: \"Montserrat\", sans-serif;\n}\n\nh3 a:hover {\n    cursor: pointer;\n}\n\nh5 {\n    font-weight: bold;\n    letter-spacing: 4px;\n    font-size: 23px;\n}\n\n.lead {\n    font-size: 13px;\n    text-transform: none;\n    font-style: italic;\n    letter-spacing: 1px;\n}\n\n.card {\n    background: rgba(255, 255, 255, 0.7);\n    border-top-left-radius: 50px;\n    border-bottom-right-radius: 50px;\n    border-bottom-left-radius: 10px;\n    border-top-right-radius: 10px;\n    margin: 15px;\n}\n\n.card-body {\n    font-size: 12px;\n}\n\n/* ////////////////////////////////////// */\n\n.blocks {\n    position: relative;\n    justify-items: center;\n    display: flex;\n    border-radius: 100px;\n    width: 100%;\n}\n\n.blocks .block {\n    position: relative;\n    align-self: center;\n    display: block;\n    width: 270px;\n    height: 270px;\n    margin: 30px;\n    -webkit-transform: perspective(600px) rotateY(-30deg);\n    transform: perspective(600px) rotateY(-30deg);\n    transition: -webkit-transform 0.3s;\n    transition: transform 0.3s;\n    transition: transform 0.3s, -webkit-transform 0.3s;\n}\n\n.blocks .block img {\n    height: auto;\n    max-width: 100%;\n}\n\n.blocks .block .overlay {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 2;\n    color: white;\n    font-weight: bold;\n    font-size: 30px;\n    letter-spacing: 2px;\n    background-color: rgba(0, 0, 0, 0.5);\n    opacity: 0;\n    transition: opacity 0.3s ease;\n    -webkit-transform: translate3d(0, 0, 0);\n}\n\n.blocks .block .overlay img {\n    width: auto;\n    max-width: 50%;\n}\n\n.blocks .block.hover,\n.blocks .block:hover {\n    color: white;\n    font-weight: bold;\n    font-size: 30px;\n    letter-spacing: 2px;\n    -webkit-transform: rotateY(0);\n    transform: rotateY(0);\n    cursor: pointer;\n}\n\n.blocks .block.hover .overlay,\n.blocks .block:hover .overlay {\n    color: white;\n    font-weight: bold;\n    font-size: 30px;\n    letter-spacing: 2px;\n    opacity: 1;\n}\n\n/* //////////////////////////////////////////////////////// */\n\n* {\n    box-sizing: border-box;\n}\n\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n.button-text {\n    font-size: 1rem;\n    line-height: 1.5;\n}\n\nbutton {\n    position: relative;\n    top: 0px;\n    display: inline-block;\n    cursor: pointer;\n    outline: none;\n    border: 0;\n    text-decoration: none;\n    background: transparent;\n    padding: 0;\n    font-size: inherit;\n    font-family: inherit;\n}\n\nbutton.learn-more {\n    width: 12rem;\n    height: auto;\n}\n\nbutton.learn-more .circle {\n    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n    position: relative;\n    margin: 0;\n    width: 3rem;\n    height: 3rem;\n    background: #e63e65;\n    border-radius: 1.625rem;\n}\n\nbutton.learn-more .circle .icon {\n    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    background: #fff;\n}\n\nbutton.learn-more .circle .icon.arrow {\n    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n    left: 0.625rem;\n    width: 1.125rem;\n    height: 0.125rem;\n    background: none;\n}\n\nbutton.learn-more .circle .icon.arrow::before {\n    position: absolute;\n    content: \"\";\n    top: -0.25rem;\n    right: 0.0625rem;\n    width: 0.625rem;\n    height: 0.625rem;\n    border-top: 0.125rem solid #fff;\n    border-right: 0.125rem solid #fff;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n}\n\nbutton.learn-more .button-text {\n    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    padding: 0.75rem 0;\n    margin: 0 0 0 1.85rem;\n    color: #282936;\n    font-weight: 700;\n    line-height: 1.6;\n    text-align: center;\n    text-transform: uppercase;\n}\n\nbutton:hover .circle {\n    width: 100%;\n}\n\nbutton:hover .circle .icon.arrow {\n    background: #fff;\n    -webkit-transform: translate(1rem, 0);\n    transform: translate(1rem, 0);\n}\n\nbutton:hover .button-text {\n    color: #fff;\n}\n\n/* ////////////////////////////////////// */\n\n.c-preview {\n    background: #000;\n    /* FF3.6-15 */\n    /* Chrome10-25,Safari5.1-6 */\n    background: linear-gradient(\n        135deg,\n        #000000 0%,\n        #000000 25%,\n        #1e539e 50%,\n        #ff3083 75%,\n        #7800a8 100%\n    );\n    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    background-size: 400% 400%;\n    background-repeat: no-repeat;\n    color: #fff;\n    cursor: pointer;\n    transition: 0.5s all;\n    border-top-left-radius: 50px;\n    border-top-right-radius: 10px;\n}\n\n.c-preview__img {\n    z-index: 1;\n    opacity: 0.8;\n    mix-blend-mode: screen;\n    border-top-left-radius: 50px;\n    border-top-right-radius: 10px;\n}\n\n.c-preview:hover {\n    background-position: 100% 100%;\n    border-top-left-radius: 50px;\n    border-top-right-radius: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUFzRDtJQUN0RCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztJQUNkLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIscUNBQXFDO0lBQ3JDLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIscUNBQXFDO0lBQ3JDLGlDQUFpQztBQUNyQzs7QUFFQSwyQ0FBMkM7O0FBRTNDO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQ0FBaUM7SUFDakMscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDLCtCQUErQjtJQUMvQiw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsMkNBQTJDOztBQUUzQztJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixxREFBcUQ7SUFDckQsNkNBQTZDO0lBQzdDLGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIsa0RBQWtEO0FBQ3REOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IsdUNBQXVDO0FBQzNDOztBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBQ0E7O0lBRUksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFDQTs7SUFFSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBLDZEQUE2RDs7QUFFN0Q7SUFDSSxzQkFBc0I7QUFDMUI7O0FBQ0E7O0lBRUksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixhQUFhO0lBQ2IsU0FBUztJQUNULHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFDQTtJQUNJLHFEQUFxRDtJQUNyRCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLHFEQUFxRDtJQUNyRCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0kscURBQXFEO0lBQ3JELGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixpQ0FBaUM7SUFDakMsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtBQUM1Qjs7QUFDQTtJQUNJLHFEQUFxRDtJQUNyRCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixxQ0FBcUM7SUFDckMsNkJBQTZCO0FBQ2pDOztBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUVBLDJDQUEyQzs7QUFFM0M7SUFDSSxnQkFBZ0I7SUFTaEIsYUFBYTtJQVNiLDRCQUE0QjtJQUM1Qjs7Ozs7OztLQU9DO0lBQ0QscURBQXFEO0lBQ3JELDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQzs7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjayB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iZy8xMy5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNTVweDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuYXBwLWZvb3RlciB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMTVweDtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjMDYyODVhO1xufVxuXG4udGl0bGVSaWdodCB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMTVweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZTYzZTY1O1xufVxuXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuXG5zbGlkZSB7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmltZyB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT01MCk7XG59XG5cbmltZzpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT04MCk7XG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGw7XG59XG5cbmgzIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMTVweCAjMDAwMDAwO1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbn1cblxuaDMgYTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5oNSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBmb250LXNpemU6IDIzcHg7XG59XG5cbi5sZWFkIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbjogMTVweDtcbn1cblxuLmNhcmQtYm9keSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuXG4uYmxvY2tzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uYmxvY2tzIC5ibG9jayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjcwcHg7XG4gICAgaGVpZ2h0OiAyNzBweDtcbiAgICBtYXJnaW46IDMwcHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDYwMHB4KSByb3RhdGVZKC0zMGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg2MDBweCkgcm90YXRlWSgtMzBkZWcpO1xuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XG59XG4uYmxvY2tzIC5ibG9jayBpbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uYmxvY2tzIC5ibG9jayAub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuLmJsb2NrcyAuYmxvY2sgLm92ZXJsYXkgaW1nIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDUwJTtcbn1cbi5ibG9ja3MgLmJsb2NrLmhvdmVyLFxuLmJsb2NrcyAuYmxvY2s6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJsb2NrcyAuYmxvY2suaG92ZXIgLm92ZXJsYXksXG4uYmxvY2tzIC5ibG9jazpob3ZlciAub3ZlcmxheSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXG5cbioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmJ1dHRvbi10ZXh0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG59XG5idXR0b24ubGVhcm4tbW9yZSB7XG4gICAgd2lkdGg6IDEycmVtO1xuICAgIGhlaWdodDogYXV0bztcbn1cbmJ1dHRvbi5sZWFybi1tb3JlIC5jaXJjbGUge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjQ1cyBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC4wNzYsIDEpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDNyZW07XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIGJhY2tncm91bmQ6ICNlNjNlNjU7XG4gICAgYm9yZGVyLXJhZGl1czogMS42MjVyZW07XG59XG5idXR0b24ubGVhcm4tbW9yZSAuY2lyY2xlIC5pY29uIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40NXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuMDc2LCAxKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbmJ1dHRvbi5sZWFybi1tb3JlIC5jaXJjbGUgLmljb24uYXJyb3cge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjQ1cyBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC4wNzYsIDEpO1xuICAgIGxlZnQ6IDAuNjI1cmVtO1xuICAgIHdpZHRoOiAxLjEyNXJlbTtcbiAgICBoZWlnaHQ6IDAuMTI1cmVtO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG5idXR0b24ubGVhcm4tbW9yZSAuY2lyY2xlIC5pY29uLmFycm93OjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHRvcDogLTAuMjVyZW07XG4gICAgcmlnaHQ6IDAuMDYyNXJlbTtcbiAgICB3aWR0aDogMC42MjVyZW07XG4gICAgaGVpZ2h0OiAwLjYyNXJlbTtcbiAgICBib3JkZXItdG9wOiAwLjEyNXJlbSBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci1yaWdodDogMC4xMjVyZW0gc29saWQgI2ZmZjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5idXR0b24ubGVhcm4tbW9yZSAuYnV0dG9uLXRleHQge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjQ1cyBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC4wNzYsIDEpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcGFkZGluZzogMC43NXJlbSAwO1xuICAgIG1hcmdpbjogMCAwIDAgMS44NXJlbTtcbiAgICBjb2xvcjogIzI4MjkzNjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5idXR0b246aG92ZXIgLmNpcmNsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5idXR0b246aG92ZXIgLmNpcmNsZSAuaWNvbi5hcnJvdyB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDFyZW0sIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFyZW0sIDApO1xufVxuYnV0dG9uOmhvdmVyIC5idXR0b24tdGV4dCB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXG5cbi5jLXByZXZpZXcge1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoXG4gICAgICAgIC00NWRlZyxcbiAgICAgICAgIzAwMDAwMCAwJSxcbiAgICAgICAgIzAwMDAwMCAyNSUsXG4gICAgICAgICMxZTUzOWUgNTAlLFxuICAgICAgICAjZmYzMDgzIDc1JSxcbiAgICAgICAgIzc4MDBhOCAxMDAlXG4gICAgKTtcbiAgICAvKiBGRjMuNi0xNSAqL1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAtNDVkZWcsXG4gICAgICAgICMwMDAwMDAgMCUsXG4gICAgICAgICMwMDAwMDAgMjUlLFxuICAgICAgICAjMWU1MzllIDUwJSxcbiAgICAgICAgI2ZmMzA4MyA3NSUsXG4gICAgICAgICM3ODAwYTggMTAwJVxuICAgICk7XG4gICAgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIDEzNWRlZyxcbiAgICAgICAgIzAwMDAwMCAwJSxcbiAgICAgICAgIzAwMDAwMCAyNSUsXG4gICAgICAgICMxZTUzOWUgNTAlLFxuICAgICAgICAjZmYzMDgzIDc1JSxcbiAgICAgICAgIzc4MDBhOCAxMDAlXG4gICAgKTtcbiAgICAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuLmMtcHJldmlld19faW1nIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBtaXgtYmxlbmQtbW9kZTogc2NyZWVuO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5cbi5jLXByZXZpZXc6aG92ZXIge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuIl19 */"

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

module.exports = ".back {\n    background-image: linear-gradient(to bottom, #65398648, #062c6d88),\n        url('6.jpg');\n    background-image: fixed;\n    background-position: center center;\n    background-size: cover;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n.registration-form {\n    width: 400px;\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translate(-50%, 0%);\n    transform: translate(-50%, 0%);\n    top: 15%;\n    background: transparent;\n}\n\n.registration-form header {\n    position: relative;\n    z-index: 4;\n    background: white;\n    padding: 20px 40px;\n    border-radius: 15px 15px 0 0;\n}\n\n.registration-form header h1 {\n    font-weight: 900;\n    letter-spacing: 1.5px;\n    color: #333;\n    font-size: 23px;\n    text-transform: uppercase;\n    margin: 0;\n}\n\n.registration-form header p {\n    word-spacing: 0px;\n    color: #9facb6;\n    font-size: 17px;\n    margin: 0;\n    margin-top: 5px;\n}\n\n.registration-form form {\n    position: relative;\n}\n\n.registration-form .input-section {\n    width: 100%;\n    position: absolute;\n    display: flex;\n    left: 50%;\n    -webkit-transform: translate(-50%, 0);\n    transform: translate(-50%, 0);\n    height: 75px;\n    border-radius: 0 0 15px 15px;\n    overflow: hidden;\n    z-index: 2;\n    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.2);\n    transition: all 0.2s ease-in;\n}\n\n.registration-form .input-section.folded {\n    width: 95%;\n    margin-top: 10px;\n    left: 50%;\n    -webkit-transform: translate(-50%, 0);\n    transform: translate(-50%, 0);\n    z-index: 1;\n}\n\n.registration-form .input-section.folded input {\n    background-color: #e9e2c0;\n}\n\n.registration-form .input-section.folded span {\n    background-color: #e9e2c0;\n}\n\n.registration-form .input-section.folded + .folded {\n    width: 90%;\n    margin-top: 20px;\n    left: 50%;\n    -webkit-transform: translate(-50%, 0);\n    transform: translate(-50%, 0);\n    z-index: 0;\n}\n\n.registration-form .input-section.folded + .folded input {\n    background-color: #e1bcef;\n}\n\n.registration-form .input-section.folded + .folded span {\n    background-color: #e1bcef;\n}\n\n.registration-form .input-section.fold-up {\n    margin-top: -75px;\n}\n\n.registration-form form input {\n    background: white;\n    color: #8f8fd6;\n    width: 80%;\n    border: 0;\n    padding: 20px 40px;\n    margin: 0;\n}\n\n.registration-form form input:focus {\n    outline: none;\n}\n\n.registration-form form input::-webkit-input-placeholder {\n    color: #8f8fd6;\n    font-weight: 100;\n}\n\n.registration-form form input::-ms-input-placeholder {\n    color: #8f8fd6;\n    font-weight: 100;\n}\n\n.registration-form form input::-moz-placeholder {\n    color: #8f8fd6;\n    font-weight: 100;\n}\n\n.registration-form form input::placeholder {\n    color: #8f8fd6;\n    font-weight: 100;\n}\n\n.animated-button {\n    width: 20%;\n    background-color: #d4d4ff;\n}\n\n.animated-button span {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    line-height: 75px;\n    text-align: center;\n    height: 75px;\n    transition: all 0.2s ease-in;\n}\n\n.animated-button span i {\n    font-size: 25px;\n    color: #9999f8;\n}\n\n.animated-button .next-button {\n    background: transparent;\n    color: #9999f8;\n    font-weight: 100;\n    width: 100%;\n    border: 0;\n}\n\n.next {\n    margin-top: -75px;\n}\n\n.success {\n    width: 100%;\n    position: absolute;\n    display: flex;\n    align-items: center;\n    left: 50%;\n    -webkit-transform: translate(-50%, 0);\n    transform: translate(-50%, 0);\n    height: 75px;\n    border-radius: 0 0 15px 15px;\n    overflow: hidden;\n    z-index: 2;\n    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.2);\n    transition: all 0.2s ease-in;\n    background: limegreen;\n    margin-top: -75px;\n}\n\n.success p {\n    color: white;\n    font-weight: 900;\n    letter-spacing: 2px;\n    font-size: 18px;\n    width: 100%;\n    text-align: center;\n}\n\n.next-button:hover {\n    cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7b0JBQ3VDO0lBQ3ZDLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztJQUNULHNDQUFzQztJQUN0Qyw4QkFBOEI7SUFDOUIsUUFBUTtJQUNSLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFNBQVM7QUFDYjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtJQUNmLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsU0FBUztJQUNULHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLDRDQUE0QztJQUM1Qyw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxxQ0FBcUM7SUFDckMsNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsVUFBVTtBQUNkOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsU0FBUztJQUNULGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFLQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUhBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxxQ0FBcUM7SUFDckMsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDViw0Q0FBNEM7SUFDNUMsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjayB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzY1Mzk4NjQ4LCAjMDYyYzZkODgpLFxuICAgICAgICB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnLzYuanBnXCIpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmVnaXN0cmF0aW9uLWZvcm0ge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgICB0b3A6IDE1JTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5yZWdpc3RyYXRpb24tZm9ybSBoZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiA0O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIGhlYWRlciBoMSB7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luOiAwO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIGhlYWRlciBwIHtcbiAgICB3b3JkLXNwYWNpbmc6IDBweDtcbiAgICBjb2xvcjogIzlmYWNiNjtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cbi5yZWdpc3RyYXRpb24tZm9ybSBmb3JtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmVnaXN0cmF0aW9uLWZvcm0gLmlucHV0LXNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgIGhlaWdodDogNzVweDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgei1pbmRleDogMjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIC5pbnB1dC1zZWN0aW9uLmZvbGRlZCB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgIHotaW5kZXg6IDE7XG59XG4ucmVnaXN0cmF0aW9uLWZvcm0gLmlucHV0LXNlY3Rpb24uZm9sZGVkIGlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllMmMwO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIC5pbnB1dC1zZWN0aW9uLmZvbGRlZCBzcGFuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllMmMwO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIC5pbnB1dC1zZWN0aW9uLmZvbGRlZCArIC5mb2xkZWQge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgICB6LWluZGV4OiAwO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIC5pbnB1dC1zZWN0aW9uLmZvbGRlZCArIC5mb2xkZWQgaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWJjZWY7XG59XG4ucmVnaXN0cmF0aW9uLWZvcm0gLmlucHV0LXNlY3Rpb24uZm9sZGVkICsgLmZvbGRlZCBzcGFuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFiY2VmO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIC5pbnB1dC1zZWN0aW9uLmZvbGQtdXAge1xuICAgIG1hcmdpbi10b3A6IC03NXB4O1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIGZvcm0gaW5wdXQge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiAjOGY4ZmQ2O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgICBtYXJnaW46IDA7XG59XG4ucmVnaXN0cmF0aW9uLWZvcm0gZm9ybSBpbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cbi5yZWdpc3RyYXRpb24tZm9ybSBmb3JtIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzhmOGZkNjtcbiAgICBmb250LXdlaWdodDogMTAwO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIGZvcm0gaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzhmOGZkNjtcbiAgICBmb250LXdlaWdodDogMTAwO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIGZvcm0gaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM4ZjhmZDY7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbi5yZWdpc3RyYXRpb24tZm9ybSBmb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM4ZjhmZDY7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmFuaW1hdGVkLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNGZmO1xufVxuLmFuaW1hdGVkLWJ1dHRvbiBzcGFuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogNzVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG59XG4uYW5pbWF0ZWQtYnV0dG9uIHNwYW4gaSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiAjOTk5OWY4O1xufVxuLmFuaW1hdGVkLWJ1dHRvbiAubmV4dC1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjOTk5OWY4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAwO1xufVxuXG4ubmV4dCB7XG4gICAgbWFyZ2luLXRvcDogLTc1cHg7XG59XG5cbi5zdWNjZXNzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgIGhlaWdodDogNzVweDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgei1pbmRleDogMjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xuICAgIGJhY2tncm91bmQ6IGxpbWVncmVlbjtcbiAgICBtYXJnaW4tdG9wOiAtNzVweDtcbn1cbi5zdWNjZXNzIHAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5leHQtYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"

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

module.exports = ".back {\n    background-image: url('14.jpg');\n    background-attachment: fixed;\n    background-size: cover;\n    position: relative;\n    height: 100%;\n    overflow: hidden;\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 30px;\n    padding-bottom: 155px;\n    min-height: 100vh;\n}\n\n.container {\n    display: grid;\n    grid-template-rows: 1fr;\n    padding-bottom: 70px;\n}\n\nh3 {\n    font-size: 0.7em;\n}\n\nimg {\n    width: 300px;\n    -webkit-filter: drop-shadow(1px 1px 3px #a6a6a6);\n    filter: drop-shadow(1px 1px 3px #a6a6a6);\n}\n\n.btnPink {\n    border-radius: 10px;\n    background: linear-gradient(\n            to left,\n            rgba(190, 117, 174, 0.795) 30%,\n            rgba(133, 124, 219, 0.795) 100%\n        )\n        left bottom rgba(255, 255, 255, 0) no-repeat;\n    transition: 0.5s all;\n    padding: 7px;\n    color: white;\n}\n\n.btnPink:hover {\n    background: none;\n    border: 1px solid palevioletred;\n    border-radius: 10px;\n    color: palevioletred;\n    transition: 0.5s all;\n}\n\n/* ----- Product Section ----- */\n\n.product {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    margin: auto;\n    padding: 1em 0em;\n    padding-right: 1em;\n    min-width: 400px;\n    background-color: rgba(255, 255, 255, 0.7);\n    border-radius: 5px;\n    margin-left: 100px;\n    margin-right: 100px;\n}\n\n/* ----- Photo Section ----- */\n\n.product__photo {\n    position: relative;\n}\n\n.photo-container {\n    position: absolute;\n    left: -2em;\n    display: grid;\n    grid-template-rows: 1fr;\n    width: 100%;\n    height: 100%;\n    border-radius: 6px;\n}\n\n.photo-main img {\n    position: absolute;\n    -webkit-filter: saturate(150%) contrast(120%) hue-rotate(10deg)\n        drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));\n    filter: saturate(150%) contrast(120%) hue-rotate(10deg)\n        drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));\n}\n\n/* ----- Informations Section ----- */\n\n.product__info {\n    padding: 5px;\n}\n\n.title h1 {\n    padding-bottom: 10px;\n    color: #4c4c4c;\n    font-size: 25px;\n}\n\n.title span {\n    font-size: 0.6em;\n}\n\n.price {\n    font-weight: bold;\n    margin: 10px;\n    line-height: 1.6em;\n    font-size: 1.2em;\n}\n\n.price span {\n    font-size: 2em;\n    padding-bottom: 2px;\n    background: linear-gradient(\n            to left,\n            rgba(170, 84, 151, 1) 30%,\n            rgba(77, 60, 221, 1) 100%\n        )\n        left bottom rgba(255, 255, 255, 0) no-repeat;\n    background-size: 100% 12px;\n}\n\n.description {\n    clear: left;\n    margin: 2em 0;\n}\n\n.description p {\n    margin-bottom: 1em;\n    font-size: 14px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS9tb3ZpZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQXNEO0lBQ3RELDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0RBQWdEO0lBQ2hELHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQjs7Ozs7b0RBS2dEO0lBQ2hELG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQkFBb0I7QUFDeEI7O0FBRUEsZ0NBQWdDOztBQUNoQztJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQSw4QkFBOEI7O0FBQzlCO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCO3FEQUNpRDtJQUNqRDtxREFDaUQ7QUFDckQ7O0FBRUEscUNBQXFDOztBQUNyQztJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25COzs7OztvREFLZ0Q7SUFDaEQsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWUvbW92aWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnLzE0LmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1NXB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuXG5oMyB7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbn1cblxuaW1nIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDFweCAxcHggM3B4ICNhNmE2YTYpO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDFweCAzcHggI2E2YTZhNik7XG59XG5cbi5idG5QaW5rIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgIHRvIGxlZnQsXG4gICAgICAgICAgICByZ2JhKDE5MCwgMTE3LCAxNzQsIDAuNzk1KSAzMCUsXG4gICAgICAgICAgICByZ2JhKDEzMywgMTI0LCAyMTksIDAuNzk1KSAxMDAlXG4gICAgICAgIClcbiAgICAgICAgbGVmdCBib3R0b20gcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSBuby1yZXBlYXQ7XG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGw7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0blBpbms6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcGFsZXZpb2xldHJlZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiBwYWxldmlvbGV0cmVkO1xuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xufVxuXG4vKiAtLS0tLSBQcm9kdWN0IFNlY3Rpb24gLS0tLS0gKi9cbi5wcm9kdWN0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMWVtIDBlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4gICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xufVxuXG4vKiAtLS0tLSBQaG90byBTZWN0aW9uIC0tLS0tICovXG4ucHJvZHVjdF9fcGhvdG8ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBob3RvLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0yZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ucGhvdG8tbWFpbiBpbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtd2Via2l0LWZpbHRlcjogc2F0dXJhdGUoMTUwJSkgY29udHJhc3QoMTIwJSkgaHVlLXJvdGF0ZSgxMGRlZylcbiAgICAgICAgZHJvcC1zaGFkb3coMXB4IDIwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMykpO1xuICAgIGZpbHRlcjogc2F0dXJhdGUoMTUwJSkgY29udHJhc3QoMTIwJSkgaHVlLXJvdGF0ZSgxMGRlZylcbiAgICAgICAgZHJvcC1zaGFkb3coMXB4IDIwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMykpO1xufVxuXG4vKiAtLS0tLSBJbmZvcm1hdGlvbnMgU2VjdGlvbiAtLS0tLSAqL1xuLnByb2R1Y3RfX2luZm8ge1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLnRpdGxlIGgxIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBjb2xvcjogIzRjNGM0YztcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG4udGl0bGUgc3BhbiB7XG4gICAgZm9udC1zaXplOiAwLjZlbTtcbn1cblxuLnByaWNlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNmVtO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG59XG4ucHJpY2Ugc3BhbiB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICB0byBsZWZ0LFxuICAgICAgICAgICAgcmdiYSgxNzAsIDg0LCAxNTEsIDEpIDMwJSxcbiAgICAgICAgICAgIHJnYmEoNzcsIDYwLCAyMjEsIDEpIDEwMCVcbiAgICAgICAgKVxuICAgICAgICBsZWZ0IGJvdHRvbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTJweDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBjbGVhcjogbGVmdDtcbiAgICBtYXJnaW46IDJlbSAwO1xufVxuLmRlc2NyaXB0aW9uIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4iXX0= */"

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






let MovieComponent = class MovieComponent {
    constructor(movieService, reviewService, route, fb) {
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
    addToWatchlist() { }
};
MovieComponent.ctorParameters = () => [
    { type: src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] },
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

module.exports = "* {\n    z-index: 1500;\n}\n\nli {\n    padding-left: 20px;\n    padding-right: 20px;\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 30px;\n    text-transform: uppercase;\n}\n\nli a {\n    padding: 20px;\n    color: white;\n    font-weight: bold;\n    letter-spacing: 5px;\n    font-size: 17px;\n}\n\nul {\n    visibility: hidden;\n}\n\nul > * {\n    visibility: visible;\n}\n\nul > * {\n    transition: opacity 150ms linear 100ms, -webkit-transform 150ms ease-in-out 100ms;\n    transition: opacity 150ms linear 100ms, transform 150ms ease-in-out 100ms;\n    transition: opacity 150ms linear 100ms, transform 150ms ease-in-out 100ms, -webkit-transform 150ms ease-in-out 100ms;\n}\n\nul:hover > * {\n    opacity: 0.4;\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n    -webkit-filter: blur(1px);\n            filter: blur(1px);\n}\n\nul > *:hover {\n    letter-spacing: 7px;\n    opacity: 1;\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n    transition-delay: 0ms, 0ms;\n    -webkit-filter: blur(0px);\n            filter: blur(0px);\n}\n\n.dropbtn {\n    background: none;\n    border: none;\n}\n\n.dropdown {\n    position: relative;\n}\n\n.dropdown-content {\n    border-radius: 20px;\n    display: none;\n    position: absolute;\n    background-color: #f1f1f19d;\n    min-width: 120px;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n    z-index: 1;\n}\n\n.dropdown-content a {\n    color: black;\n    font-size: 10px;\n    padding: 10px 10px;\n    text-align: center;\n    text-decoration: none;\n    display: block;\n    border: 2px solid rgba(255, 0, 0, 0);\n}\n\n#logout:hover {\n    border-radius: 20px;\n    border: 2px solid rgb(199, 19, 64);\n    color: rgb(199, 19, 64);\n    font-weight: bold;\n    transition: all 400ms;\n    cursor: pointer;\n}\n\n.dropdown-content a:hover {\n    background-color: #ddd;\n    font-weight: bold;\n    color: mediumslateblue;\n    transition: all 400ms;\n    border: 2px solid rgba(255, 0, 0, 0);\n    border-radius: 20px;\n}\n\n.dropdown:hover .dropdown-content {\n    display: block;\n    border-radius: 20px;\n}\n\nnav {\n    -webkit-animation-delay: 10ms;\n            animation-delay: 10ms;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUZBQXlFO0lBQXpFLHlFQUF5RTtJQUF6RSxvSEFBeUU7QUFDN0U7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQix5QkFBaUI7WUFBakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDViw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQix5QkFBaUI7WUFBakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLCtDQUErQztJQUMvQyxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw2QkFBcUI7WUFBckIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICB6LWluZGV4OiAxNTAwO1xufVxuXG5saSB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5saSBhIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cblxudWwge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxudWwgPiAqIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG51bCA+ICoge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgbGluZWFyIDEwMG1zLCB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQgMTAwbXM7XG59XG5cbnVsOmhvdmVyID4gKiB7XG4gICAgb3BhY2l0eTogMC40O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICBmaWx0ZXI6IGJsdXIoMXB4KTtcbn1cblxudWwgPiAqOmhvdmVyIHtcbiAgICBsZXR0ZXItc3BhY2luZzogN3B4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBtcywgMG1zO1xuICAgIGZpbHRlcjogYmx1cigwcHgpO1xufVxuXG4uZHJvcGJ0biB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5kcm9wZG93biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZHJvcGRvd24tY29udGVudCB7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxOWQ7XG4gICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uZHJvcGRvd24tY29udGVudCBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAwLCAwLCAwKTtcbn1cblxuI2xvZ291dDpob3ZlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTk5LCAxOSwgNjQpO1xuICAgIGNvbG9yOiByZ2IoMTk5LCAxOSwgNjQpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRyYW5zaXRpb246IGFsbCA0MDBtcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiBtZWRpdW1zbGF0ZWJsdWU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDQwMG1zO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAwLCAwLCAwKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbm5hdiB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxMG1zO1xufVxuIl19 */"

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

module.exports = ".main {\r\n    width: 100%;\r\n    min-height: 100vh; /* will cover the 100% of viewport */\r\n    padding-bottom: 155px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-image: url('12.jpg');\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n}\r\n.profile {\r\n    background-image: url('profile-bg.jpg');\r\n    background-attachment: fixed;\r\n    background-position: top;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-color: #444;\r\n    width: 300px;\r\n    height: 530px;\r\n    position: relative;\r\n    bottom: 20px;\r\n    border: none;\r\n    border-radius: 20px;\r\n    box-shadow: 0 37.125px 70px -12.125px rgba(0, 0, 0, 0.2);\r\n    transition: all 0.3s;\r\n}\r\n.profileName {\r\n    background: transparent;\r\n    border: 0;\r\n    text-align: center;\r\n    padding-top: 15px;\r\n    font-style: italic;\r\n    font-size: 26px;\r\n    font-weight: 800;\r\n    color: #eee;\r\n}\r\n.card-body {\r\n    color: #eee;\r\n    padding: 15px;\r\n}\r\n.avatar {\r\n    max-width: 128px;\r\n    -webkit-transform: scale(0.95);\r\n            transform: scale(0.95);\r\n    transition: all 0.5s;\r\n    padding: 0;\r\n}\r\n.avatar:hover {\r\n    -webkit-transform: scale(1.25);\r\n            transform: scale(1.25);\r\n    box-shadow: 0 37.125px 70px -12.125px rgba(0, 0, 0, 0.2);\r\n}\r\n.profilePic {\r\n    text-align: center;\r\n}\r\n.profileInfo {\r\n    font-weight: 200;\r\n    font-size: 12px;\r\n    color: #eee;\r\n    text-align: center;\r\n    padding: 0px;\r\n}\r\n.profileInfo p {\r\n    margin: 3px;\r\n    padding: 1px;\r\n    overflow: hidden;\r\n    word-wrap: break-word;\r\n    display: inline-flex;\r\n    font-family: \"Montserrat\", sans-serif;\r\n}\r\n.title {\r\n    font-weight: bold;\r\n    font-style: italic;\r\n    letter-spacing: 2px;\r\n}\r\nhr {\r\n    padding: 0;\r\n    margin: 4px;\r\n}\r\n.actions {\r\n    background: transparent;\r\n    border: 0;\r\n    color: #fff;\r\n    display: inline-flex;\r\n}\r\n.border {\r\n    background-color: #eee;\r\n    color: black;\r\n    border: 2px solid gainsboro;\r\n    border-radius: 25px;\r\n    text-align: center;\r\n    padding: 4px !important;\r\n    opacity: 0.8;\r\n}\r\n.border:hover {\r\n    font-weight: bold;\r\n    opacity: 1;\r\n    cursor: pointer;\r\n    transition: 50ms all;\r\n}\r\n.actionFirst,\r\n.actionSecond {\r\n    width: 50%;\r\n    text-align: center;\r\n    fill: #ddd;\r\n    -webkit-transform: scale(0.8);\r\n            transform: scale(0.8);\r\n    transition: all 0.3s;\r\n    cursor: pointer;\r\n}\r\n.actionFirst:hover,\r\n.actionSecond:hover {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    fill: #fff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUIsRUFBRSxvQ0FBb0M7SUFDdkQscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLCtCQUFzRDtJQUN0RCw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx1Q0FBMkQ7SUFDM0QsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix3REFBd0Q7SUFDeEQsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qix3REFBd0Q7QUFDNUQ7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7QUFDQTs7SUFFSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDViw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25CO0FBQ0E7O0lBRUksMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgLyogd2lsbCBjb3ZlciB0aGUgMTAwJSBvZiB2aWV3cG9ydCAqL1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1NXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvMTIuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLnByb2ZpbGUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9wcm9maWxlLWJnLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDUzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMzcuMTI1cHggNzBweCAtMTIuMTI1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuLnByb2ZpbGVOYW1lIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgY29sb3I6ICNlZWU7XHJcbn1cclxuLmNhcmQtYm9keSB7XHJcbiAgICBjb2xvcjogI2VlZTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLmF2YXRhciB7XHJcbiAgICBtYXgtd2lkdGg6IDEyOHB4O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4uYXZhdGFyOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDM3LjEyNXB4IDcwcHggLTEyLjEyNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG4ucHJvZmlsZVBpYyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnByb2ZpbGVJbmZvIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI2VlZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4ucHJvZmlsZUluZm8gcCB7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4udGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcbmhyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDRweDtcclxufVxyXG4uYWN0aW9ucyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuLmJvcmRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ2FpbnNib3JvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDRweCAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcbi5ib3JkZXI6aG92ZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogNTBtcyBhbGw7XHJcbn1cclxuLmFjdGlvbkZpcnN0LFxyXG4uYWN0aW9uU2Vjb25kIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmaWxsOiAjZGRkO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmFjdGlvbkZpcnN0OmhvdmVyLFxyXG4uYWN0aW9uU2Vjb25kOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBmaWxsOiAjZmZmO1xyXG59XHJcbiJdfQ== */"

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
        this.router.navigate(["watchlists", this.userId]);
    }
    getReviews() {
        this.router.navigate(["reviews", this.userId]);
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

module.exports = ".back {\n    background-image: linear-gradient(to bottom, #65398648, #062c6d88),\n        url('2.jpg');\n    background-image: fixed;\n    background-position: center center;\n    background-size: cover;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n.registration-form {\n    width: 400px;\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translate(-50%, 0%);\n    transform: translate(-50%, 0%);\n    top: 15%;\n    background: transparent;\n}\n\n.registration-form header {\n    position: relative;\n    z-index: 4;\n    background: white;\n    padding: 20px 40px;\n    border-radius: 15px 15px 0 0;\n}\n\n.registration-form header h1 {\n    font-weight: 900;\n    letter-spacing: 1.5px;\n    color: #333;\n    font-size: 23px;\n    text-transform: uppercase;\n    margin: 0;\n}\n\n.registration-form header p {\n    word-spacing: 0px;\n    color: #9facb6;\n    font-size: 17px;\n    margin: 0;\n    margin-top: 5px;\n}\n\n.registration-form form {\n    position: relative;\n}\n\n.registration-form .input-section {\n    width: 100%;\n    position: absolute;\n    display: flex;\n    left: 50%;\n    -webkit-transform: translate(-50%, 0);\n    transform: translate(-50%, 0);\n    height: 75px;\n    border-radius: 0 0 15px 15px;\n    overflow: hidden;\n    z-index: 2;\n    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.2);\n    transition: all 0.2s ease-in;\n}\n\n.registration-form .input-section.folded {\n    width: 95%;\n    margin-top: 10px;\n    left: 50%;\n    -webkit-transform: translate(-50%, 0);\n    transform: translate(-50%, 0);\n    z-index: 1;\n}\n\n.registration-form .input-section.folded input {\n    background-color: #e9e2c0;\n}\n\n.registration-form .input-section.folded span {\n    background-color: #e9e2c0;\n}\n\n.registration-form .input-section.folded + .folded {\n    width: 90%;\n    margin-top: 20px;\n    left: 50%;\n    -webkit-transform: translate(-50%, 0);\n    transform: translate(-50%, 0);\n    z-index: 0;\n}\n\n.registration-form .input-section.folded + .folded input {\n    background-color: #e1bcef;\n}\n\n.registration-form .input-section.folded + .folded span {\n    background-color: #e1bcef;\n}\n\n.registration-form .input-section.fold-up {\n    margin-top: -75px;\n}\n\n.registration-form form input {\n    background: white;\n    color: #8f8fd6;\n    width: 80%;\n    border: 0;\n    padding: 20px 40px;\n    margin: 0;\n}\n\n.registration-form form input:focus {\n    outline: none;\n}\n\n.registration-form form input::-webkit-input-placeholder {\n    color: #8f8fd6;\n    font-weight: 100;\n}\n\n.registration-form form input::-ms-input-placeholder {\n    color: #8f8fd6;\n    font-weight: 100;\n}\n\n.registration-form form input::-moz-placeholder {\n    color: #8f8fd6;\n    font-weight: 100;\n}\n\n.registration-form form input::placeholder {\n    color: #8f8fd6;\n    font-weight: 100;\n}\n\n.animated-button {\n    width: 20%;\n    background-color: #d4d4ff;\n}\n\n.animated-button span {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    line-height: 75px;\n    text-align: center;\n    height: 75px;\n    transition: all 0.2s ease-in;\n}\n\n.animated-button span i {\n    font-size: 25px;\n    color: #9999f8;\n}\n\n.animated-button .next-button {\n    background: transparent;\n    color: #9999f8;\n    font-weight: 100;\n    width: 100%;\n    border: 0;\n}\n\n.next {\n    margin-top: -75px;\n}\n\n.success {\n    width: 100%;\n    position: absolute;\n    display: flex;\n    align-items: center;\n    left: 50%;\n    -webkit-transform: translate(-50%, 0);\n    transform: translate(-50%, 0);\n    height: 75px;\n    border-radius: 0 0 15px 15px;\n    overflow: hidden;\n    z-index: 2;\n    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.2);\n    transition: all 0.2s ease-in;\n    background: limegreen;\n    margin-top: -75px;\n}\n\n.success p {\n    color: white;\n    font-weight: 900;\n    letter-spacing: 2px;\n    font-size: 18px;\n    width: 100%;\n    text-align: center;\n}\n\n.next-button:hover {\n    cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7b0JBQ3VDO0lBQ3ZDLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztJQUNULHNDQUFzQztJQUN0Qyw4QkFBOEI7SUFDOUIsUUFBUTtJQUNSLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFNBQVM7QUFDYjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtJQUNmLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsU0FBUztJQUNULHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLDRDQUE0QztJQUM1Qyw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxxQ0FBcUM7SUFDckMsNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsVUFBVTtBQUNkOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsU0FBUztJQUNULGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFLQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUhBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxxQ0FBcUM7SUFDckMsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDViw0Q0FBNEM7SUFDNUMsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjayB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzY1Mzk4NjQ4LCAjMDYyYzZkODgpLFxuICAgICAgICB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnLzIuanBnXCIpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmVnaXN0cmF0aW9uLWZvcm0ge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgICB0b3A6IDE1JTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5yZWdpc3RyYXRpb24tZm9ybSBoZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiA0O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIGhlYWRlciBoMSB7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luOiAwO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIGhlYWRlciBwIHtcbiAgICB3b3JkLXNwYWNpbmc6IDBweDtcbiAgICBjb2xvcjogIzlmYWNiNjtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cbi5yZWdpc3RyYXRpb24tZm9ybSBmb3JtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmVnaXN0cmF0aW9uLWZvcm0gLmlucHV0LXNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgIGhlaWdodDogNzVweDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgei1pbmRleDogMjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIC5pbnB1dC1zZWN0aW9uLmZvbGRlZCB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgIHotaW5kZXg6IDE7XG59XG4ucmVnaXN0cmF0aW9uLWZvcm0gLmlucHV0LXNlY3Rpb24uZm9sZGVkIGlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllMmMwO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIC5pbnB1dC1zZWN0aW9uLmZvbGRlZCBzcGFuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllMmMwO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIC5pbnB1dC1zZWN0aW9uLmZvbGRlZCArIC5mb2xkZWQge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgICB6LWluZGV4OiAwO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIC5pbnB1dC1zZWN0aW9uLmZvbGRlZCArIC5mb2xkZWQgaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWJjZWY7XG59XG4ucmVnaXN0cmF0aW9uLWZvcm0gLmlucHV0LXNlY3Rpb24uZm9sZGVkICsgLmZvbGRlZCBzcGFuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFiY2VmO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIC5pbnB1dC1zZWN0aW9uLmZvbGQtdXAge1xuICAgIG1hcmdpbi10b3A6IC03NXB4O1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIGZvcm0gaW5wdXQge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiAjOGY4ZmQ2O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgICBtYXJnaW46IDA7XG59XG4ucmVnaXN0cmF0aW9uLWZvcm0gZm9ybSBpbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cbi5yZWdpc3RyYXRpb24tZm9ybSBmb3JtIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzhmOGZkNjtcbiAgICBmb250LXdlaWdodDogMTAwO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIGZvcm0gaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzhmOGZkNjtcbiAgICBmb250LXdlaWdodDogMTAwO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtIGZvcm0gaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM4ZjhmZDY7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbi5yZWdpc3RyYXRpb24tZm9ybSBmb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM4ZjhmZDY7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmFuaW1hdGVkLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNGZmO1xufVxuLmFuaW1hdGVkLWJ1dHRvbiBzcGFuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogNzVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG59XG4uYW5pbWF0ZWQtYnV0dG9uIHNwYW4gaSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiAjOTk5OWY4O1xufVxuLmFuaW1hdGVkLWJ1dHRvbiAubmV4dC1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjOTk5OWY4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAwO1xufVxuXG4ubmV4dCB7XG4gICAgbWFyZ2luLXRvcDogLTc1cHg7XG59XG5cbi5zdWNjZXNzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgIGhlaWdodDogNzVweDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgei1pbmRleDogMjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xuICAgIGJhY2tncm91bmQ6IGxpbWVncmVlbjtcbiAgICBtYXJnaW4tdG9wOiAtNzVweDtcbn1cbi5zdWNjZXNzIHAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5leHQtYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"

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

module.exports = ".back {\n    background-image: url('14.jpg');\n    background-attachment: fixed;\n    background-size: cover;\n    position: relative;\n    height: 100%;\n    overflow: hidden;\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 30px;\n    padding-bottom: 125px;\n    min-height: 100vh;\n    padding-bottom: 155px;\n}\n\n.container {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.container .box {\n    width: 250px;\n    border-radius: 10px;\n    background-color: white;\n    margin: 20px;\n    transition: 0.3s all ease-in-out;\n    position: relative;\n    box-shadow: 0px 0px 40px background;\n}\n\n.container .box .boxContent {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding: 15px;\n}\n\n.container .box .boxContent .icon {\n    color: #8293ff;\n    font-size: 48px;\n    padding: 15px;\n}\n\n.container .box .boxContent .title {\n    font-size: 24px;\n    color: #8293ff;\n    font-weight: bold;\n    padding: 10px;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n}\n\n.movie {\n    font-size: 24px;\n    color: #8293ff;\n    font-weight: bold;\n    padding: 10px;\n    text-transform: none;\n}\n\n.container .box .boxContent .desc {\n    color: #8293ff;\n    font-size: 15px;\n    height: 20%;\n}\n\n.container .box:hover {\n    background: linear-gradient(130deg, #503bff 0%, #8293ff 100%);\n    box-shadow: none;\n}\n\n.container .box:hover .boxContent .title,\n.container .box:hover .boxContent .icon,\n.container .box:hover .boxContent .desc {\n    color: white;\n    transition: 1s all;\n}\n\n.container .box:hover .boxContent .movie {\n    color: rgb(0, 217, 255);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXdzL3Jldmlld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUFzRDtJQUN0RCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsbUNBQW1DO0FBQ3ZDOztBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw2REFBNkQ7SUFDN0QsZ0JBQWdCO0FBQ3BCOztBQUVBOzs7SUFHSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXdzL3Jldmlld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnLzE0LmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEyNXB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNTVweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNvbnRhaW5lciAuYm94IHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNDBweCBiYWNrZ3JvdW5kO1xufVxuLmNvbnRhaW5lciAuYm94IC5ib3hDb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweDtcbn1cbi5jb250YWluZXIgLmJveCAuYm94Q29udGVudCAuaWNvbiB7XG4gICAgY29sb3I6ICM4MjkzZmY7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5jb250YWluZXIgLmJveCAuYm94Q29udGVudCAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogIzgyOTNmZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLm1vdmllIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICM4MjkzZmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLmNvbnRhaW5lciAuYm94IC5ib3hDb250ZW50IC5kZXNjIHtcbiAgICBjb2xvcjogIzgyOTNmZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgaGVpZ2h0OiAyMCU7XG59XG5cbi5jb250YWluZXIgLmJveDpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzMGRlZywgIzUwM2JmZiAwJSwgIzgyOTNmZiAxMDAlKTtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uY29udGFpbmVyIC5ib3g6aG92ZXIgLmJveENvbnRlbnQgLnRpdGxlLFxuLmNvbnRhaW5lciAuYm94OmhvdmVyIC5ib3hDb250ZW50IC5pY29uLFxuLmNvbnRhaW5lciAuYm94OmhvdmVyIC5ib3hDb250ZW50IC5kZXNjIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogMXMgYWxsO1xufVxuXG4uY29udGFpbmVyIC5ib3g6aG92ZXIgLmJveENvbnRlbnQgLm1vdmllIHtcbiAgICBjb2xvcjogcmdiKDAsIDIxNywgMjU1KTtcbn1cbiJdfQ== */"

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

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.back {\n    background-image: url('13.jpg');\n    background-size: cover;\n    position: absolute;\n    width: 100%;\n    height: 100vh;\n    overflow: auto;\n    padding-bottom: 155px;\n}\n\n.container {\n    width: 300px;\n    height: 50px;\n}\n\n.container .search {\n    position: absolute;\n    margin: auto;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 80px;\n    height: 80px;\n    background: crimson;\n    border-radius: 50%;\n    transition: all 1s;\n    z-index: 4;\n    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);\n}\n\n.container .search:hover {\n    cursor: pointer;\n}\n\n.container .search::before {\n    content: \"\";\n    position: absolute;\n    margin: auto;\n    top: 22px;\n    right: 0;\n    bottom: 0;\n    left: 22px;\n    width: 12px;\n    height: 2px;\n    background: white;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    transition: all 0.5s;\n}\n\n.container .search::after {\n    content: \"\";\n    position: absolute;\n    margin: auto;\n    top: -5px;\n    right: 0;\n    bottom: 0;\n    left: -5px;\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    border: 2px solid white;\n    transition: all 0.5s;\n}\n\n.container input[type=\"text\"] {\n    font-family: \"Inconsolata\", monospace;\n    position: absolute;\n    margin: auto;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 50px;\n    height: 50px;\n    outline: none;\n    border: none;\n    background: crimson;\n    color: white;\n    text-shadow: 0 0 10px crimson;\n    padding: 0 80px 0 20px;\n    border-radius: 30px;\n    box-shadow: 0 0 25px 0 crimson, 0 20px 25px 0 rgba(0, 0, 0, 0.2);\n    transition: all 1s;\n    opacity: 0;\n    z-index: 5;\n    font-weight: bolder;\n    letter-spacing: 0.1em;\n}\n\n.container input[type=\"text\"]:hover {\n    cursor: pointer;\n}\n\n.container input[type=\"text\"]:focus {\n    width: 300px;\n    opacity: 1;\n    cursor: text;\n}\n\n.container input[type=\"text\"]:focus ~ .search {\n    right: -250px;\n    background: #151515;\n    z-index: 6;\n}\n\n.container input[type=\"text\"]:focus ~ .search::before {\n    top: 0;\n    left: 0;\n    width: 25px;\n}\n\n.container input[type=\"text\"]:focus ~ .search::after {\n    top: 0;\n    left: 0;\n    width: 25px;\n    height: 2px;\n    border: none;\n    background: white;\n    border-radius: 0%;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n}\n\n.container input[type=\"text\"]::-webkit-input-placeholder {\n    color: white;\n    opacity: 0.5;\n    font-weight: bolder;\n}\n\n.container input[type=\"text\"]::-moz-placeholder {\n    color: white;\n    opacity: 0.5;\n    font-weight: bolder;\n}\n\n.container input[type=\"text\"]::-ms-input-placeholder {\n    color: white;\n    opacity: 0.5;\n    font-weight: bolder;\n}\n\n.container input[type=\"text\"]::placeholder {\n    color: white;\n    opacity: 0.5;\n    font-weight: bolder;\n}\n\n/* =============================================\n* RADIO BUTTONS\n=============================================== */\n\n#radios label {\n    cursor: pointer;\n    position: relative;\n    margin: auto;\n    width: 100px;\n}\n\n#radios label + label {\n    margin-left: 8px;\n}\n\ninput[type=\"radio\"] {\n    opacity: 0; /* hidden but still tabable */\n    position: absolute;\n    height: 20px;\n}\n\ninput[type=\"radio\"] + span {\n    color: #b3cefb;\n    border-radius: 100%;\n    padding: 15px;\n    transition: all 0.4s;\n    text-align: center;\n    -webkit-transition: all 0.4s;\n}\n\ninput[type=\"radio\"]:checked + span {\n    color: #d9e7fd;\n    background-color: crimson;\n    border-radius: 50%;\n    box-shadow: inset 0 0 50px rgba(194, 0, 39, 0.397),\n        /* inner white */ inset 20px 0 80px crimson,\n        /* inner left magenta short */ inset -20px 0 80px rgb(0, 119, 255),\n        /* inner right cyan short */ inset 20px 0 300px crimson,\n        /* inner left magenta broad */ inset -20px 0 300px rgb(0, 119, 255),\n        /* inner right cyan broad */ 0 0 50px rgb(221, 58, 85),\n        /* outer white */ -10px 0 80px crimson,\n        /* outer left magenta */ 10px 0 80px rgb(0, 0, 0); /* outer right cyan */\n}\n\ninput[type=\"radio\"]:focus + span {\n    color: #fff;\n}\n\n/* ================ TOOLTIPS ================= */\n\n#radios label:hover::before {\n    content: attr(for);\n    font-family: Roboto, -apple-system, sans-serif;\n    text-transform: capitalize;\n    font-size: 11px;\n    width: 100px;\n    position: absolute;\n    top: 170%;\n    left: 3px;\n    opacity: 0.75;\n    background-color: #323232;\n    color: #fff;\n    padding: 5px;\n    border-radius: 5px;\n    display: block;\n    text-transform: uppercase;\n}\n\n#radios {\n    position: relative;\n    top: 100px;\n    width: 600px;\n}\n\nbutton {\n    font-family: \"Montserrat\", sans-serif;\n    font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLCtCQUFzRDtJQUN0RCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YseUNBQXlDO0FBQzdDOztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtBQUN4Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0kscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdFQUFnRTtJQUNoRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUNBO0lBQ0ksTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUNBQXlCO1lBQXpCLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUpBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBSkE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFKQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBOztpREFFaUQ7O0FBRWpEO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVUsRUFBRSw2QkFBNkI7SUFDekMsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCOzs7Ozs7O3lEQU9xRCxFQUFFLHFCQUFxQjtBQUNoRjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQSxnREFBZ0Q7O0FBRWhEO0lBQ0ksa0JBQWtCO0lBQ2xCLDhDQUE4QztJQUM5QywwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uYmFjayB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iZy8xMy5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMTU1cHg7XG59XG5cbi5jb250YWluZXIge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4uY29udGFpbmVyIC5zZWFyY2gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBiYWNrZ3JvdW5kOiBjcmltc29uO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XG4gICAgei1pbmRleDogNDtcbiAgICBib3gtc2hhZG93OiAwIDAgMjVweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbi5jb250YWluZXIgLnNlYXJjaDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciAuc2VhcmNoOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0b3A6IDIycHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDIycHg7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLmNvbnRhaW5lciAuc2VhcmNoOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogLTVweDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogLTVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLmNvbnRhaW5lciBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgZm9udC1mYW1pbHk6IFwiSW5jb25zb2xhdGFcIiwgbW9ub3NwYWNlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBjcmltc29uO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggY3JpbXNvbjtcbiAgICBwYWRkaW5nOiAwIDgwcHggMCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDI1cHggMCBjcmltc29uLCAwIDIwcHggMjVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XG4gICAgb3BhY2l0eTogMDtcbiAgICB6LWluZGV4OiA1O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xufVxuLmNvbnRhaW5lciBpbnB1dFt0eXBlPVwidGV4dFwiXTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgY3Vyc29yOiB0ZXh0O1xufVxuLmNvbnRhaW5lciBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyB+IC5zZWFyY2gge1xuICAgIHJpZ2h0OiAtMjUwcHg7XG4gICAgYmFja2dyb3VuZDogIzE1MTUxNTtcbiAgICB6LWluZGV4OiA2O1xufVxuLmNvbnRhaW5lciBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyB+IC5zZWFyY2g6OmJlZm9yZSB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDI1cHg7XG59XG4uY29udGFpbmVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzIH4gLnNlYXJjaDo6YWZ0ZXIge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuLmNvbnRhaW5lciBpbnB1dFt0eXBlPVwidGV4dFwiXTo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4qIFJBRElPIEJVVFRPTlNcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbiNyYWRpb3MgbGFiZWwge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuI3JhZGlvcyBsYWJlbCArIGxhYmVsIHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgIG9wYWNpdHk6IDA7IC8qIGhpZGRlbiBidXQgc3RpbGwgdGFiYWJsZSAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbmlucHV0W3R5cGU9XCJyYWRpb1wiXSArIHNwYW4ge1xuICAgIGNvbG9yOiAjYjNjZWZiO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBzcGFuIHtcbiAgICBjb2xvcjogI2Q5ZTdmZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNTBweCByZ2JhKDE5NCwgMCwgMzksIDAuMzk3KSxcbiAgICAgICAgLyogaW5uZXIgd2hpdGUgKi8gaW5zZXQgMjBweCAwIDgwcHggY3JpbXNvbixcbiAgICAgICAgLyogaW5uZXIgbGVmdCBtYWdlbnRhIHNob3J0ICovIGluc2V0IC0yMHB4IDAgODBweCByZ2IoMCwgMTE5LCAyNTUpLFxuICAgICAgICAvKiBpbm5lciByaWdodCBjeWFuIHNob3J0ICovIGluc2V0IDIwcHggMCAzMDBweCBjcmltc29uLFxuICAgICAgICAvKiBpbm5lciBsZWZ0IG1hZ2VudGEgYnJvYWQgKi8gaW5zZXQgLTIwcHggMCAzMDBweCByZ2IoMCwgMTE5LCAyNTUpLFxuICAgICAgICAvKiBpbm5lciByaWdodCBjeWFuIGJyb2FkICovIDAgMCA1MHB4IHJnYigyMjEsIDU4LCA4NSksXG4gICAgICAgIC8qIG91dGVyIHdoaXRlICovIC0xMHB4IDAgODBweCBjcmltc29uLFxuICAgICAgICAvKiBvdXRlciBsZWZ0IG1hZ2VudGEgKi8gMTBweCAwIDgwcHggcmdiKDAsIDAsIDApOyAvKiBvdXRlciByaWdodCBjeWFuICovXG59XG5cbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpmb2N1cyArIHNwYW4ge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09IFRPT0xUSVBTID09PT09PT09PT09PT09PT09ICovXG5cbiNyYWRpb3MgbGFiZWw6aG92ZXI6OmJlZm9yZSB7XG4gICAgY29udGVudDogYXR0cihmb3IpO1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIC1hcHBsZS1zeXN0ZW0sIHNhbnMtc2VyaWY7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNzAlO1xuICAgIGxlZnQ6IDNweDtcbiAgICBvcGFjaXR5OiAwLjc1O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4jcmFkaW9zIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMDBweDtcbiAgICB3aWR0aDogNjAwcHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIl19 */"

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








let SearchComponent = class SearchComponent {
    constructor(fb, movieService, tvService, userService, reviewService, watchlistService) {
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
    ngOnInit() { }
    onSubmit() {
        let value = this.searchForm.value;
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
    }
};
SearchComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"] },
    { type: _services_tv_service__WEBPACK_IMPORTED_MODULE_4__["TvService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_services_review_service__WEBPACK_IMPORTED_MODULE_6__["ReviewService"] },
    { type: src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_7__["WatchlistService"] }
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
        src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_7__["WatchlistService"]])
], SearchComponent);



/***/ }),

/***/ "./src/app/components/settings/settings.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/settings/settings.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\n    background-image: url('11.jpg');\n    background-attachment: fixed;\n    background-size: cover;\n    position: relative;\n    overflow: auto;\n    height: 100%;\n    min-height: 100vh;\n    padding-bottom: 155px;\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 30px;\n}\n\np {\n    font-size: 15px;\n}\n\ninput {\n    padding: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQXNEO0lBQ3RELDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixxQ0FBcUM7SUFDckMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2sge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvMTEuanBnXCIpO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNTVweDtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5wIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbmlucHV0IHtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG4iXX0= */"

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

module.exports = ".back {\n    background-image: url('14.jpg');\n    background-attachment: fixed;\n    background-size: cover;\n    position: relative;\n    height: 100%;\n    overflow: hidden;\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 30px;\n    padding-bottom: 125px;\n    min-height: 100vh;\n    padding-bottom: 155px;\n    font-family: \"Montserrat\", sans-serif;\n}\n\n.container {\n    display: grid;\n    grid-template-rows: 1fr;\n    padding-bottom: 70px;\n}\n\nh3 {\n    font-size: 0.7em;\n}\n\nimg {\n    max-width: 100%;\n    -webkit-filter: drop-shadow(1px 1px 3px #a6a6a6);\n    filter: drop-shadow(1px 1px 3px #a6a6a6);\n}\n\n.btnPink {\n    border-radius: 10px;\n    background: linear-gradient(\n            to left,\n            rgba(190, 117, 174, 0.795) 30%,\n            rgba(133, 124, 219, 0.795) 100%\n        )\n        left bottom rgba(255, 255, 255, 0) no-repeat;\n    transition: 0.5s all;\n    padding: 7px;\n    color: white;\n}\n\n.btnPink:hover {\n    background: none;\n    border: 1px solid palevioletred;\n    border-radius: 10px;\n    color: palevioletred;\n    transition: 0.5s all;\n}\n\n/* ----- Product Section ----- */\n\n.product {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    margin: auto;\n    padding: 1em 0em;\n    padding-right: 1em;\n    min-width: 400px;\n    background-color: rgba(255, 255, 255, 0.7);\n    border-radius: 5px;\n    margin-left: 100px;\n    margin-right: 100px;\n}\n\n/* ----- Photo Section ----- */\n\n.product__photo {\n    position: relative;\n}\n\n.photo-container {\n    position: absolute;\n    left: -2em;\n    display: grid;\n    grid-template-rows: 1fr;\n    width: 100%;\n    height: 100%;\n    border-radius: 6px;\n}\n\n.photo-main img {\n    position: absolute;\n    left: 0em;\n    max-width: 100%;\n    -webkit-filter: saturate(150%) contrast(120%) hue-rotate(10deg)\n        drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));\n    filter: saturate(150%) contrast(120%) hue-rotate(10deg)\n        drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));\n}\n\n/* ----- Informations Section ----- */\n\n.product__info {\n    padding: 0.8em 0;\n}\n\n.title h1 {\n    padding-bottom: 10px;\n    color: #4c4c4c;\n    font-size: 25px;\n}\n\n.title span {\n    font-size: 0.6em;\n}\n\n.price {\n    font-weight: bold;\n    margin: 10px;\n    line-height: 1.6em;\n    font-size: 1.2em;\n}\n\n.price span {\n    font-size: 2em;\n    border-bottom: 12px solid palevioletred;\n}\n\n.description {\n    clear: left;\n    margin: 2em 0;\n}\n\n.description p {\n    margin-bottom: 1em;\n    font-size: 14px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90di90di5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQXNEO0lBQ3RELDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnREFBZ0Q7SUFDaEQsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25COzs7OztvREFLZ0Q7SUFDaEQsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtBQUN4Qjs7QUFFQSxnQ0FBZ0M7O0FBQ2hDO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBLDhCQUE4Qjs7QUFDOUI7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGVBQWU7SUFDZjtxREFDaUQ7SUFDakQ7cURBQ2lEO0FBQ3JEOztBQUVBLHFDQUFxQzs7QUFDckM7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHYvdHYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnLzE0LmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEyNXB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNTVweDtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG59XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgcGFkZGluZy1ib3R0b206IDcwcHg7XG59XG5cbmgzIHtcbiAgICBmb250LXNpemU6IDAuN2VtO1xufVxuXG5pbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDFweCAzcHggI2E2YTZhNik7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggMXB4IDNweCAjYTZhNmE2KTtcbn1cblxuLmJ0blBpbmsge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgdG8gbGVmdCxcbiAgICAgICAgICAgIHJnYmEoMTkwLCAxMTcsIDE3NCwgMC43OTUpIDMwJSxcbiAgICAgICAgICAgIHJnYmEoMTMzLCAxMjQsIDIxOSwgMC43OTUpIDEwMCVcbiAgICAgICAgKVxuICAgICAgICBsZWZ0IGJvdHRvbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIG5vLXJlcGVhdDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuUGluazpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBwYWxldmlvbGV0cmVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6IHBhbGV2aW9sZXRyZWQ7XG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGw7XG59XG5cbi8qIC0tLS0tIFByb2R1Y3QgU2VjdGlvbiAtLS0tLSAqL1xuLnByb2R1Y3Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAxZW0gMGVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XG59XG5cbi8qIC0tLS0tIFBob3RvIFNlY3Rpb24gLS0tLS0gKi9cbi5wcm9kdWN0X19waG90byB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGhvdG8tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTJlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5waG90by1tYWluIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBlbTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgLXdlYmtpdC1maWx0ZXI6IHNhdHVyYXRlKDE1MCUpIGNvbnRyYXN0KDEyMCUpIGh1ZS1yb3RhdGUoMTBkZWcpXG4gICAgICAgIGRyb3Atc2hhZG93KDFweCAyMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpKTtcbiAgICBmaWx0ZXI6IHNhdHVyYXRlKDE1MCUpIGNvbnRyYXN0KDEyMCUpIGh1ZS1yb3RhdGUoMTBkZWcpXG4gICAgICAgIGRyb3Atc2hhZG93KDFweCAyMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpKTtcbn1cblxuLyogLS0tLS0gSW5mb3JtYXRpb25zIFNlY3Rpb24gLS0tLS0gKi9cbi5wcm9kdWN0X19pbmZvIHtcbiAgICBwYWRkaW5nOiAwLjhlbSAwO1xufVxuXG4udGl0bGUgaDEge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGNvbG9yOiAjNGM0YzRjO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cbi50aXRsZSBzcGFuIHtcbiAgICBmb250LXNpemU6IDAuNmVtO1xufVxuXG4ucHJpY2Uge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMS42ZW07XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbn1cbi5wcmljZSBzcGFuIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBib3JkZXItYm90dG9tOiAxMnB4IHNvbGlkIHBhbGV2aW9sZXRyZWQ7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgY2xlYXI6IGxlZnQ7XG4gICAgbWFyZ2luOiAyZW0gMDtcbn1cbi5kZXNjcmlwdGlvbiBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuIl19 */"

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






let TvComponent = class TvComponent {
    constructor(tvService, reviewService, route, fb) {
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
    addToWatchlist() { }
};
TvComponent.ctorParameters = () => [
    { type: src_app_services_tv_service__WEBPACK_IMPORTED_MODULE_2__["TvService"] },
    { type: src_app_services_review_service__WEBPACK_IMPORTED_MODULE_4__["ReviewService"] },
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

module.exports = ".back {\n    background-image: url('14.jpg');\n    background-attachment: fixed;\n    background-size: cover;\n    position: relative;\n    height: 100%;\n    overflow: hidden;\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 30px;\n    padding-bottom: 125px;\n    min-height: 100vh;\n    padding-bottom: 155px;\n}\n\n.container {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.container .box {\n    width: 250px;\n    height: 250px;\n    border-radius: 10px;\n    background-color: white;\n    margin: 20px;\n    transition: 0.3s all ease-in-out;\n    position: relative;\n    box-shadow: 0px 0px 40px background;\n    /* Link */\n}\n\n.container .box .boxContent {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding: 15px;\n}\n\n.container .box .boxContent .icon {\n    color: #8293ff;\n    font-size: 48px;\n    padding: 15px;\n}\n\n.container .box .boxContent .title {\n    font-size: 24px;\n    color: #8293ff;\n    font-weight: bold;\n    padding: 10px;\n}\n\n.container .box .boxContent .desc {\n    color: #8293ff;\n    font-size: 15px;\n    height: 20%;\n}\n\n.container .box a {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n}\n\n.container .box:hover {\n    background: linear-gradient(130deg, #503bff 0%, #8293ff 100%);\n    box-shadow: none;\n}\n\n.container .box:hover .boxContent .title,\n.container .box:hover .boxContent .icon,\n.container .box:hover .boxContent .desc {\n    color: white;\n    transition: 1s all;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93YXRjaGxpc3RzL3dhdGNobGlzdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUFzRDtJQUN0RCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztBQUNYOztBQUNBO0lBQ0ksNkRBQTZEO0lBQzdELGdCQUFnQjtBQUNwQjs7QUFFQTs7O0lBR0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2F0Y2hsaXN0cy93YXRjaGxpc3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjayB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iZy8xNC5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMjVweDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTU1cHg7XG59XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jb250YWluZXIgLmJveCB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNDBweCBiYWNrZ3JvdW5kO1xuICAgIC8qIExpbmsgKi9cbn1cbi5jb250YWluZXIgLmJveCAuYm94Q29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG4uY29udGFpbmVyIC5ib3ggLmJveENvbnRlbnQgLmljb24ge1xuICAgIGNvbG9yOiAjODI5M2ZmO1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuLmNvbnRhaW5lciAuYm94IC5ib3hDb250ZW50IC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjODI5M2ZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4uY29udGFpbmVyIC5ib3ggLmJveENvbnRlbnQgLmRlc2Mge1xuICAgIGNvbG9yOiAjODI5M2ZmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBoZWlnaHQ6IDIwJTtcbn1cbi5jb250YWluZXIgLmJveCBhIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xufVxuLmNvbnRhaW5lciAuYm94OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTMwZGVnLCAjNTAzYmZmIDAlLCAjODI5M2ZmIDEwMCUpO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5jb250YWluZXIgLmJveDpob3ZlciAuYm94Q29udGVudCAudGl0bGUsXG4uY29udGFpbmVyIC5ib3g6aG92ZXIgLmJveENvbnRlbnQgLmljb24sXG4uY29udGFpbmVyIC5ib3g6aG92ZXIgLmJveENvbnRlbnQgLmRlc2Mge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiAxcyBhbGw7XG59XG4iXX0= */"

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

module.exports = "#background {\n    /*     position: fixed;\n    right: 0;\n    bottom: 0;\n    min-width: 100%;\n    min-height: 100%;\n    z-index: -100;\n    background-position: right center;\n    background-size: cover;\n    margin: 0 auto;\n    height: 100%; */\n\n    position: absolute;\n    top: 0;\n    -o-object-fit: cover;\n       object-fit: cover;\n    min-width: 100vw;\n    min-height: 100vh;\n    height: 100vh;\n    z-index: -1000;\n    /*     animation: slideBg 10s infinite 2s;\n    background-image: url(\"../../../assets/img/bg/1.jpg\"); */\n}\n\n@-webkit-keyframes slideBg {\n    0% {\n        background-image: url('1.jpg');\n    }\n    30% {\n        background-image: url('3.jpg');\n    }\n    60% {\n        background-image: url('4.jpg');\n    }\n    100% {\n        background-image: url('1.jpg');\n    }\n}\n\n@keyframes slideBg {\n    0% {\n        background-image: url('1.jpg');\n    }\n    30% {\n        background-image: url('3.jpg');\n    }\n    60% {\n        background-image: url('4.jpg');\n    }\n    100% {\n        background-image: url('1.jpg');\n    }\n}\n\n.nav {\n    padding-top: 50px;\n    padding-left: 60px;\n}\n\n#login {\n    padding: 10px;\n    font-weight: bold;\n    color: white;\n    letter-spacing: 5px;\n}\n\n#register {\n    border: 2px solid white;\n    border-radius: 50px;\n    padding: 10px;\n    font-weight: bold;\n    color: white;\n    font-family: \"Montserrat\", sans-serif;\n    letter-spacing: 5px;\n    margin-left: 70px;\n    box-shadow: 6px 6px 0px 0px rgba(230, 62, 66, 1);\n    -webkit-animation-name: slideBoxShadowIn;\n            animation-name: slideBoxShadowIn;\n    -webkit-animation-duration: 300ms;\n            animation-duration: 300ms;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n}\n\n#register:hover {\n    background: rgba(230, 62, 66, 1);\n    -webkit-animation-name: slideBoxShadowOut;\n            animation-name: slideBoxShadowOut;\n    -webkit-animation-duration: 300ms;\n            animation-duration: 300ms;\n    font-family: \"Montserrat\", sans-serif;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    box-shadow: none;\n}\n\n@-webkit-keyframes slideBoxShadowOut {\n    0% {\n        background: rgba(230, 62, 66, 0);\n        box-shadow: 6px 6px 0px 0px rgba(230, 62, 66, 1);\n    }\n    50% {\n        background: rgba(230, 62, 66, 0.4);\n        box-shadow: 2px 2px 0px 0px rgba(230, 62, 66, 0.5);\n    }\n    100% {\n        background: rgba(230, 62, 66, 1);\n        box-shadow: none;\n    }\n}\n\n@keyframes slideBoxShadowOut {\n    0% {\n        background: rgba(230, 62, 66, 0);\n        box-shadow: 6px 6px 0px 0px rgba(230, 62, 66, 1);\n    }\n    50% {\n        background: rgba(230, 62, 66, 0.4);\n        box-shadow: 2px 2px 0px 0px rgba(230, 62, 66, 0.5);\n    }\n    100% {\n        background: rgba(230, 62, 66, 1);\n        box-shadow: none;\n    }\n}\n\n@-webkit-keyframes slideBoxShadowIn {\n    0% {\n        box-shadow: none;\n    }\n    50% {\n        box-shadow: 2px 2px 0px 0px rgba(230, 62, 66, 0.5);\n    }\n    100% {\n        box-shadow: 6px 6px 0px 0px rgba(230, 62, 66, 1);\n    }\n}\n\n@keyframes slideBoxShadowIn {\n    0% {\n        box-shadow: none;\n    }\n    50% {\n        box-shadow: 2px 2px 0px 0px rgba(230, 62, 66, 0.5);\n    }\n    100% {\n        box-shadow: 6px 6px 0px 0px rgba(230, 62, 66, 1);\n    }\n}\n\na:hover {\n    text-decoration: none;\n}\n\n.cool-link {\n    display: inline-block;\n    color: #000;\n    text-decoration: none;\n}\n\n.cool-link::after {\n    content: \"\";\n    display: block;\n    width: 0;\n    height: 2px;\n    background: rgb(255, 255, 255);\n    transition: width 0.3s;\n}\n\n.cool-link:hover::after {\n    width: 100%;\n    transition: width 0.3s;\n}\n\n.noselect {\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\n    -moz-user-select: none; /* Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently\n                                        supported by Chrome and Opera */\n}\n\nimg {\n    max-width: 600px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJOzs7Ozs7Ozs7bUJBU2U7O0lBRWYsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGNBQWM7SUFDZDs0REFDd0Q7QUFDNUQ7O0FBRUE7SUFDSTtRQUNJLDhCQUFxRDtJQUN6RDtJQUNBO1FBQ0ksOEJBQXFEO0lBQ3pEO0lBQ0E7UUFDSSw4QkFBcUQ7SUFDekQ7SUFDQTtRQUNJLDhCQUFxRDtJQUN6RDtBQUNKOztBQWJBO0lBQ0k7UUFDSSw4QkFBcUQ7SUFDekQ7SUFDQTtRQUNJLDhCQUFxRDtJQUN6RDtJQUNBO1FBQ0ksOEJBQXFEO0lBQ3pEO0lBQ0E7UUFDSSw4QkFBcUQ7SUFDekQ7QUFDSjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBR2pCLGdEQUFnRDtJQUNoRCx3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0lBQ2hDLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsMkNBQW1DO1lBQW5DLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx5Q0FBaUM7WUFBakMsaUNBQWlDO0lBQ2pDLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIscUNBQXFDO0lBQ3JDLDBDQUFrQztZQUFsQyxrQ0FBa0M7SUFHbEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxnQ0FBZ0M7UUFHaEMsZ0RBQWdEO0lBQ3BEO0lBQ0E7UUFDSSxrQ0FBa0M7UUFHbEMsa0RBQWtEO0lBQ3REO0lBQ0E7UUFDSSxnQ0FBZ0M7UUFHaEMsZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBbkJBO0lBQ0k7UUFDSSxnQ0FBZ0M7UUFHaEMsZ0RBQWdEO0lBQ3BEO0lBQ0E7UUFDSSxrQ0FBa0M7UUFHbEMsa0RBQWtEO0lBQ3REO0lBQ0E7UUFDSSxnQ0FBZ0M7UUFHaEMsZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUdJLGdCQUFnQjtJQUNwQjtJQUNBO1FBR0ksa0RBQWtEO0lBQ3REO0lBQ0E7UUFHSSxnREFBZ0Q7SUFDcEQ7QUFDSjs7QUFoQkE7SUFDSTtRQUdJLGdCQUFnQjtJQUNwQjtJQUNBO1FBR0ksa0RBQWtEO0lBQ3REO0lBQ0E7UUFHSSxnREFBZ0Q7SUFDcEQ7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxRQUFRO0lBQ1IsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksMkJBQTJCLEVBQUUsZUFBZTtJQUM1Qyx5QkFBeUIsRUFBRSxXQUFXLEVBQ1osbUJBQW1CO0lBQzdDLHNCQUFzQixFQUFFLFlBQVk7SUFDcEMscUJBQXFCLEVBQUUsMkJBQTJCO0lBQ2xELGlCQUFpQixFQUFFO3VFQUNnRDtBQUN2RTs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja2dyb3VuZCB7XG4gICAgLyogICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogLTEwMDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7ICovXG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG1pbi13aWR0aDogMTAwdnc7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB6LWluZGV4OiAtMTAwMDtcbiAgICAvKiAgICAgYW5pbWF0aW9uOiBzbGlkZUJnIDEwcyBpbmZpbml0ZSAycztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnLzEuanBnXCIpOyAqL1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlQmcge1xuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iZy8xLmpwZ1wiKTtcbiAgICB9XG4gICAgMzAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iZy8zLmpwZ1wiKTtcbiAgICB9XG4gICAgNjAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iZy80LmpwZ1wiKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvMS5qcGdcIik7XG4gICAgfVxufVxuXG4ubmF2IHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG59XG5cbiNsb2dpbiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbn1cblxuI3JlZ2lzdGVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogNnB4IDZweCAwcHggMHB4IHJnYmEoMjMwLCA2MiwgNjYsIDEpO1xuICAgIC1tb3otYm94LXNoYWRvdzogNnB4IDZweCAwcHggMHB4IHJnYmEoMjMwLCA2MiwgNjYsIDEpO1xuICAgIGJveC1zaGFkb3c6IDZweCA2cHggMHB4IDBweCByZ2JhKDIzMCwgNjIsIDY2LCAxKTtcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVCb3hTaGFkb3dJbjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDMwMG1zO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuXG4jcmVnaXN0ZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMwLCA2MiwgNjYsIDEpO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUJveFNoYWRvd091dDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDMwMG1zO1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuQGtleWZyYW1lcyBzbGlkZUJveFNoYWRvd091dCB7XG4gICAgMCUge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzMCwgNjIsIDY2LCAwKTtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiA2cHggNnB4IDBweCAwcHggcmdiYSgyMzAsIDYyLCA2NiwgMSk7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogNnB4IDZweCAwcHggMHB4IHJnYmEoMjMwLCA2MiwgNjYsIDEpO1xuICAgICAgICBib3gtc2hhZG93OiA2cHggNnB4IDBweCAwcHggcmdiYSgyMzAsIDYyLCA2NiwgMSk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjMwLCA2MiwgNjYsIDAuNCk7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCAwcHggMHB4IHJnYmEoMjMwLCA2MiwgNjYsIDAuNSk7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCAwcHggMHB4IHJnYmEoMjMwLCA2MiwgNjYsIDAuNSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMHB4IDBweCByZ2JhKDIzMCwgNjIsIDY2LCAwLjUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMzAsIDYyLCA2NiwgMSk7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZUJveFNoYWRvd0luIHtcbiAgICAwJSB7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggMHB4IDBweCByZ2JhKDIzMCwgNjIsIDY2LCAwLjUpO1xuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDJweCAycHggMHB4IDBweCByZ2JhKDIzMCwgNjIsIDY2LCAwLjUpO1xuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDBweCAwcHggcmdiYSgyMzAsIDYyLCA2NiwgMC41KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogNnB4IDZweCAwcHggMHB4IHJnYmEoMjMwLCA2MiwgNjYsIDEpO1xuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDZweCA2cHggMHB4IDBweCByZ2JhKDIzMCwgNjIsIDY2LCAxKTtcbiAgICAgICAgYm94LXNoYWRvdzogNnB4IDZweCAwcHggMHB4IHJnYmEoMjMwLCA2MiwgNjYsIDEpO1xuICAgIH1cbn1cblxuYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29vbC1saW5rIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29vbC1saW5rOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcbn1cblxuLmNvb2wtbGluazpob3Zlcjo6YWZ0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3M7XG59XG5cbi5ub3NlbGVjdCB7XG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggKi9cbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRlZCBieSBDaHJvbWUgYW5kIE9wZXJhICovXG59XG5cbmltZyB7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbn1cbiJdfQ== */"

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
    constructor() { }
    ngOnInit() {
    }
};
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
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
    moviesInTheathers() {
        let url = "https://api.themoviedb.org/3/discover/movie?api_key=" +
            this.apiKey +
            "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019";
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
    searchByName(query) {
        let url = "https://api.themoviedb.org/3/search/movie?api_key=" +
            this.apiKey +
            "&language=en-US&query=" +
            query.toString() +
            "&page=1&include_adult=false";
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
            // TODO: OPEN SEARCH RESULT COMPONENT
            console.log(response.reviews);
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
    discoverTV() {
        let url = "https://api.themoviedb.org/3/discover/tv?api_key=" +
            this.apiKey +
            "&language=en-US&sort_by=popularity.desc&first_air_date_year=2016&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_original_language=en";
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
    searchByName(query) {
        let url = "https://api.themoviedb.org/3/search/tv?api_key=" +
            this.apiKey +
            "&language=en-US&query=" +
            query.toString() +
            "&page=1";
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
            // this.router.navigate(["welcome"]);
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
            // TODO: OPEN SEARCH RESULT COMPONENT
            console.log(response);
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("addMovieToWatchlist")));
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