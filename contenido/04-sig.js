(window.UNIDADES ||= []).push({
  id: "sig",
  num: 4,
  tema: "sig",
  titulo: "Sistemas de Información Geográfica",
  bajada: "Cómo se representa el mundo real en capas digitales, cómo se ubica cada punto sobre la Tierra y en el plano, y qué operaciones permite un SIG.",
  programa: "e) Sistemas de Información Geográfica (SIG). Modelos de representación espacial. Base de datos relacional. Sistema de referencia y sistema de proyección. Análisis espacial.",
  clases: ["4 · SIG (B. Guida Johnson)"],
  resumen: `
    <ul>
      <li>Un <b>SIG</b> integra programas, equipos, metodologías, datos y personas para recolectar, almacenar, procesar y analizar <b>datos georreferenciados</b>, y producir información nueva.</li>
      <li>Representa el mundo con <b>entidades</b> (dónde) y sus <b>atributos</b> (qué), mediante dos modelos: <b>raster</b> (grilla de píxeles) y <b>vectorial</b> (puntos, líneas y polígonos).</li>
      <li>El <b>sistema de referencia</b> (elipsoide + datum, como WGS84) ubica un punto en la Tierra con lat/long. La <b>proyección</b> lo pasa al plano (x, y), siempre con alguna deformación.</li>
      <li>Los atributos se guardan en una <b>base de datos relacional</b> (la tabla de atributos), donde cada fila es una entidad.</li>
      <li>Las <b>operaciones espaciales</b> (intersección, por ejemplo) combinan capas para responder preguntas.</li>
    </ul>`,
  secciones: [
    {
      id: "sig-que-es",
      titulo: "¿Qué es un SIG?",
      html: `
        <p>Para estudiar patrones y procesos a distintas escalas necesitamos <b>datos espacialmente explícitos</b>, que permiten ver patrones espaciales y cambios en el tiempo. Las herramientas principales son la geoestadística, los SIG y la teledetección.</p>
        <div class="idea"><b>Definición</b>
          <p>Un SIG es “un conjunto de programas, equipamientos, metodologías, datos y personas (usuarios), perfectamente integrado, de manera que hace posible la recolección de datos, almacenamiento, procesamiento y análisis de datos georreferenciados, así como la producción de información derivada de su aplicación” (Teixeira et al., 1995).</p>
        </div>
        <p>Por partes: es un <b>Sistema</b> (partes relacionadas que contribuyen a un objetivo) de <b>Información</b> (datos espaciales georreferenciados) <b>Geográfica</b> (con la localización de los objetos en un sistema de coordenadas). Es una herramienta interdisciplinaria para resolver problemas espaciales.</p>
        <h4>El dato geográfico</h4>
        <p>Cada entidad u objeto se describe con tres tipos de descriptores:</p>
        <ul>
          <li><b>Atributos:</b> descriptores semánticos, es decir, qué es (por ejemplo, nombre del ANP, superficie, año de creación).</li>
          <li><b>Ubicación:</b> descriptores geométricos, sus coordenadas.</li>
          <li><b>Relación espacial con otros objetos:</b> descriptores topológicos (adyacencia, inclusión, conectividad).</li>
        </ul>
        <p>Un SIG combina una <b>base de datos gráfica</b> (las formas en un sistema de coordenadas) con una <b>base de datos alfanumérica</b> (las características de cada entidad).</p>
        <h4>¿Qué es un modelo?</h4>
        <p>Es una representación simplificada de la realidad, no la realidad misma. Recoge los aspectos más importantes del sistema real. No es factible ni necesario crear un modelo perfecto: se construye para entender, representar, describir, analizar o comunicar un fenómeno.</p>
        <h4>Aplicaciones</h4>
        <p>Inventarios del ambiente físico y biológico, cobertura y uso del suelo, conservación y restauración, monitoreo de la degradación y de emergencias, agronomía, minería, catastro rural y urbano, redes de calles.</p>`,
    },
    {
      id: "sig-modelos",
      titulo: "Modelos de representación: raster y vectorial",
      html: `
        <p>Los <b>modelos de representación espacial</b> son reglas para convertir el mundo real en objetos espaciales representados digital y lógicamente.</p>
        <figure class="fig"><img src="img/slides/sig_raster_vectorial.jpg" alt="Raster vs vectorial" loading="lazy"><figcaption>La misma realidad (izquierda de cada par) representada en raster y en vectorial. (Clase 4)</figcaption></figure>
        <div class="cols">
          <div class="col"><h5>Raster</h5>
            <ul>
              <li>El espacio es <b>discreto</b>: una matriz cuadriculada de n celdas.</li>
              <li>Cada <b>celda o píxel</b> (picture element) guarda el valor del dato geográfico <b>dominante</b>: un valor del atributo por píxel.</li>
              <li>El píxel es la <b>unidad mínima de representación</b>, y todo el territorio tiene un valor.</li>
              <li>Los valores pueden ser 0/1 (ausencia o presencia), categorías (A, B, C) o continuos (por ejemplo, de −1 a 1).</li>
              <li>Las posiciones se expresan en coordenadas de imagen (i, j) = (número de píxel, número de línea).</li>
              <li>Estructura <b>simple</b>, pero con <b>gran volumen de datos</b>. La superposición es precisa y es <b>directamente compatible con imágenes satelitales</b>.</li>
            </ul></div>
          <div class="col"><h5>Vectorial</h5>
            <ul>
              <li>Representa los objetos <b>individualmente</b>.</li>
              <li>Hay tres tipos de entidades: <b>puntos, líneas y polígonos</b>, con un solo tipo de entidad por capa.</li>
              <li><b>Menor volumen</b> de datos y expresión <b>precisa y realista</b> de las formas.</li>
              <li><b>Topología completa</b>, que permite el análisis espacial.</li>
              <li>Organiza los atributos en <b>bases de datos relacionales</b> (operaciones y consultas).</li>
            </ul></div>
        </div>
        <div class="idea"><b>Ambos modelos son interconvertibles</b>
          <p><b>Poligonizar</b> (raster → vector): las celdas se transforman en polígonos. <b>Rasterizar</b> (vector → raster): los puntos, líneas o polígonos se expresan en una grilla. Al rasterizar se <b>pierde precisión</b>, porque los límites quedan “escalonados” según el tamaño del píxel: cuanto más chico el píxel, más fiel el límite, pero más pesado el archivo.</p>
        </div>
        <figure class="fig chica"><img src="img/slides/sig_conversion.jpg" alt="Conversión entre formatos" loading="lazy"><figcaption>Conversión raster → vectorial y vectorial → raster. (Clase 4)</figcaption></figure>
        <p>Un SIG permite <b>superponer capas</b>, y la superposición permite caracterizar un área de estudio. Cada capa tiene un solo modelo de representación, y cada capa vectorial un solo tipo de entidad.</p>`,
    },
    {
      id: "sig-coordenadas",
      titulo: "Sistemas de referencia y de proyección",
      html: `
        <div class="cols">
          <div class="col"><h5>Sistema de referencia</h5><p>Ubica la posición de un punto <b>en la Tierra</b>. Esa posición se describe con <b>coordenadas geográficas</b> (latitud, longitud).</p></div>
          <div class="col"><h5>Sistema de proyección</h5><p>Ubica la posición de un punto <b>en un mapa</b> (plano). Esa posición se describe con <b>coordenadas planas</b> (x, y), por lo general en metros.</p></div>
        </div>
        <h4>Coordenadas geográficas</h4>
        <ul>
          <li>La Tierra se modela con un <b>elipsoide de revolución</b> (3D), porque está achatada en los polos, y se fija con un <b>datum</b> (el punto de referencia que ancla el elipsoide a la Tierra real).</li>
          <li>Se usan líneas imaginarias: <b>paralelos</b> y <b>meridianos</b>.</li>
          <li><b>Latitud:</b> distancia angular (°) desde el plano del Ecuador, N o S (0-90°).</li>
          <li><b>Longitud:</b> distancia angular desde el plano del meridiano de Greenwich, E u O (0-180°).</li>
          <li><b>Global vs. local:</b> WGS84 (World Geodetic System, el que usa el GPS) es global. Argentina usa un marco local, <b>POSGAR</b>, que en la práctica coincide con WGS84 con diferencias de centímetros.</li>
        </ul>
        <figure class="fig chica"><img src="img/slides/sig_coordenadas.jpg" alt="Coordenadas geográficas" loading="lazy"><figcaption>Elipsoide, datum, latitud y longitud. (Clase 4)</figcaption></figure>
        <h4>Proyecciones: pasar al plano</h4>
        <p>Las proyecciones son modelos matemáticos que transforman la superficie curva en un plano. <b>Siempre hay deformaciones</b> (de ángulos, distancias o superficies), y cada proyección se ajusta mejor a cierto territorio. <b>Ningún mapa es perfecto.</b></p>
        <ul>
          <li><b>Mercator</b> (conforme): conserva los ángulos y deforma las áreas cerca de los polos (Groenlandia parece del tamaño de África).</li>
          <li><b>Peters</b> (equivalente): conserva las áreas y deforma las formas.</li>
          <li><b>Robinson:</b> de compromiso, sin conservar nada exactamente, pero con poca deformación general.</li>
        </ul>
        <figure class="fig"><img src="img/slides/sig_proyecciones.jpg" alt="Proyecciones Mercator, Peters, Robinson" loading="lazy"><figcaption>Ningún mapa es perfecto: Mercator, Peters y Robinson. (Clase 4)</figcaption></figure>
        <div class="idea"><b>Gauss-Krüger, la proyección oficial argentina</b>
          <p>Es <b>cilíndrica transversal</b> (el cilindro toca la Tierra a lo largo de un meridiano). Divide el país en <b>7 fajas</b> de 3° de ancho, cada una con su <b>meridiano central</b>: faja 1 = 72° O, faja 2 = 69° O, faja 3 = 66° O, etc. Las coordenadas son planas, en <b>metros</b>. Mendoza cae en la <b>faja 2</b>.</p>
        </div>
        <figure class="fig chica"><img src="img/slides/sig_gauss.jpg" alt="Proyección Gauss Krüger" loading="lazy"><figcaption>Las 7 fajas Gauss-Krüger de Argentina. (Clase 4)</figcaption></figure>
        <div class="ojo"><b>¿Por qué proyectar antes de calcular áreas?</b>
          <p>En coordenadas geográficas las unidades son <b>grados</b>, y un grado de longitud no mide lo mismo en el ecuador que en Ushuaia. Para calcular perímetros (m) y superficies (m²) hay que reproyectar a un sistema plano. En el TP 3 se usó <code>EPSG:22192</code> (Argentina faja 2).</p>
        </div>`,
    },
    {
      id: "sig-bd",
      titulo: "Base de datos relacional y operaciones espaciales",
      html: `
        <h4>Base de datos relacional (tabla de atributos)</h4>
        <ul>
          <li>Los atributos se organizan en <b>tablas</b>, que se llaman “relaciones”.</li>
          <li><b>Filas:</b> entidades u objetos del mismo tipo. <b>Columnas:</b> atributos.</li>
          <li>Cada fila es única y tiene un <b>identificador o clave primaria</b> que la distingue y permite <b>relacionar</b> tablas.</li>
          <li>La tabla es <b>editable</b>: se pueden agregar campos de texto o números, o calcular atributos geométricos como el área y el perímetro.</li>
        </ul>
        <p>Así se pueden hacer consultas (“¿qué ANP tienen más de 1.000 km²?”) y unir información de distintas fuentes por un campo común.</p>
        <h4>Operaciones espaciales: la intersección</h4>
        <ul>
          <li><b>Extensión del resultado:</b> la zona de solape entre dos capas.</li>
          <li><b>Objetos del resultado:</b> las geometrías recortadas según los objetos de las capas originales.</li>
          <li><b>Tabla de atributos del resultado:</b> los atributos de ambas capas originales.</li>
        </ul>
        <figure class="fig chica"><img src="img/slides/sig_interseccion.jpg" alt="Intersección de puntos, líneas y polígonos" loading="lazy"><figcaption>Intersección de puntos, líneas y polígonos con una capa de polígonos. (Clase 4)</figcaption></figure>
        <p>Otras operaciones comunes son la unión, el recorte (clip), el área de influencia (buffer), la disolución y la selección por localización.</p>
        <h4>El formato shapefile</h4>
        <p>Es el estándar para intercambiar información vectorial. Es un formato <b>multiarchivo</b>:</p>
        <div class="tabla-wrap"><table class="tabla">
          <tr><th>Archivo</th><th>Contenido</th><th></th></tr>
          <tr><td><code>.shp</code></td><td>Geometría de los objetos (vértices)</td><td>Obligatorio</td></tr>
          <tr><td><code>.shx</code></td><td>Índice de las entidades geométricas (búsquedas)</td><td>Obligatorio</td></tr>
          <tr><td><code>.dbf</code></td><td>Atributos (base de datos)</td><td>Obligatorio</td></tr>
          <tr><td><code>.prj</code></td><td>Sistema de coordenadas</td><td>Optativo, pero imprescindible en la práctica</td></tr>
          <tr><td><code>.sbn / .sbx</code></td><td>Índice espacial</td><td>Optativo</td></tr>
          <tr><td><code>.shp.xml</code></td><td>Metadatos</td><td>Optativo</td></tr>
        </table></div>
        <h4>Fuentes de datos en Argentina</h4>
        <ul>
          <li><b>IDERA</b> (Infraestructura de Datos Espaciales de la República Argentina), con su visualizador: mapa.idera.gob.ar</li>
          <li><b>IGN</b> (Instituto Geográfico Nacional): capas SIG descargables.</li>
          <li><b>INTA</b>: visor de suelos, cultivos, etc.</li>
          <li><b>IDE de cada provincia</b>, como la de Mendoza. Una IDE pone mapas y datos a disposición en internet, de forma libre, a partir de normas y acuerdos institucionales.</li>
          <li>Otras herramientas: Google Earth (historial de imágenes) y Google Earth Engine (procesamiento en la nube).</li>
        </ul>`,
    },
  ],
  tp: {
    titulo: "TP 3 · Introducción al SIG (QGIS)",
    html: `
      <p><b>Datos:</b> de la IDE Mendoza, las capas Áreas Naturales Protegidas (polígonos) y Puestos de zonas no irrigadas (puntos). Del IGN, Provincia (polígonos) y Corriente de agua perenne (líneas). Del aula virtual, Elevación (raster).</p>
      <ol class="pasos">
        <li><b>Cargar y quitar capas. ¿Qué formato tiene cada una?</b> La elevación es raster, porque es una variable continua en píxeles. Las provincias, ANP, puestos y ríos son vectoriales (polígonos, puntos y líneas).</li>
        <li><b>Convertir formatos</b> (Ráster → Conversión → Poligonizar o Rasterizar). Al <b>rasterizar se pierde precisión</b>: los límites provinciales quedan escalonados. Con píxeles más chicos (más píxeles) los límites se parecen más al original, pero el archivo pesa más.</li>
        <li><b>Tabla de atributos:</b> ¿cuántas filas corresponden a cada objeto? Normalmente una fila por objeto. Pero un objeto <b>multiparte</b> (una provincia con islas, como Tierra del Fuego) es una sola fila con varios polígonos.</li>
        <li><b>Reproyectar</b> las ANP a <code>EPSG:22192</code> (Gauss-Krüger faja 2) y calcular el perímetro y el área con la calculadora de campos (en m y m²).</li>
        <li><b>Intersección</b> (Vectorial → Geoproceso → Intersección) de las ANP con los puestos y los ríos: ¿qué ANP tienen puestos o cursos de agua?</li>
      </ol>
      <div class="tu-informe"><b>Tu informe: Reserva Natural Laguna del Diamante</b>
        <p>Está en el departamento de San Carlos y limita al oeste con la cordillera y al norte con la Reserva Manzano-Portillo. Fue creada por la Ley 6.200 (1994). Tiene <b>1.980,37 km²</b> y es la tercera más grande de Mendoza (ordenando la tabla de atributos por área). Por intersección se encontraron <b>3 puestos</b> en zonas no irrigadas (La Cantera, Los Toldos y Castro o Las Cortaderas) y <b>92 tramos de cursos de agua</b>; los más largos son el río Diamante (21,8 km) y el arroyo Grande (16,6 km).</p>
        <p>Combina todas las herramientas del TP: superposición de capas, reproyección, cálculo de geometría, ordenamiento de la tabla e intersección.</p>
      </div>`,
  },
  practica: [
    {
      p: "¿Qué tipo de datos puede incluirse en un SIG?",
      r: `<p>Cualquier dato geográfico, es decir, con expresión espacial: que se encuentra en algún lugar de la superficie terrestre y por lo tanto puede georreferenciarse (asignarle coordenadas). Por ejemplo: límites de ANP, puntos de muestreo, ríos, imágenes satelitales, censos por departamento.</p>`,
    },
    {
      p: "¿Cómo se organiza y representa la información en un visualizador como el de IDERA?",
      r: `<p>En <b>capas</b> (una por renglón). Cada capa tiene un solo modelo de datos (raster o vectorial) y, si es vectorial, un solo tipo de entidad: puntos, líneas o polígonos.</p>`,
    },
    {
      p: "¿En qué conversión se pierde precisión, de raster a polígono o de polígono a raster? ¿Qué pasa al usar píxeles más chicos?",
      r: `<p>Al pasar de <b>polígono a raster</b>, porque los límites precisos del vector se aproximan con celdas cuadradas y quedan escalonados. Con píxeles más chicos el borde se aproxima mejor (más resolución), a costa de más volumen de datos. Al poligonizar un raster no se gana precisión: los polígonos heredan el escalonado de los píxeles.</p>`,
    },
    {
      p: "¿Por qué hay que proyectar una capa antes de calcular superficies?",
      r: `<p>Porque en coordenadas geográficas las unidades son grados, que no equivalen a distancias constantes: un grado de longitud se achica hacia los polos. Una proyección plana como Gauss-Krüger da coordenadas en metros y permite calcular perímetros y áreas, aunque con alguna deformación, que es mínima cerca del meridiano central de la faja.</p>`,
    },
    {
      p: "Diferencia entre sistema de referencia y sistema de proyección.",
      r: `<p>El <b>sistema de referencia</b> (elipsoide + datum, como WGS84 o POSGAR) ubica un punto sobre la Tierra con coordenadas geográficas angulares (lat, long). El <b>sistema de proyección</b> transforma la superficie curva al plano y ubica el punto en el mapa con coordenadas planas (x, y). Siempre introduce deformaciones de ángulos, distancias o áreas.</p>`,
    },
  ],
  glosario: [
    ["Georreferenciar", "Asignar coordenadas a un dato para ubicarlo en la superficie terrestre."],
    ["Píxel", "Celda de un raster: la unidad mínima de representación, con un único valor."],
    ["Topología", "Relaciones espaciales entre objetos: adyacencia, inclusión, conectividad."],
    ["Datum", "Punto de referencia que fija un elipsoide a la Tierra real."],
    ["WGS84", "Sistema de referencia global que usa el GPS."],
    ["POSGAR", "Marco de referencia geodésico oficial de Argentina."],
    ["Gauss-Krüger", "Proyección cilíndrica transversal en 7 fajas usada en Argentina, en metros."],
    ["Clave primaria", "Campo que identifica de forma única cada fila de una tabla."],
    ["IDE", "Infraestructura de Datos Espaciales: portal de datos geográficos libres."],
  ],
  biblio: [
    "Domínguez Bravo, J. (2000). Breve introducción a la cartografía y a los SIG. CIEMAT.",
    "Peña Llopis, J. (2006). Sistemas de Información Geográfica aplicados a la gestión del territorio. Club Universitario.",
  ],
});
