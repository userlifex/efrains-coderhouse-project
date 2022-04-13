import { songs } from "./data/songs";

export const asyncSongs = () =>
  new Promise((res) => setTimeout(() => res(songs), 2000));

export const asyncSong = (id) =>
  new Promise((res) =>
    setTimeout(() => res(songs.find((song) => song.id === id)), 2000)
  );
