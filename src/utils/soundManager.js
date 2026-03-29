let audio = null;
let lightningTimeout = null;
let activeLightnings = []; // 👈 NEW

export function playSound(src, volume = 0.5) {
  stopSound();

  audio = new Audio(src);
  audio.loop = true;
  audio.volume = Number.isFinite(volume) ? volume : 0.5;

  audio.play().catch(() => {
    console.log("Autoplay blocked 😅");
  });
}

export function playStormSound(base, lightningArr) {
  stopSound();

  audio = new Audio(base);
  audio.loop = true;
  audio.volume = 0.5;

  audio.play().catch(() => {
    console.log("🌧️ base blocked");
  });

  const triggerLightning = () => {
    const delay = Math.random() * 8000 + 2000;

    lightningTimeout = setTimeout(() => {
      const randomSrc =
        lightningArr[Math.floor(Math.random() * lightningArr.length)];

      const lightning = new Audio(randomSrc);
      lightning.volume = 1;

      // ✅ TRACK IT
      activeLightnings.push(lightning);

      lightning.play().catch(() => {
        console.log("⚡ lightning blocked");
      });

      // 🧹 CLEAN AFTER END
      lightning.onended = () => {
        activeLightnings = activeLightnings.filter(l => l !== lightning);
      };

      triggerLightning();
    }, delay);
  };

  triggerLightning();
}

export function stopSound() {
  // 🌧️ stop base
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
    audio = null;
  }

  // ⚡ stop timeout loop
  if (lightningTimeout) {
    clearTimeout(lightningTimeout);
    lightningTimeout = null;
  }

  // ⚡ STOP ALL ACTIVE LIGHTNING
  activeLightnings.forEach(l => {
    l.pause();
    l.currentTime = 0;
  });

  activeLightnings = []; // reset
}