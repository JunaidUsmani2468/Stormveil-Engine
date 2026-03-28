let audio = null;

export function playSound(src, volume = .5) {
  // stop previous sound
  if (audio) {
    audio.pause();
    audio = null;
  }

  audio = new Audio(src);
  audio.loop = true;
  audio.volume = volume;

  audio.play().catch(() => {
    console.log("Autoplay blocked 😅");
  });
}

export function stopSound() {
  if (audio) {
    audio.pause();
    audio = null;
  }
}