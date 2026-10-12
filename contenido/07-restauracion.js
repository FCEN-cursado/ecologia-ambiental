(window.UNIDADES ||= []).push({
  id: "restauracion",
  num: 7,
  tema: "restauracion",
  titulo: "Ecología de la restauración",
  bajada: "Cómo recuperar un ecosistema degradado: desde los conceptos (trayectorias, umbrales, ecosistema de referencia) hasta los pasos de un plan, con el caso de las biocostras.",
  programa: "h) Ecología de la restauración. Trayectorias post-disturbio y prácticas alternativas. Ecosistema de referencia. Atributos de un ecosistema restaurado. Planificación: selección de sitios, definición de medidas, evaluación de la efectividad y monitoreo.",
  clases: ["7 · Ecología de la restauración (B. Guida Johnson)", "7 · Restauración con biocostras (J. Aranibar)"],
  resumen: `
    <ul>
      <li>La <b>restauración ecológica</b> es una actividad <b>deliberada</b> que inicia o acelera la recuperación de un ecosistema degradado, para restablecer su integridad, resiliencia y sustentabilidad (SER, 2004).</li>
      <li>Hay un <b>continuo</b> de prácticas: reducción de impactos, remediación, rehabilitación, restauración ecológica. Y según el potencial de regeneración: <b>natural espontánea → facilitada → asistida → reconstrucción</b>.</li>
      <li>El <b>ecosistema de referencia</b> es el modelo de cómo sería el sitio sin degradación: guía las acciones y la evaluación.</li>
      <li>Un ecosistema restaurado se evalúa con <b>6 atributos</b>: ausencia de amenazas, condiciones físicas, composición, estructura, función e intercambios externos.</li>
      <li>Hay <b>4 pasos para planificar</b>: (1) identificar y caracterizar los sitios, (2) definir los objetivos, (3) diseñar las medidas y (4) seleccionar los criterios de éxito (monitoreo y gestión adaptativa).</li>
    </ul>`,
  secciones: [
    {
      id: "res-conceptos",
      titulo: "Degradación y restauración",
      html: `
        <p>Las preguntas que abrieron la clase: ¿qué significa que un ecosistema se degrade? ¿Se puede medir la degradación? ¿Se puede revertir? ¿Qué deberíamos saber y qué podemos aportar los biólogos?</p>
        <div class="idea"><b>Definición (SER, 2004)</b>
          <p>“La restauración es una actividad <b>deliberada</b> que inicia o acelera la recuperación de un ecosistema que ha sido degradado, transformado e incluso totalmente destruido como resultado directo o indirecto de las actividades del hombre, con el objetivo de restablecer su <b>integridad</b>, <b>resiliencia</b> y <b>sustentabilidad</b>.”</p>
        </div>
        <h4>El esquema de Bradshaw: estructura vs. función</h4>
        <figure class="fig chica"><img src="img/bradshaw.jpg" alt="Esquema de Bradshaw" loading="lazy"><figcaption>Las trayectorias posibles en el espacio estructura-función del ecosistema (adaptado de Bradshaw, 1996). (Clase 7)</figcaption></figure>
        <ul>
          <li><b>Degradación:</b> una perturbación reduce la estructura (especies, complejidad) y la función (productividad, ciclado).</li>
          <li><b>Regeneración natural espontánea:</b> la recuperación sin intervención. Puede ser lenta o no ocurrir si hay barreras.</li>
          <li><b>Restauración:</b> busca volver hacia el ecosistema original en estructura <i>y</i> función.</li>
          <li><b>Rehabilitación:</b> recupera sobre todo la <b>función</b> (productividad, protección del suelo), sin necesariamente recuperar la composición original.</li>
          <li><b>Creación o reclamación:</b> genera un ecosistema <b>distinto</b> del original (por ejemplo, un humedal en una ex cantera).</li>
        </ul>
        <h4>El continuo de la restauración (Gann et al., SER)</h4>
        <p>Es una gradiente de prácticas que mejoran progresivamente el ambiente: <b>reducción de impactos → remediación → rehabilitación → restauración ecológica</b>. Todas son valiosas. La restauración ecológica es la que apunta a recuperar el ecosistema nativo de referencia.</p>
        <figure class="fig"><img src="img/slides/res_continuo.jpg" alt="El continuo de la restauración" loading="lazy"><figcaption>El continuo de la restauración: de mejorar (improving) a recuperar plenamente (fully recovering). (Gann et al., SER)</figcaption></figure>`,
    },
    {
      id: "res-trayectorias",
      titulo: "Trayectorias post-disturbio, umbrales y prácticas alternativas",
      html: `
        <p>Después de un disturbio, el ecosistema puede seguir distintas <b>trayectorias</b>: recuperarse solo, quedarse en un estado degradado o pasar a un <b>estado alternativo estable</b> (por ejemplo, un bosque que se transforma en pastizal con fuego recurrente). La teoría de estados alternativos y <b>umbrales</b> explica por qué a veces “sacar el disturbio” no alcanza.</p>
        <div class="idea"><b>Barreras o umbrales de degradación</b>
          <ul>
            <li><b>Umbral biótico:</b> faltan semillas o propágulos, hay invasoras dominantes, se perdieron polinizadores o dispersores. Requiere <b>manipulaciones biológicas</b>: siembra, plantación, control de exóticas.</li>
            <li><b>Umbral abiótico:</b> el suelo está erosionado, compactado o salinizado, o cambió la hidrología. Requiere <b>modificaciones físico-químicas</b>: control de erosión, enmiendas, reconexión hídrica.</li>
          </ul>
          <p>Cuanto más degradado está el sistema, más barreras hay que superar y más intensiva (y cara) es la intervención.</p>
        </div>
        <figure class="fig"><img src="img/slides/res_umbrales.jpg" alt="Modelo conceptual de degradación ecosistémica" loading="lazy"><figcaption>Modelo conceptual de degradación: a mayor degradación se requieren cambios en el manejo, luego modificaciones biológicas y finalmente físico-químicas (McDonald et al., 2016). (Clase 7)</figcaption></figure>
        <h4>Prácticas según el potencial de regeneración natural</h4>
        <div class="tabla-wrap"><table class="tabla">
          <tr><th>Enfoque</th><th>Cuándo</th><th>Ejemplos de medidas</th></tr>
          <tr><td>1. Regeneración natural <b>espontánea</b> (pasiva)</td><td>Alto potencial: basta con eliminar la causa de la degradación</td><td>Excluir el ganado (clausuras), suprimir el fuego, detener la tala</td></tr>
          <tr><td>2. Regeneración natural <b>facilitada</b></td><td>Potencial moderado</td><td>Lo anterior más control de exóticas, perchas para aves dispersoras, protección de renovales</td></tr>
          <tr><td>3. Regeneración natural <b>asistida</b></td><td>Potencial bajo</td><td>Enriquecimiento con siembra o plantación, control de la erosión</td></tr>
          <tr><td>4. <b>Reconstrucción</b> (activa)</td><td>Potencial muy bajo o nulo</td><td>Rehacer el sustrato y la topografía, reintroducir casi todas las especies</td></tr>
        </table></div>
        <figure class="fig"><img src="img/slides/res_regeneracion.jpg" alt="Continuo de enfoques según potencial de regeneración natural" loading="lazy"><figcaption>Continuo de enfoques de restauración según el potencial de regeneración natural (Gann et al., SER). (Clase 7)</figcaption></figure>
        <h4>Marco conceptual: la teoría ecológica detrás de la restauración (Palmer et al., 2006)</h4>
        <ul>
          <li><b>Ecosistemas:</b> ¿el sistema está en un estado irreversible? ¿Las trayectorias lo llevan a un estado alternativo?</li>
          <li><b>Poblaciones:</b> ¿qué fuentes de propágulos introducir? ¿La población persistirá? ¿Cuántas subpoblaciones hacen falta?</li>
          <li><b>Comunidades:</b> ¿qué ensamble persistirá? ¿En qué orden introducir las especies? ¿Qué aportan las redes tróficas? ¿Cómo excluir invasoras?</li>
          <li><b>Evolutiva:</b> ¿cómo se adaptarán los organismos a los ambientes restaurados?</li>
          <li><b>Paisaje:</b> ¿cómo influye la ubicación del sitio en su potencial de recuperación (conectividad, fuentes de semillas)?</li>
          <li><b>Macroecología:</b> ¿cómo interactúa el sitio con su contexto bioclimático?</li>
        </ul>`,
    },
    {
      id: "res-referencia",
      titulo: "Ecosistema de referencia y atributos de un ecosistema restaurado",
      html: `
        <h4>Ecosistema (o modelo) de referencia</h4>
        <p>Es el <b>estado aproximado que tendría el sitio en ausencia de degradación</b>, considerando los cambios ambientales pasados y previstos (como el cambio climático). Es un modelo del funcionamiento y la estructura que <b>guía las intervenciones</b> y es la vara para evaluar el éxito.</p>
        <p><b>¿Cómo se describe?</b></p>
        <ul>
          <li><b>Sitios de referencia:</b> ambientalmente similares, pero no alterados o mínimamente alterados. Conviene tener más de uno.</li>
          <li><b>Sitios degradados con distintos tiempos de recuperación</b> (una cronosecuencia).</li>
          <li><b>Información histórica:</b> descripciones, fotos, herbarios, y consulta a la comunidad local y a especialistas.</li>
        </ul>
        <p><b>Qué incluye el modelo:</b> características del sustrato, especies características, grupos funcionales, estructura de la vegetación, comunidades tróficas, ciclos de nutrientes, regímenes de disturbio, trayectorias sucesionales, requerimientos de hábitat, flujos de materia y energía y conectividad con el paisaje.</p>
        <h4>Los 6 atributos de un ecosistema restaurado (Gann et al., SER)</h4>
        <div class="tabla-wrap"><table class="tabla">
          <tr><th>Atributo</th><th>Qué se espera</th></tr>
          <tr><td><b>Ausencia de amenazas</b></td><td>Las amenazas de degradación directa (sobreexplotación, contaminación, invasoras, erosión) son prácticamente inexistentes.</td></tr>
          <tr><td><b>Condiciones físicas</b></td><td>Las condiciones físicas y químicas del suelo y del agua, y la topografía, permiten mantener el ecosistema.</td></tr>
          <tr><td><b>Composición de especies</b></td><td>Alta diversidad y abundancia de especies nativas características; especies indeseables mínimas o inexistentes.</td></tr>
          <tr><td><b>Diversidad estructural</b></td><td>Diversidad de etapas demográficas, niveles tróficos, estratos de vegetación, hábitats y heterogeneidad espacial.</td></tr>
          <tr><td><b>Función del ecosistema</b></td><td>Crecimiento y productividad, ciclado de nutrientes, descomposición, interacciones entre especies, resiliencia y regímenes de perturbación natural adecuados.</td></tr>
          <tr><td><b>Intercambios externos</b></td><td>Integración en el paisaje mediante flujos e intercambios bióticos y abióticos.</td></tr>
        </table></div>
        <figure class="fig chica"><img src="img/slides/res_atributos.jpg" alt="Atributos de un ecosistema restaurado" loading="lazy"><figcaption>Los seis atributos (Gann et al., SER). Se evalúan con el sistema de “5 estrellas” de recuperación.</figcaption></figure>
        <div class="ejemplo"><b>¿Cómo se mide el éxito en la práctica? (Ruiz-Jaen y Aide, 2005)</b>
          <p>Revisaron los proyectos publicados en <i>Restoration Ecology</i> y encontraron que ninguno medía todos los atributos de la SER. La mayoría usaba tres grupos de variables: <b>diversidad</b> (riqueza, abundancia), <b>estructura de la vegetación</b> (cobertura, densidad, biomasa) y <b>procesos ecológicos</b> (ciclado de nutrientes, interacciones). Recomiendan medir <b>al menos dos variables de cada grupo</b> y comparar con <b>más de un sitio de referencia</b>.</p>
        </div>`,
    },
    {
      id: "res-planificar",
      titulo: "Cómo planificar la restauración: los 4 pasos",
      html: `
        <p>Planificar <b>no es solo decidir qué técnica aplicar o qué especie plantar</b>. Es construir una <b>trayectoria de recuperación</b> respondiendo cuatro preguntas: ¿de dónde se parte?, ¿hacia dónde se quiere llegar?, ¿qué acciones llevan a ese estado? y ¿cómo se sabrá si se está avanzando?</p>
        <figure class="fig chica"><img src="img/slides/res_pasos.jpg" alt="Pasos para planificar la restauración" loading="lazy"><figcaption>Los cuatro pasos para planificar la restauración. (Clase 7)</figcaption></figure>
        <h4>Paso 1A: identificar los sitios</h4>
        <ul>
          <li><b>Criterios para seleccionar:</b> físicos, ecológicos, sociales, legales y logísticos.</li>
          <li><b>Criterios para priorizar</b> (cuando no alcanzan los recursos para todo): mayor probabilidad de éxito, mayor nivel de degradación, mayores beneficios y mayor cantidad de beneficiarios.</li>
          <li>Se puede hacer una <b>evaluación multicriterio espacial en SIG</b>: producir o reunir capas (digitalizadas, derivadas de imágenes, secundarias), llevarlas a la misma proyección, extensión y resolución, <b>normalizarlas</b> (0-1 o en categorías) e integrarlas en un índice de prioridad.</li>
        </ul>
        <div class="ejemplo"><b>Caso Cuenca Matanza-Riachuelo</b>
          <p>Se priorizaron riberas para rehabilitar combinando criterios ecológicos (degradación, resistencia de exóticas, restricciones hidrológicas) y sociales (densidad de población, oportunidad de recreación, presión urbana). Además, se hicieron encuestas de percepción a la comunidad (Guida Johnson y Zuleta, 2017).</p>
        </div>
        <h4>Paso 1B: caracterizar los sitios (línea de base)</h4>
        <ul>
          <li>Geomorfología y suelos.</li>
          <li>Composición, estructura y funcionamiento: especies nativas o exóticas, amenazadas e invasoras, capacidad de regeneración natural, especies con potencial para recolonizar (conectividad funcional).</li>
          <li>Factores de degradación y amenazas externas.</li>
          <li>Ambiente humano: historia de uso, actores sociales que pueden amenazar o cooperar, y valores, opiniones y actitudes de la comunidad.</li>
        </ul>
        <div class="tabla-wrap"><table class="tabla">
          <tr><th>Evidencias de degradación</th><th>Causas</th></tr>
          <tr><td>Cárcavas, sedimentos movilizados, suelo compactado, salinizado, presencia de exóticas, ausencia de nativas, contaminantes en concentraciones riesgosas</td><td>Erosión hídrica o eólica, sobrepastoreo, mal manejo agrícola, invasiones biológicas, tala, incendios, contaminación</td></tr>
        </table></div>
        <h4>Paso 2: definir los objetivos</h4>
        <p>Deben ser <b>precisos, medibles y factibles</b> (en tiempo y recursos) y considerar las <b>restricciones</b> (Miller y Hobbs, 2007):</p>
        <div class="cols">
          <div class="col"><h5>Ecológicas</h5><p>¿Qué es <b>posible</b>? Según el clima, el suelo, el paisaje y la biodiversidad presente.</p></div>
          <div class="col"><h5>Sociales</h5><p>¿Qué es <b>aceptable</b>? Según los valores, la percepción y los conocimientos de la comunidad local.</p></div>
          <div class="col"><h5>Económicas</h5><p>¿Qué es <b>realista</b>? Según el presupuesto, la relación costo-beneficio y la tecnología.</p></div>
        </div>
        <figure class="fig chica"><img src="img/slides/res_objetivos.jpg" alt="Restricciones ecológicas, sociales y económicas de los objetivos" loading="lazy"><figcaption>Los objetivos deben considerar las restricciones ecológicas, sociales y económicas (Miller y Hobbs, 2007). (Clase 7)</figcaption></figure>
        <p>Ejemplos de objetivos bien formulados: “reducir un <b>40 %</b> la erosión del suelo respecto de la condición inicial <b>dentro de 3 años</b>”; “aumentar un 70 % la cobertura de vegetación nativa en 5 años”; “incrementar un 50 % el uso recreativo en 3 años”.</p>
        <p><b>La dimensión social:</b> el éxito depende fuertemente de la aceptación y participación de la comunidad local. Los <b>actores sociales</b> son cualquier grupo o individuo que puede afectar el logro de los objetivos o verse afectado por él (organismos de gobierno, comunidades y organizaciones sociales, ONG, centros educativos, empresas, población local). Pueden amenazar o cooperar, con distintos niveles de influencia. Se busca una planificación <b>participativa</b> (co-construcción de objetivos), la apropiación local y la educación ambiental.</p>
        <h4>Paso 3: diseñar las medidas</h4>
        <p>Se basan en el <b>estado inicial</b> (¿qué barrera hay, abiótica o biótica?), el <b>modelo de referencia</b> y los <b>objetivos</b>. Las acciones deben:</p>
        <ul>
          <li>Abordar las <b>causas</b> de la degradación, no solo los síntomas.</li>
          <li>Considerar el potencial de <b>regeneración natural</b>.</li>
          <li>Favorecer los procesos de recuperación.</li>
          <li>Estar justificadas ecológica y técnicamente.</li>
          <li>Ser económicamente viables.</li>
          <li><b>Minimizar los riesgos</b> (¿qué puede salir mal?).</li>
        </ul>
        <p><b>Factibilidad:</b> conocimientos, presupuesto, personal y maquinaria, materiales, disponibilidad de plantas o semillas, cadenas de suministro, cronograma y estacionalidad, aspectos regulatorios. Ejemplo de clase: <b>fitorremediación</b> de suelos salinizados en oasis cuyanos.</p>
        <h4>Paso 4: seleccionar los criterios de éxito</h4>
        <p>Deben ser <b>específicos, medibles y alcanzables</b>. Responden: ¿cuáles son los resultados esperados? ¿Qué variables informan el éxito o fracaso? ¿A partir de qué valores hay que aplicar medidas adicionales? ¿Con qué frecuencia monitorear?</p>
        <div class="tabla-wrap"><table class="tabla">
          <tr><th>Objetivo</th><th>Medidas</th><th>Indicadores</th></tr>
          <tr><td>Reducir la erosión</td><td>Revegetación con nativas, barreras</td><td>Pérdida de suelo (t/ha/año), % de suelo desnudo</td></tr>
          <tr><td>Aumentar la vegetación nativa</td><td>Plantación, control de exóticas</td><td>% de cobertura nativa, riqueza de nativas</td></tr>
          <tr><td>Aumentar el hábitat de una especie</td><td>Recuperar la vegetación, crear refugios</td><td>Superficie de hábitat (ha), presencia de la especie</td></tr>
          <tr><td>Mantener la productividad y reducir la extracción</td><td>Cupos o períodos de aprovechamiento</td><td>Rendimiento e intensidad de extracción (kg/ha/año)</td></tr>
          <tr><td>Reducir la población expuesta a inundaciones</td><td>Restaurar humedales, reconectar cauces</td><td>% de población expuesta, superficie y frecuencia de inundación</td></tr>
          <tr><td>Aumentar el uso recreativo</td><td>Senderos, infraestructura de bajo impacto</td><td>Visitantes por período, sitios recreativos funcionales</td></tr>
        </table></div>
        <div class="idea"><b>Gestión adaptativa</b>
          <p>Es un ciclo de planificar → implementar → monitorear → evaluar → ajustar. Permite aprender de la experiencia, incorporar nueva información y mejorar continuamente los resultados.</p>
        </div>`,
    },
    {
      id: "res-biocostras",
      titulo: "Caso: restauración con biocostras (Monte central)",
      html: `
        <p>Las <b>biocostras</b> (costras biológicas del suelo) son asociaciones de organismos que viven en los primeros milímetros del suelo:</p>
        <ul>
          <li><b>Cianobacterias:</b> dan estructura, producen exopolisacáridos (EPS, un “pegamento” que une las partículas) y fijan N.</li>
          <li><b>Musgos:</b> aportan biomasa y estructura 3D.</li>
          <li><b>Líquenes:</b> aportan rugosidad y estabilidad.</li>
          <li><b>Hepáticas.</b></li>
        </ul>
        <div class="idea"><b>Potencial para restaurar</b>
          <p>Fijan N atmosférico, lo que <b>fertiliza</b> el suelo. Estabilizan el suelo, lo que <b>previene la erosión</b> y el polvo atmosférico. Aportan biomasa y refugio, lo que permite <b>colonizar y restaurar</b> suelos.</p>
        </div>
        <h4>Desierto de Tengger (China)</h4>
        <p>Las dunas móviles avanzaban de 2 a 4 m por año sobre un ferrocarril. Desde 1950 se fijan con <b>tableros de paja</b> (“checkerboards”, cuadrículas que frenan la arena y acumulan finos y materia orgánica) e inoculación de cianobacterias cultivadas, en 500 m a cada lado de las vías a lo largo de 70 km. Hay una cooperación NSF China-CONICET. La lección: <b>es posible restaurar con políticas científicas sostenidas, trabajo constante y un horizonte claro</b>.</p>
        <h4>Monte central y piedemonte mendocino, siguiendo los 4 pasos</h4>
        <ol class="pasos">
          <li><b>Caracterizar:</b> el agua de la cordillera llega por ríos y napas a la llanura. Hay sitios de piedemonte (con umbrías y solanas), dunas (crestas e intermédanos) y planicies. Se encontraron 43 taxones en 432 muestras (24 líquenes, 12 musgos, 5 cianobacterias). <b>El pastoreo y el fuego destruyen las costras.</b> En sitios quemados, las rocas, las pendientes y la exposición sur favorecen a los musgos.</li>
          <li><b>Objetivos y restricciones:</b> estabilizar el suelo, facilitar la emergencia y el crecimiento de pastos y fertilizar. Las restricciones son <i>ecológicas</i> (por ejemplo, el paleocanal), <i>sociales</i> (el manejo de la Reserva de la UNCuyo en el piedemonte) y <i>económicas</i>.</li>
          <li><b>Medidas:</b> propagar biocostras controlando la luz, el riego y la sal. El inóculo <b>triturado</b>, sembrado a 1 mm de profundidad, funcionó mejor, con hasta 80 % de cobertura en macetas en 19 meses. A futuro: aislar cianobacterias con funciones específicas (EPS, heterocistos para fijar N), endurecerlas antes de llevarlas al campo e inocular con sombreado.</li>
          <li><b>Criterios de éxito:</b> cobertura, índice de estabilidad del suelo, diversidad, criterios sociales.</li>
        </ol>
        <p><b>Resultados:</b> un año después de la siembra, la biocostra <b>estabiliza el suelo</b> (García et al., 2021) y <b>aumenta la emergencia y la biomasa de pastos</b>, además de transferirles N (Corvalán et al., 2021). La <b>restauración pasiva es lenta</b>: en clausuras de 30 × 30 m en dunas, la recuperación de las costras era escasa después de 7 años.</p>
        <p><b>Aplicaciones en Mendoza:</b> minería y energía (reducir el polvo), ganadería (recuperar suelos y aumentar pastos) e incendios (biocostras como indicadoras y herramienta de restauración).</p>`,
    },
  ],
  practica: [
    {
      p: "Ñacuñán: se propone ampliar la Reserva incorporando campos ganaderos vecinos y restaurar bosques de algarrobo en ellos. ¿Qué aspectos debería incluir el plan? (Parcial 2022)",
      r: `<p>Organizarlo con los <b>4 pasos</b>:</p>
        <ol>
          <li><b>Identificar y caracterizar los sitios.</b> Seleccionar y priorizar los campos con criterios físicos, ecológicos, sociales, legales y logísticos (por ejemplo, un SIG multicriterio que priorice cercanía a la reserva como fuente de semillas, menor degradación y acceso). Hacer la <b>línea de base</b>: cobertura y densidad de algarrobos y renovales, otras leñosas y pastos, suelo desnudo, erosión, costras biológicas, carga ganadera, historia de uso (tala, fuego) y actores sociales (puesteros, productores, guardaparques). El <b>ecosistema de referencia</b> es el bosque de algarrobo dentro de Ñacuñán, con cerca de 50 años de exclusión ganadera.</li>
          <li><b>Definir objetivos</b> precisos, medibles y factibles, considerando las restricciones ecológicas (aridez, crecimiento lento del algarrobo), sociales (la ganadería como sustento) y económicas. Por ejemplo: “aumentar 50 % la densidad de renovales de algarrobo y reducir 30 % el suelo desnudo en 5 años”.</li>
          <li><b>Diseñar medidas</b> que ataquen las <b>causas</b>: exclusión o ajuste de la carga ganadera (clausuras, que es restauración pasiva y aprovecha la regeneración natural), protección de renovales, enriquecimiento con plantines de semillas locales donde no hay regeneración, control de la erosión, eventualmente biocostras, y prevención de incendios. Evaluar la factibilidad: vivero, riego de establecimiento, presupuesto.</li>
          <li><b>Criterios de éxito y monitoreo:</b> indicadores como la densidad y supervivencia de renovales, la cobertura leñosa y herbácea, el % de suelo desnudo, la riqueza de especies nativas y el NDVI (que permite monitorear desde satélites). Comparar con los sitios de referencia, fijar la frecuencia de monitoreo y aplicar gestión adaptativa.</li>
        </ol>
        <p>Incluir la <b>dimensión social</b>: acuerdos con los productores (alternativas productivas o compensaciones), participación y educación ambiental.</p>`,
    },
    {
      p: "Diferencia entre restauración, rehabilitación y reclamación o creación.",
      r: `<p><b>Restauración:</b> recuperar la estructura y la función del ecosistema hacia el de referencia. <b>Rehabilitación:</b> recuperar sobre todo funciones (productividad, protección del suelo), sin recuperar necesariamente la composición original. <b>Reclamación o creación:</b> generar un ecosistema distinto del original en un sitio muy alterado (como un humedal en una ex cantera).</p>`,
    },
    {
      p: "¿Qué es el ecosistema de referencia y cómo se construye?",
      r: `<p>Es el modelo del estado que tendría el sitio sin degradación, considerando los cambios ambientales pasados y previstos. Guía las intervenciones y es la vara para medir el éxito. Se construye con sitios de referencia similares y poco alterados, con sitios en distintas etapas de recuperación, con información histórica y con consultas a la comunidad local y a especialistas.</p>`,
    },
    {
      p: "¿Por qué a veces excluir el disturbio (restauración pasiva) no alcanza?",
      r: `<p>Porque el sistema puede haber cruzado un <b>umbral</b> hacia un estado alternativo estable. Si hay barreras <b>bióticas</b> (no quedan semillas, dominan las invasoras) o <b>abióticas</b> (suelo erosionado, compactado o salinizado), la regeneración natural no ocurre o es muy lenta. Entonces hacen falta intervenciones activas: siembra o plantación, control de invasoras, enmiendas, control de la erosión. Ejemplo: en las clausuras en dunas del Monte, las biocostras casi no se recuperaron en 7 años.</p>`,
    },
    {
      p: "Mencioná los 6 atributos de un ecosistema restaurado.",
      r: `<p>Ausencia de amenazas · condiciones físicas · composición de especies · diversidad estructural · función del ecosistema · intercambios externos.</p>`,
    },
  ],
  glosario: [
    ["Restauración ecológica", "Proceso deliberado de asistir la recuperación de un ecosistema degradado hacia su referencia."],
    ["Rehabilitación", "Recuperar funciones sin buscar necesariamente la composición original."],
    ["Ecosistema de referencia", "Modelo del estado del sitio sin degradación, que guía y evalúa la restauración."],
    ["Umbral", "Límite de degradación tras el cual el sistema no se recupera sin intervención."],
    ["Restauración pasiva", "Eliminar la causa de la degradación y dejar actuar a la regeneración natural."],
    ["Línea de base", "Caracterización del estado inicial del sitio."],
    ["Gestión adaptativa", "Ciclo de monitorear, aprender y ajustar las medidas."],
    ["Actor social", "Grupo o individuo que puede afectar el proyecto o verse afectado por él."],
    ["Biocostra", "Comunidad de cianobacterias, musgos, líquenes y hepáticas en la superficie del suelo."],
  ],
  biblio: [
    "SER (2004). Principios de SER International sobre la restauración ecológica.",
    "Gann, G. D. et al. Estándares internacionales para la práctica de la restauración ecológica (SER Standards, versión en español).",
    "Ruiz-Jaen, M. C. y Aide, T. M. (2005). Restoration success: how is it being measured? <i>Restoration Ecology</i> 13(3): 569-577.",
    "Viglizzo, E. F. y Jobbágy, E. (2010). Expansión de la frontera agropecuaria en Argentina y su impacto ecológico-ambiental. INTA.",
  ],
});
