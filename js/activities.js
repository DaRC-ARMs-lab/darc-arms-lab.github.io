const activities = [
  {
    title: "Robot Testing Session",
    image: "images/activities/robot-testing.jpg",
    caption: "Testing autonomous ground robots in the lab."
  },
  {
    title: "Drone Experiments",
    image: "images/activities/drone-experiments.jpg",
    caption: "Indoor experiments with aerial robotics platforms."
  },
  {
    title: "Lab Meeting",
    image: "images/activities/lab-meeting.jpg",
    caption: "Weekly research discussion and project updates."
  }
];

function renderActivities() {
  const container = document.getElementById("activities-gallery");

  if (!container) return;

  container.innerHTML = activities
    .map(
      (item) => `
        <div class="activity-card">
          <img src="${item.image}" alt="${item.title}">
          <div class="activity-content">
            <h3>${item.title}</h3>
            <p>${item.caption}</p>
          </div>
        </div>
      `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", renderActivities);