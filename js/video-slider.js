let videoElement;

const clips = Array.from({ length: 16 }, (_, i) => {
  const name = `clip_${String(i).padStart(2, "0")}`;
  return {
    webm: `videos/clips/${name}.webm`,
    mp4: `videos/clips/${name}.mp4`
  };
});
let current = 0;

function loadVideo(index) {
  if (!videoElement) return;

  const clip = clips[index];

  videoElement.innerHTML = `
    <source src="${clip.webm}" type="video/webm">
    <source src="${clip.mp4}" type="video/mp4">
  `;

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