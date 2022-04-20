import { songs, categories } from "./data/songs";

const WAIT_TIME = 1500;

export const asyncSongs = () =>
  new Promise((res) => setTimeout(() => res(songs), WAIT_TIME));

export const asyncSong = (id) =>
  new Promise((res) =>
    setTimeout(() => res(songs.find((song) => song.id === id)), WAIT_TIME)
  );

export const asyncSongsByCategory = (category) =>
  new Promise((res) =>
    setTimeout(
      () =>
        res(
          category ? songs.filter((song) => song.category === category) : songs
        ),
      WAIT_TIME
    )
  );

export const asyncCategories = () =>
  new Promise((res) => setTimeout(() => res(categories), WAIT_TIME));
