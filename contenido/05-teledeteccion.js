(window.UNIDADES ||= []).push({
  id: "teledeteccion",
  num: 5,
  tema: "teledeteccion",
  titulo: "Teledetección",
  bajada: "Cómo los satélites “ven” la superficie, qué nos dice cada banda del espectro y cómo calcular e interpretar el NDVI.",
  programa: "f) Teledetección. Sensores remotos. Espectro electromagnético. Firmas espectrales. Imágenes satelitales: resolución espacial, temporal, espectral y radiométrica. Interpretación visual y digital. Cálculo e interpretación del NDVI.",
  clases: ["5 · Teledetección (B. Guida Johnson)"],
  resumen: `
    <ul>
      <li>La <b>teledetección</b> obtiene información de la superficie sin contacto físico, con sensores en aviones, drones o satélites.</li>
      <li>Cada cobertura tiene una <b>firma espectral</b>: cuánto refleja en cada longitud de onda. La vegetación absorbe el rojo (clorofila) y refleja mucho el infrarrojo cercano (estructura celular).</li>
      <li>Los sensores se caracterizan por cuatro <b>resoluciones</b>: espacial (píxel), temporal (revisita), espectral (bandas) y radiométrica (niveles, 2ⁿ).</li>
      <li>Las imágenes se interpretan <b>visualmente</b> (color, textura, forma, patrón, contexto, tiempo) o <b>digitalmente</b> (clasificación supervisada o no supervisada, índices).</li>
      <li><b>NDVI = (NIR − R)/(NIR + R)</b>, entre −1 y 1. Alto indica vegetación vigorosa; cerca de 0, suelo; negativo, agua.</li>
    </ul>`,
  secciones: [
    {
      id: "tel-que-es",
      titulo: "¿Qué es la teledetección?",
      html: `
        <p>Es la obtención de información sobre la superficie terrestre o la atmósfera <b>sin entrar en contacto físico directo</b>, mediante sensores remotos montados en plataformas: aviones, drones o satélites. El ojo humano es un sensor remoto cotidiano: detecta la luz visible reflejada por los objetos.</p>
        <h4>Tipos de sensores</h4>
        <div class="cols">
          <div class="col"><h5>Pasivos</h5><p>Registran la energía <b>solar reflejada</b> o la emitida por la superficie. Dependen del sol y de que no haya nubes. Ej.: cámaras (fotografías aéreas), sensores multiespectrales (Landsat, Sentinel-2).</p></div>
          <div class="col"><h5>Activos</h5><p><b>Emiten su propia energía</b> y miden el retorno. Funcionan de noche y atraviesan las nubes (radar). Ej.: radar (SAOCOM de la CONAE, Sentinel-1), láser (LiDAR, que mide la estructura de la vegetación).</p></div>
        </div>
        <h4>Componentes de un sistema de teledetección pasivo</h4>
        <ol>
          <li>Fuente de energía (el sol).</li>
          <li>Trayectoria e interacción con la atmósfera (absorción, dispersión).</li>
          <li>Incidencia en la superficie terrestre (se refleja, absorbe o emite).</li>
          <li>Satélite con el sensor.</li>
          <li>Ciclo de toma y descarga de datos.</li>
          <li>Estación terrena de preproceso (correcciones).</li>
          <li>Información al usuario.</li>
        </ol>
        <figure class="fig chica"><img src="img/slides/tel_sistema_pasivo.jpg" alt="Sistema de teledetección pasivo" loading="lazy"><figcaption>Sistema de teledetección pasivo. (Clase 5)</figcaption></figure>`,
    },
    {
      id: "tel-espectro",
      titulo: "Principios físicos y espectro electromagnético",
      html: `
        <p>La energía que viene del sol puede ser <b>reflejada</b>, <b>absorbida</b> (y luego <b>emitida</b> como calor) o <b>transmitida</b>. Cómo se reparte depende del material y de la longitud de onda.</p>
        <div class="tabla-wrap"><table class="tabla">
          <tr><th>Región</th><th>Longitud de onda</th><th>Qué informa</th></tr>
          <tr><td>Visible (azul, verde, rojo)</td><td>0,4-0,7 µm</td><td>Pigmentos, color, sedimentos en el agua</td></tr>
          <tr><td>Infrarrojo cercano (NIR o IRC)</td><td>0,7-1,3 µm</td><td>Estructura celular de las hojas, vigor de la vegetación; el agua lo absorbe</td></tr>
          <tr><td>Infrarrojo medio o de onda corta (SWIR)</td><td>1,3-3 µm</td><td>Contenido de agua de la vegetación y del suelo, minerales</td></tr>
          <tr><td>Infrarrojo térmico (TIR)</td><td>8-14 µm</td><td>Temperatura de la superficie (energía emitida)</td></tr>
          <tr><td>Microondas</td><td>mm-m</td><td>Radar: humedad del suelo, rugosidad, estructura</td></tr>
        </table></div>
        <h4>Dos términos clave</h4>
        <ul>
          <li><b>Radiancia:</b> energía radiada en una dirección por unidad de área. Es <b>lo que mide el sensor</b>.</li>
          <li><b>Reflectividad (reflectancia):</b> relación (%) entre el flujo reflejado y el flujo incidente. Depende de la composición del material y varía a lo largo del espectro.</li>
        </ul>`,
    },
    {
      id: "tel-firmas",
      titulo: "Firmas espectrales",
      html: `
        <p>Una <b>firma espectral</b> es el patrón de reflectividad de una cobertura a lo largo del espectro: a qué longitudes absorbe y a cuáles refleja. Es la base para distinguir coberturas en una imagen.</p>
        <figure class="fig"><img src="img/firma.jpg" alt="Firmas espectrales de agua, vegetación, arena, hormigón y nieve" loading="lazy"><figcaption>Firmas espectrales típicas. (Clase 5)</figcaption></figure>
        <div class="tabla-wrap"><table class="tabla">
          <tr><th>Cobertura</th><th>Comportamiento</th></tr>
          <tr><td><b>Vegetación sana</b></td><td>Baja en el azul y el rojo (los absorbe la clorofila) con un pequeño pico en el verde. <b>Salto rojo-IR</b>: muy alta en el NIR por la estructura celular del mesófilo. En el SWIR baja, por las bandas de absorción del agua de la hoja.</td></tr>
          <tr><td>Vegetación enferma o seca</td><td>Sube el rojo (menos clorofila) y baja el NIR (estructura dañada). El salto rojo-IR se achica.</td></tr>
          <tr><td><b>Agua</b></td><td>Baja en el visible (algo en el azul-verde) y casi nula en el NIR y el SWIR, porque los absorbe. El agua turbia refleja más en el visible.</td></tr>
          <tr><td><b>Suelo y arena</b></td><td>La reflectividad aumenta de forma gradual con la longitud de onda y es alta en el SWIR. Depende de la humedad, la materia orgánica y la textura.</td></tr>
          <tr><td>Nieve</td><td>Muy alta en el visible y cae en el SWIR (eso permite distinguirla de las nubes).</td></tr>
          <tr><td>Hormigón o urbano</td><td>Media y bastante plana.</td></tr>
        </table></div>
        <div class="idea"><b>La firma de la vegetación tiene tres controles</b>
          <p><b>Visible:</b> los pigmentos de la hoja. <b>NIR:</b> la estructura celular. <b>SWIR:</b> el contenido de agua.</p>
        </div>`,
    },
    {
      id: "tel-resoluciones",
      titulo: "Las cuatro resoluciones de un sensor",
      html: `
        <div class="tabla-wrap"><table class="tabla">
          <tr><th>Resolución</th><th>Qué es</th><th>Ejemplos</th></tr>
          <tr><td><b>Espacial</b></td><td>Tamaño del píxel (en el modelo raster): el objeto más chico que se distingue</td><td>Landsat 30 m, Sentinel-2 10 m, MODIS 250 m</td></tr>
          <tr><td><b>Temporal</b></td><td>Frecuencia de revisita a un mismo lugar</td><td>Landsat 16 días, Sentinel-2 5 días (constelación), MODIS diaria</td></tr>
          <tr><td><b>Espectral</b></td><td>Número y ancho de las bandas</td><td>Pancromático (1 banda), multiespectral (3-30), hiperespectral (32-256)</td></tr>
          <tr><td><b>Radiométrica</b></td><td>Número de niveles de energía que distingue, que se traducen en niveles de gris</td><td>8 bit = 2⁸ = 256 niveles; 16 bit = 65.536</td></tr>
        </table></div>
        <div class="figs">
          <figure class="fig"><img src="img/slides/tel_res_espacial.jpg" alt="Resolución espacial" loading="lazy"><figcaption>Una misma escena con distintos tamaños de píxel.</figcaption></figure>
          <figure class="fig"><img src="img/slides/tel_res_radiometrica.jpg" alt="Resolución radiométrica" loading="lazy"><figcaption>Distintos niveles de gris (bits).</figcaption></figure>
        </div>
        <div class="ojo"><b>Hay un compromiso entre resoluciones</b>
          <p>En general, los sensores de píxel chico revisitan menos seguido, y los de revisita diaria (MODIS) tienen píxeles grandes. Se elige según la pregunta: para seguir la fenología conviene alta resolución temporal; para mapear parcelas, alta resolución espacial.</p>
        </div>
        <h4>Satélites usados en la materia</h4>
        <div class="cols">
          <div class="col"><h5>Landsat 8 y 9 (NASA + USGS)</h5>
            <ul><li>Landsat 8: desde 2013. Landsat 9: desde 2021.</li>
            <li>Sensor <b>OLI</b>: 8 bandas multiespectrales de <b>30 m</b> y 1 pancromática de 15 m.</li>
            <li>Sensor <b>TIRS</b>: 2 bandas térmicas de 100 m.</li>
            <li>Revisita: <b>16 días</b> cada uno, 8 días combinados.</li>
            <li>Bandas clave de OLI: B2 azul, B3 verde, <b>B4 rojo</b>, <b>B5 NIR</b>, B6 SWIR1, B7 SWIR2.</li></ul></div>
          <div class="col"><h5>Sentinel-2 (Agencia Espacial Europea)</h5>
            <ul><li>2A (2015), 2B (2017), 2C (2024).</li>
            <li>Sensor <b>MSI</b>: <b>13 bandas</b>, 4 de 10 m, 6 de 20 m y 3 de 60 m.</li>
            <li>Revisita: <b>10 días</b> cada uno, <b>5 días</b> en constelación.</li></ul></div>
        </div>
        <p>La serie Landsat tiene imágenes desde 1972, lo que permite analizar <b>cambios de largo plazo</b> (por ejemplo, la deforestación del Chaco desde los años 80).</p>`,
    },
    {
      id: "tel-interpretacion",
      titulo: "Interpretación visual y digital",
      html: `
        <div class="cols">
          <div class="col"><h5>Interpretación visual</h5><p>La hace el usuario. Influyen su habilidad, su experiencia y su conocimiento del área. Usa criterios subjetivos.</p></div>
          <div class="col"><h5>Interpretación digital</h5><p>Se hace con hardware y software. Usa procesamiento matemático y estadístico: clasificaciones e índices.</p></div>
        </div>
        <h4>Criterios de interpretación visual (en complejidad creciente)</h4>
        <p>Se consideran prácticamente al mismo tiempo:</p>
        <ol class="pasos">
          <li><b>Brillo y color:</b> dependen de la combinación de bandas asignada a los canales R, G y B del monitor.</li>
          <li><b>Textura:</b> rugosidad visual. Un bosque se ve rugoso; un cultivo o el agua, lisos.</li>
          <li><b>Forma:</b> las formas geométricas regulares indican intervención humana (parcelas, pivotes de riego); las irregulares, procesos naturales.</li>
          <li><b>Patrón espacial:</b> la disposición de los objetos (cuadrícula urbana, red de drenaje dendrítica, “espina de pescado” de la deforestación).</li>
          <li><b>Contexto:</b> lo que rodea al objeto ayuda a identificarlo (una mancha verde junto a un río probablemente sea un bosque ribereño).</li>
          <li><b>Tiempo:</b> la <b>fenología</b> (el mismo lugar en distintos meses) y los <b>cambios</b> de cobertura y uso (distintos años).</li>
        </ol>
        <h4>Combinaciones de bandas (RGB)</h4>
        <p>El monitor tiene tres canales (rojo, verde, azul). Asignar distintas bandas a cada canal resalta distintas coberturas:</p>
        <div class="tabla-wrap"><table class="tabla">
          <tr><th>Combinación (Landsat 8)</th><th>Nombre</th><th>Cómo se ve</th></tr>
          <tr><td><b>4-3-2</b></td><td>Color real</td><td>Como lo vería el ojo: vegetación verde oscuro, agua azul o negra, suelo marrón.</td></tr>
          <tr><td><b>5-4-3</b></td><td>Falso color infrarrojo</td><td>NIR en el canal rojo: la <b>vegetación se ve roja</b>, más intensa cuanto más vigorosa. Ciudad celeste o gris, agua negra.</td></tr>
          <tr><td><b>5-6-4</b></td><td>Falso color (NIR-SWIR-rojo)</td><td>Vegetación en <b>rojo o naranja</b>, suelo desnudo en <b>verde</b> (refleja mucho el SWIR, que está en el canal verde), agua negra o azul oscuro, urbano verde o gris.</td></tr>
          <tr><td>4-5-6</td><td>Falso color</td><td>Vegetación en verde (el NIR está en el canal verde), suelo desnudo en tonos rosados o violáceos.</td></tr>
          <tr><td>7-6-4</td><td>Falso color (SWIR)</td><td>Resalta el suelo desnudo y lo urbano (tonos rosados o violetas) y la humedad.</td></tr>
        </table></div>
        <div class="ojo"><b>¡La numeración de las bandas cambia entre satélites!</b>
          <p>En Landsat 5 TM el rojo es la banda 3 y el NIR la banda 4: el falso color clásico es 4-5-3 o 3-4-5 (como en las diapositivas). En Landsat 8 OLI el rojo es la banda 4 y el NIR la banda 5.</p>
        </div>
        <div class="figs">
          <figure class="fig"><img src="img/slides/tel_brillo_color.jpg" alt="Brillo y color: combinaciones de bandas" loading="lazy"><figcaption>Color real y combinaciones de falso color.</figcaption></figure>
          <figure class="fig"><img src="img/slides/tel_fenologia.jpg" alt="Criterio temporal: fenología" loading="lazy"><figcaption>Criterio temporal: fenología (febrero vs. septiembre).</figcaption></figure>
          <figure class="fig"><img src="img/slides/tel_cambio.jpg" alt="Criterio temporal: cambio de cobertura" loading="lazy"><figcaption>Criterio temporal: cambio de cobertura (1986 vs. 2006).</figcaption></figure>
        </div>
        <h4>Clasificación digital</h4>
        <div class="tabla-wrap"><table class="tabla">
          <tr><th></th><th>Supervisada</th><th>No supervisada</th></tr>
          <tr><td>Conocimiento previo</td><td><b>Lo requiere</b></td><td>No lo requiere</td></tr>
          <tr><td>Cómo funciona</td><td>El intérprete marca <b>áreas de entrenamiento</b> (puntos de control) de cada cobertura. El algoritmo asigna cada píxel a la clase más parecida.</td><td>El algoritmo agrupa los píxeles por similitud espectral de forma <b>automática</b> (clusters). Después el intérprete etiqueta cada grupo.</td></tr>
          <tr><td>Algoritmos</td><td>Máxima verosimilitud, entre otros</td><td>ISODATA, k-means</td></tr>
        </table></div>
        <p>En ambos casos se termina con una <b>validación</b>: se comparan puntos verificados en el campo o en imágenes de alta resolución con la clasificación (por ejemplo, con una matriz de confusión).</p>
        <figure class="fig chica"><img src="img/slides/tel_supervisada.jpg" alt="Clasificación supervisada: puntos de control" loading="lazy"><figcaption>Clasificación supervisada: entrenamiento con puntos de control (agua, bosque, pastizal, cultivos).</figcaption></figure>`,
    },
    {
      id: "tel-ndvi",
      titulo: "Índices espectrales y NDVI",
      html: `
        <p>Los <b>índices espectrales</b> son combinaciones matemáticas de dos o más bandas, diseñadas para resaltar propiedades específicas: vegetación, suelo, agua y humedad, áreas urbanas, severidad de incendios.</p>
        <p class="formula">NDVI = (NIR − Rojo) / (NIR + Rojo)</p>
        <ul>
          <li>Aprovecha el <b>salto rojo-IR</b>: la vegetación vigorosa tiene mucha diferencia entre lo poco que refleja en el rojo y lo mucho que refleja en el NIR.</li>
          <li>Al ser una diferencia <b>normalizada</b> (dividida por la suma), varía entre <b>−1 y 1</b> y reduce efectos de iluminación (sombras, topografía).</li>
          <li>Visualizado en escala de grises, los valores <b>altos se ven blancos</b> y los bajos negros.</li>
        </ul>
        <div class="tabla-wrap"><table class="tabla">
          <tr><th>Cobertura</th><th>NIR</th><th>Rojo</th><th>NDVI aproximado</th></tr>
          <tr><td>Vegetación densa y sana</td><td>Alto (≈ 50 %)</td><td>Bajo (≈ 5-10 %)</td><td><b>0,6 a 0,9</b></td></tr>
          <tr><td>Vegetación rala o estresada</td><td>Medio</td><td>Medio</td><td>0,2 a 0,5</td></tr>
          <tr><td>Suelo desnudo</td><td>≈ igual al rojo, apenas mayor</td><td>Medio-alto</td><td><b>≈ 0 a 0,2</b></td></tr>
          <tr><td>Agua</td><td>Casi nulo (absorbe)</td><td>Bajo, pero mayor que el NIR</td><td><b>Negativo</b></td></tr>
        </table></div>
        <figure class="fig"><img src="img/ndvi.jpg" alt="NDVI y salto rojo-infrarrojo" loading="lazy"><figcaption>El NDVI aprovecha la diferencia entre el rojo y el NIR, que es grande en la vegetación sana y chica en el suelo. (Clase 5)</figcaption></figure>
        <h4>Qué influye en el NDVI</h4>
        <ul>
          <li><b>Tipo de vegetación:</b> un bosque tiene más NDVI que un pastizal.</li>
          <li><b>Fenología:</b> la vegetación decidua cambia a lo largo del año y la perenne es más estable. Los cultivos muestran picos marcados y caen a casi cero tras la cosecha.</li>
          <li><b>Estado de la vegetación:</b> el estrés hídrico o las plagas lo reducen.</li>
          <li><b>Limitaciones:</b> se satura en vegetación muy densa (selvas) y está influido por el brillo del suelo cuando la cobertura es baja (zonas áridas).</li>
        </ul>
        <figure class="fig chica"><img src="img/slides/tel_series_ndvi.jpg" alt="Series de tiempo de NDVI para distintas coberturas" loading="lazy"><figcaption>Series de tiempo de NDVI para distintas coberturas: cada una tiene su firma temporal. (Clase 5)</figcaption></figure>
        <div class="idea"><b>Utilidad del NDVI en estudios regionales (Pettorelli et al., 2005)</b>
          <ul>
            <li>Mapear la cobertura y detectar cambios: deforestación, avance agrícola, urbanización.</li>
            <li>Seguir la <b>fenología</b> (inicio, pico y fin de la estación de crecimiento) y su respuesta al clima.</li>
            <li>Estimar la <b>productividad primaria</b> (NDVI integrado en el año, que sirve como proxy de la PPN).</li>
            <li>Detectar sequías, degradación, desertificación y efectos de incendios.</li>
            <li>Vincular la vegetación con la <b>dinámica de poblaciones animales</b> (herbívoros, migraciones), porque da información de la oferta de alimento a escalas grandes.</li>
          </ul>
        </div>
        <div class="parcial"><b>Parcial 2022: NDVI en Sachayoj, Chaco Seco (1985-87 vs. 2021-22)</b>
          <p>En los mosaicos de NDVI se espera ver que el bosque continuo, con NDVI alto (blanco) y textura homogénea, fue reemplazado por <b>parches geométricos</b> (rectángulos) con NDVI bajo o variable: lotes agrícolas o pasturas desmontados, a veces con cortinas de bosque entre ellos. El patrón es de <b>fragmentación</b>: el bosque pasa de ser la matriz a quedar como remanentes. El proceso es el <b>avance de la frontera agropecuaria</b> (desmonte para soja y ganadería) en el Chaco Seco.</p>
        </div>`,
    },
  ],
  tp: {
    titulo: "TP 4 · Introducción a la teledetección (Google Earth Engine)",
    html: `
      <p><b>Área:</b> la Triple Frontera (Misiones, Paraná y Alto Paraná), en la ecorregión Selva Paranaense (Mata Atlántica). <b>Datos:</b> Landsat 8 de primavera-verano.</p>
      <h4>El script en GEE, paso a paso</h4>
      <pre class="code">var Landsat8 = ee.ImageCollection("LANDSAT/LC08/C02/T1_RT");          // a. colección
var Landsat8Filtrada = Landsat8.filterBounds(geometry)
                               .filterDate('2025-10-01', '2026-02-28');  // b. filtrar
var Mosaico = ee.Algorithms.Landsat.simpleComposite(Landsat8Filtrada, 60, 10, 40, true); // c. mosaico sin nubes
var MosaicoCorte = Mosaico.clip(geometry);                              // d. recortar
Map.addLayer(MosaicoCorte);                                             // e. visualizar (432 = color real)

var nir = MosaicoCorte.select('B5');
var red = MosaicoCorte.select('B4');
var ndvi = nir.subtract(red).divide(nir.add(red)).rename('NDVI');      // NDVI
Map.addLayer(ndvi);</pre>
      <p>El <b>mosaico</b> combina todas las escenas del período (una cada 16 días) y elige los píxeles libres de nubes para formar un único raster. Se usaron imágenes de primavera-verano porque la vegetación está activa.</p>
      <div class="tu-informe"><b>Tu informe, caso 1: Entre Ríos (Espinal), combinación 5-6-4</b>
        <p><b>¿Natural o antrópico?</b> Fuertemente antrópico: hay <b>formas geométricas rectas</b> (parcelas). Las parcelas en naranja intenso o rojo son vegetación, porque el canal rojo tiene la banda 5 (NIR), donde la vegetación refleja mucho. Los naranjas más intensos serían forestaciones, los menos intensos cultivos, y la vegetación natural aparece junto al río con formas difusas. Las parcelas <b>verdes</b> son suelo desnudo, porque el canal verde tiene la banda 6 (SWIR), donde el suelo refleja mucho. <b>Uso predominante:</b> agroforestal.</p>
      </div>
      <div class="tu-informe"><b>Tu informe, caso 2: NDVI en Pampa y Delta</b>
        <p>Con valores aproximados leídos de las firmas espectrales:</p>
        <p>NDVI<sub>plantas</sub> = (50 − 10)/(50 + 10) = <b>0,6</b> · NDVI<sub>suelo</sub> = (55 − 45)/(55 + 45) = <b>0,1</b> · NDVI<sub>agua</sub> = (5 − 8)/(5 + 8) = <b>−0,23</b></p>
        <p><b>Blanco en el SO vs. el NE:</b> en ambos sectores el blanco indica NDVI alto (vegetación vigorosa). Pero en el SO (Pampa) aparece en <b>parcelas rectangulares</b> (cultivos), y en el NE (Delta) con <b>formas irregulares</b> que siguen la hidrografía y el relieve (vegetación natural de humedal).</p>
      </div>`,
  },
  practica: [
    {
      p: "Defina el NDVI. ¿Cómo se calcula? ¿Cuál puede ser su utilidad para los estudios regionales de ecología? (Parcial 2022)",
      r: `<p>Es el Índice de Vegetación de Diferencia Normalizada, un índice espectral que estima la cantidad y el vigor de la vegetación verde. Se calcula como <b>(NIR − Rojo)/(NIR + Rojo)</b> con las reflectividades de cada banda (en Landsat 8: (B5 − B4)/(B5 + B4)). Varía de −1 a 1. Se basa en que la clorofila absorbe el rojo y la estructura celular refleja el NIR.</p>
        <p><b>Utilidad:</b> mapear y monitorear cambios de cobertura (deforestación, expansión agrícola), seguir la fenología y su respuesta al clima, estimar la productividad primaria, detectar sequías, degradación o desertificación y evaluar la recuperación tras disturbios o restauración. Todo a escalas regionales y con series de tiempo largas (Landsat desde 1972).</p>`,
    },
    {
      p: "¿Qué color adopta la vegetación, el agua y el suelo desnudo en la combinación 5-6-4 de Landsat 8? ¿Por qué?",
      r: `<p>R = banda 5 (NIR), G = banda 6 (SWIR1), B = banda 4 (rojo). La <b>vegetación</b> se ve roja o naranja: refleja mucho el NIR (canal rojo) y algo el SWIR. El <b>suelo desnudo</b> se ve verdoso o celeste: refleja mucho el SWIR (canal verde). El <b>agua</b> se ve negra o azul oscuro: absorbe el NIR y el SWIR y refleja apenas algo en el rojo (canal azul).</p>`,
    },
    {
      p: "¿Por qué el agua tiene NDVI negativo?",
      r: `<p>Porque absorbe casi toda la radiación del infrarrojo cercano: su reflectividad en el NIR es menor que en el rojo. Entonces NIR − Rojo &lt; 0 y el cociente da negativo.</p>`,
    },
    {
      p: "Al clasificar con k-means, el agua quedó agrupada con otras coberturas oscuras. ¿Qué harías?",
      r: `<p>Aumentar el número de clases solicitadas para que el algoritmo pueda separar coberturas espectralmente parecidas (el agua ocupa pocos píxeles y “pierde” frente a clases abundantes). Después, reagrupar en el SIG las clases que correspondan a la misma cobertura. Es lo que se hizo en el TP 5: de 6 a 9 clases, y luego se reagruparon en 6.</p>`,
    },
    {
      p: "Mencioná los criterios de interpretación visual y da un ejemplo de cada uno.",
      r: `<p><b>Color/brillo</b> (rojo intenso en falso color = vegetación vigorosa) · <b>textura</b> (rugosa = bosque, lisa = cultivo o agua) · <b>forma</b> (rectángulos = parcelas; círculos = pivotes de riego) · <b>patrón</b> (cuadrícula urbana; espina de pescado de la deforestación) · <b>contexto</b> (vegetación junto a un río = bosque ribereño) · <b>tiempo</b> (un cultivo cambia mucho entre meses; un bosque perenne no).</p>`,
    },
  ],
  glosario: [
    ["Sensor pasivo", "Registra la energía reflejada o emitida, que proviene del sol."],
    ["Sensor activo", "Emite su propia energía (radar, LiDAR)."],
    ["Radiancia", "Energía por unidad de área en una dirección. Es lo que mide el sensor."],
    ["Reflectividad", "Porcentaje de la energía incidente que se refleja."],
    ["Firma espectral", "Curva de reflectividad de una cobertura en función de la longitud de onda."],
    ["Salto rojo-IR", "Aumento brusco de la reflectividad de la vegetación entre el rojo y el NIR."],
    ["Mosaico", "Raster único formado combinando varias escenas, eligiendo los píxeles sin nubes."],
    ["Falso color", "Combinación RGB que asigna bandas no visibles (NIR, SWIR) a los canales del monitor."],
    ["Áreas de entrenamiento", "Muestras de cobertura conocida que guían una clasificación supervisada."],
  ],
  biblio: [
    "Chuvieco, E. (1995/2008). Fundamentos de teledetección espacial / Teledetección ambiental. Rialp / Ariel.",
    "Pettorelli, N. et al. (2005). Using the satellite-derived NDVI to assess ecological responses to environmental change. <i>TREE</i> 20(9): 503-510.",
  ],
});
