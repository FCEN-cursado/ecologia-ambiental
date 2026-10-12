(window.UNIDADES ||= []).push({
  id: "eia",
  num: 9,
  tema: "eia",
  titulo: "Evaluación de Impacto Ambiental",
  bajada: "El procedimiento preventivo para decidir si un proyecto es ambientalmente viable: marco legal, contenidos del estudio y métodos de valoración como la matriz de Leopold.",
  programa: "d) Uso de los recursos naturales e impacto ambiental. Evaluación e Informe de Impacto Ambiental.",
  clases: ["9 · Evaluación de Impacto Ambiental"],
  resumen: `
    <ul>
      <li>El <b>impacto ambiental</b> es cualquier cambio, adverso o beneficioso, en el ambiente que resulta de actividades humanas.</li>
      <li>La <b>EIA</b> es un procedimiento técnico-administrativo <b>preventivo</b> para identificar, predecir, evaluar y mitigar impactos <b>antes</b> de ejecutar un proyecto, para que la autoridad decida.</li>
      <li>El <b>EsIA</b> (Estudio de Impacto Ambiental) es el documento técnico que presenta el proponente. Incluye la descripción del proyecto, la línea de base, los impactos y la mitigación.</li>
      <li>La <b>matriz de Leopold</b> cruza las acciones del proyecto con los factores ambientales. En cada celda van la <b>magnitud</b> (±1-10) y la <b>importancia</b> (1-10).</li>
      <li>La jerarquía de mitigación es <b>evitar → minimizar → restaurar → compensar</b>.</li>
    </ul>`,
  secciones: [
    {
      id: "eia-conceptos",
      titulo: "Conceptos básicos",
      html: `
        <div class="idea"><b>Impacto ambiental</b>
          <p>“Cualquier cambio adverso o beneficioso en el ambiente resultante de actividades humanas” (UNEP). Ojo: también puede ser <b>positivo</b> (por ejemplo, empleo o restauración de un área).</p>
        </div>
        <p><b>Alcance:</b> los impactos afectan la <b>biodiversidad</b> (ecosistemas, hábitats, especies), la <b>calidad ambiental</b> (aire, suelo, agua superficial y subterránea, recursos naturales), las <b>actividades económicas</b> que dependen de los recursos y la <b>salud y el bienestar</b> de las comunidades cercanas.</p>
        <h4>Evaluación ambiental, EIA y EAE</h4>
        <ul>
          <li><b>Evaluación ambiental (EA):</b> el conjunto de herramientas y procedimientos de gestión que permiten tomar decisiones informadas sobre las implicancias ambientales.</li>
          <li><b>EIA:</b> se aplica a <b>proyectos</b> de obras o actividades.</li>
          <li><b>EAE</b> (Evaluación Ambiental Estratégica): se aplica a <b>políticas, planes o programas</b> gubernamentales.</li>
        </ul>
        <h4>La EIA</h4>
        <p>Es un <b>proceso sistemático</b> para identificar, predecir, evaluar y mitigar impactos ambientales antes de la ejecución de proyectos. Es un <b>procedimiento técnico-administrativo preventivo</b>, orientado a que las autoridades tomen decisiones informadas sobre la viabilidad y la gestión ambiental.</p>
        <div class="cols">
          <div class="col"><h5>Objetivos</h5><ul><li>Prevenir y minimizar impactos</li><li>Cumplir la normativa</li><li>Promover el desarrollo sustentable</li><li>Integrar lo ambiental en la planificación</li></ul></div>
          <div class="col"><h5>Características</h5><ul><li><b>Participativa:</b> comunidades y actores sociales</li><li><b>Multidisciplinaria:</b> biología, ingeniería, sociología, economía, derecho</li><li><b>Preventiva:</b> antes de ejecutar</li><li><b>Sistemática:</b> pasos y métodos estandarizados</li></ul></div>
          <div class="col"><h5>Principios (guía del TP 7)</h5><ul><li><b>Previsión y prevención</b></li><li><b>Participación pública</b></li><li><b>Ciclo de vida del proyecto:</b> construcción, operación, cierre</li></ul></div>
        </div>`,
    },
    {
      id: "eia-legal",
      titulo: "Marco legal y procedimiento",
      html: `
        <ul>
          <li><b>Ley Nacional 25.675</b> (General del Ambiente, 2002): fija los <b>presupuestos mínimos</b>. Su artículo 8 enumera los instrumentos de política ambiental, entre ellos la EIA. Su artículo 11 establece que toda obra o actividad que pueda degradar el ambiente o afectar la calidad de vida <b>debe someterse a EIA antes de ejecutarse</b>.</li>
          <li><b>Ley 5.961 de Mendoza</b> (1993): regula la EIA a nivel provincial.</li>
          <li><b>Normas sectoriales:</b> Ley de Bosques (26.331), Ley de Glaciares (26.639), normas hídricas, etc.</li>
          <li><b>Guía para la elaboración de EsIA</b> (Ministerio de Ambiente y Desarrollo Sostenible, 2023): fija los términos de referencia y requisitos mínimos. Debe incluir los efectos del cambio climático y las emisiones de GEI.</li>
        </ul>
        <h4>Etapas del procedimiento (esquema general)</h4>
        <ol class="pasos">
          <li>El proponente <b>presenta el estudio</b> (EsIA o manifestación de impacto).</li>
          <li><b>Inicio</b> del procedimiento por la autoridad ambiental.</li>
          <li><b>Dictamen técnico</b> (por una universidad u organismo científico; en Áreas Naturales Protegidas, por ejemplo, el IADIZA) y dictámenes sectoriales.</li>
          <li><b>Consulta pública.</b></li>
          <li><b>Audiencia pública.</b></li>
          <li><b>Declaración de Impacto Ambiental (DIA):</b> la autoridad aprueba (con condiciones) o rechaza el proyecto.</li>
        </ol>
        <figure class="fig chica"><img src="img/slides/eia_etapas.jpg" alt="Etapas de la EIA" loading="lazy"><figcaption>Etapas del procedimiento de EIA. (Clase 9)</figcaption></figure>
        <p><b>En Mendoza</b>, según el tipo de proyecto, la competencia es <b>provincial</b> (energía, residuos, parques industriales, hidrocarburos, infraestructura, minería, obras interjurisdiccionales) o <b>municipal</b> (barrios nuevos, centros turísticos, cementerios, apertura de calles, proyectos urbanos).</p>
        <div class="ejemplo"><b>Casos mendocinos vistos en clase</b>
          <p><b>Cerro Punta Negra</b> (Valle de Uco): hostería, resort y pistas de esquí junto a la Reserva Manzano-Portillo de Piuquenes. Se discutieron la diversidad, el riesgo geológico, las comunidades y la contaminación. <b>PSJ Cobre Mendocino</b> (Uspallata): un proyecto minero con preocupaciones sobre los acuíferos y la dimensión social.</p>
        </div>`,
    },
    {
      id: "eia-esia",
      titulo: "El Estudio de Impacto Ambiental (EsIA)",
      html: `
        <p>Es el <b>documento técnico central</b> que se presenta ante la autoridad. Lo elabora el proponente (público o privado) y es la base de la evaluación oficial.</p>
        <div class="ojo"><b>No confundir</b>
          <p><b>EIA</b> = el procedimiento completo, que conduce la autoridad. <b>EsIA</b> = el documento técnico que presenta el proponente. <b>DIA</b> = el acto administrativo final de la autoridad.</p>
        </div>
        <h4>Contenidos principales</h4>
        <ol>
          <li><b>Descripción del proyecto:</b> objetivos y justificación, responsable proponente y beneficiarios, localización, momento de ejecución y <b>ciclo de vida</b> (preparación, ejecución, operación, mantenimiento, cierre y poscierre), y los recursos naturales, sociales y culturales involucrados.</li>
          <li><b>Descripción del entorno:</b> el estado del ambiente <b>sin el proyecto</b>, el área directa y el <b>área de influencia</b> (directa e indirecta), y los sistemas biofísico, socioeconómico y cultural.</li>
          <li><b>Línea de base ambiental:</b> el relevamiento del estado actual (recursos naturales, calidad del aire, suelo y agua, biodiversidad, condiciones socioeconómicas). Es el <b>punto de referencia</b> para evaluar los impactos.</li>
          <li><b>Identificación y valoración de impactos.</b></li>
          <li><b>Medidas de mitigación</b> y plan de gestión ambiental (monitoreo, contingencias, cierre).</li>
        </ol>
        <h4>Sistemas, elementos y factores ambientales</h4>
        <ul>
          <li><b>Sistemas:</b> biofísico (integra todo), físico (abiótico), biótico (flora, fauna, ecosistemas) y socioeconómico-cultural.</li>
          <li><b>Elementos:</b> componentes medibles, como la calidad del aire, la capacidad agrológica del suelo o la calidad del agua superficial.</li>
          <li><b>Factores socioeconómicos:</b> demográficos, territoriales (uso del suelo), económicos y socioculturales (patrimonio, comunidades).</li>
        </ul>`,
    },
    {
      id: "eia-metodos",
      titulo: "Métodos de evaluación: la matriz de Leopold",
      html: `
        <div class="cols">
          <div class="col"><h5>Cualitativos</h5><ul><li>Listas de chequeo (revisión)</li><li>Cartografía en SIG (superposición de capas)</li><li>Diagramas de redes (semicuantitativos): cadenas de impactos directos e indirectos</li></ul></div>
          <div class="col"><h5>Cuantitativos</h5><ul><li><b>Matriz de Leopold</b>: magnitud e importancia</li><li><b>Conesa Fernández-Vítora</b>: índice de importancia con muchos criterios</li><li><b>Battelle-Columbus</b>: índice de calidad ambiental</li></ul></div>
        </div>
        <h4>Matriz de Leopold (1971)</h4>
        <ul>
          <li><b>Columnas:</b> ≈ 100 acciones humanas posibles. <b>Filas:</b> 88 elementos o factores del ambiente (en la clase se dijo 101 y 86; en la práctica se usa una versión <b>simplificada</b>).</li>
          <li>Evalúa simultáneamente los impactos <b>positivos y negativos</b>.</li>
          <li>Cada celda donde una acción afecta a un factor registra:
            <ul>
              <li><b>Magnitud</b> (1-10, con <b>signo</b>): la <b>intensidad</b> del cambio sobre el factor. + si es benéfico, − si es adverso. Ej.: deforestación de 5 ha = −7.</li>
              <li><b>Importancia</b> (1-10, sin signo): la <b>relevancia</b> o significancia del impacto, según su extensión, persistencia y reversibilidad. Ej.: contaminación de un acuífero local = 9, porque es irreversible.</li>
            </ul>
          </li>
          <li>Sumando por filas se ve qué <b>factor</b> es el más afectado. Sumando por columnas, qué <b>acción</b> es la más negativa. Ahí se proponen las medidas de mitigación.</li>
        </ul>
        <figure class="fig chica"><img src="img/slides/eia_leopold.jpg" alt="Métodos de evaluación de impacto" loading="lazy"><figcaption>Métodos de evaluación de impacto. (Clase 9)</figcaption></figure>
        <div class="ejemplo"><b>Ejemplo de matriz simplificada (guía del TP 7)</b>
          <div class="tabla-wrap"><table class="tabla">
            <tr><th>Acción</th><th>Agua</th><th>Suelo</th><th>Vegetación</th><th>Fauna</th><th>Aire</th><th>Población</th></tr>
            <tr><td>Desmonte</td><td></td><td></td><td>−8 / 9</td><td>−6 / 7</td><td></td><td></td></tr>
            <tr><td>Movimiento de suelos</td><td>−7 / 8</td><td>−8 / 9</td><td></td><td></td><td>−5 / 6</td><td></td></tr>
            <tr><td>Construcción de caminos</td><td></td><td>−5 / 6</td><td>−4 / 5</td><td>−4 / 4</td><td></td><td>+7 / 8</td></tr>
          </table></div>
          <p>Formato: <b>magnitud con signo / importancia</b>. El camino tiene un impacto positivo en la población (acceso), pero negativo en el suelo, la vegetación y la fauna.</p>
        </div>
        <h4>Criterios de Conesa</h4>
        <p>Signo, intensidad, extensión, momento, persistencia, reversibilidad, sinergia, acumulación, efecto (directo o indirecto), periodicidad y recuperabilidad. Se combinan en un índice de importancia.</p>
        <h4>Estrategias de control: jerarquía de mitigación</h4>
        <ol class="pasos">
          <li><b>Evitar</b> los impactos (prevención: planificación y diseño responsable, cambio de localización).</li>
          <li><b>Minimizar</b> la escala espacial o temporal de los impactos inevitables (técnicas y buenas prácticas).</li>
          <li><b>Restaurar o remediar</b> las áreas degradadas.</li>
          <li><b>Compensar</b> los impactos residuales (por ejemplo, conservar un área equivalente).</li>
        </ol>
        <p>Todo con <b>monitoreo continuo</b>, plan de cierre y evaluación posoperativa.</p>`,
    },
  ],
  tp: {
    titulo: "TP 7 · Impacto ambiental en la Reserva de la UNCuyo (piedemonte)",
    html: `
      <p><b>Proyectos posibles</b> en la Reserva Natural y Área Protegida de la UNCuyo, en el piedemonte: un camping con glamping, una extracción de áridos (minería de tercera categoría), un restaurante o un parque deportivo de montaña (mountain bike y enduro). Hay que considerar a las comunidades que habitan y visitan el piedemonte y el tránsito entre escuelas y barrios.</p>
      <ol class="pasos">
        <li><b>Análisis territorial</b> (Google Earth): delimitar la reserva y el proyecto, reconocer el <b>área de influencia directa e indirecta</b> e identificar barrios, escuelas, cultivos, áreas naturales y recreativas y ríos.</li>
        <li><b>Identificar los impactos:</b> listar las acciones del proyecto. Para cada una, los impactos directos e indirectos sobre el agua, el suelo, el aire, la vegetación, la fauna y la población. Clasificarlos por signo y valorar su magnitud (1-10) y su importancia (1-10).</li>
        <li><b>Matriz de Leopold simplificada:</b> al menos 5 acciones × 6 factores, con signo, magnitud e importancia, justificando los valores.</li>
        <li><b>Informe</b> (≤ 5 páginas): introducción (qué es el impacto y cómo se evalúa), metodología (área, mapa propio, método, fuentes), resultados (matriz justificada, impactos más relevantes) y conclusiones (los impactos más críticos y la <b>viabilidad ambiental</b> del proyecto).</li>
      </ol>
      <div class="ejemplo"><b>Pensando en el piedemonte</b>
        <p>Es un ambiente frágil: tiene suelos con <b>biocostras</b> (que el pisoteo y los vehículos destruyen, como se vio en <a href="#" data-unidad="restauracion" data-seccion="res-biocostras">restauración</a>), pendientes con riesgo de erosión hídrica y aluviones, vegetación del Monte de crecimiento lento y fauna nativa. Además, está cerca de la ciudad, con presión de urbanización, basurales e incendios. Un parque de enduro, por ejemplo, tendría impactos negativos de alta importancia sobre el suelo (compactación, erosión, pérdida de costras), la fauna (ruido) y el aire (polvo), y posiblemente positivos sobre la población (recreación, empleo).</p>
      </div>`,
  },
  practica: [
    {
      p: "¿Qué diferencia hay entre EIA, EsIA y DIA?",
      r: `<p><b>EIA:</b> el procedimiento técnico-administrativo completo, preventivo, que conduce la autoridad. <b>EsIA:</b> el documento técnico que elabora el proponente con la descripción del proyecto, la línea de base, los impactos y la mitigación. <b>DIA:</b> el acto final por el que la autoridad aprueba (con condiciones) o rechaza el proyecto.</p>`,
    },
    {
      p: "¿Qué es la línea de base ambiental y para qué sirve?",
      r: `<p>Es el relevamiento del estado actual del ambiente (físico, biótico, socioeconómico) en el área de influencia, sin el proyecto. Es el punto de referencia para predecir y luego monitorear los impactos: sin línea de base no se puede saber cuánto cambió algo.</p>`,
    },
    {
      p: "En la matriz de Leopold, ¿qué diferencia hay entre magnitud e importancia? Da un ejemplo.",
      r: `<p><b>Magnitud:</b> la intensidad del cambio sobre el factor (1-10, con signo + o −). <b>Importancia:</b> la relevancia del impacto según su extensión, persistencia y reversibilidad (1-10). Ej.: un derrame chico en un acuífero puede tener magnitud moderada (−4) pero importancia muy alta (9), porque es irreversible y afecta el agua potable.</p>`,
    },
    {
      p: "Ordená la jerarquía de mitigación y da un ejemplo de cada paso para un camping en el piedemonte.",
      r: `<p>(1) <b>Evitar:</b> no ubicar parcelas sobre cauces aluvionales ni sobre suelos con biocostras bien desarrolladas. (2) <b>Minimizar:</b> senderos delimitados, circulación vehicular restringida, iluminación baja. (3) <b>Restaurar:</b> revegetar con nativas las áreas usadas durante la obra. (4) <b>Compensar:</b> financiar la conservación o restauración de un área equivalente dentro de la reserva.</p>`,
    },
    {
      p: "¿Por qué la EIA debe considerar todo el ciclo de vida del proyecto?",
      r: `<p>Porque los impactos cambian en cada fase. En la construcción dominan el desmonte, el movimiento de suelos y el ruido. En la operación, el tránsito, los residuos y la demanda de agua. En el cierre, el abandono de infraestructura y la necesidad de restaurar. Evaluar solo una fase subestimaría los impactos.</p>`,
    },
  ],
  glosario: [
    ["Impacto ambiental", "Cambio adverso o beneficioso en el ambiente causado por actividades humanas."],
    ["EIA", "Procedimiento preventivo de evaluación de impacto ambiental de proyectos."],
    ["EAE", "Evaluación Ambiental Estratégica de políticas, planes y programas."],
    ["EsIA", "Estudio de Impacto Ambiental: el documento técnico del proponente."],
    ["DIA", "Declaración de Impacto Ambiental: la decisión de la autoridad."],
    ["Área de influencia", "Zona donde se manifiestan los impactos directos e indirectos del proyecto."],
    ["Magnitud", "Intensidad del impacto (±1-10) en la matriz de Leopold."],
    ["Importancia", "Relevancia del impacto (1-10) según su extensión, persistencia y reversibilidad."],
    ["Audiencia pública", "Instancia de participación ciudadana en el procedimiento de EIA."],
  ],
  biblio: [
    "Ministerio de Ambiente y Desarrollo Sostenible (2023). Guía para la elaboración de Estudios de Impacto Ambiental.",
    "Ley Nacional 25.675 (General del Ambiente) · Ley Provincial 5.961 (Mendoza).",
    "Leopold, L. B. et al. (1971). A procedure for evaluating environmental impact. USGS Circular 645.",
  ],
});
