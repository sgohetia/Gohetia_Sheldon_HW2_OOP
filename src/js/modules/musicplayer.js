export class Song {
  constructor(title, artist, src, duration, cover) {
    this.title = title;
    this.artist = artist;
    this.src = src;
    this.duration = duration;
    this.cover = cover;
  }
}

export class MusicPlayer {
  constructor(
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
  ) {
    this.audio = audioElement;
    this.playButton = playButton;
    this.nextButton = nextButton;
    this.prevButton = prevButton;
    this.listenNowButton = listenNowButton;
    this.songButtons = songButtons;
    this.titleElement = titleElement;
    this.artistElement = artistElement;
    this.coverElement = coverElement;
    this.progressBar = progressBar;
    this.progressContainer = progressContainer;
    this.currentTimeElement = currentTimeElement;
    this.durationElement = durationElement;
    this.songs = [];
    this.currentIndex = 0;
    this.isPlaying = false;

    this.addEventListeners();
  }
  addSongs(songList) {
    this.songs = songList;
    this.loadSong();
  }

  loadSong() {
    const song = this.songs[this.currentIndex];
    this.audio.src = song.src;
    this.titleElement.textContent = song.title;
    this.artistElement.textContent = song.artist;
    this.coverElement.src = song.cover;
    this.audio.addEventListener("loadedmetadata", () => {
      this.durationElement.textContent = this.formatTime(this.audio.duration);
    });
  }

  playSong() {
    this.audio.play();
    this.isPlaying = true;
    this.playButton.classList.replace("bxs-right-arrow", "bx-pause");
  }

  pauseSong() {
    this.audio.pause();
    this.isPlaying = false;
    this.playButton.classList.replace("bx-pause", "bxs-right-arrow");
  }

  togglePlay() {
    this.isPlaying ? this.pauseSong() : this.playSong();
  }

  nextSong() {
    this.currentIndex = (this.currentIndex + 1) % this.songs.length;
    this.loadSong();
    this.playSong();
  }

  prevSong() {
    this.currentIndex =
      (this.currentIndex - 1 + this.songs.length) % this.songs.length;
    this.loadSong();
    this.playSong();
  }

  playRandomSong() {
    this.currentIndex = Math.floor(Math.random() * this.songs.length);
    this.loadSong();
    this.playSong();
  }

  playSongByIndex(index) {
    this.currentIndex = index;
    this.loadSong();
    this.playSong();
  }

  updateProgressBar() {
    const progress = (this.audio.currentTime / this.audio.duration) * 100;
    this.progressBar.style.width = `${progress}%`;
    this.currentTimeElement.textContent = this.formatTime(
      this.audio.currentTime
    );
  }

  setProgress(event) {
    const width = this.progressContainer.clientWidth;
    const clickX = event.offsetX;
    const duration = this.audio.duration;
    this.audio.currentTime = (clickX / width) * duration;
  }

  formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  }

  addEventListeners() {
    this.playButton.addEventListener("click", () => this.togglePlay());
    this.nextButton.addEventListener("click", () => this.nextSong());
    this.prevButton.addEventListener("click", () => this.prevSong());
    this.listenNowButton.addEventListener("click", () => this.playRandomSong());
    this.audio.addEventListener("timeupdate", () => this.updateProgressBar());
    this.progressContainer.addEventListener("click", (event) =>
      this.setProgress(event)
    );

    this.songButtons.forEach((button, index) => {
      button.addEventListener("click", () => this.playSongByIndex(index));
    });
  }
}
