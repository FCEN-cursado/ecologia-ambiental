(() => {
  "use strict";

  const PREGUNTAS = window.PREGUNTAS;
  const TEMAS = window.TEMAS;
  const TIPOS = { mc: "Opción múltiple", vf: "Verdadero / Falso", completar: "Completar", unir: "Unir" };
  const LETRAS = "ABCDEFGH";
  const CLAVE = "eco-ambiental-progreso-v1";

  // ───── Persistencia (tolerante a fallos) ─────
  function cargar() {
    try { return JSON.parse(localStorage.getItem(CLAVE)) || {}; } catch { return {}; }
  }
  function guardar() {
    try { localStorage.setItem(CLAVE, JSON.stringify({ resultados, flashEstado, modo, tema })); } catch {}
  }

  const guardado = cargar();
  let resultados = guardado.resultados || {};   // id -> "ok" | "bad"
  let flashEstado = guardado.flashEstado || {}; // id -> "sabia" | "repasar"
  let modo = window.Estudio?.pedidoPorHash() ? "estudio" : guardado.modo || "estudio";
  let tema = guardado.tema || "todos";
  let orden = [];
  let pos = 0;
  const intentos = {};    // id -> estado de la respuesta en curso
  const permutas = {};    // id -> orden mezclado de opciones

  // ───── Utilidades ─────
  const $ = (s) => document.querySelector(s);
  const el = (tag, attrs = {}, ...hijos) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") n.className = v;
      else if (k === "html") n.innerHTML = v;
      else if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
      else if (v !== false && v != null) n.setAttribute(k, v);
    }
    for (const h of hijos.flat()) if (h != null) n.append(h);
    return n;
  };
  const mezclar = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const normalizar = (s) =>
    s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/^\.+/, "").replace(/\s+/g, " ").trim();

  function permuta(p) {
    if (!permutas[p.id]) {
      const idx = (p.opciones || p.pares).map((_, i) => i);
      permutas[p.id] = p.tipo === "vf" ? idx : mezclar(idx);
    }
    return permutas[p.id];
  }

  // ───── Filtro y orden ─────
  function filtrar() {
    if (tema === "todos") return PREGUNTAS.map((_, i) => i);
    if (tema === "errores")
      return PREGUNTAS.map((p, i) => [p, i])
        .filter(([p]) => resultados[p.id] === "bad" || flashEstado[p.id] === "repasar")
        .map(([, i]) => i);
    return PREGUNTAS.map((p, i) => [p, i]).filter(([p]) => p.tema === tema).map(([, i]) => i);
  }

  function armarFiltro() {
    const sel = $("#filtro-tema");
    sel.innerHTML = "";
    const cuenta = (t) => PREGUNTAS.filter((p) => p.tema === t).length;
    sel.append(el("option", { value: "todos" }, `Todos los temas (${PREGUNTAS.length})`));
    for (const [k, v] of Object.entries(TEMAS)) {
      if (cuenta(k)) sel.append(el("option", { value: k }, `${v} (${cuenta(k)})`));
    }
    sel.append(el("option", { value: "errores" }, "⚑ Para repasar"));
    sel.value = tema;
  }

  // ───── Render principal ─────
  function render() {
    document.querySelectorAll(".seg-btn").forEach((b) => b.classList.toggle("activo", b.dataset.modo === modo));
    document.body.classList.toggle("modo-estudio", modo === "estudio");
    const vista = $("#vista");
    vista.innerHTML = "";

    if (modo === "estudio") {
      window.Estudio.render(vista, { practicar, ampliar });
      return;
    }

    if (!orden.length) {
      vista.append(el("div", { class: "card vacio" },
        tema === "errores" ? "No hay preguntas marcadas para repasar. ¡Bien ahí!" : "No hay preguntas en este tema todavía."));
    } else {
      const p = PREGUNTAS[orden[pos]];
      vista.append(modo === "quiz" ? renderPregunta(p) : renderFlash(p));
    }
    renderProgreso();
  }

  function renderProgreso() {
    const ids = orden.map((i) => PREGUNTAS[i].id);
    const n = ids.length;
    let marcador;
    let hechas;
    if (modo === "quiz") {
      const ok = ids.filter((id) => resultados[id] === "ok").length;
      const bad = ids.filter((id) => resultados[id] === "bad").length;
      hechas = ok + bad;
      marcador = `<span>Pregunta <b>${n ? pos + 1 : 0}</b> de <b>${n}</b></span>
        <span>✓ Correctas <b>${ok}</b></span><span>✗ Incorrectas <b>${bad}</b></span>`;
    } else {
      const s = ids.filter((id) => flashEstado[id] === "sabia").length;
      const r = ids.filter((id) => flashEstado[id] === "repasar").length;
      hechas = s + r;
      marcador = `<span>Tarjeta <b>${n ? pos + 1 : 0}</b> de <b>${n}</b></span>
        <span>✓ La sabía <b>${s}</b></span><span>↻ Para repasar <b>${r}</b></span>`;
    }
    $("#marcador").innerHTML = marcador;
    $("#barra-fill").style.width = n ? `${(hechas / n) * 100}%` : "0";

    const puntos = $("#puntos");
    puntos.innerHTML = "";
    orden.forEach((i, k) => {
      const id = PREGUNTAS[i].id;
      const est = modo === "quiz" ? resultados[id] : { sabia: "ok", repasar: "bad" }[flashEstado[id]];
      puntos.append(el("button", {
        class: `punto ${est || ""} ${k === pos ? "actual" : ""}`,
        title: `Ir a la ${k + 1}`,
        onclick: () => { pos = k; render(); },
      }));
    });
    $("#btn-prev").disabled = pos <= 0;
    $("#btn-next").disabled = pos >= n - 1;
  }

  // ───── Puentes con la sección Estudiar ─────
  function practicar(t) {
    modo = "quiz";
    tema = t;
    $("#filtro-tema").value = t;
    guardar(); reordenar(); render();
    window.scrollTo({ top: 0 });
  }

  function ampliar(src, pie) {
    const cuerpo = $("#modal-cuerpo");
    cuerpo.innerHTML = "";
    cuerpo.append(el("figure", { class: "modal-fig" },
      el("img", { src, alt: "" }),
      pie ? el("figcaption", { html: pie }) : null));
    $("#modal").classList.add("lightbox");
    $("#modal").showModal();
  }

  // ───── Modo preguntas ─────
  function renderPregunta(p) {
    const est = (intentos[p.id] ||= { sel: null, valores: [], verificada: false });
    const card = el("article", { class: "card" });

    card.append(
      el("div", { class: "chips" },
        el("span", { class: "chip" }, TEMAS[p.tema]),
        el("span", { class: "chip tipo" }, TIPOS[p.tipo])),
    );

    if (p.tipo !== "completar") card.append(el("p", { class: "enunciado" }, p.enunciado));
    if (p.imagen) card.append(el("figure", { class: "fig-pregunta" }, el("img", { src: p.imagen, alt: "Figura de la pregunta" })));

    if (p.tipo === "mc" || p.tipo === "vf") card.append(uiOpciones(p, est));
    else if (p.tipo === "completar") card.append(uiCompletar(p, est));
    else if (p.tipo === "unir") card.append(uiUnir(p, est));

    if (est.verificada) card.append(feedback(p, est));

    const acciones = el("div", { class: "acciones" });
    if (!est.verificada) {
      acciones.append(el("button", { class: "btn primario", id: "btn-check", onclick: () => verificar(p) }, "Comprobar"));
    } else {
      acciones.append(el("button", {
        class: "btn", onclick: () => { delete intentos[p.id]; delete permutas[p.id]; render(); },
      }, "↺ Reintentar"));
    }
    acciones.append(el("button", { class: "btn info", onclick: () => abrirModal(p) }, "💡 Explicación y teoría"));
    card.append(acciones);
    return card;
  }

  function uiOpciones(p, est) {
    const cont = el("div", { class: `opciones ${p.tipo === "vf" ? "vf" : ""}` });
    permuta(p).forEach((idx, k) => {
      let clase = "opcion";
      if (est.verificada) {
        if (idx === p.correcta) clase += " ok";
        else if (idx === est.sel) clase += " bad";
      } else if (idx === est.sel) clase += " sel";
      cont.append(el("button", {
        class: clase,
        disabled: est.verificada,
        onclick: () => { est.sel = idx; render(); },
      }, el("span", { class: "letra" }, LETRAS[k]), el("span", {}, p.opciones[idx])));
    });
    return cont;
  }

  function uiCompletar(p, est) {
    const partes = p.enunciado.split("___");
    const cont = el("p", { class: "completar enunciado" });
    partes.forEach((txt, i) => {
      cont.append(txt);
      if (i < partes.length - 1) {
        const ok = est.verificada && esBlancoCorrecto(p, i, est.valores[i]);
        const input = el("input", {
          class: `blanco ${est.verificada ? (ok ? "ok" : "bad") : ""}`,
          type: "text", autocomplete: "off", spellcheck: "false",
          "aria-label": `Espacio ${i + 1}`,
          disabled: est.verificada,
        });
        input.value = est.valores[i] || "";
        input.addEventListener("input", (e) => { est.valores[i] = e.target.value; });
        input.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); verificar(p); } });
        cont.append(input);
        if (est.verificada && !ok) cont.append(el("span", { class: "solucion" }, ` (${p.blancos[i][0]})`));
      }
    });
    return cont;
  }

  function uiUnir(p, est) {
    const derechas = permuta(p);
    const cont = el("div", { class: "unir" });
    p.pares.forEach((par, i) => {
      const ok = est.verificada && est.valores[i] === String(i);
      const sel = el("select", { "aria-label": par.izq, disabled: est.verificada },
        el("option", { value: "" }, "Elegí…"),
        derechas.map((j) => el("option", { value: String(j) }, p.pares[j].der)));
      sel.value = est.valores[i] || "";
      sel.addEventListener("change", (e) => { est.valores[i] = e.target.value; });
      const fila = el("div", { class: `par ${est.verificada ? (ok ? "ok" : "bad") : ""}` },
        el("span", {}, par.izq), el("span", { class: "flecha" }, "→"), sel);
      if (est.verificada && !ok) fila.append(el("span", { class: "solucion" }, `Correcta: ${par.der}`));
      cont.append(fila);
    });
    return cont;
  }

  const esBlancoCorrecto = (p, i, v) => p.blancos[i].map(normalizar).includes(normalizar(v || ""));

  function puntaje(p, est) {
    if (p.tipo === "mc" || p.tipo === "vf") return { bien: +(est.sel === p.correcta), total: 1 };
    if (p.tipo === "completar") return { bien: p.blancos.filter((_, i) => esBlancoCorrecto(p, i, est.valores[i])).length, total: p.blancos.length };
    return { bien: p.pares.filter((_, i) => est.valores[i] === String(i)).length, total: p.pares.length };
  }

  function verificar(p) {
    const est = intentos[p.id];
    if ((p.tipo === "mc" || p.tipo === "vf") && est.sel == null) return;
    est.verificada = true;
    const { bien, total } = puntaje(p, est);
    resultados[p.id] = bien === total ? "ok" : "bad";
    guardar();
    render();
  }

  function feedback(p, est) {
    const { bien, total } = puntaje(p, est);
    if (bien === total) return el("div", { class: "feedback ok" }, "✓ ¡Correcto!");
    if (total > 1 && bien > 0) return el("div", { class: "feedback parcial" }, `Casi: ${bien} de ${total} bien. Revisá la explicación.`);
    return el("div", { class: "feedback bad" }, "✗ Incorrecto. Abrí la explicación para ver por qué.");
  }

  // ───── Modo flashcards ─────
  function renderFlash(p) {
    const wrap = el("div", { class: "flash-wrap" });
    const flash = el("div", { class: "flash", tabindex: "0", role: "button", "aria-label": "Dar vuelta la tarjeta" },
      el("div", { class: "card cara frente" },
        el("div", { class: "chips" }, el("span", { class: "chip" }, TEMAS[p.tema])),
        el("div", { class: "texto" }, p.flash.frente),
        el("div", { class: "pista" }, "Tocá o presioná espacio para dar vuelta")),
      el("div", { class: "card cara dorso" },
        el("div", { class: "texto" }, p.flash.dorso),
        el("div", { class: "pista" }, "Tocá para volver")),
    );
    flash.addEventListener("click", () => flash.classList.toggle("girada"));
    wrap.append(flash);

    const marcar = (v) => {
      flashEstado[p.id] = v; guardar();
      if (pos < orden.length - 1) pos++;
      render();
    };
    wrap.append(el("div", { class: "flash-acciones" },
      el("button", { class: "btn repasar", onclick: () => marcar("repasar") }, "↻ Repasar"),
      el("button", { class: "btn info", onclick: () => abrirModal(p) }, "💡 Explicación y teoría"),
      el("button", { class: "btn sabia", onclick: () => marcar("sabia") }, "✓ La sabía")));
    return wrap;
  }

  // ───── Modal de explicación ─────
  function respuestaTexto(p) {
    if (p.tipo === "mc" || p.tipo === "vf") return p.opciones[p.correcta];
    if (p.tipo === "completar") return p.blancos.map((b) => b[0]).join(" · ");
    return el("ul", {}, p.pares.map((x) => el("li", {}, `${x.izq} → ${x.der}`)));
  }

  function abrirModal(p) {
    const cuerpo = $("#modal-cuerpo");
    cuerpo.innerHTML = "";
    $("#modal").classList.remove("lightbox");
    cuerpo.append(
      el("h2", {}, "Respuesta correcta"),
      el("div", { class: "respuesta-correcta" }, respuestaTexto(p)),
      el("h2", {}, "Justificación"),
      el("p", {}, p.justificacion),
      el("h2", {}, "Contexto teórico"),
      el("div", { html: p.teoria }),
    );
    if (p.figura) {
      cuerpo.append(el("figure", { class: "modal-fig" },
        el("img", { src: p.figura, alt: "Figura de la presentación de clase", loading: "lazy" }),
        el("figcaption", {}, "Figura tomada de la presentación de clase")));
    }
    cuerpo.append(el("p", { class: "fuente" }, `📚 Fuente: ${p.fuente}`));
    $("#modal").showModal();
    $("#modal").scrollTop = 0;
  }

  // ───── Eventos globales ─────
  function reordenar(mezclado = false) {
    const base = filtrar();
    orden = mezclado ? mezclar(base) : base;
    pos = 0;
  }

  document.querySelectorAll(".seg-btn").forEach((b) =>
    b.addEventListener("click", () => { modo = b.dataset.modo; guardar(); render(); }));

  $("#filtro-tema").addEventListener("change", (e) => { tema = e.target.value; guardar(); reordenar(); render(); });
  $("#btn-mezclar").addEventListener("click", () => {
    reordenar(true);
    for (const k in permutas) delete permutas[k];
    render();
  });
  $("#btn-reset").addEventListener("click", () => {
    if (!confirm("¿Borrar todo el progreso guardado (preguntas y flashcards)?")) return;
    resultados = {}; flashEstado = {};
    for (const k in intentos) delete intentos[k];
    guardar(); reordenar(); render();
  });
  $("#btn-prev").addEventListener("click", () => { if (pos > 0) { pos--; render(); } });
  $("#btn-next").addEventListener("click", () => { if (pos < orden.length - 1) { pos++; render(); } });

  // cerrar el modal tocando el fondo
  $("#modal").addEventListener("click", (e) => { if (e.target === e.currentTarget) e.currentTarget.close(); });

  document.addEventListener("keydown", (e) => {
    if ($("#modal").open || modo === "estudio") return;
    const enCampo = ["INPUT", "SELECT", "TEXTAREA"].includes(document.activeElement?.tagName);
    if (enCampo) return;
    if (e.key === "ArrowRight") $("#btn-next").click();
    else if (e.key === "ArrowLeft") $("#btn-prev").click();
    else if (modo === "flash" && e.key === " ") { e.preventDefault(); document.querySelector(".flash")?.classList.toggle("girada"); }
    else if (modo === "quiz") {
      const k = LETRAS.indexOf(e.key.toUpperCase());
      const botones = document.querySelectorAll(".opcion:not(:disabled)");
      if (k >= 0 && botones[k]) botones[k].click();
      else if (e.key === "Enter" && document.activeElement?.tagName !== "BUTTON") $("#btn-check")?.click();
    }
  });

  // ───── Inicio ─────
  armarFiltro();
  reordenar();
  render();
})();
