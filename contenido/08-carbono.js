(window.UNIDADES ||= []).push({
  id: "carbono",
  num: 8,
  tema: "carbono",
  titulo: "Créditos de carbono y reservorios",
  bajada: "Qué se compra cuando se compra un crédito de carbono, qué reglas lo hacen creíble y cómo se miden en el campo los reservorios de carbono de un bosque.",
  programa: "d) Uso de los recursos naturales e impacto ambiental (mercados de carbono como herramienta de valoración y conservación) · TP 6: línea de base cero de reservorios de carbono.",
  clases: ["8 · El rol del biólogo en el mercado de créditos de carbono"],
  resumen: `
    <ul>
      <li><b>1 crédito = 1 t CO₂e</b> evitada o capturada, verificada. En Verra se llama <b>VCU</b>. El comprador lo “retira” para compensar sus emisiones.</li>
      <li>Hay tres grandes familias de proyectos: <b>AFOLU</b> (REDD+, ARR, manejo de pastizales), <b>energía renovable</b> y <b>jurisdiccionales</b> (JNR).</li>
      <li>Para ser creíble, la reducción debe ser <b>real, medible, permanente, adicional y verificada</b>, contra una <b>línea de base</b> (el escenario sin proyecto).</li>
      <li>Hay cuatro <b>reservorios</b>: biomasa viva (VMD0001), madera muerta (VMD0002), hojarasca (VMD0003) y suelo (VMD0004).</li>
      <li>El cálculo va de <b>biomasa × fracción de C → C × 44/12 → t CO₂e/ha</b>. Los créditos son la línea de base menos el proyecto, menos las fugas, menos el buffer.</li>
    </ul>`,
  secciones: [
    {
      id: "car-mercado",
      titulo: "¿Qué es un crédito de carbono?",
      html: `
        <p>Un <b>mercado de créditos de carbono</b> es un sistema económico que asigna valor monetario a la reducción o captura de emisiones de CO₂, permitiendo que países, empresas y organizaciones compren y vendan “créditos” equivalentes a 1 tonelada de CO₂.</p>
        <div class="cols">
          <div class="col"><h5>La unidad</h5><p>1 crédito = <b>1 t CO₂e</b> (CO₂ equivalente) evitada o capturada, certificada. En Verra: <b>VCU</b> (Verified Carbon Unit). El precio se fija por oferta y demanda y según el tipo de proyecto, entre 1 y 45 USD por tonelada.</p></div>
          <div class="col"><h5>Quién lo genera</h5><p>Un proyecto o un gobierno que reduce o captura emisiones y es dueño de los créditos. Por ejemplo, propietarios de tierras que implementan una práctica.</p></div>
          <div class="col"><h5>Quién lo compra</h5><p>Empresas y organizaciones que compensan sus emisiones (alcances 1, 2 y 3). Pagan más por proyectos con valor social o de biodiversidad.</p></div>
        </div>
        <div class="cols">
          <div class="col"><h5>Mercado regulado</h5><p>Existe una obligación legal (cap-and-trade): por ejemplo, el EU ETS (UE, desde 2005), California o China.</p></div>
          <div class="col"><h5>Mercado voluntario</h5><p>Las empresas compran por decisión propia. Es el caso de <b>Argentina</b>: no existe una ley que regule los mercados de carbono.</p></div>
        </div>
        <h4>El recorrido del crédito y del dinero</h4>
        <ol class="pasos">
          <li><b>Proyecto:</b> reduce o captura emisiones.</li>
          <li><b>Validación:</b> un auditor independiente revisa el diseño.</li>
          <li><b>Verificación:</b> se verifican las reducciones logradas (por ejemplo, en Misiones verifica Aenor).</li>
          <li><b>Registro:</b> Verra emite los VCU, que son únicos y trazables. El registro evita que un crédito se venda dos veces.</li>
          <li><b>Venta:</b> el comprador paga al titular de los créditos.</li>
          <li><b>Retiro:</b> el comprador “retira” el crédito para su compensación, y ya no puede revenderse.</li>
        </ol>`,
    },
    {
      id: "car-proyectos",
      titulo: "Tipos de proyectos y casos argentinos",
      html: `
        <div class="tabla-wrap"><table class="tabla">
          <tr><th>Familia</th><th>Qué acredita</th></tr>
          <tr><td><b>AFOLU</b> (Agricultura, Forestal y Otros Usos del suelo)</td><td>
            <b>ARR</b> (forestación, reforestación, revegetación): C capturado en nueva biomasa.<br>
            <b>REDD+</b>: deforestación o degradación <i>evitada</i> respecto de lo que habría pasado sin el proyecto.<br>
            <b>Manejo de pastizales</b> (ALM), IFM (manejo forestal mejorado), humedales: prácticas que aumentan el C en el suelo y la vegetación.</td></tr>
          <tr><td><b>Energía renovable</b></td><td>Parques eólicos y solares que desplazan generación fósil.</td></tr>
          <tr><td><b>Jurisdiccionales y anidados</b> (JNR de Verra)</td><td>Un gobierno acredita las reducciones en <b>toda una jurisdicción</b>. Los proyectos privados se “anidan” en las líneas de base del programa para evitar el <b>doble conteo</b>.</td></tr>
        </table></div>
        <div class="cols">
          <div class="col"><h5>Caso Misiones (REDD+ jurisdiccional)</h5><p>Abarca 1,5 M ha de Selva Paranaense, con <b>10,2 M t CO₂e</b> reducidas y verificadas entre 2017 y 2022, porque bajó la tasa de deforestación. Fue registrado en Verra en 2026. El titular es el <b>Estado provincial</b>, que busca inversores. La distribución de beneficios a las comunidades está prevista, pero sin detalles.</p></div>
          <div class="col"><h5>Caso Genneia (energía renovable)</h5><p>Tiene capacidad de emitir unos 530.000 t por año en parques solares y eólicos, bajo los estándares VCS (Verra) y Biocarbon. El titular es una <b>empresa</b>. Compran Natura, Banco Galicia y otras empresas, y el uso del dinero no está detallado.</p></div>
        </div>
        <p>En 2023, Argentina tenía 59 proyectos en el ReNaMi; 7 proyectos voluntarios habían generado 2,4 M VCU. Predominan los de energía renovable y residuos, y solo dos eran de deforestación o reforestación.</p>`,
    },
    {
      id: "car-normas",
      titulo: "Marco normativo y reglas de calidad",
      html: `
        <h4>Historia internacional</h4>
        <ul>
          <li><b>1992, CMNUCC</b> (Convención Marco de las Naciones Unidas sobre el Cambio Climático): bases de la cooperación internacional para estabilizar las emisiones.</li>
          <li><b>1997, Protocolo de Kioto</b> (Ley 25.438): primeros mecanismos de mercado y metas <b>vinculantes solo para países desarrollados</b> (de ahí nace el EU ETS). También creó el MDL (Mecanismo de Desarrollo Limpio).</li>
          <li><b>2015, Acuerdo de París:</b> busca limitar el calentamiento a 1,5-2 °C. Fija metas para todos los países (NDC) y su artículo 6 regula la transferencia de reducciones.</li>
        </ul>
        <p><b>¿Por qué Argentina solo tiene mercado voluntario?</b> Porque, como país en desarrollo, no tuvo metas obligatorias bajo Kioto, y París no impone un mercado regulado interno.</p>
        <h4>Marco nacional</h4>
        <ul>
          <li><b>Ley 27.520 (2019)</b> de presupuestos mínimos de adaptación y mitigación al cambio climático. Crea el Gabinete Nacional de Cambio Climático y el Sistema Nacional de Información (inventario de GEI y MRV), y pide conservar los ecosistemas que capturan y almacenan carbono.</li>
          <li><b>ENUMeC</b> (Estrategia Nacional para el Uso de los Mercados de Carbono, 2023): es un marco de principios, no crea un mercado regulado. Incluye el <b>ReNaMi</b> (Registro Nacional de Proyectos de Mitigación, para evitar el doble conteo), un sistema de MRV y salvaguardas.</li>
        </ul>
        <h4>Las capas de reglas de Verra</h4>
        <ol>
          <li><b>VCS Standard:</b> elegibilidad. La reducción debe ser <b>real, medible, permanente, adicional y verificada</b>.</li>
          <li><b>Requisitos por tipo</b> (AFOLU, JNR).</li>
          <li><b>Metodología:</b> línea de base, adicionalidad y qué medir.</li>
          <li><b>Módulos y herramientas:</b> por ejemplo, VMD0001, 0002 y 0003 para los reservorios.</li>
          <li><b>Registro y emisión</b> de los VCU.</li>
        </ol>
        <p>Hay reglas externas de calidad: <b>ICVCM</b> (principios de integridad), <b>CORSIA</b> (aerolíneas) y el sello <b>CCB</b> (beneficios para el clima, las comunidades y la biodiversidad, con consentimiento de las comunidades).</p>
        <div class="idea"><b>Adicionalidad: ¿pasaría igual sin los créditos?</b>
          <ul>
            <li><b>Inversión:</b> sin la venta de créditos, el proyecto no sería rentable.</li>
            <li><b>Barreras:</b> hay obstáculos financieros, tecnológicos o institucionales.</li>
            <li><b>Práctica común:</b> no es algo que ya se haga sin incentivo.</li>
            <li><b>Excedente regulatorio:</b> si la ley ya lo obliga, <b>no es adicional</b>. Por eso se discute si es adicional “proteger” una reserva que ya está protegida por ley.</li>
          </ul>
        </div>
        <div class="idea"><b>Permanencia: ¿cuánto dura el carbono?</b>
          <p>El carbono forestal puede volver a la atmósfera por incendios, tala o plagas. Verra usa una herramienta de riesgo de no permanencia y guarda parte de los créditos en un <b>fondo común (buffer)</b>, que funciona como un seguro colectivo: cuanto mayor el riesgo, mayor la reserva.</p>
        </div>
        <div class="idea"><b>Línea de base: el escenario sin proyecto</b>
          <p>Es la estimación de lo que pasaría si el proyecto no existiera. En REDD+, cuánta deforestación se proyecta sin intervención. En ARR, el carbono que ya hay antes de plantar. <b>Todo crédito se mide contra esta referencia.</b></p>
        </div>`,
    },
    {
      id: "car-medicion",
      titulo: "De la medición al crédito",
      html: `
        <h4>Los reservorios de carbono</h4>
        <div class="tabla-wrap"><table class="tabla">
          <tr><th>Reservorio</th><th>Qué incluye</th><th>Módulo de Verra</th></tr>
          <tr><td><b>Biomasa viva</b></td><td>Árboles y no árboles (arbustos), aérea y subterránea</td><td>VMD0001</td></tr>
          <tr><td><b>Madera muerta</b></td><td>Troncos y ramas caídas (≥ 10 cm) o en pie, tocones</td><td>VMD0002</td></tr>
          <tr><td><b>Hojarasca</b></td><td>Material vegetal muerto sobre el suelo mineral (hojas, flores, frutos, ramitas &lt; 10 cm)</td><td>VMD0003</td></tr>
          <tr><td><b>Carbono orgánico del suelo</b></td><td>C en la materia orgánica del suelo</td><td>VMD0004</td></tr>
        </table></div>
        <figure class="fig chica"><img src="img/slides/car_reservorios.jpg" alt="Los reservorios de carbono" loading="lazy"><figcaption>Los cuatro reservorios de carbono y sus módulos de Verra. (Clase 8)</figcaption></figure>
        <h4>Monitoreo: qué, cómo y cuándo</h4>
        <p>Se miden los <b>cambios de cobertura y los stocks de carbono por reservorio</b> con inventarios de campo, <b>ecuaciones alométricas</b> y sensores remotos. La frecuencia la fija el plan de monitoreo de cada proyecto.</p>
        <div class="idea"><b>Ecuaciones alométricas</b>
          <p>Son modelos matemáticos que relacionan la biomasa de un organismo con variables fáciles de medir (diámetro, altura, diámetro de copa). Permiten estimar la biomasa <b>sin cortar</b> la planta (método no destructivo). Son específicas de cada especie y región. Verra exige que se hayan derivado de al menos 30 individuos, con r² ≥ 0,8.</p>
        </div>
        <h4>De biomasa a t CO₂e</h4>
        <ol class="pasos">
          <li><b>Biomasa</b> (t de materia seca): con ecuaciones alométricas o por cosecha.</li>
          <li><b>Carbono</b> = biomasa × <b>fracción de carbono (CF)</b>. Para la biomasa leñosa CF = <b>0,47</b> t C/t m.s.; para la hojarasca el valor por defecto es <b>0,37</b>.</li>
          <li><b>CO₂e</b> = C × <b>44/12</b> (= 3,67), la relación entre los pesos moleculares del CO₂ y del C.</li>
          <li><b>Por hectárea:</b> se divide por el área de la parcela, se suma por reservorio y se expande al área del proyecto.</li>
        </ol>
        <p class="formula">Ejemplo: 100 t C × 44/12 ≈ 367 t CO₂e</p>
        <p class="formula">Créditos = línea de base − proyecto − fugas − buffer</p>
        <p><b>Fugas:</b> el desplazamiento de emisiones fuera del área (por ejemplo, la deforestación que se “muda” al campo vecino). Se descuentan, igual que la incertidumbre.</p>
        <h4>El rol del biólogo</h4>
        <ul>
          <li><b>Línea de base:</b> definir la cobertura y la dinámica del sitio.</li>
          <li><b>Inventarios y monitoreos:</b> diseñar el muestreo y medir los reservorios.</li>
          <li><b>Alometría:</b> elegir o desarrollar ecuaciones para las especies.</li>
          <li><b>Salvaguardas:</b> vigilar la biodiversidad y los efectos sobre las comunidades.</li>
          <li>También generar conocimiento, evaluar y auditar proyectos, y aportar valor agregado (conservación, impacto social).</li>
        </ul>`,
    },
  ],
  tp: {
    titulo: "TP 6 · Línea de base cero de reservorios de carbono en Telteca",
    html: `
      <p><b>Sitio:</b> Reserva Natural y Cultural Bosques Telteca (Lavalle, Mendoza), en el Monte central. Es un bosque de <b>algarrobo dulce</b> (<i>Neltuma/Prosopis flexuosa</i>) en un sistema de <b>médanos e intermédanos</b>. El algarrobo accede a la napa freática en los valles intermédanos. Viven allí comunidades de puesteros (con presencia huarpe) que usan el bosque (leña, ganado caprino). Hubo una tala histórica para el ferrocarril y la vitivinicultura.</p>
      <p><b>Línea de base cero:</b> es la medición inicial del stock de carbono antes de cualquier proyecto. Es la referencia contra la que se medirá la adición futura de carbono.</p>
      <h4>Preguntas sugeridas para el diseño (hipótesis y predicción)</h4>
      <ul>
        <li>¿Cuál es el efecto del uso de los recursos (cerca o lejos de los puestos) sobre el C almacenado en árboles, arbustos u hojarasca? <i>Hipótesis:</i> el uso (tala, pastoreo) reduce la biomasa. <i>Predicción:</i> menos C cerca de los puestos.</li>
        <li>¿Difiere el C entre unidades de paisaje, médano e intermédano? <i>Hipótesis:</i> en el intermédano hay más agua (napa, acumulación). <i>Predicción:</i> más C en árboles en el intermédano.</li>
      </ul>
      <h4>Diseño común de muestreo</h4>
      <div class="tabla-wrap"><table class="tabla">
        <tr><th>Reservorio</th><th>Cómo se mide</th></tr>
        <tr><td>Árboles vivos (VMD0001)</td><td>3 parcelas circulares de <b>500 m²</b> (radio 12,62 m). DAP a 1,30 m (en multifustes, Deq = √ΣDAP²), altura y especie, con la ecuación alométrica de <i>P. flexuosa</i>. Biomasa subterránea con la relación raíz/vástago R (0,56 si la biomasa aérea es &lt; 20 t m.s./ha; 0,28 si es mayor).</td></tr>
        <tr><td>Arbustos (no árboles)</td><td>Dos diámetros de copa perpendiculares (D1, D2), con D<sub>medio</sub> = (D1 + D2)/2, y la altura H. Biomasa = a·D<sup>b</sup>·H<sup>c</sup>. Especies: retamo (<i>Bulnesia retama</i>), jarillas (<i>Larrea</i>), zampa (<i>Atriplex</i>).</td></tr>
        <tr><td>Hojarasca (VMD0003)</td><td>4 marcos de 50 × 50 cm a 8 m del centro. Se recolecta, se tamiza la arena, se pesa y se corrige la humedad (muestra compuesta en estufa a 70 °C). CF = 0,37.</td></tr>
        <tr><td>Madera muerta (VMD0002)</td><td>En pie, en el círculo. <b>Caída: intersección de líneas</b> (2 líneas de 50 m cruzadas), midiendo cada pieza ≥ 10 cm que cruza la línea. Hay clases de densidad (sana, intermedia, podrida) según la prueba del machete.</td></tr>
      </table></div>
      <div class="ejemplo"><b>Lo que dice la bibliografía sobre el Monte</b>
        <ul>
          <li><b>Magnano et al. (2023):</b> en 16 parcelas, cerca de los puestos ganaderos (más uso) hay menos diversidad taxonómica y funcional de leñosas y <b>menos carbono</b> en arbustos, árboles, raíces, hojarasca y plantas muertas. Apoya la complementariedad de nicho más que el efecto de la especie dominante.</li>
          <li><b>Vázquez et al. (2011):</b> extraer la madera muerta caída afecta negativamente el funcionamiento del bosque (polinizadores que anidan en madera, reproducción del algarrobo, suelo).</li>
          <li><b>Alvarez et al. (2011):</b> la productividad de madera del algarrobo es baja: hace falta un equilibrio entre producción y protección.</li>
          <li><b>Iglesias et al. (2011):</b> el C almacenado aumenta a lo largo del gradiente de precipitación del Monte al Chaco.</li>
        </ul>
      </div>`,
  },
  practica: [
    {
      p: "¿Qué significa que un crédito de carbono sea “adicional”? Da las cuatro pruebas.",
      r: `<p>Que la reducción no hubiera ocurrido sin el incentivo de los créditos. Pruebas: (1) <b>inversión</b>, el proyecto no es rentable sin los créditos; (2) <b>barreras</b> financieras, tecnológicas o institucionales; (3) <b>práctica común</b>, no es algo que ya se haga habitualmente; (4) <b>excedente regulatorio</b>, no está exigido por ley.</p>`,
    },
    {
      p: "Una parcela de 0,05 ha tiene 2 t de biomasa aérea seca de árboles. Calculá las t CO₂e/ha de biomasa aérea.",
      r: `<p>C = 2 × 0,47 = 0,94 t C en la parcela → 0,94 / 0,05 = 18,8 t C/ha → × 44/12 ≈ <b>68,9 t CO₂e/ha</b> (solo biomasa aérea). Para la subterránea: la biomasa aérea es 40 t m.s./ha (&gt; 20), así que R = 0,28 y se suma 0,28 × 18,8 ≈ 5,3 t C/ha.</p>`,
    },
    {
      p: "Diferencia entre REDD+ y ARR.",
      r: `<p><b>REDD+</b> acredita emisiones <i>evitadas</i> al reducir la deforestación o degradación respecto de una línea de base proyectada. <b>ARR</b> acredita <i>capturas</i> por nueva biomasa (forestación, reforestación, revegetación), medidas contra el carbono que había antes de plantar.</p>`,
    },
    {
      p: "¿Qué es la permanencia y cómo la aborda Verra?",
      r: `<p>Es el riesgo de que el carbono almacenado vuelva a la atmósfera (incendio, tala, plagas). Verra estima el riesgo de no permanencia y retiene una parte de los créditos en un buffer común, proporcional al riesgo, que funciona como seguro colectivo.</p>`,
    },
    {
      p: "¿Qué hace un biólogo en un proyecto de carbono?",
      r: `<p>Define la línea de base (cobertura, dinámica), diseña el muestreo y mide los reservorios (inventarios), elige o desarrolla ecuaciones alométricas, monitorea y vigila las salvaguardas (biodiversidad, comunidades). También puede auditar o evaluar proyectos y generar conocimiento científico.</p>`,
    },
  ],
  glosario: [
    ["VCU", "Verified Carbon Unit: crédito emitido por Verra, equivalente a 1 t CO₂e."],
    ["t CO₂e", "Toneladas de CO₂ equivalente. C × 44/12."],
    ["Línea de base", "Escenario sin proyecto contra el que se calculan los créditos."],
    ["Adicionalidad", "La reducción no habría ocurrido sin los créditos."],
    ["Buffer", "Reserva de créditos que funciona como seguro ante pérdidas (no permanencia)."],
    ["Fugas", "Emisiones desplazadas fuera del área del proyecto."],
    ["Alometría", "Ecuación que estima la biomasa a partir de medidas simples (DAP, altura, copa)."],
    ["DAP", "Diámetro a la altura del pecho (1,30 m)."],
    ["REDD+", "Reducción de Emisiones por Deforestación y Degradación de los bosques."],
    ["JNR", "Marco jurisdiccional y anidado de REDD+ de Verra."],
  ],
  biblio: [
    "Verra. VCS Standard v4; módulos VMD0001 (biomasa), VMD0002 (madera muerta), VMD0003 (hojarasca), VMD0004 (suelo).",
    "Magnano, A. L. et al. (2023). <i>For. Ecol. Manage.</i> 529: 120747.",
    "Vázquez, D. P. et al. (2011). Ecological consequences of dead wood extraction in an arid ecosystem. <i>Basic Appl. Ecol.</i> 12: 722-732.",
    "Alvarez, J. A. et al. (2011). Wood productivity of <i>Prosopis flexuosa</i> woodlands in the central Monte. <i>J. Arid Environ.</i> 75: 7-13.",
    "Iglesias, M. R. et al. (2011). Carbon storage, community structure and canopy cover along a precipitation gradient. <i>For. Ecol. Manage.</i> 265: 218-229.",
  ],
});
