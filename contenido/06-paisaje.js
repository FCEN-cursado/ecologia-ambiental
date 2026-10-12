(window.UNIDADES ||= []).push({
  id: "paisaje",
  num: 6,
  tema: "paisaje",
  titulo: "Ecología del paisaje",
  bajada: "Cómo se describe la estructura de un mosaico, cómo se mueven los organismos entre parches y qué pasa cuando el hábitat se fragmenta.",
  programa: "g) Ecología de paisajes. Mosaico, matriz, parche, corredor. Estructura y dinámica del paisaje. Conectividad estructural y funcional. Modelos de cambio y fragmentación. Análisis funcional del paisaje.",
  clases: ["6 · Ecología del paisaje (B. Guida Johnson)"],
  resumen: `
    <ul>
      <li>Un <b>paisaje</b> es heterogéneo, está formado por componentes internamente homogéneos y su delimitación es arbitraria. Lo modelan procesos abióticos, bióticos y antrópicos.</li>
      <li>Se caracteriza por su <b>estructura</b> (composición + configuración), su <b>función</b> (flujos) y su <b>dinámica</b> (cambios en el tiempo).</li>
      <li>El <b>mosaico</b> tiene tres componentes: <b>matriz</b> (dominante y mejor conectada), <b>parches</b> y <b>corredores</b>.</li>
      <li>La <b>conectividad estructural</b> es la conexión física. La <b>funcional</b> depende de cómo responde cada especie.</li>
      <li>La <b>fragmentación</b> reduce el hábitat, aísla los parches y aumenta el efecto borde, y todo eso eleva el riesgo de extinción.</li>
    </ul>`,
  secciones: [
    {
      id: "pai-que-es",
      titulo: "¿Qué es un paisaje y qué estudia su ecología?",
      html: `
        <p>Un <b>paisaje</b>:</p>
        <ul>
          <li>Es <b>heterogéneo</b>.</li>
          <li>Tiene componentes diversos que son <b>homogéneos internamente</b>.</li>
          <li>Tiene una <b>delimitación arbitraria</b>: la define el observador según la pregunta y la escala.</li>
          <li>Está modelado por procesos <b>abióticos</b> (acumulación, erosión), <b>bióticos</b> (sucesión, colonización) y <b>antrópicos</b> (cambios de cobertura y uso del suelo).</li>
        </ul>
        <p>La <b>ecología del paisaje</b> es una rama reciente de la ecología (Carl Troll, 1939). Estudia las <b>relaciones entre la configuración espacial y los procesos naturales y sociales</b>. Comprender esos mecanismos permite predecir comportamientos y patrones. Trabaja con procesos ecológicos <b>espacialmente explícitos</b> y con sistemas socio-ecológicos (Turner y Gardner, 2015).</p>
        <h4>Tres características que definen un paisaje</h4>
        <div class="cols">
          <div class="col"><h5>1. Estructura</h5><p>Relaciones espaciales entre las unidades: tamaños, formas, cantidades, clases y arreglo espacial (el patrón).</p></div>
          <div class="col"><h5>2. Función</h5><p>Interacciones entre las unidades: <b>flujos</b> de energía, materiales, organismos e información.</p></div>
          <div class="col"><h5>3. Dinámica</h5><p>Cambios en la estructura y la función a lo largo del tiempo, producto de la dinámica ecológica y la actividad humana.</p></div>
        </div>`,
    },
    {
      id: "pai-mosaico",
      titulo: "El modelo de mosaico: matriz, parches y corredores",
      html: `
        <p>El <b>mosaico</b> es el elemento base para interpretar el paisaje. Está compuesto por <b>parches, corredores y matriz</b>, puede identificarse <b>a cualquier escala</b> y lo generan tres mecanismos: <b>diferencias en el sustrato</b> (suelo, geología, relieve), <b>dinámica natural</b> (disturbios, sucesión) y <b>actividad humana</b>.</p>
        <figure class="fig"><img src="img/slides/pai_mosaico.jpg" alt="Modelo de mosaico de parches" loading="lazy"><figcaption>Modelo de mosaico de parches. (Clase 6)</figcaption></figure>
        <div class="tabla-wrap"><table class="tabla">
          <tr><th>Componente</th><th>Definición</th><th>Ejemplo</th></tr>
          <tr><td><b>Matriz</b></td><td>Complejo formado por parches y corredores. Desde el punto de vista funcional es el <b>elemento dominante</b>: tiene <b>mayor superficie</b>, está <b>mejor conectado</b> y cumple un papel fundamental en la dinámica del paisaje.</td><td>Los cultivos en la Pampa; el bosque en una selva poco intervenida</td></tr>
          <tr><td><b>Parches</b></td><td>Unidades morfológicas que se pueden diferenciar en el territorio: áreas relativamente homogéneas que difieren de su entorno.</td><td>Un remanente de bosque en un mar de soja; una laguna</td></tr>
          <tr><td><b>Corredores</b></td><td>Conexiones lineales entre parches.</td><td>Ríos con bosque ribereño, cortinas forestales, rutas</td></tr>
        </table></div>
        <div class="ojo"><b>La matriz no tiene por qué ser natural</b>
          <p>Es la cobertura dominante, sea cual sea. En una zona agrícola la matriz son los cultivos y el bosque queda como parches. Si hay dudas, la matriz es la cobertura que ocupa más superficie y está más conectada.</p>
        </div>`,
    },
    {
      id: "pai-estructura",
      titulo: "Estructura: parches y corredores en detalle",
      html: `
        <p>La estructura tiene dos componentes: la <b>composición</b> (qué variedad y abundancia de parches hay) y la <b>configuración</b> (cómo están distribuidos en el espacio).</p>
        <h4>Superficie de los parches</h4>
        <p>Se relaciona con la <b>diversidad de especies</b> por el efecto área de la Teoría de Biogeografía de Islas (TBI): a mayor superficie, mayor diversidad y mayor tamaño de las poblaciones.</p>
        <h4>Forma de los parches</h4>
        <p>Suele ser <b>más relevante que el tamaño</b>. Depende de las condiciones naturales (formas irregulares) y de las actividades humanas (formas regulares): una actividad humana <b>moderada</b> diversifica las formas, y una <b>intensa</b> las simplifica.</p>
        <ul>
          <li><b>Compactas</b> (círculo, cuadrado): facilitan la conservación de los valores naturales, porque tienen más núcleo y menos borde.</li>
          <li><b>Irregulares:</b> facilitan el intercambio de flujos con el entorno.</li>
          <li><b>Ramificadas:</b> facilitan la conducción o el transporte.</li>
        </ul>
        <p>La forma determina la relación entre la <b>zona núcleo</b> (el interior, con condiciones propias del hábitat) y el <b>borde</b> (con condiciones intermedias por la influencia de la matriz: más luz, viento, depredadores). Las especies tienen preferencias o tolerancias diferentes: hay especies de interior y especies de borde.</p>
        <figure class="fig"><img src="img/formas.jpg" alt="Formas de los parches y relación núcleo-borde" loading="lazy"><figcaption>Formas de parches y proporción de núcleo y borde; seis tipos de patrón espacial (Forman, 1990). (Clase 6)</figcaption></figure>
        <h4>Corredores</h4>
        <p>Permiten la interconexión entre parches y facilitan la <b>conectividad</b>. Reducen el <b>efecto distancia</b> de la TBI: a mayor distancia entre fragmentos aislados, menor diversidad.</p>
        <p><b>Funciones de los corredores:</b></p>
        <ul>
          <li><b>Conducción:</b> facilitan el desplazamiento de elementos en su interior. Dependen del ancho, del largo y de las discontinuidades.</li>
          <li><b>Filtro:</b> son una barrera absoluta, parcial o inexistente según la especie. Por ejemplo, una ruta para un anfibio.</li>
          <li><b>Hábitat:</b> los lineales (angostos) sirven a especies generalistas; los de franja (anchos), a especialistas.</li>
          <li><b>Fuente:</b> permiten que las especies se distribuyan y expandan hacia la matriz.</li>
          <li><b>Sumidero:</b> dan refugio a especies de la matriz o las absorben.</li>
        </ul>
        <p><b>Riesgos:</b> pueden facilitar la expansión de especies no deseadas (invasoras, patógenos, depredadores) y la propagación del fuego y otros disturbios.</p>
        <figure class="fig chica"><img src="img/slides/pai_corredores.jpg" alt="Tipos de corredores" loading="lazy"><figcaption>Tipos de corredores: lineal, con nodos, “stepping stones” (pasaderas) y mosaico. (Clase 6)</figcaption></figure>`,
    },
    {
      id: "pai-conectividad",
      titulo: "Conectividad",
      html: `
        <p>La <b>conectividad</b> es el grado en que el paisaje <b>facilita o impide</b> el movimiento de los organismos entre parches de hábitat.</p>
        <div class="cols">
          <div class="col"><h5>Estructural</h5><p>La conexión <b>espacial</b> entre parches de un tipo de hábitat. Se ve en el mapa y es igual para todas las especies.</p></div>
          <div class="col"><h5>Funcional</h5><p>Considera la <b>respuesta de los individuos</b> ante la estructura del paisaje. Depende de la especie: sus requisitos de hábitat, su tolerancia a hábitats alterados y su capacidad de dispersión.</p></div>
        </div>
        <div class="ejemplo"><b>Ejemplo</b>
          <p>Para un ave voladora generalista, dos bosques separados por 500 m de pastizal pueden estar funcionalmente conectados aunque no haya corredor. Para un anfibio, una cortina de álamos que los une físicamente puede no servir si es demasiado seca. Hay conectividad estructural pero no funcional.</p>
        </div>
        <figure class="fig chica"><img src="img/slides/pai_conectividad.jpg" alt="Conectividad estructural y funcional" loading="lazy"><figcaption>Conectividad estructural y funcional. (Clase 6)</figcaption></figure>
        <p>La conectividad sostiene procesos ecológicos clave: <b>dispersión, flujo génico entre poblaciones aisladas, migración y evolución</b>. Mantenerla es una condición clave para la persistencia de la biodiversidad, y se considera en la planificación del territorio y el diseño de áreas protegidas.</p>`,
    },
    {
      id: "pai-dinamica",
      titulo: "Dinámica del paisaje y cambios de cobertura y uso",
      html: `
        <p>El paisaje es una <b>entidad dinámica en permanente evolución</b>. En su dinámica intervienen, interrelacionados:</p>
        <ul>
          <li><b>Procesos del medio abiótico:</b> acumulación, erosión.</li>
          <li><b>Procesos del medio biótico:</b> sucesión, colonización, dispersión.</li>
          <li><b>Procesos antrópicos:</b> cambios de cobertura y uso del suelo, políticas.</li>
        </ul>
        <p>El mosaico generalmente no tiene una forma permanente: cambian el tamaño, la forma, el arreglo espacial y la calidad de los parches. El paisaje reacciona a las <b>perturbaciones</b>:</p>
        <div class="cols">
          <div class="col"><h5>Naturales</h5><p>Inundaciones, incendios, tormentas eléctricas, huracanes, tormentas de viento, avalanchas.</p></div>
          <div class="col"><h5>Antrópicas</h5><p>Intensificación de la agricultura, abandono rural, supresión del fuego, deforestación, urbanización.</p></div>
        </div>
        <h4>Cobertura vs. uso del suelo</h4>
        <div class="cols">
          <div class="col"><h5>Cobertura de la tierra</h5><p>La naturaleza <b>física o biótica</b> que recubre la superficie: agua, suelo desnudo, bosque, pastizal. Es lo que “se ve”.</p></div>
          <div class="col"><h5>Uso del suelo</h5><p>La forma en que los <b>seres humanos utilizan</b> el territorio: agrícola, ganadero, urbano, industrial, recreativo. Un mismo pastizal puede ser una reserva o un campo ganadero.</p></div>
        </div>
        <p>Los cambios de cobertura y uso son <b>uno de los componentes más importantes del cambio ambiental global</b> (IPBES, 2019): son la principal causa directa de pérdida de biodiversidad terrestre. Son una alteración directa para satisfacer las demandas de la sociedad (Foley et al., 2005: a medida que avanza la transición de uso, del ecosistema natural a la agricultura intensiva y la urbanización, se pierden servicios ecosistémicos).</p>
        <figure class="fig chica"><img src="img/slides/pai_cambio_uso.jpg" alt="Cambios en la cobertura/uso del suelo" loading="lazy"><figcaption>Transición de uso del suelo (Foley et al., 2005). (Clase 6)</figcaption></figure>
        <h4>Detección de cambios</h4>
        <ul>
          <li><b>Datos multitemporales:</b> datos oficiales de uso (censos agropecuarios: hectáreas cultivadas, unidades productivas) e imágenes satelitales.</li>
          <li><b>Análisis cuantitativos:</b> estadística descriptiva y algoritmos para analizar imágenes (métodos algebraicos, índices, clasificación).</li>
          <li><b>Modelado del cambio futuro:</b> escenarios (tendencial, pesimista, deseable) y proyecciones con algoritmos.</li>
        </ul>
        <figure class="fig chica"><img src="img/slides/pai_deteccion.jpg" alt="Detección de cambios" loading="lazy"><figcaption>Detección y modelado de cambios en el paisaje. (Clase 6)</figcaption></figure>`,
    },
    {
      id: "pai-fragmentacion",
      titulo: "Fragmentación",
      html: `
        <p>Los cambios en el paisaje <b>aumentan la heterogeneidad</b>, <b>modifican la conectividad</b> estructural y funcional y pueden provocar <b>fragmentación</b>: la división de un hábitat continuo en fragmentos más chicos y aislados. A medida que avanza, el hábitat original deja de ser la matriz y pasa a ser parches.</p>
        <div class="idea"><b>Efectos de la fragmentación (Santos y Tellería, 2006)</b>
          <ol>
            <li><b>Reducción de la superficie de los parches:</b> menos hábitat → poblaciones más chicas → más estocasticidad demográfica y ambiental → <b>más riesgo de extinción</b>.</li>
            <li><b>Separación de los fragmentos:</b> más aislamiento de las poblaciones → menos dispersión → poblaciones más chicas → <b>más riesgo de extinción</b>.</li>
            <li><b>Efectos de borde:</b> mayor relación perímetro/superficie → más borde → peor calidad del hábitat → <b>más riesgo de extinción</b>.</li>
          </ol>
        </div>
        <figure class="fig"><img src="img/slides/pai_fragmentacion.jpg" alt="Efectos de la fragmentación" loading="lazy"><figcaption>Efectos de la fragmentación. (Clase 6)</figcaption></figure>
        <h4>Análisis funcional del paisaje</h4>
        <p>El programa incluye el <b>Landscape Function Analysis</b> (LFA; Tongway y Hindley, 2005), un método de campo para zonas áridas y semiáridas. Evalúa si el paisaje <b>retiene o pierde recursos</b> (agua, suelo, nutrientes, semillas):</p>
        <ul>
          <li>A lo largo de transectas pendiente abajo, se registran los <b>parches</b> (manchones de vegetación, montículos, troncos, que capturan recursos) y los <b>interparches</b> (suelo desnudo por donde los recursos escurren o se vuelan).</li>
          <li>Con indicadores de superficie del suelo (cobertura, costras biológicas, erosión, rugosidad, etc.) se calculan tres índices: <b>estabilidad</b>, <b>infiltración</b> y <b>ciclado de nutrientes</b>.</li>
          <li>Un paisaje <b>funcional</b> tiene muchos parches que retienen recursos. Uno <b>disfuncional</b> o degradado pierde recursos y tiene interparches largos y erosionados. Es una herramienta útil para evaluar la desertificación y el éxito de la restauración.</li>
        </ul>`,
    },
  ],
  tp: {
    titulo: "TP 5 · Detección de la cobertura y el uso del suelo",
    html: `
      <p><b>Objetivo:</b> elaborar un mapa temático de cobertura y uso del suelo y calcular la superficie de cada clase. Se trabajó en GEE y QGIS, con el mismo mosaico Landsat 8 del TP 4.</p>
      <ol class="pasos">
        <li>Construir el <b>mosaico</b> sin nubes (primavera-verano) y recortarlo al área.</li>
        <li>Reconocer las coberturas (en el mosaico y en las imágenes de alta resolución) y definir <b>categorías mutuamente excluyentes y exhaustivas</b>.</li>
        <li><b>Clasificación no supervisada</b> (k-means, <code>ee.Clusterer.wekaKMeans(x)</code>) con 5.000 píxeles de muestra. Primero con tantas clases como categorías; si alguna categoría queda confundida, se piden más clases (por ejemplo, 10).</li>
        <li><b>Exportar</b> la clasificación a Google Drive (30 m) y abrirla en QGIS. Asignar nombres y colores a las clases (simbología).</li>
        <li>Calcular superficies: <b>poligonizar → reproyectar → calcular el área → exportar a hoja de cálculo → tabla dinámica</b>.</li>
        <li>Armar el <b>mapa temático</b> en la composición de impresión, con título, leyenda, escala, norte, coordenadas y fuente.</li>
      </ol>
      <div class="ojo"><b>¿Qué clases se confunden a priori?</b>
        <p>Las espectralmente parecidas: urbano con suelo desnudo, cultivos verdes con pastizales o bosque abierto, agua profunda con sombras o áreas quemadas.</p>
      </div>
      <div class="tu-informe"><b>Tu informe: Triple Frontera (≈ 1.200 km²)</b>
        <p><b>Metodología:</b> k-means con <b>9 clases</b>. Con 6, el agua de los ríos Paraná e Iguazú quedaba mezclada con otras coberturas de baja reflectancia, porque representa solo ≈ 3 % del área y k-means ubica los centroides según la variabilidad y la abundancia de píxeles. Después se reagruparon en 6 categorías.</p>
        <div class="tabla-wrap"><table class="tabla">
          <tr><th>Cobertura y uso</th><th>Área (ha)</th><th>%</th></tr>
          <tr><td>Bosques</td><td>36.342,5</td><td>30,4</td></tr>
          <tr><td>Construcciones y rutas</td><td>24.710,2</td><td>20,6</td></tr>
          <tr><td>Cultivos agrícolas</td><td>19.726,0</td><td>16,5</td></tr>
          <tr><td>Suelo desnudo</td><td>19.664,4</td><td>16,4</td></tr>
          <tr><td>Bosque poco denso</td><td>15.538,1</td><td>13,0</td></tr>
          <tr><td>Agua</td><td>3.777,6</td><td>3,2</td></tr>
        </table></div>
        <p><b>Patrón:</b> al <b>sudeste</b> (Misiones) hay una <b>matriz continua de bosque denso</b>. Al <b>norte</b>, urbanización y caminos. Al <b>oeste y suroeste</b> (Paraguay), un mosaico agrícola fragmentado con remanentes de bosque. Los ríos marcan el límite entre los tres países.</p>
        <p><b>Conclusión:</b> el bosque es la cobertura individual más extensa, pero las coberturas antrópicas suman más de la mitad del área. La fragmentación hacia el oeste y el norte sugiere que la frontera agrícola y urbana avanza sobre la Selva Paranaense, con consecuencias para la conectividad.</p>
      </div>`,
  },
  practica: [
    {
      p: "Imagen de Google Earth de Zonda (San Juan): describa la composición y estructura del paisaje e identifique matriz, parches y corredores. ¿Qué procesos abióticos, bióticos y antrópicos explican el patrón del mosaico?",
      r: `<p><b>Composición y estructura:</b> es un valle árido de la Precordillera con un <b>oasis irrigado</b>. Hay un mosaico de fincas (viñedos, olivares) con formas geométricas, un área urbana y, alrededor, sierras con vegetación xerófila rala.</p>
        <ul>
          <li><b>Matriz:</b> depende de la extensión de la imagen. Si domina el entorno desértico, la matriz es el monte o desierto de sierras y pie de monte, y el oasis forma parches. Si la imagen está centrada en el valle cultivado, la matriz es el mosaico agrícola.</li>
          <li><b>Parches:</b> fincas, la mancha urbana, cerros aislados y lotes abandonados o con suelo desnudo.</li>
          <li><b>Corredores:</b> el río San Juan y su vegetación ribereña, los canales de riego con hileras de álamos o cortinas forestales, y las rutas.</li>
        </ul>
        <p><b>Procesos abióticos:</b> el relieve (sierras y valle), el río y los conos aluviales, el clima árido y la disponibilidad de agua de deshielo. <b>Bióticos:</b> la vegetación nativa del Monte (adaptada a la aridez) y la vegetación ribereña asociada al agua. <b>Antrópicos:</b> la sistematización del riego, que <b>es lo que hace posible el oasis</b>, la agricultura, la urbanización y los caminos. Los límites rectos y abruptos entre el oasis y el secano evidencian el control humano a través del agua.</p>`,
    },
    {
      p: "¿Por qué la forma de un parche puede ser más importante que su tamaño?",
      r: `<p>Porque determina la proporción entre núcleo y borde. Dos parches de igual superficie pueden tener núcleos muy distintos: uno alargado o irregular es casi todo borde. Las especies de interior dependen del núcleo, y el borde tiene condiciones alteradas (microclima, depredadores, invasoras).</p>`,
    },
    {
      p: "Explicá con un ejemplo la diferencia entre conectividad estructural y funcional.",
      r: `<p>La estructural es la continuidad física del hábitat (se ve en el mapa). La funcional depende de la especie. Ejemplo: un corredor ribereño angosto conecta dos bosques (conectividad estructural), y un ave generalista lo usa (conectividad funcional), pero un mamífero de interior que evita los bordes no lo atraviesa (sin conectividad funcional para él).</p>`,
    },
    {
      p: "¿Qué diferencia hay entre cobertura de la tierra y uso del suelo?",
      r: `<p>La cobertura es lo físico o biótico que recubre la superficie (bosque, agua, pastizal, suelo desnudo). El uso es lo que hacen las personas con ese territorio (agricultura, ganadería, urbanización, conservación). Un pastizal (cobertura) puede tener uso ganadero o de conservación.</p>`,
    },
    {
      p: "Mencioná los tres efectos de la fragmentación y su cadena de consecuencias.",
      r: `<p>(1) Menos superficie de hábitat → poblaciones más chicas → más estocasticidad → más riesgo de extinción. (2) Aislamiento de los fragmentos → menos dispersión y flujo génico → más riesgo de extinción. (3) Más efecto borde (mayor relación perímetro/área) → peor calidad del hábitat → más riesgo de extinción.</p>`,
    },
  ],
  glosario: [
    ["Mosaico", "Conjunto de parches, corredores y matriz que forman el paisaje."],
    ["Matriz", "Elemento dominante: mayor superficie, mejor conectado, controla la dinámica."],
    ["Parche", "Unidad relativamente homogénea que difiere de su entorno."],
    ["Corredor", "Elemento lineal que conecta parches."],
    ["Efecto borde", "Cambios en las condiciones del hábitat cerca del límite con la matriz."],
    ["Zona núcleo", "Interior del parche, sin influencia del borde."],
    ["Fragmentación", "División de un hábitat continuo en fragmentos chicos y aislados."],
    ["Stepping stones", "Pasaderas: parches chicos que funcionan como escalones entre parches grandes."],
    ["LFA", "Landscape Function Analysis: evalúa si el paisaje retiene o pierde recursos."],
  ],
  biblio: [
    "Turner, M. G. y Gardner, R. H. (2015). <i>Landscape Ecology in Theory and Practice: Pattern and Process</i>. 2.ª ed. Springer.",
    "Farina, A. (2006). <i>Principles and methods in landscape ecology</i>. Springer.",
    "Santos, T. y Tellería, J. L. (2006). Pérdida y fragmentación del hábitat: efecto sobre la conservación de las especies. <i>Ecosistemas</i> 15(2).",
    "Tongway, D. J. y Hindley, N. L. (2005). <i>Landscape Function Analysis</i>. CSIRO.",
  ],
});
