# API ROUTES

_Detailed description of all API routes._

# /api/user

| route                            | method | params                      |
| -------------------------------- | ------ | --------------------------- |
| /findAllCurrentlyWatching        | `GET`  | movieTitle                  |
| /findUserByUsername              | `GET`  | username                    |
| /getProfileData                  | `GET`  | username                    |
| /createOrUpdateBio               | `POST` | username, bio               |
| /createOrUpdateCurrentlyWatching | `POST` | username, currentlyWatching |
| /createOrUpdateFavorites         | `POST` | username, favorites         |
| /login                           | `POST` | username,password           |
| /register                        | `POST` | email,username,password     |
| /updateUsername                  | `POST` | username, newUsername       |
| /updatePassword                  | `POST` | username, password          |
| /updateAvatar                    | `POST` | username, avatarURL         |

> **Note:** favorites = {movie, tvShow, actor, genre}

# /api/review

| route                | method   | params                                     |
| -------------------- | -------- | ------------------------------------------ |
| /getCount            | `GET`    | -                                          |
| /findReviewByMovie   | `GET`    | movieTitle                                 |
| /findReviewsByAuthor | `GET`    | authorId                                   |
| /findAllReviews      | `GET`    | -                                          |
| /createReview        | `POST`   | title, movie, rating, reviewText, authorId |
| /updateReview        | `PUT`    | reviewId, title, rating, reviewText        |
| /likeReview          | `POST`   | -                                          |
| /deleteReview        | `DELETE` | reviewId                                   |

> **Note:** movie = {movieId, movieTitle}

# /api/watchlist

| route                     | method   | params                                           |
| ------------------------- | -------- | ------------------------------------------------ |
| /findWatchlistsByName     | `GET`    | title                                            |
| /findWatchlistsByAuthor   | `GET`    | authorId                                         |
| /findAllWatchlists        | `GET`    | -                                                |
| /createWatchlist          | `POST`   | title, description, authorId                     |
| /addMovieToWatchlist      | `POST`   | watchlistId, movieId, movieTitle,moviePosterPath |
| /likeWatchlist            | `POST`   | watchlistId                                      |
| /updateTitleOrDescription | `PUT`    | watchlistId,title,description                    |
| /deleteWatchlist          | `DELETE` | watchlistId                                      |
| /deleteMovieFromWatchlist | `DELETE` | watchlistId, movieId                             |
