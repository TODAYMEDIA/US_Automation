const machineData = {
  overview: [
    { label: "Clamp force", value: "100 ton (980 kN)", note: "Suitable for small-to-medium parts and multi-cavity tools" },
    { label: "Tie-bar spacing", value: "420 × 420 mm", note: "Mold size compatibility baseline" },
    { label: "Max mold height", value: "450 mm", note: "Supports common production and family molds" },
    { label: "Min mold height", value: "180 mm", note: "Spacer blocks may be needed for thin molds" },
    { label: "Screw diameter", value: "38 mm", note: "General purpose engineering thermoplastics" },
    { label: "Shot volume", value: "~180 cm³", note: "Effective shot usually 20–80% of barrel volume" },
    { label: "Injection pressure", value: "Up to 2100 bar", note: "Helps fill thin walls and glass-filled compounds" },
    { label: "Plasticizing rate", value: "13–18 g/s (PP equivalent)", note: "Depends on back pressure and melt temp" },
    { label: "Dry cycle", value: "~1.2 s", note: "Mechanical movement only (no cooling/plasticizing)" },
    { label: "Power pack", value: "Servo-hydraulic 18.5–22 kW", note: "Balanced energy use and response" }
  ],
  parts: [
    {
      system: "Clamping Unit",
      name: "Stationary Platen",
      material: "Ductile Iron EN-GJS-500-7",
      grade: "Normalized + machined",
      use: "Supports fixed mold half and nozzle alignment",
      maintenance: "Check flatness and locating ring seat every 6 months"
    },
    {
      system: "Clamping Unit",
      name: "Moving Platen",
      material: "Ductile Iron EN-GJS-500-7",
      grade: "Stress-relieved",
      use: "Carries moving mold half and ejector interface",
      maintenance: "Inspect guide bush wear and platen parallelism"
    },
    {
      system: "Clamping Unit",
      name: "Tie Bars",
      material: "Alloy Steel 42CrMo4",
      grade: "QT, hard-chrome plated",
      use: "Maintains clamping stiffness and platen guidance",
      maintenance: "Monitor stretch, pitting, and lubrication condition"
    },
    {
      system: "Clamping Unit",
      name: "Toggle Link Assembly",
      material: "Forged Alloy Steel",
      grade: "42CrMo4 quenched & tempered",
      use: "Amplifies actuator motion into locking clamp force",
      maintenance: "Grease link pins and verify lock position repeatability"
    },
    {
      system: "Injection Unit",
      name: "Barrel",
      material: "Nitriding Steel SACM645",
      grade: "Gas nitrided 900-1100 HV",
      use: "Heated cylinder for melting and homogenizing polymer",
      maintenance: "Track internal wear and black speck generation"
    },
    {
      system: "Injection Unit",
      name: "Screw",
      material: "38CrMoAlA",
      grade: "Bimetallic hardfacing option",
      use: "Plasticizes, meters, and injects melt into mold",
      maintenance: "Check flight wear for abrasive filled resins"
    },
    {
      system: "Injection Unit",
      name: "Non-return Valve (Check Ring)",
      material: "Tool Steel SKD61",
      grade: "Vacuum hardened + nitrided",
      use: "Prevents melt backflow during injection",
      maintenance: "Replace when cushion instability exceeds process limits"
    },
    {
      system: "Hydraulic/Drive",
      name: "Servo Pump Motor",
      material: "Copper winding + steel frame",
      grade: "IE3/IE4 efficiency",
      use: "Demand-based hydraulic power delivery",
      maintenance: "Trend current and bearing temperature"
    },
    {
      system: "Hydraulic/Drive",
      name: "Hydraulic Manifold Block",
      material: "C45 steel",
      grade: "Precision drilled channels",
      use: "Routes pressure oil to machine motions",
      maintenance: "Leak test after valve replacement"
    },
    {
      system: "Hydraulic/Drive",
      name: "Proportional Valves",
      material: "Hardened alloy internals",
      grade: "ISO 4401 interface",
      use: "Controls velocity, pressure, and transition profiles",
      maintenance: "Oil cleanliness ISO 4406 18/16/13 or better"
    },
    {
      system: "Control & Electrical",
      name: "Machine Controller PLC",
      material: "Industrial PCB + conformal coating",
      grade: "24 VDC logic",
      use: "Executes cycle logic, alarms, and recipe management",
      maintenance: "Backup recipes and calibration annually"
    },
    {
      system: "Control & Electrical",
      name: "HMI Touch Panel",
      material: "Tempered glass + ABS housing",
      grade: "IP65 front",
      use: "Operator interface for setup and diagnostics",
      maintenance: "Validate touch response and emergency pages"
    },
    {
      system: "Heating & Cooling",
      name: "Barrel Heater Bands",
      material: "Mica/ceramic + stainless sheath",
      grade: "Up to 450°C rated",
      use: "Zone-based melt temperature control",
      maintenance: "Check insulation resistance and clamp tightness"
    },
    {
      system: "Heating & Cooling",
      name: "Thermocouples",
      material: "Type J / K",
      grade: "Mineral insulated",
      use: "Temperature feedback for PID loops",
      maintenance: "Replace drifting sensors causing overshoot"
    },
    {
      system: "Safety",
      name: "Safety Door Interlock",
      material: "Stainless actuator + polymer body",
      grade: "PL d / Cat 3",
      use: "Prevents machine motion when guard is open",
      maintenance: "Function test per shift start checklist"
    },
    {
      system: "Safety",
      name: "Emergency Stop Circuit",
      material: "Red mushroom switches + safety relay",
      grade: "SIL2 capable",
      use: "Immediate stop of hazardous motion",
      maintenance: "Record response test monthly"
    }
  ],
  processSuitability: [
    { process: "PP Houseware (thin wall)", score: 9, note: "High speed fill possible with optimized gate and cooling" },
    { process: "ABS Appliance Component", score: 8, note: "Good dimensional control with proper mold temp control" },
    { process: "PA6 GF30 Functional Part", score: 7, note: "Wear-resistant screw/check ring recommended" },
    { process: "POM Gear", score: 8, note: "Stable with careful thermal management and venting" },
    { process: "PC Optical Cover", score: 6, note: "Feasible but requires strict moisture and mold polish control" }
  ]
};
