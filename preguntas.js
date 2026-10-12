// Banco de preguntas — Ecología Ambiental y Regional
// Tipos: "mc" (opción múltiple), "vf" (verdadero/falso), "completar", "unir"
// Campos comunes: id, tema, tipo, enunciado, justificacion, teoria (HTML), figura?, fuente, flash {frente, dorso}

window.TEMAS = {
  escalas: "Escalas y macrosistemas",
  clima: "Clima y vegetación",
  sig: "SIG",
  teledeteccion: "Teledetección",
  paisaje: "Ecología del paisaje",
  restauracion: "Restauración",
  eia: "Impacto ambiental",
  carbono: "Créditos de carbono",
};

window.PREGUNTAS = [
  // ───────────── ESCALAS Y MACROSISTEMAS ─────────────
  {
    id: "esc-01",
    tema: "escalas",
    tipo: "unir",
    enunciado: "Uní cada proceso con la combinación de escala temporal y espacial más adecuada para estudiarlo.",
    pares: [
      { izq: "Cambio climático", der: "Décadas a siglos · global" },
      { izq: "Avance de la urbanización", der: "Años a décadas · local" },
      { izq: "Un foco de incendio puntual", der: "Días · local" },
      { izq: "Invasión de especies exóticas", der: "Años · local a regional" },
    ],
    justificacion:
      "Cada proceso tiene una escala operativa propia. El cambio climático solo se detecta en series largas (décadas a siglos) y es global, aunque sus impactos se ven a nivel regional y local. La urbanización avanza en años o décadas sobre sitios concretos. Un foco de incendio dura días y es local; si en cambio se estudia la ocurrencia de incendios, la escala pasa a ser de años a décadas y regional. Una invasión se establece y expande en años, desde un sitio hacia la región.",
    teoria: `
      <p><strong>Escala:</strong> es la dimensión espacial o temporal de un objeto o proceso. Se caracteriza por el <em>grano</em> (la unidad mínima de resolución) y la <em>extensión</em> (el área o período total que se estudia) (Cueto, 2006).</p>
      <ul>
        <li><strong>Escala cartográfica:</strong> la relación entre el mapa y la realidad. ¡Todo mapa debe tener escala!</li>
        <li><strong>Escala operativa:</strong> la escala a la que efectivamente opera un proceso: sitio → paisaje → ecorregión → regional → subcontinental → continental → global.</li>
      </ul>
      <p>Algunos procesos para pensar escalas temporales: la fotosíntesis (segundos a horas), la acumulación de C en plantas (años a décadas), la acumulación de C en suelos (siglos) y la deforestación o reforestación (años a décadas).</p>
      <p>Un <strong>patrón</strong> es una estructura espacial o temporal significativamente distinta de la aleatoria. Como se repite, permite hacer predicciones o inferencias.</p>`,
    fuente: "1 Macroecología · Parcial 2022, pregunta 1",
    flash: {
      frente: "¿Qué es la escala y con qué dos componentes se caracteriza?",
      dorso: "Es la dimensión espacial o temporal de un proceso u objeto. Se caracteriza por el grano (la resolución mínima) y la extensión (el área o período total).",
    },
  },
  {
    id: "esc-02",
    tema: "escalas",
    tipo: "mc",
    enunciado:
      "Un cambio en los cultivos del sur de EE. UU. aumenta la población de gansos migratorios, que a cientos de km degradan los humedales del norte. ¿Qué tipo de interacción de macrosistemas ilustra este caso?",
    opciones: [
      "Teleconexión",
      "Retroalimentación negativa",
      "Interacción entre escalas",
      "Variable lenta",
    ],
    correcta: 0,
    justificacion:
      "Una teleconexión conecta regiones distantes a través del movimiento de organismos, materiales, energía o información. En este caso los gansos son el vector que vincula un cambio de uso del suelo en una región con la degradación de humedales en otra, a cientos de km.",
    teoria: `
      <p><strong>Macrosistemas</strong> (Heffernan et al., 2014): son sistemas ecológicos jerárquicos con componentes biológicos, geofísicos y sociales que abarcan de cientos a miles de km. Interactúan entre sí y con componentes de escalas más gruesas y más finas.</p>
      <p><strong>Las 4 interacciones:</strong></p>
      <ol>
        <li><strong>Teleconexiones:</strong> conexiones entre regiones distantes por el movimiento de organismos, materiales, energía o información.</li>
        <li><strong>Retroalimentaciones:</strong> el efecto de un componente es aumentado (+) o disminuido (−) por otro.</li>
        <li><strong>Interacciones entre escalas:</strong> procesos de una escala interactúan con los de otra y generan dinámicas no lineales.</li>
        <li><strong>Patrones emergentes:</strong> los componentes de una escala se acumulan y producen patrones regionales (por ejemplo, degradación local → desertificación regional).</li>
      </ol>
      <p><strong>Propiedades</strong> de los macrosistemas: biocomplejidad, variables lentas y no “anómalas” (como El Niño o las sequías), heterogeneidad y conectividad (cuencas, islas) y acción humana.</p>
      <p><strong>Cómo estudiarlos:</strong> monitoreos permanentes (RedSPP, MIREN), redes de colaboradores (FluxNet, BOSQUECLIMA), imágenes satelitales (SAOCOM, Aquarius) y simulaciones numéricas (Land Surface Models).</p>`,
    fuente: "1 Macroecología · Parcial 2022, pregunta 2",
    flash: {
      frente: "¿Cuáles son las 4 interacciones en macrosistemas?",
      dorso: "1) Teleconexiones, 2) retroalimentaciones, 3) interacciones entre escalas y 4) patrones emergentes.",
    },
  },
  {
    id: "esc-03",
    tema: "escalas",
    tipo: "completar",
    enunciado:
      "Cuando el efecto de un componente es aumentado o disminuido por el efecto de otro, hablamos de una ___. Si lo amplifica es ___ y si lo atenúa es ___.",
    blancos: [
      ["retroalimentacion", "retroalimentaciones", "feedback"],
      ["positiva"],
      ["negativa"],
    ],
    justificacion:
      "Es la definición de retroalimentación que se vio en Macroecología. La positiva amplifica el cambio y puede llevar a un umbral o punto de no retorno. La negativa lo amortigua y estabiliza el sistema.",
    teoria: `
      <p><strong>Ejemplo en el Amazonas (tipping point):</strong> la deforestación reduce la evapotranspiración, por lo que llega menos vapor de agua a la atmósfera. Eso disminuye las lluvias, aumenta el estrés hídrico y la mortalidad de árboles, lo que produce más pérdida de bosque. Es una <em>retroalimentación positiva</em> que puede transformar la selva en sabana.</p>
      <p>En el caso del Amazonas visto en clase se combinan las cuatro interacciones: <em>teleconexiones</em> (clima, demanda de pasturas), <em>retroalimentaciones</em> (cobertura vegetal), <em>patrones emergentes</em> (competencia pasto-árbol) y deforestación.</p>
      <p>Otras retroalimentaciones clima-vegetación: el <strong>albedo</strong> (el suelo desnudo o la nieve reflejan más radiación) y la <strong>evapotranspiración</strong> (afecta el vapor de agua y la precipitación).</p>`,
    fuente: "1 Macroecología · 3 Diversidad funcional (interacciones biogeoquímicas)",
    flash: {
      frente: "Retroalimentación positiva vs. negativa",
      dorso: "La positiva amplifica el cambio y puede llevar a un umbral (por ejemplo, la deforestación en el Amazonas). La negativa lo amortigua y estabiliza el sistema.",
    },
  },
  {
    id: "esc-04",
    tema: "escalas",
    tipo: "mc",
    enunciado:
      "Muchos campos se degradan individualmente por sobrepastoreo. Sumados, producen desertificación a escala regional. Esto es un ejemplo de…",
    opciones: [
      "Un patrón emergente",
      "Una teleconexión",
      "Una variable lenta",
      "Un error de escala cartográfica",
    ],
    correcta: 0,
    justificacion:
      "Los componentes de una escala fina (cada campo degradado) se acumulan e interactúan, y producen un patrón a escala regional (la desertificación) que no se explica mirando un solo campo. Esa es la definición de propiedad o patrón emergente.",
    teoria: `
      <p><strong>Patrones emergentes:</strong> distintos componentes de una escala pueden interactuar y “acumularse”, produciendo patrones a escala regional, conocidos como propiedad emergente.</p>
      <p>Se relaciona con la <strong>biocomplejidad</strong>: “emergen” propiedades difíciles de explicar estudiando cada parte por separado (la conciencia en humanos, la resiliencia planetaria —Gaia— o las sociedades complejas).</p>
      <p>Ejemplo del programa: <em>degradación (local) → desertificación (regional)</em>.</p>`,
    fuente: "1 Macroecología",
    flash: {
      frente: "Dar un ejemplo de patrón emergente",
      dorso: "La degradación local por sobrepastoreo que, sumada en muchos sitios, produce desertificación regional.",
    },
  },

  // ───────────── CLIMA Y VEGETACIÓN ─────────────
  {
    id: "cli-01",
    tema: "clima",
    tipo: "vf",
    enunciado:
      "En un climograma de Walter-Lieth, cuando la curva de temperatura queda POR ENCIMA de la curva de precipitación, ese período se interpreta como húmedo.",
    imagen: "img/clima.jpg",
    opciones: ["Verdadero", "Falso"],
    correcta: 1,
    justificacion:
      "Es falso. Si la temperatura está por encima de la precipitación, el período es SECO: hay déficit hídrico, porque la evaporación y la transpiración superan a la precipitación. Cuando la precipitación está por encima de la temperatura, el período es húmedo.",
    teoria: `
      <p><strong>Climograma de Walter-Lieth:</strong></p>
      <ul>
        <li>Eje Y izquierdo: precipitación (mm). Eje Y derecho: temperatura (°C). Eje X: meses.</li>
        <li><strong>Escala relativa: 20 mm de precipitación = 10 °C</strong> (P = 2T). Así, el cruce de las curvas aproxima cuándo la demanda evaporativa supera al aporte de agua.</li>
        <li><strong>Período húmedo:</strong> la curva de P está por encima de la de T.</li>
        <li><strong>Período seco (aridez):</strong> la curva de T está por encima de la de P.</li>
        <li>Los meses con T &lt; 0 °C pueden marcarse en azul (heladas o nevadas).</li>
      </ul>
      <p><strong>Para el parcial:</strong> al unir climogramas con localidades (por ejemplo San Rafael, General Pico y Dolores), fijate en la precipitación anual total, la estacionalidad de las lluvias (verano vs. invierno), la amplitud térmica y la duración del período seco. Un clima más árido y continental, como San Rafael, se asocia a arbustales o desierto (Monte). Uno más húmedo y templado, como Dolores, se asocia a pradera o pastizal templado.</p>`,
    figura: "img/clima.jpg",
    fuente: "2 Climatograma · Parcial 2022, pregunta 6",
    flash: {
      frente: "Climograma de Walter-Lieth: ¿qué escala relaciona P y T y cómo se identifica el período seco?",
      dorso: "20 mm = 10 °C (P = 2T). El período es seco cuando la curva de T queda por encima de la de P.",
    },
  },
  {
    id: "cli-02",
    tema: "clima",
    tipo: "mc",
    enunciado:
      "Según la clasificación de Raunkiaer (1903), ¿qué forma de vida corresponde al algarrobo (Neltuma), con las yemas de renuevo ubicadas muy por encima del suelo?",
    opciones: ["Fanerófita", "Caméfita", "Hemicriptófita", "Terófita"],
    correcta: 0,
    justificacion:
      "Raunkiaer clasifica las plantas según la posición de sus yemas de renuevo durante la estación desfavorable. El algarrobo es un árbol con yemas en ramas altas, expuestas: es una fanerófita.",
    teoria: `
      <p><strong>Formas de vida de Raunkiaer</strong> (según la ubicación de las yemas):</p>
      <ul>
        <li><strong>Fanerófitas:</strong> yemas altas, en árboles y arbustos. Ej.: algarrobo (<em>Neltuma</em>).</li>
        <li><strong>Caméfitas:</strong> yemas cerca del suelo, como plantas en cojín. Ej.: yareta (<em>Azorella</em>).</li>
        <li><strong>Hemicriptófitas:</strong> yemas en la superficie del suelo, como muchas gramíneas en mata. Ej.: <em>Aristida mendocina</em>.</li>
        <li><strong>Criptófitas / geófitas:</strong> yemas bajo el suelo (bulbos, rizomas).</li>
        <li><strong>Terófitas:</strong> plantas anuales que pasan la estación desfavorable como semilla. Abundan en desiertos.</li>
        <li><strong>Hidrófitas:</strong> yemas bajo el agua.</li>
      </ul>
      <p>Es un ejemplo de <strong>atributo funcional</strong> (morfológico/fenológico) que relaciona la forma de vida con el clima: cuanto más riguroso es el clima, más protegidas están las yemas.</p>`,
    figura: "img/raunk.jpg",
    fuente: "3 Diversidad funcional",
    flash: {
      frente: "Raunkiaer: algarrobo, yareta y Aristida mendocina",
      dorso: "Algarrobo → fanerófita. Yareta (Azorella) → caméfita. Aristida mendocina → hemicriptófita.",
    },
  },
  {
    id: "cli-03",
    tema: "clima",
    tipo: "mc",
    enunciado:
      "Según el triángulo de Grime (1974), ¿qué estrategia representa mejor Salsola kali (cardo ruso), una anual que coloniza rápidamente suelos disturbados y produce muchas semillas?",
    opciones: [
      "Ruderal (R)",
      "Competidora (C)",
      "Tolerante al estrés (S)",
      "Competidora-tolerante al estrés (C-S)",
    ],
    correcta: 0,
    justificacion:
      "Las ruderales prosperan donde el disturbio es alto y el estrés bajo: tienen ciclo de vida corto, crecimiento rápido y gran producción de semillas. El cardo ruso coloniza banquinas, campos arados y sitios disturbados.",
    teoria: `
      <p><strong>Triángulo de Grime:</strong> combina 3 limitantes (estrés, disturbios y competencia) y define tres estrategias:</p>
      <ul>
        <li><strong>C – Competidora:</strong> bajo estrés y bajo disturbio. Plantas grandes, de crecimiento vigoroso, que acaparan recursos. Ej.: cortadera.</li>
        <li><strong>S – Tolerante al estrés:</strong> mucho estrés (sequía, frío, pocos nutrientes) y poco disturbio. Crecimiento lento y tejidos duraderos. Ej.: <em>Trichocereus candicans</em> (cactus).</li>
        <li><strong>R – Ruderal:</strong> mucho disturbio y poco estrés. Ciclo corto y muchas semillas. Ej.: <em>Salsola kali</em>.</li>
      </ul>
      <p>Con alto estrés y alto disturbio a la vez no hay estrategia viable, por eso no existe un vértice para esa combinación.</p>
      <p><strong>Valor de la diversidad funcional:</strong> otorga mayor resiliencia al sistema y aumenta los servicios ecosistémicos. Se estima con índices como el de Rao.</p>`,
    figura: "img/grime.jpg",
    fuente: "3 Diversidad funcional",
    flash: {
      frente: "¿Cuáles son las tres estrategias de Grime y qué condiciones favorecen a cada una?",
      dorso: "C (competidora): poco estrés y poco disturbio. S (tolerante al estrés): mucho estrés. R (ruderal): mucho disturbio.",
    },
  },
  {
    id: "cli-04",
    tema: "clima",
    tipo: "mc",
    enunciado: "¿Qué variables utiliza el sistema de Zonas de Vida de Holdridge (1947) para clasificar la vegetación?",
    opciones: [
      "Biotemperatura, precipitación y humedad (relación ETP/PPT)",
      "Temperatura del mes más frío, radiación y latitud",
      "Tipo de suelo, altitud y régimen de fuego",
      "Solo la precipitación anual y su estacionalidad",
    ],
    correcta: 0,
    justificacion:
      "Holdridge clasifica las zonas de vida a partir de la biotemperatura (la temperatura útil para el crecimiento, entre 0 y 30 °C), la precipitación y la humedad, expresada como la relación entre la evapotranspiración potencial y la precipitación.",
    teoria: `
      <p><strong>Clasificaciones clima-vegetación vistas en clase:</strong></p>
      <ul>
        <li><strong>Holdridge (1947):</strong> usa biotemperatura, precipitación y ETP/PPT. Tiene errores para predecir sabanas, porque no considera la estacionalidad ni el fuego.</li>
        <li><strong>Whittaker (1975):</strong> distingue 9 biomas según la temperatura y la precipitación medias: selva lluviosa tropical, selva estacional o sabana, desierto subtropical, bosque ralo o arbustal, bosque lluvioso templado, bosque estacional templado, pradera templada o desierto, bosque boreal y tundra.</li>
        <li><strong>Köppen-Geiger (1900):</strong> define los grupos A (tropical), B (seco), C (templado), D (continental) y E (polar). Hay mapas para 1901-2099 con 1 km de resolución.</li>
      </ul>
      <p><strong>Ante el cambio climático</strong> no migran biomas enteros. Por eso los <em>Earth System Models</em> usan <strong>tipos funcionales de plantas</strong> para simular nuevos ensambles de vegetación y sus interacciones con el CO₂, el albedo, la evapotranspiración y los GEI.</p>`,
    fuente: "3 Diversidad funcional",
    flash: {
      frente: "¿Qué variables usan Holdridge, Whittaker y Köppen?",
      dorso: "Holdridge: biotemperatura, P y ETP/P. Whittaker: T y P medias (9 biomas). Köppen: grupos A-E según el régimen de T y P.",
    },
  },

  // ───────────── SIG ─────────────
  {
    id: "sig-01",
    tema: "sig",
    tipo: "mc",
    enunciado: "¿Cuál de estas características corresponde al modelo RASTER y no al vectorial?",
    opciones: [
      "Divide el espacio en una matriz de celdas, cada una con un único valor del atributo, y es directamente compatible con imágenes satelitales",
      "Representa los objetos individualmente mediante puntos, líneas y polígonos",
      "Ocupa menor volumen de datos y tiene topología completa para el análisis espacial",
      "Organiza los atributos de cada objeto en una base de datos relacional",
    ],
    correcta: 0,
    justificacion:
      "En el modelo raster el espacio es discreto: es una grilla de píxeles y cada uno guarda el valor dominante de un atributo. Su estructura es simple, pero ocupa mucho volumen, y es compatible con las imágenes satelitales. Las otras tres opciones describen el modelo vectorial.",
    teoria: `
      <table class="tabla">
        <tr><th></th><th>Raster</th><th>Vectorial</th></tr>
        <tr><td>Unidad</td><td>Celda o píxel (matriz)</td><td>Puntos, líneas y polígonos</td></tr>
        <tr><td>Volumen</td><td>Grande</td><td>Menor</td></tr>
        <tr><td>Precisión de formas</td><td>Limitada por el tamaño del píxel</td><td>Precisa y realista</td></tr>
        <tr><td>Superposición</td><td>Simple y precisa</td><td>Requiere topología</td></tr>
        <tr><td>Uso típico</td><td>Imágenes satelitales y variables continuas (NDVI, MDE)</td><td>Límites, rutas, parcelas, puntos de muestreo</td></tr>
      </table>
      <p>Ambos modelos se usan para representar la realidad y son <strong>interconvertibles</strong>. Un SIG permite superponer capas, y cada capa vectorial tiene un solo tipo de entidad.</p>
      <p>Un <strong>dato geográfico</strong> se describe con atributos (descriptores semánticos), ubicación (descriptores geométricos) y relación con otros objetos (descriptores topológicos).</p>`,
    fuente: "4 SIG",
    flash: {
      frente: "Raster vs. vectorial: dos diferencias clave",
      dorso: "Raster: grilla de píxeles, gran volumen, compatible con imágenes satelitales. Vectorial: puntos, líneas y polígonos, menor volumen, topología y base de datos relacional.",
    },
  },
  {
    id: "sig-02",
    tema: "sig",
    tipo: "completar",
    enunciado:
      "En un shapefile, el archivo con extensión ___ guarda la geometría (vértices), el ___ guarda la tabla de atributos y el ___ define el sistema de coordenadas.",
    blancos: [["shp", ".shp"], ["dbf", ".dbf"], ["prj", ".prj"]],
    justificacion:
      "El shapefile es un formato multiarchivo: .shp contiene la geometría, .dbf los atributos (la base de datos) y .prj la proyección o sistema de coordenadas. Además, .shx es el índice de las geometrías y es obligatorio.",
    teoria: `
      <ul>
        <li><strong>*.shp</strong>: geometría de los objetos (vértices).</li>
        <li><strong>*.shx</strong>: índice de las entidades geométricas, para búsquedas.</li>
        <li><strong>*.dbf</strong>: atributos de los objetos (base de datos).</li>
        <li><strong>*.prj</strong>: sistema de coordenadas.</li>
        <li><strong>*.sbn / *.sbx</strong>: índice espacial (opcional).</li>
        <li><strong>*.shp.xml</strong>: metadatos (opcional).</li>
      </ul>
      <p><strong>Base de datos relacional:</strong> organiza los datos en tablas, donde las filas son entidades y las columnas son atributos. Cada fila es única y se identifica con una <em>clave primaria</em>, que es la que establece las relaciones entre tablas.</p>
      <p><strong>Intersección</strong> (una operación espacial): el resultado abarca la zona de solape entre dos capas, con las geometrías recortadas y los atributos de ambas capas.</p>`,
    fuente: "4 SIG",
    flash: {
      frente: "¿Qué contienen los archivos .shp, .shx, .dbf y .prj?",
      dorso: ".shp tiene la geometría, .shx el índice, .dbf los atributos y .prj el sistema de coordenadas.",
    },
  },
  {
    id: "sig-03",
    tema: "sig",
    tipo: "mc",
    enunciado: "¿Cuál es la diferencia entre un sistema de referencia y un sistema de proyección?",
    opciones: [
      "El de referencia (elipsoide + datum, como WGS84) ubica un punto en la Tierra con latitud y longitud. La proyección lo traslada al plano con coordenadas (x, y), siempre con alguna deformación",
      "Son sinónimos: ambos expresan la posición en grados de latitud y longitud",
      "El sistema de referencia usa metros y la proyección usa grados sexagesimales",
      "La proyección define el elipsoide y el datum, y el sistema de referencia define las fajas Gauss-Krüger",
    ],
    correcta: 0,
    justificacion:
      "El sistema de referencia modela la forma de la Tierra (elipsoide + datum) y da coordenadas geográficas angulares. La proyección es un modelo matemático que pasa esa superficie curva a un plano, con coordenadas planas en metros. Al hacerlo, siempre deforma ángulos, distancias o superficies.",
    teoria: `
      <ul>
        <li><strong>Latitud:</strong> distancia angular desde el plano del Ecuador (N/S).</li>
        <li><strong>Longitud:</strong> distancia angular desde el meridiano de Greenwich (E/O).</li>
        <li><strong>Sistema de referencia global:</strong> WGS84. Argentina tiene además un marco oficial propio.</li>
        <li><strong>Ningún mapa es perfecto:</strong> la proyección Mercator es <em>conforme</em> (conserva ángulos), la de Peters es <em>equivalente</em> (conserva áreas) y la de Robinson es de compromiso.</li>
        <li><strong>Gauss-Krüger:</strong> es la proyección usada en Argentina. Es cilíndrica transversal, con <strong>7 fajas</strong> (cada una con su meridiano central) y coordenadas planas en metros.</li>
      </ul>
      <p>Para operar entre capas en un SIG, todas deben tener la misma proyección, extensión y resolución.</p>`,
    fuente: "4 SIG",
    flash: {
      frente: "¿En qué se diferencian el sistema de referencia y el sistema de proyección?",
      dorso: "El de referencia ubica el punto en la Tierra (elipsoide + datum, lat/long). La proyección lo pasa al plano (x, y en m) y siempre deforma algo. Ej.: Gauss-Krüger, 7 fajas.",
    },
  },

  // ───────────── TELEDETECCIÓN ─────────────
  {
    id: "tel-01",
    tema: "teledeteccion",
    tipo: "unir",
    enunciado: "Uní cada característica de un sensor con el tipo de resolución que describe.",
    pares: [
      { izq: "Píxel de 30 × 30 m (Landsat 8 OLI)", der: "Espacial" },
      { izq: "Revisita el mismo sitio cada 16 días", der: "Temporal" },
      { izq: "Tiene 13 bandas de distinto ancho (Sentinel-2 MSI)", der: "Espectral" },
      { izq: "Codifica la energía en 8 bit (2⁸ = 256 niveles de gris)", der: "Radiométrica" },
    ],
    justificacion:
      "La resolución espacial es el tamaño del píxel. La temporal es la frecuencia de revisita. La espectral es el número y ancho de las bandas. La radiométrica es el número de niveles de energía que se pueden distinguir (2ⁿ valores para n bits).",
    teoria: `
      <ol>
        <li><strong>Espacial:</strong> tamaño del píxel (en el modelo raster).</li>
        <li><strong>Temporal:</strong> frecuencia de revisita.</li>
        <li><strong>Espectral:</strong> número y ancho de bandas. Pancromático (1 banda), multiespectral (3-30) e hiperespectral (32-256).</li>
        <li><strong>Radiométrica:</strong> niveles de gris (8, 10, 16 o 32 bit → 2ⁿ valores).</li>
      </ol>
      <p><strong>Landsat 8/9 (NASA + USGS):</strong> sensor OLI, multiespectral a 30 m y pancromático a 15 m, más el sensor térmico TIRS a 100 m. Revisita cada 16 días con cada satélite, u 8 días combinando ambos.</p>
      <p><strong>Sentinel-2 (ESA):</strong> sensor MSI con 13 bandas, de 10, 20 o 60 m. Revisita cada 10 días con cada satélite, o 5 días con la constelación.</p>
      <p><strong>Sensores pasivos</strong> (miden la energía solar reflejada): cámaras, Landsat, Sentinel-2. <strong>Activos</strong> (emiten su propia energía): radar (SAOCOM, Sentinel-1) y LiDAR.</p>`,
    fuente: "5 Teledetección",
    flash: {
      frente: "¿Cuáles son las 4 resoluciones de un sensor remoto?",
      dorso: "Espacial (tamaño del píxel), temporal (revisita), espectral (número y ancho de bandas) y radiométrica (niveles de gris, 2ⁿ).",
    },
  },
  {
    id: "tel-02",
    tema: "teledeteccion",
    tipo: "mc",
    enunciado:
      "Un píxel tiene una reflectividad de 0,50 en el infrarrojo cercano (NIR) y de 0,08 en el rojo. ¿Cuál es su NDVI aproximado y cómo se interpreta?",
    opciones: [
      "≈ 0,72 · vegetación densa y vigorosa",
      "≈ −0,72 · agua",
      "≈ 0,42 · suelo desnudo",
      "≈ 1,38 · vegetación saturada",
    ],
    correcta: 0,
    justificacion:
      "NDVI = (NIR − Rojo) / (NIR + Rojo) = (0,50 − 0,08) / (0,50 + 0,08) = 0,42 / 0,58 ≈ 0,72. Un valor alto, cercano a 1, indica vegetación sana y densa. El NDVI nunca puede superar 1, así que la opción 1,38 es imposible.",
    teoria: `
      <p><strong>NDVI (Índice de Vegetación de Diferencia Normalizada):</strong></p>
      <p class="formula">NDVI = (ρ<sub>NIR</sub> − ρ<sub>Rojo</sub>) / (ρ<sub>NIR</sub> + ρ<sub>Rojo</sub>)</p>
      <ul>
        <li>Varía entre <strong>−1 y 1</strong>.</li>
        <li>Valores negativos o cercanos a 0: agua, nieve u objetos sin vida.</li>
        <li>Entre 0 y 0,33: suelo desnudo o vegetación muy estresada.</li>
        <li>Entre 0,33 y 0,66: vegetación moderada.</li>
        <li>Entre 0,66 y 1: vegetación muy sana y densa.</li>
      </ul>
      <p>Aprovecha el <strong>salto rojo-infrarrojo</strong> de la firma espectral de la vegetación.</p>
      <p><strong>Utilidad en estudios regionales:</strong> sirve para monitorear cambios de cobertura y deforestación (por ejemplo, Sachayoj, Chaco Seco, 1985 vs. 2022), para seguir la fenología con series de tiempo, para estimar la productividad primaria y para detectar sequías, degradación o desertificación.</p>`,
    figura: "img/ndvi.jpg",
    fuente: "5 Teledetección · Parcial 2022, preguntas 5 y 8",
    flash: {
      frente: "¿Cuál es la fórmula del NDVI y en qué rango varía?",
      dorso: "NDVI = (NIR − Rojo) / (NIR + Rojo). Varía de −1 a 1: los valores altos indican vegetación densa y sana, y los valores ≤ 0 indican agua o suelo.",
    },
  },
  {
    id: "tel-03",
    tema: "teledeteccion",
    tipo: "mc",
    enunciado:
      "¿Por qué la vegetación sana tiene BAJA reflectividad en el rojo y MUY ALTA reflectividad en el infrarrojo cercano?",
    opciones: [
      "Porque la clorofila absorbe el rojo para la fotosíntesis y la estructura celular de la hoja refleja fuertemente el NIR",
      "Porque el agua de la hoja absorbe el rojo y la clorofila refleja el NIR",
      "Porque la atmósfera bloquea el rojo y deja pasar solo el NIR",
      "Porque las hojas emiten radiación térmica en el NIR",
    ],
    correcta: 0,
    justificacion:
      "En el visible dominan los pigmentos: la clorofila absorbe el azul y el rojo y refleja algo de verde. En el NIR domina la estructura celular interna de la hoja (el mesófilo), que dispersa y refleja mucha radiación. En el SWIR, en cambio, la reflectividad depende del contenido de agua.",
    teoria: `
      <p><strong>Firma espectral:</strong> es la reflectividad de una cubierta a lo largo del espectro, y depende de la composición del material.</p>
      <ul>
        <li><strong>Vegetación:</strong> tiene un pico en el verde, absorbe el rojo, presenta un <em>salto rojo-IR</em> y luego bandas de absorción del agua en el SWIR. La vegetación enferma reduce su reflectividad en el NIR.</li>
        <li><strong>Agua:</strong> refleja poco en el visible y casi nada en el NIR, porque lo absorbe.</li>
        <li><strong>Nieve:</strong> refleja mucho en el visible y cae en el SWIR.</li>
        <li><strong>Arena o suelo:</strong> la reflectividad aumenta de forma gradual con la longitud de onda.</li>
        <li><strong>Hormigón:</strong> tiene una reflectividad media y bastante plana.</li>
      </ul>
      <p><strong>Radiancia:</strong> energía por unidad de área en una dirección, que es lo que mide el sensor. <strong>Reflectividad:</strong> relación (%) entre el flujo reflejado y el incidente.</p>
      <p><strong>Falso color 4-5-3 o 3-4-5 (Landsat 5 TM):</strong> como se asigna el NIR a un canal visible, la vegetación aparece en rojos o verdes intensos.</p>`,
    figura: "img/firma.jpg",
    fuente: "5 Teledetección",
    flash: {
      frente: "Firma espectral de la vegetación: ¿qué controla el visible, el NIR y el SWIR?",
      dorso: "El visible lo controlan los pigmentos (la clorofila absorbe el rojo). El NIR, la estructura celular, que refleja mucho. El SWIR, el contenido de agua.",
    },
  },
  {
    id: "tel-04",
    tema: "teledeteccion",
    tipo: "vf",
    enunciado:
      "La clasificación SUPERVISADA no requiere conocimiento previo del área: el algoritmo agrupa automáticamente los píxeles por similitud espectral (por ejemplo, ISODATA).",
    opciones: ["Verdadero", "Falso"],
    correcta: 1,
    justificacion:
      "Es falso: lo que describe el enunciado es la clasificación NO supervisada. En la supervisada, el intérprete conoce el área y marca áreas de entrenamiento (puntos de control) para cada cobertura. Después, un algoritmo como el de máxima verosimilitud asigna cada píxel a la clase más probable.",
    teoria: `
      <p><strong>Dos caminos para analizar imágenes:</strong></p>
      <ul>
        <li><strong>Interpretación visual:</strong> depende del usuario, de su experiencia y su conocimiento del área, con criterios subjetivos. Se consideran, en complejidad creciente: brillo y color → textura → forma → patrón espacial → contexto → tiempo (fenología y cambios).</li>
        <li><strong>Interpretación digital:</strong> procesamiento matemático y estadístico.
          <ul>
            <li><em>Supervisada:</em> requiere conocimiento previo y áreas de entrenamiento. Ej.: máxima verosimilitud.</li>
            <li><em>No supervisada:</em> automatizada, sin conocimiento previo. Ej.: ISODATA. El intérprete etiqueta las clases después.</li>
          </ul>
        </li>
      </ul>
      <p>Ambas terminan con una <strong>validación</strong> del resultado. Los <strong>índices espectrales</strong> (como el NDVI) combinan bandas matemáticamente para resaltar propiedades específicas.</p>`,
    fuente: "5 Teledetección",
    flash: {
      frente: "Clasificación supervisada vs. no supervisada",
      dorso: "Supervisada: requiere conocer el área y marcar áreas de entrenamiento (máxima verosimilitud). No supervisada: es automática, sin conocimiento previo (ISODATA).",
    },
  },

  // ───────────── PAISAJE ─────────────
  {
    id: "pai-01",
    tema: "paisaje",
    tipo: "mc",
    enunciado: "En el modelo de mosaico de parches, ¿qué define a la MATRIZ del paisaje?",
    opciones: [
      "Es el elemento dominante: ocupa la mayor superficie, es el mejor conectado y cumple un papel fundamental en la dinámica del paisaje",
      "Es cualquier unidad morfológica homogénea que se diferencia de su entorno",
      "Es un elemento lineal que conecta parches y facilita el movimiento de organismos",
      "Es siempre la vegetación natural original, aunque ocupe poca superficie",
    ],
    correcta: 0,
    justificacion:
      "Desde el punto de vista funcional, la matriz es el elemento dominante: tiene la mayor superficie y la mayor conectividad, y controla la dinámica del paisaje. La opción 2 define a un parche y la 3 a un corredor. La matriz no tiene por qué ser natural: en una zona agrícola, la matriz son los cultivos.",
    teoria: `
      <p><strong>Paisaje:</strong> es heterogéneo, tiene componentes internamente homogéneos y su delimitación es arbitraria. Lo modelan procesos abióticos (acumulación, erosión), bióticos (sucesión, colonización) y antrópicos (cambios de cobertura y uso del suelo).</p>
      <p><strong>3 características:</strong> estructura (composición + configuración), función (flujos de energía, materiales, organismos e información) y dinámica (cambios en el tiempo).</p>
      <p><strong>Mosaico</strong> = parches + corredores + matriz. Se identifica a cualquier escala y lo generan 3 mecanismos: diferencias en el sustrato, dinámica natural y actividad humana.</p>
      <p><strong>Funciones de los corredores:</strong> conducción, filtro (barrera), hábitat, fuente y sumidero. También implican <em>riesgos</em>: pueden facilitar la expansión de invasoras, patógenos o depredadores y la propagación del fuego.</p>
      <p><strong>Para el parcial (análisis visual, como el caso Zonda):</strong> identificá la matriz (la cobertura dominante), los parches (por ejemplo, fincas, oasis o urbanización) y los corredores (ríos, rutas, canales). Después explicá las causas abióticas (relieve, agua), bióticas y antrópicas (riego, urbanización) del patrón.</p>`,
    fuente: "6 Paisaje · Parcial 2022, pregunta 7",
    flash: {
      frente: "¿Qué son la matriz, el parche y el corredor?",
      dorso: "La matriz es el elemento dominante (mayor superficie y mejor conectado). El parche es una unidad homogénea que se diferencia del entorno. El corredor es un elemento lineal que conecta parches.",
    },
  },
  {
    id: "pai-02",
    tema: "paisaje",
    tipo: "mc",
    enunciado:
      "Dos parches de bosque están unidos por una cortina de álamos. Un ave de interior de bosque nunca la usa porque evita los ambientes de borde. Para esa especie, el paisaje presenta…",
    opciones: [
      "Conectividad estructural, pero no funcional",
      "Conectividad funcional, pero no estructural",
      "Conectividad estructural y funcional",
      "Ningún tipo de conectividad, porque los álamos son exóticos",
    ],
    correcta: 0,
    justificacion:
      "Existe una conexión física entre los parches, lo que da conectividad estructural. Pero la especie no responde a esa estructura, porque no tolera el borde, así que no hay conectividad funcional. La conectividad funcional depende de los requisitos de hábitat, la tolerancia a hábitats alterados y la capacidad de dispersión de cada especie.",
    teoria: `
      <p><strong>Conectividad:</strong> es el grado en que el paisaje facilita o impide el movimiento de organismos entre parches de hábitat.</p>
      <ul>
        <li><strong>Estructural:</strong> la conexión espacial entre parches de un tipo de hábitat.</li>
        <li><strong>Funcional:</strong> considera la respuesta de los individuos de cada especie ante esa estructura.</li>
      </ul>
      <p>La conectividad sostiene la dispersión, el flujo génico, la migración y la evolución. Mantenerla es una condición clave para la persistencia de la biodiversidad y para diseñar áreas protegidas.</p>
      <p>Los corredores reducen el <em>efecto distancia</em> de la Teoría de Biogeografía de Islas: a mayor aislamiento, menor diversidad.</p>`,
    fuente: "6 Paisaje",
    flash: {
      frente: "Conectividad estructural vs. funcional",
      dorso: "La estructural es la conexión física entre parches. La funcional depende de cómo responde cada especie a esa estructura (su hábitat, su tolerancia y su dispersión).",
    },
  },
  {
    id: "pai-03",
    tema: "paisaje",
    tipo: "mc",
    enunciado:
      "Por fragmentación, un parche de hábitat mantiene su superficie, pero se vuelve más alargado e irregular. ¿Qué es esperable para las especies de interior?",
    opciones: [
      "Aumenta la relación perímetro/superficie: hay más borde, menos zona núcleo y peor calidad de hábitat",
      "No cambia nada, porque la superficie total es la misma",
      "Mejora el hábitat, porque las formas irregulares siempre favorecen la conservación",
      "Disminuye el efecto borde, porque el parche queda más protegido",
    ],
    correcta: 0,
    justificacion:
      "Con igual área, una forma alargada o irregular tiene más perímetro y por lo tanto más borde y menos zona núcleo. Las especies de interior pierden hábitat de calidad. Las formas compactas son las que facilitan la conservación; las irregulares facilitan el intercambio de flujos con el entorno.",
    teoria: `
      <p><strong>Formas de los parches:</strong></p>
      <ul>
        <li><strong>Compactas:</strong> facilitan la conservación de los valores naturales, porque tienen más núcleo.</li>
        <li><strong>Irregulares:</strong> facilitan el intercambio de flujos con el entorno.</li>
        <li><strong>Ramificadas:</strong> facilitan la conducción o el transporte.</li>
      </ul>
      <p><strong>Efectos de la fragmentación</strong> (Santos y Tellería, 2006):</p>
      <ol>
        <li><strong>Reducción de la superficie</strong> → menos hábitat → poblaciones más chicas → más estocasticidad → más riesgo de extinción.</li>
        <li><strong>Separación de los fragmentos</strong> → más aislamiento → menos dispersión → más riesgo de extinción.</li>
        <li><strong>Efecto de borde</strong> → mayor relación perímetro/superficie → peor calidad de hábitat → más riesgo de extinción.</li>
      </ol>
      <p>Una actividad humana moderada diversifica las formas de los parches. Una intensa simplifica la variabilidad, generando formas regulares y geométricas.</p>`,
    figura: "img/formas.jpg",
    fuente: "6 Paisaje",
    flash: {
      frente: "¿Cuáles son los 3 efectos de la fragmentación?",
      dorso: "1) Reducción de la superficie de los parches, 2) aislamiento de los fragmentos y 3) aumento del efecto borde. Los tres elevan el riesgo de extinción.",
    },
  },

  // ───────────── RESTAURACIÓN ─────────────
  {
    id: "res-01",
    tema: "restauracion",
    tipo: "mc",
    enunciado:
      "En el esquema de Bradshaw, ¿cómo se llama la recuperación de parte de la FUNCIÓN de un ecosistema degradado (por ejemplo, estabilizar el suelo y la productividad) sin volver a la estructura y composición originales?",
    opciones: ["Rehabilitación", "Restauración", "Regeneración natural", "Degradación inversa"],
    correcta: 0,
    justificacion:
      "La rehabilitación recupera principalmente la función, como la productividad o la protección del suelo, sin buscar la composición y estructura del ecosistema original. La restauración, en cambio, apunta a acercarse al ecosistema original tanto en estructura como en función.",
    teoria: `
      <p><strong>Esquema de Bradshaw (1996)</strong>, con dos ejes: estructura y función del ecosistema.</p>
      <ul>
        <li><strong>Degradación:</strong> el ecosistema pierde estructura y función por una perturbación.</li>
        <li><strong>Regeneración natural:</strong> la recuperación espontánea, sin intervención.</li>
        <li><strong>Restauración:</strong> la trayectoria deliberada hacia el ecosistema original.</li>
        <li><strong>Rehabilitación:</strong> recupera función, pero no la estructura original.</li>
        <li><strong>Creación / reclamación:</strong> genera un ecosistema distinto del original.</li>
      </ul>
      <p><strong>Definición de restauración (SER, 2004):</strong> actividad deliberada que inicia o acelera la recuperación de un ecosistema degradado, transformado o destruido por actividades humanas, con el objetivo de restablecer su integridad, resiliencia y sustentabilidad.</p>
      <p>Las teorías ecológicas que la sustentan son la ecología de ecosistemas (estados alternativos, irreversibilidad), de poblaciones, de comunidades, evolutiva, del paisaje y la macroecología (Palmer et al., 2006).</p>`,
    figura: "img/bradshaw.jpg",
    fuente: "7 Restauración",
    flash: {
      frente: "¿Qué diferencia hay entre restauración, rehabilitación y regeneración natural?",
      dorso: "La restauración es la trayectoria deliberada hacia el ecosistema original. La rehabilitación recupera la función, pero no la estructura. La regeneración natural es la recuperación espontánea, sin intervención.",
    },
  },
  {
    id: "res-02",
    tema: "restauracion",
    tipo: "mc",
    enunciado: "¿Cuál de los siguientes NO es uno de los seis atributos de un ecosistema restaurado?",
    opciones: [
      "Máxima productividad comercial del sitio",
      "Ausencia de amenazas",
      "Diversidad estructural",
      "Intercambios externos con el paisaje",
    ],
    correcta: 0,
    justificacion:
      "Los seis atributos son: ausencia de amenazas, condiciones físicas, composición de especies, diversidad estructural, función del ecosistema e intercambios externos. La productividad comercial no es uno de ellos; un sitio puede ser muy productivo y estar lejos del ecosistema de referencia.",
    teoria: `
      <p><strong>Atributos de un ecosistema restaurado</strong> (Gann et al.):</p>
      <ol>
        <li><strong>Ausencia de amenazas:</strong> la sobreexplotación, la contaminación, las invasoras y la erosión son prácticamente inexistentes.</li>
        <li><strong>Condiciones físicas:</strong> el suelo, el agua y la topografía son adecuados para mantener el ecosistema.</li>
        <li><strong>Composición de especies:</strong> hay alta diversidad de especies nativas características y pocas o ninguna especie indeseable.</li>
        <li><strong>Diversidad estructural:</strong> hay distintas etapas demográficas, niveles tróficos, estratos y heterogeneidad.</li>
        <li><strong>Función del ecosistema:</strong> productividad, ciclado de nutrientes, descomposición, interacciones, resiliencia y regímenes de perturbación natural adecuados.</li>
        <li><strong>Intercambios externos:</strong> el sitio está integrado al paisaje mediante flujos bióticos y abióticos.</li>
      </ol>
      <p><strong>Ecosistema de referencia:</strong> es el estado aproximado del sitio en ausencia de degradación, considerando los cambios ambientales pasados y previstos. Se describe con sitios de referencia poco alterados, con sitios con distintos tiempos de recuperación, con información histórica y consultando a la comunidad local y a especialistas.</p>`,
    fuente: "7 Restauración",
    flash: {
      frente: "¿Cuáles son los 6 atributos de un ecosistema restaurado?",
      dorso: "Ausencia de amenazas, condiciones físicas, composición de especies, diversidad estructural, función del ecosistema e intercambios externos.",
    },
  },
  {
    id: "res-03",
    tema: "restauracion",
    tipo: "completar",
    enunciado:
      "Los pasos para planificar la restauración son: 1) identificación y caracterización de los sitios, 2) definición de los ___, 3) diseño de las ___ a implementar y 4) selección de los criterios de ___.",
    blancos: [["objetivos"], ["medidas", "acciones"], ["exito", "evaluacion"]],
    justificacion:
      "Son los 4 pasos vistos en clase. Planificar no es solo elegir qué plantar: hay que construir una trayectoria que responda de dónde se parte, hacia dónde se quiere llegar, qué acciones llevan hasta ahí y cómo se va a saber si se está avanzando.",
    teoria: `
      <ol>
        <li><strong>Sitios:</strong> se seleccionan con criterios físicos, ecológicos, sociales, legales y logísticos, y se priorizan según la probabilidad de éxito, la degradación, los beneficios y la cantidad de beneficiarios. Se puede hacer una evaluación multicriterio en un SIG. Después se caracteriza la <em>línea de base</em>: geomorfología, suelos, especies, capacidad de regeneración, factores de degradación e historia de uso y actores sociales.</li>
        <li><strong>Objetivos:</strong> deben ser precisos, medibles y factibles, y considerar restricciones ecológicas (qué es posible), sociales (qué es aceptable) y económicas (qué es realista).</li>
        <li><strong>Medidas:</strong> deben abordar las causas de la degradación, aprovechar la regeneración natural, ser viables y minimizar riesgos.</li>
        <li><strong>Criterios de éxito:</strong> indicadores específicos, medibles y alcanzables, con una frecuencia de monitoreo definida. Se combinan con una <em>gestión adaptativa</em>.</li>
      </ol>
      <p><strong>Aplicación (Parcial 2022, caso Ñacuñán):</strong> un plan para restaurar bosques de algarrobo en campos ganaderos tendría que seleccionar y priorizar los campos; caracterizar la línea de base (cobertura, regeneración de algarrobo, carga ganadera, erosión); usar como referencia el bosque de la reserva; fijar objetivos medibles (por ejemplo, aumentar en X % la cobertura de algarrobo en 5 años); definir medidas como clausuras, ajuste de la carga ganadera, plantación con semillas locales y protección de renovales; elegir indicadores como densidad de renovales, cobertura y suelo desnudo; e involucrar a los productores como actores sociales.</p>`,
    fuente: "7 Restauración · Parcial 2022, pregunta 4",
    flash: {
      frente: "¿Cuáles son los 4 pasos para planificar la restauración?",
      dorso: "1) Identificar y caracterizar los sitios, 2) definir los objetivos, 3) diseñar las medidas y 4) seleccionar los criterios de éxito (monitoreo).",
    },
  },
  {
    id: "res-04",
    tema: "restauracion",
    tipo: "mc",
    enunciado:
      "¿Por qué las biocostras son una herramienta útil para restaurar suelos en zonas áridas como el piedemonte mendocino?",
    opciones: [
      "Porque fijan N atmosférico, estabilizan el suelo contra la erosión y facilitan la emergencia y el crecimiento de pastos",
      "Porque reemplazan a la vegetación vascular y aumentan la carga ganadera admisible",
      "Porque son resistentes al pastoreo y al fuego, así que no requieren protección",
      "Porque aumentan la salinidad del suelo y eso favorece a las halófitas nativas",
    ],
    correcta: 0,
    justificacion:
      "Las biocostras, formadas por cianobacterias, musgos, líquenes y hepáticas, fijan nitrógeno y fertilizan el suelo. Además lo estabilizan, porque los exopolisacáridos de las cianobacterias actúan como pegamento, y aportan biomasa y refugio. En ensayos aumentaron la emergencia y la biomasa de pastos. Pero el pastoreo y los fuegos las destruyen.",
    teoria: `
      <ul>
        <li><strong>Componentes:</strong> cianobacterias (estructura, EPS, fijación de N), musgos (biomasa, estructura 3D), líquenes (rugosidad, estabilidad) y hepáticas.</li>
        <li><strong>Caso del desierto de Tengger (China):</strong> desde 1950 fijan dunas móviles con tableros de paja (“checkerboards”) e inoculación de cianobacterias para proteger un ferrocarril.</li>
        <li><strong>Monte central (Mendoza):</strong> el pastoreo y los incendios destruyen las costras. La restauración pasiva con clausuras es <em>lenta</em> (se midió después de 7 años).</li>
        <li><strong>Propagación:</strong> las costras trituradas sembradas a 1 mm de profundidad dieron mejores resultados, llegando hasta 80 % de cobertura en macetas. Influyen la luz, el riego y la sal.</li>
        <li><strong>Aplicaciones:</strong> minería y energía (reducen el polvo), pastoreo (recuperan suelos y aumentan los pastos) e incendios (sirven como indicadoras y herramienta de restauración).</li>
      </ul>`,
    fuente: "7 Restauración con biocostras",
    flash: {
      frente: "¿Qué funciones de las biocostras son útiles para la restauración?",
      dorso: "Fijan N, estabilizan el suelo (evitan la erosión y el polvo) y aportan biomasa y refugio, lo que facilita el crecimiento de pastos.",
    },
  },

  // ───────────── EIA ─────────────
  {
    id: "eia-01",
    tema: "eia",
    tipo: "mc",
    enunciado:
      "En la Matriz de Leopold (1971), cada celda que cruza una acción del proyecto con un factor ambiental registra…",
    opciones: [
      "La magnitud y la importancia del impacto, cada una en una escala de 1 a 10 (la magnitud lleva signo + o −)",
      "El signo, la intensidad, la extensión, el momento, la persistencia y la reversibilidad",
      "La probabilidad de ocurrencia y el costo de mitigación",
      "Solo la presencia o ausencia de interacción",
    ],
    correcta: 0,
    justificacion:
      "La matriz de Leopold cruza acciones humanas (columnas) con elementos del ambiente (filas). En cada celda se anota la magnitud, que es la intensidad del impacto (de 1 a 10, con signo + si es benéfico o − si es adverso; por ejemplo, deforestar 5 ha = −7), y la importancia, que es su relevancia (de 1 a 10). La lista de signo, intensidad, extensión, etc. corresponde al método de Conesa.",
    teoria: `
      <p><strong>Marco legal:</strong> la Ley Nacional 25.675 (General del Ambiente, arts. 8 y 11) fija los presupuestos mínimos. La Ley 5.961 de Mendoza (1993) regula la EIA a nivel provincial. Además hay normas sectoriales sobre bosques, glaciares y recursos hídricos.</p>
      <p><strong>Impacto ambiental:</strong> cualquier cambio adverso o beneficioso en el ambiente que resulte de actividades humanas (UNEP).</p>
      <p><strong>EIA:</strong> es un procedimiento técnico-administrativo <em>preventivo</em> para identificar, predecir, evaluar y mitigar impactos <em>antes</em> de ejecutar un proyecto. Es participativa, multidisciplinaria, preventiva y sistemática.</p>
      <p><strong>EsIA (Estudio de Impacto Ambiental):</strong> es el documento técnico que presenta el proponente. Incluye la descripción del proyecto (objetivos, localización y ciclo de vida: preparación → operación → cierre → poscierre), la descripción del entorno y la <em>línea de base ambiental</em>, la identificación y valoración de impactos y las medidas de mitigación.</p>
      <p><strong>Métodos:</strong> los cualitativos son las listas de chequeo, la cartografía en SIG y los diagramas de redes. Los cuantitativos son la <em>matriz de Leopold</em> (magnitud e importancia), el método de <em>Conesa</em> (signo, intensidad, extensión, momento, persistencia, reversibilidad, sinergia, acumulación, efecto, periodicidad y recuperabilidad) y el de <em>Battelle-Columbus</em> (índice de calidad ambiental).</p>`,
    fuente: "9 EIA",
    flash: {
      frente: "¿Qué diferencia hay entre la EIA y el EsIA, y qué se registra en la matriz de Leopold?",
      dorso: "La EIA es el procedimiento técnico-administrativo preventivo. El EsIA es el documento técnico que presenta el proponente. En Leopold se registran la magnitud (±1-10) y la importancia (1-10) de cada impacto.",
    },
  },

  // ───────────── CRÉDITOS DE CARBONO ─────────────
  {
    id: "car-01",
    tema: "carbono",
    tipo: "mc",
    enunciado:
      "La provincia de Misiones redujo su tasa de deforestación respecto de una línea de base y certificó esas toneladas de CO₂ no emitidas en todo su territorio. ¿Qué tipo de proyecto es?",
    opciones: [
      "REDD+ jurisdiccional y anidado (JNR)",
      "ARR (forestación, reforestación y revegetación)",
      "Energía renovable",
      "Manejo de pastizales",
    ],
    correcta: 0,
    justificacion:
      "REDD+ acredita la deforestación o degradación que se evitó respecto de lo que habría pasado sin el proyecto. Como lo lleva adelante el gobierno sobre todo el territorio, es jurisdiccional (el marco JNR de Verra), y los proyectos privados se anidan en su línea de base para no contar dos veces la misma reducción. ARR, en cambio, captura carbono en nueva biomasa.",
    teoria: `
      <ul>
        <li><strong>1 crédito = 1 tCO₂e</strong> evitada o capturada y certificada. En Verra se llama VCU (Verified Carbon Unit).</li>
        <li><strong>Mercados:</strong> regulados (como el EU ETS, con sistema de cap-and-trade) o voluntarios. En Argentina el mercado es <em>solo voluntario</em> y no existe una ley que lo regule.</li>
        <li><strong>Recorrido de un crédito:</strong> proyecto → validación del diseño por un auditor → verificación de las reducciones → registro y emisión de VCUs únicos → venta → retiro por el comprador para compensar.</li>
        <li><strong>Requisitos (VCS):</strong> la reducción debe ser real, medible, permanente, adicional y verificada.</li>
        <li><strong>Familias de proyectos:</strong> AFOLU (REDD+, ARR, IFM, ALM, humedales, manejo de pastizales), energía renovable (por ejemplo, Genneia) y jurisdiccionales (JNR, como Misiones).</li>
        <li><strong>Marco internacional:</strong> CMNUCC (1992) → Protocolo de Kioto (1997) → Acuerdo de París (2015, meta de 1,5 °C).</li>
        <li><strong>Rol del biólogo:</strong> el monitoreo de los reservorios de carbono (biomasa aérea y subterránea, necromasa, suelo), el diseño de la línea de base y la verificación a campo.</li>
      </ul>`,
    fuente: "8 Rol del biólogo en créditos de carbono",
    flash: {
      frente: "¿Qué diferencia hay entre REDD+ y ARR?",
      dorso: "REDD+ acredita la deforestación o degradación evitada respecto de una línea de base. ARR acredita el carbono capturado en nueva biomasa por forestación, reforestación o revegetación.",
    },
  },
];
