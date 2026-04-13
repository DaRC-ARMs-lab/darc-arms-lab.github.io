let videoElement;

const clips = Array.from({ length: 16 }, (_, i) =>
  `videos/clips/clip_${String(i).padStart(2, "0")}.mp4`
);

let current = 0;

function loadVideo(index) {
  if (!videoElement) return;
  videoElement.src = clips[index];
  videoElement.load();
  videoElement.play();
}

function changeVideo(direction) {
  current += direction;

  if (current < 0) current = clips.length - 1;
  if (current >= clips.length) current = 0;

  loadVideo(current);
}

window.addEventListener("load", () => {
  videoElement = document.querySelector(".slide-video");

  if (!videoElement) return;

  videoElement.addEventListener("ended", () => {
    changeVideo(1);
  });

  loadVideo(current);
});