// Sección "Apuntes": apuntes completos por unidad.
// Las unidades se cargan desde contenido/*.js, que hacen window.UNIDADES.push({...}).
//
// Esquema de una unidad:
//   id, num, tema (clave de TEMAS para "Practicar"), titulo, bajada,
//   programa (texto del contenido analítico), clases ([nombres de presentaciones]),
//   resumen (HTML: "en pocas palabras"),
//   secciones: [{ id, titulo, html }],
//   tp?: { titulo, html },
//   practica?: [{ p, r (HTML) }]   ← preguntas de repaso con respuesta modelo
//   glosario?: [[término, definición]],
//   biblio?: [texto]

window.Estudio = (() => {
  "use strict";

  const CLAVE = "eco-ambiental-estudio-v1";
  const UNIDADES = (window.UNIDADES || []).slice().sort((a, b) => a.num - b.num);

  let estado = { actual: UNIDADES[0]?.id, leidas: {} };
  try { Object.assign(estado, JSON.parse(localStorage.getItem(CLAVE)) || {}); } catch {}
  const guardar = () => { try { localStorage.setItem(CLAVE, JSON.stringify(estado)); } catch {} };

  // enlace directo a una unidad: index.html#u/sig
  const desdeHash = () => {
    const m = location.hash.match(/^#u\/([\w-]+)/);
    if (m && UNIDADES.some((u) => u.id === m[1])) estado.actual = m[1];
  };
  desdeHash();

  let busqueda = "";
  let opciones = {};

  const $ = (s, r = document) => r.querySelector(s);
  const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const textoPlano = (html) => html.replace(/<[^>]+>/g, " ");

  // índice de texto plano por unidad para la búsqueda
  const indice = Object.fromEntries(UNIDADES.map((u) => [u.id, norm([
    u.titulo, u.bajada, u.resumen,
    ...u.secciones.map((s) => s.titulo + " " + s.html),
    u.tp ? u.tp.titulo + " " + u.tp.html : "",
    ...(u.practica || []).map((x) => x.p + " " + x.r),
    ...(u.glosario || []).map(([t, d]) => t + " " + d),
  ].map(textoPlano).join(" "))]));

  function unidadActual() {
    return UNIDADES.find((u) => u.id === estado.actual) || UNIDADES[0];
  }

  // ───── Render ─────
  function render(cont, opts = {}) {
    opciones = opts;
    const u = unidadActual();
    cont.innerHTML = `
      <div class="estudio">
        <aside class="indice" aria-label="Unidades">
          <label class="buscar">
            <span aria-hidden="true">⌕</span>
            <input id="est-buscar" type="search" placeholder="Buscar en los apuntes…" value="${busqueda.replace(/"/g, "&quot;")}">
          </label>
          <ol id="est-lista" class="lista-unidades"></ol>
          <p class="avance" id="est-avance"></p>
          <p class="nota-indice">Ecorregiones de Argentina no se incluye: por ahora no se evalúa.</p>
        </aside>
        <article class="apunte" id="est-apunte"></article>
        <aside class="toc toc-lateral" id="est-toc" aria-label="Índice de la unidad"></aside>
      </div>`;
    fijarAltoCabecera();

    $("#est-buscar", cont).addEventListener("input", (e) => {
      busqueda = e.target.value;
      pintarLista(cont);
      resaltar(cont);
    });
    pintarLista(cont);
    pintarUnidad(cont, u);
  }

  function pintarLista(cont) {
    const q = norm(busqueda.trim());
    const lista = $("#est-lista", cont);
    lista.innerHTML = "";
    let visibles = 0;
    for (const u of UNIDADES) {
      const coincide = !q || indice[u.id].includes(q);
      if (!coincide) continue;
      visibles++;
      const li = document.createElement("li");
      const b = document.createElement("button");
      b.className = `item-unidad ${u.id === estado.actual ? "activa" : ""} ${estado.leidas[u.id] ? "leida" : ""}`;
      b.innerHTML = `<span class="num">${String(u.num).padStart(2, "0")}</span>
        <span class="tit">${u.titulo}</span>
        <span class="check" aria-label="${estado.leidas[u.id] ? "estudiada" : ""}">${estado.leidas[u.id] ? "✓" : ""}</span>`;
      b.addEventListener("click", () => irA(cont, u.id));
      li.append(b);
      lista.append(li);
    }
    if (!visibles) lista.innerHTML = `<li class="sin-resultados">Sin resultados para “${busqueda}”.</li>`;
    const n = Object.values(estado.leidas).filter(Boolean).length;
    $("#est-avance", cont).textContent = `${n} de ${UNIDADES.length} unidades estudiadas`;
  }

  function irA(cont, id, ancla) {
    estado.actual = id;
    guardar();
    history.replaceState(null, "", "#u/" + id);
    pintarLista(cont);
    pintarUnidad(cont, unidadActual());
    if (ancla) document.getElementById(ancla)?.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function pintarUnidad(cont, u) {
    const ap = $("#est-apunte", cont);
    const idx = UNIDADES.indexOf(u);
    const prev = UNIDADES[idx - 1];
    const next = UNIDADES[idx + 1];
    const hayPreguntas = (window.PREGUNTAS || []).some((p) => p.tema === u.tema);

    const toc = [
      ...u.secciones.map((s) => [s.id, s.titulo]),
      u.tp ? ["tp", "En el trabajo práctico"] : null,
      u.practica?.length ? ["practica", "Para practicar"] : null,
      u.glosario?.length ? ["glosario", "Glosario"] : null,
    ].filter(Boolean);

    const navToc = `
        <p>Índice unidad ${u.num}</p>
        <ol>${toc.map(([id, t]) => `<li><a href="#${id}" data-ancla="${id}">${t}</a></li>`).join("")}</ol>`;
    const lateral = $("#est-toc", cont);
    lateral.innerHTML = navToc;

    ap.innerHTML = `
      <header class="ap-cabecera">
        <p class="ap-num">Unidad ${u.num}</p>
        <h2 class="ap-titulo">${u.titulo}</h2>
        ${u.bajada ? `<p class="ap-bajada">${u.bajada}</p>` : ""}
        <div class="ap-meta">
          <div><span>Programa</span>${u.programa}</div>
          <div><span>Clases</span>${u.clases.join(" · ")}</div>
        </div>
      </header>

      <section class="resumen">
        <h3>En pocas palabras</h3>
        ${u.resumen}
      </section>

      <nav class="toc toc-inline" aria-label="Índice de la unidad">${navToc}</nav>

      ${u.secciones.map((s) => `
        <section class="ap-seccion" id="${s.id}">
          <h3>${s.titulo}</h3>
          ${s.html}
        </section>`).join("")}

      ${u.tp ? `
        <section class="ap-seccion tp" id="tp">
          <h3><span class="tag-tp">TP</span> ${u.tp.titulo}</h3>
          ${u.tp.html}
        </section>` : ""}

      ${u.practica?.length ? `
        <section class="ap-seccion" id="practica">
          <h3>Para practicar</h3>
          <p class="ayuda">Intentá responder antes de abrir cada respuesta modelo.</p>
          ${u.practica.map((x, i) => `
            <details class="practica">
              <summary><span class="pnum">${i + 1}</span>${x.p}</summary>
              <div class="respuesta">${x.r}</div>
            </details>`).join("")}
        </section>` : ""}

      ${u.glosario?.length ? `
        <section class="ap-seccion" id="glosario">
          <h3>Glosario</h3>
          <dl class="glosario">${u.glosario.map(([t, d]) => `<div><dt>${t}</dt><dd>${d}</dd></div>`).join("")}</dl>
        </section>` : ""}

      ${u.biblio?.length ? `
        <section class="ap-seccion biblio">
          <h3>Bibliografía de la unidad</h3>
          <ul>${u.biblio.map((b) => `<li>${b}</li>`).join("")}</ul>
        </section>` : ""}

      <footer class="ap-pie">
        <label class="marcar">
          <input type="checkbox" id="est-leida" ${estado.leidas[u.id] ? "checked" : ""}>
          Marcar esta unidad como estudiada
        </label>
        ${hayPreguntas ? `<button class="btn primario" id="est-practicar">Practicar este tema →</button>` : ""}
        <div class="ap-nav">
          ${prev ? `<button class="btn" data-ir="${prev.id}">← ${prev.titulo}</button>` : "<span></span>"}
          ${next ? `<button class="btn" data-ir="${next.id}">${next.titulo} →</button>` : "<span></span>"}
        </div>
      </footer>`;

    [ap, lateral].forEach((raiz) => raiz.querySelectorAll("[data-ancla]").forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById(a.dataset.ancla)?.scrollIntoView({ behavior: "smooth", block: "start" });
    })));
    seguirSeccion(ap, lateral);
    ap.querySelectorAll("[data-ir]").forEach((b) => b.addEventListener("click", () => irA(cont, b.dataset.ir)));
    ap.querySelectorAll("[data-unidad]").forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault();
      irA(cont, a.dataset.unidad, a.dataset.seccion);
    }));
    $("#est-leida", ap).addEventListener("change", (e) => {
      estado.leidas[u.id] = e.target.checked;
      guardar();
      pintarLista(cont);
    });
    $("#est-practicar", ap)?.addEventListener("click", () => opciones.practicar?.(u.tema));

    // ampliar figuras
    ap.querySelectorAll("figure.fig img").forEach((img) => {
      img.addEventListener("click", () => opciones.ampliar?.(img.src, img.closest("figure").querySelector("figcaption")?.innerHTML || ""));
    });

    resaltar(cont);
  }

  // la cabecera queda fija: su alto define el "top" de los índices y el margen de los anclajes
  let obsCabecera;
  function fijarAltoCabecera() {
    const top = document.querySelector("header.top");
    if (!top || obsCabecera) return;
    const fijar = () => document.documentElement.style.setProperty("--alto-top", top.offsetHeight + "px");
    fijar();
    obsCabecera = new ResizeObserver(fijar);
    obsCabecera.observe(top);
  }

  // marca en el índice lateral la sección que se está leyendo
  let obsSecciones;
  function seguirSeccion(ap, lateral) {
    obsSecciones?.disconnect();
    const enlaces = Object.fromEntries([...lateral.querySelectorAll("[data-ancla]")].map((a) => [a.dataset.ancla, a]));
    const visibles = new Set();
    obsSecciones = new IntersectionObserver((entradas) => {
      for (const e of entradas) e.isIntersecting ? visibles.add(e.target.id) : visibles.delete(e.target.id);
      const actual = Object.keys(enlaces).find((id) => visibles.has(id));
      if (actual) Object.entries(enlaces).forEach(([id, a]) => a.classList.toggle("activo", id === actual));
    }, { rootMargin: "-30% 0px -60% 0px" });
    ap.querySelectorAll(".ap-seccion[id]").forEach((sec) => obsSecciones.observe(sec));
  }

  // resalta coincidencias de búsqueda dentro del apunte
  function resaltar(cont) {
    const ap = $("#est-apunte", cont);
    if (!ap) return;
    ap.querySelectorAll("mark.hl").forEach((m) => m.replaceWith(document.createTextNode(m.textContent)));
    ap.normalize();
    const q = busqueda.trim();
    if (q.length < 3) return;
    const nq = norm(q);
    const walker = document.createTreeWalker(ap, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => n.parentElement.closest("script,style,summary .pnum") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT,
    });
    const nodos = [];
    while (walker.nextNode()) if (norm(walker.currentNode.textContent).includes(nq)) nodos.push(walker.currentNode);
    let primero = null;
    for (const n of nodos) {
      const t = n.textContent;
      const i = norm(t).indexOf(nq);
      const r = document.createRange();
      r.setStart(n, i);
      r.setEnd(n, i + q.length);
      const m = document.createElement("mark");
      m.className = "hl";
      r.surroundContents(m);
      m.closest("details")?.setAttribute("open", "");
      primero ||= m;
    }
    primero?.scrollIntoView({ block: "center" });
  }

  return { render, unidades: UNIDADES, pedidoPorHash: () => /^#u\//.test(location.hash) };
})();
