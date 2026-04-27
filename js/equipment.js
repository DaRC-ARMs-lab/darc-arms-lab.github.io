const equipment = [
  {
    category: "Autonomous Vehicles",
    items: [
      {
        name: "F1TENTH Cars",
        description:
          "1/10-scale autonomous racecars used for vehicle dynamics, planning, control, and aggressive driving experiments."
      },
      {
        name: "TurtleBot Robots",
        description:
          "Indoor mobile robots for SLAM, navigation, mapping, and multi-robot coordination."
      },
      {
        name: "Roomba Platforms",
        description:
          "Low-cost ground robots for swarm behavior, distributed autonomy, and mobile robotics experiments."
      }
    ]
  },
  {
    category: "Aerial Robots",
    items: [
      {
        name: "Crazyflie 2.1 Drones",
        description:
          "Nano quadrotors for formation control, embedded autonomy, and multi-agent aerial experiments."
      },
      {
        name: "Starling 2 Drones",
        description:
          "Advanced aerial platforms for vision-based navigation, autonomous flight, and outdoor robotics research."
      }
    ]
  },
  {
    category: "Computing Infrastructure",
    items: [
      {
        name: "High-Performance PCs",
        description:
          "GPU-enabled workstations for simulation, deep learning, physics-aware modeling, and real-time control development."
      },
      {
        name: "NVIDIA Jetson Boards",
        description:
          "Embedded GPU platforms for onboard AI, real-time perception, and edge deployment of autonomous systems."
      },
      {
        name: "Raspberry Pi Systems",
        description:
          "Lightweight embedded computers for rapid prototyping, low-level control, and distributed robotics experiments."
      }
    ]
  }
];

function renderEquipment() {
  const container = document.getElementById("equipment-list");

  if (!container) return;

  container.innerHTML = equipment
    .map(
      (group) => `
        <div class="equipment-card">
          <h3>${group.category}</h3>
          <ul>
            ${group.items
              .map(
                (item) => `
                  <li>
                    <strong>${item.name}</strong>
                    <span>${item.description}</span>
                  </li>
                `
              )
              .join("")}
          </ul>
        </div>
      `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", renderEquipment);