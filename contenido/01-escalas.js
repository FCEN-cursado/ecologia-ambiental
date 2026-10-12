(window.UNIDADES ||= []).push({
  id: "escalas",
  num: 1,
  tema: "escalas",
  titulo: "Escalas y macrosistemas",
  bajada: "Por qué la escala a la que miramos cambia lo que vemos, y cómo estudiar la ecología a nivel de regiones y continentes.",
  programa: "a) Macroecología en un contexto regional y global. Escalas de estudio espaciales y temporales. Características e interacciones en macrosistemas: teleconexiones, retroalimentaciones, patrones emergentes.",
  clases: ["1 · Macroecología (J. Aranibar)"],
  resumen: /*html*/ ` 
    <ul>
      <li><b>Escala</b> es la dimensión espacial o temporal de un objeto o proceso. Se describe con el <b>grano</b> (la resolución) y la <b>extensión</b> (el área o período total).</li>
      <li>Cada proceso tiene su <b>escala operativa</b>. El mismo proceso puede estar controlado por mecanismos distintos según la escala a la que se lo mire.</li>
      <li>Un <b>macrosistema</b> es un sistema ecológico jerárquico, con componentes biológicos, geofísicos y sociales, que abarca de cientos a miles de km (Heffernan et al., 2014).</li>
      <ul>
        <li>Propiedades: <b>biocomplejidad</b>, <b>variables lentas</b>, <b>heterogeneidad y conectividad</b>, <b>acción humana</b>.</li>
        <li>Interacciones: <b>teleconexiones</b>, <b>retroalimentaciones</b>, <b>interacciones entre escalas</b> y <b>patrones emergentes</b>.</li>
      </ul>
    </ul>`,
  secciones: [
    {
      id: "esc-que-es",
      titulo: "¿Qué es la escala?",
      html: /*html*/ `
        <p>En ecología, la <b>escala</b> es la dimensión espacial o temporal de un objeto o de un proceso. No es una propiedad de la naturaleza, sino del <em>observador</em>: depende de cómo diseñamos el estudio. Por eso todo trabajo debería explicitar a qué escala se hizo (Cueto, 2006).</p>
        <p>Se caracteriza por dos componentes:</p>
        <div class="cols">
          <div class="col"><h5>Grano</h5><p>Es la unidad mínima de resolución: el tamaño de la unidad de muestreo, del píxel o del intervalo de tiempo entre mediciones. Por debajo del grano no se distingue nada.</p></div>
          <div class="col"><h5>Extensión</h5><p>Es el tamaño total del área de estudio o la duración total del período estudiado. Por fuera de la extensión no se puede generalizar.</p></div>
        </div>
        <h4>Tipos de escala (guía del TP 3)</h4>
        <ul>
          <li><b>Escala del patrón o fenómeno:</b> la escala a la que efectivamente ocurre el proceso en la naturaleza.</li>
          <li><b>Escala de análisis u observación:</b> depende del grano (el tamaño de la unidad de muestreo) y de la extensión (la superficie muestreada) que elige el investigador.</li>
          <li><b>Escala cartográfica:</b> la escala de representación del mapa, es decir, la relación entre una distancia en el mapa y la distancia real (por ejemplo, 1:250.000).</li>
        </ul>
        <div class="ojo"><b>Ojo con “gran escala”.</b>
          <p>En cartografía, una <em>escala grande</em> (1:5.000) muestra un área <em>chica</em> con mucho detalle, y una <em>escala chica</em> (1:1.000.000) muestra un área grande con poco detalle. Muchos ecólogos usan “gran escala” en el sentido contrario, como “gran extensión”. Para evitar confusiones conviene aclarar: “escala regional (gran extensión, grano grueso)”.</p>
        </div>
        <h4>El mismo proceso, distintos controles</h4>
        <p>Un mismo proceso puede generar patrones diferentes a distintas escalas, porque a cada escala lo regulan mecanismos distintos (guía del TP 3):</p>
        <div class="tabla-wrap"><table class="tabla">
          <tr><th>Proceso</th><th> Escala fina (area pequeña) </th><th> Escala gruesa (area grande)</th></tr>
          <tr><td>Mineralización del mantillo</td><td>m²: tipo de <span class="palabra-info" title="La capa superior del bosque formada por las copas de los árboles.">dosel</span> y microclima</td><td>km²: variaciones climáticas regionales (T y humedad)</td></tr>
          <tr><td>Evapotranspiración</td><td>cm²: presión de vapor y apertura de estomas</td><td>km²: radiación solar</td></tr>
        </table></div>
        <p>Por eso una conclusión obtenida a una escala <b>no se puede extrapolar automáticamente</b> a otra. Cueto (2006) lo ilustra con la selección de hábitat en aves: según la cobertura de bosque en el paisaje (escala gruesa) puede estar o no presente, pero dentro del bosque puede responder a la estructura de la vegetación en un parche (escala fina), </p>
        <figure class="fig"><img src="img/slides/mac_escalas.jpg" alt="Escalas espaciales a las que operan distintos procesos" loading="lazy"><figcaption>Escala cartográfica y escala operativa: sitio → paisaje → ecorregión → regional → subcontinental → continental → global. (Clase 1)</figcaption></figure>`,
    },
    {
      id: "esc-procesos",
      titulo: "Escalas espaciales y temporales de los procesos",
      html:  /*html*/`
        <p>Los procesos ecológicos ocupan un “rango” en un diagrama espacio-tiempo: los que abarcan áreas grandes suelen ser también lentos. En clase se preguntó a qué escala temporal ocurren estos procesos:</p>
        <div class="tabla-wrap"><table class="tabla">
          <tr><th>Proceso</th><th>Escala temporal típica</th></tr>
          <tr><td>Fotosíntesis</td><td>Segundos a horas (respuesta a la luz), con un ciclo diario</td></tr>
          <tr><td>Acumulación de carbono en plantas</td><td>Años a décadas (o siglos, en árboles longevos)</td></tr>
          <tr><td>Acumulación de carbono en suelos</td><td>Décadas a milenios (la formación de suelo es muy lenta)</td></tr>
          <tr><td>Deforestación</td><td>Días a años (es rápida)</td></tr>
          <tr><td>Reforestación o recuperación</td><td>Décadas (es lenta: la pérdida es mucho más rápida que la recuperación)</td></tr>
        </table></div>
        <div class="ejemplo"><b>Ejercicio: escalas de distintos procesos</b>
          <p>“¿Qué es la escala y cómo se caracteriza? ¿A qué escalas temporal y espacial estudiaría los siguientes procesos?” Una respuesta modelo:</p>
          <div class="tabla-wrap"><table class="tabla">
            <tr><th>Proceso</th><th>Temporal</th><th>Espacial</th></tr>
            <tr><td>Cambio climático</td><td>Décadas a siglos</td><td>Global, con impactos regionales y locales</td></tr>
            <tr><td>Avance de la urbanización</td><td>Años a décadas</td><td>Local a regional (periurbano)</td></tr>
            <tr><td>Incendios</td><td>Un foco: horas a días. El régimen de fuego: años a décadas</td><td>Local (un foco) a regional (el régimen)</td></tr>
            <tr><td>Movimiento de glaciares</td><td>Décadas a siglos (las fluctuaciones, años)</td><td>Regional (cuenca o cordillera) a global</td></tr>
            <tr><td>Invasión de exóticas</td><td>Años a décadas</td><td>Local (establecimiento) a regional (expansión)</td></tr>
          </table></div>
          <p>La clave es <b>justificar</b>: decir qué mecanismo opera y por qué el grano y la extensión elegidos permiten detectarlo.</p>
        </div>
        <h4>Patrones</h4>
        <p>Un <b>patrón</b> es una observación que muestra una estructura espacial o temporal significativamente distinta de la aleatoria. Es una sucesión espacial o temporal de objetos, procesos o eventos que se repite y permite hacer predicciones o inferencias sobre la secuencia. Por ejemplo: bandas de vegetación en zonas áridas, gradientes altitudinales o la estacionalidad del NDVI.</p>
        <p>Detrás de todo patrón hay <b>procesos</b>. La ecología del paisaje y la macroecología buscan inferir los procesos a partir de los patrones, sabiendo que la relación entre ambos depende de la escala (Matteucci, 1998).</p>`,
    },
    {
      id: "esc-macrosistemas",
      titulo: "Macrosistemas: definición y propiedades",
      html: /*html*/ `
        <div class="idea"><b>Definición (Heffernan et al., 2014)</b>
          <p>Los macrosistemas son sistemas ecológicos jerárquicos que comprenden componentes biológicos, geofísicos y sociales a gran extensión (de <b>cientos a miles de km</b>), que interactúan entre sí y con componentes de escalas más gruesas y más finas.</p>
        </div>
        <p>La <b>ecología de macrosistemas</b> estudia los fenómenos ecológicos a escala de regiones a continentes y sus interacciones con fenómenos de otras escalas. Hace falta porque muchos problemas ambientales (cambio climático, cambios de uso del suelo, invasiones) tienen causas y consecuencias a esas escalas, pero la teoría ecológica se desarrolló sobre todo a escala de sitio o parcela.</p>
        <figure class="fig"><img src="img/slides/mac_macrosistema.jpg" alt="Componentes de un macrosistema: biológico, geofísico y sociocultural" loading="lazy"><figcaption>Los macrosistemas integran componentes biológicos, geofísicos y socioculturales. (Clase 1, basado en Heffernan et al., 2014)</figcaption></figure>
        <h4>Las cuatro propiedades</h4>
        <div class="cols">
          <div class="col"><h5>1. Biocomplejidad</h5><p>“Emergen” propiedades difíciles de explicar estudiando cada parte por separado: la conciencia en humanos, la resiliencia del planeta (Gaia) o las sociedades complejas.</p></div>
          <div class="col"><h5>2. Variables lentas y no “anómalas”</h5><p>Procesos de baja frecuencia que a escala local parecen “anomalías”, pero que a escala de macrosistema son parte de la dinámica: El Niño, las sequías, los huracanes, las erupciones volcánicas y la evolución.</p></div>
          <div class="col"><h5>3. Heterogeneidad y conectividad</h5><p>Cómo están conectadas o aisladas las partes: cuencas hidrográficas, islas aisladas o conectadas.</p></div>
          <div class="col"><h5>4. Acción humana</h5><p>Las personas son parte del sistema, no un factor externo: mercados, políticas y cambios de uso del suelo.</p></div>
        </div>`,
    },
    {
      id: "esc-interacciones",
      titulo: "Las cuatro interacciones",
      html: /*html*/ `
        <p>Heffernan et al. (2014) señalan estas interacciones como la fuente más probable de comportamientos <b>inesperados o novedosos</b> en los macrosistemas:</p>
        <div class="tabla-wrap"><table class="tabla">
          <tr><th>Interacción</th><th>Definición</th><th>Ejemplo</th></tr>
          <tr><td><b>Teleconexiones</b></td><td>Fenómenos que conectan regiones distantes mediante el movimiento de organismos, materiales, energía o información.</td><td>Polvo del Sahara que fertiliza con P y Fe la Amazonía; la demanda global de carne y soja que impulsa la deforestación; las aves migratorias.</td></tr>
          <tr><td><b>Retroalimentaciones</b></td><td>El efecto de un componente es aumentado (+) o disminuido (−) por el efecto de otro.</td><td>La cobertura vegetal regional influye en la precipitación y a la vez responde a ella.</td></tr>
          <tr><td><b>Interacciones entre escalas</b></td><td>Procesos a una escala interactúan con procesos a otra y producen dinámicas no lineales.</td><td>El calentamiento global (escala gruesa) cambia la supervivencia invernal de un insecto (escala fina), que produce una mortalidad de bosques regional.</td></tr>
          <tr><td><b>Patrones emergentes</b></td><td>Componentes de una escala interactúan y se “acumulan”, produciendo un patrón regional que es una propiedad emergente.</td><td>La degradación local, sumada en muchos campos, produce desertificación regional.</td></tr>
        </table></div>
        <figure class="fig"><img src="img/slides/mac_jerarquia.jpg" alt="Esquema jerárquico local - macroescala - global" loading="lazy"><figcaption>Marco jerárquico: los componentes locales, de macroescala y globales interactúan en ambos sentidos. (Clase 1)</figcaption></figure>`,
    },
    {
      id: "esc-ejemplos",
      titulo: "Los tres ejemplos de clase",
      html: `
        <h4>1. Amazonía: tipping points</h4>
        <ul>
          <li><b>Teleconexión:</b> la demanda global de carne y soja (una teleconexión económica) impulsa la deforestación. Además, la humedad que evapotranspira la selva es transportada por los vientos hacia el sur (los “ríos voladores”) y alimenta las lluvias de la cuenca del Plata.</li>
          <li><b>Retroalimentación:</b> la selva mantiene su propia lluvia por evapotranspiración y bajo albedo. Si se deforesta, hay menos vapor de agua, menos lluvia, más estrés hídrico y fuego, y más pérdida de bosque: una retroalimentación <b>positiva</b>.</li>
          <li><b>Patrón emergente:</b> la competencia pasto-árbol y el fuego pueden llevar el sistema a un estado alternativo de sabana. Existe un <b>umbral</b> (tipping point) a partir del cual el cambio se vuelve difícil de revertir.</li>
        </ul>
        <figure class="fig"><img src="img/slides/mac_amazonas.jpg" alt="Amazonas tipping points: esquema de interacciones" loading="lazy"><figcaption>Amazonas: clima, demanda de pasturas, cobertura vegetal y deforestación interactúan entre escalas. (Clase 1)</figcaption></figure>
        <h4>2. Explosiones poblacionales de insectos (y osos en los jardines)</h4>
        <p>El escarabajo del pino de montaña (<i>Dendroctonus ponderosae</i>) quedaba excluido de las zonas altas por los inviernos fríos. Con inviernos más templados (cambio climático global, escala gruesa), sobrevive y ataca a pinos que nunca habían estado expuestos, lo que produce una mortalidad masiva de bosques a escala regional. Esto hace que se pierdan las semillas de pino, alimento de los osos grizzly, y que los osos bajen a zonas humanas. Es una <b>interacción entre escalas</b>. En clase se comparó con los carpinchos en Nordelta, donde la urbanización avanza sobre su humedal.</p>
        <h4>3. Gansos en los humedales del norte</h4>
        <p>La agricultura del centro de EE. UU. aumentó la oferta de alimento invernal y en las rutas migratorias. Así, la población de gansos de las nieves creció mucho y degradó, por sobrepastoreo, los humedales de la bahía de Hudson, donde se reproducen, a cientos o miles de km. Es una <b>teleconexión</b>: los organismos conectan un cambio de uso del suelo con la degradación de una región lejana.</p>
        <figure class="fig chica"><img src="img/slides/mac_gansos.jpg" alt="Degradación de humedales por gansos" loading="lazy"><figcaption>Degradación de humedales del norte por el aumento poblacional de gansos. (Clase 1)</figcaption></figure>`,
    },
    {
      id: "esc-estudiar",
      titulo: "¿Cómo se estudian los macrosistemas?",
      html: `
        <div class="cols">
          <div class="col"><h5>Monitoreos permanentes</h5><p>Parcelas que se miden durante años: <b>RedSPP</b> (Red Subtropical de Parcelas Permanentes) y <b>MIREN</b> (Mountain Invasion Research Network).</p></div>
          <div class="col"><h5>Redes de colaboradores</h5><p><b>FluxNet / AmeriFlux / EuroFlux</b>, torres que miden flujos de CO₂, agua y energía. <b>Red BOSQUE-CLIMA</b>, con dendrómetros.</p></div>
          <div class="col"><h5>Imágenes satelitales</h5><p><b>Aquarius</b> (salinidad del océano) y <b>SAOCOM</b> (radar argentino: humedad del suelo, cenizas volcánicas).</p></div>
          <div class="col"><h5>Simulaciones numéricas</h5><p><b>Land Surface Models</b> (modelos “big leaf”, ecofisiológicos) que acoplan vegetación, clima e hidrología.</p></div>
        </div>
        <p>¿Qué necesita un biólogo para trabajar en esto? Taxonomía, manejo de datos, programación, matemática y física, y sobre todo capacidad de diálogo y trabajo en equipo interdisciplinario.</p>`,
    },
  ],
  practica: [
    {
      p: "¿Qué es la escala y cómo se caracteriza?",
      r: `<p>Es la dimensión espacial o temporal de un objeto o proceso. Se caracteriza por el <b>grano</b> (la resolución: el tamaño de la unidad mínima de muestreo o del píxel) y la <b>extensión</b> (el área o el período total). Hay que distinguir la escala del fenómeno, la de análisis y la cartográfica.</p>`,
    },
    {
      p: "¿Cuáles son los cuatro tipos de interacciones en macroecosistemas? Explique cada una, elija una y describa un ejemplo.",
      r: `<p>(1) <b>Teleconexiones:</b> conectan regiones distantes por el flujo de organismos, materia, energía o información. (2) <b>Retroalimentaciones:</b> un componente amplifica (+) o atenúa (−) el efecto de otro. (3) <b>Interacciones entre escalas:</b> procesos a una escala modifican procesos a otra y generan dinámicas no lineales. (4) <b>Patrones emergentes:</b> la acumulación de procesos locales produce un patrón regional.</p>
          <p><i>Ejemplo (teleconexión):</i> la expansión agrícola en el centro de EE. UU. aumentó el alimento invernal de los gansos de las nieves. Sus poblaciones crecieron y degradaron los humedales donde se reproducen, en la bahía de Hudson, a miles de km.</p>`,
    },
    {
      p: "Explicá por qué la deforestación del Amazonas puede tener un “punto de no retorno”.",
      r: `<p>La selva recicla gran parte de su propia lluvia por evapotranspiración. Si se deforesta, hay menos vapor de agua, menos precipitación, más sequía y fuego, y más mortalidad de árboles: es una retroalimentación positiva. Superado cierto umbral de deforestación, el sistema puede pasar a un estado alternativo de sabana que se mantiene solo, aunque cese la deforestación.</p>`,
    },
    {
      p: "Dé un ejemplo de proceso cuyo control cambia según la escala de análisis.",
      r: `<p>La evapotranspiración: a escala de cm² depende de la apertura estomática y del déficit de presión de vapor de la hoja, mientras que a escala de km² depende sobre todo de la radiación solar disponible. Otro ejemplo es la mineralización del mantillo: a escala de m² depende del dosel y del microclima, y a escala de km² del clima regional.</p>`,
    },
  ],
  glosario: [
    ["Grano", "Resolución: el tamaño de la unidad mínima de observación (parcela, píxel, intervalo de tiempo)."],
    ["Extensión", "Tamaño total del área o duración total del período estudiado."],
    ["Escala cartográfica", "Relación entre la distancia en el mapa y la distancia real. Una escala grande muestra un área chica con mucho detalle."],
    ["Patrón", "Estructura espacial o temporal distinta de la aleatoria, que permite hacer predicciones."],
    ["Macrosistema", "Sistema ecológico jerárquico, biológico, geofísico y social, de cientos a miles de km."],
    ["Teleconexión", "Vínculo entre regiones distantes por flujo de organismos, materia, energía o información."],
    ["Tipping point", "Umbral a partir del cual un sistema cambia a otro estado de forma abrupta y difícil de revertir."],
  ],
  biblio: [
    "Cueto, V. R. (2006). Escalas en ecología: su importancia para el estudio de la selección de hábitat en aves. <i>Hornero</i> 21: 1-13.",
    "Heffernan, J. B. et al. (2014). Macrosystems ecology: understanding ecological patterns and processes at continental scales. <i>Front. Ecol. Environ.</i> 12(1): 5-14.",
    "Matteucci, S. D. (1998). La cuestión del patrón y la escala en la ecología del paisaje y de la región.",
  ],
});
