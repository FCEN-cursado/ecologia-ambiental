(window.UNIDADES ||= []).push({
  id: "clima",
  num: 3,
  tema: "clima",
  titulo: "Clima y vegetación",
  bajada: "Cómo leer un climograma, cómo se clasifican las plantas y los biomas según el clima, y cómo eso sirve para proyectar el cambio climático.",
  programa: "c) Relaciones entre el clima y la vegetación. Relevancia para proyectar la distribución de las distintas formas de vida ante escenarios climáticos futuros. Importancia para la sostenibilidad de ecosistemas y sistemas productivos.",
  clases: ["2 · Climograma de Walter-Lieth", "3 · Diversidad funcional (biodiversidad funcional y cambio climático)"],
  resumen: `
    <ul>
      <li>El <b>climograma de Walter-Lieth</b> grafica la T y la P mensuales con la escala <b>20 mm = 10 °C</b> (índice de Gaussen). Cuando la curva de T supera a la de P, el período es <b>seco</b>.</li>
      <li>Los <b>atributos funcionales</b> (morfológicos, fisiológicos, fenológicos) vinculan a las plantas con las funciones y los servicios ecosistémicos.</li>
      <li><b>Raunkiaer</b> clasifica las formas de vida por la posición de las yemas. <b>Grime</b> clasifica estrategias según el estrés, el disturbio y la competencia (C-S-R).</li>
      <li><b>Holdridge</b> (biotemperatura, P, ETP/P), <b>Whittaker</b> (T y P: 9 biomas) y <b>Köppen</b> (grupos A-E) relacionan el clima con la vegetación.</li>
      <li>Ante el cambio climático <b>no migran biomas enteros</b>: los modelos del sistema terrestre usan <b>tipos funcionales de plantas</b>.</li>
    </ul>`,
  secciones: [
    {
      id: "cli-climograma",
      titulo: "El climograma de Walter-Lieth",
      html: `
        <p>Un <b>climograma</b> representa de forma sintética cómo varían la temperatura y la precipitación a lo largo del año en un lugar. Se construye con los valores <b>medios mensuales</b> de una estación meteorológica, a partir de las normales climáticas del SMN.</p>
        <ul>
          <li><b>Eje X:</b> los meses. En el hemisferio sur conviene empezar en julio, para que el verano quede en el centro, aunque en el TP se usó de enero a diciembre.</li>
          <li><b>Precipitación:</b> en barras azules (mm).</li>
          <li><b>Temperatura:</b> en puntos unidos por una línea roja (°C).</li>
          <li><b>Condición de Walter-Lieth:</b> la escala de P es <b>siempre el doble</b> que la de T: 10 °C ocupan la misma altura que 20 mm.</li>
        </ul>
        <div class="idea"><b>¿Por qué P = 2T? El índice de Gaussen</b>
          <p>Gaussen propuso que un mes es <b>seco</b> cuando <b>P ≤ 2T</b> (P en mm y T en °C). Con la escala 20 mm = 10 °C, eso se ve directamente en el gráfico:</p>
          <ul>
            <li>Si la <b>curva de T queda por encima de las barras de P</b>, el período es <b>seco</b>: hay déficit hídrico, porque la evapotranspiración supera a la precipitación.</li>
            <li>Si las <b>barras de P quedan por encima de la curva de T</b>, el período es <b>húmedo</b>: la precipitación cubre la demanda evaporativa.</li>
            <li>Si la T media es &lt; 0 °C, hay heladas y la precipitación probablemente sea nieve.</li>
          </ul>
        </div>
        <figure class="fig"><img src="img/clima.jpg" alt="Ejemplos de climogramas" loading="lazy"><figcaption>Izquierda: climograma con máximos, mínimos y período de aridez marcado. Derecha: climograma de Mendoza. (Clase 2 · Climograma)</figcaption></figure>
        <h4>Cómo leer un climograma, paso a paso</h4>
        <ol class="pasos">
          <li><b>Hemisferio:</b> si las T más altas están en diciembre-febrero, es el hemisferio sur.</li>
          <li><b>Temperatura media anual y amplitud térmica</b> (T del mes más cálido − T del mes más frío). Una amplitud chica indica influencia oceánica o tropical; una grande, continentalidad.</li>
          <li><b>Precipitación anual total</b> (la suma de las 12 barras): &lt; 250 mm es árido, 250-500 semiárido, 500-1.000 subhúmedo y &gt; 1.000 húmedo.</li>
          <li><b>Régimen de lluvias:</b> monzónico o estival (lluvias en verano, típico del centro-norte argentino), mediterráneo o invernal (lluvias en invierno, típico de Patagonia y Chile) o isohigro (lluvias parejas, como en la Pampa húmeda).</li>
          <li><b>Períodos secos y húmedos:</b> dónde se cruzan las curvas.</li>
          <li><b>Forma de la precipitación:</b> nieve si la T está cerca o por debajo de 0 °C.</li>
          <li><b>Vegetación esperada:</b> se integra todo lo anterior y se lo vincula con un bioma (Whittaker, Holdridge).</li>
        </ol>
        <div class="parcial"><b>Parcial 2022: unir climogramas con localidades</b>
          <p>El parcial pedía unir tres climogramas con <b>San Rafael</b> (Mendoza), <b>General Pico</b> (La Pampa) y <b>Dolores</b> (Buenos Aires), que forman un transecto oeste-este a ≈ 35-36° S, y justificar el bioma esperado. El razonamiento:</p>
          <ul>
            <li>Como en el centro de Argentina la humedad viene del Atlántico, la <b>P aumenta hacia el este</b> y la <b>amplitud térmica disminuye</b> cerca del mar.</li>
            <li><b>San Rafael:</b> el climograma más seco, con ≈ 300-400 mm, lluvias de verano y casi todo el año con T por encima de P. Corresponde a un <b>desierto o arbustal templado</b>, el Monte con jarillas.</li>
            <li><b>General Pico:</b> intermedio, con ≈ 700-800 mm, lluvias concentradas en primavera-verano y un déficit corto. Corresponde a la transición entre pastizal y bosque abierto (Espinal o caldenal, y pampa semiárida).</li>
            <li><b>Dolores:</b> el más húmedo, con ≈ 900-1.000 mm repartidos todo el año y baja amplitud. Corresponde a un <b>pastizal templado o pradera</b>, la Pampa húmeda.</li>
          </ul>
          <p>Los valores son aproximados: en el parcial hay que leerlos del gráfico. Lo importante es justificar con la P anual, su distribución, el período seco y la amplitud térmica.</p>
        </div>`,
    },
    {
      id: "cli-funcional",
      titulo: "Diversidad funcional: servicios, funciones y atributos",
      html: `
        <p>La diversidad funcional sirve para entender y simular cómo funciona nuestro planeta en un contexto de cambio climático. Se organiza en tres niveles:</p>
        <div class="cols">
          <div class="col"><h5>Servicios ecosistémicos</h5><p>Son los beneficios que los ecosistemas brindan a las personas:</p>
            <ul><li><b>De aprovisionamiento:</b> bienes tangibles como alimento, madera o agua.</li><li><b>De regulación:</b> hídrica, del aire, del agua, polinización, control de enfermedades.</li><li><b>De soporte:</b> formación de suelo, PPN, ciclado de nutrientes.</li><li><b>Culturales:</b> recreativos, espirituales, identitarios.</li></ul></div>
          <div class="col"><h5>Funciones ecosistémicas</h5><p>Son los procesos que surgen de la interacción entre vegetación, agua, suelo, atmósfera y biota:</p>
            <ul><li>Captura de carbono (PPN)</li><li>Absorción de agua y nutrientes</li><li>Fijación de N y solubilización de P</li><li>Descomposición</li><li>Fijación de suelos</li></ul></div>
          <div class="col"><h5>Atributos funcionales</h5><p>Son rasgos medibles de los organismos que afectan su respuesta al ambiente o su efecto sobre el ecosistema (hay una base de datos global, TRY):</p>
            <ul><li><b>Morfológicos:</b> tamaño de hoja, raíces</li><li><b>Anatómicos:</b> leño, xilema</li><li><b>Bioquímicos:</b> pigmentos, enzimas</li><li><b>Fisiológicos:</b> fotosíntesis C3, C4, CAM</li><li><b>Fenológicos:</b> deciduo o perenne</li></ul></div>
        </div>
        <p>Ejemplos de clase de organismos que brindan servicios: la ranita del Pehuenche, las costras biológicas del suelo, las aves rapaces (aguiluchos, caranchos, chimangos), el pachango (<i>Prosopanche</i>) y el algarrobo.</p>
        <div class="idea"><b>Tipos funcionales de plantas (Díaz et al., 2002)</b>
          <p>Son grupos de especies que comparten atributos y responden de manera parecida al ambiente o tienen efectos parecidos sobre el ecosistema, sin importar su parentesco. El enfoque es <b>flexible</b>: los tipos se definen según la escala y la pregunta, y es <b>complementario</b>, no opuesto, a las clasificaciones taxonómica y filogenética. Antecedentes: Teofrasto (árboles, arbustos, hierbas), Raunkiaer y Grime.</p>
        </div>
        <p><b>¿Por qué importa la diversidad funcional?</b> Otorga mayor <b>resiliencia</b> al sistema (si una especie falla, otra con función parecida la reemplaza: <i>redundancia funcional</i>) y permite aumentar los servicios ecosistémicos. Se cuantifica con índices como el de <b>Rao</b> (Casanoves et al., 2011).</p>`,
    },
    {
      id: "cli-raunkiaer",
      titulo: "Formas de vida de Raunkiaer y estrategias de Grime",
      html: `
        <h4>Raunkiaer (1903): según dónde están las yemas de renuevo</h4>
        <p>El criterio es cómo protege la planta sus yemas durante la estación desfavorable (frío o sequía). Cuanto más riguroso es el clima, más protegidas están.</p>
        <div class="tabla-wrap"><table class="tabla">
          <tr><th>Forma de vida</th><th>Posición de las yemas</th><th>Ejemplo</th><th>Domina en…</th></tr>
          <tr><td>Fanerófitas</td><td>Altas, expuestas (árboles, arbustos altos)</td><td>Algarrobo (<i>Neltuma</i>)</td><td>Climas cálidos y húmedos (selvas)</td></tr>
          <tr><td>Caméfitas</td><td>Cerca del suelo (&lt; 25-50 cm)</td><td>Yareta (<i>Azorella</i>), plantas en cojín</td><td>Alta montaña, climas fríos y ventosos</td></tr>
          <tr><td>Hemicriptófitas</td><td>A ras del suelo</td><td><i>Aristida mendocina</i>, gramíneas en mata</td><td>Pastizales templados y fríos</td></tr>
          <tr><td>Criptófitas o geófitas</td><td>Bajo el suelo (bulbos, rizomas)</td><td>Bulbosas, pachango</td><td>Climas con estación muy marcada</td></tr>
          <tr><td>Terófitas</td><td>Sin yemas: pasan la estación desfavorable como <b>semilla</b> (anuales)</td><td>Anuales del desierto</td><td>Desiertos con lluvias impredecibles</td></tr>
          <tr><td>Hidrófitas</td><td>Bajo el agua</td><td>Plantas acuáticas</td><td>Ambientes acuáticos</td></tr>
        </table></div>
        <figure class="fig"><img src="img/raunk.jpg" alt="Formas de vida de Raunkiaer" loading="lazy"><figcaption>Formas de vida de Raunkiaer (1-9) según la posición de las yemas. (Clase 3)</figcaption></figure>
        <h4>Grime (1974): estrategias C-S-R</h4>
        <p>Grime propone que hay tres limitantes principales: el <b>estrés</b> (condiciones que limitan la producción, como sequía, frío o pocos nutrientes), el <b>disturbio</b> (destrucción de biomasa, como fuego, pastoreo o arado) y la <b>competencia</b>.</p>
        <div class="cols">
          <div class="col"><h5>C · Competidoras</h5><p>Poco estrés y poco disturbio. Crecen rápido, son altas y acaparan recursos. Ej.: cortadera.</p></div>
          <div class="col"><h5>S · Tolerantes al estrés</h5><p>Mucho estrés y poco disturbio. Crecen lento, tienen tejidos duraderos y conservan recursos. Ej.: cactus como <i>Trichocereus candicans</i>.</p></div>
          <div class="col"><h5>R · Ruderales</h5><p>Mucho disturbio y poco estrés. Tienen ciclo corto y muchas semillas. Ej.: <i>Salsola kali</i> (cardo ruso).</p></div>
        </div>
        <p>No hay estrategia viable con mucho estrés <i>y</i> mucho disturbio a la vez. Hay estrategias intermedias (C-S, C-R, S-R, C-S-R).</p>
        <figure class="fig chica"><img src="img/grime.jpg" alt="Triángulo de Grime" loading="lazy"><figcaption>Triángulo de Grime. (Clase 3)</figcaption></figure>`,
    },
    {
      id: "cli-clasificaciones",
      titulo: "Clasificaciones clima-vegetación: Holdridge, Whittaker, Köppen",
      html: `
        <div class="tabla-wrap"><table class="tabla">
          <tr><th>Sistema</th><th>Variables</th><th>Resultado</th><th>Limitaciones</th></tr>
          <tr><td><b>Holdridge</b> (1947)</td><td>Biotemperatura (T media útil, entre 0 y 30 °C), precipitación anual y humedad (ETP/P)</td><td>Zonas de vida en un diagrama triangular de hexágonos, con regiones latitudinales y pisos altitudinales</td><td>Predice mal las sabanas, porque no considera la estacionalidad ni el fuego</td></tr>
          <tr><td><b>Whittaker</b> (1975)</td><td>T media anual y P media anual</td><td>9 biomas: selva lluviosa tropical, selva estacional o sabana, desierto subtropical, bosque ralo o arbustal, bosque lluvioso templado, bosque estacional templado, pradera templada o desierto, bosque boreal y tundra</td><td>En la zona intermedia (arbustal) influyen el suelo y el fuego</td></tr>
          <tr><td><b>Köppen-Geiger</b> (1900)</td><td>Régimen mensual de T y P</td><td>A tropical, B seco (cálido o frío), C templado (con o sin estación seca), D continental y E polar, con subtipos</td><td>Es una clasificación climática; la vegetación se infiere</td></tr>
        </table></div>
        <div class="figs">
          <figure class="fig"><img src="img/slides/cli_holdridge.jpg" alt="Zonas de vida de Holdridge" loading="lazy"><figcaption>Zonas de vida de Holdridge. Existe un mapa para Argentina (Derguy et al., 2019).</figcaption></figure>
          <figure class="fig"><img src="img/slides/cli_whittaker.jpg" alt="Biomas de Whittaker" loading="lazy"><figcaption>Diagrama de Whittaker: biomas según la T y la P medias anuales.</figcaption></figure>
          <figure class="fig"><img src="img/slides/cli_koppen.jpg" alt="Mapa de Köppen-Geiger" loading="lazy"><figcaption>Mapa climático de Köppen-Geiger.</figcaption></figure>
        </div>
        <div class="ejemplo"><b>Köppen y el cambio climático (Beck et al., 2023)</b>
          <p>Hay mapas de Köppen de 1 km de resolución para 1901-2099. Entre 1901-1930 y 1991-2020, ≈ 5 % de la superficie continental ya cambió de clase climática principal. Para 2071-2099 se proyecta que cambie un 5 % adicional con bajas emisiones (SSP1-2.6), 8 % con emisiones intermedias (SSP2-4.5) y 13 % con altas (SSP5-8.5).</p>
        </div>
        <p><b>¿Para qué sirven estas clasificaciones?</b> Para comparar regiones, predecir qué vegetación esperar en un clima dado, detectar desajustes (vegetación que no coincide con el clima por uso humano, suelo o fuego) y proyectar cambios futuros.</p>`,
    },
    {
      id: "cli-esm",
      titulo: "Simular la vegetación ante el cambio climático",
      html: `
        <p>Clima y vegetación se afectan mutuamente (<b>interacciones biogeoquímicas</b>):</p>
        <ul>
          <li><b>CO₂ y fotosíntesis:</b> la vegetación es un sumidero de carbono.</li>
          <li><b>Radiación y albedo:</b> el suelo desnudo o la nieve reflejan más que un bosque.</li>
          <li><b>Vapor de agua y evapotranspiración:</b> la vegetación recicla las lluvias.</li>
          <li><b>Metano y otros GEI:</b> los humedales y el ciclo del N los emiten.</li>
        </ul>
        <p>Los <b>Earth System Models (ESM)</b>, o Modelos del Sistema Terrestre, intentan simular los procesos físicos, químicos y biológicos del planeta: atmósfera, biosfera, cambios de uso, agua, hielo y océanos. A diferencia de los modelos climáticos, <b>reciben información de la superficie</b> (ciclos de nutrientes, captura de C). Sirven para reconstruir el pasado y proyectar el futuro de los ecosistemas, el carbono y el clima.</p>
        <div class="idea"><b>Idea clave</b>
          <p>Ante el cambio climático <b>no migran ecosistemas o biomas enteros</b>: cada especie responde de forma individual. Por eso los ESM representan la vegetación con <b>tipos funcionales de plantas</b> (cultivos, árboles o arbustos deciduos o perennes, de hoja fina o ancha, musgos y líquenes). Así pueden simular <b>nuevos ensambles</b> de vegetación que hoy no existen.</p>
        </div>
        <figure class="fig chica"><img src="img/slides/cli_interacciones.jpg" alt="Earth System Models" loading="lazy"><figcaption>Earth System Models. (Clase 3)</figcaption></figure>
        <p>Recurso del TP: el mapa de cobertura del suelo y tipos funcionales de la ESA CCI (1992-2020, <a href="https://maps.elie.ucl.ac.be/CCI/viewer/" target="_blank" rel="noopener">visor</a>), donde se buscaron los sitios de los climogramas y se compararon con lo esperado.</p>`,
    },
  ],
  tp: {
    titulo: "TP 1 · Turismo con climogramas · TP 2 · Cambio climático en artículos",
    html: `
      <h4>TP 1: qué se hizo</h4>
      <p>Cada estudiante eligió una localidad, descargó las <b>Estadísticas Climáticas Normales</b> del SMN, construyó en Excel un climograma de Walter-Lieth (barras azules de P, línea roja de T, escala 10 °C = 20 mm) y respondió estas preguntas:</p>
      <ol>
        <li>Localidad y provincia.</li>
        <li>¿Tiene invierno y verano muy marcados? (se ve en la amplitud térmica)</li>
        <li>Amplitud térmica anual, P anual y T media anual.</li>
        <li>¿Cuándo y en qué forma ocurren las precipitaciones (lluvia o nieve)?</li>
        <li>¿Hay una estación seca o húmeda? ¿Cuándo?</li>
        <li>¿Cómo se distribuyen las lluvias entre las estaciones?</li>
        <li>¿Hay un período de déficit hídrico para la vegetación?</li>
        <li>¿Qué vegetación se espera? ¿Coincide con la observada?</li>
        <li>¿Qué época recomendás para hacer turismo, y por qué?</li>
      </ol>
      <div class="tu-informe"><b>Tu climograma: San Antonio Oeste (Río Negro)</b>
        <p>T media de enero 23,1 °C y de julio 7,2 °C, con una <b>amplitud de 15,9 °C</b>. P ≈ <b>290 mm/año</b>, con un máximo de marzo a mayo. Las barras solo cortan la curva de T entre abril y julio: es un período relativamente húmedo y en el resto del año hay déficit. La vegetación corresponde al <b>Monte</b> (jarilla, alpataco, piquillín, chañar), con coirones que crecen en la estación húmeda.</p>
      </div>
      <div class="ejemplo"><b>Comparación con los climogramas del curso</b>
        <ul>
          <li><b>Iguazú (Misiones):</b> 1.950 mm, T 21 °C, amplitud 11 °C y <b>ningún mes seco</b>. Corresponde a la selva paranaense.</li>
          <li><b>Las Heras (Mendoza):</b> 235 mm, amplitud 17,6 °C y casi todo el año seco, con lluvias de verano. Corresponde al Monte.</li>
          <li><b>Maquinchao (Río Negro):</b> 185 mm, T 9 °C y lluvias de otoño-invierno. Corresponde a la estepa patagónica.</li>
          <li><b>Catamarca:</b> 411 mm, lluvias de verano (dic-mar) y seco de abril a noviembre. Vegetación xerófila.</li>
        </ul>
        <p>Muestran los dos regímenes de Argentina: lluvias <b>estivales</b> en el centro-norte (humedad atlántica) e <b>invernales</b> en Patagonia (humedad del Pacífico).</p>
      </div>
      <h4>TP 2: discusión de artículos sobre cambio climático</h4>
      <p>Se presentó oralmente un artículo y se analizaron la pregunta o hipótesis, la metodología, los datos, las conclusiones y los aportes. Los artículos disponibles:</p>
      <div class="tabla-wrap"><table class="tabla">
        <tr><th>Artículo</th><th>Sistema y problema</th></tr>
        <tr><td>Mundo et al. (2017), <i>Ecosphere</i></td><td>Historia de fuego en bosques de lenga (<i>Nothofagus pumilio</i>) del sur de Patagonia, reconstruida con dendrocronología (cicatrices de fuego). Separa la influencia humana (colonización) de la climática.</td></tr>
        <tr><td>Daniels &amp; Veblen (2004), <i>Ecology</i></td><td>Límite altitudinal del bosque de lenga en el norte de Patagonia. El crecimiento radial y el establecimiento de plántulas responden de forma distinta (a veces opuesta) al clima y al ENSO. La disponibilidad de humedad domina el establecimiento, y las relaciones clima-vegetación son <b>inestables</b> en el espacio y el tiempo.</td></tr>
        <tr><td>Dominguez et al. (2024), <i>Plants</i></td><td>Efectos del aumento de temperatura sobre la fenología, la fisiología y el rendimiento de vides Malbec, Bonarda y Syrah en Mendoza. Es un sistema productivo.</td></tr>
        <tr><td>López et al. (2023), <i>Environ. Health Perspect.</i></td><td>Relación entre variables climáticas (T, P) y la incidencia de dengue en Argentina: expansión del vector <i>Aedes aegypti</i> hacia el sur.</td></tr>
      </table></div>
      <p>Los cuatro conectan con el programa: el <b>clima</b> controla la distribución de las formas de vida (treeline), los disturbios (fuego), los sistemas productivos (vid) y la salud (vectores), y el cambio climático modifica esos controles.</p>`,
  },
  practica: [
    {
      p: "En un climograma de Walter-Lieth, ¿cómo se identifica un período seco y por qué?",
      r: `<p>Cuando la curva de temperatura queda por encima de las barras de precipitación. Como la escala es 20 mm = 10 °C, eso equivale a P ≤ 2T (índice de Gaussen): la demanda evaporativa supera el aporte de lluvia y hay déficit hídrico para la vegetación.</p>`,
    },
    {
      p: "Un climograma tiene 180 mm anuales, lluvias concentradas en invierno, T media de 9 °C y heladas en invierno. ¿Dónde puede estar y qué vegetación esperás?",
      r: `<p>Por las lluvias invernales (humedad del Pacífico), la aridez y el frío, es Patagonia extraandina (como Maquinchao). Se espera una <b>estepa arbustivo-graminosa</b>: hemicriptófitas (coirones) y caméfitas o arbustos bajos en cojín, tolerantes al estrés hídrico y térmico.</p>`,
    },
    {
      p: "Clasificá según Raunkiaer: yareta, algarrobo, Aristida mendocina, una anual del desierto.",
      r: `<p>Yareta → <b>caméfita</b> (cojín, yemas cerca del suelo). Algarrobo → <b>fanerófita</b>. <i>Aristida mendocina</i> → <b>hemicriptófita</b> (yemas a ras del suelo). Anual → <b>terófita</b> (sobrevive como semilla).</p>`,
    },
    {
      p: "¿Por qué los modelos del sistema terrestre usan tipos funcionales de plantas y no biomas?",
      r: `<p>Porque ante el cambio climático las especies responden de forma individual y no migran biomas completos, de modo que pueden formarse ensambles nuevos. Los tipos funcionales, definidos por atributos (hoja ancha o fina, decidua o perenne, C3 o C4), permiten simular cómo cambian la estructura y el funcionamiento (fotosíntesis, albedo, ET) sin depender de combinaciones de especies que hoy existen.</p>`,
    },
    {
      p: "¿Qué limitación tiene el sistema de Holdridge y en qué tipo de vegetación se nota?",
      r: `<p>Usa solo promedios anuales (biotemperatura, P, ETP/P) y no considera la <b>estacionalidad</b> de las lluvias ni los <b>disturbios como el fuego</b>. Por eso predice mal las <b>sabanas</b>, que dependen de una estación seca marcada y de fuegos recurrentes.</p>`,
    },
  ],
  glosario: [
    ["Índice de Gaussen", "Un mes es seco si P ≤ 2T. Es la base de la escala del climograma de Walter-Lieth."],
    ["Amplitud térmica anual", "T media del mes más cálido menos T media del mes más frío."],
    ["Atributo funcional", "Rasgo medible de un organismo que afecta su respuesta al ambiente o su efecto en el ecosistema."],
    ["Tipo funcional", "Grupo de especies con atributos y respuestas similares, sin importar su parentesco."],
    ["Servicio ecosistémico", "Beneficio que brinda un ecosistema a las personas (aprovisionamiento, regulación, soporte, cultural)."],
    ["Biotemperatura", "Temperatura media considerando solo los valores entre 0 y 30 °C (Holdridge)."],
    ["Redundancia funcional", "Varias especies cumplen la misma función, lo que da resiliencia al sistema."],
  ],
  biblio: [
    "Díaz, S., Gurvich, D. E., Pérez Harguindeguy, N. y Cabido, M. (2002). ¿Quién necesita tipos funcionales de plantas? <i>Bol. Soc. Argent. Bot.</i> 37: 135-140.",
    "Casanoves, F. et al. (2011). Diversidad funcional. Serie Técnica CATIE.",
    "Derguy, M. R. et al. (2019). Holdridge Life Zone Map: Republic of Argentina. USDA Forest Service IITF-GTR-51.",
    "Beck, H. E. et al. (2023). High-resolution (1 km) Köppen-Geiger maps for 1901–2099 based on constrained CMIP6 projections. <i>Scientific Data</i>.",
  ],
});
