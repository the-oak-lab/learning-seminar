document.addEventListener("DOMContentLoaded", () => {
  loadSchedule("data/spring-2026.json", "spring-2026-table");
  loadSchedule("data/fall-2025.json", "fall-2025-table");

  // Tabs
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".schedule-panel").forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });
});

/* Fetch + build */
function loadSchedule(jsonPath, tableId) {
  fetch(jsonPath)
    .then(res => res.json())
    .then(data => buildScheduleTable(tableId, data))
    .catch(err => console.error(err));
}

/* Your existing table builder (slightly generalized) */
function buildScheduleTable(tableId, data) {
  const table = document.getElementById(tableId);
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";

  const colLabels = ["Date", "Speaker", "Talk Title"];

  data.forEach(entry => {
    const tr = document.createElement("tr");

    // Date
    const dateTd = document.createElement("td");
    dateTd.dataset.label = colLabels[0];
    dateTd.textContent = entry.date || "TBA";
    tr.appendChild(dateTd);

    // Speaker
    const speakerTd = document.createElement("td");
    speakerTd.dataset.label = colLabels[1];

    if (!entry.speakers || entry.speakers.length === 0) {
      speakerTd.innerHTML = `<span class="tba">TBA</span>`;
    } else {
      speakerTd.innerHTML = `
        <div class="speaker-list">
          ${entry.speakers.map(sp => formatSpeaker(sp)).join("")}
        </div>
      `;
    }
    tr.appendChild(speakerTd);

    // Topic
    const topicTd = document.createElement("td");
    topicTd.dataset.label = colLabels[2];
    topicTd.innerHTML = entry.topic && entry.topic.trim()
      ? entry.topic
      : `<span class="tba">TBA</span>`;
    tr.appendChild(topicTd);

    tbody.appendChild(tr);
  });
}

/* Speaker formatter */
function formatSpeaker(sp) {
  const raw = (sp.name || "").trim();
  const match = raw.match(/^(.+?)\s*\((.+)\)$/);
  const name = match ? match[1] : raw;
  const role = match ? match[2] : "";

  const inner = `
    <span class="speaker-name">${name}</span>
    ${role ? `<span class="speaker-role">${role}</span>` : ""}
  `;

  if (sp.link && sp.link.trim() !== "") {
    return `
      <div class="speaker-item">
        <a class="speaker-link"
           href="${sp.link}"
           target="_blank"
           rel="noopener noreferrer">
          ${inner}
        </a>
      </div>
    `;
  }

  return `<div class="speaker-item">${inner}</div>`;
}
