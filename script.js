/* ---------------- DATOS DE LOS RAMOS ---------------- */
const courses = [
  /* id, nombre mostrado, requisitos (array de id) */
  /* ---- PRIMER AÑO ---- */
  {id:"DDAPEP1", title:"Destrezas & Autocuidado I", prereqs:[]},
  {id:"PFICI", title:"Proc. Físicos Clínicos I", prereqs:[]},
  {id:"PQICI", title:"Proc. Químicos Clínicos I", prereqs:[]},
  {id:"BCG", title:"Biología Celular y Genética", prereqs:[]},
  {id:"HISTOG", title:"Histología General", prereqs:[]},
  {id:"BASESANA", title:"Bases Anatómicas", prereqs:[]},

  {id:"DDAPEP2", title:"Destrezas & Autocuidado II", prereqs:["DDAPEP1"]},
  {id:"PFICII", title:"Proc. Físicos Clínicos II", prereqs:["PFICI"]},
  {id:"PQICII", title:"Proc. Químicos Clínicos II", prereqs:["PQICI"]},
  {id:"HISTOORAL", title:"Histología Oral", prereqs:["HISTOG","BCG","BASESANA"]},
  {id:"ACYC", title:"Anatomía Cara y Cuello", prereqs:["BASESANA","BCG"]},

  /* ---- SEGUNDO AÑO ---- */
  {id:"SIMI", title:"Simulaciones Prof. I", prereqs:["DDAPEP2","PQICII"]},
  {id:"PATHMICRO", title:"Patología y Microbiología", prereqs:["HISTOORAL","PFICII","ACYC"]},
  {id:"BBFISIO1", title:"Bioquímica & Fisio I", prereqs:["HISTOORAL","PFICII","ACYC"]},
  {id:"PESI", title:"Promoción Salud I", prereqs:["DDAPEP2"]},
  {id:"PSICO1", title:"Bases Psicosociales I", prereqs:["DDAPEP2"]},

  {id:"SIMII", title:"Simulaciones Prof. II", prereqs:["SIMI"]},
  {id:"SEMIO", title:"Bases Semiológicas", prereqs:["BBFISIO1","PATHMICRO"]},
  {id:"BBFISIO2", title:"Bioquímica & Fisio II", prereqs:["PATHMICRO","BBFISIO1"]},
  {id:"PESII", title:"Promoción Salud II", prereqs:["PSICO1","PESI"]},
  {id:"PSICO2", title:"Bases Psicosociales II", prereqs:["PSICO1"]},

  /* ---- TERCER AÑO ---- */
  {id:"CLNINO1", title:"Clínica Niño I", prereqs:["SIMII","SEMIO"]},
  {id:"CLADUL1", title:"Clínica Adulto I", prereqs:["SEMIO","SIMII"]},
  {id:"CLMAY1", title:"Clínica Adulto Mayor I", prereqs:["SEMIO","SIMII"]},
  {id:"ENFCTRL1", title:"Ctrl. Enfermedad I", prereqs:["BBFISIO2"]},
  {id:"GEP", title:"Gestión y Adm.", prereqs:["PESI","PESII"]},
  {id:"IFAM1", title:"Interv. Familiar I", prereqs:["PSICO2","PESII"]},

  {id:"CLNINO2", title:"Clínica Niño II", prereqs:["CLNINO1"]},
  {id:"ENFCTRL2", title:"Ctrl. Enfermedad II", prereqs:["ENFCTRL1"]},
  {id:"CLADUL2", title:"Clínica Adulto II", prereqs:[]},
  {id:"CLMAY2", title:"Clínica Adulto Mayor II", prereqs:[]},
  {id:"FARMA", title:"Farmacología", prereqs:["ENFCTRL1"]},
  {id:"IFAM2", title:"Interv. Familiar II", prereqs:[]},

  /* ---- CUARTO AÑO ---- */
  {id:"CLNINO3", title:"Clínica Niño III", prereqs:["CLNINO2"]},
  {id:"CLADUL3", title:"Clínica Adulto III", prereqs:["CLADUL2","CLMAY2","ENFCTRL2"]},
  {id:"CLMAY3", title:"Clínica Adulto Mayor III", prereqs:["CLADUL2","CLMAY2","ENFCTRL2"]},
  {id:"URG1", title:"Urgencias I", prereqs:["CLNINO2","CLADUL2","CLMAY2","FARMA"]},
  {id:"MANT1", title:"Mant. Salud I", prereqs:["IFAM2"]},
  {id:"PROY1", title:"Proyecto Inv. I", prereqs:[]},

  {id:"CLNINO32", title:"Clínica Niño III-2", prereqs:["CLNINO3"]},
  {id:"CLADUL32", title:"Clínica Adulto III-2", prereqs:["CLADUL3"]},
  {id:"CLMAY32", title:"Clínica Adulto Mayor III-2", prereqs:["CLMAY3"]},
  {id:"URG2", title:"Urgencias II", prereqs:["URG1"]},
  {id:"MANT2", title:"Mant. Salud II", prereqs:["MANT1"]},
  {id:"PROY2", title:"Proyecto Inv. II", prereqs:["PROY1"]},

  /* ---- QUINTO AÑO ---- */
  {id:"CLNINO4", title:"Clínica Niño IV", prereqs:["CLNINO32"]},
  {id:"CLADUL4", title:"Clínica Adulto IV", prereqs:["CLADUL32","CLMAY32"]},
  {id:"CLMAY4", title:"Clínica Adulto Mayor IV", prereqs:["CLADUL32","CLMAY32"]},
  {id:"CINEE1", title:"Paciente Neces. Esp. I", prereqs:["CLNINO32","CLMAY32","URG2"]},
  {id:"URG_MULTI", title:"Urgencias Multidiscip.", prereqs:["URG2","CLADUL32"]},
  {id:"MANT3", title:"Mant. Salud III", prereqs:["MANT2","CLADUL32"]},
  {id:"PROY3", title:"Proyecto Inv. III", prereqs:["PROY2"]},

  {id:"CLNINO42", title:"Clínica Niño IV-2", prereqs:["CLNINO4"]},
  {id:"CLADUL42", title:"Clínica Adulto IV-2", prereqs:["CLADUL4"]},
  {id:"CLMAY42", title:"Clínica Adulto Mayor IV-2", prereqs:["CLMAY4"]},
  {id:"CINEE2", title:"Paciente Neces. Esp. II", prereqs:["CINEE1"]},
  {id:"URG_MED", title:"Urgencias Médicas", prereqs:["URG2"]},
  {id:"MANT4", title:"Mant. Salud IV", prereqs:["MANT3"]},
  {id:"EJEPROY4", title:"Ejecutar Proy. IV", prereqs:["PROY3"]},
];

/* ------------ CREACIÓN DOM ------------ */
const grid = document.getElementById("grid");

courses.forEach(c => {
  const div = document.createElement("div");
  div.className = "course";
  div.id = c.id;
  div.textContent = c.title;

  // guardamos info extra
  div.dataset.prereqs = JSON.stringify(c.prereqs);
  div.dataset.approved = "false";

  grid.appendChild(div);
});

/* ------------- LÓGICA DE ESTADO ------------- */
function updateAvailability() {
  courses.forEach(c => {
    const el = document.getElementById(c.id);
    const prereqs = c.prereqs;
    const missing = prereqs.filter(p => !document.getElementById(p).classList.contains("approved"));
    if (missing.length === 0) {
      el.classList.add("available");
      el.style.cursor = "pointer";
      el.removeAttribute("data-tooltip");
    } else {
      el.classList.remove("available");
      el.style.cursor = "not-allowed";
      el.setAttribute("data-tooltip", "Faltan:\n• " + missing.map(id => document.getElementById(id).textContent).join("\n• "));
    }
  });
}

function toggleApproved(el) {
  if (!el.classList.contains("available")) return; // no desbloqueado
  el.classList.toggle("approved");
  el.dataset.approved = el.classList.contains("approved");

  // opcional: marcar morado si TODOS sus dependientes aprobados
  courses.forEach(c => {
    if (c.prereqs.includes(el.id)) {
      const depEl = document.getElementById(c.id);
      const stillMissing = c.prereqs.filter(p => !document.getElementById(p).classList.contains("approved"));
      if (stillMissing.length === 0 && depEl.classList.contains("approved")) {
        depEl.classList.add("dependents-done");
      }
    }
  });

  updateAvailability();
}

/* evento global */
grid.addEventListener("click", e => {
  if (e.target.classList.contains("course")) toggleApproved(e.target);
});

/* inicio */
updateAvailability();
