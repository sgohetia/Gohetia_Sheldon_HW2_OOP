import { Song, MusicPlayer } from "./modules/musicplayer.js";

// Select elements
const audioElement = new Audio();
const playButton = document.querySelector(".play-button");
const nextButton = document.querySelector(".bx-last-page");
const prevButton = document.querySelector(".bx-first-page");
const listenNowButton = document.querySelector(".buttons button");
const songButtons = document.querySelectorAll(".music-list .bxs-right-arrow");
const titleElement = document.querySelector(".description h3");
const artistElement = document.querySelector(".description h5");
const coverElement = document.querySelector(".song-info img");
const progressBar = document.querySelector(".active-line");
const progressContainer = document.querySelector(".progress");
const currentTimeElement = document.querySelector(".progress p:first-child");
const durationElement = document.querySelector(".progress p:last-child");

// Create MusicPlayer instance
const player = new MusicPlayer(
  audioElement,
  playButton,
  nextButton,
  prevButton,
  listenNowButton,
  songButtons,
  titleElement,
  artistElement,
  coverElement,
  progressBar,
  progressContainer,
  currentTimeElement,
  durationElement
);

// Add songs
player.addSongs([
  new Song(
    "Fight Back",
    "NEFFEX",
    "/src/audio/neffex-1.mp3",
    "03:20",
    "/src/images/song-1.png"
  ),
  new Song(
    "Marilag",
    "Dionela ",
    "/src/audio/song-5.mp3",
    "04:26",
    "/src/images/song-5.png"
  ),
  new Song(
    "Take A Look Around",
    "Limp Bizkit",
    "/src/audio/limpBizkit.mp3",
    "05:21",
    "/src/images/song-3.png"
  ),
  new Song(
    "Pananabik",
    "Morebeats, H20 Klann, Prophecee",
    "/src/audio/pananabik.mp3",
    "04:26",
    "/src/images/song-4.png"
  ),
  new Song(
    "Best Of Me",
    "NEFFEX",
    "/src/audio/neffex-2.mp3",
    "03:47",
    "/src/images/song-2.png"
  ),
]);
