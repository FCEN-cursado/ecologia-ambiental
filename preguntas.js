// Banco de preguntas — Ecología Ambiental y Regional
// Tipos: "mc" (opción múltiple), "vf" (verdadero/falso), "completar", "unir"
// Campos comunes: id, tema, tipo, enunciado, justificacion, teoria (HTML), figura?, fuente, flash {frente, dorso}

window.TEMAS = {
  escalas: "Escalas y macrosistemas",
  productividad: "Productividad primaria",
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
      <p>En el caso del Amazonas visto en clase se combinan las cuatro interacciones: <em>teleconexiones</em> (los mercados globales generan demanda de pasturas en la región), <em>interacción entre escalas</em> (esa demanda regional se concreta como deforestación en cada campo), <em>patrones emergentes</em> (la competencia pasto-árbol de muchos sitios cambia la cobertura vegetal regional) y <em>retroalimentaciones</em> (entre la cobertura vegetal y el clima).</p>
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

  {
    id: "esc-05",
    tema: "escalas",
    tipo: "vf",
    enunciado:
      "En cartografía, un mapa a escala 1:1.000.000 es de escala MÁS GRANDE que uno a 1:5.000, porque abarca un área mayor.",
    opciones: ["Verdadero", "Falso"],
    correcta: 1,
    justificacion:
      "Es falso. La escala cartográfica es una fracción: 1:5.000 es un número mayor que 1:1.000.000, así que es la escala más grande. Una escala grande muestra un área chica con mucho detalle; una escala chica (1:1.000.000) muestra un área grande con poco detalle. Muchos ecólogos usan “gran escala” en el sentido de “gran extensión”, que es justamente lo contrario.",
    teoria: `
      <p><strong>Tres tipos de escala</strong> (guía del TP 3):</p>
      <ul>
        <li><strong>Escala del patrón o fenómeno:</strong> la escala a la que efectivamente ocurre el proceso en la naturaleza.</li>
        <li><strong>Escala de análisis u observación:</strong> la eligen los investigadores al fijar el grano (tamaño de la unidad de muestreo) y la extensión (superficie muestreada).</li>
        <li><strong>Escala cartográfica:</strong> la relación entre una distancia en el mapa y la distancia real (por ejemplo, 1:250.000).</li>
      </ul>
      <p><strong>Ojo con “gran escala”:</strong> para evitar confusiones conviene aclarar, por ejemplo, “escala regional (gran extensión, grano grueso)”.</p>
      <p><strong>El mismo proceso, distintos controles:</strong> la mineralización del mantillo depende del dosel y el microclima a escala de m², pero de las variaciones climáticas regionales a escala de km². Por eso una conclusión obtenida a una escala no se extrapola automáticamente a otra (Cueto, 2006).</p>`,
    fuente: "1 Macroecología · Guía del TP 3",
    flash: {
      frente: "En cartografía, ¿qué muestra una escala grande y qué una escala chica?",
      dorso: "Una escala grande (1:5.000) muestra un área chica con mucho detalle. Una escala chica (1:1.000.000) muestra un área grande con poco detalle.",
    },
  },

  // ───────────── PRODUCTIVIDAD PRIMARIA ─────────────
  {
    id: "pro-01",
    tema: "productividad",
    tipo: "mc",
    enunciado:
      "Un pastizal fija por fotosíntesis 800 g C m⁻² año⁻¹, y las propias plantas respiran 400 g C m⁻² año⁻¹. ¿Cuál es su productividad primaria neta?",
    opciones: [
      "400 g C m⁻² año⁻¹",
      "1.200 g C m⁻² año⁻¹",
      "800 g C m⁻² año⁻¹",
      "2 (adimensional)",
    ],
    correcta: 0,
    justificacion:
      "PPN = PPB − R autótrofa = 800 − 400 = 400 g C m⁻² año⁻¹. Los 800 son la PPB (todo el C fijado); la respiración de las plantas suele ser aproximadamente la mitad de la PPB. La PPN siempre se expresa como masa de C (o materia seca) por superficie y por tiempo, nunca como un cociente sin unidades.",
    teoria: `
      <p><strong>PPN = PPB − R<sub>autótrofa</sub></strong></p>
      <ul>
        <li><strong>PPB</strong> (productividad primaria bruta, GPP): todo el C fijado por la fotosíntesis.</li>
        <li><strong>R:</strong> el C que las plantas devuelven a la atmósfera por respiración mitocondrial y fotorrespiración (≈ la mitad de la PPB).</li>
        <li><strong>Unidades:</strong> masa de C por superficie y por tiempo (g C m⁻² año⁻¹, kg C ha⁻¹ año⁻¹).</li>
      </ul>
      <p><strong>Órdenes de magnitud:</strong> selvas tropicales ≈ 1.000-1.200 g C m⁻² año⁻¹, pastizales templados ≈ 300-500 y desiertos &lt; 100.</p>
      <p>La PPN es la <strong>base energética</strong> del ecosistema: alimenta a herbívoros y descomponedores, define cuánto ganado sostiene un campo y cuánto C se acumula. Desde satélites se estima con el modelo de Monteith: PPN ≈ ε × RFA × fRFA, donde fRFA se estima con el NDVI.</p>`,
    fuente: "2 Factores de productividad",
    flash: {
      frente: "¿Qué diferencia hay entre PPB y PPN, y en qué unidades se expresa la PPN?",
      dorso: "La PPB es todo el C fijado por fotosíntesis. La PPN es la PPB menos la respiración de las plantas. Se expresa en masa de C por superficie y por tiempo (por ejemplo, g C m⁻² año⁻¹).",
    },
  },
  {
    id: "pro-02",
    tema: "productividad",
    tipo: "unir",
    enunciado: "Uní cada factor con la forma en que responde la fotosíntesis de una hoja.",
    pares: [
      { izq: "Temperatura", der: "Curva en campana: sube hasta un óptimo y luego cae bruscamente" },
      { izq: "Irradiancia (luz)", der: "Aumenta hasta saturarse; con exceso puede haber fotooxidación" },
      { izq: "Déficit de presión de vapor", der: "Disminuye porque la planta cierra los estomas" },
      { izq: "Nitrógeno foliar", der: "Relación lineal con el contenido de Rubisco" },
    ],
    justificacion:
      "La temperatura acelera las enzimas hasta que se desnaturalizan, y además sube la respiración: por eso hay un óptimo. La luz aumenta la fotosíntesis hasta que el límite pasa a ser la fijación de C. Con aire seco (DPV alto) la planta cierra los estomas para no perder agua y entra menos CO₂. El N limita la cantidad de Rubisco, la proteína más abundante de la hoja.",
    teoria: `
      <p>Lo que limita la fotosíntesis en una hoja también limita la PPN del ecosistema, si se suma en el espacio y en el tiempo.</p>
      <ul>
        <li><strong>Temperatura:</strong> óptimo; por encima aumentan la respiración y la fotorrespiración.</li>
        <li><strong>Luz:</strong> por debajo del punto de compensación, la respiración supera a la fotosíntesis.</li>
        <li><strong>Agua (DPV):</strong> compromiso agua-carbono a través de los estomas.</li>
        <li><strong>CO₂:</strong> es el sustrato de la Rubisco; aumenta hasta saturarse.</li>
        <li><strong>N:</strong> más N foliar → más Rubisco → más capacidad fotosintética.</li>
      </ul>
      <p>A escala de ecosistema, la PPN depende de cuánto tiempo del año coinciden la temperatura adecuada y el agua disponible (la estación de crecimiento), de la superficie foliar y de los nutrientes. Las torres de flujo (Aranibar et al., 2006) muestran cómo el agua y el carbono están acoplados.</p>`,
    fuente: "2 Factores de productividad",
    flash: {
      frente: "¿Qué 5 factores limitan la fotosíntesis a escala de hoja?",
      dorso: "Luz (satura), temperatura (tiene un óptimo), agua (el cierre estomático por DPV alto reduce la entrada de CO₂), CO₂ (satura) y N (limita la cantidad de Rubisco).",
    },
  },
  {
    id: "pro-03",
    tema: "productividad",
    tipo: "mc",
    enunciado: "¿Por qué los grandes desiertos del planeta (Sahara, Atacama, Kalahari, Australia) se ubican alrededor de los 30° de latitud?",
    opciones: [
      "Porque allí desciende el aire seco de la celda de Hadley, se calienta por compresión y forma un cinturón de alta presión que inhibe las lluvias",
      "Porque allí asciende el aire cálido y se forma un cinturón de baja presión",
      "Porque a 30° la radiación solar es mínima durante todo el año",
      "Porque allí se ubica la Zona de Convergencia Intertropical",
    ],
    correcta: 0,
    justificacion:
      "En el ecuador el aire caliente y húmedo asciende, se enfría y descarga la lluvia (selvas). Ya seco, se desplaza en altura y desciende a ≈ 30°: al bajar se comprime y se calienta, y la subsidencia genera altas presiones que impiden la formación de nubes. La ZCIT y los ascensos están en el ecuador (y a 60°), no a 30°.",
    teoria: `
      <p><strong>Modelo de tres celdas por hemisferio:</strong></p>
      <ul>
        <li><strong>Hadley (0-30°):</strong> ascenso en el ecuador (baja presión, lluvias, selvas) y descenso a 30° (alta presión, desiertos). El aire vuelve al ecuador como vientos alisios.</li>
        <li><strong>Ferrel (30-60°):</strong> vientos del oeste en superficie; a 60° el aire asciende en el frente polar (lluvias frontales).</li>
        <li><strong>Polar (60-90°):</strong> el aire frío desciende en los polos (desiertos fríos).</li>
      </ul>
      <p><strong>ZCIT:</strong> franja de bajas presiones donde convergen los alisios. Migra hacia el hemisferio que está en verano, y por eso muchas regiones tropicales tienen una estación lluviosa y otra seca.</p>
      <p><strong>Otros controles de la precipitación:</strong> orografía, corrientes marinas (una corriente fría como la de Humboldt genera aridez costera) y ENSO.</p>`,
    fuente: "2 Factores de productividad (controles del clima)",
    flash: {
      frente: "Circulación general: ¿dónde asciende y dónde desciende el aire, y qué clima genera cada uno?",
      dorso: "Asciende en el ecuador y a 60° (bajas presiones, lluvias). Desciende a 30° y en los polos (altas presiones, subsidencia, desiertos).",
    },
  },
  {
    id: "pro-04",
    tema: "productividad",
    tipo: "completar",
    enunciado:
      "Cuando el viento húmedo choca con una montaña, asciende por la ladera de ___, se enfría y llueve. Del otro lado, a ___, el aire desciende seco y se forma una sombra de lluvia. El viento Zonda, que baja seco y caliente sobre Mendoza, es un ejemplo de efecto ___.",
    blancos: [["barlovento"], ["sotavento"], ["foehn", "fohn"]],
    justificacion:
      "La precipitación orográfica ocurre a barlovento, la ladera que recibe el viento húmedo. A sotavento el aire ya perdió su humedad y se calienta por compresión al descender. El Zonda es el aire del Pacífico que descarga nieve y lluvia en Chile y la cordillera y baja seco y cálido del lado argentino: el efecto Foehn.",
    teoria: `
      <ul>
        <li><strong>Barlovento:</strong> la ladera oriental del Aconquija (Tucumán) recibe los vientos húmedos del este y tiene selva de Yungas.</li>
        <li><strong>Sotavento:</strong> detrás de las sierras queda la sombra de lluvia, como el valle de Santa María (árido).</li>
        <li><strong>Zonda:</strong> efecto Foehn sobre Mendoza y San Juan.</li>
      </ul>
      <p><strong>Las lluvias en Argentina:</strong> en el norte y centro la humedad viene del Atlántico y la Amazonía, y las lluvias disminuyen de este a oeste (≈ 2.000 mm en Misiones a &lt; 200 mm en el Monte), con lluvias de verano. En la Patagonia la humedad viene del Pacífico, a diferencia del norte los vientos del oeste logran llegar al lado Argentino gracias a la cordillera de menor altura y estrcruras favorables (grandes valles). Las lluvias disminuyen de oeste a este, con lluvias de invierno. Entre ambos sistemas queda la <em>diagonal árida</em>.</p>`,
    fuente: "2 Factores de productividad (controles locales)",
    flash: {
      frente: "¿Por qué hay Yungas en la ladera oriental de las sierras del NOA y zonas áridas detrás?",
      dorso: "Por la lluvia orográfica: el aire húmedo del este asciende a barlovento y llueve. A sotavento desciende seco y se forma una sombra de lluvia (por ejemplo, el valle de Santa María).",
    },
  },
  {
    id: "pro-05",
    tema: "productividad",
    tipo: "vf",
    enunciado:
      "En zonas áridas como el Monte, la PPN aumenta casi linealmente con la precipitación anual, porque el agua es el principal factor limitante.",
    opciones: ["Verdadero", "Falso"],
    correcta: 0,
    justificacion:
      "Es verdadero. En zonas áridas el agua es el principal limitante, así que cada mm extra de lluvia se traduce en más producción. En zonas húmedas, en cambio, pasan a limitar la temperatura, la luz o los nutrientes.",
    teoria: `
      <p><strong>Implicancias en los sistemas de producción:</strong></p>
      <ul>
        <li><strong>Ganadería:</strong> la PPN forrajera determina la receptividad (carga animal sostenible). Si se supera, hay sobrepastoreo → menos cobertura → erosión y desertificación.</li>
        <li><strong>Agricultura:</strong> el rendimiento depende del período libre de heladas, del balance hídrico (se ve en el climograma) y de la radiación. En zonas áridas depende del riego: los oasis de Mendoza dependen del agua de deshielo.</li>
        <li><strong>Forestal:</strong> la productividad de madera del algarrobo en el Monte es muy baja (Alvarez et al., 2011), así que la extracción de leña debe regularse.</li>
        <li><strong>Cambio climático:</strong> al cambiar T, lluvias y estacionalidad, cambia dónde y cuánto se puede producir (TP 2, la vid en Mendoza).</li>
      </ul>
      <p>La biodiversidad también puede aumentar la PPN por <strong>complementariedad de nicho</strong> y <strong>facilitación</strong> (plantas nodriza, como los pastos bajo la copa del algarrobo).</p>`,
    fuente: "2 Factores de productividad (implicancias en la producción)",
    flash: {
      frente: "¿Qué limita la PPN en zonas áridas y en zonas húmedas?",
      dorso: "En zonas áridas, sobre todo el agua: la PPN sube casi linealmente con la precipitación. En zonas húmedas pasan a limitar la temperatura, la luz o los nutrientes.",
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

  {
    id: "cli-05",
    tema: "clima",
    tipo: "mc",
    enunciado:
      "En un pastizal, varias especies de gramíneas cumplen la misma función de fijar el suelo. Tras una sequía desaparece una de ellas, pero las otras mantienen esa función. ¿Qué concepto ilustra este caso?",
    opciones: [
      "Redundancia funcional",
      "Complementariedad de nicho",
      "Facilitación",
      "Teleconexión",
    ],
    correcta: 0,
    justificacion:
      "Hay redundancia funcional cuando varias especies cumplen la misma función: si una falla, otra con atributos parecidos la reemplaza, y eso le da resiliencia al sistema. La complementariedad es lo contrario: especies que usan recursos distintos. La facilitación es cuando una planta mejora el microambiente de otra.",
    teoria: `
      <p><strong>La diversidad funcional se organiza en tres niveles:</strong></p>
      <ul>
        <li><strong>Servicios ecosistémicos:</strong> beneficios para las personas: de aprovisionamiento, de regulación, de soporte y culturales.</li>
        <li><strong>Funciones ecosistémicas:</strong> procesos como la captura de C (PPN), la absorción de agua y nutrientes, la fijación de N, la descomposición y la fijación de suelos.</li>
        <li><strong>Atributos funcionales:</strong> rasgos medibles (morfológicos, anatómicos, bioquímicos, fisiológicos como C3/C4/CAM y fenológicos) que afectan la respuesta al ambiente o el efecto sobre el ecosistema. Base de datos global: TRY.</li>
      </ul>
      <p><strong>Tipos funcionales de plantas</strong> (Díaz et al., 2002): grupos de especies con atributos y respuestas parecidas, sin importar su parentesco. Se definen según la escala y la pregunta.</p>
      <p>La diversidad funcional da resiliencia (redundancia) y permite aumentar los servicios. Se cuantifica, por ejemplo, con el índice de Rao.</p>`,
    fuente: "3 Diversidad funcional",
    flash: {
      frente: "¿Qué es un tipo funcional de plantas y qué aporta la redundancia funcional?",
      dorso: "Un grupo de especies con atributos y respuestas parecidas al ambiente, sin importar su parentesco. La redundancia (varias especies con la misma función) da resiliencia: si una falla, otra la reemplaza.",
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

  {
    id: "sig-04",
    tema: "sig",
    tipo: "mc",
    enunciado:
      "Descargaste la capa de Áreas Naturales Protegidas de Mendoza en coordenadas geográficas (WGS84) y querés calcular su superficie en m². ¿Qué tenés que hacer primero?",
    opciones: [
      "Reproyectarla a un sistema plano en metros, como Gauss-Krüger faja 2 (EPSG:22192)",
      "Rasterizarla, porque solo en raster se pueden calcular áreas",
      "Nada: la calculadora de campos convierte los grados a m² automáticamente",
      "Cambiar el datum de WGS84 a POSGAR",
    ],
    correcta: 0,
    justificacion:
      "En coordenadas geográficas las unidades son grados, y un grado de longitud no mide lo mismo en el ecuador que en Ushuaia. Para obtener perímetros en m y áreas en m² hay que reproyectar a un sistema plano. Mendoza cae en la faja 2 de Gauss-Krüger. Cambiar a POSGAR no sirve: sigue siendo un sistema de referencia en grados, y en la práctica coincide con WGS84.",
    teoria: `
      <p><strong>Gauss-Krüger</strong> es la proyección oficial argentina: cilíndrica transversal, con 7 fajas de 3° de ancho, cada una con su meridiano central (faja 1 = 72° O, faja 2 = 69° O, faja 3 = 66° O…). Las coordenadas son planas, en metros.</p>
      <p><strong>Toda proyección deforma</strong> algo: Mercator conserva los ángulos (conforme), Peters conserva las áreas (equivalente) y Robinson es de compromiso. En Gauss-Krüger la deformación es mínima cerca del meridiano central de cada faja.</p>
      <p><strong>En el TP 3:</strong> se reproyectaron las ANP a EPSG:22192 y con la calculadora de campos se obtuvieron perímetro y área. Así se vio que Laguna del Diamante (1.980,37 km²) es la tercera ANP más grande de Mendoza.</p>`,
    fuente: "4 SIG · TP 3",
    flash: {
      frente: "¿Por qué hay que proyectar una capa antes de calcular áreas, y en qué faja Gauss-Krüger cae Mendoza?",
      dorso: "Porque en coordenadas geográficas la unidad es el grado, que no equivale a una distancia constante. Hay que pasar a un sistema plano en metros. Mendoza cae en la faja 2 (EPSG:22192).",
    },
  },
  {
    id: "sig-05",
    tema: "sig",
    tipo: "vf",
    enunciado:
      "Al rasterizar una capa de polígonos (vector → raster) no se pierde precisión, siempre que el tamaño de píxel sea grande.",
    opciones: ["Verdadero", "Falso"],
    correcta: 1,
    justificacion:
      "Es falso. Al rasterizar, los límites precisos del vector se aproximan con celdas cuadradas y quedan “escalonados”. Cuanto más GRANDE es el píxel, peor es la aproximación. Con píxeles más chicos el borde se parece más al original, pero el archivo pesa más. Y al poligonizar un raster no se recupera la precisión: los polígonos heredan el escalonado.",
    teoria: `
      <p><strong>Ambos modelos son interconvertibles:</strong></p>
      <ul>
        <li><strong>Poligonizar</strong> (raster → vector): las celdas se transforman en polígonos.</li>
        <li><strong>Rasterizar</strong> (vector → raster): las entidades se expresan en una grilla.</li>
      </ul>
      <p><strong>El dato geográfico</strong> se describe con tres tipos de descriptores: <em>atributos</em> (semánticos: qué es), <em>ubicación</em> (geométricos: coordenadas) y <em>relaciones espaciales</em> (topológicos: adyacencia, inclusión, conectividad).</p>
      <p>Cada capa tiene un solo modelo de representación, y cada capa vectorial un solo tipo de entidad (puntos, líneas o polígonos).</p>
      <p><strong>Operaciones espaciales:</strong> la intersección devuelve la zona de solape, con las geometrías recortadas y los atributos de ambas capas. Otras: unión, recorte (clip), buffer, disolución y selección por localización.</p>`,
    fuente: "4 SIG · TP 3",
    flash: {
      frente: "¿En qué conversión se pierde precisión y qué pasa al achicar el píxel?",
      dorso: "Al rasterizar (vector → raster), porque los límites quedan escalonados. Con píxeles más chicos el borde se parece más al original, pero el archivo pesa más.",
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

  {
    id: "tel-05",
    tema: "teledeteccion",
    tipo: "mc",
    enunciado:
      "Querés seguir día a día el reverdecimiento (la fenología) de los pastizales de toda una región durante una temporada. ¿Qué sensor conviene y por qué?",
    opciones: [
      "MODIS: revisita diaria, aunque con píxeles grandes (250 m)",
      "Landsat 8: píxel de 30 m y revisita cada 16 días",
      "Una imagen pancromática de muy alta resolución de una sola fecha",
      "Cualquiera, porque todos los sensores tienen la misma frecuencia de revisita",
    ],
    correcta: 0,
    justificacion:
      "Hay un compromiso entre resoluciones: los sensores de píxel chico revisitan menos seguido, y los de revisita diaria tienen píxeles grandes. Para seguir la fenología importa la resolución TEMPORAL, así que conviene MODIS. Para mapear parcelas chicas convendría alta resolución espacial (Sentinel-2 o Landsat).",
    teoria: `
      <ul>
        <li><strong>Espacial:</strong> tamaño del píxel (Landsat 30 m, Sentinel-2 10 m, MODIS 250 m).</li>
        <li><strong>Temporal:</strong> revisita (Landsat 16 días, 8 combinando L8 y L9; Sentinel-2 5 días en constelación; MODIS diaria).</li>
        <li><strong>Espectral:</strong> número y ancho de bandas: pancromático (1), multiespectral (3-30), hiperespectral (32-256).</li>
        <li><strong>Radiométrica:</strong> niveles de energía que distingue: 8 bit = 2⁸ = 256 niveles; 16 bit = 65.536.</li>
      </ul>
      <p><strong>Landsat 8/9, sensor OLI:</strong> B2 azul, B3 verde, B4 rojo, B5 NIR, B6 SWIR1, B7 SWIR2. La serie Landsat tiene imágenes desde 1972, lo que permite analizar cambios de largo plazo.</p>
      <p><strong>Sensores pasivos</strong> registran la energía solar reflejada o emitida. Los <strong>activos</strong> (radar, LiDAR) emiten su propia energía.</p>`,
    fuente: "5 Teledetección",
    flash: {
      frente: "¿Qué es el compromiso entre resoluciones y cuántos niveles distingue un sensor de 8 bits?",
      dorso: "Los sensores de píxel chico suelen revisitar menos seguido, y los de revisita diaria (MODIS) tienen píxeles grandes. Un sensor de 8 bits distingue 2⁸ = 256 niveles.",
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

  {
    id: "pai-04",
    tema: "paisaje",
    tipo: "mc",
    enunciado:
      "Una ruta atraviesa un humedal. Para los anfibios funciona como una barrera parcial: solo algunos individuos logran cruzarla. ¿Qué función de los corredores describe este caso?",
    opciones: [
      "Filtro",
      "Conducción",
      "Fuente",
      "Hábitat",
    ],
    correcta: 0,
    justificacion:
      "La función de filtro es la de un corredor que actúa como barrera absoluta, parcial o inexistente según la especie. La ruta es un elemento lineal que, para los anfibios, filtra el paso. La conducción, en cambio, es facilitar el desplazamiento por el interior del corredor.",
    teoria: `
      <p><strong>Funciones de los corredores:</strong></p>
      <ul>
        <li><strong>Conducción:</strong> facilitan el desplazamiento por su interior (dependen del ancho, el largo y las discontinuidades).</li>
        <li><strong>Filtro:</strong> barrera absoluta, parcial o inexistente según la especie.</li>
        <li><strong>Hábitat:</strong> los lineales (angostos) sirven a generalistas; los de franja (anchos), a especialistas.</li>
        <li><strong>Fuente:</strong> permiten que las especies se expandan hacia la matriz.</li>
        <li><strong>Sumidero:</strong> dan refugio a especies de la matriz o las absorben.</li>
      </ul>
      <p>Los corredores reducen el <em>efecto distancia</em> de la Teoría de Biogeografía de Islas. <strong>Riesgos:</strong> pueden facilitar la expansión de invasoras, patógenos o depredadores, y la propagación del fuego.</p>
      <p><strong>Tipos:</strong> lineal, con nodos, “stepping stones” (pasaderas) y mosaico.</p>`,
    fuente: "6 Ecología del paisaje",
    flash: {
      frente: "¿Cuáles son las 5 funciones de los corredores?",
      dorso: "Conducción, filtro, hábitat, fuente y sumidero.",
    },
  },
  {
    id: "pai-05",
    tema: "paisaje",
    tipo: "vf",
    enunciado: "“Pastizal” y “campo ganadero” son dos categorías de cobertura de la tierra.",
    opciones: ["Verdadero", "Falso"],
    correcta: 1,
    justificacion:
      "Es falso. “Pastizal” es una cobertura: la naturaleza física o biótica que recubre la superficie, lo que “se ve”. “Campo ganadero” es un uso del suelo: lo que hacen las personas con ese territorio. Un mismo pastizal puede tener uso ganadero o ser una reserva.",
    teoria: `
      <ul>
        <li><strong>Cobertura de la tierra:</strong> agua, suelo desnudo, bosque, pastizal. Es lo que se detecta en una imagen satelital.</li>
        <li><strong>Uso del suelo:</strong> agrícola, ganadero, urbano, industrial, recreativo, de conservación.</li>
      </ul>
      <p>Los cambios de cobertura y uso son la principal causa directa de pérdida de biodiversidad terrestre (IPBES, 2019). A medida que avanza la transición de uso, del ecosistema natural a la agricultura intensiva y la urbanización, se pierden servicios ecosistémicos (Foley et al., 2005).</p>
      <p><strong>Detección de cambios:</strong> datos multitemporales (censos agropecuarios, imágenes satelitales), análisis cuantitativos (índices, clasificación) y modelado de escenarios futuros (tendencial, pesimista, deseable).</p>
      <p><strong>En el TP 5</strong> se hizo un mapa de cobertura y uso con clasificación no supervisada (k-means): clases espectralmente parecidas, como urbano y suelo desnudo, tienden a confundirse.</p>`,
    fuente: "6 Ecología del paisaje · TP 5",
    flash: {
      frente: "Cobertura de la tierra vs. uso del suelo",
      dorso: "La cobertura es lo físico o biótico que recubre la superficie (bosque, agua, pastizal). El uso es lo que hacen las personas con el territorio (ganadería, agricultura, conservación).",
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

  {
    id: "res-05",
    tema: "restauracion",
    tipo: "mc",
    enunciado:
      "En un campo del piedemonte se retiró el ganado hace 10 años, pero la vegetación no se recupera: el suelo está erosionado y compactado. ¿Qué tipo de barrera hay y qué medida corresponde?",
    opciones: [
      "Un umbral abiótico: hacen falta modificaciones físicas, como control de la erosión y enmiendas del suelo",
      "Un umbral biótico: alcanza con sembrar especies nativas",
      "No hay ningún umbral: solo hay que esperar más tiempo con la clausura",
      "Un umbral biótico: hay que controlar las especies exóticas",
    ],
    correcta: 0,
    justificacion:
      "Si sacar el disturbio (la restauración pasiva) no alcanza, el sistema cruzó un umbral. Como el problema es el suelo (erosión, compactación), es un umbral abiótico, que requiere modificaciones físico-químicas. Sembrar sin arreglar el suelo probablemente fracasaría. Los umbrales bióticos son la falta de semillas, la dominancia de invasoras o la pérdida de polinizadores y dispersores.",
    teoria: `
      <p>Después de un disturbio, el ecosistema puede recuperarse solo, quedarse degradado o pasar a un <strong>estado alternativo estable</strong>.</p>
      <ul>
        <li><strong>Umbral biótico:</strong> faltan propágulos, dominan invasoras, se perdieron polinizadores o dispersores → siembra, plantación, control de exóticas.</li>
        <li><strong>Umbral abiótico:</strong> suelo erosionado, compactado o salinizado, hidrología alterada → control de erosión, enmiendas, reconexión hídrica.</li>
      </ul>
      <p><strong>Prácticas según el potencial de regeneración natural</strong> (Gann et al., SER):</p>
      <ol>
        <li><strong>Regeneración natural espontánea</strong> (pasiva): eliminar la causa (clausuras, suprimir el fuego).</li>
        <li><strong>Facilitada:</strong> además, control de exóticas, perchas para aves, protección de renovales.</li>
        <li><strong>Asistida:</strong> enriquecimiento con siembra o plantación, control de la erosión.</li>
        <li><strong>Reconstrucción</strong> (activa): rehacer el sustrato y reintroducir casi todas las especies.</li>
      </ol>
      <p>Cuanto más degradado el sistema, más barreras hay que superar y más cara es la intervención.</p>`,
    fuente: "7 Restauración",
    flash: {
      frente: "Umbral biótico vs. abiótico: ¿qué son y qué medidas requiere cada uno?",
      dorso: "Biótico: faltan semillas, dominan invasoras o se perdieron dispersores → siembra, plantación, control de exóticas. Abiótico: suelo erosionado, compactado o salinizado → control de erosión, enmiendas, reconexión hídrica.",
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

  {
    id: "eia-02",
    tema: "eia",
    tipo: "completar",
    enunciado:
      "El procedimiento técnico-administrativo completo, que conduce la autoridad, es la ___. El documento técnico que elabora y presenta el proponente es el ___. El acto final por el que la autoridad aprueba (con condiciones) o rechaza el proyecto es la ___.",
    blancos: [
      ["EIA", "evaluacion de impacto ambiental"],
      ["EsIA", "estudio de impacto ambiental"],
      ["DIA", "declaracion de impacto ambiental"],
    ],
    justificacion:
      "Son tres cosas distintas que suelen confundirse. La EIA es el procedimiento preventivo entero. El EsIA es uno de sus insumos: el estudio que presenta quien quiere hacer el proyecto. La DIA es la decisión de la autoridad, que cierra el procedimiento.",
    teoria: `
      <p><strong>Etapas del procedimiento (esquema general):</strong></p>
      <ol>
        <li>El proponente presenta el EsIA (o la manifestación de impacto).</li>
        <li>La autoridad ambiental inicia el procedimiento.</li>
        <li>Dictamen técnico (de una universidad u organismo científico, como el IADIZA en ANP) y dictámenes sectoriales.</li>
        <li>Consulta pública.</li>
        <li>Audiencia pública.</li>
        <li>Declaración de Impacto Ambiental (DIA).</li>
      </ol>
      <p><strong>Marco legal:</strong> la Ley 25.675 (General del Ambiente) incluye la EIA entre los instrumentos de política ambiental (art. 8) y exige que toda obra que pueda degradar el ambiente se someta a EIA antes de ejecutarse (art. 11). En Mendoza rige la Ley 5.961 (1993). Según el proyecto, la competencia es provincial (minería, energía, hidrocarburos) o municipal (barrios, cementerios, proyectos urbanos).</p>`,
    fuente: "9 EIA",
    flash: {
      frente: "¿Qué son la EIA, el EsIA y la DIA?",
      dorso: "EIA: el procedimiento completo que conduce la autoridad. EsIA: el documento técnico del proponente. DIA: la decisión final de la autoridad (aprueba con condiciones o rechaza).",
    },
  },
  {
    id: "eia-03",
    tema: "eia",
    tipo: "unir",
    enunciado:
      "Para un camping en el piedemonte, uní cada paso de la jerarquía de mitigación con la medida que le corresponde.",
    pares: [
      { izq: "Evitar", der: "No ubicar las parcelas sobre cauces aluvionales ni sobre suelos con biocostras" },
      { izq: "Minimizar", der: "Delimitar senderos y restringir la circulación de vehículos" },
      { izq: "Restaurar", der: "Revegetar con nativas las áreas usadas durante la obra" },
      { izq: "Compensar", der: "Financiar la conservación de un área equivalente dentro de la reserva" },
    ],
    justificacion:
      "La jerarquía se aplica en orden: primero se evitan los impactos desde el diseño y la localización; los inevitables se minimizan en escala espacial o temporal; las áreas degradadas se restauran; y solo los impactos residuales se compensan. Todo con monitoreo continuo, plan de cierre y evaluación posoperativa.",
    teoria: `
      <ol>
        <li><strong>Evitar:</strong> prevención mediante planificación y diseño responsable, o cambio de localización.</li>
        <li><strong>Minimizar:</strong> reducir la escala espacial o temporal de los impactos inevitables con técnicas y buenas prácticas.</li>
        <li><strong>Restaurar o remediar</strong> las áreas degradadas.</li>
        <li><strong>Compensar</strong> los impactos residuales, por ejemplo conservando un área equivalente.</li>
      </ol>
      <p><strong>El piedemonte es frágil:</strong> suelos con biocostras (que destruyen el pisoteo y los vehículos), pendientes con riesgo de erosión y aluviones, vegetación del Monte de crecimiento lento y fauna nativa, además de la presión de urbanización, basurales e incendios.</p>`,
    fuente: "9 EIA · TP 7",
    flash: {
      frente: "¿Cuál es el orden de la jerarquía de mitigación?",
      dorso: "1) Evitar, 2) minimizar, 3) restaurar o remediar y 4) compensar los impactos residuales. Siempre con monitoreo continuo.",
    },
  },
  {
    id: "eia-04",
    tema: "eia",
    tipo: "mc",
    enunciado:
      "En una matriz de Leopold, la celda “pérdida de combustible × agua subterránea” se valoró como −4 / 9. ¿Cómo se interpreta?",
    opciones: [
      "Un impacto adverso de magnitud moderada, pero de importancia muy alta, por ejemplo porque es irreversible y afecta un acuífero",
      "Un impacto benéfico de importancia baja",
      "Un error: la magnitud y la importancia siempre deben tener el mismo valor",
      "Un impacto adverso grave, porque −4 + 9 = 5 supera el umbral de aprobación",
    ],
    correcta: 0,
    justificacion:
      "El primer número es la magnitud: la intensidad del cambio, con signo (− = adverso). El segundo es la importancia: la relevancia del impacto según su extensión, persistencia y reversibilidad, sin signo. Un derrame chico puede alterar poco el agua en intensidad pero ser muy importante, porque contaminar un acuífero es prácticamente irreversible. Los dos valores no se suman.",
    teoria: `
      <p><strong>Matriz de Leopold (1971):</strong> cruza ≈ 100 acciones humanas con 88 factores ambientales (en la práctica se usa una versión simplificada) y evalúa a la vez impactos positivos y negativos.</p>
      <ul>
        <li><strong>Magnitud</strong> (1-10, con signo): intensidad del cambio. Ej.: deforestar 5 ha = −7.</li>
        <li><strong>Importancia</strong> (1-10, sin signo): relevancia según extensión, persistencia y reversibilidad. Ej.: contaminación de un acuífero local = 9.</li>
      </ul>
      <p>Al sumar por factor se ve cuál es el más afectado, y al sumar por acción, cuál es la más negativa: ahí se proponen las medidas de mitigación.</p>
      <p><strong>Ejemplo (guía del TP 7):</strong> la construcción de caminos tiene impactos negativos sobre el suelo, la vegetación y la fauna, pero positivos sobre la población (+7 / 8, por el acceso).</p>`,
    fuente: "9 EIA · TP 7",
    flash: {
      frente: "Leopold: ¿qué diferencia hay entre magnitud e importancia?",
      dorso: "La magnitud es la intensidad del cambio (±1-10, con signo). La importancia es la relevancia del impacto según su extensión, persistencia y reversibilidad (1-10, sin signo).",
    },
  },
  {
    id: "eia-05",
    tema: "eia",
    tipo: "mc",
    enunciado:
      "Un gobierno provincial quiere evaluar las consecuencias ambientales de su nuevo plan de ordenamiento territorial, antes de aprobarlo. ¿Qué instrumento corresponde?",
    opciones: [
      "Una Evaluación Ambiental Estratégica (EAE)",
      "Una Evaluación de Impacto Ambiental (EIA) de proyecto",
      "Una Declaración de Impacto Ambiental (DIA)",
      "Una matriz de Leopold, sin necesidad de ningún procedimiento",
    ],
    correcta: 0,
    justificacion:
      "La EAE se aplica a políticas, planes o programas gubernamentales, como un plan de ordenamiento. La EIA se aplica a proyectos concretos de obras o actividades. La DIA es el acto final de una EIA, y la matriz de Leopold es solo un método de valoración dentro del estudio.",
    teoria: `
      <ul>
        <li><strong>Evaluación ambiental (EA):</strong> el conjunto de herramientas y procedimientos que permiten tomar decisiones informadas sobre las implicancias ambientales.</li>
        <li><strong>EIA:</strong> para proyectos de obras o actividades.</li>
        <li><strong>EAE:</strong> para políticas, planes y programas.</li>
      </ul>
      <p><strong>Impacto ambiental:</strong> cualquier cambio adverso <em>o beneficioso</em> en el ambiente que resulte de actividades humanas (UNEP).</p>
      <p><strong>Características de la EIA:</strong> participativa, multidisciplinaria, preventiva (antes de ejecutar) y sistemática. Debe considerar todo el ciclo de vida del proyecto (construcción, operación, cierre y poscierre), porque los impactos cambian en cada fase.</p>`,
    fuente: "9 EIA",
    flash: {
      frente: "¿Qué diferencia hay entre una EIA y una EAE?",
      dorso: "La EIA evalúa proyectos concretos de obras o actividades. La EAE evalúa políticas, planes o programas gubernamentales.",
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
  {
    id: "car-02",
    tema: "carbono",
    tipo: "mc",
    enunciado:
      "En una parcela se estimaron, con ecuaciones alométricas, 10 t de biomasa leñosa seca. ¿A cuántas t CO₂e equivale? (CF = 0,47)",
    opciones: [
      "≈ 17,2 t CO₂e",
      "4,7 t CO₂e",
      "≈ 36,7 t CO₂e",
      "≈ 1,3 t CO₂e",
    ],
    correcta: 0,
    justificacion:
      "Primero se pasa de biomasa a carbono: 10 × 0,47 = 4,7 t C. Después de carbono a CO₂ con la relación de pesos moleculares: 4,7 × 44/12 ≈ 17,2 t CO₂e. La opción 4,7 se queda en el carbono; 36,7 se olvida de la fracción de C; y 1,3 divide por 44/12 en lugar de multiplicar.",
    teoria: `
      <p><strong>De la biomasa al crédito:</strong></p>
      <ol>
        <li><strong>Biomasa</strong> (t de materia seca): con ecuaciones alométricas (no destructivas) o por cosecha.</li>
        <li><strong>Carbono</strong> = biomasa × CF. Leñosa: 0,47 t C/t m.s.; hojarasca: 0,37.</li>
        <li><strong>CO₂e</strong> = C × 44/12 (≈ 3,67).</li>
        <li><strong>Por hectárea:</strong> se divide por el área de la parcela, se suma por reservorio y se expande al área del proyecto.</li>
      </ol>
      <p><strong>Ecuaciones alométricas:</strong> relacionan la biomasa con variables fáciles de medir (DAP, altura, diámetro de copa). Son específicas de cada especie y región. Verra exige que se deriven de al menos 30 individuos, con r² ≥ 0,8.</p>
      <p><strong>Biomasa subterránea (TP 6):</strong> con la relación raíz/vástago R = 0,56 si la biomasa aérea es &lt; 20 t m.s./ha, y 0,28 si es mayor.</p>`,
    fuente: "8 Créditos de carbono · TP 6",
    flash: {
      frente: "¿Cómo se pasa de biomasa a t CO₂e?",
      dorso: "Biomasa × fracción de C (0,47 para leñosas) = t C. Luego t C × 44/12 (≈ 3,67) = t CO₂e.",
    },
  },
  {
    id: "car-03",
    tema: "carbono",
    tipo: "vf",
    enunciado:
      "Un proyecto que vende créditos por “proteger” un bosque que ya está protegido por ley cumple claramente con el requisito de adicionalidad.",
    opciones: ["Verdadero", "Falso"],
    correcta: 1,
    justificacion:
      "Es falso. Una de las pruebas de adicionalidad es el excedente regulatorio: si la ley ya obliga a hacerlo, la reducción habría ocurrido igual sin los créditos, así que no es adicional. Por eso es discutido acreditar la protección de una reserva que ya está protegida por ley.",
    teoria: `
      <p><strong>Adicionalidad:</strong> ¿pasaría igual sin los créditos? Cuatro pruebas:</p>
      <ol>
        <li><strong>Inversión:</strong> sin la venta de créditos el proyecto no sería rentable.</li>
        <li><strong>Barreras:</strong> hay obstáculos financieros, tecnológicos o institucionales.</li>
        <li><strong>Práctica común:</strong> no es algo que ya se haga sin incentivo.</li>
        <li><strong>Excedente regulatorio:</strong> no está exigido por ley.</li>
      </ol>
      <p><strong>Requisitos del VCS (Verra):</strong> la reducción debe ser real, medible, permanente, adicional y verificada.</p>
      <p>Hay además reglas externas de calidad: ICVCM (principios de integridad), CORSIA (aerolíneas) y el sello CCB (beneficios para el clima, las comunidades y la biodiversidad).</p>`,
    fuente: "8 Créditos de carbono",
    flash: {
      frente: "¿Cuáles son las 4 pruebas de adicionalidad?",
      dorso: "1) Inversión (no es rentable sin créditos), 2) barreras, 3) práctica común (no se hace habitualmente) y 4) excedente regulatorio (no lo exige la ley).",
    },
  },
  {
    id: "car-04",
    tema: "carbono",
    tipo: "completar",
    enunciado:
      "Créditos = línea de base − proyecto − ___ − ___. El primer descuento corresponde a las emisiones desplazadas fuera del área del proyecto; el segundo, a la reserva de créditos que funciona como seguro ante el riesgo de no permanencia.",
    blancos: [["fugas", "fuga"], ["buffer", "reserva", "fondo buffer"]],
    justificacion:
      "Las fugas son las emisiones que se “mudan” fuera del área: por ejemplo, la deforestación que se traslada al campo vecino. El buffer es la parte de los créditos que Verra retiene en un fondo común según el riesgo de que el carbono vuelva a la atmósfera (incendios, tala, plagas): cuanto mayor el riesgo, mayor la reserva.",
    teoria: `
      <ul>
        <li><strong>Línea de base:</strong> el escenario sin proyecto. En REDD+, cuánta deforestación se proyecta sin intervención; en ARR, el carbono que ya hay antes de plantar.</li>
        <li><strong>Fugas:</strong> desplazamiento de emisiones fuera del área. Se descuentan, igual que la incertidumbre.</li>
        <li><strong>Permanencia y buffer:</strong> el carbono forestal puede volver a la atmósfera. Verra usa una herramienta de riesgo de no permanencia y guarda parte de los créditos en un fondo común que funciona como seguro colectivo.</li>
      </ul>
      <p><strong>Recorrido del crédito:</strong> proyecto → validación → verificación → registro (Verra emite VCU únicos) → venta → retiro (ya no puede revenderse).</p>`,
    fuente: "8 Créditos de carbono",
    flash: {
      frente: "¿Qué son las fugas y el buffer en un proyecto de carbono?",
      dorso: "Fugas: emisiones desplazadas fuera del área del proyecto. Buffer: reserva de créditos que funciona como seguro ante la no permanencia (incendios, tala, plagas).",
    },
  },
  {
    id: "car-05",
    tema: "carbono",
    tipo: "unir",
    enunciado: "Uní cada reservorio de carbono con la forma en que se midió en el TP 6 (Telteca).",
    pares: [
      { izq: "Árboles vivos (VMD0001)", der: "Parcelas circulares de 500 m², DAP a 1,30 m y ecuación alométrica" },
      { izq: "Arbustos (no árboles)", der: "Dos diámetros de copa perpendiculares y la altura" },
      { izq: "Hojarasca (VMD0003)", der: "Marcos de 50 × 50 cm, tamizado de la arena y secado en estufa" },
      { izq: "Madera muerta caída (VMD0002)", der: "Intersección de líneas de 50 m, midiendo piezas ≥ 10 cm" },
    ],
    justificacion:
      "Cada reservorio tiene su protocolo según los módulos de Verra. Los árboles se miden en parcelas con DAP y alometría; los arbustos, con el diámetro de copa y la altura; la hojarasca se cosecha en marcos y se corrige la humedad; y la madera caída se estima por intersección de líneas, con clases de densidad según la prueba del machete.",
    teoria: `
      <p><strong>Los cuatro reservorios:</strong> biomasa viva (VMD0001), madera muerta (VMD0002), hojarasca (VMD0003) y carbono orgánico del suelo (VMD0004).</p>
      <p><strong>Línea de base cero:</strong> la medición inicial del stock de carbono antes de cualquier proyecto; es la referencia contra la que se medirá la adición futura.</p>
      <p><strong>Telteca:</strong> bosque de algarrobo dulce (<em>Neltuma flexuosa</em>) en médanos e intermédanos. Hipótesis del TP: hay más C cerca de los intermédanos (más agua, napa accesible) y menos cerca de los puestos (tala y pastoreo).</p>
      <p><strong>Bibliografía:</strong> Magnano et al. (2023) encontraron menos diversidad de leñosas y menos C cerca de los puestos ganaderos; Vázquez et al. (2011) mostraron que extraer la madera muerta afecta el funcionamiento del bosque.</p>`,
    fuente: "8 Créditos de carbono · TP 6",
    flash: {
      frente: "¿Cuáles son los 4 reservorios de carbono y sus módulos de Verra?",
      dorso: "Biomasa viva (VMD0001), madera muerta (VMD0002), hojarasca (VMD0003) y carbono orgánico del suelo (VMD0004).",
    },
  },
];
