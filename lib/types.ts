import { Timestamp } from 'mongodb';
import mongoose, { SortOrder } from 'mongoose';
import { Genres } from './tmdb';

export type EnvParam = string;

export type Sort = {
  [key: string]: SortOrder;
};

export type WatchlistQuery = {
  author_id?: string;
  id?: string;
  title?: object;
};

export type QueryParams = {
  authorId?: string;
  id?: string;
  title?: string;
  page?: string;
  sort?: 1 | -1;
};

type Author = {
  _id: mongoose.Types.ObjectId;
  username: string;
};

export type WatchlistType = {
  _id: mongoose.Types.ObjectId;
  description: string;
  likes: number;
  title: string;
  author_id: Author;
  movies: Array<{ _id: number; movieTitle: string; moviePosterPath: string }>;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

export type ReviewType = {
  _id: mongoose.Types.ObjectId;
  reviewText: string;
  likes: number;
  title: string;
  author_id: Author;
  movie: { _id: number; movieTitle: string; moviePosterPath: string };
  rating: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

export type MovieType = {
  id: string;
  backdrop_path: string;
  poster_path: string;
  original_title?: string;
  original_name?: string;
  overview: string;
  tagline: string;
  genres: Array<{ id: number; name: Genres }>;
};

export type ContentType = 'movie' | 'tv';
