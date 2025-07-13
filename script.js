/* ------------- Carga la malla (JSON) ----------------------------------- */
let cursos=[];
fetch("data/cursos.json")
  .then(r=>r.json())
  .then(json=>{cursos=json;render();});

/* ------------- Estado guardado ----------------------------------------- */
const state=new Set(JSON.parse(localStorage.getItem("aprobados")||"[]"));

/* ------------- Pinta el grid ------------------------------------------- */
function render(){
  const grid=document.getElementById("grid");
  grid.innerHTML="";

  cursos.forEach(c=>{
    const btn=document.createElement("div");
    btn.className="curso";
    btn.dataset.id=c.id;
    btn.textContent=c.nombre;

    const locked=c.requiere.some(id=>!state.has(id));
    if(state.has(c.id))      btn.classList.add("taken");
    else if(locked)          btn.classList.add("locked");

    /* click -------------- */
    btn.onclick=()=>{
      if(btn.classList.contains("locked")) return;      // no habilitado
      if(state.has(c.id)) state.delete(c.id);           // destacha
      else                state.add(c.id);              // tacha
      localStorage.setItem("aprobados",JSON.stringify([...state]));
      render();                                         // repinta
    };

    grid.appendChild(btn);
  });
}
