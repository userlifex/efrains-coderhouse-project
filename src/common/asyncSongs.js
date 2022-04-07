import { songs } from "./data/songs";

export const asyncSongs = () =>
  new Promise((res) => setTimeout(() => res(songs), 2000));
