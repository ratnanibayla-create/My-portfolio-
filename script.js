document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-audio");
  const toggle = document.getElementById("audio-toggle");

  if (!audio || !toggle) return;

  audio.volume = 0.35;
  audio.loop = true;

  const updateButton = () => {
    if (audio.paused) {
      toggle.textContent = "Play Getaway Car";
      toggle.setAttribute("aria-pressed", "false");
    } else {
      toggle.textContent = "Pause Getaway Car";
      toggle.setAttribute("aria-pressed", "true");
    }
  };

  toggle.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().catch((err) => {
        console.warn("Audio playback prevented:", err);
        toggle.textContent = "Use the audio controls to start music";
      });
    } else {
      audio.pause();
    }
  });

  audio.addEventListener("play", updateButton);
  audio.addEventListener("pause", updateButton);
  audio.addEventListener("error", () => {
    toggle.textContent = "Audio not supported in this browser";
  });

  updateButton();
});
