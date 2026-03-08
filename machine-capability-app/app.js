const overviewGrid = document.getElementById("overview-grid");
const partsWrap = document.getElementById("parts");
const partCount = document.getElementById("partCount");
const systemFilter = document.getElementById("systemFilter");
const materialFilter = document.getElementById("materialFilter");
const search = document.getElementById("search");
const processMatrix = document.getElementById("processMatrix");

function renderOverview() {
  overviewGrid.innerHTML = machineData.overview
    .map(
      (x) => `
      <article class="card">
        <h3>${x.label}</h3>
        <strong>${x.value}</strong>
        <p>${x.note}</p>
      </article>`
    )
    .join("");
}

function setupFilters() {
  const systems = ["All systems", ...new Set(machineData.parts.map((p) => p.system))];
  const materials = ["All materials", ...new Set(machineData.parts.map((p) => p.material))];

  systemFilter.innerHTML = systems.map((s) => `<option>${s}</option>`).join("");
  materialFilter.innerHTML = materials.map((m) => `<option>${m}</option>`).join("");
}

function renderParts() {
  const systemValue = systemFilter.value;
  const materialValue = materialFilter.value;
  const query = search.value.trim().toLowerCase();

  const filtered = machineData.parts.filter((p) => {
    const bySystem = systemValue === "All systems" || p.system === systemValue;
    const byMaterial = materialValue === "All materials" || p.material === materialValue;
    const text = `${p.name} ${p.grade} ${p.use} ${p.maintenance}`.toLowerCase();
    const bySearch = !query || text.includes(query);
    return bySystem && byMaterial && bySearch;
  });

  partCount.textContent = `${filtered.length} of ${machineData.parts.length} parts shown`;

  partsWrap.innerHTML = filtered
    .map(
      (p) => `
      <article class="card">
        <h3 class="part-title">${p.name}</h3>
        <span class="pill">${p.system}</span>
        <span class="pill">${p.material}</span>
        <p><strong>Grade:</strong> ${p.grade}</p>
        <p><strong>Use:</strong> ${p.use}</p>
        <p><strong>Maintenance focus:</strong> ${p.maintenance}</p>
      </article>`
    )
    .join("");
}

function renderProcessMatrix() {
  processMatrix.innerHTML = machineData.processSuitability
    .map(
      (item) => `
      <div class="matrix-row">
        <div>
          <strong>${item.process}</strong>
          <div>${item.note}</div>
        </div>
        <div class="score">${item.score}/10</div>
      </div>`
    )
    .join("");
}

function runCalculator() {
  const partWeight = Number(document.getElementById("partWeight").value);
  const cavities = Number(document.getElementById("cavities").value);
  const cycleTime = Number(document.getElementById("cycleTime").value);
  const uptime = Number(document.getElementById("uptime").value) / 100;

  const shotWeight = partWeight * cavities;
  const safeShotWindow = "36 g to 144 g";
  const machineCompatible = shotWeight >= 36 && shotWeight <= 144;

  const hourlyCycles = 3600 / cycleTime;
  const partsPerHour = hourlyCycles * cavities * uptime;
  const kgPerHour = (partsPerHour * partWeight) / 1000;

  document.getElementById("calcResult").innerHTML = `
    <p><strong>Total shot weight:</strong> ${shotWeight.toFixed(1)} g</p>
    <p><strong>Recommended effective shot window:</strong> ${safeShotWindow}</p>
    <p><strong>Machine fit:</strong> ${machineCompatible ? "Within recommended window" : "Outside recommended window"}</p>
    <p><strong>Estimated output:</strong> ${partsPerHour.toFixed(1)} parts/hour (${kgPerHour.toFixed(2)} kg/hour)</p>
  `;
}

systemFilter.addEventListener("change", renderParts);
materialFilter.addEventListener("change", renderParts);
search.addEventListener("input", renderParts);
document.getElementById("runCalc").addEventListener("click", runCalculator);

renderOverview();
setupFilters();
renderParts();
renderProcessMatrix();
runCalculator();
